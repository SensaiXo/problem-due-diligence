# Visual explainer — source of truth for the video

Everything a video, deck or landing page about this repo is allowed to say, with the run it
comes from. If a claim is not on this page, it has not been tested. Written 2026-08-20.

Storyboard first, then the reference tables. Narration lines are meant to be read aloud —
short, no jargon, no adjectives that a number could replace.

---

## Scene 1 — The problem, in one shot

**On screen:** a chat window. Someone types "is this a good business idea?" The reply scrolls:
warm, fluent, agreeable.

**Narration:** "Ask an AI whether your idea is good, and it will almost always say yes. It is
built to be helpful, not to talk you out of your most expensive mistake."

**The point:** the failure is not that the answer is wrong. It is that it is confident,
well-written, and arrives in two seconds — so it feels like validation.

---

## Scene 2 — What it costs

**On screen:** a calendar burning through three months. Then one afternoon highlighted.

**Narration:** "Most ideas die months later, when the market finally answers. This gets the
answer in an afternoon."

**Real number, from our own history:** one channel bet burned weeks of outreach before
reality answered. The cheapest test the engine prescribed for the same case was a half-day
desk check. Weeks of doing versus half a day of checking.

---

## Scene 3 — Rule one: freeze the question

**On screen:** a one-page document being written, then a padlock and a timestamp.

**Narration:** "You write the question down once. Who has the problem, in what moment, who
pays. Then you freeze it — because rewriting the question after a bad answer isn't checking,
it's shopping for a yes."

---

## Scene 4 — Rule two: evidence with its own limits

**On screen:** the evidence ladder, five rungs, top to bottom: **paid** / **costly action** /
**stated intent** / **attention** / **analogy**. Green, green, amber, red, red.

**Narration:** "Every fact you offer says where it came from, and what it does not prove. A
friendly yes in a meeting is politeness. Only money and costly effort are demand."

**Also required:** one piece of evidence that argues against you. A pack with zero
counter-evidence is incomplete by definition.

---

## Scene 5 — The four reviewers, working blind

**On screen:** four separate chat windows opening side by side, a wall between each.

**Narration:** "Four reviewers read the frozen page. None of them can see what the others
found. What two or more hit independently is the strongest signal the method produces."

| Reviewer | Its one question | What it hands back |
|---|---|---|
| Problem & premise | Real painful problem, or an interesting feature? | The competing explanation that makes your idea unnecessary |
| Use over time | What makes use number two happen after number one? | The point where people stop, and why |
| Roles & boundaries | Who feels it, decides, pays, blocks, carries the risk? | The moment those turn out to be different people |
| Evidence | Demand, or just attention and politeness? | Every claim held against the strongest fact you actually have |

---

## Scene 6 — One verdict, and the cheapest next test

**On screen:** four reports merging into one card. Four possible stamps: **DROP IT** /
**FIX SOMETHING FIRST** / **TEST, DON'T BUILD** / **GO AHEAD**.

**Narration:** "One verdict, plus the three cheapest real-world tests, each with a number
that counts as passing. Not an opinion about your idea — instructions for what to do on
Monday."

**Hard rule shown on screen:** you cannot turn four opinions into evidence. Agreement between
reviewers is agreement, not proof.

---

## Scene 7 — The proof, including the parts that hurt

**On screen:** a scoreboard that keeps going after the good numbers.

**Narration:** "Here is everything we tested, including what went against us."

| Test | Result | What it means |
|---|---|---|
| 3 past business decisions, outcomes sealed | 3 of 3 verdicts matched, 3 of 3 real reasons found blind | The method is not obviously broken |
| The same 3 cases through one ordinary chat | Also 3 of 3 | Four reviewers did **not** beat one honest question here |
| 5 code changes, 3 with a defect planted, 2 untouched | Both approaches caught 3 of 3 defects | Tie again on finding problems |
| The one sound untouched change | Four reviewers: pass, 4 of 4. One chat: blocked it | The difference is restraint, not detection |
| The engine reviewed its own launch plan | 4 of 4 said blocked; the launch was stopped and rebuilt | It works on its owner too |

**Narration over the last row:** "The first thing it ever killed was our own launch."

---

## Scene 8 — What it actually gives you

**On screen:** the same phrase typed twice. Left: "finds more problems." Right, replacing it:
**"doesn't cry wolf on good work."**

**Narration:** "We assumed the value was catching more. The test said otherwise: both
approaches caught everything planted. Where they split was on good work — the panel passed
it, the single reviewer manufactured a reason to stop."

**Say the limits out loud:** five changes, one run each, and the defects were planted by the
same person who wrote the reviewers. This is a first signal, not a rate.

---

## Scene 9 — The honest close

**On screen:** the ledger. Rows with a verdict, dates, and an outcome column still empty.

**Narration:** "Every run gets logged before reality answers, and nothing gets deleted. Ten
entries of your own beat any number on this page — including ours."

---

## Scene 10 — For your own problem

**On screen:** four different checkers assembling: an offer checker, a fact checker for
AI-written text, a decision checker, a handover checker.

**Narration:** "These four exist because of our problem. Yours is different. The same idea —
one question, clear rules, one verdict — pointed at the step in your business where mistakes
get expensive."

---

## Reference: what an agent actually is here

No installation, no service, no account. An agent is a page of instructions pasted into a
fresh chat. That is the whole product, and it is why the repo is text files.

Each reviewer prompt sets four things:
1. **One question only.** A reviewer that judges everything finds a little everywhere and
   the decisive thing nowhere.
2. **One input only.** The frozen page. No web, no repo, no memory of the others.
3. **A fixed output shape.** Finding, the assumption it challenges, the concrete loss, the
   cheapest test, severity.
4. **One terminal line.** PASS or BLOCKING. No hedging allowed at the end.

## Reference: claims that are allowed, and the ones that are banned

**Allowed**, each traceable to a run in this repo:
- caught every planted defect in the code benchmark, 3 of 3, both approaches
- passed a real, correct change 4 out of 4 where a single reviewer blocked it
- matched reality on 3 sealed business decisions, and named the real reason each time
- blocked its own author's launch plan, 4 reviewers out of 4

**Banned**, and why:
- "100% accurate" — three cases is not a rate; this is the exact error the method exists to
  catch, and saying it would disqualify us
- "guarantee" — nothing here guarantees an outcome; only the prescribed tests produce proof
- "four blind reviewers beat one chat" — tested twice, tied both times on detection
- "proven" — one benchmark in an adjacent domain plus two pilots is not proof
- any percentage derived from fewer than about thirty runs

## Reference: numbers a viewer can hold

- **4** reviewers, blind to each other
- **5** chats, no installation
- **1** afternoon, versus months of building
- **3 of 3** sealed decisions matched
- **3 of 3** planted defects caught
- **4 of 4** reviewers correctly passed good code that a single reviewer blocked
- **1** launch stopped: ours
