# Reference: Visual, Layout & CSS Standards

This reference specifies layout rules, CSS classes, typography scaling, and visual presentation standards for the Trainocate Alibaba Cloud courseware.

---

## 1. Unconfined & Borderless Diagrams ("Tidak Dikekang Kotak")

A core architectural principle of this curriculum is that diagrams must breathe freely and remain prominently legible:

1. **Zero Confining Frames**:
   - Technical diagrams, process flows, and topology diagrams must **never** be enclosed inside visible bounding boxes, borders, cards, or artificial "cages".
   - `border: none !important;` (No `1px solid #cbd5e1`, no card borders).
   - `box-shadow: none !important;` (No drop shadows around diagram containers).
   - `background: transparent !important;` (No white or grey card background surrounding images).
   - Use clean, minimal flex wrappers:
     ```html
     <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 0;">
       <img src="assets/images/architecture-diagram.svg" alt="Architecture Topology" style="max-height: 440px; width: auto; max-width: 100%; object-fit: contain;">
     </div>
     ```

2. **Controlled Scaling**:
   - Allow diagrams to expand generously across the slide viewport so that text labels, node icons, and connection arrows remain sharp and easily readable from a distance.
   - Budget constraints:
     - **Two-Column Grid**: Diagram on left or right with text on the opposite side: `max-height: 400px` to `480px`.
     - **Top/Center Diagram with Bottom Text**: Diagram positioned above explanation cards: `max-height: 200px` to `280px`.
   - **Slide Canvas Safety**: Diagrams must **never** cause vertical scrolling on the slide or force content outside the standard slide viewport (`min(88vh, 800px)`).

3. **SVG Standards**:
   - All SVGs must have an explicit responsive `viewBox` (e.g. `viewBox="0 0 794 504"`).
   - SVGs should use `width: 100%; height: auto; object-fit: contain;`.

---

## 2. Typography Scaling (+2pt Standard)

- All slide text, titles, cards, lists, callouts, and quiz elements are scaled up by +2pt via CSS property:
  ```css
  --font-delta: 2pt;
  ```
- **Exemptions**:
  - The top header navigation (`.presentation-header`) remains strictly at `--font-delta: 0pt` to prevent header distortion.
  - Summary slides (`.slide[data-category="Summary"]`) remain at `--font-delta: 0pt` to prevent dense summary tables or layouts from overflowing.

---

## 3. Content Cards & Color Classes

Content cards structure technical details into clean, semantic panels.

### Available Classes:
- `.content-card.highlight` — Alibaba Orange accent border/indicator (Default primary focus)
- `.content-card.highlight-blue` — Sky Blue accent (Networking, monitoring, APIs)
- `.content-card.highlight-green` — Emerald accent (Security, compliance, validated state)
- `.content-card.highlight-purple` — Purple accent (Governance, enterprise architecture)

### Sub-Title Rules Inside Cards:
1. **Restricted to Comparisons Only**:
   - Do **NOT** insert sub-titles (`<h3>` or sub-headers) inside an explanation card unless the slide presents a side-by-side or direct technical comparison (e.g., *Self-Managed ECS vs. ApsaraDB RDS*).
   - For general single-topic explanations, eliminate unnecessary sub-titles and consolidate content into direct, clean sentences or bullet lists.
2. **Restricted Use of Colored Badge Labels on Sub-Titles**:
   - Do **NOT** decorate sub-titles with colored badge pills (`<span class="badge ...">`) unless signaling a critical distinction or hazard.
   - Headings inside cards must default to clean, unadorned dark text (`color: #000000;` or `var(--text-main)`).

---

## 4. Single-Sentence Rule Integration

- Do **NOT** create a separate, isolated `<div class="callout ...">` or standalone table solely to present a single constraint, quota, or architectural rule.
- Instead, seamlessly integrate single-sentence explanations directly inside the primary content card as a bullet point:
  ```html
  <div class="content-card highlight">
    <p>Core explanation text...</p>
    <ul>
      <li><strong>Binding Constraint:</strong> Disks can only be attached to instances located within the exact same Zone.</li>
    </ul>
  </div>
  ```

---

## 5. Sequential Step Lists (`<ol class="step-list">`)

When presenting sequential workflows, procedures, or execution steps:
- **Strictly use `<ol class="step-list">`** instead of unordered bullet lists (`<ul>`).
- **Zero Duplicate Bullet/Number Rule**: Never place manual numeric prefixes (e.g. `1. `, `2. `) inside `<strong>` within list items.
- Correct format:
  ```html
  <ol class="step-list">
    <li><strong>Request Validation:</strong> API gateway validates token and schema.</li>
    <li><strong>Route Resolution:</strong> Transit Router resolves target VPC attachment.</li>
    <li><strong>Packet Forwarding:</strong> Traffic is delivered across cloud backbone.</li>
  </ol>
  ```

---

## 6. Modern Minimalist Layout (Zero Footer)

- The presentation layout features **strictly zero footer element**.
- No bottom slide counters (`Slide X / Y`), no bottom slide jump dropdowns, and no bottom bars.
- Main slide viewport container (`.deck-container`):
  ```css
  height: calc(100vh - 64px);
  ```
- Individual slide cards:
  ```css
  height: min(88vh, 800px);
  ```
- This maximizes vertical space for rich diagrams, architectural code snippets, and comparative analyses.
