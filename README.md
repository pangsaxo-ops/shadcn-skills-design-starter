# shadcn-skills-design-starter

> **Design-system-first starter** for building pixel-perfect UI from Figma — powered by **shadcn/ui**, **Tailwind CSS v4**, **Next.js 15 App Router**, and **Claude Code** with Figma Dev Mode MCP.

---

## What's inside

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 · App Router · React 19 |
| Language | TypeScript 5.6+ |
| Styling | Tailwind CSS v4 (`@theme inline` · no config file) |
| UI library | shadcn/ui · new-york style · Lucide icons |
| Theme | 4 brand modes: light · dark · primary (blue) · secondary (yellow) |
| Design source | Figma Dev Mode MCP |
| AI assistant | Claude Code + custom skill |
| Tokens | 1806 design tokens from `variables-export.json` |

---

## Project structure

```
.
├── app/
│   ├── layout.tsx          # ThemeProvider · metadata · root layout
│   ├── page.tsx            # entry route
│   └── globals.css         # all design tokens (generated — do not edit by hand)
├── components/
│   └── ui/                 # shadcn CLI-managed components
├── lib/
│   └── utils.ts            # cn() helper
├── hooks/                  # custom hooks (always "use client")
├── assets/
│   └── variables-export.json   # 1806 design tokens · 17 collections · 4 modes
├── references/
│   ├── component-examples.md   # copy-paste patterns
│   └── links.md                # shadcn · Next.js · Figma · Radix links
├── scripts/
│   ├── generate-design-md.py   # regenerate DESIGN.md from token JSON
│   ├── export-globals-css.py   # regenerate app/globals.css from token JSON
│   └── validate-tokens.py      # verify 1806 token coverage + required sections
├── .claude/
│   └── skills/shadcn-ui/SKILL.md   # Claude Code UI build skill
├── CLAUDE.md               # Claude Code project instructions (auto-loaded)
├── AGENTS.md               # Instructions for all AI agents
└── DESIGN.md               # Complete design system spec (1806 tokens)
```

---

## Quick start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## Design tokens

All tokens live in `assets/variables-export.json` — exported from Figma using the **lazyyysync-variables-v1** format.

**17 collections · 1806 variables · 4 brand modes:**

| Mode | CSS selector | Description |
| --- | --- | --- |
| `light mode` | `:root` | Neutral default |
| `dark mode` | `.dark` | Neutral dark |
| `primary` | `[data-theme="primary"]` | Blue brand |
| `secondary` | `[data-theme="secondary"]` | Yellow brand |

**Token tiers:**

```
Tier 1 — Primitives    tw/colors (244) · rdx/colors (396) · tokens (87)
Tier 2 — Semantic      shadcn/ui (35 vars) in app/globals.css
Tier 3 — Utilities     gap-4 · bg-primary · text-muted-foreground · rounded-lg …
```

> Components reference **Tier 3 only.** Change a Tier 2 variable → every component re-themes automatically.

### Regenerate from Figma

After re-exporting `variables-export.json` from Figma, run:

```bash
python3 scripts/export-globals-css.py    # rebuild app/globals.css
python3 scripts/generate-design-md.py    # rebuild DESIGN.md
python3 scripts/validate-tokens.py       # verify all 1806 tokens present
```

---

## Adding components

```bash
# Search the registry first
npx shadcn@latest search <query>

# Add one or more components
npx shadcn@latest add button card dialog

# Preview before applying
npx shadcn@latest add button --dry-run
npx shadcn@latest add button --diff
```

> **Never hand-write files inside `components/ui/`** — always use the CLI.

---

## Figma → Code workflow

This starter enforces strict 1:1 fidelity between Figma designs and code via the Claude Code skill at `.claude/skills/shadcn-ui/SKILL.md`.

**6-step workflow:**

```
1. get_design_context(<node-id>)   → structure + token names
2. get_screenshot(<node-id>)       → visual reference
3. get_variable_defs(<node-id>)    → exact design tokens used
4. Write INVENTORY                 → list every visible element
5. Implement against inventory     → no extras, no omissions
6. Validate against screenshot     → check each item matches
```

**Fidelity contract — non-negotiable:**
- No adding — if Figma doesn't show it, don't code it
- No removing — if Figma shows 13 px, code 13 px
- No inferring — uncertain value → stop and ask
- No polishing — honour the design, don't improve it

---

## Claude Code integration

This project is optimised for **Claude Code**. Files load automatically:

| File | Loads | Purpose |
| --- | --- | --- |
| `CLAUDE.md` | Every session | Stack · rules · commands |
| `DESIGN.md` | On demand | 1806 tokens · composition rules · Next.js patterns |
| `.claude/skills/shadcn-ui/SKILL.md` | Auto-triggered | Build · Figma→code · review · suggest |

The skill triggers when working with shadcn components, Tailwind classes, `globals.css`, Figma nodes, or `app/` files.

---

## Key rules

```
✅ Semantic tokens only          bg-primary, text-muted-foreground
✅ gap-* for spacing             flex flex-col gap-4
✅ size-* when w = h             size-10
✅ cn() for conditional classes  cn("base", isActive && "bg-primary")
✅ next/image for all images     <Image src="…" alt="…" width={} height={} />
✅ "use client" as first line    if hooks / events / browser APIs needed
✅ "use server" as first line    for Server Actions in app/actions.ts

❌ Raw Tailwind colors           text-blue-500, bg-gray-100
❌ Manual dark: overrides        dark:bg-gray-900
❌ space-y-* / space-x-*
❌ <img> tags
❌ Hand-writing components/ui/*
❌ Creating new .css files
```

---

## References

- [shadcn/ui docs](https://ui.shadcn.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS v4](https://tailwindcss.com/docs/v4-beta)
- [Figma Dev Mode MCP](https://www.figma.com/blog/introducing-figmas-dev-mode-mcp-server/)
- [Claude Code](https://claude.ai/code)
- [`references/links.md`](./references/links.md) — full link collection
- [`references/component-examples.md`](./references/component-examples.md) — copy-paste patterns
