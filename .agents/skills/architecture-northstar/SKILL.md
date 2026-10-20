---
name: architecture-northstar
description: >-
  Enforces architectural standards, slide anatomy, layout guidelines, verification
  protocols, and git procedures for Trainocate Alibaba Cloud courseware presentations.
  Use whenever creating, updating, reviewing, or refactoring slide modules in this repository.
---

# Architectural North Star Skill

This skill enforces the official **Architectural North Star & Standard Template Specification** for developing and maintaining interactive, web-based HTML presentations across the Trainocate **Alibaba Cloud Professional: Cloud Architect** curriculum (`01_Overview`, `02_ECS`, `03_VPC`, `04_SLB`, `05_OSS`, `06_RDS`, `07_AutoScaling`, `08_CDN`, `09_Security Products`).

Every module, slide deck, script, and asset in this repository must strictly adhere to these standards without exception.

---

## ⚡ Quick Operational Runbook

When requested to create, edit, reorder, or update any slide deck in this repository, follow this execution sequence:

```
┌────────────────────────────────────────────────────────┐
│ 1. INSPECT & SCOPE                                     │
│    - Review requirements & official documentation      │
│    - Check existing slide count and category structure │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│ 2. AUTHOR / REFACTOR SLIDES                            │
│    - Adhere strictly to Slide Anatomy (Slides 1..N)    │
│    - Follow Unconfined & Borderless Visual Standard    │
│    - Quiz solutions in strict A -> B -> C -> D order   │
│    - Sync Slide 2 Agenda with all slide categories     │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│ 3. AUTOMATED VERIFICATION                              │
│    - Run `python tools/verify_<module>_deck.py`        │
│    - Zero tag mismatches, zero broken images           │
│    - Slide counter & category counts 100% valid        │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│ 4. GIT COMMIT & PUSH (MANDATORY ON EVERY PROMPT)       │
│    - Strict No-Backup Policy: NEVER create *.bak/*.old │
│    - Commit changes with descriptive message           │
│    - Push immediately to `origin main`                 │
└────────────────────────────────────────────────────────┘
```

---

## 🛑 Absolute Non-Negotiable Rules

1. **Unconfined & Borderless Diagrams ("Tidak Dikekang Kotak")**:
   - Architectural diagrams, process flows, topology SVGs, and screenshots must **never** be enclosed inside visible bounding boxes, borders, cards, or cages (`border: none; box-shadow: none; background: transparent;`).
   - Allow diagrams to expand generously (`max-height: 400px–480px` in two-column layouts; `200px–280px` for top/center diagrams) while keeping within the slide viewport bounds (`min(88vh, 800px)`) with zero vertical scroll.

2. **Quiz Solution Natural Order (Strict A -> B -> C -> D)**:
   - In Solution & Architectural Analysis slides (Slides N-5, N-3, N-1), the 2x2 options grid **MUST preserve Option A at slot 1, Option B at slot 2, Option C at slot 3, Option D at slot 4**.
   - **NEVER** move the correct option to slot 1 or reorder options. Mark correct option as `.analysis-item.correct` and incorrect options as `.analysis-item.incorrect`.

3. **Slide 2 Agenda Synchronization Mandate**:
   - Section names in Slide 2 `<ol class="agenda-grid">` establish the single source of truth.
   - Any rename or addition must be synchronized simultaneously across:
     - `<li class="agenda-item">` in Slide 2
     - `<div class="slide-category">Section X: [Name]</div>` on each slide
     - `data-category="[Name]"` on each slide section
   - Interactive Quiz slides (`data-category="Practice Quiz"`) and the completion slide (`data-category="Summary"`) are strictly exempt from section numbering.

4. **Slide 3 Simplicity & Official SVG Icon**:
   - Follow Page 3 of original courseware: clear service definition, value proposition, official vector service icon (`.svg` in Alibaba Orange `#FF6A00`), and 5 core architectural pillars.
   - No subtitle (`<p class="subtitle">`) on Slide 3 to maintain breathing room.

5. **No Standalone Callouts / Tables for Single Facts**:
   - Do **NOT** create standalone callout banners or isolated tables for a single constraint or rule.
   - Integrate single-sentence facts directly into primary content cards as bullet points (`<li><strong>Rule:</strong> ...</li>`).

6. **Sequential Execution Lists (`<ol class="step-list">`)**:
   - Sequential processes must use `<ol class="step-list">`.
   - Never combine bullet points with manual numbers (e.g. `<ul><li><strong>1. ...</strong></li></ul>`). Numbering is rendered natively by the ordered list marker.

7. **Strict No-Backup Policy**:
   - **Never create backup files or directories** (`*.bak`, `*.old`, `*.orig`, `*_backup`).
   - All history, branching, and rollbacks are handled exclusively through Git.

8. **Mandatory Git Commit & Push on Every Prompt**:
   - Every single user prompt turn must end with:
     ```bash
     python tools/verify_<module>_deck.py  # Must pass 100%
     git add -A
     git commit -m "Descriptive summary of changes"
     git push origin main
     ```

9. **Tone, Language & Terminology**:
   - English language throughout all slides, code, and notes.
   - Prohibited terms: `"Official Architecture:"`, `"Official Diagram:"`, `"Critical Exam Rule"`, `"Trainer Prompt:"`.
   - Use objective architectural phrasing: `Architectural Principle`, `High Availability Rule`, `Resource Boundary`.
   - Use modern terminology: `"Spot Instances"`, not `"Preemptible (Spot) Instances"`.

---

## 📚 Detailed Reference Manuals

For deep specifications, code blueprints, and CSS implementations, consult the modular references:

- [Core Principles & Git Protocols](./references/core-principles.md) — Sourcing, tone, language, no-backup policy, git commit/push rules.
- [Slide Anatomy & Progression](./references/slide-anatomy.md) — Slide 1 to Slide N structure, agenda sync, unconstrained slide count principle.
- [Visual, Layout & CSS Standards](./references/visual-and-css-rules.md) — Unconfined diagram sizing, CSS variables (`--font-delta: 2pt`), semantic cards, ordered step lists, zero footer.
- [Scenario Quiz Mechanics](./references/quiz-and-scenarios.md) — 3 Scenarios = 6 Slides, question layout, solution grid with strict A-B-C-D sequence.
- [Project Directory Architecture & Hosting](./references/project-structure-and-hosting.md) — Isolation of `dist/`, zero HTML in root, top header navigation structure.
- [Verification Suite & Maintenance](./references/verification-and-maintenance.md) — Writing and executing verification scripts, automated checks, curriculum maintenance.

---

## 🛠️ Executable Helpers

- Run full suite verification across all decks:
  ```bash
  python .agents/skills/architecture-northstar/scripts/verify-all.py
  ```
- Or run module-specific verification:
  ```bash
  python tools/verify_ecs_slides.py
  python tools/verify_rds_deck.py
  python tools/verify_vpc_deck.py
  ```
