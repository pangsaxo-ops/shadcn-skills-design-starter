# Design System Specification
*shadcn/ui + Tailwind CSS v4 · Next.js 15 App Router · 1806 design tokens*

Single source of truth for all design tokens, composition rules, and Next.js patterns.
All component code, Figma exports, and AI-generated UI must follow this document.

**Token source:** `variables-export.json` (lazyyysync-variables-v1, 1806 variables)
**Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui (new-york) · Lucide Icons

---

## 1. Token Architecture

Three-tier model plus four brand modes:

```
Tier 1 — Primitive (raw values, never used directly in components)
  tw/colors   244 vars   Tailwind color palette
  rdx/colors  396 vars   Radix color palette (light + dark)
  tokens       87 vars   Base numeric values

Tier 2 — Semantic (CSS variables in globals.css)
  shadcn/ui   35 vars    --background, --primary, …
  Modes: light mode · dark mode · primary (blue) · secondary (yellow)

Tier 3 — Tailwind utilities (generated via @theme inline)
  border-radius 150 · border-width 45 · font 45 · gap 102
  margin 245 · padding 245 · height 24 · space 68 · max-h 35 · max-w 51
  stroke-width 11 · opacity 21 · fontUse 2
```

**Rule:** Components reference Tier 3 utilities only.
Changing a single Tier 2 variable re-themes every component automatically.

---

## 2. shadcn/ui Semantic Tokens (35 variables × 4 modes)

### 2.1 Naming convention

- Base token (`--primary`) = surface color
- Paired token (`--primary-foreground`) = text / icon color on that surface

### 2.2 Brand modes

| Mode | CSS selector | Description |
| --- | --- | --- |
| `light mode` | `:root` | Neutral default (light) |
| `dark mode` | `.dark` | Neutral dark |
| `primary` | `[data-theme="primary"]` | Blue brand theme |
| `secondary` | `[data-theme="secondary"]` | Yellow brand theme |

### 2.3 Core surface & text

| Token | CSS variable | Light | Dark | Primary (blue) | Secondary (yellow) |
| --- | --- | --- | --- | --- | --- |
| `background` | `--background` | white (#ffffff) | neutral/950 (#0a0a0a) | blue/950 (#172554) | yellow/900 (#713f12) |
| `foreground` | `--foreground` | neutral/950 (#0a0a0a) | neutral/50 (#fafafa) | blue/50 (#eff6ff) | yellow/50 (#fefce8) |
| `card` | `--card` | white (#ffffff) | neutral/900 (#171717) | blue/900 (#1e3a8a) | yellow/900 (#713f12) |
| `card-foreground` | `--card-foreground` | neutral/950 (#0a0a0a) | neutral/50 (#fafafa) | blue/50 (#eff6ff) | yellow/50 (#fefce8) |
| `popover` | `--popover` | white (#ffffff) | neutral/800 (#262626) | blue/800 (#1e40af) | yellow/800 (#854d0e) |
| `popover-foreground` | `--popover-foreground` | neutral/950 (#0a0a0a) | neutral/50 (#fafafa) | blue/50 (#eff6ff) | yellow/50 (#fefce8) |

### 2.4 Brand & intent

| Token | CSS variable | Light | Dark | Primary (blue) | Secondary (yellow) |
| --- | --- | --- | --- | --- | --- |
| `primary` | `--primary` | neutral/900 (#171717) | neutral/200 (#e5e5e5) | blue/200 (#bfdbfe) | yellow/200 (#fef08a) |
| `primary-foreground` | `--primary-foreground` | neutral/50 (#fafafa) | neutral/900 (#171717) | blue/900 (#1e3a8a) | yellow/900 (#713f12) |
| `secondary` | `--secondary` | neutral/100 (#f5f5f5) | neutral/800 (#262626) | blue/800 (#1e40af) | yellow/800 (#854d0e) |
| `secondary-foreground` | `--secondary-foreground` | neutral/950 (#0a0a0a) | neutral/50 (#fafafa) | blue/50 (#eff6ff) | yellow/50 (#fefce8) |
| `muted` | `--muted` | neutral/100 (#f5f5f5) | neutral/800 (#262626) | blue/800 (#1e40af) | yellow/800 (#854d0e) |
| `muted-foreground` | `--muted-foreground` | neutral/500 (#737373) | neutral/400 (#a3a3a3) | blue/400 (#60a5fa) | yellow/400 (#facc15) |
| `accent` | `--accent` | neutral/100 (#f5f5f5) | neutral/700 (#404040) | blue/700 (#1d4ed8) | yellow/700 (#a16207) |
| `accent-foreground` | `--accent-foreground` | neutral/900 (#171717) | neutral/50 (#fafafa) | blue/50 (#eff6ff) | yellow/50 (#fefce8) |
| `destructive` | `--destructive` | red/600 (#dc2626) | red/400 (#f87171) | red/400 (#f87171) | red/600 (#dc2626) |

### 2.5 Forms & focus

| Token | CSS variable | Light | Dark | Primary (blue) | Secondary (yellow) |
| --- | --- | --- | --- | --- | --- |
| `border` | `--border` | neutral/200 (#e5e5e5) | neutral/700 (#404040) | blue/700 (#1d4ed8) | yellow/700 (#a16207) |
| `input` | `--input` | neutral/200 (#e5e5e5) | neutral/900 (#171717) | blue/900 (#1e3a8a) | yellow/900 (#713f12) |
| `ring` | `--ring` | neutral/500 (#737373) | neutral/500 (#737373) | blue/500 (#3b82f6) | yellow/50 (#fefce8) |

### 2.6 Charts

| Token | Light / Dark / Primary | Secondary (yellow) |
| --- | --- | --- |
| `chart-1` | blue/8 (#5eb1ef) | yellow/8 (#d5ae39) |
| `chart-2` | blue/9 (#0090ff) | yellow/9 (#ffe629) |
| `chart-3` | blue/10 (#0588f0) | yellow/10 (#ffdc00) |
| `chart-4` | blue/11 (#0d74ce) | yellow/11 (#9e6c00) |
| `chart-5` | blue/12 (#113264) | yellow/12 (#473b1f) |

### 2.7 Sidebar

| Token | CSS variable | Light | Dark | Primary (blue) | Secondary (yellow) |
| --- | --- | --- | --- | --- | --- |
| `sidebar` | `--sidebar` | neutral/50 (#fafafa) | neutral/900 (#171717) | blue/900 (#1e3a8a) | yellow/900 (#713f12) |
| `sidebar-foreground` | `--sidebar-foreground` | neutral/950 (#0a0a0a) | neutral/50 (#fafafa) | blue/50 (#eff6ff) | yellow/50 (#fefce8) |
| `sidebar-primary` | `--sidebar-primary` | neutral/900 (#171717) | blue/10 (#0588f0) | blue/10 (#0588f0) | yellow/10 (#ffdc00) |
| `sidebar-primary-foreground` | `--sidebar-primary-foreground` | neutral/50 (#fafafa) | neutral/50 (#fafafa) | blue/50 (#eff6ff) | yellow/50 (#fefce8) |
| `sidebar-accent` | `--sidebar-accent` | neutral/100 (#f5f5f5) | neutral/800 (#262626) | blue/800 (#1e40af) | yellow/800 (#854d0e) |
| `sidebar-accent-foreground` | `--sidebar-accent-foreground` | neutral/900 (#171717) | neutral/50 (#fafafa) | blue/50 (#eff6ff) | yellow/50 (#fefce8) |
| `sidebar-border` | `--sidebar-border` | neutral/300 (#d4d4d4) | rgb(255 255 255/0.8) | rgb(255 255 255/0.8) | rgb(255 255 255/0.8) |
| `sidebar-ring` | `--sidebar-ring` | neutral/500 (#737373) | neutral/500 (#737373) | blue/500 (#3b82f6) | yellow/500 (#eab308) |

### 2.8 Kit-specific extras

| Token | CSS variable | Light | Dark | Primary (blue) | Secondary (yellow) |
| --- | --- | --- | --- | --- | --- |
| `background-color` | `--background-color` | rgb(0 0 0/0.3) | rgb(0 0 0/0.3) | rgb(0 0 0/0.3) | rgb(0 0 0/0.3) |
| `semantic-background` | `--semantic-background` | gray/500 (#6b7280) | gray/700 (#374151) | gray/900 (#111827) | gray/600 (#4b5563) |
| `semantic-border` | `--semantic-border` | gray/600 (#4b5563) | gray/600 (#4b5563) | gray/800 (#1f2937) | gray/800 (#1f2937) |
| `semantic-foreground` | `--semantic-foreground` | white (#ffffff) | white (#ffffff) | white (#ffffff) | white (#ffffff) |

---

## 3. Component Composition Rules

### 3.1 Styling rules

| Rule | Correct | Wrong |
| --- | --- | --- |
| Semantic tokens only | `bg-primary text-primary-foreground` | `bg-blue-500 text-white` |
| `gap-*` for spacing | `flex flex-col gap-4` | `space-y-4` |
| `size-*` when w = h | `size-10` | `w-10 h-10` |
| `truncate` shorthand | `truncate` | `overflow-hidden text-ellipsis whitespace-nowrap` |
| No manual `dark:` | `bg-background` | `bg-white dark:bg-gray-950` |
| `className` for layout | `<Card className="max-w-md">` | `<Card className="bg-blue-100">` |
| Status colors via Badge | `<Badge variant="secondary">` | `<span className="text-emerald-600">` |

### 3.2 Conditional classes — always use `cn()`

```tsx
import { cn } from "@/lib/utils"

<div className={cn("flex items-center", isActive && "bg-primary text-primary-foreground")} />
```

### 3.3 Forms

```tsx
<FieldGroup>
  <Field>
    <FieldLabel htmlFor="email">Email</FieldLabel>
    <Input id="email" type="email" />
    <FieldDescription>Helper text.</FieldDescription>
  </Field>
</FieldGroup>

// Validation
<Field data-invalid>
  <FieldLabel>Email</FieldLabel>
  <Input aria-invalid />
  <FieldDescription>Invalid email format.</FieldDescription>
</Field>
```

- Validation: `data-invalid` on Field + `aria-invalid` on control
- Disabled: `data-disabled` on Field + `disabled` on control
- 2–7 options → `ToggleGroup`, not a loop of Buttons
- Checkbox/Radio groups → `FieldSet` + `FieldLegend`

### 3.4 Composition

- Items must be inside their Group: `SelectItem` → `SelectGroup`, `DropdownMenuItem` → `DropdownMenuGroup`
- Custom triggers: `asChild` (Radix) or `render` (Base UI)
- Dialog / Sheet / Drawer must always have a `DialogTitle` (use `VisuallyHidden` if hidden)
- Do not set manual `z-index` on overlays — shadcn manages stacking

### 3.5 Icons

```tsx
// Inside Button — data-icon, no size class
<Button><PlusIcon data-icon="inline-start" />Add</Button>

// Outside Button — explicit size
<SearchIcon className="size-4" />
```

Import from `lucide-react` only (matches `iconLibrary` in `components.json`).

---

## 4. Next.js App Router Patterns

### 4.1 Server vs Client Components

| Directive | When to use | Examples |
| --- | --- | --- |
| *(none — default)* | Data fetching, DB queries, no interactivity | Page layouts, async data |
| `"use client"` | Hooks, events, browser APIs | Forms, modals, interactive shadcn |
| `"use server"` | Server Actions inside forms | Form submit handlers |

**Colocation rule:** push `"use client"` boundary as deep as possible — keep parents as Server Components.

```tsx
// app/page.tsx — Server Component (no directive)
export default async function Page() {
  const data = await fetchData()       // direct DB / API call
  return <ProductList items={data} />  // pass data to client leaf
}

// components/product-list.tsx — Client Component
"use client"
import { useState } from "react"
export function ProductList({ items }) {
  const [filter, setFilter] = useState("")
  return <div>…</div>
}
```

### 4.2 File conventions

```
app/
  layout.tsx        ← root layout: ThemeProvider, fonts, <html lang="en">
  page.tsx          ← route entry (Server Component by default)
  loading.tsx       ← Suspense fallback shown while page loads
  error.tsx         ← Error boundary ("use client" required)
  not-found.tsx     ← 404 handler
  globals.css       ← ALL token definitions (the only CSS file)
components/
  ui/               ← shadcn CLI-managed components (never edit manually)
  <feature>/        ← project components, colocated with their feature
lib/
  utils.ts          ← cn() and shared utilities
hooks/              ← custom hooks (always "use client")
```

### 4.3 ThemeProvider setup

```tsx
// app/layout.tsx
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 4.4 Brand mode switching

```tsx
// Apply a brand mode via data-theme on <html>
<html data-theme="primary">   {/* blue brand */}
<html data-theme="secondary"> {/* yellow brand */}
// No attribute or class="dark" for the neutral modes

// Tokens update automatically — no code changes to components required
```

### 4.5 Server Actions

```tsx
// app/actions.ts
"use server"
export async function submitForm(formData: FormData) {
  const email = formData.get("email") as string
  // validate + persist ...
}

// Usage in a Server Component form
<form action={submitForm}>
  <Input name="email" />
  <Button type="submit">Submit</Button>
</form>
```

### 4.6 Metadata

```tsx
// app/page.tsx
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Page title",
  description: "Page description",
}
```

---

## 5. Theming & globals.css

All tokens live in `app/globals.css` — never create a new CSS file.

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --radius: 0.5rem;
  --background: #ffffff;
  /* … all 35 semantic tokens for light mode … */
}
.dark {
  --background: #0a0a0a;
  /* … dark mode overrides … */
}
[data-theme="primary"] {
  --background: #172554; --primary: #bfdbfe;
  /* … blue brand overrides … */
}
[data-theme="secondary"] {
  --background: #713f12; --primary: #fef08a;
  /* … yellow brand overrides … */
}

@theme inline {
  --color-background: var(--background);
  /* … all color mappings … */
  --radius-lg: 0.5rem; /* xs→4xl static scale */
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, SFMono-Regular, monospace;
}

@layer base {
  * { @apply border-border outline-ring/50; }
  body { @apply bg-background text-foreground; }
}
```

### Adding a custom token

Define in every mode the project uses, then register with Tailwind:

```css
:root                    { --warning: #f59e0b; --warning-foreground: #451a03; }
.dark                    { --warning: #b45309; --warning-foreground: #fffbeb; }
[data-theme="primary"]   { --warning: #fbbf24; --warning-foreground: #1e3a8a; }
[data-theme="secondary"] { --warning: #d97706; --warning-foreground: #713f12; }
@theme inline { --color-warning: var(--warning); --color-warning-foreground: var(--warning-foreground); }
```

---

## 6. Dark Mode

Class-based via `.dark` on `<html>` — managed by `next-themes`.
Never use manual `dark:` color overrides — semantic tokens switch automatically.

```tsx
// ✅ Correct
<div className="bg-background text-foreground" />

// ❌ Wrong
<div className="bg-white text-black dark:bg-gray-950 dark:text-white" />
```

---

## 7. Figma ↔ Code Alignment

Figma is the source of design intent — code mirrors it exactly.

### MCP tools

| Tool | Returns | When |
| --- | --- | --- |
| `get_design_context` | React + Tailwind structure + Code Connect | Starting to implement a node |
| `get_metadata` | High-level node map | Response is too large |
| `get_screenshot` | Visual reference | Validating fidelity |
| `get_variable_defs` | Token names used in the node | Mapping to CSS variables |

### Token mapping

| Figma reports | CSS variable | Tailwind utility |
| --- | --- | --- |
| `background` | `--background` | `bg-background` |
| `primary` | `--primary` | `bg-primary` |
| `muted-foreground` | `--muted-foreground` | `text-muted-foreground` |
| `space/4` (16 px) | — | `p-4`, `gap-4` |
| `radius/lg` | `--radius-lg` | `rounded-lg` |

---

## 8. Token Palette Reference

Raw primitives — do not use directly in components.

### 8.1 tw/colors (244 variables)

| Token | Hex | Token | Hex | Token | Hex |
| --- | --- | --- | --- | --- | --- |
| `gray/50` | #f9fafb | `gray/100` | #f3f4f6 | `gray/200` | #e5e7eb |
| `gray/300` | #d1d5db | `gray/400` | #9ca3af | `gray/500` | #6b7280 |
| `gray/600` | #4b5563 | `gray/700` | #374151 | `gray/800` | #1f2937 |
| `gray/900` | #111827 | `gray/950` | #030712 | `slate/50` | #f8fafc |
| `slate/100` | #f1f5f9 | `slate/200` | #e2e8f0 | `slate/300` | #cbd5e1 |
| `slate/400` | #94a3b8 | `slate/500` | #64748b | `slate/600` | #475569 |
| `slate/700` | #334155 | `slate/800` | #1e293b | `slate/900` | #0f172a |
| `slate/950` | #020617 | `zinc/50` | #fafafa | `zinc/100` | #f4f4f5 |
| `zinc/200` | #e4e4e7 | `zinc/300` | #d4d4d8 | `zinc/400` | #a1a1aa |
| `zinc/500` | #71717a | `zinc/600` | #52525b | `zinc/700` | #3f3f46 |
| `zinc/800` | #27272a | `zinc/900` | #18181b | `zinc/950` | #09090b |
| `neutral/50` | #fafafa | `neutral/100` | #f5f5f5 | `neutral/200` | #e5e5e5 |
| `neutral/300` | #d4d4d4 | `neutral/400` | #a3a3a3 | `neutral/500` | #737373 |
| `neutral/600` | #525252 | `neutral/700` | #404040 | `neutral/800` | #262626 |
| `neutral/900` | #171717 | `neutral/950` | #0a0a0a | `stone/50` | #fafaf9 |
| `stone/100` | #f5f5f4 | `stone/200` | #e7e5e4 | `stone/300` | #d6d3d1 |
| `stone/400` | #a8a29e | `stone/500` | #78716c | `stone/600` | #57534e |
| `stone/700` | #44403c | `stone/800` | #292524 | `stone/900` | #1c1917 |
| `stone/950` | #0c0a09 | `red/50` | #fef2f2 | `red/100` | #fee2e2 |
| `red/200` | #fecaca | `red/300` | #fca5a5 | `red/400` | #f87171 |
| `red/500` | #ef4444 | `red/600` | #dc2626 | `red/700` | #b91c1c |
| `red/800` | #991b1b | `red/900` | #7f1d1d | `red/950` | #450a0a |
| `orange/50` | #fff7ed | `orange/100` | #ffedd5 | `orange/200` | #fed7aa |
| `orange/300` | #fdba74 | `orange/400` | #fb923c | `orange/500` | #f97316 |
| `orange/600` | #ea580c | `orange/700` | #c2410c | `orange/800` | #9a3412 |
| `orange/900` | #7c2d12 | `orange/950` | #431407 | `amber/50` | #fffbeb |
| `amber/100` | #fef3c7 | `amber/200` | #fde68a | `amber/300` | #fcd34d |
| `amber/400` | #fbbf24 | `amber/500` | #f59e0b | `amber/600` | #d97706 |
| `amber/700` | #b45309 | `amber/800` | #92400e | `amber/900` | #78350f |
| `amber/950` | #451a03 | `yellow/50` | #fefce8 | `yellow/100` | #fef9c3 |
| `yellow/200` | #fef08a | `yellow/300` | #fde047 | `yellow/400` | #facc15 |
| `yellow/500` | #eab308 | `yellow/600` | #ca8a04 | `yellow/700` | #a16207 |
| `yellow/800` | #854d0e | `yellow/900` | #713f12 | `yellow/950` | #422006 |
| `lime/50` | #f7fee7 | `lime/100` | #ecfccb | `lime/200` | #d9f99d |
| `lime/300` | #bef264 | `lime/400` | #a3e635 | `lime/500` | #84cc16 |
| `lime/600` | #65a30d | `lime/700` | #4d7c0f | `lime/800` | #3f6212 |
| `lime/900` | #365314 | `lime/950` | #1a2e05 | `green/50` | #f0fdf4 |
| `green/100` | #dcfce7 | `green/200` | #bbf7d0 | `green/300` | #86efac |
| `green/400` | #4ade80 | `green/500` | #22c55e | `green/600` | #16a34a |
| `green/700` | #15803d | `green/800` | #166534 | `green/900` | #14532d |
| `green/950` | #052e16 | `emerald/50` | #ecfdf5 | `emerald/100` | #d1fae5 |
| `emerald/200` | #a7f3d0 | `emerald/300` | #6ee7b7 | `emerald/400` | #34d399 |
| `emerald/500` | #10b981 | `emerald/600` | #059669 | `emerald/700` | #047857 |
| `emerald/800` | #065f46 | `emerald/900` | #064e3b | `emerald/950` | #022c22 |
| `teal/50` | #f0fdfa | `teal/100` | #ccfbf1 | `teal/200` | #99f6e4 |
| `teal/300` | #5eead4 | `teal/400` | #2dd4bf | `teal/500` | #14b8a6 |
| `teal/600` | #0d9488 | `teal/700` | #0f766e | `teal/800` | #115e59 |
| `teal/900` | #134e4a | `teal/950` | #042f2e | `cyan/50` | #ecfeff |
| `cyan/100` | #cffafe | `cyan/200` | #a5f3fc | `cyan/300` | #67e8f9 |
| `cyan/400` | #22d3ee | `cyan/500` | #06b6d4 | `cyan/600` | #0891b2 |
| `cyan/700` | #0e7490 | `cyan/800` | #155e75 | `cyan/900` | #164e63 |
| `cyan/950` | #083344 | `sky/50` | #f0f9ff | `sky/100` | #e0f2fe |
| `sky/200` | #bae6fd | `sky/300` | #7dd3fc | `sky/400` | #38bdf8 |
| `sky/500` | #38bdf8 | `sky/600` | #0284c7 | `sky/700` | #0369a1 |
| `sky/800` | #075985 | `sky/900` | #0c4a6e | `sky/950` | #082f49 |
| `blue/50` | #eff6ff | `blue/100` | #dbeafe | `blue/200` | #bfdbfe |
| `blue/300` | #93c5fd | `blue/400` | #60a5fa | `blue/500` | #3b82f6 |
| `blue/600` | #2563eb | `blue/700` | #1d4ed8 | `blue/800` | #1e40af |
| `blue/900` | #1e3a8a | `blue/950` | #172554 | `indigo/50` | #eef2ff |
| `indigo/100` | #e0e7ff | `indigo/200` | #c7d2fe | `indigo/300` | #a5b4fc |
| `indigo/400` | #818cf8 | `indigo/500` | #6366f1 | `indigo/600` | #4f46e5 |
| `indigo/700` | #4338ca | `indigo/800` | #3730a3 | `indigo/900` | #312e81 |
| `indigo/950` | #1e1b4b | `violet/50` | #f5f3ff | `violet/100` | #ede9fe |
| `violet/200` | #ddd6fe | `violet/300` | #c4b5fd | `violet/400` | #a78bfa |
| `violet/500` | #8b5cf6 | `violet/600` | #7c3aed | `violet/700` | #6d28d9 |
| `violet/800` | #5b21b6 | `violet/900` | #4c1d95 | `violet/950` | #2e1065 |
| `purple/50` | #faf5ff | `purple/100` | #f3e8ff | `purple/200` | #e9d5ff |
| `purple/300` | #d8b4fe | `purple/400` | #c084fc | `purple/500` | #a855f7 |
| `purple/600` | #9333ea | `purple/700` | #7e22ce | `purple/800` | #6b21a8 |
| `purple/900` | #581c87 | `purple/950` | #3b0764 | `fuchsia/50` | #fdf4ff |
| `fuchsia/100` | #fae8ff | `fuchsia/200` | #f5d0fe | `fuchsia/300` | #f0abfc |
| `fuchsia/400` | #e879f9 | `fuchsia/500` | #d946ef | `fuchsia/600` | #c026d3 |
| `fuchsia/700` | #a21caf | `fuchsia/800` | #86198f | `fuchsia/900` | #701a75 |
| `fuchsia/950` | #4a044e | `pink/50` | #fdf2f8 | `pink/100` | #fce7f3 |
| `pink/200` | #fbcfe8 | `pink/300` | #f9a8d4 | `pink/400` | #f472b6 |
| `pink/500` | #ec4899 | `pink/600` | #db2777 | `pink/700` | #be185d |
| `pink/800` | #9d174d | `pink/900` | #831843 | `pink/950` | #500724 |
| `rose/50` | #fff1f2 | `rose/100` | #ffe4e6 | `rose/200` | #fecdd3 |
| `rose/300` | #fda4af | `rose/400` | #fb7185 | `rose/500` | #f43f5e |
| `rose/600` | #e11d48 | `rose/700` | #be123c | `rose/800` | #9f1239 |
| `rose/900` | #881337 | `rose/950` | #4c0519 | `black` | #000000 |
| `white` | #ffffff | `` |  | `` |  |

### 8.2 rdx/colors (396 variables — light + dark)

| Token | Light | Dark | Token | Light | Dark |
| --- | --- | --- | --- | --- | --- |
| `gray/1` | #fcfcfc | #111111 | `gray/2` | #f9f9f9 | #191919 |
| `gray/3` | #f0f0f0 | #222222 | `gray/4` | #e8e8e8 | #2a2a2a |
| `gray/5` | #e0e0e0 | #313131 | `gray/6` | #d9d9d9 | #3a3a3a |
| `gray/7` | #cecece | #484848 | `gray/8` | #bbbbbb | #606060 |
| `gray/9` | #8d8d8d | #6e6e6e | `gray/10` | #838383 | #7b7b7b |
| `gray/11` | #646464 | #b4b4b4 | `gray/12` | #202020 | #eeeeee |
| `mauve/1` | #fdfcfd | #121113 | `mauve/2` | #faf9fb | #1a191b |
| `mauve/3` | #f2eff3 | #232225 | `mauve/4` | #eae7ec | #2b292d |
| `mauve/5` | #e3dfe6 | #323035 | `mauve/6` | #dbd8e0 | #3c393f |
| `mauve/7` | #d0cdd7 | #49474e | `mauve/8` | #bcbac7 | #625f69 |
| `mauve/9` | #8e8c99 | #6f6d78 | `mauve/10` | #84828e | #7c7a85 |
| `mauve/11` | #65636d | #7c7a85 | `mauve/12` | #211f26 | #7c7a85 |
| `slate/1` | #fcfcfd | #111113 | `slate/2` | #f9f9fb | #18191b |
| `slate/3` | #f0f0f3 | #212225 | `slate/4` | #e8e8ec | #272a2d |
| `slate/5` | #e0e1e6 | #2e3135 | `slate/6` | #d9d9e0 | #363a3f |
| `slate/7` | #cdced6 | #43484e | `slate/8` | #b9bbc6 | #5a6169 |
| `slate/9` | #8b8d98 | #696e77 | `slate/10` | #80838d | #777b84 |
| `slate/11` | #60646c | #b0b4ba | `slate/12` | #1c2024 | #edeef0 |
| `sage/1` | #fbfdfc | #101211 | `sage/2` | #f7f9f8 | #171918 |
| `sage/3` | #eef1f0 | #202221 | `sage/4` | #e6e9e8 | #272a29 |
| `sage/5` | #dfe2e0 | #2e3130 | `sage/6` | #d7dad9 | #373b39 |
| `sage/7` | #cbcfcd | #444947 | `sage/8` | #b8bcba | #5b625f |
| `sage/9` | #868e8b | #63706b | `sage/10` | #7c8481 | #adb5b2 |
| `sage/11` | #5f6563 | #adb5b2 | `sage/12` | #1a211e | #eceeed |
| `olive/1` | #fcfdfc | #111210 | `olive/2` | #f8faf8 | #181917 |
| `olive/3` | #eff1ef | #212220 | `olive/4` | #e7e9e7 | #282a27 |
| `olive/5` | #dfe2df | #2f312e | `olive/6` | #d7dad7 | #383a36 |
| `olive/7` | #cccfcc | #454843 | `olive/8` | #b9bcb8 | #5c625b |
| `olive/9` | #898e87 | #687066 | `olive/10` | #7f847d | #767d74 |
| `olive/11` | #60655f | #afb5ad | `olive/12` | #1d211c | #eceeec |
| `sand/1` | #fdfdfc | #111110 | `sand/2` | #f9f9f8 | #191918 |
| `sand/3` | #f1f0ef | #222221 | `sand/4` | #e9e8e6 | #2a2a28 |
| `sand/5` | #e2e1de | #31312e | `sand/6` | #dad9d6 | #3b3a37 |
| `sand/7` | #cfceca | #494844 | `sand/8` | #bcbbb5 | #62605b |
| `sand/9` | #8d8d86 | #6f6d66 | `sand/10` | #82827c | #7c7b74 |
| `sand/11` | #63635e | #b5b3ad | `sand/12` | #21201c | #eeeeec |
| `tomato/1` | #fffcfc | #181111 | `tomato/2` | #fff8f7 | #1f1513 |
| `tomato/3` | #feebe7 | #391714 | `tomato/4` | #ffdcd3 | #4e1511 |
| `tomato/5` | #ffcdc2 | #5e1c16 | `tomato/6` | #fdbdaf | #6e2920 |
| `tomato/7` | #f5a898 | #853a2d | `tomato/8` | #ec8e7b | #ac4d39 |
| `tomato/9` | #e54d2e | #e54d2e | `tomato/10` | #dd4425 | #ec6142 |
| `tomato/11` | #d13415 | #ff977d | `tomato/12` | #5c271f | #fbd3cb |
| `red/1` | #fffcfc | #191111 | `red/2` | #fff7f7 | #201314 |
| `red/3` | #feebec | #3b1219 | `red/4` | #ffdbdc | #500f1c |
| `red/5` | #ffcdce | #611623 | `red/6` | #fdbdbe | #72232d |
| `red/7` | #f4a9aa | #8c333a | `red/8` | #eb8e90 | #b54548 |
| `red/9` | #e5484d | #e5484d | `red/10` | #dc3e42 | #ec5d5e |
| `red/11` | #ce2c31 | #ff9592 | `red/12` | #641723 | #ffd1d9 |
| `ruby/1` | #fffcfd | #191113 | `ruby/2` | #fff7f8 | #1e1517 |
| `ruby/3` | #feeaed | #3a141e | `ruby/4` | #ffdce1 | #4e1325 |
| `ruby/5` | #ffced6 | #5e1a2e | `ruby/6` | #f8bfc8 | #6f2539 |
| `ruby/7` | #efacb8 | #883447 | `ruby/8` | #e592a3 | #b3445a |
| `ruby/9` | #e54666 | #e54666 | `ruby/10` | #dc3b5d | #ec5a72 |
| `ruby/11` | #ca244d | #ff949d | `ruby/12` | #64172b | #fed2e1 |
| `crimson/1` | #fffcfd | #191114 | `crimson/2` | #fef7f9 | #201318 |
| `crimson/3` | #ffe9f0 | #381525 | `crimson/4` | #fedce7 | #4d122f |
| `crimson/5` | #facedd | #5c1839 | `crimson/6` | #f3bed1 | #6d2545 |
| `crimson/7` | #eaacc3 | #873356 | `crimson/8` | #e093b2 | #b0436e |
| `crimson/9` | #e93d82 | #e93d82 | `crimson/10` | #df3478 | #ee518a |
| `crimson/11` | #cb1d63 | #ff92ad | `crimson/12` | #621639 | #fdd3e8 |
| `pink/1` | #fffcfe | #191117 | `pink/2` | #fef7fb | #21121d |
| `pink/3` | #fee9f5 | #37172f | `pink/4` | #fbdcef | #4b143d |
| `pink/5` | #f6cee7 | #591c47 | `pink/6` | #efbfdd | #692955 |
| `pink/7` | #e7acd0 | #833869 | `pink/8` | #dd93c2 | #a84885 |
| `pink/9` | #d6409f | #d6409f | `pink/10` | #cf3897 | #de51a8 |
| `pink/11` | #c2298a | #ff8dcc | `pink/12` | #651249 | #fdd1ea |
| `plum/1` | #fefcff | #181118 | `plum/2` | #fdf7fd | #201320 |
| `plum/3` | #fbebfb | #351a35 | `plum/4` | #f7def8 | #451d47 |
| `plum/5` | #f2d1f3 | #512454 | `plum/6` | #e9c2ec | #5e3061 |
| `plum/7` | #deade3 | #734079 | `plum/8` | #cf91d8 | #92549c |
| `plum/9` | #ab4aba | #ab4aba | `plum/10` | #a144af | #b658c4 |
| `plum/11` | #953ea3 | #e796f3 | `plum/12` | #53195d | #f4d4f4 |
| `purple/1` | #fefcfe | #ecd9fa | `purple/2` | #fbf7fe | #d19dff |
| `purple/3` | #f7edfe | #9a5cd0 | `purple/4` | #f2e2fc | #8e4ec6 |
| `purple/5` | #ead5f9 | #8457aa | `purple/6` | #e0c4f4 | #664282 |
| `purple/7` | #d1afec | #54346b | `purple/8` | #be93e4 | #48295c |
| `purple/9` | #8e4ec6 | #3d224e | `purple/10` | #8347b9 | #301c3b |
| `purple/11` | #8145b5 | #1e1523 | `purple/12` | #402060 | #18111b |
| `violet/1` | #fdfcfe | #14121f | `violet/2` | #faf8ff | #1b1525 |
| `violet/3` | #f4f0fe | #291f43 | `violet/4` | #ebe4ff | #33255b |
| `violet/5` | #e1d9ff | #3c2e69 | `violet/6` | #d4cafe | #473876 |
| `violet/7` | #c2b5f5 | #56468b | `violet/8` | #aa99ec | #6958ad |
| `violet/9` | #6e56cf | #6e56cf | `violet/10` | #654dc4 | #7d66d9 |
| `violet/11` | #6550b9 | #baa7ff | `violet/12` | #2f265f | #e2ddfe |
| `iris/1` | #fdfdff | #13131e | `iris/2` | #f8f8ff | #171625 |
| `iris/3` | #f0f1fe | #202248 | `iris/4` | #e6e7ff | #262a65 |
| `iris/5` | #dadcff | #303374 | `iris/6` | #cbcdff | #3d3e82 |
| `iris/7` | #b8baf8 | #4a4a95 | `iris/8` | #9b9ef0 | #5958b1 |
| `iris/9` | #5b5bd6 | #5b5bd6 | `iris/10` | #5151cd | #6e6ade |
| `iris/11` | #5753c6 | #b1a9ff | `iris/12` | #272962 | #e0dffe |
| `indigo/1` | #fdfdfe | #11131f | `indigo/2` | #f7f9ff | #141726 |
| `indigo/3` | #edf2fe | #182449 | `indigo/4` | #e1e9ff | #1d2e62 |
| `indigo/5` | #d2deff | #253974 | `indigo/6` | #c1d0ff | #304384 |
| `indigo/7` | #abbdf9 | #3a4f97 | `indigo/8` | #8da4ef | #435db1 |
| `indigo/9` | #3e63dd | #3e63dd | `indigo/10` | #3358d4 | #5472e4 |
| `indigo/11` | #3a5bc7 | #9eb1ff | `indigo/12` | #1f2d5c | #d6e1ff |
| `blue/1` | #fbfdff | #0d1520 | `blue/2` | #f4faff | #111927 |
| `blue/3` | #e6f4fe | #0d2847 | `blue/4` | #d5efff | #003362 |
| `blue/5` | #c2e5ff | #004074 | `blue/6` | #acd8fc | #104d87 |
| `blue/7` | #8ec8f6 | #205d9e | `blue/8` | #5eb1ef | #2870bd |
| `blue/9` | #0090ff | #0090ff | `blue/10` | #0588f0 | #3b9eff |
| `blue/11` | #0d74ce | #70b8ff | `blue/12` | #113264 | #c2e6ff |
| `cyan/1` | #fafdfe | #0b161a | `cyan/2` | #f2fafb | #101b20 |
| `cyan/3` | #def7f9 | #082c36 | `cyan/4` | #caf1f6 | #003848 |
| `cyan/5` | #b5e9f0 | #004558 | `cyan/6` | #9ddde7 | #045468 |
| `cyan/7` | #7dcedc | #12677e | `cyan/8` | #3db9cf | #11809c |
| `cyan/9` | #00a2c7 | #00a2c7 | `cyan/10` | #0797b9 | #23afd0 |
| `cyan/11` | #107d98 | #4ccce6 | `cyan/12` | #0d3c48 | #b6ecf7 |
| `teal/1` | #fafefd | #0d1514 | `teal/2` | #f3fbf9 | #111c1b |
| `teal/3` | #e0f8f3 | #0d2d2a | `teal/4` | #ccf3ea | #023b37 |
| `teal/5` | #b8eae0 | #084843 | `teal/6` | #a1ded2 | #145750 |
| `teal/7` | #83cdc1 | #1c6961 | `teal/8` | #53b9ab | #207e73 |
| `teal/9` | #12a594 | #12a594 | `teal/10` | #0d9b8a | #0eb39e |
| `teal/11` | #008573 | #0bd8b6 | `teal/12` | #0d3d38 | #adf0dd |
| `jade/1` | #fbfefd | #0d1512 | `jade/2` | #f4fbf7 | #121c18 |
| `jade/3` | #e6f7ed | #0f2e22 | `jade/4` | #d6f1e3 | #0b3b2c |
| `jade/5` | #c3e9d7 | #114837 | `jade/6` | #acdec8 | #1b5745 |
| `jade/7` | #8bceb6 | #246854 | `jade/8` | #56ba9f | #2a7e68 |
| `jade/9` | #29a383 | #29a383 | `jade/10` | #26997b | #27b08b |
| `jade/11` | #208368 | #1fd8a4 | `jade/12` | #1d3b31 | #adf0d4 |
| `green/1` | #fbfefc | #0e1512 | `green/2` | #f4fbf6 | #121b17 |
| `green/3` | #e6f6eb | #132d21 | `green/4` | #d6f1df | #113b29 |
| `green/5` | #c4e8d1 | #174933 | `green/6` | #adddc0 | #20573e |
| `green/7` | #8eceaa | #28684a | `green/8` | #5bb98b | #2f7c57 |
| `green/9` | #30a46c | #30a46c | `green/10` | #2b9a66 | #33b074 |
| `green/11` | #218358 | #3dd68c | `green/12` | #193b2d | #b1f1cb |
| `grass/1` | #fbfefb | #0e1511 | `grass/2` | #f5fbf5 | #141a15 |
| `grass/3` | #e9f6e9 | #1b2a1e | `grass/4` | #daf1db | #1d3a24 |
| `grass/5` | #c9e8ca | #25482d | `grass/6` | #b2ddb5 | #2d5736 |
| `grass/7` | #94ce9a | #366740 | `grass/8` | #65ba74 | #3e7949 |
| `grass/9` | #46a758 | #46a758 | `grass/10` | #3e9b4f | #53b365 |
| `grass/11` | #2a7e3b | #71d083 | `grass/12` | #203c25 | #c2f0c2 |
| `bronze/1` | #fdfcfc | #141110 | `bronze/2` | #fdf7f5 | #1c1917 |
| `bronze/3` | #f6edea | #262220 | `bronze/4` | #efe4df | #302a27 |
| `bronze/5` | #e7d9d3 | #3b3330 | `bronze/6` | #dfcdc5 | #493e3a |
| `bronze/7` | #d3bcb3 | #5a4c47 | `bronze/8` | #c2a499 | #6f5f58 |
| `bronze/9` | #a18072 | #a18072 | `bronze/10` | #957468 | #ae8c7e |
| `bronze/11` | #7d5e54 | #d4b3a5 | `bronze/12` | #43302b | #ede0d9 |
| `gold/1` | #fdfdfc | #121211 | `gold/2` | #faf9f2 | #1b1a17 |
| `gold/3` | #f2f0e7 | #24231f | `gold/4` | #eae6db | #2d2b26 |
| `gold/5` | #e1dccf | #38352e | `gold/6` | #d8d0bf | #444039 |
| `gold/7` | #cbc0aa | #544f46 | `gold/8` | #b9a88d | #696256 |
| `gold/9` | #978365 | #978365 | `gold/10` | #8c7a5e | #a39073 |
| `gold/11` | #71624b | #cbb99f | `gold/12` | #3b352b | #e8e2d9 |
| `brown/1` | #fefdfc | #12110f | `brown/2` | #fcf9f6 | #1c1816 |
| `brown/3` | #f6eee7 | #28211d | `brown/4` | #f0e4d9 | #322922 |
| `brown/5` | #ebdaca | #3e3128 | `brown/6` | #e4cdb7 | #4d3c2f |
| `brown/7` | #dcbc9f | #614a39 | `brown/8` | #cea37e | #7c5f46 |
| `brown/9` | #ad7f58 | #ad7f58 | `brown/10` | #a07553 | #b88c67 |
| `brown/11` | #815e46 | #dbb594 | `brown/12` | #3e332e | #f2e1ca |
| `orange/1` | #fefcfb | #17120e | `orange/2` | #fff7ed | #1e160f |
| `orange/3` | #ffefd6 | #331e0b | `orange/4` | #ffdfb5 | #462100 |
| `orange/5` | #ffd19a | #562800 | `orange/6` | #ffc182 | #66350c |
| `orange/7` | #f5ae73 | #7e451d | `orange/8` | #ec9455 | #a35829 |
| `orange/9` | #f76b15 | #f76b15 | `orange/10` | #ef5f00 | #ff801f |
| `orange/11` | #cc4e00 | #ffa057 | `orange/12` | #582d1d | #ffe0c2 |
| `amber/1` | #fefdfb | #16120c | `amber/2` | #fefbe9 | #1d180f |
| `amber/3` | #fff7c2 | #302008 | `amber/4` | #ffee9c | #3f2700 |
| `amber/5` | #fbe577 | #4d3000 | `amber/6` | #f3d673 | #5c3d05 |
| `amber/7` | #e9c162 | #714f19 | `amber/8` | #e2a336 | #8f6424 |
| `amber/9` | #ffc53d | #ffc53d | `amber/10` | #ffba18 | #ffd60a |
| `amber/11` | #ab6400 | #ffca16 | `amber/12` | #4f3422 | #ffe7b3 |
| `yellow/1` | #fdfdf9 | #14120b | `yellow/2` | #fefce9 | #1b180f |
| `yellow/3` | #fffab8 | #2d2305 | `yellow/4` | #fff394 | #362b00 |
| `yellow/5` | #ffe770 | #433500 | `yellow/6` | #f3d768 | #524202 |
| `yellow/7` | #e4c767 | #665417 | `yellow/8` | #d5ae39 | #836a21 |
| `yellow/9` | #ffe629 | #ffe629 | `yellow/10` | #ffdc00 | #ffff57 |
| `yellow/11` | #9e6c00 | #f5e147 | `yellow/12` | #473b1f | #f6eeb4 |
| `lime/1` | #fcfdfa | #11130c | `lime/2` | #f8faf3 | #151a10 |
| `lime/3` | #eef6d6 | #1f2917 | `lime/4` | #e2f0bd | #29371d |
| `lime/5` | #d3e7a6 | #334423 | `lime/6` | #c2da91 | #3d522a |
| `lime/7` | #abc978 | #496231 | `lime/8` | #8db654 | #577538 |
| `lime/9` | #bdee63 | #bdee63 | `lime/10` | #b0e64c | #d4ff70 |
| `lime/11` | #5c7c2f | #bde56c | `lime/12` | #37401c | #e3f7ba |
| `mint/1` | #f9fefd | #0e1515 | `mint/2` | #f2fbf9 | #0f1b1b |
| `mint/3` | #ddf9f2 | #092c2b | `mint/4` | #c8f4e9 | #003a38 |
| `mint/5` | #b3ecde | #004744 | `mint/6` | #9ce0d0 | #105650 |
| `mint/7` | #7ecfbd | #1e685f | `mint/8` | #4cbba5 | #277f70 |
| `mint/9` | #86ead4 | #86ead4 | `mint/10` | #7de0cb | #a8f5e5 |
| `mint/11` | #027864 | #58d5ba | `mint/12` | #16433c | #c4f5e1 |
| `sky/1` | #f9feff | #0d141f | `sky/2` | #f1fafd | #111a27 |
| `sky/3` | #e1f6fd | #112840 | `sky/4` | #d1f0fa | #113555 |
| `sky/5` | #bee7f5 | #154467 | `sky/6` | #a9daed | #1b537b |
| `sky/7` | #8dcae3 | #1f6692 | `sky/8` | #60b3d7 | #197cae |
| `sky/9` | #7ce2fe | #7ce2fe | `sky/10` | #74daf8 | #a8eeff |
| `sky/11` | #00749e | #75c7f0 | `sky/12` | #1d3e56 | #c2f3ff |
| `black/1` | #000000 | #000000 | `black/2` | #000000 | #000000 |
| `black/3` | #000000 | #000000 | `black/4` | #000000 | #000000 |
| `black/5` | #000000 | #000000 | `black/6` | #000000 | #000000 |
| `black/7` | #000000 | #000000 | `black/8` | #000000 | #000000 |
| `black/9` | #000000 | #000000 | `black/10` | #000000 | #000000 |
| `black/11` | #000000 | #000000 | `black/12` | #000000 | #000000 |
| `white/1` | #ffffff | #ffffff | `white/2` | #ffffff | #ffffff |
| `white/3` | #ffffff | #ffffff | `white/4` | #ffffff | #ffffff |
| `white/5` | #ffffff | #ffffff | `white/6` | #ffffff | #ffffff |
| `white/7` | #ffffff | #ffffff | `white/8` | #ffffff | #ffffff |
| `white/9` | #ffffff | #ffffff | `white/10` | #ffffff | #ffffff |
| `white/11` | #ffffff | #ffffff | `white/12` | #ffffff | #ffffff |

### 8.3 Primitive tokens (87 variables)

| Token | Value | Token | Value | Token | Value |
| --- | --- | --- | --- | --- | --- |
| `-0,8` | -0.8 | `-0,4` | -0.4 | `0` | 0 |
| `0,4` | 0.4 | `0,5` | 0.5 | `0,75` | 0.75 |
| `0,8` | 0.8 | `1` | 1 | `1,25` | 1.25 |
| `1,5` | 1.5 | `1,6` | 1.6 | `1,75` | 1.75 |
| `2` | 2 | `2,25` | 2.25 | `2,5` | 2.5 |
| `2,75` | 2.75 | `3` | 3 | `4` | 4 |
| `5` | 5 | `6` | 6 | `8` | 8 |
| `10` | 10 | `12` | 12 | `14` | 14 |
| `15` | 15 | `16` | 16 | `18` | 18 |
| `20` | 20 | `24` | 24 | `25` | 25 |
| `28` | 28 | `30` | 30 | `32` | 32 |
| `35` | 35 | `36` | 36 | `40` | 40 |
| `44` | 44 | `45` | 45 | `48` | 48 |
| `50` | 50 | `55` | 55 | `56` | 56 |
| `60` | 60 | `64` | 64 | `65` | 65 |
| `70` | 70 | `72` | 72 | `75` | 75 |
| `80` | 80 | `85` | 85 | `90` | 90 |
| `95` | 95 | `96` | 96 | `100` | 100 |
| `112` | 112 | `128` | 128 | `144` | 144 |
| `160` | 160 | `176` | 176 | `192` | 192 |
| `200` | 200 | `208` | 208 | `224` | 224 |
| `240` | 240 | `256` | 256 | `288` | 288 |
| `300` | 300 | `320` | 320 | `384` | 384 |
| `400` | 400 | `448` | 448 | `500` | 500 |
| `512` | 512 | `576` | 576 | `600` | 600 |
| `640` | 640 | `672` | 672 | `700` | 700 |
| `768` | 768 | `800` | 800 | `896` | 896 |
| `900` | 900 | `1024` | 1024 | `1152` | 1152 |
| `1280` | 1280 | `1536` | 1536 | `9999` | 9999 |

---

## 9. Scale Tokens

### 9.1 Border Radius (150 variables)
*All directional variants — static scale in px — kit default: rounded-lg (8 px)*

| Token | Value | Token | Value | Token | Value |
| --- | --- | --- | --- | --- | --- |
| `rounded-xs` | 2 | `rounded-sm` | 4 | `rounded-md` | 6 |
| `rounded-lg` | 8 | `rounded-xl` | 12 | `rounded-2xl` | 16 |
| `rounded-3xl` | 24 | `rounded-4xl` | 32 | `rounded-none` | 0 |
| `rounded-full` | 9999 | `rounded-s-xs` | 2 | `rounded-s-sm` | 4 |
| `rounded-s-md` | 6 | `rounded-s-lg` | 8 | `rounded-s-xl` | 12 |
| `rounded-s-2xl` | 16 | `rounded-s-3xl` | 24 | `rounded-s-4xl` | 32 |
| `rounded-s-none` | 0 | `rounded-s-full` | 9999 | `rounded-e-xs` | 2 |
| `rounded-e-sm` | 4 | `rounded-e-md` | 6 | `rounded-e-lg` | 8 |
| `rounded-e-xl` | 12 | `rounded-e-2xl` | 16 | `rounded-e-3xl` | 24 |
| `rounded-e-4xl` | 32 | `rounded-e-none` | 0 | `rounded-e-full` | 9999 |
| `rounded-t-xs` | 2 | `rounded-t-sm` | 4 | `rounded-t-md` | 6 |
| `rounded-t-lg` | 8 | `rounded-t-xl` | 12 | `rounded-t-2xl` | 16 |
| `rounded-t-3xl` | 24 | `rounded-t-4xl` | 32 | `rounded-t-none` | 0 |
| `rounded-t-full` | 9999 | `rounded-r-xs` | 2 | `rounded-r-sm` | 4 |
| `rounded-r-md` | 6 | `rounded-r-lg` | 8 | `rounded-r-xl` | 12 |
| `rounded-r-2xl` | 16 | `rounded-r-3xl` | 24 | `rounded-r-4xl` | 32 |
| `rounded-r-none` | 0 | `rounded-r-full` | 9999 | `rounded-b-xs` | 2 |
| `rounded-b-sm` | 4 | `rounded-b-md` | 6 | `rounded-b-lg` | 8 |
| `rounded-b-xl` | 12 | `rounded-b-2xl` | 16 | `rounded-b-3xl` | 24 |
| `rounded-b-4xl` | 32 | `rounded-b-none` | 0 | `rounded-b-full` | 9999 |
| `rounded-1-xs` | 2 | `rounded-1-sm` | 4 | `rounded-1-md` | 6 |
| `rounded-1-lg` | 8 | `rounded-1-xl` | 12 | `rounded-1-2xl` | 16 |
| `rounded-1-3xl` | 24 | `rounded-1-4xl` | 32 | `rounded-1-none` | 0 |
| `rounded-1-full` | 9999 | `rounded-ss-xs` | 2 | `rounded-ss-sm` | 4 |
| `rounded-ss-md` | 6 | `rounded-ss-lg` | 8 | `rounded-ss-xl` | 12 |
| `rounded-ss-2xl` | 16 | `rounded-ss-3xl` | 24 | `rounded-ss-4xl` | 32 |
| `rounded-ss-none` | 0 | `rounded-ss-full` | 9999 | `rounded-se-xs` | 2 |
| `rounded-se-sm` | 4 | `rounded-se-md` | 6 | `rounded-se-lg` | 8 |
| `rounded-se-xl` | 12 | `rounded-se-2xl` | 16 | `rounded-se3xl` | 24 |
| `rounded-se-4xl` | 32 | `rounded-se-none` | 0 | `rounded-se-full` | 9999 |
| `rounded-ee-xs` | 2 | `rounded-ee-sm` | 4 | `rounded-ee-md` | 6 |
| `rounded-ee-lg` | 8 | `rounded-ee-xl` | 12 | `rounded-ee-2xl` | 16 |
| `rounded-ee-3xl` | 24 | `rounded-ee-4xl` | 32 | `rounded-ee-none` | 0 |
| `rounded-ee-full` | 9999 | `rounded-es-xs` | 2 | `rounded-es-sm` | 4 |
| `rounded-es-md` | 6 | `rounded-es-lg` | 8 | `rounded-es-xl` | 12 |
| `rounded-es-2xl` | 16 | `rounded-es-3xl` | 24 | `rounded-es-4xl` | 32 |
| `rounded-es-none` | 0 | `rounded-es-full` | 9999 | `rounded-tl-xs` | 2 |
| `rounded-tl-sm` | 4 | `rounded-tl-md` | 6 | `rounded-tl-lg` | 8 |
| `rounded-tl-xl` | 12 | `rounded-tl-2xl` | 16 | `rounded-tl-3xl` | 24 |
| `rounded-tl-4xl` | 32 | `rounded-tl-none` | 0 | `rounded-tl-full` | 9999 |
| `rounded-tr-xs` | 2 | `rounded-tr-sm` | 4 | `rounded-tr-md` | 6 |
| `rounded-tr-lg` | 8 | `rounded-tr-xl` | 12 | `rounded-tr-2xl` | 16 |
| `rounded-tr-3xl` | 24 | `rounded-tr-4xl` | 32 | `rounded-tr-none` | 0 |
| `rounded-tr-full` | 9999 | `rounded-br-xs` | 2 | `rounded-br-sm` | 4 |
| `rounded-br-md` | 6 | `rounded-br-lg` | 8 | `rounded-br-xl` | 12 |
| `rounded-br-2xl` | 16 | `rounded-br-3xl` | 24 | `rounded-br-4xl` | 32 |
| `rounded-br-none` | 0 | `rounded-br-full` | 9999 | `rounded-bl-xs` | 2 |
| `rounded-bl-sm` | 4 | `rounded-bl-md` | 6 | `rounded-bl-lg` | 8 |
| `rounded-bl-xl` | 12 | `rounded-bl-2xl` | 16 | `rounded-bl-3xl` | 24 |
| `rounded-bl-4xl` | 32 | `rounded-bl-none` | 0 | `rounded-bl-full` | 9999 |

### 9.2 Border Width (45 variables)
*All directional variants*

| Token | Value | Token | Value | Token | Value |
| --- | --- | --- | --- | --- | --- |
| `border-0` | 0 | `border` | 1 | `border-2` | 2 |
| `border-4` | 4 | `border-8` | 8 | `border-x-0` | 0 |
| `border-x` | 1 | `border-x-2` | 2 | `border-x-4` | 4 |
| `border-x-8` | 8 | `border-y-0` | 0 | `border-y` | 1 |
| `border-y-2` | 2 | `border-y-4` | 4 | `border-y-8` | 8 |
| `border-s-0` | 0 | `border-s` | 1 | `border-s-2` | 2 |
| `border-s-4` | 4 | `border-s-8` | 8 | `border-e-0` | 0 |
| `border-e` | 1 | `border-e-2` | 2 | `border-e-4` | 4 |
| `border-e-8` | 8 | `border-t-0` | 0 | `border-t` | 1 |
| `border-t-2` | 2 | `border-t-4` | 4 | `border-t-8` | 8 |
| `border-r-0` | 0 | `border-r` | 1 | `border-r-2` | 2 |
| `border-r-4` | 4 | `border-r-8` | 8 | `border-b-0` | 0 |
| `border-b` | 1 | `border-b-2` | 2 | `border-b-4` | 4 |
| `border-b-8` | 8 | `border-l-0` | 0 | `border-l` | 1 |
| `border-l-2` | 2 | `border-l-4` | 4 | `border-l-8` | 8 |

### 9.3 Font (45 variables)

**Family**

| Token | Value | Tailwind variable |
| --- | --- | --- |
| `family/sans` | `Inter` | `--font-sans` |
| `family/mono` | `Geist Mono` | `--font-mono` |

**Size**

| Token | px | rem | Utility |
| --- | --- | --- | --- |
| `size/xs` | 12px | 0.75rem | `text-xs` |
| `size/sm` | 14px | 0.875rem | `text-sm` |
| `size/md` | 16px | 1rem | `text-md` |
| `size/lg` | 18px | 1.125rem | `text-lg` |
| `size/xl` | 20px | 1.25rem | `text-xl` |
| `size/2xl` | 24px | 1.5rem | `text-2xl` |
| `size/3xl` | 30px | 1.875rem | `text-3xl` |
| `size/4xl` | 36px | 2.25rem | `text-4xl` |
| `size/5xl` | 48px | 3rem | `text-5xl` |
| `size/6xl` | 60px | 3.75rem | `text-6xl` |
| `size/7xl` | 72px | 4.5rem | `text-7xl` |
| `size/8xl` | 96px | 6rem | `text-8xl` |
| `size/9xl` | 128px | 8rem | `text-9xl` |

**Weight, Style, Leading, Tracking**

| Token | Value | Utility |
| --- | --- | --- |
| `style/italic` | `italic` | `italic` |
| `style/not-italic` | `normal` | `not-italic` |
| `weight/thin` | `100` | `font-thin` |
| `weight/extralight` | `200` | `font-extralight` |
| `weight/light` | `300` | `font-light` |
| `weight/normal` | `400` | `font-normal` |
| `weight/medium` | `500` | `font-medium` |
| `weight/semibold` | `600` | `font-semibold` |
| `weight/bold` | `700` | `font-bold` |
| `weight/extrabold` | `800` | `font-extrabold` |
| `weight/black` | `900` | `font-black` |
| `leading/3` | `12` | `leading-3` |
| `leading/4` | `16` | `leading-4` |
| `leading/5` | `20` | `leading-5` |
| `leading/6` | `24` | `leading-6` |
| `leading/7` | `28` | `leading-7` |
| `leading/8` | `32` | `leading-8` |
| `leading/9` | `36` | `leading-9` |
| `leading/10` | `40` | `leading-10` |
| `leading/12` | `48` | `leading-12` |
| `leading/15` | `60` | `leading-15` |
| `leading/18` | `72` | `leading-18` |
| `leading/24` | `96` | `leading-24` |
| `leading/32` | `128` | `leading-32` |
| `leading/tracking/tighter` | `-0.800000011920929` | `tracking-tighter` |
| `leading/tracking/tight` | `-0.4000000059604645` | `tracking-tight` |
| `leading/tracking/normal` | `0` | `tracking-normal` |
| `leading/tracking/wide` | `0.4000000059604645` | `tracking-wide` |
| `leading/tracking/wider` | `0.800000011920929` | `tracking-wider` |
| `leading/tracking/widest` | `1.600000023841858` | `tracking-widest` |

### 9.4 Height — h-* (24 variables)

| Token | Value | Token | Value | Token | Value |
| --- | --- | --- | --- | --- | --- |
| `h-0` | 0 | `h-px` | 1 | `h-0,5` | 2 |
| `h-1` | 4 | `h-2` | 8 | `h-2,5` | 10 |
| `h-3` | 12 | `h-3,5` | 14 | `h-4` | 16 |
| `h-5` | 20 | `h-6` | 24 | `h-7` | 28 |
| `h-8` | 32 | `h-9` | 36 | `h-10` | 40 |
| `h-12` | 48 | `h-14` | 56 | `h-16` | 64 |
| `h-18` | 72 | `h-20` | 80 | `h-24` | 96 |
| `h-48` | 192 | `h-72` | 288 | `h-96` | 384 |

### 9.5 Gap — gap / gap-x / gap-y (102 variables)
*Always use gap-* for flex/grid spacing, not space-**

| Token | Value | Token | Value | Token | Value |
| --- | --- | --- | --- | --- | --- |
| `gap-0` | 0 | `gap-x-0` | 0 | `gap-y-0` | 0 |
| `gap-0,5` | 2 | `gap-x-0,5` | 2 | `gap-y-0,5` | 2 |
| `gap-1` | 4 | `gap-x-1` | 4 | `gap-y-1` | 4 |
| `gap-1,5` | 6 | `gap-x-1,5` | 6 | `gap-y-1,5` | 6 |
| `gap-2` | 8 | `gap-x-2` | 8 | `gap-y-2` | 8 |
| `gap-2,5` | 10 | `gap-x-2,5` | 10 | `gap-y-2,5` | 10 |
| `gap-3` | 12 | `gap-x-3` | 12 | `gap-y-3` | 12 |
| `gap-3,5` | 14 | `gap-x-3,5` | 14 | `gap-y-3,5` | 14 |
| `gap-4` | 16 | `gap-x-4` | 16 | `gap-y-4` | 16 |
| `gap-5` | 20 | `gap-x-5` | 20 | `gap-y-5` | 20 |
| `gap-6` | 24 | `gap-x-6` | 24 | `gap-y-6` | 24 |
| `gap-7` | 28 | `gap-x-7` | 28 | `gap-y-7` | 28 |
| `gap-8` | 32 | `gap-x-8` | 32 | `gap-y-8` | 32 |
| `gap-9` | 36 | `gap-x-9` | 36 | `gap-y-9` | 36 |
| `gap-10` | 40 | `gap-x-10` | 40 | `gap-y-10` | 40 |
| `gap-11` | 44 | `gap-x-11` | 44 | `gap-y-11` | 44 |
| `gap-12` | 48 | `gap-x-12` | 48 | `gap-y-12` | 48 |
| `gap-14` | 56 | `gap-x-14` | 56 | `gap-y-14` | 56 |
| `gap-16` | 64 | `gap-x-16` | 64 | `gap-y-16` | 64 |
| `gap-20` | 80 | `gap-x-20` | 80 | `gap-y-20` | 80 |
| `gap-24` | 96 | `gap-x-24` | 96 | `gap-y-24` | 96 |
| `gap-28` | 112 | `gap-x-28` | 112 | `gap-y-28` | 112 |
| `gap-32` | 128 | `gap-x-32` | 128 | `gap-y-32` | 128 |
| `gap-36` | 144 | `gap-x-36` | 144 | `gap-y-36` | 144 |
| `gap-40` | 160 | `gap-x-40` | 160 | `gap-y-40` | 160 |
| `gap-44` | 176 | `gap-x-44` | 176 | `gap-y-44` | 176 |
| `gap-48` | 192 | `gap-x-48` | 192 | `gap-y-48` | 192 |
| `gap-52` | 208 | `gap-x-52` | 208 | `gap-y-52` | 208 |
| `gap-56` | 224 | `gap-x-56` | 224 | `gap-y-56` | 224 |
| `gap-60` | 240 | `gap-x-60` | 240 | `gap-y-60` | 240 |
| `gap-64` | 256 | `gap-x-64` | 256 | `gap-y-64` | 256 |
| `gap-72` | 288 | `gap-x-72` | 288 | `gap-y-72` | 288 |
| `gap-80` | 320 | `gap-x-80` | 320 | `gap-y-80` | 320 |
| `gap-96` | 384 | `gap-x-96` | 384 | `gap-y-96` | 384 |

### 9.6 Max Height — max-h-* (35 variables)

| Token | Value | Token | Value | Token | Value |
| --- | --- | --- | --- | --- | --- |
| `max-h-0` | 0 | `max-h-px` | 1 | `max-h-0,5` | 2 |
| `max-h-1` | 4 | `max-h-1,5` | 6 | `max-h-2` | 8 |
| `max-h-2,5` | 10 | `max-h-3` | 12 | `max-h-3,5` | 14 |
| `max-h-4` | 16 | `max-h-5` | 20 | `max-h-6` | 24 |
| `max-h-7` | 28 | `max-h-8` | 32 | `max-h-9` | 36 |
| `max-h-10` | 40 | `max-h-11` | 44 | `max-h-12` | 48 |
| `max-h-14` | 56 | `max-h-16` | 64 | `max-h-20` | 80 |
| `max-h-24` | 96 | `max-h-28` | 112 | `max-h-32` | 128 |
| `max-h-36` | 144 | `max-h-40` | 160 | `max-h-44` | 176 |
| `max-h-48` | 192 | `max-h-52` | 208 | `max-h-56` | 224 |
| `max-h-60` | 240 | `max-h-64` | 256 | `max-h-72` | 288 |
| `max-h-80` | 320 | `max-h-96` | 384 | `` |  |

### 9.7 Max Width — max-w-* (51 variables)

| Token | Value | Token | Value | Token | Value |
| --- | --- | --- | --- | --- | --- |
| `max-w-0` | 0 | `max-w-px` | 1 | `max-w-0,5` | 2 |
| `max-w-1` | 4 | `max-w-1,5` | 6 | `max-w-2` | 8 |
| `max-w-2,5` | 10 | `max-w-3` | 12 | `max-w-4` | 16 |
| `max-w-5` | 20 | `max-w-6` | 24 | `max-w-7` | 28 |
| `max-w-8` | 32 | `max-w-9` | 36 | `max-w-10` | 40 |
| `max-w-11` | 44 | `max-w-12` | 48 | `max-w-14` | 56 |
| `max-w-16` | 64 | `max-w-20` | 80 | `max-w-24` | 96 |
| `max-w-28` | 112 | `max-w-32` | 128 | `max-w-36` | 144 |
| `max-w-40` | 160 | `max-w-44` | 176 | `max-w-48` | 192 |
| `max-w-52` | 208 | `max-w-56` | 224 | `max-w-60` | 240 |
| `max-w-64` | 256 | `max-w-72` | 288 | `max-w-80` | 320 |
| `max-w-96` | 384 | `max-w-xs` | 320 | `max-w-sm` | 384 |
| `max-w-md` | 448 | `max-w-lg` | 512 | `max-w-xl` | 576 |
| `max-w-2xl` | 672 | `max-w-3xl` | 768 | `max-w-4xl` | 896 |
| `max-w-5xl` | 1024 | `max-w-6xl` | 1152 | `max-w-7xl` | 1280 |
| `max-w-none` | 0 | `max-w-screen-sm` | 640 | `max-w-screen-md` | 768 |
| `max-w-screen-lg` | 1024 | `max-w-screen-xl` | 1280 | `max-w-screen-2xl` | 1536 |

### 9.8 Margin — m, mx, my, mr, ml, mt, mb (245 variables)
*All directional variants*

| Token | Value | Token | Value | Token | Value |
| --- | --- | --- | --- | --- | --- |
| `m-0` | 0 | `mx-0` | 0 | `my-0` | 0 |
| `mr-0` | 0 | `ml-0` | 0 | `mt-0` | 0 |
| `mb-0` | 0 | `m-px` | 1 | `mx-px` | 1 |
| `my-px` | 1 | `mr-px` | 1 | `ml-px` | 1 |
| `mt-px` | 1 | `mb-px` | 1 | `m-0,5` | 2 |
| `mx-0,5` | 2 | `my-0,5` | 2 | `mr-0,5` | 2 |
| `ml-0,5` | 2 | `mt-0,5` | 2 | `mb-0,5` | 2 |
| `m-1` | 4 | `mx-1` | 4 | `my-1` | 4 |
| `mr-1` | 4 | `ml-1` | 4 | `mt-1` | 4 |
| `mb-1` | 4 | `m-1,5` | 6 | `mx-1,5` | 6 |
| `my-1,5` | 6 | `mr-1,5` | 6 | `ml-1,5` | 6 |
| `mt-1,5` | 6 | `mb-1,5` | 6 | `m-2` | 8 |
| `mx-2` | 8 | `my-2` | 8 | `mr-2` | 8 |
| `ml-2` | 8 | `mt-2` | 8 | `mb-2` | 8 |
| `m-2,5` | 10 | `mx-2,5` | 10 | `my-2,5` | 10 |
| `mr-2,5` | 10 | `ml-2,5` | 10 | `mt-2,5` | 10 |
| `mb-2,5` | 10 | `m-3` | 12 | `mx-3` | 12 |
| `my-3` | 12 | `mr-3` | 12 | `ml-3` | 12 |
| `mt-3` | 12 | `mb-3` | 12 | `m-3,5` | 14 |
| `mx-3,5` | 14 | `my-3,5` | 14 | `mr-3,5` | 14 |
| `ml-3,5` | 14 | `mt-3,5` | 14 | `mb-3,5` | 14 |
| `m-4` | 16 | `mx-4` | 16 | `my-4` | 16 |
| `mr-4` | 16 | `ml-4` | 16 | `mt-4` | 16 |
| `mb-4` | 16 | `m-5` | 20 | `mx-5` | 20 |
| `my-5` | 20 | `mr-5` | 20 | `ml-5` | 20 |
| `mt-5` | 20 | `mb-5` | 20 | `m-6` | 24 |
| `mx-6` | 24 | `my-6` | 24 | `mr-6` | 24 |
| `ml-6` | 24 | `mt-6` | 24 | `mb-6` | 24 |
| `m-7` | 28 | `mx-7` | 28 | `my-7` | 28 |
| `mr-7` | 28 | `ml-7` | 28 | `mt-7` | 28 |
| `mb-7` | 28 | `m-8` | 32 | `mx-8` | 32 |
| `my-8` | 32 | `mr-8` | 32 | `ml-8` | 32 |
| `mt-8` | 32 | `mb-8` | 32 | `m-9` | 36 |
| `mx-9` | 36 | `my-9` | 36 | `mr-9` | 36 |
| `ml-9` | 36 | `mt-9` | 36 | `mb-9` | 36 |
| `m-10` | 40 | `mx-10` | 40 | `my-10` | 40 |
| `mr-10` | 40 | `ml-10` | 40 | `mt-10` | 40 |
| `mb-10` | 40 | `m-11` | 44 | `mx-11` | 44 |
| `my-11` | 44 | `mr-11` | 44 | `ml-11` | 44 |
| `mt-11` | 44 | `mb-11` | 44 | `m-12` | 48 |
| `mx-12` | 48 | `my-12` | 48 | `mr-12` | 48 |
| `ml-12` | 48 | `mt-12` | 48 | `mb-12` | 48 |
| `m-14` | 56 | `mx-14` | 56 | `my-14` | 56 |
| `mr-14` | 56 | `ml-14` | 56 | `mt-14` | 56 |
| `mb-14` | 56 | `m-16` | 64 | `mx-16` | 64 |
| `my-16` | 64 | `mr-16` | 64 | `ml-16` | 64 |
| `mt-16` | 64 | `mb-16` | 64 | `m-20` | 80 |
| `mx-20` | 80 | `my-20` | 80 | `mr-20` | 80 |
| `ml-20` | 80 | `mt-20` | 80 | `mb-20` | 80 |
| `m-24` | 96 | `mx-24` | 96 | `my-24` | 96 |
| `mr-24` | 96 | `ml-24` | 96 | `mt-24` | 96 |
| `mb-24` | 96 | `m-28` | 112 | `mx-28` | 112 |
| `my-28` | 112 | `mr-28` | 112 | `ml-28` | 112 |
| `mt-28` | 112 | `mb-28` | 112 | `m-32` | 128 |
| `mx-32` | 128 | `my-32` | 128 | `mr-32` | 128 |
| `ml-32` | 128 | `mt-32` | 128 | `mb-32` | 128 |
| `m-36` | 144 | `mx-36` | 144 | `my-36` | 144 |
| `mr-36` | 144 | `ml-36` | 144 | `mt-36` | 144 |
| `mb-36` | 144 | `m-40` | 160 | `mx-40` | 160 |
| `my-40` | 160 | `mr-40` | 160 | `ml-40` | 160 |
| `mt-40` | 160 | `mb-40` | 160 | `m-44` | 176 |
| `mx-44` | 176 | `my-44` | 176 | `mr-44` | 176 |
| `ml-44` | 176 | `mt-44` | 176 | `mb-44` | 176 |
| `m-48` | 192 | `mx-48` | 192 | `my-48` | 192 |
| `mr-48` | 192 | `ml-48` | 192 | `mt-48` | 192 |
| `mb-48` | 192 | `m-52` | 208 | `mx-52` | 208 |
| `my-52` | 208 | `mr-52` | 208 | `ml-52` | 208 |
| `mt-52` | 208 | `mb-52` | 208 | `m-56` | 224 |
| `mx-56` | 224 | `my-56` | 224 | `mr-56` | 224 |
| `ml-56` | 224 | `mt-56` | 224 | `mb-56` | 224 |
| `m-60` | 240 | `mx-60` | 240 | `my-60` | 240 |
| `mr-60` | 240 | `ml-60` | 240 | `mt-60` | 240 |
| `mb-60` | 240 | `m-64` | 256 | `mx-64` | 256 |
| `my-64` | 256 | `mr-64` | 256 | `ml-64` | 256 |
| `mt-64` | 256 | `mb-64` | 256 | `m-72` | 288 |
| `mx-72` | 288 | `my-72` | 288 | `mr-72` | 288 |
| `ml-72` | 288 | `mt-72` | 288 | `mb-72` | 288 |
| `m-80` | 320 | `mx-80` | 320 | `my-80` | 320 |
| `mr-80` | 320 | `ml-80` | 320 | `mt-80` | 320 |
| `mb-80` | 320 | `m-96` | 384 | `mx-96` | 384 |
| `my-96` | 384 | `mr-96` | 384 | `ml-96` | 384 |
| `mt-96` | 384 | `mb-96` | 384 | `` |  |

### 9.9 Padding — p, px, py, pr, pl, pt, pb (245 variables)
*All directional variants*

| Token | Value | Token | Value | Token | Value |
| --- | --- | --- | --- | --- | --- |
| `p-0` | 0 | `px-0` | 0 | `py-0` | 0 |
| `pr-0` | 0 | `pl-0` | 0 | `pt-0` | 0 |
| `pb-0` | 0 | `p-px` | 1 | `px-px` | 1 |
| `py-px` | 1 | `pr-px` | 1 | `pl-px` | 1 |
| `pt-px` | 1 | `pb-px` | 1 | `p-0,5` | 2 |
| `px-0,5` | 2 | `py-0,5` | 2 | `pr-0,5` | 2 |
| `pl-0,5` | 2 | `pt-0,5` | 2 | `pb-0,5` | 2 |
| `p-1` | 4 | `px-1` | 4 | `py-1` | 4 |
| `pr-1` | 4 | `pl-1` | 4 | `pt-1` | 4 |
| `pb-1` | 4 | `p-1,5` | 6 | `px-1,5` | 6 |
| `py-1,5` | 6 | `pr-1,5` | 6 | `pl-1,5` | 6 |
| `pt-1,5` | 6 | `pb-1,5` | 6 | `p-2` | 8 |
| `px-2` | 8 | `py-2` | 8 | `pr-2` | 8 |
| `pl-2` | 8 | `pt-2` | 8 | `pb-2` | 8 |
| `p-2,5` | 10 | `px-2,5` | 10 | `py-2,5` | 10 |
| `pr-2,5` | 10 | `pl-2,5` | 10 | `pt-2,5` | 10 |
| `pb-2,5` | 10 | `p-3` | 12 | `px-3` | 12 |
| `py-3` | 12 | `pr-3` | 12 | `pl-3` | 12 |
| `pt-3` | 12 | `pb-3` | 12 | `p-3,5` | 14 |
| `px-3,5` | 14 | `py-3,5` | 14 | `pr-3,5` | 14 |
| `pl-3,5` | 14 | `pt-3,5` | 14 | `pb-3,5` | 14 |
| `p-4` | 16 | `px-4` | 16 | `py-4` | 16 |
| `pr-4` | 16 | `pl-4` | 16 | `pt-4` | 16 |
| `pb-4` | 16 | `p-5` | 20 | `px-5` | 20 |
| `py-5` | 20 | `pr-5` | 20 | `pl-5` | 20 |
| `pt-5` | 20 | `pb-5` | 20 | `p-6` | 24 |
| `px-6` | 24 | `py-6` | 24 | `pr-6` | 24 |
| `pl-6` | 24 | `pt-6` | 24 | `pb-6` | 24 |
| `p-7` | 28 | `px-7` | 28 | `py-7` | 28 |
| `pr-7` | 28 | `pl-7` | 28 | `pt-7` | 28 |
| `pb-7` | 28 | `p-8` | 32 | `px-8` | 32 |
| `py-8` | 32 | `pr-8` | 32 | `pl-8` | 32 |
| `pt-8` | 32 | `pb-8` | 32 | `p-9` | 36 |
| `px-9` | 36 | `py-9` | 36 | `pr-9` | 36 |
| `pl-9` | 36 | `pt-9` | 36 | `pb-9` | 36 |
| `p-10` | 40 | `px-10` | 40 | `py-10` | 40 |
| `pr-10` | 40 | `pl-10` | 40 | `pt-10` | 40 |
| `pb-10` | 40 | `p-11` | 44 | `px-11` | 44 |
| `py-11` | 44 | `pr-11` | 44 | `pl-11` | 44 |
| `pt-11` | 44 | `pb-11` | 44 | `p-12` | 48 |
| `px-12` | 48 | `py-12` | 48 | `pr-12` | 48 |
| `pl-12` | 48 | `pt-12` | 48 | `pb-12` | 48 |
| `p-14` | 56 | `px-14` | 56 | `py-14` | 56 |
| `pr-14` | 56 | `pl-14` | 56 | `pt-14` | 56 |
| `pb-14` | 56 | `p-16` | 64 | `px-16` | 64 |
| `py-16` | 64 | `pr-16` | 64 | `pl-16` | 64 |
| `pt-16` | 64 | `pb-16` | 64 | `p-20` | 80 |
| `px-20` | 80 | `py-20` | 80 | `pr-20` | 80 |
| `pl-20` | 80 | `pt-20` | 80 | `pb-20` | 80 |
| `p-24` | 96 | `px-24` | 96 | `py-24` | 96 |
| `pr-24` | 96 | `pl-24` | 96 | `pt-24` | 96 |
| `pb-24` | 96 | `p-28` | 112 | `px-28` | 112 |
| `py-28` | 112 | `pr-28` | 112 | `pl-28` | 112 |
| `pt-28` | 112 | `pb-28` | 112 | `p-32` | 128 |
| `px-32` | 128 | `py-32` | 128 | `pr-32` | 128 |
| `pl-32` | 128 | `pt-32` | 128 | `pb-32` | 128 |
| `p-36` | 144 | `px-36` | 144 | `py-36` | 144 |
| `pr-36` | 144 | `pl-36` | 144 | `pt-36` | 144 |
| `pb-36` | 144 | `p-40` | 160 | `px-40` | 160 |
| `py-40` | 160 | `pr-40` | 160 | `pl-40` | 160 |
| `pt-40` | 160 | `pb-40` | 160 | `p-44` | 176 |
| `px-44` | 176 | `py-44` | 176 | `pr-44` | 176 |
| `pl-44` | 176 | `pt-44` | 176 | `pb-44` | 176 |
| `p-48` | 192 | `px-48` | 192 | `py-48` | 192 |
| `pr-48` | 192 | `pl-48` | 192 | `pt-48` | 192 |
| `pb-48` | 192 | `p-52` | 208 | `px-52` | 208 |
| `py-52` | 208 | `pr-52` | 208 | `pl-52` | 208 |
| `pt-52` | 208 | `pb-52` | 208 | `p-56` | 224 |
| `px-56` | 224 | `py-56` | 224 | `pr-56` | 224 |
| `pl-56` | 224 | `pt-56` | 224 | `pb-56` | 224 |
| `p-60` | 240 | `px-60` | 240 | `py-60` | 240 |
| `pr-60` | 240 | `pl-60` | 240 | `pt-60` | 240 |
| `pb-60` | 240 | `p-64` | 256 | `px-64` | 256 |
| `py-64` | 256 | `pr-64` | 256 | `pl-64` | 256 |
| `pt-64` | 256 | `pb-64` | 256 | `p-72` | 288 |
| `px-72` | 288 | `py-72` | 288 | `pr-72` | 288 |
| `pl-72` | 288 | `pt-72` | 288 | `pb-72` | 288 |
| `p-80` | 320 | `px-80` | 320 | `py-80` | 320 |
| `pr-80` | 320 | `pl-80` | 320 | `pt-80` | 320 |
| `pb-80` | 320 | `p-96` | 384 | `px-96` | 384 |
| `py-96` | 384 | `pr-96` | 384 | `pl-96` | 384 |
| `pt-96` | 384 | `pb-96` | 384 | `` |  |

### 9.10 Space — space-x / space-y (68 variables)
*Prefer gap-* in new code*

| Token | Value | Token | Value | Token | Value |
| --- | --- | --- | --- | --- | --- |
| `space-x-0` | 0 | `space-y-0` | 0 | `space-x-0,5` | 2 |
| `space-y-0,5` | 2 | `space-x-1` | 4 | `space-y-1` | 4 |
| `space-x-1,5` | 6 | `space-y-1,5` | 6 | `space-x-2` | 8 |
| `space-y-2` | 8 | `space-x-2,5` | 10 | `space-y-2,5` | 10 |
| `space-x-3` | 12 | `space-y-3` | 12 | `space-x-3,5` | 14 |
| `space-y-3,5` | 14 | `space-x-4` | 16 | `space-y-4` | 16 |
| `space-x-5` | 20 | `space-y-5` | 20 | `space-x-6` | 24 |
| `space-y-6` | 24 | `space-x-7` | 28 | `space-y-7` | 28 |
| `space-x-8` | 32 | `space-y-8` | 32 | `space-x-9` | 36 |
| `space-y-9` | 36 | `space-x-10` | 40 | `space-y-10` | 40 |
| `space-x-11` | 44 | `space-y-11` | 44 | `space-x-12` | 48 |
| `space-y-12` | 48 | `space-x-14` | 56 | `space-y-14` | 56 |
| `space-x-16` | 64 | `space-y-16` | 64 | `space-x-20` | 80 |
| `space-y-20` | 80 | `space-x-24` | 96 | `space-y-24` | 96 |
| `space-x-28` | 112 | `space-y-28` | 112 | `space-x-32` | 128 |
| `space-y-32` | 128 | `space-x-36` | 144 | `space-y-36` | 144 |
| `space-x-40` | 160 | `space-y-40` | 160 | `space-x-44` | 176 |
| `space-y-44` | 176 | `space-x-48` | 192 | `space-y-48` | 192 |
| `space-x-52` | 208 | `space-y-52` | 208 | `space-x-56` | 224 |
| `space-y-56` | 224 | `space-x-60` | 240 | `space-y-60` | 240 |
| `space-x-64` | 256 | `space-y-64` | 256 | `space-x-72` | 288 |
| `space-y-72` | 288 | `space-x-80` | 320 | `space-y-80` | 320 |
| `space-x-96` | 384 | `space-y-96` | 384 | `` |  |

### 9.11 Stroke Width (11 variables)
*Lucide default: stroke-2*

| Token | Value | Token | Value | Token | Value |
| --- | --- | --- | --- | --- | --- |
| `stroke-0,5` | 0.5 | `stroke-0,75` | 0.75 | `stroke-1` | 1 |
| `stroke-1,25` | 1.25 | `stroke-1,5` | 1.5 | `stroke-1,75` | 1.75 |
| `stroke-2` | 2 | `stroke-2,25` | 2.25 | `stroke-2,5` | 2.5 |
| `stroke-2,75` | 2.75 | `stroke-3` | 3 | `` |  |

### 9.12 Opacity (21 variables)
*Use Tailwind modifier: bg-primary/30, text-foreground/80*

| Token | Value | Token | Value | Token | Value |
| --- | --- | --- | --- | --- | --- |
| `opacity-0` | 0 | `opacity-5` | 5 | `opacity-10` | 10 |
| `opacity-15` | 15 | `opacity-20` | 20 | `opacity-25` | 25 |
| `opacity-30` | 30 | `opacity-35` | 35 | `opacity-40` | 40 |
| `opacity-45` | 45 | `opacity-50` | 50 | `opacity-55` | 55 |
| `opacity-60` | 60 | `opacity-65` | 65 | `opacity-70` | 70 |
| `opacity-75` | 75 | `opacity-80` | 80 | `opacity-85` | 85 |
| `opacity-90` | 90 | `opacity-95` | 95 | `opacity-100` | 100 |

### 9.13 Font Use (2 variables)

| Token | Value |
| --- | --- |
| `San Serif` | `IBM Plex Sans Thai` |
| `Serif` | `SF Thonburi` |

---

## 10. References

- Token source: `variables-export.json` (lazyyysync-variables-v1, 1806 variables)
- shadcn/ui Theming: https://ui.shadcn.com/docs/theming
- shadcn/ui Tailwind v4: https://ui.shadcn.com/docs/tailwind-v4
- shadcn/ui Components: https://ui.shadcn.com/docs/components
- shadcn/ui Figma: https://ui.shadcn.com/docs/figma
- Next.js App Router: https://nextjs.org/docs/app
- Tailwind CSS v4: https://tailwindcss.com/docs/theme
- Figma Dev Mode MCP: https://www.figma.com/blog/introducing-figmas-dev-mode-mcp-server/