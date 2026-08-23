# Evidence-pack rules

The evidence pack is the engine's weakest point, because the person who wants an ADVANCE is
usually the person writing it. These rules exist so a verdict traced to evidence means
something. The engine cannot detect invented evidence — these rules make invention costly and
auditable, they do not make it impossible. Say that in any material that quotes a verdict.

1. **Only things that happened.** An evidence item describes an event (someone paid, said,
   did, clicked, wrote), never an opinion or forecast. Opinions belong in `claimed_problem`
   and `critical_unknowns`.
2. **Every item has provenance.** Source, date, who collected it, how many people it covers.
   An item missing provenance is struck before the run, not judged charitably.
3. **Every item states its own limit.** The `limit:` field is mandatory. "10 people liked the
   post" must carry "attention only; none asked to pay."
4. **Type honestly on the ladder** (paid > costly-action > stated-intent > attention >
   analogy). Misclassification is the #1 self-deception: a friend's "I'd totally pay" is
   stated-intent from a biased sample, not demand.
5. **Disconfirming evidence is mandatory.** A pack with zero negative items is incomplete by
   definition. Include the strongest fact AGAINST the case that you know. If you know none,
   write "no disconfirming evidence gathered" — the reviewers will treat that as the gap it is.
6. **Freeze before run.** Commit the case; the run references the commit hash. Editing the
   case after seeing a verdict and rerunning is allowed and normal — but it is a NEW version,
   the old report stays in the record, and both appear in the run ledger.
7. **Anonymise before you paste.** Your evidence pack goes into consumer AI chats — four of
   them, so four times the exposure of asking once. Strip client names, company names,
   contract terms and anything a professional-secrecy or data-protection duty covers; "a
   30-person logistics firm in eastern Switzerland" reviews exactly as well as the real name.
   The people in your evidence did not consent to being pasted anywhere. If a fact only works
   with the identity attached, that is a sign it belongs in a conversation, not in a run.
8. **The run ledger is append-only.** `RUNS.md` in the repo root records every run: case ID,
   version, commit hash, date, verdict. A case whose ledger shows KILL → (edit) → ADVANCE is
   visible as exactly that. Deleting ledger lines breaks the only audit trail the engine has.
