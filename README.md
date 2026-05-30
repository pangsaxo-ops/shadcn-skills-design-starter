<div align="center">

# shadcn-skills-design-starter

**Design-system-first starter** — build pixel-perfect UI from Figma to code,<br/>
powered by shadcn/ui, Tailwind CSS v4, Next.js 15, and Claude Code.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-new--york-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com)

</div>

---

## Overview

This starter ships a fully wired design system — 1806 design tokens exported from Figma, strict Figma-to-code workflow enforced by a Claude Code skill, and four brand modes that switch automatically across every component.

```
Figma ──▶ variables-export.json ──▶ app/globals.css ──▶ Tailwind utilities ──▶ Components
```

---

## Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 · App Router · React 19 |
| Language | TypeScript 5.6+ |
| Styling | Tailwind CSS v4 · `@theme inline` · no config file |
| UI library | shadcn/ui · new-york style · Lucide icons |
| Theme | 4 brand modes: light · dark · primary · secondary |
| Design source | Figma Dev Mode MCP |
| AI workflow | Claude Code + custom skill |
| Token source | `assets/variables-export.json` · 1806 variables |

---

## Get started

```bash
git clone https://github.com/pangsaxo-ops/shadcn-skills-design-starter.git
cd shadcn-skills-design-starter
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project structure

```
shadcn-skills-design-starter/
│
├── app/                         # Next.js App Router
│   ├── layout.tsx               # ThemeProvider · metadata · root layout
│   ├── page.tsx                 # entry route (replace with your Figma screen)
│   └── globals.css              # all design tokens — generated, do not edit
│
├── components/
│   └── ui/                      # shadcn CLI-managed — never hand-write
│
├── lib/
│   └── utils.ts                 # cn() helper (clsx + tailwind-merge)
│
├── hooks/                       # custom hooks — always "use client"
│
├── assets/
│   └── variables-export.json    # 1806 design tokens · 17 collections · 4 modes
│
├── references/
│   ├── component-examples.md    # copy-paste patterns (forms, tables, dialogs…)
│   └── links.md                 # shadcn · Next.js · Figma · Radix · Lucide
│
├── scripts/
│   ├── export-globals-css.py    # rebuild app/globals.css from token JSON
│   ├── generate-design-md.py    # rebuild DESIGN.md from token JSON
│   └── validate-tokens.py       # verify all 1806 tokens are documented
│
├── .claude/
│   └── skills/shadcn-ui/
│       └── SKILL.md             # Claude Code UI build skill (auto-triggered)
│
├── CLAUDE.md                    # Claude Code instructions — loaded every session
├── AGENTS.md                    # Instructions for all AI agents
└── DESIGN.md                    # Complete design system spec (1806 tokens)
```

---

## Design tokens

All tokens live in `assets/variables-export.json`, exported from Figma using the **lazyyysync-variables-v1** format.

### 17 collections · 1806 variables

| Collection | Variables | Type |
| --- | --- | --- |
| shadcn/ui | 35 × 4 modes | Semantic color tokens |
| tw/colors | 244 | Tailwind raw palette |
| rdx/colors | 396 | Radix raw palette (light + dark) |
| tokens | 87 | Base numeric primitives |
| border-radius | 150 | All directional variants |
| border-width | 45 | All directional variants |
| font | 45 | Family · size · weight · leading |
| gap / margin / padding | 102 + 245 + 245 | Spacing |
| height / max-height / max-width | 24 + 35 + 51 | Sizing |
| space / stroke-width / opacity | 68 + 11 + 21 | Utilities |
| fontUse | 2 | Typography style |

### 4 brand modes — tokens switch automatically

| Mode | CSS selector | Colors |
| --- | --- | --- |
| `light mode` | `:root` | Neutral default |
| `dark mode` | `.dark` | Neutral dark |
| `primary` | `[data-theme="primary"]` | Blue brand |
| `secondary` | `[data-theme="secondary"]` | Yellow brand |

### Three-tier token model

```
Tier 1 — Primitives   tw/colors (244) · rdx/colors (396) · tokens (87)
                       Raw values — never used directly in components

Tier 2 — Semantic     shadcn/ui (35 vars) defined in app/globals.css
                       --background, --primary, --muted-foreground …

Tier 3 — Utilities    bg-primary · text-muted-foreground · gap-4 · rounded-lg …
                       What components actually use
```

> Change a **Tier 2** variable → every component re-themes automatically across all four modes.

### Regenerate after Figma export

```bash
python3 scripts/export-globals-css.py    # rebuild app/globals.css (4 modes)
python3 scripts/generate-design-md.py    # rebuild DESIGN.md
python3 scripts/validate-tokens.py       # verify all 1806 tokens present
```

---

## Adding UI components

```bash
# Search registry first
npx shadcn@latest search <query>

# Install components
npx shadcn@latest add button
npx shadcn@latest add button card dialog form table

# Community registries
npx shadcn@latest add @magicui/shimmer-button

# Preview before applying
npx shadcn@latest add button --dry-run
npx shadcn@latest add button --diff
```

> Never hand-write files inside `components/ui/` — always use the CLI.

---

## Figma → Code workflow

Enforced by `.claude/skills/shadcn-ui/SKILL.md` — Claude Code auto-triggers this skill when working with Figma nodes or shadcn components.

### 6 steps — mandatory order, never skip

```
Step 1   get_design_context(<node-id>)   structure + token names
Step 2   get_screenshot(<node-id>)       visual reference (fidelity source)
Step 3   get_variable_defs(<node-id>)    exact design tokens used
Step 4   Write INVENTORY                 list every visible element before JSX
Step 5   Implement against inventory     no extras, no omissions, no guessing
Step 6   Validate against screenshot     check each inventory item matches
```

### Fidelity contract

| Rule | Meaning |
| --- | --- |
| **No adding** | If Figma doesn't show it — don't code it |
| **No removing** | If Figma shows 13 px — code 13 px, not 14 |
| **No inferring** | Uncertain value → stop and ask |
| **No polishing** | Honour the design, don't improve it |

---

## Claude Code integration

This project is built for [Claude Code](https://claude.ai/code). Three files load automatically:

| File | When | Purpose |
| --- | --- | --- |
| `CLAUDE.md` | Every session | Stack · hard rules · commands |
| `DESIGN.md` | On demand | 1806 tokens · composition rules · Next.js patterns |
| `.claude/skills/shadcn-ui/SKILL.md` | Auto-triggered | Build · Figma→code · review · suggest |

The skill auto-triggers when working with shadcn components, Tailwind classes, `globals.css`, Figma nodes, or `app/` files.

---

## Next.js App Router rules

```tsx
// Default → Server Component (no directive needed)
export default async function Page() {
  const data = await fetch("…")
  return <Component data={data} />
}

// Needs hooks / events / browser APIs → Client Component
"use client"                              // must be FIRST line
import { useState } from "react"

// Server Action → first line of file
"use server"
export async function save(fd: FormData) { … }
```

Push `"use client"` as deep as possible — keep pages and layouts as Server Components.

---

## Styling rules

```
DO                                    DON'T
─────────────────────────────────────────────────────────────────
bg-primary text-muted-foreground      bg-blue-500 text-gray-900
flex flex-col gap-4                   flex flex-col space-y-4
size-10                               w-10 h-10
cn("base", isActive && "bg-primary")  `base ${isActive && "bg-primary"}`
<Image src="…" />                     <img src="…" />
app/globals.css only                  new .css files anywhere
npx shadcn@latest add <name>          hand-writing components/ui/*
```

---

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start dev server at http://localhost:3000 |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npx shadcn@latest info --json` | Show project config |
| `python3 scripts/validate-tokens.py` | Verify 1806 token coverage |
| `python3 scripts/export-globals-css.py` | Regenerate CSS from token JSON |
| `python3 scripts/generate-design-md.py` | Regenerate DESIGN.md |

---

## References

| Resource | Link |
| --- | --- |
| shadcn/ui | [ui.shadcn.com/docs](https://ui.shadcn.com/docs) |
| Next.js App Router | [nextjs.org/docs/app](https://nextjs.org/docs/app) |
| Tailwind CSS v4 | [tailwindcss.com](https://tailwindcss.com) |
| Figma Dev Mode MCP | [figma.com/blog](https://www.figma.com/blog/introducing-figmas-dev-mode-mcp-server/) |
| Claude Code | [claude.ai/code](https://claude.ai/code) |
| All links | [`references/links.md`](./references/links.md) |
| Component examples | [`references/component-examples.md`](./references/component-examples.md) |
