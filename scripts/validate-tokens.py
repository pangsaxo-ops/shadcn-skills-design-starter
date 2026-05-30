#!/usr/bin/env python3
"""
validate-tokens.py
Validates that DESIGN.md documents every variable in variables-export.json.
Also checks CLAUDE.md and SKILL.md for required sections.

Usage:
  python3 scripts/validate-tokens.py
  python3 scripts/validate-tokens.py --tokens assets/variables-export.json
"""

import json
import re
import sys
import argparse
from pathlib import Path

ROOT   = Path(__file__).parent.parent
TOKENS = ROOT / "assets" / "variables-export.json"
DESIGN = ROOT / "DESIGN.md"
CLAUDE = ROOT / "CLAUDE.md"
SKILL  = ROOT / ".claude" / "skills" / "shadcn-ui" / "SKILL.md"


def check(label: str, ok: bool, detail: str = "") -> bool:
    icon = "✅" if ok else "❌"
    msg  = f"  {icon} {label}"
    if not ok and detail:
        msg += f"\n     {detail}"
    print(msg)
    return ok


def main(tokens_path: Path) -> int:
    with open(tokens_path) as f:
        data = json.load(f)

    total     = sum(c["variableCount"] for c in data["collections"])
    all_names = [v["name"] for v in data["variables"]]

    design_text = DESIGN.read_text() if DESIGN.exists() else ""
    claude_text = CLAUDE.read_text() if CLAUDE.exists() else ""
    skill_text  = SKILL.read_text()  if SKILL.exists()  else ""

    failures = 0

    print(f"\n{'─'*55}")
    print(f"  Token source : {tokens_path.name}")
    print(f"  Total vars   : {total}")
    print(f"{'─'*55}\n")

    # ── 1. File existence ──────────────────────────────────────────────────────
    print("Files")
    for path in (DESIGN, CLAUDE, SKILL):
        if not check(str(path.relative_to(ROOT)), path.exists()):
            failures += 1
    print()

    # ── 2. Variable coverage in DESIGN.md ─────────────────────────────────────
    print("DESIGN.md — variable coverage")
    by_col: dict[str, list] = {}
    for var in data["variables"]:
        by_col.setdefault(var["collectionName"], []).append(var["name"])

    all_found = True
    for col in data["collections"]:
        names  = by_col[col["name"]]
        found  = sum(1 for n in names if f"`{n}`" in design_text)
        ok     = found == col["variableCount"]
        if not ok:
            all_found = False
            missing = [n for n in names if f"`{n}`" not in design_text][:5]
            failures += 1
        check(f"{col['name']:20s} {found}/{col['variableCount']}",
              ok, "Missing: " + ", ".join(missing) if not ok else "")

    total_found = sum(1 for n in all_names if f"`{n}`" in design_text)
    check(f"TOTAL {total_found}/{total}", total_found == total)
    print()

    # ── 3. DESIGN.md required sections ────────────────────────────────────────
    print("DESIGN.md — required sections")
    design_sections = [
        ("§1 Token Architecture",         "## 1. Token Architecture"),
        ("§2 Semantic Tokens",            "## 2. shadcn/ui Semantic Tokens"),
        ("§3 Component Composition Rules","## 3. Component Composition Rules"),
        ("§4 Next.js App Router",         "## 4. Next.js App Router"),
        ("§5 Theming",                    "## 5. Theming"),
        ("§6 Dark Mode",                  "## 6. Dark Mode"),
        ("§7 Figma Alignment",            "## 7. Figma"),
        ("§8 Palette Reference",          "## 8. Token Palette Reference"),
        ("§9 Scale Tokens",               "## 9. Scale Tokens"),
        ("4 brand modes",                 'data-theme="primary"'),
        ("Server Component example",      "Server Component"),
        ('"use client" example',          '"use client"'),
        ("ThemeProvider setup",           "ThemeProvider"),
        ("Server Actions",                '"use server"'),
        ("No Thai characters",            len(re.findall(r"[ก-๙]", design_text)) == 0),
    ]
    for label, check_val in design_sections:
        if isinstance(check_val, bool):
            ok = check_val
        else:
            ok = check_val in design_text
        if not check(label, ok): failures += 1
    print()

    # ── 4. CLAUDE.md required content ─────────────────────────────────────────
    print("CLAUDE.md — required content")
    claude_checks = [
        ("References DESIGN.md",           "DESIGN.md" in claude_text),
        ("References .claude/skills path", ".claude/skills" in claude_text),
        ("Hard rules present",             "Semantic tokens only" in claude_text),
        ('"use client" guidance',          '"use client"' in claude_text),
        ("npx shadcn commands",            "npx shadcn@latest" in claude_text),
        ("No Thai characters",             len(re.findall(r"[ก-๙]", claude_text)) == 0),
    ]
    for label, ok in claude_checks:
        if not check(label, ok): failures += 1
    print()

    # ── 5. SKILL.md required content ──────────────────────────────────────────
    print("SKILL.md — required content")
    skill_checks = [
        ("Frontmatter: name",              "name: shadcn-ui" in skill_text),
        ("§0 Pre-flight",                  "## 0. Pre-flight" in skill_text),
        ("§1 Build New Component",         "## 1. Build New Component" in skill_text),
        ("§2 Design-to-Code",              "## 2. Design-to-Code" in skill_text),
        ("§3 Next.js Patterns",            "## 3. Next.js App Router" in skill_text),
        ("§4 Critical Rules",              "## 4. Critical Rules" in skill_text),
        ("§7 When to Stop and Ask",        "## 7. When to Stop and Ask" in skill_text),
        ("Fidelity contract",              "No adding" in skill_text),
        ("Six-step Figma workflow",        "Six Steps" in skill_text),
        ("Inventory example",              "INVENTORY" in skill_text),
        ("RSC / Server Component",         "Server Component" in skill_text),
        ('"use client" decision',          '"use client"' in skill_text),
        ("Server Actions",                 '"use server"' in skill_text),
        ("4 brand modes",                  'data-theme="primary"' in skill_text),
        ("variables-export.json ref",      "variables-export.json" in skill_text),
        ("No Thai characters",             len(re.findall(r"[ก-๙]", skill_text)) == 0),
    ]
    for label, ok in skill_checks:
        if not check(label, ok): failures += 1
    print()

    # ── summary ────────────────────────────────────────────────────────────────
    print("─" * 55)
    if failures == 0:
        print("  ✅  All checks passed")
    else:
        print(f"  ❌  {failures} check(s) failed")
    print()

    return 1 if failures else 0


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Validate design system documentation")
    parser.add_argument("--tokens", default=str(TOKENS))
    args = parser.parse_args()
    sys.exit(main(Path(args.tokens)))
