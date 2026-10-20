#!/usr/bin/env python3
"""
Verify All Decks Script - Architecture North Star
Discovers and executes all verification test scripts in tools/ directory.
"""

import sys
import subprocess
from pathlib import Path

def main():
    repo_root = Path(__file__).resolve().parents[4]
    tools_dir = repo_root / "tools"
    
    if not tools_dir.exists():
        print(f"Error: tools directory not found at {tools_dir}")
        sys.exit(1)

    verification_scripts = sorted([
        f for f in tools_dir.glob("verify_*.py")
        if not f.name.endswith("_structure.py") and not f.name.endswith("_h3_targets.py") and not f.name.endswith("_cen_coords.py") and not f.name.endswith("_combined_alpha.py")
    ])

    print("=" * 60)
    print("Architectural North Star - Comprehensive Verification Suite")
    print(f"Repository Root: {repo_root}")
    print(f"Found {len(verification_scripts)} deck verification scripts:")
    for s in verification_scripts:
        print(f"  • {s.name}")
    print("=" * 60)

    failed = []
    passed = []

    for script in verification_scripts:
        print(f"\n▶ Running {script.name}...")
        res = subprocess.run([sys.executable, str(script)], cwd=str(repo_root))
        if res.returncode == 0:
            passed.append(script.name)
        else:
            failed.append(script.name)

    print("\n" + "=" * 60)
    print(f"RESULTS: {len(passed)} PASSED, {len(failed)} FAILED")
    if failed:
        print("Failed scripts:")
        for f in failed:
            print(f"  ❌ {f}")
        sys.exit(1)
    else:
        print("✅ ALL VERIFICATION SCRIPTS PASSED SUCCESSFULLY!")
        sys.exit(0)

if __name__ == "__main__":
    main()
