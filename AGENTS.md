# AI Agent Instructions

Entry point for any AI coding agent — Claude Code, Cursor, GitHub Copilot, Windsurf, Codex.
Read this file and the two references below before making any change.

## Read in order

1. **[`DESIGN.md`](./DESIGN.md)** — 1806 design tokens (4 brand modes), composition rules, Next.js patterns
2. **[`.claude/skills/shadcn-ui/SKILL.md`](./.claude/skills/shadcn-ui/SKILL.md)** — UI build workflow, Figma→code, review checklist

---

## Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 · App Router · React 19 · TypeScript |
| Styling | Tailwind CSS v4 (`@theme inline` · no `tailwind.config.ts`) |
| UI library | shadcn/ui · new-york style · lucide icons · CLI-driven |
| Design source | Figma Dev Mode MCP (`get_design_context` · `get_screenshot` · `get_variable_defs`) |
| Token source | `assets/variables-export.json` · 1806 vars · 4 modes (light/dark/primary/secondary) |

---

## Design Source — Figma Dev Mode MCP

Figma is the **single source of design intent.** All UI comes from a Figma node.

**6-step workflow (mandatory order, do not skip):**

```
Step 1  get_design_context(<node-id>)    → React + Tailwind structure + token names
Step 2  get_screenshot(<node-id>)        → visual reference (source of truth for fidelity)
Step 3  get_variable_defs(<node-id>)     → exact design tokens used in this node
Step 4  Write INVENTORY                  → list every element visible before writing JSX
Step 5  Implement against inventory      → token-by-token, no extras, no omissions
Step 6  Validate against screenshot     → check every inventory item matches output
```

**Fidelity contract — non-negotiable:**
- **No adding:** if Figma doesn't show it, don't code it
- **No removing:** if Figma shows 13 px, code 13 px — not 14
- **No inferring:** uncertain value → stop and ask the user
- **No polishing:** honour the design choices, don't "improve" them

---

## Non-negotiable Rules

**Tokens**
- Use semantic tokens only: `bg-primary`, `text-muted-foreground`, `border-border`
- Never use raw Tailwind colors: `bg-blue-500`, `text-gray-900`, `text-emerald-600`
- Never use manual `dark:` overrides — tokens switch automatically across all 4 modes

**Spacing & sizing**
- `gap-*` on flex/grid parents — never `space-y-*` or `space-x-*`
- `size-10` when width equals height — never `w-10 h-10`
- `cn()` from `@/lib/utils` for all conditional class logic

**Files**
- `app/globals.css` is the only CSS file — never create another
- `components/ui/*` is CLI-managed — never hand-write these files
- `"use client"` must be the first line of the file
- `"use server"` must be the first non-comment line of the file

**Images**
- Always `next/image` — never bare `<img>`

**Icons**
- Always `lucide-react` — never another icon package

**shadcn components**
- Always `npx shadcn@latest add <name>` — never copy-paste from docs
- Never run `npx shadcn@latest apply --preset` — overwrites Figma-synced token values

---

## Next.js App Router — Component Rules

Default is **Server Component.** Add directives only when required:

| Directive | When | Common examples |
| --- | --- | --- |
| *(none)* | Async data, no interactivity | Pages, layouts, stat cards |
| `"use client"` | Hooks · events · browser APIs · interactive shadcn | Forms, dialogs, dropdowns |
| `"use server"` | Server Actions — first line of file | Form submit, DB mutations |

Push `"use client"` as **deep** as possible — keep pages and layouts as Server Components.

**File placement:**

```
app/<route>/page.tsx       ← route entry (Server Component)
app/<route>/layout.tsx     ← shared layout (Server Component)
app/<route>/loading.tsx    ← Suspense fallback
app/<route>/error.tsx      ← Error boundary ("use client")
app/actions.ts             ← Server Actions ("use server" — first line)
components/<feature>/      ← project components
components/ui/             ← shadcn (CLI-managed, never edit)
hooks/use-<name>.ts        ← custom hooks ("use client")
```

---

## Setup — Run Before Any Code Change

```bash
npx shadcn@latest info --json
```

Check: `packageManager` · `style` (new-york) · `isRSC` (true) · `tailwindVersion` (v4) · `tailwindCssFile` (app/globals.css) · `iconLibrary` (lucide)

---

## Commands

```bash
npm run dev
npm run build
npm run lint

npx shadcn@latest info --json
npx shadcn@latest search <query>
npx shadcn@latest add <component>
npx shadcn@latest add <component> --dry-run
npx shadcn@latest add <component> --diff

python3 scripts/validate-tokens.py      # verify 1806 token coverage
python3 scripts/generate-design-md.py   # regenerate DESIGN.md from token JSON
python3 scripts/export-globals-css.py   # regenerate app/globals.css from token JSON
```
