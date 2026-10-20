# Reference: Slide Anatomy & Progression

Every module HTML deck in the curriculum must follow this standardized sequence from Slide 1 to Slide N.

---

## 1. Overall Sequence Overview

```
[Slide 1]       Clean Minimalist Title Slide
[Slide 2]       Executive Agenda List (Numbered sections only)
[Slide 3]       Simple Service Introduction (Icon + 5 Core Pillars)
[Slide 4..N-7]  Core Architectural Deep Dives
[Slide N-6]     Practice Scenario 1 (Question & Options)
[Slide N-5]     Scenario 1: Solution & Architectural Analysis (A -> B -> C -> D)
[Slide N-4]     Practice Scenario 2 (Question & Options)
[Slide N-3]     Scenario 2: Solution & Architectural Analysis (A -> B -> C -> D)
[Slide N-2]     Practice Scenario 3 (Question & Options)
[Slide N-1]     Scenario 3: Solution & Architectural Analysis (A -> B -> C -> D)
[Slide N]       Minimalist Module Completion Slide
```

### Dynamic Slide Volume Principle
- **No Artificial Slide Count Cap**: The total slide count (`N`) scales naturally with topic depth (e.g., 35, 45, 52, 60+ slides).
- **Decomposition Over Density**: Never compress multiple distinct enterprise mechanisms into a single dense slide. Separate procedures, pricing models, and storage tiers across dedicated, focused slides.

---

## 2. Slide Specifications & HTML Blueprints

### Slide 1: Clean Minimalist Title Slide
- **Role**: Presentation title card without unnecessary clutter.
- **Blueprint**:
  ```html
  <section class="slide active title-slide" data-category="Course Intro">
    <h1>Module 02: Elastic Compute Service (ECS)</h1>
  </section>
  ```

---

### Slide 2: Executive Agenda & Learning Objectives
- **Role**: High-level road map for the trainer and audience.
- **Rules**:
  - Numbered list of **high-level sections only** (typically 5 to 7 items).
  - Strictly **no** descriptive paragraphs or long bullet points.
  - **Do NOT include "Practice Quiz"** in this agenda list.
  - **Section Synchronization Mandate**: The section names here establish the exact naming and numbering for all content slides:
    1. `<li class="agenda-item">` in Slide 2 `<ol class="agenda-grid">`
    2. `<div class="slide-category">Section X: [Exact Name]</div>` on each slide in that section
    3. `data-category="[Exact Name]"` attribute on each slide `<section>`
- **Blueprint**:
  ```html
  <section class="slide" data-category="Outline">
    <div class="slide-category">Module Structure</div>
    <h2>Agenda & Learning Objectives</h2>
    
    <ol class="agenda-grid">
      <li class="agenda-item">ECS Concept and Architecture</li>
      <li class="agenda-item">Instance Configuration</li>
      <li class="agenda-item">Storage Options</li>
      <li class="agenda-item">Network & Security</li>
      <li class="agenda-item">Remote Access</li>
      <li class="agenda-item">Container</li>
      <li class="agenda-item">Pricing Model</li>
    </ol>
  </section>
  ```

---

### Slide 3: Simple Service Introduction
- **Role**: Grounded, accessible introduction before deep architectural deep dives.
- **Rules**:
  - Grounded in **Page 3** of original courseware PDFs.
  - **Simplicity Over Technical Overload**: Keep descriptions accessible; avoid dumping underlay routing or hardware ASIC details here.
  - **Mandatory Vector Service Icon**: Features official vector SVG in Alibaba Orange (`#FF6A00`) housed in `.service-icon-wrapper`.
  - **No Subtitle (`<p class="subtitle">`)**: `<h2>` connects directly into `.service-intro-banner` to prevent duplicate text and maximize breathing room for the 5-pillar grid.
  - **5 Core Value Pillars**: Horizontal `.service-pillars-grid` detailing the 5 architectural pillars.
- **Blueprint**:
  ```html
  <section class="slide" data-category="ECS Concept and Architecture">
    <div class="slide-category">Section 1: ECS Concept and Architecture</div>
    <h2>Elastic Compute Service (ECS)</h2>
    
    <div class="service-intro-banner">
      <div class="service-icon-wrapper">
        <img src="assets/images/ecs-service-icon.svg" alt="Alibaba Cloud ECS Icon" class="service-icon">
      </div>
      <div class="service-intro-text">
        <p class="service-lead">
          <strong>Elastic Compute Service (ECS)</strong> is an Infrastructure as a Service (IaaS) solution providing scalable, high-performance compute capacity in the cloud.
        </p>
        <p class="service-desc">
          Compared to traditional physical servers, ECS enables you to deploy instances in minutes with higher stability, elasticity, and security, freeing your organization to focus on business innovation rather than hardware procurement and data center maintenance.
        </p>
      </div>
    </div>

    <div class="service-pillars-grid">
      <div class="service-pillar-card">
        <h4>⚡ Elasticity</h4>
        <p>Launch or adjust CPU, memory, and disk in minutes with automated scaling.</p>
      </div>
      <div class="service-pillar-card">
        <h4>🚀 Performance</h4>
        <p>Powered by CIPU architecture for ultra-low latency and line-rate networking.</p>
      </div>
      <div class="service-pillar-card">
        <h4>🛡️ Stability</h4>
        <p>Enterprise SLA with automated migration and cross-zone disaster recovery.</p>
      </div>
      <div class="service-pillar-card">
        <h4>🔒 Security</h4>
        <p>Multi-tenant isolation, security groups, DDoS protection, and encrypted disks.</p>
      </div>
      <div class="service-pillar-card">
        <h4>🤖 Automation</h4>
        <p>Extensive APIs, CLI, Terraform, and Cloud Assistant for DevOps integration.</p>
      </div>
    </div>
  </section>
  ```

---

### Slide 4 to N-7: Core Architectural Deep Dives
- **Header Synchronization**:
  ```html
  <div class="slide-category">Section X: [Exact Agenda Section Name]</div>
  ```
  `data-category` attribute must match the agenda section name exactly.
- **Title**: Clean `<h2>` without redundant prefixes.
- **No Subtitle**: Omit `<p class="subtitle">`. Diagram or content starts immediately.
- **Unconfined Diagrams**: High-resolution diagrams or SVGs displayed borderless and unconfined (see Visual Standards).
- **Consolidated Content Cards**: Group explanations into unified content cards instead of fragmented multiple boxes.

---

### Slide N-6 to N-1: 3 Practice Scenario Quizzes (6 Slides)
- Every module concludes with 3 real-world scenarios.
- Each scenario has 2 alternating slides:
  1. Question Slide (`data-category="Practice Quiz"`)
  2. Solution & Analysis Slide (`data-category="Practice Quiz"`)
- Detailed mechanics and blueprints are documented in [Scenario Quiz Mechanics](./quiz-and-scenarios.md).

---

### Slide N: Minimalist Module Completion Slide
- **Role**: Simple, elegant module wrap-up pointing to the next curriculum topic.
- **Rules**:
  - `data-category="Summary"`
  - No wordy self-congratulatory paragraphs.
  - Points clearly to the upcoming module.
- **Blueprint**:
  ```html
  <section class="slide title-slide" data-category="Summary">
    <div class="slide-category">Module Complete</div>
    <h1 style="font-size: 2.8rem; margin-bottom: 1.5rem;">Module 02: Elastic Compute Service (ECS)</h1>
    <div class="callout callout-green" style="max-width: 580px; margin: 0 auto; text-align: left;">
      <div>
        <span class="badge badge-updated">Up Next</span><br>
        <strong>Module 03: Virtual Private Cloud (VPC)</strong>
      </div>
    </div>
  </section>
  ```
