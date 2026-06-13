"use client"

import { cn } from "@/lib/utils"

const MODES = [
  { label: "Light", value: "light", theme: undefined, dark: false },
  { label: "Dark", value: "dark", theme: undefined, dark: true },
  { label: "Primary", value: "primary", theme: "primary", dark: true },
  { label: "Secondary", value: "secondary", theme: "secondary", dark: true },
] as const

type Mode = (typeof MODES)[number]["value"]

interface ModeSwitcherProps {
  value: Mode
  onChange: (mode: Mode) => void
}

export function ModeSwitcher({ value, onChange }: ModeSwitcherProps) {
  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-muted w-fit">
      {MODES.map((mode) => (
        <button
          key={mode.value}
          onClick={() => onChange(mode.value)}
          className={cn(
            "px-3 py-1 text-xs font-medium rounded-md transition-colors",
            value === mode.value
              ? "bg-background text-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {mode.label}
        </button>
      ))}
    </div>
  )
}
