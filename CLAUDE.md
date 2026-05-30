# Claude Code Instructions

This file is loaded automatically into every Claude Code session for this project.

---

## 1. Read First

| File | Purpose | When |
| --- | --- | --- |
| [`DESIGN.md`](./DESIGN.md) | 1806 design tokens · composition rules · Next.js patterns | Before any UI work |
| [`.claude/skills/shadcn-ui/SKILL.md`](./.claude/skills/shadcn-ui/SKILL.md) | Build · Figma→code · review · suggest workflow | Auto-triggered by shadcn / Tailwind / Figma / app/ work |

**Rule:** When `DESIGN.md` conflicts with shadcn defaults, `DESIGN.md` wins.

---

## 2. Stack & Versions

| Layer | Technology | Version |
| --- | --- | --- |
| Framework | Next.js App Router | 15 |
| Runtime | React | 19 |
| Language | TypeScript | 5.6+ |
| Styling | Tailwind CSS v4 | 4.x (`@theme inline`, no config file) |
| UI components | shadcn/ui | new-york style · lucide icons |
| Design source | Figma Dev Mode MCP | `get_design_context` · `get_screenshot` · `get_variable_defs` |
| Package manager | npm (default) | check `packageManager` in `npx shadcn@latest info --json` |

---

## 3. Token Source & Brand Modes

**Source file:** `assets/variables-export.json` (lazyyysync-variables-v1, 1806 variables)

**4 brand modes** — all semantic tokens switch automatically:

| Mode | CSS selector | Colors |
| --- | --- | --- |
| `light mode` | `:root` | Neutral (default light) |
| `dark mode` | `.dark` | Neutral dark |
| `primary` | `[data-theme="primary"]` | Blue brand |
| `secondary` | `[data-theme="secondary"]` | Yellow brand |

**Token tiers** (DESIGN.md §1):
```
Tier 1 — tw/colors (244) · rdx/colors (396) · tokens (87)  — raw, never used directly
Tier 2 — shadcn/ui (35 vars) in app/globals.css             — semantic CSS variables
Tier 3 — Tailwind utilities: bg-primary, text-muted-foreground, gap-4, rounded-lg …
```
Components reference **Tier 3 only.**

---

## 4. Project Structure

```
app/
  layout.tsx          ← ThemeProvider · next/font · metadata · <html lang suppressHydrationWarning>
  page.tsx            ← entry route (Server Component by default)
  loading.tsx         ← Suspense fallback
  error.tsx           ← Error boundary ("use client" required)
  not-found.tsx       ← 404
  globals.css         ← ONLY CSS file — all token definitions here
  actions.ts          ← Server Actions ("use server" — first line of file)
components/
  ui/                 ← shadcn CLI-managed — never hand-write
  <feature>/          ← project components colocated by feature
lib/
  utils.ts            ← cn() helper (clsx + tailwind-merge)
hooks/                ← custom hooks — always "use client"
public/               ← static assets
assets/
  variables-export.json  ← design token source (1806 vars)
.claude/
  skills/shadcn-ui/SKILL.md  ← UI build skill
```

**Path aliases** (tsconfig.json `@/*` → `./`):

| Import | Resolves to |
| --- | --- |
| `@/components/ui/button` | `components/ui/button.tsx` |
| `@/lib/utils` | `lib/utils.ts` |
| `@/hooks/use-theme` | `hooks/use-theme.ts` |
| `@/app/actions` | `app/actions.ts` |

**Environment** — create `.env.local` (never commit):
```
FIGMA_ACCESS_TOKEN=<token>   # only needed for Figma REST API; MCP uses Claude settings
```

---

## 5. Figma Workflow (brief)

Figma is the **source of design intent.** Every component from Figma follows this order:

```
1. get_design_context(<node-id>)    → structure + token names
2. get_screenshot(<node-id>)        → visual reference
3. get_variable_defs(<node-id>)     → exact design tokens used
4. Write INVENTORY (mandatory)      → list every element before JSX
5. Implement against inventory      → no additions, no omissions, no inferences
6. Validate against screenshot      → check each inventory item
```

**Fidelity contract:**
- **No adding** — if Figma doesn't show it, don't code it
- **No removing** — if Figma shows 13 px, code 13 px (not 14)
- **No inferring** — uncertain value → stop and ask
- **No polishing** — honour the design, don't improve it

Full detail → SKILL.md §2. When to stop and ask → SKILL.md §7.

---

## 6. Next.js App Router

**Default is Server Component.** Add `"use client"` only when needed:

| Directive | Use when | Examples |
| --- | --- | --- |
| *(none)* | Data fetching, DB, no interactivity | Pages, layouts, stat cards |
| `"use client"` | Hooks · events · browser APIs | Forms, modals, dropdowns, theme switcher |
| `"use server"` | Server Actions (first line of file) | Form submit, mutations |

**Colocation rule:** push `"use client"` as **deep** as possible — keep page and layout as Server Components.

**Suspense:**
```tsx
import { Suspense } from "react"
<Suspense fallback={<Skeleton className="h-40 w-full" />}>
  <AsyncComponent />
</Suspense>
```

**Font setup** — `next/font`, never `<link>` or CDN:
```tsx
// app/layout.tsx
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
// apply: <html className={inter.variable}>
```

**ThemeProvider** (next-themes) in `app/layout.tsx`:
```tsx
import { ThemeProvider } from "next-themes"
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

**Brand mode** switch at runtime:
```tsx
document.documentElement.setAttribute("data-theme", "primary")   // blue
document.documentElement.setAttribute("data-theme", "secondary") // yellow
document.documentElement.removeAttribute("data-theme")           // neutral
```

**Metadata:**
```tsx
import type { Metadata } from "next"
export const metadata: Metadata = { title: "…", description: "…" }
```

---

## 7. Hard Rules

**Styling**
- Semantic tokens only — `bg-primary`, `text-muted-foreground`; **never** `bg-blue-500` or raw hex
- `gap-*` for flex/grid spacing — **never** `space-y-*` or `space-x-*`
- `size-10` when width = height — **never** `w-10 h-10`
- `cn()` from `@/lib/utils` for all conditional classes
- No manual `dark:` color overrides — tokens switch automatically across all modes

**Files**
- `app/globals.css` is the **only** CSS file — never create another
- `components/ui/*` is CLI-managed — **never** hand-write shadcn components
- `"use client"` must be the **first line** of the file
- `"use server"` must be the **first non-comment line** of the file

**Images & Media**
- Always `next/image` — **never** `<img>`

**Figma**
- No invented details — if the design doesn't show it, don't add it
- No silent translation — copy string in wrong language → ask first

---

## 8. What NOT to Do

```
❌  touch components/ui/*.tsx manually
❌  create any .css file other than app/globals.css
❌  use raw Tailwind colors: text-blue-500, bg-gray-100, text-emerald-600
❌  use dark: overrides: dark:bg-gray-900, dark:text-white
❌  use <img src="…" />  →  use <Image from "next/image" />
❌  use space-y-4        →  use flex flex-col gap-4
❌  use w-10 h-10        →  use size-10
❌  import icons from anywhere other than lucide-react
❌  run npx shadcn@latest apply --preset  (overwrites Figma-synced tokens)
❌  add "use client" to a file that only needs async data fetching
❌  manually write z-index on Dialog/Sheet/Drawer overlays
```

---

## 9. Setup — Before Any Code Change

```bash
npx shadcn@latest info --json
```

Key fields to check:

| Field | What it controls |
| --- | --- |
| `packageManager` | `npx` / `pnpm dlx` / `bunx --bun` |
| `style` | `new-york` (this project) |
| `base` | `radix` → `asChild`; `base` → `render` |
| `isRSC` | `true` → project uses App Router RSC |
| `tailwindVersion` | `v4` → `@theme inline` (no tailwind.config.ts) |
| `tailwindCssFile` | `app/globals.css` → edit only this |
| `iconLibrary` | `lucide` → import from `lucide-react` only |
| `components[]` | Already installed — do not re-add |

**Regenerate tokens** after Figma export:
```bash
python3 scripts/generate-design-md.py     # rebuild DESIGN.md
python3 scripts/export-globals-css.py     # rebuild app/globals.css
python3 scripts/validate-tokens.py        # verify 1806 vars + required sections
```

---

## 10. Commands

```bash
# Development
npm run dev
npm run build
npm run lint

# shadcn/ui CLI
npx shadcn@latest info --json
npx shadcn@latest search <query>
npx shadcn@latest add <component>
npx shadcn@latest add <component> --dry-run   # preview
npx shadcn@latest add <component> --diff      # diff before overwrite

# Token scripts
python3 scripts/validate-tokens.py
python3 scripts/generate-design-md.py
python3 scripts/export-globals-css.py
```
