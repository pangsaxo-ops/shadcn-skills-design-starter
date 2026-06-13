import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getFontSizeTokens } from "@/lib/tokens-data"

const FONT_WEIGHTS = [
  { label: "Thin", class: "font-thin", value: "100" },
  { label: "Light", class: "font-light", value: "300" },
  { label: "Normal", class: "font-normal", value: "400" },
  { label: "Medium", class: "font-medium", value: "500" },
  { label: "Semibold", class: "font-semibold", value: "600" },
  { label: "Bold", class: "font-bold", value: "700" },
  { label: "Extrabold", class: "font-extrabold", value: "800" },
  { label: "Black", class: "font-black", value: "900" },
]

export default function TypographyPage() {
  const sizes = getFontSizeTokens()

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Design Tokens</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Typography</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Font stack, size scale, and weight tokens. Sans uses{" "}
          <code className="text-base">Inter</code>, mono uses{" "}
          <code className="text-base">Geist Mono</code>.
        </p>
      </div>

      <Separator />

      {/* Font families */}
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold tracking-tight">Font families</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-border p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Sans</span>
              <code className="text-xs text-muted-foreground">--font-sans</code>
            </div>
            <p className="text-2xl font-medium leading-tight">
              The quick brown fox
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              Inter, ui-sans-serif, system-ui, sans-serif
            </p>
          </div>
          <div className="rounded-lg border border-border p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Mono</span>
              <code className="text-xs text-muted-foreground">--font-mono</code>
            </div>
            <p className="text-2xl font-mono leading-tight">
              const x = 42;
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              Geist Mono, ui-monospace, SFMono-Regular
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Size scale */}
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold tracking-tight">Size scale</h2>
        <div className="flex flex-col gap-4 border border-border rounded-lg overflow-hidden divide-y divide-border">
          {sizes.map((token) => (
            <div key={token.name} className="flex items-baseline gap-4 px-5 py-4">
              <div className="w-20 shrink-0">
                <code className="text-xs text-muted-foreground">{token.tailwindClass}</code>
              </div>
              <p className="flex-1 text-foreground leading-none" style={{ fontSize: token.size }}>
                The quick brown fox jumps
              </p>
              <div className="shrink-0 text-right">
                <span className="text-xs text-muted-foreground font-mono">{token.size}</span>
                <span className="text-xs text-muted-foreground font-mono"> / {token.lineHeight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Font weights */}
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold tracking-tight">Font weights</h2>
        <div className="flex flex-col gap-3">
          {FONT_WEIGHTS.map(({ label, class: cls, value }) => (
            <div key={cls} className="flex items-baseline gap-4">
              <div className="w-28 shrink-0">
                <code className="text-xs text-muted-foreground">{cls}</code>
              </div>
              <p className={`flex-1 text-xl text-foreground ${cls}`}>
                {label}
              </p>
              <span className="text-xs text-muted-foreground font-mono">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Reference table */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Reference table</h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Class</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Size</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Line height</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sizes.map((token) => (
                <tr key={token.name}>
                  <td className="px-4 py-2.5 font-mono text-xs text-foreground">{token.tailwindClass}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{token.size}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{token.lineHeight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
