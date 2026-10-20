# Reference: Scenario Quiz Mechanics

Every module HTML presentation concludes with **3 real-world architect scenario challenges**, comprising exactly **6 slides** (Slides N-6 through N-1).

---

## 1. Structural Progression

```
[Slide N-6]  Practice Scenario 1 (Question & Options)
[Slide N-5]  Scenario 1: Solution & Architectural Analysis (A -> B -> C -> D)
[Slide N-4]  Practice Scenario 2 (Question & Options)
[Slide N-3]  Scenario 2: Solution & Architectural Analysis (A -> B -> C -> D)
[Slide N-2]  Practice Scenario 3 (Question & Options)
[Slide N-1]  Scenario 3: Solution & Architectural Analysis (A -> B -> C -> D)
```

Both question and solution slides carry the category attribute:
```html
data-category="Practice Quiz"
```
Practice quiz slides are strictly exempt from section numbers (do not use `Section X:` in `<div class="slide-category">`).

---

## 2. Question Slide Blueprint (Slides N-6, N-4, N-2)

### Rules:
- Contains **only** the scenario narrative and four options (A, B, C, D).
- **Zero** answers, hints, or spoilers visible.
- **No** trainer prompts or speaker notes.

### HTML Blueprint:
```html
<section class="slide" data-category="Practice Quiz">
  <div class="slide-category">Interactive Quiz • Scenario 1</div>
  <h2>Practice Scenario 1: [Scenario Title]</h2>
  
  <div class="quiz-single-card">
    <div class="quiz-single-question">
      <span class="quiz-number">Question 1</span>
      <span>An enterprise e-commerce platform experiences sudden traffic spikes during flash sales. Database reads are overwhelming the primary instance. Which architectural approach provides the most scalable, cost-efficient solution with zero application write changes?</span>
    </div>
    <ul class="quiz-single-options">
      <li class="quiz-single-option"><span class="quiz-single-letter">A</span><span>Migrate the entire workload to a distributed NoSQL database.</span></li>
      <li class="quiz-single-option"><span class="quiz-single-letter">B</span><span>Deploy ApsaraDB RDS Read Replicas and enable Database Proxy with Read/Write Splitting.</span></li>
      <li class="quiz-single-option"><span class="quiz-single-letter">C</span><span>Upgrade the primary instance to an ultra-high specification dedicated host.</span></li>
      <li class="quiz-single-option"><span class="quiz-single-letter">D</span><span>Configure cross-region active-active database replication.</span></li>
    </ul>
  </div>
</section>
```

---

## 3. Solution & Analysis Slide Blueprint (Slides N-5, N-3, N-1)

### Absolute Rule: Natural Sequential Order (A -> B -> C -> D)
- **The 4 option cards in the 2x2 grid MUST strictly remain in sequential order**:
  - Slot 1 (Top-Left): **Option A**
  - Slot 2 (Top-Right): **Option B**
  - Slot 3 (Bottom-Left): **Option C**
  - Slot 4 (Bottom-Right): **Option D**
- **NEVER reorder options or place the correct option at the top**. If Option C is correct, it remains in Slot 3.
- Mark correct answer:
  - Class: `.analysis-item.correct`
  - Header: `<div class="analysis-item-header correct"><span>✔ Option [X] is Correct</span></div>`
- Mark incorrect answers:
  - Class: `.analysis-item.incorrect`
  - Header: `<div class="analysis-item-header incorrect"><span>✖ Option [X] is Incorrect</span></div>`

### HTML Blueprint:
```html
<section class="slide" data-category="Practice Quiz">
  <div class="slide-category">Quiz Solution • Scenario 1</div>
  <h2>Scenario 1: Solution & Architectural Analysis</h2>
  
  <div class="analysis-main-card">
    <div>
      <span style="font-weight: 800; font-size: 1.1rem; color: #065f46;">Correct Answer: B</span>
      <span style="margin-left: 0.75rem; color: #047857; font-size: 0.95rem;">Deploy ApsaraDB RDS Read Replicas with Database Proxy Read/Write Splitting</span>
    </div>
    <span class="badge badge-updated">Validated Architecture</span>
  </div>

  <div class="analysis-options-grid">
    <!-- ALWAYS Option A first -->
    <div class="analysis-item incorrect">
      <div class="analysis-item-header incorrect"><span>✖ Option A is Incorrect</span></div>
      <div class="analysis-item-body">Migrating relational schemas to NoSQL requires significant application rewrites, schema redesign, and data model restructuring, violating the zero application change constraint.</div>
    </div>

    <!-- ALWAYS Option B second -->
    <div class="analysis-item correct">
      <div class="analysis-item-header correct"><span>✔ Option B is Correct</span></div>
      <div class="analysis-item-body">RDS Read Replicas scale read throughput horizontally, while the integrated Database Proxy automatically offloads SELECT queries from the primary node via a single unified endpoint without code modifications.</div>
    </div>

    <!-- ALWAYS Option C third -->
    <div class="analysis-item incorrect">
      <div class="analysis-item-header incorrect"><span>✖ Option C is Incorrect</span></div>
      <div class="analysis-item-body">Vertical scaling has hard hardware ceilings, incurs downtime during specification adjustments, and results in substantial idle costs when traffic returns to normal baseline levels.</div>
    </div>

    <!-- ALWAYS Option D fourth -->
    <div class="analysis-item incorrect">
      <div class="analysis-item-header incorrect"><span>✖ Option D is Incorrect</span></div>
      <div class="analysis-item-body">Cross-region replication introduces cross-region transfer latencies and high egress costs, and does not solve read throughput bottlenecks within the primary operating region.</div>
    </div>
  </div>
</section>
```
