# Architectural North Star: Trainocate Alibaba Cloud Presentation Framework

This document serves as the official **Architectural North Star & Standard Template Specification** for developing interactive, web-based HTML presentations for the Trainocate **Alibaba Cloud Professional: Cloud Architect** course track.

All modules across the entire curriculum (`01_Overview`, `02_ECS`, `03_VPC`, `04_SLB`, `05_OSS`, `06_RDS`, `07_AutoScaling`, `08_CDN`, `09_Security Products`, and any future modules) **must strictly adhere to all guidelines, rules, and specifications in this Architectural North Star without exception**.

---

## Expected Project Architecture & Directory Structure

The courseware repository is organized into isolated functional tiers to prevent development tooling and heavy PDFs from interfering with web hosting:

```text
├── dist/                      # 🌐 DEPLOYABLE WEB PRESENTATION (Ready for Hosting)
│   ├── index.html             # Course Presentation Entry (Module 02: ECS)
│   ├── module-01-overview.html# Module 01: Cloud Architecture Overview
│   ├── module-02-ecs.html     # Module 02: Elastic Compute Service (ECS)
│   ├── module-03-vpc.html     # Module 03: Virtual Private Cloud (VPC)
│   ├── module-04-slb.html     # Module 04: Server Load Balancer (SLB)
│   ├── module-05-oss.html     # Module 05: Object Storage Service (OSS)
│   ├── module-06-rds.html     # Module 06: ApsaraDB for RDS
│   ├── module-07-auto-scaling.html # Module 07: Auto Scaling
│   ├── module-08-cdn.html     # Module 08: Content Delivery Network (CDN)
│   ├── module-09-security.html# Module 09: Security Products
│   └── assets/
│       ├── css/style.css      # Alibaba Cloud course styling
│       ├── js/presentation.js # Presentation navigation engine
│       └── images/            # Curated production diagrams & responsive SVGs
│
├── materials/                 # 📄 SOURCE REFERENCE MATERIALS (Original Courseware PDFs)
│   ├── 01_Overview.pdf
│   ├── 02_ECS.pdf
│   ├── 03_81005_VPC.pdf
│   ├── 04_81005_SLB.pdf
│   ├── 05_81005_OSS.pdf
│   ├── 06_81005_RDS.pdf
│   ├── 07_81005_AutoScaling.pdf
│   ├── 08_81005_CDN.pdf
│   └── 09_81005_Security Products.pdf
│
├── tools/                     # 🛠️ VERIFICATION & BUILD SCRIPTS (Internal Tooling)
│   ├── verify_overview_deck.py
│   ├── verify_ecs_slides.py
│   ├── verify_vpc_deck.py
│   ├── verify_slb_deck.py
│   ├── verify_oss_deck.py
│   ├── verify_rds_deck.py
│   ├── verify_auto_scaling_deck.py
│   ├── verify_cdn_deck.py
│   └── verify_security_deck.py
│
├── .gitignore                 # Excludes .venv, pycache, temporary files (Local only, untracked in GitHub)
└── ARCHITECTURAL_NORTHSTAR.md # 📐 Official Courseware Template & Architectural Blueprint
```

---

## 1. Core Principles & Constraints

1. **Official Sources Only**:
   - Source PDF materials in `materials/` date back to 2022 and contain deprecated services/terms.
   - All factual information, naming conventions, service quotas, and architecture diagrams must be verified against current **official Alibaba Cloud documentation (`alibabacloud.com`)**.
   - Outside blog posts, forums, or third-party summaries are strictly forbidden.
2. **Language**:
   - The entire user interface, slide content, code snippets, notes, and technical explanations must be in **English**.
3. **Tone & Phrasing Standards**:
   - **Never** use `"Official Architecture: "` or `"Official Diagram: "` in captions or headings. Avoid defensive phrases that insist something is "official".
   - **Never** use `"Critical Exam Rule"`. Instead, frame technical imperatives as objective architectural terms:
     - `Architectural Principle`
     - `High Availability Rule`
     - `Storage Innovation`
     - `Resource Boundary`
     - `Strict Architecture Constraint`
   - **Never** include `"Trainer Prompt:"` boxes in slides. Explaining and lecturing is strictly the trainer's role.
4. **Pedagogical Structure**:
   - Deconstruct complex subjects into bite-sized, single-topic slides rather than cramming multiple concepts onto one slide (e.g., pricing models separated into PAYG, Subscription, Spot, and Savings Plans).
   - Dedicated slides for complex operational workflows (e.g., Same-Zone detach/attach vs. Cross-Zone snapshot migration).
5. **Mandatory Repository Push on Every Prompt**:
   - The AI assistant **must automatically commit and push** all modified, added, or deleted project files to the remote GitHub repository (`origin main`) upon completing **every single user prompt / turn**.
   - **Verification Pre-requisite**: Prior to committing, always execute the relevant verification test script(s) (e.g. `python tools/verify_<module>_deck.py`) to guarantee 100% test pass and zero regressions.
   - **Commit Quality**: Formulate clear, concise, and professional commit messages describing the exact updates made.
   - **Execution Protocol**:
     ```bash
     git add -A
     git commit -m "Descriptive summary of prompt changes"
     git push origin main
     ```
6. **Universal Application Across All Modules (Zero Exceptions)**:
   - Every rule, layout constraint, pedagogical pattern, typography standard, and verification protocol defined in this Architectural North Star applies universally, unconditionally, and without exception to **all modules** (Modules 01 through 09).
   - No module or slide deck may deviate from these established standards.

---

## 2. Standard Module Slide Anatomy & Progression

Every module HTML deck must follow this standardized sequence:

```
[Slide 1] Clean Title Slide
[Slide 2] Executive Agenda List (Sections only)
[Slide 3] Simple Service Introduction (Definition, Official Icon & 5 Core Pillars)
[Slide 4 to N-7] Core Architectural Deep Dives
[Slide N-6] Practice Scenario 1 (Question & Options Only)
[Slide N-5] Scenario 1: Solution & Architectural Analysis (A, B, C, D in order)
[Slide N-4] Practice Scenario 2 (Question & Options Only)
[Slide N-3] Scenario 2: Solution & Architectural Analysis (A, B, C, D in order)
[Slide N-2] Practice Scenario 3 (Question & Options Only)
[Slide N-1] Scenario 3: Solution & Architectural Analysis (A, B, C, D in order)
[Slide N]   Minimalist Module Completion Slide
```

### Unconstrained Slide Volume & Depth Principle
- **No Artificial Slide Count Cap**: The total slide count (`N`) is completely dynamic and unconstrained. Heavy, enterprise-grade topics (such as VPC Enterprise Transit, Multi-Zone PolarDB Architecture, or Complex Security Meshes) should expand to as many slides as necessary (e.g., 35, 45, 60+ slides) to deliver comprehensive architectural depth.
- **Decomposition Over Density**: Never compress multiple distinct enterprise concepts or procedures into a single slide just to keep the slide count small. If a service has four pricing options, create four dedicated slides. If an operational workflow has same-zone and cross-zone procedures, allocate a standalone slide for it. If storage involves underlying infrastructure, categories, and attachment rules, decouple them into individual focused slides (e.g., Pangu Architecture -> Cloud Disk Performance Tiers -> Cloud Disk Attachment & Sizing).
- **Dynamic Range**: The sequence `[Slide 4 to N-7]` scales flexibly: whether a module has 25 slides or 65 slides, the opening slides (1–3) and the closing slides (N-6 to N) always preserve the exact standard structure.

---

### Slide Type Specifications

#### A. Slide 1: Clean Minimalist Title Slide
- **Role**: Clean title card without clutter.
- **Content**: Module number and topic title only.
- **Example**:
  ```html
  <section class="slide active title-slide" data-category="Course Intro">
    <h1>Module 03: Virtual Private Cloud (VPC)</h1>
  </section>
  ```

#### B. Slide 2: Executive Agenda & Learning Objectives
- **Role**: High-level road map for the trainer.
- **Structure**: Numbered list of **high-level sections only** (typically 5 to 6 items matching the header categories).
- **Rules**:
  - Strictly **no** descriptive paragraphs.
  - **Do NOT include "Practice Quiz"** in this list.
  - **Section Naming & Slide Synchronization Mandate**:
    - The section names defined in this agenda list establish the single source of truth for section naming and numbering across the entire module.
    - Whenever any section name is modified, renamed, or updated, **the change MUST be synchronized simultaneously across**:
      1. **Slide 2 Agenda List**: The corresponding `<li class="agenda-item">` in `<ol class="agenda-grid">`.
      2. **All Content Slides in That Section**:
         - Header badge: `<div class="slide-category">Section X: [Exact Section Name]</div>`
         - Slide category attribute: `data-category="[Exact Section Name]"` (powers `#sectionIndicator` in the top header and the jump dropdown).
    - **Quiz & Summary Exemption**: Interactive Quiz slides (`data-category="Practice Quiz"`) and the final Module Complete slide (`data-category="Summary"`) are not numbered sections and are strictly exempted from section numbering.
- **HTML Blueprint**:
  ```html
  <section class="slide" data-category="Outline">
    <div class="slide-category">Module Structure</div>
    <h2>Agenda & Learning Objectives</h2>
    
    <ol class="agenda-grid">
      <li class="agenda-item">VPC Architecture & CIDR Design</li>
      <li class="agenda-item">Routing & VSwitch Segmentation</li>
      <li class="agenda-item">Enterprise Interconnectivity (CEN & TR)</li>
      <li class="agenda-item">Hybrid Cloud (VPN & Express Connect)</li>
      <li class="agenda-item">Network Security & Traffic Inspection</li>
      <li class="agenda-item">Operations & Flow Monitoring</li>
    </ol>
  </section>
  ```

#### C. Slide 3: Simple Service Introduction (Simplicity & Official Service Icon)
- **Role**: Provide an accessible, non-intimidating, high-level introduction to the service before diving into deep technical architectures.
- **Principles Grounded in Source Materials**:
  - Follow **Page 3** of the source PDF materials (`02_ECS.pdf`, `03_81005_VPC.pdf`, etc.) as the architectural template.
  - **Simplicity Over Technical Overload**: Keep explanations simple, plain, and focused. **Never** dump deep low-level mechanics (e.g., VXLAN underlay encapsulation, CIPU silicon offloading, BGP route tables) onto Slide 3. Save deep technical specifications for subsequent topic slides.
  - **Mandatory Official Service Icon**: Every Slide 3 **must feature the official Alibaba Cloud vector service icon** (`.svg` in Alibaba Orange `#FF6A00`) housed in a dedicated `.service-icon-wrapper`.
  - **Core Value Proposition**: Clearly explain:
    1. *What is the service?* (Core cloud service category and capability).
    2. *Why choose it over physical alternatives?* (Eliminating physical hardware, facilities, and maintenance burdens so organizations can focus on business value).
  - **5 Core Value Pillars**: Highlight the 5 key architectural pillars in a clean, balanced horizontal `.service-pillars-grid` (e.g., Elasticity, Performance, Stability, Security, Automation for ECS; Private & Isolated, Custom Address Space, Security, High Availability, Hybrid Interconnect for VPC).
  - **Direct Heading-to-Banner Hierarchy (No `<p class="subtitle">`)**: Omit `<p class="subtitle">` on Slide 3. The `<h2>` heading directly connects into `.service-intro-banner`. This prevents duplicate descriptions with `.service-lead` and preserves clean vertical breathing room for the 5-pillar grid.
- **HTML Blueprint**:
  ```html
  <!-- ==================== SLIDE 3: SERVICE INTRODUCTION ==================== -->
  <section class="slide" data-category="[Section Category]">
    <div class="slide-category">Section 1: [Category Name]</div>
    <h2>[Service Name] ([Acronym])</h2>
    
    <div class="service-intro-banner">
      <div class="service-icon-wrapper">
        <img src="assets/images/[service-name]-service-icon.svg" alt="Alibaba Cloud [Service] Icon" class="service-icon">
      </div>
      <div class="service-intro-text">
        <p class="service-lead">
          <strong>[Full Service Name] ([Acronym])</strong> is a [cloud service model, e.g. computing / private networking] service providing [core capability].
        </p>
        <p class="service-desc">
          Compared to traditional physical infrastructure, [Acronym] enables you to easily deploy and manage [resources] with higher stability, scalability, and security, freeing your organization to focus on business applications rather than maintaining physical hardware.
        </p>
      </div>
    </div>

    <div class="service-pillars-grid">
      <div class="service-pillar-card">
        <h4>[Icon] Pillar 1</h4>
        <p>[Concise explanation]</p>
      </div>
      <div class="service-pillar-card">
        <h4>[Icon] Pillar 2</h4>
        <p>[Concise explanation]</p>
      </div>
      <div class="service-pillar-card">
        <h4>[Icon] Pillar 3</h4>
        <p>[Concise explanation]</p>
      </div>
      <div class="service-pillar-card">
        <h4>[Icon] Pillar 4</h4>
        <p>[Concise explanation]</p>
      </div>
      <div class="service-pillar-card">
        <h4>[Icon] Pillar 5</h4>
        <p>[Concise explanation]</p>
      </div>
    </div>
  </section>
  ```

#### D. Core Technical Slides (Slide 4 to N-7)
- **Header Badge & Section Category Synchronization**:
  - `<div class="slide-category">Section X: [Exact Agenda Section Name]</div>`
  - `data-category="[Exact Agenda Section Name]"`
  - Both must strictly match the numbered section entry established in Slide 2 Agenda. Never abbreviate, truncate, or diverge from the agenda name on individual slide pages.
- **Slide Title**: Clear `<h2>` heading without repetitive prefixes (e.g., use `"Cloud Disk"` rather than `"Modern Cloud Disk Categories & Performance Levels"`).
- **Clean Title Layout (No Subtitle)**: Do not include `<p class="subtitle">` under `<h2>`. Slide content (diagrams, cards, grids) immediately follows the title to maximize vertical space and eliminate redundant text.
- **Visuals & Diagram Architecture (Unconfined & Borderless Handling)**:
  - **Zero Confining Frames ("Tidak boleh ada pengekang atau box yang terlihat")**:
    - Architectural diagrams, process flows, and topology images must **never** be enclosed inside visible bounding boxes, borders, cards, or artificial "cages".
    - Strictly eliminate outer borders (`border: none;`, no `1px solid #cbd5e1` or `1px solid var(--border-color)`).
    - Strictly eliminate box shadows (`box-shadow: none;`) from image containers and `<img>` tags.
    - Strictly eliminate card backgrounds wrapping images (use `background: transparent;`).
    - Use clean, minimal flex wrappers (`display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 0;`).
  - **Unconfined Yet Controlled Scaling ("Biarkan gambar menjadi besar namun tetap bisa dikontrol")**:
    - Allow diagrams to expand generously across the slide viewport so that complex technical details, nodes, arrows, and labels are crisp, easily legible, and prominent from the audience view.
    - Set generous `max-height` constraints aligned with slide space budget (e.g., `max-height: 400px` to `480px` in two-column grid layouts; `200px` to `280px` for top/center diagrams paired with bottom text cards).
    - Maintain strict responsiveness: Always use `width: 100%; height: auto; object-fit: contain;`.
    - Slide canvas safety: While images are enlarged, they must **never** cause vertical scrolling on the slide or force content outside the standard slide viewport (`min(88vh, 800px)`).
  - Every major section should feature an architectural SVG or cropped diagram.
  - SVGs **must** have an explicit responsive `viewBox` (e.g., `viewBox="0 0 794 504"`).
  - Cropping: If a diagram from the PDF has Chinese text, decorative slide frames, or unwanted header banners, crop or clean it to retain only the technical topology without enclosing slide borders.
- **Content Cards & Explanation Box Standards**:
  - Use standard CSS semantic card classes:
    - `.content-card.highlight` (Orange accent)
    - `.content-card.highlight-blue` (Sky blue accent)
    - `.content-card.highlight-green` (Emerald accent)
    - `.content-card.highlight-purple` (Purple accent)
  - **Sub-Title Usage Strictly Restricted to Comparisons**:
    - Do **NOT** insert sub-titles (`<h3>` or sub-headers) inside an explanation box/card unless the slide explicitly presents a side-by-side or direct technical comparison (e.g., *Manual Snapshot vs. Automated Backup*, *Single-Zone vs. Multi-Zone*, *Self-Managed on ECS vs. ApsaraDB RDS*).
    - For general explanations or single-topic cards, eliminate redundant sub-titles and consolidate the explanation into a single, clean box with direct sentences or bullet points without unnecessary headings.
  - **Restricted Use of Colored Badge Labels on Sub-Titles**:
    - Do **NOT** decorate sub-titles with colored badge/pill labels (such as `<span class="badge ...">`) unless the label indicates a strictly vital, critical distinction (e.g., high-risk physical hazard, critical compliance threshold).
    - Headings inside cards must default to clean, unadorned dark text (`color: #000000;` or `var(--text-main)`). Strictly avoid visual clutter caused by unnecessary badge labels.
- **Callout Banners & Single-Sentence Rules**:
  - `.callout.callout-blue` (Architectural Value / Note)
  - `.callout.callout-green` (Updated standard / Best Practice)
  - `.callout.callout-amber` (Constraints / Deprecation notices)
  - **Single-Sentence Rule Integration (No Standalone Callouts / Tables for Single Rules)**:
    - Do **NOT** create a separate, isolated `<div class="callout ...">` section or bottom banner solely to convey a single-sentence constraint, binding rule, or architectural fact (e.g., Binding Rules or Zero-Configuration Intranet).
    - Do **NOT** format single-sentence rules into tables or isolated sections.
    - Instead, seamlessly integrate single-sentence explanations directly inside the primary content cards as a bullet point (`<li><strong>Rule Name:</strong> ...</li>`) or concise inline sentence. This maximizes vertical canvas, prevents slide fragmentation, and maintains visual cohesion.
- **Sequential Step-by-Step Lists (Execution Workflows & Procedures)**:
  - When presenting sequential processes, multi-step workflows, or execution procedures (Step 1 through N), **strictly use `<ol class="step-list">` (ordered list)** instead of unordered bullet lists (`<ul>`).
  - **Zero Duplicate Bullet/Number Rule**: Never place manual numeric prefixes (e.g. `1. `, `2. `) inside `<strong>` within a `<ul>` or `<ol>`. The list numbering must be generated natively via ordered list markers (`ol.step-list`), strictly eliminating duplicate bullet dots (`•`) and numbers appearing together.
  - Structure:
    ```html
    <ol class="step-list">
      <li><strong>Step Name:</strong> Concise description of the execution step...</li>
      <li><strong>Subsequent Step:</strong> Description of the next operational action...</li>
    </ol>
    ```

#### E. Interactive Scenario Quizzes (3 Scenarios = 6 Slides)
Every module concludes with 3 real-world architect scenario challenges:

1. **Question Slide (Slide N-6, N-4, N-2)**:
   - Contains **only** the scenario narrative and four selectable options (A, B, C, D).
   - **Zero** answers or hints visible.
   - **No** trainer prompts.
   - Format:
     ```html
     <section class="slide" data-category="Practice Quiz">
       <div class="slide-category">Interactive Quiz • Scenario 1</div>
       <h2>Practice Scenario 1: [Scenario Title]</h2>
       
       <div class="quiz-single-card">
         <div class="quiz-single-question">
           <span class="quiz-number">Question 1</span>
           <span>[Scenario narrative describing enterprise challenge, constraints, and requirements...]</span>
         </div>
         <ul class="quiz-single-options">
           <li class="quiz-single-option"><span class="quiz-single-letter">A</span><span>...</span></li>
           <li class="quiz-single-option"><span class="quiz-single-letter">B</span><span>...</span></li>
           <li class="quiz-single-option"><span class="quiz-single-letter">C</span><span>...</span></li>
           <li class="quiz-single-option"><span class="quiz-single-letter">D</span><span>...</span></li>
         </ul>
       </div>
     </section>
     ```

2. **Solution & Analysis Slide (Slide N-5, N-3, N-1)**:
   - Follows **immediately** after its corresponding question slide.
   - Top main card: Identifies the correct answer and validated architecture.
   - **2x2 Options Grid (`.analysis-options-grid`)**:
     - **CRITICAL ORDER RULE**: The 4 option analysis cards **MUST stay in their natural sequential order: Option A, Option B, Option C, Option D**.
     - **NEVER** move the correct answer to the top/first slot. If Option C is correct, it remains in slot C (bottom-left), while Option A remains in slot A (top-left).
     - Correct option is marked `.analysis-item.correct` with green styling and `✔ Option [X] is Correct`.
     - Incorrect options are marked `.analysis-item.incorrect` with red styling and `✖ Option [X] is Incorrect`, each accompanied by a technical rationale.
   - Format:
     ```html
     <section class="slide" data-category="Practice Quiz">
       <div class="slide-category">Quiz Solution • Scenario 1</div>
       <h2>Scenario 1: Solution & Architectural Analysis</h2>
       
       <div class="analysis-main-card">
         <div>
           <span style="font-weight: 800; font-size: 1.1rem; color: #065f46;">Correct Answer: B</span>
           <span style="margin-left: 0.75rem; color: #047857; font-size: 0.95rem;">[Concise summary of correct solution]</span>
         </div>
         <span class="badge badge-updated">Validated Architecture</span>
       </div>

       <div class="analysis-options-grid">
         <!-- ALWAYS Option A first -->
         <div class="analysis-item incorrect">
           <div class="analysis-item-header incorrect"><span>✖ Option A is Incorrect</span></div>
           <div class="analysis-item-body">[Technical reason why A is invalid]</div>
         </div>

         <!-- ALWAYS Option B second -->
         <div class="analysis-item correct">
           <div class="analysis-item-header correct"><span>✔ Option B is Correct</span></div>
           <div class="analysis-item-body">[Technical justification why B succeeds]</div>
         </div>

         <!-- ALWAYS Option C third -->
         <div class="analysis-item incorrect">
           <div class="analysis-item-header incorrect"><span>✖ Option C is Incorrect</span></div>
           <div class="analysis-item-body">[Technical reason why C is invalid]</div>
         </div>

         <!-- ALWAYS Option D fourth -->
         <div class="analysis-item incorrect">
           <div class="analysis-item-header incorrect"><span>✖ Option D is Incorrect</span></div>
           <div class="analysis-item-body">[Technical reason why D is invalid]</div>
         </div>
       </div>
     </section>
     ```

#### E. Slide N: Minimalist Module Completion Slide
- **Role**: Simple, elegant module wrap-up indicating the next topic.
- **Rule**: Strictly **no** verbose self-congratulatory paragraphs (e.g., omit `"You have mastered..."`).
- **Format**:
  ```html
  <section class="slide title-slide" data-category="Summary">
    <div class="slide-category">Module Complete</div>
    <h1 style="font-size: 2.8rem; margin-bottom: 1.5rem;">Module 03: Virtual Private Cloud (VPC)</h1>
    <div class="callout callout-green" style="max-width: 580px; margin: 0 auto; text-align: left;">
      <div>
        <span class="badge badge-updated">Up Next</span><br>
        <strong>Module 04: Server Load Balancer (SLB)</strong>
      </div>
    </div>
  </section>
  ```

---

## 3. Project Directory Architecture & Web Hosting Isolation

To ensure that presentations can be uploaded and hosted on web servers, GitHub Pages, or cloud storage buckets (e.g., Alibaba Cloud OSS static website hosting) without accidental leakage of Python scripts, raw PDFs, or virtual environments, the project strictly isolates deliverables from tooling:

```text
alibaba-cloud/
├── dist/                      # 🌐 DEPLOYABLE WEB PRESENTATION (All HTML & Web Assets)
│   ├── index.html             # Current primary slide deck (self-contained)
│   ├── module-02-ecs.html     # Direct module entry
│   └── assets/
│       ├── css/style.css      # Core presentation styles
│       ├── js/presentation.js # Presentation navigation engine
│       └── images/            # Curated production images & responsive SVGs
│
├── materials/                 # 📄 SOURCE REFERENCE MATERIALS (Original Courseware)
│   ├── 01_Overview.pdf
│   ├── 02_ECS.pdf
│   ├── ...
│   ├── extracted_images/      # Unfiltered raw PDF image dumps (Excluded from web)
│   └── README.md
│
├── tools/                     # 🛠️ AI EXTRACTION & GENERATION TOOLING (Internal Only)
│   ├── extract_images.py      # PDF raster image extractor
│   ├── dump_full_text.py      # Automated PDF text dump utility
│   ├── patch_svg.py           # SVG viewBox injector
│   ├── requirements.txt       # Python dependencies (pypdf, pillow)
│   └── README.md
│
├── .gitignore                 # Excludes .venv, pycache, and raw dumps from Git (Local only, untracked in GitHub)
├── ARCHITECTURAL_NORTHSTAR.md # Architectural Blueprint & Template Specification
└── README.md                  # Project overview & presenter documentation
```

### Hosting & Deployment Rules
1. **Zero HTML in Root**: The repository root contains **strictly zero HTML files**. All presentation slide decks, HTML files, CSS stylesheets, JavaScript files, and visual media reside exclusively inside the `dist/` directory.
2. **Upload Only `dist/` to Web Servers**: When publishing to a web server (Apache/Nginx), static hosting (Netlify, Cloudflare Pages, Vercel), or an object storage bucket (Alibaba Cloud OSS Static Website Hosting / AWS S3), **upload ONLY the contents of the `dist/` directory**.
3. **Zero Python or Environment in Web Deliverables**: The `dist/` directory contains strictly pure HTML5, CSS3, JavaScript, and optimized media assets. No Python scripts, virtual environments (`.venv`), or heavy source PDFs are ever placed in `dist/`.
4. **Local Testing & Offline Use**: Presenters open `dist/index.html` directly in any modern browser without needing a local web server or root redirect.

---

## 4. UI, Header & Navigation Standards

### Header Specification
The top header (`.presentation-header`, fixed height 64px) serves as the unified navigation bar for the entire presentation:
- **Left Branding**:
  ```html
  <div class="brand-wrapper">
    <span class="brand-badge">Alibaba Cloud</span>
    <div class="course-info">
      <span class="course-title">Alibaba Cloud Professional: Cloud Architect</span>
      <span class="module-title">Module XX: [Topic Name]</span>
    </div>
  </div>
  ```
- **Right Header Controls (`.header-right`)**:
  - **Section Indicator Badge**: Dynamic category pill (`#sectionIndicator`) showing the active topic/section on the left of the controls cluster.
  - **Module Switcher Dropdown**: Direct `<select>` dropdown without `"MODULE:"` label, positioned to the left of the slide counter and navigation buttons, allowing presenters to switch instantly between all module decks.
  - **Rightmost Navigation Buttons (`.nav-buttons`)**:
    - **Slide Counter Badge**: Page indicator in `current/total` format (e.g. `2/23`, `1/37`) housed in `<span class="slide-counter" id="slideCounter">`, positioned **immediately to the left of the Previous button**.
    - `Previous` (`#prevBtn`) with left arrow icon.
    - `Next` (`#nextBtn.primary`) with Alibaba Orange accent and right arrow icon.
    - `Fullscreen` (`#fullscreenBtn`) with fullscreen symbol.
  ```html
  <div class="header-right">
    <span class="section-indicator" id="sectionIndicator">Overview</span>
    <div class="module-switcher-wrapper">
      <select class="module-select" id="moduleSelect" onchange="if(this.value) window.location.href=this.value;">
        <option value="module-02-ecs.html">Module 02: ECS</option>
        <option value="module-03-vpc.html" selected>Module 03: VPC</option>
        <option value="module-04-slb.html">Module 04: SLB</option>
        <option value="module-06-rds.html">Module 06: RDS</option>
        <option disabled>──────────</option>
        <option disabled>Module 07: Auto Scaling (Upcoming)</option>
        <option disabled>Module 08: CDN (Upcoming)</option>
        <option disabled>Module 09: Security (Upcoming)</option>
      </select>
    </div>
    <div class="nav-buttons">
      <span class="slide-counter" id="slideCounter">1/31</span>
      <button class="btn-nav" id="prevBtn" title="Previous Slide (Left Arrow)">
        <span>⬅️</span> Previous
      </button>
      <button class="btn-nav primary" id="nextBtn" title="Next Slide (Right Arrow / Space)">
        Next <span>➡️</span>
      </button>
      <button class="btn-nav" id="fullscreenBtn" title="Toggle Fullscreen (F)">
        <span>⛶</span> Fullscreen
      </button>
    </div>
  </div>
  ```
- **Progress Bar**:
  ```html
  <div class="slide-progress-bar" id="progressBar"></div>
  ```

### Modern Minimalist Layout (Zero Footer)
- **Strictly No Footer**:
  - The presentation has **zero footer element**.
  - No bottom slide counters (`Slide X / Y`), no bottom slide jump dropdowns, and no bottom bars.
  - The main slide viewport container (`.deck-container`) spans the full remaining viewport: `height: calc(100vh - 64px)`.
  - Individual slide cards expand to `height: min(88vh, 800px)`, providing expanded vertical canvas for rich diagrams, code snippets, and architecture comparison tables.

---

## 5. Development Execution Workflow for Remaining Modules

When instructed to generate a new module, execute in this strict order:

1. **Step 1: Text & Topic Extraction**:
   - Extract raw text and section headings from the target PDF in `materials/`.
   - Identify obsolete services, renamed products, and retired features.
2. **Step 2: Documentation Verification**:
   - Verify all modern technical specifications and limits against official Alibaba Cloud documentation (`alibabacloud.com`).
3. **Step 3: Asset Preparation**:
   - Locate and download official SVG diagrams or extract high-res diagrams from the PDF.
   - Crop any unwanted Chinese text or extraneous headers.
   - Inject responsive `viewBox` attributes into all SVGs.
4. **Step 4: Slide Structuring**:
   - Define Slide 1 (Title), Slide 2 (6 high-level sections in agenda), Technical Slides, 3 Scenario Quizzes (6 alternating slides, A-B-C-D natural order), and Slide N (Summary).
5. **Step 5: Code Verification**:
   - Ensure header contains brand, section indicator badge, module switcher dropdown, slide counter badge (format `current/total`, e.g., `2/23` or `1/37`) positioned to the left of Previous, and navigation buttons (`Previous`, `Next`, `Fullscreen`).
   - Confirm zero footer elements exist.
   - Verify quiz solutions retain strict `A -> B -> C -> D` layout.
   - Verify the module switcher `<select>` dropdown navigates seamlessly between modules.

---

## 6. Annual Curriculum Maintenance Protocol for AI Agents

When an AI assistant is prompted in future years to update the courseware against newly released Alibaba Cloud services, it **must remain anchored to this Architectural North Star**:

1. **Official Scope Verification**:
   - Every modification must be validated against `alibabacloud.com/help`. Do not invent non-existent feature names or speculate on roadmap items.
   - For any hardware or platform evolution (e.g., 9th/10th Gen instances, new silicon architectures, new storage tiers), update the instance tables and architecture callouts while preserving the core conceptual pillars.
2. **Zero Drift on Framework Rules**:
   - **Never** add `"Official Architecture:"` or `"Official Diagram:"` prefixes.
   - **Never** introduce `"Critical Exam Rule"` or `"Trainer Prompt:"` text.
   - **Never** shift the option order in quiz solutions; keep Option A at slot 1, Option B at slot 2, Option C at slot 3, and Option D at slot 4 regardless of which option is correct.
   - **Never** re-introduce navigation hints (`⬅️ ➡️ Space F`) into the top-right header or add any footer bars.
   - **Never** artificially cap or compress slide counts; allow the module slide count (`N`) to expand naturally according to topic complexity.
   - **Format Constraints Clearly**: Present architectural constraints (such as network interface quotas or zone attachments) as clean, single continuous sentences rather than forcing heavy table layouts.
   - **Simplify Service Introductions**: Always keep Slide 3 simple, accessible, and grounded with the official Alibaba Cloud vector service icon (`.svg` in Alibaba Orange `#FF6A00`) and 5 core pillars.
   - **Standardize Terminology**: Always use current official naming such as `"Spot Instances"` (not `"Preemptible (Spot) Instances"`).
   - **Section Renaming & Slide Synchronization Mandate**: Whenever there is a request to rename or modify a section name, the update **must be applied atomically to Slide 2 Agenda and to every single slide belonging to that section** (both in `<div class="slide-category">Section X: [New Name]</div>` and `data-category="[New Name]"`). Practice Quiz slides and the module completion summary slide remain strictly exempted from section numbering. Never leave partial or mismatched section names across slides.
   - **Slide Typography Scaling (+2pt)**: All slide text, titles, cards, lists, callouts, and quiz elements are scaled up by +2pt via CSS property `--font-delta: 2pt`. The top header navigation (`.presentation-header`) and summary slides (`.slide[data-category="Summary"]`) remain strictly exempted (`--font-delta: 0pt`) to prevent header distortion and prevent dense summary comparison tables from overflowing.
   - **Numbered Sequential Procedures (No Double Bullet/Number Formatting)**: Multi-step architectural procedures and execution workflows must be formatted as `<ol class="step-list">`. Strictly prohibit combining bullet points with manual numbers (e.g., `<ul><li><strong>1. ...</strong></li></ul>`). Numbering must be handled exclusively by the ordered list marker to ensure clean typography and prevent duplicate bullet dots and numbers appearing simultaneously.
   - **Unconfined & Borderless Images (No Bounding Boxes or Cages)**: All architecture diagrams, topology schemas, and screenshots must be borderless and shadowless (`tidak boleh ada pengekang atau box yang terlihat`). Never confine images in card boxes with borders or background panels. Allow images to expand generously (`max-height: 400px–480px` in two-column grids; `200px–280px` with stacked text) while strictly keeping the slide within viewport bounds without vertical scroll.
3. **Template Preservation**:
   - Always preserve the unified CSS theme in `assets/css/style.css` and the deck engine in `assets/js/presentation.js`.
   - Maintain the responsive container design (`min(88vh, 800px)` with `.slide.active`).
   - Ensure the module switcher `<select id="moduleSelect">` stays aligned to the left of the slide counter and navigation cluster.
   - Ensure the slide counter badge `<span class="slide-counter" id="slideCounter">` dynamically reflects current and total slides in `current/total` format (e.g., `2/23`) immediately to the left of the `Previous` button.

