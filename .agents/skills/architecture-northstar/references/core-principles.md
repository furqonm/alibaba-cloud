# Reference: Core Principles & Git Protocols

This reference details the foundational guidelines, terminology constraints, and operational protocols governing all courseware modules in this repository.

---

## 1. Information Sourcing & Grounding

1. **Official Sources Only**:
   - Original PDF courseware in `materials/` (dated circa 2022) serves as a baseline for topics and flow, but often contains deprecated products, older quotas, and superseded features.
   - All factual specifications, instance types, generation metrics, limits, and architecture diagrams must be verified against current **official Alibaba Cloud documentation (`alibabacloud.com/help`)**.
   - Blog posts, forums, and unverified third-party summaries are strictly forbidden as reference sources.

2. **Annual Curriculum Maintenance**:
   - Ground any new hardware or engine updates (e.g., 9th/10th Gen ECS, CIPU architectures, PolarDB serverless, ApsaraDB RDS latest minor releases) in official release notes.
   - Preserve foundational architectural concepts while updating technical specs, memory ratios, and storage tier nomenclature.

---

## 2. Language, Tone & Phrasing Standards

1. **Strictly English**:
   - All user interface elements, slide content, titles, code snippets, notes, and technical explanations must be in English.
   - Responses in chat with the user may be in Indonesian, but all repository artifacts, commits, code, and slides remain in English.

2. **Prohibited Defensive Phrases**:
   - **Never** prefix headings, captions, or descriptions with `"Official Architecture:"` or `"Official Diagram:"`. The presentations represent official courseware; insisting that a diagram is "official" conveys insecurity and creates visual noise.

3. **Prohibited Exam & Trainer Phrasing**:
   - **Never** use `"Critical Exam Rule"` or similar exam-fixated labels.
   - Instead, express architectural realities with objective engineering terminology:
     - `Architectural Principle`
     - `High Availability Rule`
     - `Storage Innovation`
     - `Resource Boundary`
     - `Strict Architecture Constraint`
   - **Never** add `"Trainer Prompt:"` boxes or notes in slides instructing the trainer what to say. Explaining, elaborating, and lecturing is strictly the trainer's role.

4. **Standardized Terminology**:
   - Use current official service terms:
     - Use `"Spot Instances"` (not `"Preemptible (Spot) Instances"`).
     - Use `"ApsaraDB for RDS"` or `"ApsaraDB RDS"`.
     - Use `"Server Load Balancer (SLB)"` with clear modern distinctions (ALB, NLB, CLB, GWLB).
     - Use `"Cloud Enterprise Network (CEN)"` and `"Transit Router (TR)"`.

---

## 3. Strict No-Backup Policy

To ensure repository cleanliness and prevent dead code or duplicate files:
- **Never create backup files or backup directories** (e.g., `*.bak`, `*.old`, `*.orig`, `*_backup/`, `backup/`, or numbered temporary files like `index_v2.html`).
- All versions, rollback capability, and code review history are natively handled by **Git version control**.
- If an edit fails, use `git restore` or `git checkout` instead of cluttering the workspace with manual backups.

---

## 4. Mandatory Git Commit & Push Protocol

Every single user prompt turn must conclude with an automated commit and push to the remote repository.

### Workflow:
1. **Pre-commit Verification**:
   Execute the verification test suite to ensure 100% compliance:
   ```bash
   python tools/verify_<module>_deck.py
   ```
2. **Stage All Changes**:
   ```bash
   git add -A
   ```
3. **Commit with Clear Message**:
   Follow conventional commit style:
   ```bash
   git commit -m "feat(ecs): update instance naming convention and failover slides"
   ```
4. **Push to Remote**:
   ```bash
   git push origin main
   ```
