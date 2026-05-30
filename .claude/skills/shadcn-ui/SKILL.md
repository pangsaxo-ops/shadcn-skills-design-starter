---
name: shadcn-ui
description: Build and review shadcn/ui + Tailwind v4 + Next.js UI. Triggered by shadcn, Tailwind, globals.css, Figma, or app/ work. Enforces tokens, RSC-first placement, and Figma fidelity.
---

# shadcn/ui + Tailwind v4 + Next.js Skill

One job: **build UI that matches the design spec exactly**.
No additions, no omissions, no unsolicited polish.

---

## 0. Pre-flight — Before Every Task

**Read `DESIGN.md` first** — single source of truth for all 1806 design tokens.
When `DESIGN.md` conflicts with shadcn defaults, `DESIGN.md` wins.

```bash
npx shadcn@latest info --json
```

Key fields to check:

| Field | Why it matters |
| --- | --- |
| `packageManager` | `npx` / `pnpm dlx` / `bunx --bun` |
| `style` | `new-york`, `base`, `nova`, … |
| `base` | `radix` → `asChild`; `base` → `render` |
| `isRSC` | When `true`, add `"use client"` for any component using hooks, events, or browser APIs |
| `tailwindVersion` | `v4` → `@theme inline`; `v3` → `tailwind.config.js` |
| `tailwindCssFile` | Edit this file only — never create a new one |
| `iconLibrary` | Import icons from this library only |
| `components[]` | Already installed — do not re-add |

---

## 1. Build New Component

### Steps

**Step 1 — Search before building**

```bash
npx shadcn@latest search <query>
```

Check official registry and community registries (`@magicui`, `@tailark`, `@bundui`) before writing custom UI.

**Step 2 — Decide: Server or Client Component?**

See DESIGN.md §4.1. Default to Server Component; add `"use client"` only when the component needs:
- `useState`, `useEffect`, `useRef`, `useContext`, or any other hook
- Event handlers (`onClick`, `onChange`, `onSubmit`, …)
- Browser APIs (`window`, `localStorage`, `navigator`, …)
- Interactive shadcn components (Dialog, Popover, DropdownMenu, …)

**Step 3 — Install the component**

```bash
npx shadcn@latest add button card dialog    # one or many
npx shadcn@latest add @magicui/shimmer-button  # community
npx shadcn@latest add button --dry-run     # preview
npx shadcn@latest add button --diff        # diff before overwrite
```

**Step 4 — Verify after install**

1. Confirm paths match aliases (`@/components/ui/…`)
2. Check sub-component requirements (`SelectItem` inside `SelectGroup`)
3. Check for missing imports

**Step 5 — Write code**

See §4 Critical Rules. File location:

| Component type | Location |
| --- | --- |
| shadcn primitive | `components/ui/<name>.tsx` (CLI-managed) |
| Feature component | `components/<feature>/<name>.tsx` |
| Page | `app/<route>/page.tsx` |
| Layout | `app/<route>/layout.tsx` |
| Hook | `hooks/use-<name>.ts` (always `"use client"`) |

### Component Templates

**Button**
```tsx
import { Button } from "@/components/ui/button"
import { PlusIcon, Loader2Icon } from "lucide-react"

<Button>Save</Button>
<Button><PlusIcon data-icon="inline-start" />Add</Button>
<Button variant="outline">Cancel</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="secondary">Secondary</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><PlusIcon className="size-4" /></Button>
<Button disabled><Loader2Icon data-icon="inline-start" className="animate-spin" />Saving…</Button>
```

**Card**
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">Content</p>
  </CardContent>
  <CardFooter className="flex justify-end gap-2">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>
```

**Form (Client Component)**
```tsx
"use client"
import { FieldGroup, Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

<FieldGroup>
  <Field>
    <FieldLabel htmlFor="email">Email</FieldLabel>
    <Input id="email" type="email" />
    <FieldDescription>Helper text.</FieldDescription>
  </Field>
</FieldGroup>

// Validation state
<Field data-invalid>
  <FieldLabel>Email</FieldLabel>
  <Input aria-invalid />
  <FieldDescription>Invalid email format.</FieldDescription>
</Field>
```

**Dialog (Client Component)**
```tsx
"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"

<Dialog>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm deletion</DialogTitle>
      <DialogDescription>This action cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## 2. Design-to-Code (Figma → Code)

### Fidelity Contract

**No adding.** If Figma doesn't show it — don't add it.
**No removing.** If Figma shows 13 px — code 13 px, not 14.
**No inferring.** Uncertain value → stop and ask.
**No polishing.** Honour the design, don't improve it.

### Six Steps — mandatory order

**Step 1 — Fetch design context**
```
get_design_context(<node-id>)
```
Too large? → `get_metadata(<root-node-id>)` then re-fetch leaf nodes.

**Step 2 — Fetch screenshot**
```
get_screenshot(<node-id>)
```
Screenshot = visual fidelity source. Design context = structure + tokens source. Need both.

**Step 3 — Fetch variables**
```
get_variable_defs(<node-id>)
```
If you get raw hex instead of variable names, re-prompt: *"Get the variable names and values used in this frame."*

**Step 4 — Build the inventory (mandatory)**

Before any JSX, list everything in the node:

```
INVENTORY of figma node "card/product"
- Container: rounded-lg, p-6, gap-4, bg=card, border=border
- Image: 240×160, rounded-md, object-cover
- Title: text-lg font-medium, color=card-foreground
- Description: text-sm, color=muted-foreground, line-clamp-2
- Footer: gap-2, justify-between
  - Price: text-base font-medium
  - Button: variant=outline size=sm label="View more"
- States visible: default only
- Variables: --card, --card-foreground, --muted-foreground, --border, --radius-lg
```

Anything not in Figma → not in inventory → not coded.

**Step 5 — Implement against the inventory**

Token mapping (see DESIGN.md §2 for full 4-mode values):

| Figma reports | Code | Notes |
| --- | --- | --- |
| `background` | `bg-background` | Switches per mode automatically |
| `primary` | `bg-primary` | neutral/900 light · neutral/200 dark · blue/200 primary · yellow/200 secondary |
| `muted-foreground` | `text-muted-foreground` | neutral/500 · neutral/400 · blue/400 · yellow/400 |
| `space/4` (16 px) | `p-4`, `gap-4` | DESIGN.md §9.5 |
| `radius/lg` | `rounded-lg` | 8 px — DESIGN.md §9.1 |
| `font/size/lg` | `text-lg` | 18 px — DESIGN.md §9.3 |
| `opacity/50` | `opacity-50` | DESIGN.md §9.12 |
| Raw hex without variable | **Stop and ask** | Never use tw/colors or rdx/colors directly |

Reuse existing components. A button-shaped element → `<Button>`, not a styled `<div>`.
Missing component → install first: `npx shadcn@latest add <name>`

Also decide Server vs Client: if the Figma node needs interactivity, add `"use client"` at the top.

**Step 6 — Validate against screenshot**

| Issue | Fix |
| --- | --- |
| Wrong token | Fix the className |
| Wrong spacing | Re-check Figma value |
| Element not in inventory | Remove it |
| Missing element | Add it |
| Matches inventory but looks off | It is correct — do not "improve" it |

Only mark complete after this pass.

---

## 3. Next.js App Router Patterns

See DESIGN.md §4 for full details. Key decisions for every component:

### 3.1 Server vs Client

```tsx
// app/dashboard/page.tsx — Server Component (no directive)
export default async function ProductPage() {
  const products = await db.query("SELECT …")
  return <ProductGrid items={products} />  // pass data to client leaf
}
```

```tsx
// components/product-grid.tsx — Client Component
"use client"
import { useState } from "react"

export function ProductGrid({ items }: { items: Product[] }) {
  const [filter, setFilter] = useState("")
  return <div>…</div>
}
```

Push `"use client"` as deep as possible. Keep page-level components as Server Components.

### 3.2 Interactive shadcn components

These always need `"use client"` in the file that controls their state:

```tsx
"use client"
import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

export function DeleteButton({ id }: { id: string }) {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent>…</DialogContent>
    </Dialog>
  )
}
```

### 3.3 Server Actions in forms

```tsx
// app/actions.ts
"use server"
// "use server" must be the first line of the file
export async function createItem(formData: FormData) {
  const name = formData.get("name") as string
  await db.insert(…)
}
```

```tsx
// app/items/page.tsx — Server Component (no "use client")
import { createItem } from "@/app/actions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function NewItemPage() {
  return (
    <form action={createItem} className="flex flex-col gap-4 max-w-sm">
      <Input name="name" required />
      <Button type="submit">Create</Button>
    </form>
  )
}
```

### 3.4 File placement checklist

- [ ] Interactive logic? → `"use client"` at top
- [ ] Data fetching? → `async` function, no `"use client"`
- [ ] Form submit? → Server Action in `app/actions.ts`
- [ ] Route page? → `app/<route>/page.tsx`
- [ ] Shared layout? → `app/<route>/layout.tsx`
- [ ] Reusable hook? → `hooks/use-<name>.ts` + `"use client"`

---

## 4. Critical Rules

### 4.1 Styling

| Rule | Correct | Wrong |
| --- | --- | --- |
| Semantic tokens only | `bg-primary text-primary-foreground` | `bg-blue-500 text-white` |
| `gap-*` for spacing | `flex flex-col gap-4` | `space-y-4` |
| `size-*` when w = h | `size-10` | `w-10 h-10` |
| `truncate` shorthand | `truncate` | `overflow-hidden text-ellipsis whitespace-nowrap` |
| No manual `dark:` | `bg-background` | `bg-white dark:bg-gray-950` |
| `className` for layout | `<Card className="max-w-md">` | `<Card className="bg-blue-100">` |

### 4.2 Forms

```tsx
<FieldGroup>
  <Field>
    <FieldLabel htmlFor="email">Email</FieldLabel>
    <Input id="email" />
    <FieldDescription>Helper text.</FieldDescription>
  </Field>
</FieldGroup>

// Validation
<Field data-invalid><FieldLabel>Email</FieldLabel><Input aria-invalid /></Field>
```

### 4.3 Composition

```tsx
// Items always inside their Group
<Select>
  <SelectContent>
    <SelectGroup><SelectItem value="a">Option A</SelectItem></SelectGroup>
  </SelectContent>
</Select>

// Dialog must always have a Title
<Dialog>
  <DialogContent>
    <DialogHeader><DialogTitle>Dialog Title</DialogTitle></DialogHeader>
  </DialogContent>
</Dialog>
```

### 4.4 Icons

```tsx
<Button><SearchIcon data-icon="inline-start" />Search</Button>  // inside Button
<SearchIcon className="size-4" />                                // outside Button
```

### 4.5 Images — always `next/image`

```tsx
// ✅ Correct — optimized, lazy-loaded, sized
import Image from "next/image"
<Image src="/photo.jpg" alt="Description" width={400} height={300} />

// ❌ Wrong — bypasses Next.js image optimization
<img src="/photo.jpg" alt="Description" />
```

### 4.5 Conditional classes — always `cn()`

```tsx
import { cn } from "@/lib/utils"
<div className={cn("flex items-center gap-2", isActive && "bg-primary text-primary-foreground")} />
```

---

## 5. Suggest Component

| Use Case | Component | Notes |
| --- | --- | --- |
| Action button | `Button` | variant: default / outline / ghost / destructive / secondary |
| Data container | `Card` | CardHeader, CardContent, CardFooter |
| Text input | `Input` + `Field` | |
| Multi-line text | `Textarea` + `Field` | |
| Select dropdown | `Select` | Static options |
| Searchable dropdown | `Combobox` | Searchable |
| Modal | `Dialog` | Primary content |
| Side panel | `Sheet` | Slides from side |
| Ephemeral alert | `Toast` / `Sonner` | Auto-dismisses |
| Persistent alert | `Alert` | Stays in page |
| Top nav | `NavigationMenu` | |
| Side nav | `Sidebar` | |
| Simple table | `Table` | |
| Sortable table | `DataTable` | Sorting + filtering |
| Placeholder | `Skeleton` | |
| Progress | `Progress` | Determinate |
| Command palette | `Command` | |
| Date picker | `Calendar` + `Popover` | |
| Binary toggle | `Switch` | |
| Multi-option toggle | `ToggleGroup` | 2–7 options |
| Status label | `Badge` | |
| Tabs | `Tabs` | |
| Collapsible | `Accordion` | |
| Tooltip | `Tooltip` | |
| Breadcrumb | `Breadcrumb` | |
| Avatar | `Avatar` | With fallback |
| Divider | `Separator` | |

```bash
npx shadcn@latest search <keyword>      # search registry
npx shadcn@latest add @magicui/shimmer-button  # community
```

---

## 6. Theming & Tokens

Tokens live in `app/globals.css` only — never create a new CSS file.
See DESIGN.md §5 for the full file structure.

### 6.1 Brand Modes

```css
:root                    { --background: #ffffff; --primary: #171717; }  /* light  */
.dark                    { --background: #0a0a0a; --primary: #e5e5e5; }  /* dark   */
[data-theme="primary"]   { --background: #172554; --primary: #bfdbfe; }  /* blue   */
[data-theme="secondary"] { --background: #713f12; --primary: #fef08a; }  /* yellow */
```

Switch at runtime:

```tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>  {/* light/dark */}
<html data-theme="primary">    {/* blue brand   */}
<html data-theme="secondary">  {/* yellow brand */}
```

### Adding custom tokens (see DESIGN.md §5)

```css
:root                    { --warning: #f59e0b; --warning-foreground: #451a03; }
.dark                    { --warning: #b45309; --warning-foreground: #fffbeb; }
[data-theme="primary"]   { --warning: #fbbf24; --warning-foreground: #1e3a8a; }
[data-theme="secondary"] { --warning: #d97706; --warning-foreground: #713f12; }
@theme inline { --color-warning: var(--warning); --color-warning-foreground: var(--warning-foreground); }
```

Usage: `bg-warning`, `text-warning-foreground`

### Token palette reference

| Category | DESIGN.md | Count |
| --- | --- | --- |
| Semantic tokens | §2 | 35 × 4 modes |
| tw/colors | §8.1 | 244 |
| rdx/colors | §8.2 | 396 |
| Primitive tokens | §8.3 | 87 |
| Border radius | §9.1 | 150 |
| Border width | §9.2 | 45 |
| Font | §9.3 | 45 |
| Spacing (gap/margin/padding/…) | §9.4–§9.10 | 530+ |
| Stroke width | §9.11 | 11 |
| Opacity | §9.12 | 21 |
| Font use | §9.13 | 2 |

### No preset swap

Never run `npx shadcn@latest apply --preset` — it overwrites Figma-synced values.
Correct path: re-export from Figma → regenerate `globals.css` from `variables-export.json`.

---

## 7. When to Stop and Ask

Always ask before proceeding — no guessing, no assumptions:

- A Figma variable resolves to a value not in the project tokens
- A Figma node references a component not installed and not in any registry
- Screenshot and design context disagree (padding, color, or layout)
- A behavioral state (hover, focus, disabled, loading) is mentioned but not shown
- Sample data is placeholder and the user has not provided real content
- A copy string is in a non-project language — confirm: translate, keep, or i18n key
- Figma uses a pattern conflicting with shadcn Critical Rules
- Unclear whether a whole card is clickable or only its CTA
- Unsure whether a component should be Server or Client

> **Asking takes 30 seconds. Guessing wrong takes an hour to fix.**

---

## 8. Quick Reference

**Styling snippets** (inside any component)
```tsx
// Form field
<FieldGroup><Field>
  <FieldLabel htmlFor="name">Name</FieldLabel>
  <Input id="name" />
</Field></FieldGroup>

// Icon inside Button
<Button><PlusIcon data-icon="inline-start" />Add</Button>

// Icon outside Button
<SearchIcon className="size-4" />

// Spacing (gap, not space-y)
<div className="flex flex-col gap-4">…</div>

// Equal dimensions (size, not w+h)
<Avatar className="size-10">…</Avatar>

// Status — semantic token or Badge
<Badge variant="secondary">+20.1%</Badge>
<span className="text-destructive">Error</span>

// Conditional classes — always cn()
<div className={cn("flex items-center", isActive && "bg-primary text-primary-foreground")} />

// Dark-mode safe
<div className="bg-background text-foreground" />

// Custom token (define for every mode — see §6)
<div className="bg-warning text-warning-foreground" />

// Image — always next/image, never <img>
import Image from "next/image"
<Image src="/photo.jpg" alt="…" width={400} height={300} />
```

**Server Component** (default — `app/example/page.tsx`)
```tsx
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Example" }

export default async function ExamplePage() {
  const data = await fetch("…").then((r) => r.json())
  return <main className="p-6">{/* render data */}</main>
}
```

**Client Component** (`components/example-client.tsx`)
```tsx
"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ExampleClientProps { label: string }

export function ExampleClient({ label }: ExampleClientProps) {
  const [active, setActive] = useState(false)
  return (
    <button
      onClick={() => setActive((v) => !v)}
      className={cn("px-4 py-2 rounded-md", active && "bg-primary text-primary-foreground")}
    >
      {label}
    </button>
  )
}
```

**Server Action** (`app/actions.ts`)
```tsx
"use server"
import { revalidatePath } from "next/cache"

export async function saveItem(formData: FormData) {
  const name = formData.get("name") as string
  // await db.save(name)
  revalidatePath("/items")
}
```

---

## 9. CLI Commands

```bash
npx shadcn@latest info --json           # project info
npx shadcn@latest search <query>        # search registry
npx shadcn@latest add <name>            # install
npx shadcn@latest add <name> --dry-run  # preview
npx shadcn@latest add <name> --diff     # diff before overwrite

npm run dev
npm run build
npm run lint
```

---

## 10. References

- Token source: `variables-export.json` (lazyyysync-variables-v1, 1806 variables)
- DESIGN.md: §2 semantic tokens · §3 composition rules · §4 Next.js patterns · §5 theming · §8–9 token tables
- shadcn/ui official skill: https://github.com/shadcn-ui/ui/tree/main/skills/shadcn
- shadcn/ui components: https://ui.shadcn.com/docs/components
- Next.js App Router: https://nextjs.org/docs/app
- Tailwind CSS v4: https://tailwindcss.com/docs/theme
- Figma Dev Mode MCP: https://www.figma.com/blog/introducing-figmas-dev-mode-mcp-server/
