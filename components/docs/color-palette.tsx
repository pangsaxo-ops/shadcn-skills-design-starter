"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import type { PaletteColor, RadixColor } from "@/lib/tokens-data"

function ColorSwatch({ hex, label }: { hex: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <button
      onClick={copy}
      title={`${label}: ${hex}`}
      className="group flex flex-col gap-1 text-left"
    >
      <div
        className="h-8 w-full rounded border border-black/5 group-hover:scale-105 transition-transform"
        style={{ backgroundColor: hex }}
      />
      <span className="text-[10px] text-muted-foreground font-mono leading-none">
        {copied ? "copied!" : label}
      </span>
    </button>
  )
}

interface TailwindPaletteProps {
  colors: PaletteColor[]
}

export function TailwindPalette({ colors }: TailwindPaletteProps) {
  return (
    <div className="flex flex-col gap-4">
      {colors.map(({ name, shades }) => (
        <div key={name} className="flex items-start gap-3">
          <div className="w-20 shrink-0 pt-2">
            <span className="text-xs font-medium text-foreground capitalize">{name}</span>
          </div>
          <div className="flex-1 grid gap-1" style={{ gridTemplateColumns: `repeat(${shades.length}, minmax(0, 1fr))` }}>
            {shades.map(({ shade, hex }) => (
              <ColorSwatch key={shade} hex={hex} label={shade} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

interface RadixPaletteProps {
  colors: RadixColor[]
}

export function RadixPalette({ colors }: RadixPaletteProps) {
  const [showDark, setShowDark] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setShowDark(false)}
          className={cn(
            "px-3 py-1 text-xs rounded-md font-medium transition-colors",
            !showDark ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          Light
        </button>
        <button
          onClick={() => setShowDark(true)}
          className={cn(
            "px-3 py-1 text-xs rounded-md font-medium transition-colors",
            showDark ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          Dark
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {colors.map(({ name, shades }) => (
          <div key={name} className="flex items-start gap-3">
            <div className="w-20 shrink-0 pt-2">
              <span className="text-xs font-medium text-foreground capitalize">{name}</span>
            </div>
            <div
              className="flex-1 grid gap-1"
              style={{ gridTemplateColumns: `repeat(${shades.length}, minmax(0, 1fr))` }}
            >
              {shades.map(({ shade, light, dark }) => (
                <ColorSwatch key={shade} hex={showDark ? dark : light} label={shade} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
