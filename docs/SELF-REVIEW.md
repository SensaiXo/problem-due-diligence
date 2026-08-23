# Case PDDE-SELF-001 — the engine reviewed its own release plan

Date: 2026-08-18. Method: this repo's four blind reviewers, run on a frozen payload
describing the engine's planned public release ("working, tested due-diligence engine").
Result: **4 / 4 BLOCKING. Verdict: HOLD.** The launch was stopped and rebuilt on this
review's findings.

## The five converging blockers (found independently by 2+ blind reviewers)

1. **The tests were of a different product.** All executed evidence came from the method's
   original domain (document review). The business engine had run on zero real cases.
   "Tested" would have been true only by quietly switching which product "it" meant.
2. **The promoted engine didn't exist.** The public repo was empty; the case template,
   synthesiser, and evidence rules were unwritten. A one-minute `git clone` would have
   refuted the promo.
3. **The design's own gate was being skipped.** The concept required three manual test
   cases before productizing; none had run.
4. **The differentiators were prose, not mechanisms.** "Frozen cases, blind reviews,
   reproducible reruns, hard gates" had no enforcement. Fixed by: git-commit freezing,
   the append-only run ledger, versioned reruns, and the evidence rules now in this repo.
5. **Self-curated evidence in, confident verdict out.** Nothing stopped invented evidence
   from producing a traced, confident ADVANCE — the exact failure the product claims to
   prevent. Mitigated (not solved) by the mandatory provenance + limit fields and the
   disconfirming-evidence rule; stated openly in the README.

## Why this document is in the repo

It is the engine's own first output that mattered: it killed its author's launch plan.
If you want to know what a run feels like from the receiving end — this is it. The
follow-up: the blockers above became this repo's structure, the three test cases became
the pilot backtest ([../eval/SUMMARY.md](../eval/SUMMARY.md)), and the release happened
only after that.
