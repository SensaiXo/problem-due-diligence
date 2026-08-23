# Evidence summary (public)

The underlying cases are one operator's real business decisions (pricing, client counts,
audience size) and stay private. What can be stated:

| What | n | Result | Limit |
|---|---|---|---|
| Method benchmark, code/document review (original domain) | 5 commits | up to 14 issues vs 1 on claims-heavy diffs; lost on plain code | different domain |
| Backtests, business decisions | 4 (3 failed, 1 held) | 4/4 verdicts in accepted set; real reason found blind 4/4 | reconstructed and scored by the interested party; one model family |
| Control: one blunt chat, same isolation | same 4 | 3/4 | ties the engine on 3; both miss the same case the same way |
| Self-review of the launch plan | 2 runs | 4/4 BLOCKING both times (HOLD, then VALIDATE) | the author's own plan |
| Blindness proof (`test/blindness.mjs`) | every runner change | passes: zero tools, no project files, no other reports reach a reviewer | proves isolation, not judgement |
| Run-to-run variance | 1 case, 2 runs | KILL, then VALIDATE | run twice before acting |

Claims this supports: "as reliable as one blunt chat on verdicts, with a convergence signal,
four distinct lenses, and an enforced audit trail." Claims it does not support: "better than
a chat", "accurate", any percentage.
