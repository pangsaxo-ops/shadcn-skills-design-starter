<div align="center">

# shadcn-skills-design-starter

**Design-system-first starter** — a browsable component docs site, 56 shadcn/ui<br/>
components wired to Figma-synced tokens, and 18 Claude Code design skills.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-new--york-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com)

<br/>

![Components](https://img.shields.io/badge/components-56-22c55e?style=flat-square)
![Docs pages](https://img.shields.io/badge/docs_pages-58-14b8a6?style=flat-square)
![Design skills](https://img.shields.io/badge/Claude_skills-18-6366f1?style=flat-square)
![Design systems](https://img.shields.io/badge/design_systems-138-f97316?style=flat-square)
![Tokens](https://img.shields.io/badge/design_tokens-1806-fbbf24?style=flat-square)

</div>

---

## Overview

This starter is three things in one:

1. **A live component docs site** — every shadcn/ui component documented with interactive previews, code, and props at `/docs`.
2. **A Figma-synced design system** — 1806 design tokens, 4 brand modes that switch automatically, a strict Figma-to-code workflow.
3. **A Claude Code design studio** — 18 skills (build, audit, tokens, a11y, redesign, 138 named design systems) loaded into the project.

```
Figma ──▶ variables-export.json ──▶ app/globals.css ──▶ Tailwind utilities ──▶ Components ──▶ /docs
```

---

## Highlights

| | |
| --- | --- |
| 🧩 **56 components** | Every shadcn/ui component installed and documented — incl. sidebar, combobox, field, empty, input-group, kbd, spinner, native-select |
| 📖 **Docs site** | Browsable at `/docs` — preview/code tabs, props tables, token explorers (colors · typography · radius) |
| 🎨 **1806 tokens · 4 modes** | light · dark · primary (blue) · secondary (yellow) — re-theme every component from one tier |
| 🤖 **18 Claude skills** | Build, review, tokens, a11y, performance, redesign, UX writing, Figma sync + 138 design systems |
| 🔌 **Figma workflows** | Dev Mode MCP for design-to-code, plus a REST fallback script when MCP is rate-limited |

---

## Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 · App Router · React 19 |
| Language | TypeScript 5.6+ |
| Styling | Tailwind CSS v4 · `@theme inline` · no config file |
| UI library | shadcn/ui · new-york style · Lucide icons |
| Theme | 4 brand modes: light · dark · primary · secondary |
| Design source | Figma Dev Mode MCP (+ REST fallback) |
| AI workflow | Claude Code + 18 design skills |
| Token source | `assets/variables-export.json` · 1806 variables |

---

## Get started

```bash
git clone https://github.com/pangsaxo-ops/shadcn-skills-design-starter.git
cd shadcn-skills-design-starter
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** → redirects to the component docs site at `/docs`.

> **Figma REST (optional):** copy your token into `.env.local` as `FIGMA_ACCESS_TOKEN=…`. It is gitignored — never commit it.

---

## The component docs site

A full documentation site lives under `app/docs/`, navigable from the sidebar in three groups:

| Group | Pages |
| --- | --- |
| **Getting Started** | Introduction |
| **Design Tokens** | Colors (35 semantic × 4 modes) · Typography · Border Radius |
| **Components** | All 56 — each with **Preview / Code** tabs, installation, usage, examples, props |

Built from:

```
components/docs/
├── sidebar-nav.tsx          # left navigation (active-route aware)
├── component-preview.tsx    # Preview ⇄ Code tabbed wrapper
├── code-block.tsx           # syntax-styled code
├── color-palette.tsx        # click-to-copy swatches
├── semantic-tokens-panel.tsx# mode switcher + all-modes table
└── mode-switcher.tsx        # light / dark / primary / secondary

lib/docs-config.ts           # the docs nav tree (add a page here)
lib/tokens-data.ts           # token extraction for the token pages
```

---

## Project structure

```
shadcn-skills-design-starter/
│
├── app/
│   ├── layout.tsx               # ThemeProvider · next/font · metadata
│   ├── page.tsx                 # redirects → /docs
│   ├── globals.css              # ALL design tokens — generated, do not edit by hand
│   └── docs/                    # the component documentation site (58 pages)
│
├── components/
│   ├── ui/                      # 56 shadcn components — CLI-managed, never hand-write
│   └── docs/                    # docs-site building blocks
│
├── lib/
│   ├── utils.ts                 # cn() helper (clsx + tailwind-merge)
│   ├── docs-config.ts           # docs navigation tree
│   └── tokens-data.ts           # token data for docs
│
├── hooks/                       # use-mobile + custom hooks ("use client")
│
├── assets/
│   └── variables-export.json    # 1806 design tokens · 17 collections · 4 modes
│
├── scripts/
│   ├── export-globals-css.py    # rebuild app/globals.css from token JSON
│   ├── generate-design-md.py    # rebuild DESIGN.md from token JSON
│   ├── validate-tokens.py       # verify all 1806 tokens are documented
│   └── fetch-figma-node.js      # Figma REST helper (token from .env.local)
│
├── .claude/skills/              # 18 Claude Code skills (see below)
│
├── ux-ui-agent-skills/          # bundled design kit (138 systems, tokens, scripts)
│
├── CLAUDE.md                    # Claude Code instructions — loaded every session
├── AGENTS.md                    # instructions for all AI agents
└── DESIGN.md                    # complete design system spec (1806 tokens)
```

---

## Design tokens

All tokens live in `assets/variables-export.json`, exported from Figma in the **lazyyysync-variables-v1** format.

### 4 brand modes — tokens switch automatically

| Mode | CSS selector | Colors |
| --- | --- | --- |
| `light` | `:root` | Neutral default |
| `dark` | `.dark` | Neutral dark |
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

### Regenerate after a Figma export

```bash
python3 scripts/export-globals-css.py    # rebuild app/globals.css (4 modes)
python3 scripts/generate-design-md.py    # rebuild DESIGN.md
python3 scripts/validate-tokens.py       # verify all 1806 tokens present
```

---

## Claude Code design skills

18 skills are installed in `.claude/skills/` and load automatically in Claude Code. One is project-native (`shadcn-ui`); the other 17 come from the bundled [`ux-ui-agent-skills`](./ux-ui-agent-skills) kit and reference its tokens / scripts / 138 design systems.

| Skill | Use it to… |
| --- | --- |
| **shadcn-ui** | Build/review shadcn + Tailwind v4 + Next.js UI to this project's rules *(project-native)* |
| **design-tokens** · **token-build** · **brandkit** | Generate/validate DTCG tokens · build platform artifacts · create a brand system |
| **design-component** · **design-code** · **image-to-code** | Spec a component · generate any-framework code · turn a screenshot into code |
| **apply-aesthetic** · **redesign** | Apply one of 138 design systems (Apple, Linear, Stripe…) · upgrade an existing UI |
| **design-review** · **design-qa** · **a11y-audit** · **performance** | Critique · CI gates · WCAG 2.2 audit · Core Web Vitals |
| **figma-integration** · **migrate-design-system** | Sync tokens ↔ Figma Variables · bridge Material/HIG/Fluent/Carbon… |
| **governance** · **prototype** · **ux-writing** | Versioning & contribution · fidelity ladder · UI copy |

> Triggers can overlap — for this project's app code, `shadcn-ui` is the primary skill.

---

## Figma → Code workflow

Enforced by `.claude/skills/shadcn-ui/SKILL.md`, auto-triggered on Figma nodes or shadcn work.

```
Step 1   get_design_context(<node-id>)   structure + token names
Step 2   get_screenshot(<node-id>)       visual reference (fidelity source)
Step 3   get_variable_defs(<node-id>)    exact design tokens used
Step 4   Write INVENTORY                 list every visible element before JSX
Step 5   Implement against inventory     no extras, no omissions, no guessing
Step 6   Validate against screenshot     check each inventory item matches
```

| Rule | Meaning |
| --- | --- |
| **No adding** | If Figma doesn't show it — don't code it |
| **No removing** | If Figma shows 13 px — code 13 px, not 14 |
| **No inferring** | Uncertain value → stop and ask |
| **No polishing** | Honour the design, don't improve it |

### REST fallback (when the MCP is rate-limited)

```bash
node scripts/fetch-figma-node.js --search <term> <fileKey> <rootNodeId>   # find a node by name
node scripts/fetch-figma-node.js <nodeId> [fileKey]                       # fetch JSON + PNG
```

Reads `FIGMA_ACCESS_TOKEN` from `.env.local`; output lands in `.figma-cache/` (gitignored).

---

## Adding UI components

```bash
npx shadcn@latest search <query>          # search the registry
npx shadcn@latest add button card dialog  # install
npx shadcn@latest add button --dry-run    # preview
npx shadcn@latest add button --diff       # diff before overwrite
```

> Never hand-write files inside `components/ui/` — always use the CLI. After adding, document it: create `app/docs/<name>/page.tsx` and register it in `lib/docs-config.ts`.

---

## Conventions

### Next.js App Router

```tsx
// Default → Server Component (no directive)
export default async function Page() { … }

"use client"   // FIRST line — only for hooks / events / browser APIs
"use server"   // FIRST line — Server Actions
```

Push `"use client"` as deep as possible; keep pages and layouts as Server Components.

### Styling

```
DO                                    DON'T
─────────────────────────────────────────────────────────────────
bg-primary text-muted-foreground      bg-blue-500 text-gray-900
flex flex-col gap-4                   flex flex-col space-y-4
size-10                               w-10 h-10
cn("base", isActive && "bg-primary")  `base ${isActive && "…"}`
<Image src="…" />                     <img src="…" />
app/globals.css only                  new .css files anywhere
npx shadcn@latest add <name>          hand-writing components/ui/*
```

---

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server at http://localhost:3000 |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npx shadcn@latest info --json` | Show project config |
| `python3 scripts/validate-tokens.py` | Verify 1806-token coverage |
| `python3 scripts/export-globals-css.py` | Regenerate CSS from token JSON |
| `node scripts/fetch-figma-node.js …` | Fetch a Figma node via REST |

> ⚠️ Don't run `npm run build` while `npm run dev` is running — they share `.next` and the dev cache can corrupt (CSS 404s / "Cannot find module"). If it happens: stop dev, `rm -rf .next`, restart.

---

## References

| Resource | Link |
| --- | --- |
| shadcn/ui | [ui.shadcn.com/docs](https://ui.shadcn.com/docs) |
| Next.js App Router | [nextjs.org/docs/app](https://nextjs.org/docs/app) |
| Tailwind CSS v4 | [tailwindcss.com](https://tailwindcss.com) |
| Figma Dev Mode MCP | [figma.com/blog](https://www.figma.com/blog/introducing-figmas-dev-mode-mcp-server/) |
| ux-ui-agent-skills | [github.com/plugin87/ux-ui-agent-skills](https://github.com/plugin87/ux-ui-agent-skills) |
| Claude Code | [claude.ai/code](https://claude.ai/code) |

---

## License

MIT. The bundled [`ux-ui-agent-skills`](./ux-ui-agent-skills) kit is MIT-licensed by [plugin87](https://github.com/plugin87/ux-ui-agent-skills).
