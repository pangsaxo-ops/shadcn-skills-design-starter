# Component Examples
*Copy-paste patterns for common UI needs*

All examples follow the rules in DESIGN.md §3 and SKILL.md §4.

---

## Forms

### Login form (Client Component)

```tsx
"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FieldGroup, Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { cn } from "@/lib/utils"

export function LoginForm() {
  const [error, setError] = useState<string | null>(null)

  return (
    <form className="flex flex-col gap-4 w-full max-w-sm">
      <FieldGroup>
        <Field data-invalid={!!error}>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" autoComplete="email" aria-invalid={!!error} />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" autoComplete="current-password" />
        </Field>
      </FieldGroup>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button type="submit" className="w-full">Sign in</Button>
    </form>
  )
}
```

### Form with Server Action (no client state needed)

```tsx
// app/actions.ts
"use server"
import { redirect } from "next/navigation"

export async function createProject(formData: FormData) {
  const name = formData.get("name") as string
  if (!name) throw new Error("Name is required")
  // await db.project.create({ name })
  redirect("/projects")
}

// app/projects/new/page.tsx  — Server Component
import { createProject } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"

export default function NewProjectPage() {
  return (
    <form action={createProject} className="flex flex-col gap-4 max-w-sm">
      <Field>
        <FieldLabel htmlFor="name">Project name</FieldLabel>
        <Input id="name" name="name" required />
      </Field>
      <Button type="submit">Create project</Button>
    </form>
  )
}
```

---

## Data Display

### Stats cards (Server Component)

```tsx
// components/stats-grid.tsx  — Server Component (no "use client")
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Stat {
  label: string
  value: string
  change: string
  positive: boolean
}

export function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.label}
            </CardTitle>
            <Badge variant={stat.positive ? "secondary" : "outline"}>
              {stat.change}
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
```

### Data table with search (Client Component)

```tsx
"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Row { id: string; name: string; status: "active" | "inactive" }

export function DataTable({ rows }: { rows: Row[] }) {
  const [query, setQuery] = useState("")
  const filtered = rows.filter((r) =>
    r.name.toLowerCase().includes(query.toLowerCase())
  )
  return (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Search…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-xs"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>
                <Badge variant={row.status === "active" ? "secondary" : "outline"}>
                  {row.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
```

---

## Navigation

### Page layout with sidebar

```tsx
// app/dashboard/layout.tsx  — Server Component
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu,
         SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/dashboard">Dashboard</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/dashboard/settings">Settings</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <main className="flex-1 p-6">{children}</main>
    </SidebarProvider>
  )
}
```

---

## Modals & Overlays

### Confirmation dialog (Client Component)

```tsx
"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog, DialogContent, DialogDescription,
  DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"

export function DeleteDialog({ onConfirm }: { onConfirm: () => void }) {
  const [open, setOpen] = useState(false)

  function handleConfirm() {
    onConfirm()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" size="sm">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm deletion</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="destructive" onClick={handleConfirm}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

---

## Toast / Notifications

```tsx
"use client"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function NotifyButton() {
  return (
    <Button
      onClick={() =>
        toast.success("Saved", { description: "Your changes have been saved." })
      }
    >
      Save
    </Button>
  )
}
```

---

## Brand Mode Switcher

```tsx
"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

type Theme = "light" | "dark" | "primary" | "secondary"

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const root = document.documentElement
    root.removeAttribute("data-theme")
    root.classList.remove("dark")
    if (theme === "dark") root.classList.add("dark")
    else if (theme === "primary" || theme === "secondary") root.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <div className="flex gap-2">
      {(["light","dark","primary","secondary"] as Theme[]).map((t) => (
        <Button
          key={t}
          size="sm"
          variant={theme === t ? "default" : "outline"}
          onClick={() => setTheme(t)}
        >
          {t}
        </Button>
      ))}
    </div>
  )
}
```
