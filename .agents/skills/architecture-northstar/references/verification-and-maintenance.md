# Reference: Verification Suite & Maintenance

This reference describes automated validation requirements, test execution protocols, and curriculum maintenance practices.

---

## 1. Automated Verification Script Standards

Each module deck has a dedicated Python verification script in `tools/`:
- `tools/verify_overview_deck.py`
- `tools/verify_ecs_slides.py`
- `tools/verify_vpc_deck.py`
- `tools/verify_slb_deck.py`
- `tools/verify_oss_deck.py`
- `tools/verify_rds_deck.py`
- `tools/verify_auto_scaling_deck.py`
- `tools/verify_cdn_deck.py`
- `tools/verify_security_deck.py`

### Mandatory Automated Checks:
Every verification script validates:
1. **Tag Balancing**:
   - Equal counts of `<section>` and `</section>` tags.
   - Equal counts of `<div>` and `</div>` tags.
2. **Slide Counter Accuracy**:
   - The slide counter in the header (`#slideCounter`) must exactly match `1/{total_slides}`.
3. **Asset Verification**:
   - Every local image (`<img src="...">`) referenced in HTML must exist on disk with valid file size.
4. **Quiz Sequence & Option Natural Order**:
   - Exactly 3 practice scenario pairs (6 quiz slides total).
   - Solution slide 2x2 option grids must strictly preserve natural sequence `['A', 'B', 'C', 'D']`.
5. **Agenda Synchronization**:
   - Slide 2 numbered `<li class="agenda-item">` entries must align with `data-category` and `<div class="slide-category">` on all content slides.
   - No orphan categories or misspelled section names.

---

## 2. Pre-Commit Verification Checklist

Before running `git commit`, verify that:
- [ ] Appropriate test script (`python tools/verify_<module>_deck.py`) exits with code `0`.
- [ ] No `*.bak`, `*.old`, or temporary files were created.
- [ ] All new diagrams are borderless, unconfined, and have valid dimensions.
- [ ] Slide typography conforms to `--font-delta: 2pt`.
- [ ] All quiz solutions maintain natural `A -> B -> C -> D` layout.
- [ ] All user requirements from the prompt were addressed completely.

---

## 3. Annual Curriculum Maintenance

When updating modules for new Alibaba Cloud releases:
1. **Verify Hardware & Quotas**: Check `alibabacloud.com/help` for newest ECS instance generations, CIPU capabilities, RDS minor engine versions, PolarDB storage nodes, etc.
2. **Preserve Architectural Framework**: Maintain identical CSS themes, navigation structures, and slide progression while updating technical specifications.
3. **Keep Terminology Current**: Retire legacy naming (e.g. ensure "Spot Instances" is used instead of outdated "Preemptible Instances").
4. **Zero Drift**: Never introduce forbidden phrases ("Official Architecture:", "Critical Exam Rule", "Trainer Prompt:").
