#!/usr/bin/env node
// Control arm: ONE isolated chat, blunt prompt, no lenses, no blindness structure.
// Same isolation flags as run.mjs so the only difference is the protocol, not the context.
// Usage: node control.mjs <case.yaml> [--model opus|sonnet]
// Output: runs/<case_id>-<version>-<timestamp>-CONTROL/control.md

import { spawn } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const caseFile = args.find((a) => !a.startsWith('--'));
const model = args.includes('--model') ? args[args.indexOf('--model') + 1] : 'opus';
if (!caseFile) { console.error('usage: node control.mjs <case.yaml> [--model opus|sonnet]'); process.exit(1); }

const caseText = readFileSync(caseFile, 'utf8');
const caseId = (caseText.match(/^case_id:\s*(\S+)/m) || [])[1] || 'CASE';
const version = (caseText.match(/^version:\s*(\S+)/m) || [])[1] || 'v0';
const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const outDir = join(ROOT, 'runs', `${caseId}-${version}-${stamp}-CONTROL`);
mkdirSync(outDir, { recursive: true });

const sandbox = mkdtempSync(join(tmpdir(), 'pdde-ctl-'));
writeFileSync(join(sandbox, 'isolation.json'), JSON.stringify({ hooks: {}, enabledPlugins: {}, disableAllHooks: true }));
const sysFile = join(sandbox, 'sys.md');
writeFileSync(sysFile, 'You are a brutally honest business advisor. No tools, no web. Judge only the text you are given.');

const prompt = `Here is my business idea with the evidence I have. Attack it. Be brutally honest.
Then tell me straight whether I should do it.

End with exactly one line: VERDICT: KILL | HOLD | VALIDATE | ADVANCE
(KILL = drop it; HOLD = something outside the idea must be resolved first; VALIDATE = do not build yet,
run cheap tests first and say which; ADVANCE = the evidence already supports the next step.)

${caseText}`;

const cli = process.platform === 'win32' ? 'claude.cmd' : 'claude';
const child = spawn(cli,
  ['-p', '--tools', '', '--setting-sources', '', '--settings', join(sandbox, 'isolation.json'), '--strict-mcp-config',
   '--no-session-persistence', '--disable-slash-commands', '--model', model, '--output-format', 'stream-json', '--verbose',
   '--system-prompt-file', sysFile],
  { cwd: sandbox, shell: process.platform === 'win32', env: { ...process.env, CLAUDE_CODE_DISABLE_AUTO_MEMORY: '1', CLAUDE_CODE_DISABLE_CLAUDE_MDS: '1' } });

let out = '';
const t0 = Date.now();
process.stdout.write(`💬 one blunt chat on ${caseId} ${version} (${model}) `);
const tick = setInterval(() => process.stdout.write('.'), 2000);
child.stdout.on('data', (d) => { for (const l of d.toString().split('\n')) { try { const ev = JSON.parse(l); if (ev.type === 'result' && ev.result) out = ev.result; } catch {} } });
child.stdin.end(prompt);
child.on('close', () => {
  clearInterval(tick);
  rmSync(sandbox, { recursive: true, force: true });
  writeFileSync(join(outDir, 'control.md'), out);
  const v = (out.match(/VERDICT:\s*(KILL|HOLD|VALIDATE|ADVANCE)/) || [])[1] || 'UNKNOWN';
  console.log(`\n${{ KILL: '💀', HOLD: '⏸️', VALIDATE: '🧪', ADVANCE: '🚀' }[v] || '❓'} CONTROL VERDICT: ${v}  (${((Date.now() - t0) / 1000).toFixed(0)}s)\n${outDir}`);
});
