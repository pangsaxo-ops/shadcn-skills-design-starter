import rawData from "@/assets/variables-export.json"

type RGBA = { r: number; g: number; b: number; a: number }

function rgbaToHex({ r, g, b, a }: RGBA): string {
  if (a < 0.99) {
    return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${Math.round(a * 100) / 100})`
  }
  const h = (n: number) => Math.round(n * 255).toString(16).padStart(2, "0")
  return `#${h(r)}${h(g)}${h(b)}`
}

// ── Semantic tokens (shadcn/ui collection) ──────────────────────────────────

export type SemanticToken = {
  name: string
  cssVar: string
  tailwindClass: string
  alias: Record<string, string>
  values: Record<string, string>
}

const SEMANTIC_GROUPS: { label: string; tokens: string[] }[] = [
  { label: "Base", tokens: ["background", "foreground"] },
  { label: "Card", tokens: ["card", "card-foreground"] },
  { label: "Popover", tokens: ["popover", "popover-foreground"] },
  { label: "Primary", tokens: ["primary", "primary-foreground"] },
  { label: "Secondary", tokens: ["secondary", "secondary-foreground"] },
  { label: "Muted", tokens: ["muted", "muted-foreground"] },
  { label: "Accent", tokens: ["accent", "accent-foreground"] },
  { label: "Destructive", tokens: ["destructive"] },
  { label: "Utility", tokens: ["border", "input", "ring"] },
  { label: "Chart", tokens: ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"] },
  {
    label: "Sidebar",
    tokens: [
      "sidebar", "sidebar-foreground",
      "sidebar-primary", "sidebar-primary-foreground",
      "sidebar-accent", "sidebar-accent-foreground",
      "sidebar-border", "sidebar-ring",
    ],
  },
]

export function getSemanticTokens(): { label: string; tokens: SemanticToken[] }[] {
  const vars = (rawData as any).variables.filter(
    (v: any) => v.collectionName === "shadcn/ui"
  )
  const byName: Record<string, SemanticToken> = {}
  for (const v of vars) {
    const values: Record<string, string> = {}
    const alias: Record<string, string> = {}
    for (const [mode, data] of Object.entries(v.valuesByMode as Record<string, any>)) {
      values[mode] = rgbaToHex(data.value)
      if (data.alias) alias[mode] = data.alias
    }
    byName[v.name] = {
      name: v.name,
      cssVar: `--${v.name}`,
      tailwindClass: `bg-${v.name}`,
      alias,
      values,
    }
  }
  return SEMANTIC_GROUPS.map(({ label, tokens }) => ({
    label,
    tokens: tokens.map((name) => byName[name]).filter(Boolean),
  }))
}

export const SEMANTIC_MODES = ["light mode", "dark mode", "primary", "secondary"] as const
export type SemanticMode = (typeof SEMANTIC_MODES)[number]

// ── Tailwind palette (tw/colors collection) ──────────────────────────────────

export type PaletteColor = {
  name: string
  shades: { shade: string; hex: string }[]
}

const TW_COLOR_ORDER = [
  "slate", "gray", "zinc", "neutral", "stone",
  "red", "orange", "amber", "yellow", "lime",
  "green", "emerald", "teal", "cyan", "sky",
  "blue", "indigo", "violet", "purple", "fuchsia",
  "pink", "rose",
]

export function getTailwindColors(): PaletteColor[] {
  const vars = (rawData as any).variables.filter(
    (v: any) => v.collectionName === "tw/colors"
  )
  const byName: Record<string, { shade: string; hex: string }[]> = {}
  for (const v of vars) {
    const parts = v.name.split("/")
    if (parts.length !== 2) continue
    const [name, shade] = parts
    const modeData = v.valuesByMode["Mode 1"]
    if (!modeData?.value) continue
    if (!byName[name]) byName[name] = []
    byName[name].push({ shade, hex: rgbaToHex(modeData.value) })
  }
  const ordered: PaletteColor[] = []
  for (const name of TW_COLOR_ORDER) {
    if (byName[name]) ordered.push({ name, shades: byName[name] })
  }
  // add any remaining not in order list
  for (const [name, shades] of Object.entries(byName)) {
    if (!TW_COLOR_ORDER.includes(name)) ordered.push({ name, shades })
  }
  return ordered
}

// ── Radix colors (rdx/colors collection) ─────────────────────────────────────

export type RadixColor = {
  name: string
  shades: { shade: string; light: string; dark: string }[]
}

const RDX_COLOR_ORDER = [
  "gray", "mauve", "slate", "sage", "olive", "sand",
  "tomato", "red", "ruby", "crimson", "pink", "plum",
  "purple", "violet", "iris", "indigo", "blue", "cyan",
  "teal", "jade", "green", "grass", "lime", "yellow",
  "amber", "orange", "brown", "bronze", "gold",
  "mint",
]

export function getRadixColors(): RadixColor[] {
  const vars = (rawData as any).variables.filter(
    (v: any) => v.collectionName === "rdx/colors"
  )
  const byName: Record<string, { shade: string; light: string; dark: string }[]> = {}
  for (const v of vars) {
    const parts = v.name.split("/")
    if (parts.length !== 2) continue
    const [name, shade] = parts
    if (!byName[name]) byName[name] = []
    const light = v.valuesByMode["light mode"]?.value
      ? rgbaToHex(v.valuesByMode["light mode"].value)
      : "#000"
    const dark = v.valuesByMode["dark mode"]?.value
      ? rgbaToHex(v.valuesByMode["dark mode"].value)
      : "#000"
    byName[name].push({ shade, light, dark })
  }
  const ordered: RadixColor[] = []
  for (const name of RDX_COLOR_ORDER) {
    if (byName[name]) ordered.push({ name, shades: byName[name] })
  }
  for (const [name, shades] of Object.entries(byName)) {
    if (!RDX_COLOR_ORDER.includes(name)) ordered.push({ name, shades })
  }
  return ordered
}

// ── Radius tokens ──────────────────────────────────────────────────────────

export type RadiusToken = { name: string; value: string; example: string }

export function getRadiusTokens(): RadiusToken[] {
  return [
    { name: "rounded-xs", value: "0.125rem (2px)", example: "rounded-xs" },
    { name: "rounded-sm", value: "0.25rem (4px)", example: "rounded-sm" },
    { name: "rounded-md", value: "0.375rem (6px)", example: "rounded-md" },
    { name: "rounded-lg", value: "0.5rem (8px)", example: "rounded-lg" },
    { name: "rounded-xl", value: "0.75rem (12px)", example: "rounded-xl" },
    { name: "rounded-2xl", value: "1rem (16px)", example: "rounded-2xl" },
    { name: "rounded-3xl", value: "1.5rem (24px)", example: "rounded-3xl" },
    { name: "rounded-4xl", value: "2rem (32px)", example: "rounded-4xl" },
    { name: "rounded-full", value: "9999px", example: "rounded-full" },
  ]
}

// ── Typography tokens ──────────────────────────────────────────────────────

export type FontSizeToken = {
  name: string
  size: string
  lineHeight: string
  tailwindClass: string
}

export function getFontSizeTokens(): FontSizeToken[] {
  return [
    { name: "xs", size: "0.75rem", lineHeight: "1rem", tailwindClass: "text-xs" },
    { name: "sm", size: "0.875rem", lineHeight: "1.25rem", tailwindClass: "text-sm" },
    { name: "base", size: "1rem", lineHeight: "1.5rem", tailwindClass: "text-base" },
    { name: "lg", size: "1.125rem", lineHeight: "1.75rem", tailwindClass: "text-lg" },
    { name: "xl", size: "1.25rem", lineHeight: "1.75rem", tailwindClass: "text-xl" },
    { name: "2xl", size: "1.5rem", lineHeight: "2rem", tailwindClass: "text-2xl" },
    { name: "3xl", size: "1.875rem", lineHeight: "2.25rem", tailwindClass: "text-3xl" },
    { name: "4xl", size: "2.25rem", lineHeight: "2.5rem", tailwindClass: "text-4xl" },
  ]
}
