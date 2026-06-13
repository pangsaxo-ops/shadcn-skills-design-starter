"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Check, Moon, Palette, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Mode = "light" | "dark" | "primary" | "secondary"

// swatch colors mirror the brand-mode backgrounds defined in app/globals.css
const MODES: { value: Mode; label: string; color: string }[] = [
  { value: "light", label: "Light", color: "#ffffff" },
  { value: "dark", label: "Dark", color: "#0a0a0a" },
  { value: "primary", label: "Primary · Blue", color: "#172554" },
  { value: "secondary", label: "Secondary · Yellow", color: "#713f12" },
]

const BRAND_KEY = "brand-mode"

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [brand, setBrand] = React.useState<"primary" | "secondary" | null>(null)

  // re-apply persisted brand mode on load (next-themes handles light/dark)
  React.useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem(BRAND_KEY)
    if (saved === "primary" || saved === "secondary") {
      setBrand(saved)
      document.documentElement.setAttribute("data-theme", saved)
    }
  }, [])

  const current: Mode = brand ?? (resolvedTheme === "dark" ? "dark" : "light")

  function apply(mode: Mode) {
    if (mode === "primary" || mode === "secondary") {
      document.documentElement.setAttribute("data-theme", mode)
      localStorage.setItem(BRAND_KEY, mode)
      setBrand(mode)
      setTheme("dark") // brand backgrounds are dark-based
    } else {
      document.documentElement.removeAttribute("data-theme")
      localStorage.removeItem(BRAND_KEY)
      setBrand(null)
      setTheme(mode)
    }
  }

  const Icon = current === "dark" ? Moon : current === "light" ? Sun : Palette

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="size-8" aria-label="Theme" disabled>
        <Palette className="size-4" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-8" aria-label="Switch theme">
          <Icon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {MODES.map((m) => (
          <DropdownMenuItem key={m.value} onClick={() => apply(m.value)} className="gap-2">
            <span
              className="size-3.5 rounded-full border border-border"
              style={{ background: m.color }}
            />
            {m.label}
            {current === m.value && <Check className="ml-auto size-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
