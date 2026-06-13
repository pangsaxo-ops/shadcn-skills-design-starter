import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SemanticTokensPanel } from "@/components/docs/semantic-tokens-panel"
import { TailwindPalette, RadixPalette } from "@/components/docs/color-palette"
import { getSemanticTokens, getTailwindColors, getRadixColors } from "@/lib/tokens-data"

export default function ColorsPage() {
  const semanticGroups = getSemanticTokens()
  const tailwindColors = getTailwindColors()
  const radixColors = getRadixColors()

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Design Tokens</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Colors</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          35 semantic color tokens across 4 brand modes, built on the Tailwind and Radix color palettes.
          Tokens automatically switch between{" "}
          <span className="text-foreground font-medium">light</span>,{" "}
          <span className="text-foreground font-medium">dark</span>,{" "}
          <span className="text-foreground font-medium">primary</span>, and{" "}
          <span className="text-foreground font-medium">secondary</span> themes.
        </p>
      </div>

      <Separator />

      {/* Token tiers explainer */}
      <div className="rounded-lg border border-border bg-muted/30 p-5 flex flex-col gap-3">
        <p className="text-sm font-semibold">Token tiers</p>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex gap-3">
            <span className="font-mono text-xs bg-muted rounded px-1.5 py-0.5 text-foreground shrink-0 self-start mt-0.5">Tier 1</span>
            <span><strong className="text-foreground">tw/colors · rdx/colors · tokens</strong> — raw primitives, never referenced directly in components</span>
          </div>
          <div className="flex gap-3">
            <span className="font-mono text-xs bg-muted rounded px-1.5 py-0.5 text-foreground shrink-0 self-start mt-0.5">Tier 2</span>
            <span><strong className="text-foreground">shadcn/ui CSS variables</strong> — semantic aliases in <code className="text-xs">app/globals.css</code>, mode-aware</span>
          </div>
          <div className="flex gap-3">
            <span className="font-mono text-xs bg-muted rounded px-1.5 py-0.5 text-foreground shrink-0 self-start mt-0.5">Tier 3</span>
            <span><strong className="text-foreground">Tailwind utilities</strong> — <code className="text-xs">bg-primary</code>, <code className="text-xs">text-muted-foreground</code> — what components use</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Semantic tokens */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold tracking-tight">Semantic Tokens</h2>
          <p className="text-sm text-muted-foreground">
            35 tokens × 4 modes. Click a mode to preview the palette live. Values sourced from{" "}
            <code className="text-xs">assets/variables-export.json</code>.
          </p>
        </div>
        <SemanticTokensPanel groups={semanticGroups} />
      </div>

      <Separator />

      {/* Tailwind palette */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold tracking-tight">Tailwind Palette</h2>
          <p className="text-sm text-muted-foreground">
            Full <code className="text-xs">tw/colors</code> collection — the raw primitive tier.
            Click any swatch to copy its hex value.
          </p>
        </div>
        <TailwindPalette colors={tailwindColors} />
      </div>

      <Separator />

      {/* Radix colors */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold tracking-tight">Radix Colors</h2>
          <p className="text-sm text-muted-foreground">
            <code className="text-xs">rdx/colors</code> collection — 12-step semantic scales with light and dark variants.
            Toggle the mode to see both.
          </p>
        </div>
        <RadixPalette colors={radixColors} />
      </div>
    </div>
  )
}
