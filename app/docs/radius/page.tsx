import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getRadiusTokens } from "@/lib/tokens-data"

const RADIUS_VALUES: Record<string, string> = {
  "rounded-xs": "0.125rem",
  "rounded-sm": "0.25rem",
  "rounded-md": "0.375rem",
  "rounded-lg": "0.5rem",
  "rounded-xl": "0.75rem",
  "rounded-2xl": "1rem",
  "rounded-3xl": "1.5rem",
  "rounded-4xl": "2rem",
  "rounded-full": "9999px",
}

const CSS_VAR_SUFFIX: Record<string, string> = {
  "rounded-xs": "xs",
  "rounded-sm": "sm",
  "rounded-md": "md",
  "rounded-lg": "lg",
  "rounded-xl": "xl",
  "rounded-2xl": "2xl",
  "rounded-3xl": "3xl",
  "rounded-4xl": "4xl",
  "rounded-full": "full",
}

export default function RadiusPage() {
  const tokens = getRadiusTokens()

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Design Tokens</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Border Radius</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          9-step radius scale from <code className="text-base">2px</code> to{" "}
          <code className="text-base">full</code>. Base radius is{" "}
          <code className="text-base">0.5rem</code> via{" "}
          <code className="text-base">--radius</code>.
        </p>
      </div>

      <Separator />

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold tracking-tight">Visual scale</h2>
        <div className="flex flex-col gap-4">
          {tokens.map((token) => {
            const cssValue = RADIUS_VALUES[token.name] ?? "0"
            return (
              <div key={token.name} className="flex items-center gap-5">
                <div
                  className="size-14 shrink-0 bg-primary/20 border-2 border-primary/40"
                  style={{ borderRadius: cssValue }}
                />
                <div className="flex flex-col gap-0.5">
                  <code className="text-sm font-mono text-foreground">{token.name}</code>
                  <span className="text-xs text-muted-foreground">{token.value}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Reference table</h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Class</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">CSS variable</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Value</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Preview</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {tokens.map((token) => {
                const cssValue = RADIUS_VALUES[token.name] ?? "0"
                const suffix = CSS_VAR_SUFFIX[token.name] ?? token.name.replace("rounded-", "")
                return (
                  <tr key={token.name}>
                    <td className="px-4 py-2.5 font-mono text-xs text-foreground">{token.name}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                      --radius-{suffix}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{token.value}</td>
                    <td className="px-4 py-3">
                      <div
                        className="size-6 bg-primary/30 border border-primary/50"
                        style={{ borderRadius: cssValue }}
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
