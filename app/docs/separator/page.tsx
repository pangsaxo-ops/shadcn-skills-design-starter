import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

export default function SeparatorPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Separator</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Visually or semantically separates content. Corresponds to the <code className="text-sm">hr</code> element.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`<div>
  <div className="flex flex-col gap-1">
    <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
    <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center gap-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>`}>
          <div className="w-full max-w-sm">
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
              <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center gap-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Source</div>
            </div>
          </div>
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add separator" />
      </div>
      <Separator />
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold tracking-tight">Examples</h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Horizontal (default)</h3>
          <ComponentPreview code={`<Separator />`}>
            <div className="w-full max-w-sm">
              <Separator />
            </div>
          </ComponentPreview>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Vertical</h3>
          <ComponentPreview code={`<div className="flex h-10 items-center gap-4">
  <span>Left</span>
  <Separator orientation="vertical" />
  <span>Right</span>
</div>`}>
            <div className="flex h-10 items-center gap-4 text-sm">
              <span>Left</span>
              <Separator orientation="vertical" />
              <span>Right</span>
            </div>
          </ComponentPreview>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">decorative={"{false}"} — semantic</h3>
          <ComponentPreview code={`<Separator decorative={false} />`}>
            <div className="w-full max-w-sm flex flex-col gap-2 text-sm text-muted-foreground">
              <p>Section A</p>
              <Separator decorative={false} />
              <p>Section B</p>
            </div>
          </ComponentPreview>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Prop</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Type</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { prop: "orientation", type: '"horizontal" | "vertical"', def: '"horizontal"' },
                { prop: "decorative", type: "boolean", def: "true" },
              ].map((row) => (
                <tr key={row.prop}>
                  <td className="px-4 py-2.5 font-mono text-xs text-foreground">{row.prop}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{row.type}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{row.def}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
