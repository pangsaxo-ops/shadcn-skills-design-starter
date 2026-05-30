#!/usr/bin/env python3
"""
generate-design-md.py
Regenerates DESIGN.md from assets/variables-export.json.

Usage:
  python3 scripts/generate-design-md.py
  python3 scripts/generate-design-md.py --out path/to/DESIGN.md
"""

import json
import argparse
from pathlib import Path

ROOT   = Path(__file__).parent.parent
TOKENS = ROOT / "assets" / "variables-export.json"
OUTPUT = ROOT / "DESIGN.md"


# ── helpers ────────────────────────────────────────────────────────────────────

def to_hex(r, g, b) -> str:
    return "#{:02x}{:02x}{:02x}".format(int(round(r * 255)), int(round(g * 255)), int(round(b * 255)))


def fmt_color(mode_val: dict) -> str:
    v     = mode_val.get("value", {})
    alias = mode_val.get("alias", "")
    if isinstance(v, dict) and "r" in v:
        a = v.get("a", 1)
        h = to_hex(v["r"], v["g"], v["b"])
        if a != 1:
            return "rgb({} {} {}/{})".format(
                int(round(v["r"] * 255)), int(round(v["g"] * 255)), int(round(v["b"] * 255)), round(a, 1)
            )
        return "{} ({})".format(alias, h) if alias else h
    if isinstance(v, (int, float)):
        return alias if alias else str(v)
    return str(v)


def fmt_num(mode_val: dict) -> str:
    v = mode_val.get("value", mode_val)
    if isinstance(v, float) and v == int(v):
        return str(int(v))
    return str(round(v, 4)) if isinstance(v, float) else str(v)


def three_col_table(flat: list[tuple], headers: list[str]) -> list[str]:
    """Render a list of (name, value) pairs as a 3-column markdown table."""
    h1, h2, h3, h4, h5, h6 = headers
    rows = ["| {} | {} | {} | {} | {} | {} |".format(h1, h2, h3, h4, h5, h6),
            "| --- | --- | --- | --- | --- | --- |"]
    for i in range(0, len(flat), 3):
        chunk = flat[i:i+3]
        while len(chunk) < 3:
            chunk.append(("", ""))
        c = chunk
        rows.append("| `{}` | {} | `{}` | {} | `{}` | {} |".format(
            c[0][0], c[0][1], c[1][0], c[1][1], c[2][0], c[2][1]))
    return rows


# ── main ───────────────────────────────────────────────────────────────────────

def generate(tokens_path: Path, output_path: Path) -> None:
    with open(tokens_path) as f:
        data = json.load(f)

    by_col: dict[str, list] = {}
    for var in data["variables"]:
        cn = var["collectionName"]
        by_col.setdefault(cn, []).append(var)

    total = sum(len(v) for v in by_col.values())
    print(f"Loaded {total} variables from {tokens_path.name}")

    lines: list[str] = []
    w = lines.append

    # ── header ─────────────────────────────────────────────────────────────────
    w("# Design System Specification")
    w(f"*shadcn/ui + Tailwind CSS v4 · Next.js 15 App Router · {total} design tokens*")
    w("")
    w("Single source of truth for all design tokens, composition rules, and Next.js patterns.")
    w("All component code, Figma exports, and AI-generated UI must follow this document.")
    w("")
    w(f"**Token source:** `assets/variables-export.json` (lazyyysync-variables-v1, {total} variables)")
    w("**Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui (new-york) · Lucide Icons")
    w("")
    w("---")
    w("")

    # ── §1 token architecture ──────────────────────────────────────────────────
    w("## 1. Token Architecture")
    w("")
    w("Three-tier model plus four brand modes:")
    w("")
    w("```")
    w("Tier 1 — Primitive (raw values, never used directly in components)")
    for col in data["collections"]:
        if col["name"] in ("tw/colors", "rdx/colors", "tokens"):
            w(f"  {col['name']:<14} {col['variableCount']} vars")
    w("")
    w("Tier 2 — Semantic (CSS variables in globals.css)")
    w("  shadcn/ui   35 vars    --background, --primary, …")
    w("  Modes: light mode · dark mode · primary (blue) · secondary (yellow)")
    w("")
    w("Tier 3 — Tailwind utilities (generated via @theme inline)")
    tier3 = [c for c in data["collections"] if c["name"] not in ("tw/colors","rdx/colors","tokens","shadcn/ui")]
    w("  " + " · ".join(f"{c['name']} {c['variableCount']}" for c in tier3))
    w("```")
    w("")
    w("**Rule:** Components reference Tier 3 utilities only.")
    w("")
    w("---")
    w("")

    # ── §2 semantic tokens ─────────────────────────────────────────────────────
    w("## 2. shadcn/ui Semantic Tokens (35 variables × 4 modes)")
    w("")
    w("### 2.1 Naming convention")
    w("")
    w("- Base token (`--primary`) = surface color")
    w("- Paired token (`--primary-foreground`) = text / icon color on that surface")
    w("")
    w("### 2.2 Brand modes")
    w("")
    w("| Mode | CSS selector | Description |")
    w("| --- | --- | --- |")
    w('| `light mode` | `:root` | Neutral default (light) |')
    w('| `dark mode` | `.dark` | Neutral dark |')
    w('| `primary` | `[data-theme="primary"]` | Blue brand theme |')
    w('| `secondary` | `[data-theme="secondary"]` | Yellow brand theme |')
    w("")

    shadcn = by_col["shadcn/ui"]

    def shadcn_table(heading: str, names: list[str]) -> None:
        w("### " + heading)
        w("")
        w("| Token | CSS variable | Light | Dark | Primary (blue) | Secondary (yellow) |")
        w("| --- | --- | --- | --- | --- | --- |")
        for var in shadcn:
            if var["name"] not in names:
                continue
            n  = var["name"]
            mo = var["valuesByMode"]
            lm = fmt_color(mo.get("light mode", {}))
            dm = fmt_color(mo.get("dark mode", {}))
            pm = fmt_color(mo.get("primary", {}))
            sm = fmt_color(mo.get("secondary", {}))
            w(f"| `{n}` | `--{n}` | {lm} | {dm} | {pm} | {sm} |")
        w("")

    shadcn_table("2.3 Core surface & text",
        ["background","foreground","card","card-foreground","popover","popover-foreground"])
    shadcn_table("2.4 Brand & intent",
        ["primary","primary-foreground","secondary","secondary-foreground",
         "muted","muted-foreground","accent","accent-foreground","destructive"])
    shadcn_table("2.5 Forms & focus", ["border","input","ring"])

    w("### 2.6 Charts")
    w("")
    w("| Token | Light / Dark / Primary | Secondary (yellow) |")
    w("| --- | --- | --- |")
    for var in shadcn:
        if not var["name"].startswith("chart-"):
            continue
        n  = var["name"]
        mo = var["valuesByMode"]
        w("| `{}` | {} | {} |".format(n, fmt_color(mo.get("light mode",{})), fmt_color(mo.get("secondary",{}))))
    w("")

    shadcn_table("2.7 Sidebar",
        ["sidebar","sidebar-foreground","sidebar-primary","sidebar-primary-foreground",
         "sidebar-accent","sidebar-accent-foreground","sidebar-border","sidebar-ring"])
    shadcn_table("2.8 Kit-specific extras",
        ["background-color","semantic-background","semantic-border","semantic-foreground"])

    w("---")
    w("")

    # §3–§7 are static prose — copied from the existing DESIGN.md at generation time
    # For brevity this script writes a placeholder; run `update-prose.py` to merge prose.
    w("## 3. Component Composition Rules")
    w("")
    w("*See the installed DESIGN.md for the full prose section.*")
    w("")
    w("---")
    w("")
    w("## 4. Next.js App Router Patterns")
    w("")
    w("*See the installed DESIGN.md for the full prose section.*")
    w("")
    w("---")
    w("")
    w("## 5. Theming & globals.css")
    w("")
    w("*See the installed DESIGN.md for the full prose section.*")
    w("")
    w("---")
    w("")

    # ── §8 palette reference ───────────────────────────────────────────────────
    w("## 8. Token Palette Reference")
    w("")
    w("Raw primitives — do not use directly in components.")
    w("")

    # tw/colors
    w("### 8.1 tw/colors (244 variables)")
    w("")
    tw_flat = []
    for var in by_col["tw/colors"]:
        v = var["valuesByMode"]["Mode 1"]["value"]
        h = to_hex(v["r"], v["g"], v["b"]) if isinstance(v, dict) else "#000000"
        tw_flat.append((var["name"], h))
    lines.extend(three_col_table(tw_flat, ["Token","Hex","Token","Hex","Token","Hex"]))
    w("")

    # rdx/colors
    w("### 8.2 rdx/colors (396 variables — light + dark)")
    w("")
    w("| Token | Light | Dark | Token | Light | Dark |")
    w("| --- | --- | --- | --- | --- | --- |")
    rdx_flat = []
    for var in by_col["rdx/colors"]:
        mo = var["valuesByMode"]
        lv = mo.get("light mode", {}).get("value", {})
        dv = mo.get("dark mode", {}).get("value", {})
        lh = to_hex(lv["r"], lv["g"], lv["b"]) if isinstance(lv, dict) else ""
        dh = to_hex(dv["r"], dv["g"], dv["b"]) if isinstance(dv, dict) else ""
        rdx_flat.append((var["name"], lh, dh))
    for i in range(0, len(rdx_flat), 2):
        r1 = rdx_flat[i]
        r2 = rdx_flat[i+1] if i+1 < len(rdx_flat) else ("", "", "")
        w("| `{}` | {} | {} | `{}` | {} | {} |".format(r1[0],r1[1],r1[2],r2[0],r2[1],r2[2]))
    w("")

    # primitive tokens
    w("### 8.3 Primitive tokens (87 variables)")
    w("")
    tok_flat = [(v["name"], fmt_num(v["valuesByMode"]["Mode 1"])) for v in by_col["tokens"]]
    lines.extend(three_col_table(tok_flat, ["Token","Value","Token","Value","Token","Value"]))
    w("")
    w("---")
    w("")

    # ── §9 scale tokens ────────────────────────────────────────────────────────
    w("## 9. Scale Tokens")
    w("")

    scale_sections = [
        ("border-radius",  "9.1 Border Radius",            "All directional variants — static scale in px"),
        ("border-width",   "9.2 Border Width",              "All directional variants"),
        ("height",         "9.4 Height — h-*",              ""),
        ("gap",            "9.5 Gap — gap / gap-x / gap-y", "Use gap-* for flex/grid spacing, not space-*"),
        ("max-height",     "9.6 Max Height — max-h-*",      ""),
        ("max-width",      "9.7 Max Width — max-w-*",       ""),
        ("margin",         "9.8 Margin — m, mx, my, …",     "All directional variants"),
        ("padding",        "9.9 Padding — p, px, py, …",    "All directional variants"),
        ("space",          "9.10 Space — space-x / space-y","Prefer gap-* in new code"),
        ("stroke-width",   "9.11 Stroke Width",             "Lucide default: stroke-2"),
        ("opacity",        "9.12 Opacity",                  "Use modifier: bg-primary/30"),
    ]

    for col_name, heading, note in scale_sections:
        vars_ = by_col[col_name]
        w(f"### {heading} ({len(vars_)} variables)")
        if note:
            w(f"*{note}*")
        w("")
        flat = [(v["name"], fmt_num(v["valuesByMode"]["Mode 1"])) for v in vars_]
        lines.extend(three_col_table(flat, ["Token","Value","Token","Value","Token","Value"]))
        w("")

    # font
    font_vars = by_col["font"]
    w("### 9.3 Font (45 variables)")
    w("")
    w("**Family**")
    w("")
    w("| Token | Value | Variable |")
    w("| --- | --- | --- |")
    for v in font_vars:
        if not v["name"].startswith("family/"): continue
        val = v["valuesByMode"]["Mode 1"]["value"]
        tv  = "--font-sans" if "sans" in v["name"] else "--font-mono"
        w(f"| `{v['name']}` | `{val}` | `{tv}` |")
    w("")
    w("**Size, Weight, Style, Leading, Tracking**")
    w("")
    w("| Token | Value | Utility |")
    w("| --- | --- | --- |")
    tw_track = {"tighter":"-0.05em","tight":"-0.025em","normal":"0","wide":"0.025em","wider":"0.05em","widest":"0.1em"}
    for v in font_vars:
        n = v["name"]
        if n.startswith("family/"): continue
        val = v["valuesByMode"]["Mode 1"]["value"]
        if n.startswith("size/"):
            px = int(val); key = n.split("/")[1]
            rem = "{:.4f}".format(px/16).rstrip("0").rstrip(".")
            util = f"`text-{key}` ({px}px / {rem}rem)"
        elif n.startswith("weight/"):
            util = f"`font-{n.split('/')[1]}`"
        elif n.startswith("style/"):
            util = f"`{n.split('/')[1]}`"
        elif "tracking" in n:
            key = n.split("/")[-1]; util = f"`tracking-{key}` ({tw_track.get(key,'')})"
        elif n.startswith("leading/"):
            util = f"`leading-{n.split('/')[-1]}`"
        else:
            util = ""
        w(f"| `{n}` | `{val}` | {util} |")
    w("")

    # fontUse
    w("### 9.13 Font Use (2 variables)")
    w("")
    w("| Token | Value |")
    w("| --- | --- |")
    for v in by_col["fontUse"]:
        w("| `{}` | `{}` |".format(v["name"], v["valuesByMode"]["Mode 1"]["value"]))
    w("")
    w("---")
    w("")

    # ── §10 references ─────────────────────────────────────────────────────────
    w("## 10. References")
    w("")
    w(f"- Token source: `assets/variables-export.json` (lazyyysync-variables-v1, {total} variables)")
    w("- shadcn/ui Theming: https://ui.shadcn.com/docs/theming")
    w("- shadcn/ui Tailwind v4: https://ui.shadcn.com/docs/tailwind-v4")
    w("- shadcn/ui Components: https://ui.shadcn.com/docs/components")
    w("- Next.js App Router: https://nextjs.org/docs/app")
    w("- Tailwind CSS v4: https://tailwindcss.com/docs/theme")
    w("- Figma Dev Mode MCP: https://www.figma.com/blog/introducing-figmas-dev-mode-mcp-server/")

    content = "\n".join(lines)
    output_path.write_text(content)
    found = sum(1 for v in data["variables"] if f"`{v['name']}`" in content)
    print(f"Written: {output_path} ({content.count(chr(10))+1} lines, {found}/{total} variables)")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Regenerate DESIGN.md from design tokens")
    parser.add_argument("--tokens", default=str(TOKENS), help="Path to variables-export.json")
    parser.add_argument("--out",    default=str(OUTPUT), help="Output path for DESIGN.md")
    args = parser.parse_args()
    generate(Path(args.tokens), Path(args.out))
