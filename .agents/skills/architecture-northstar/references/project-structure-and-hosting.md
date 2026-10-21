# Reference: Project Directory Architecture & Hosting

This reference specifies the file organization, directory isolation, web hosting boundaries, and unified navigation header.

---

## 1. Directory Structure & Functional Isolation

```text
alibaba-cloud/
├── dist/                      # 🌐 DEPLOYABLE WEB PRESENTATION (Ready for Hosting)
│   ├── index.html             # Presentation entry point (symlinked or current module)
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
│       ├── css/style.css      # Core presentation stylesheet
│       ├── js/presentation.js # Presentation navigation engine
│       └── images/            # Curated production images & responsive SVGs
│
├── materials/                 # 📄 SOURCE REFERENCE MATERIALS (Original Courseware)
│   ├── 01_Overview.pdf
│   ├── 02_ECS.pdf
│   ├── ...
│   └── extracted_images/      # Raw image dumps (Excluded from production web)
│
├── tools/                     # 🛠️ INTERNAL VERIFICATION & EXTRACTION SCRIPTS
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
├── .agents/skills/            # 🧠 WORKSPACE AGENT SKILLS & RUNBOOKS
│   └── architecture-northstar/# Active Architectural North Star Skill
│
├── .gitignore                 # Excludes .venv, pycache, temporary artifacts
└── README.md                  # Project overview & presenter documentation
```

---

## 2. Web Hosting & Deliverable Rules

1. **Zero HTML in Root**:
   - The repository root contains **strictly zero HTML files**.
   - All slide decks and assets reside inside `dist/`.
2. **Upload Only `dist/` to Production Web Servers**:
   - When deploying to static hosting (Alibaba Cloud OSS Static Website Hosting, GitHub Pages, Netlify, Cloudflare Pages), deploy **ONLY the contents of `dist/`**.
3. **Zero Python or Source PDFs in Web Deliverables**:
   - `dist/` contains pure HTML5, CSS3, JavaScript, and optimized media assets. No Python scripts, virtual environments (`.venv`), or PDFs are ever placed in `dist/`.

---

## 3. Top Header Navigation Specification

The fixed 64px header (`.presentation-header`) provides unified branding and controls across all modules:

```html
<header class="presentation-header">
  <div class="brand-wrapper">
    <img src="assets/images/alibaba-cloud-logo.png" alt="Alibaba Cloud" class="brand-logo">
    <div class="course-info">
      <span class="course-title">Alibaba Cloud Professional: Cloud Architect</span>
      <span class="module-title">Module 02: Elastic Compute Service (ECS)</span>
    </div>
  </div>

  <div class="header-right">
    <!-- Active Section Badge -->
    <span class="section-indicator" id="sectionIndicator">Overview</span>

    <!-- Module Switcher Dropdown -->
    <div class="module-switcher-wrapper">
      <select class="module-select" id="moduleSelect" onchange="if(this.value) window.location.href=this.value;">
        <option value="module-02-ecs.html" selected>Module 02: ECS</option>
        <option value="module-03-vpc.html">Module 03: VPC</option>
        <option value="module-04-slb.html">Module 04: SLB</option>
        <option value="module-06-rds.html">Module 06: RDS</option>
        <option disabled>──────────</option>
        <option disabled>Module 07: Auto Scaling (Upcoming)</option>
        <option disabled>Module 08: CDN (Upcoming)</option>
        <option disabled>Module 09: Security (Upcoming)</option>
      </select>
    </div>

    <!-- Navigation Controls -->
    <div class="nav-buttons">
      <!-- Slide Counter: current/total immediately left of Previous -->
      <span class="slide-counter" id="slideCounter">1/52</span>
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
</header>
<div class="slide-progress-bar" id="progressBar"></div>
```
