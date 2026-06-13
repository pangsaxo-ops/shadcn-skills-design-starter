"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ModeSwitcher } from "./mode-switcher"
import type { SemanticToken } from "@/lib/tokens-data"
import { SEMANTIC_MODES } from "@/lib/tokens-data"

const MODE_CONFIG = {
  light: { selector: ":root", dark: false, dataTheme: null },
  dark: { selector: ".dark", dark: true, dataTheme: null },
  primary: { selector: '[data-theme="primary"]', dark: true, dataTheme: "primary" },
  secondary: { selector: '[data-theme="secondary"]', dark: true, dataTheme: "secondary" },
} as const

type ActiveMode = keyof typeof MODE_CONFIG

const MODE_TO_SEMANTIC: Record<ActiveMode, string> = {
  light: "light mode",
  dark: "dark mode",
  primary: "primary",
  secondary: "secondary",
}

function contrastColor(hex: string): string {
  const c = hex.replace("#", "")
  if (c.length < 6) return "#000"
  const r = parseInt(c.slice(0, 2), 16)
  const g = parseInt(c.slice(2, 4), 16)
  const b = parseInt(c.slice(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5 ? "#0a0a0a" : "#fafafa"
}

interface SemanticTokensPanelProps {
  groups: { label: string; tokens: SemanticToken[] }[]
}

export function SemanticTokensPanel({ groups }: SemanticTokensPanelProps) {
  const [activeMode, setActiveMode] = useState<ActiveMode>("light")

  const semanticKey = MODE_TO_SEMANTIC[activeMode]

  return (
    <div className="flex flex-col gap-6">
      <ModeSwitcher value={activeMode} onChange={setActiveMode} />

      <div className="flex flex-col gap-6">
        {groups.map(({ label, tokens }) => (
          <div key={label} className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {label}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {tokens.map((token) => {
                const hex = token.values[semanticKey] || "#000"
                const alias = token.alias[semanticKey]
                const textColor = hex.startsWith("rgba") ? "#0a0a0a" : contrastColor(hex)
                return (
                  <div key={token.name} className="flex flex-col gap-1.5">
                    <div
                      className="h-12 rounded-md border border-border/50 flex items-end p-2"
                      style={{ backgroundColor: hex }}
                    >
                      <span
                        className="text-[10px] font-mono leading-none opacity-80"
                        style={{ color: textColor }}
                      >
                        {hex}
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 px-0.5">
                      <span className="text-xs font-medium text-foreground truncate">
                        {token.name}
                      </span>
                      {alias && (
                        <span className="text-[10px] text-muted-foreground font-mono truncate">
                          {alias}
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* All-mode comparison table */}
      <div className="flex flex-col gap-3 mt-4">
        <p className="text-sm font-semibold">All modes comparison</p>
        <div className="rounded-lg border border-border overflow-x-auto">
          <table className="w-full text-xs min-w-[600px]">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-3 py-2 font-medium text-muted-foreground">Token</th>
                {SEMANTIC_MODES.map((m) => (
                  <th key={m} className="text-left px-3 py-2 font-medium text-muted-foreground">
                    {m}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {groups.flatMap(({ tokens }) =>
                tokens.map((token) => (
                  <tr key={token.name} className="hover:bg-muted/30 transition-colors">
                    <td className="px-3 py-2 font-mono text-foreground">{token.cssVar}</td>
                    {SEMANTIC_MODES.map((mode) => {
                      const hex = token.values[mode] || "—"
                      return (
                        <td key={mode} className="px-3 py-2">
                          <div className="flex items-center gap-2">
                            <div
                              className="size-4 rounded border border-border/50 shrink-0"
                              style={{ backgroundColor: hex }}
                            />
                            <span className="font-mono text-muted-foreground">{hex}</span>
                          </div>
                        </td>
                      )
                    })}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
