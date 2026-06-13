import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

const tags = Array.from({ length: 50 }).map((_, i) => `v1.2.${i}`)

export default function ScrollAreaPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Scroll Area</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Augments native scroll functionality for custom, cross-browser styling.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <>
        <div key={tag} className="text-sm">{tag}</div>
        <Separator className="my-2" />
      </>
    ))}
  </div>
</ScrollArea>`}>
          <ScrollArea className="h-72 w-48 rounded-md border border-border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag) => (
                <div key={tag}>
                  <div className="text-sm">{tag}</div>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add scroll-area" />
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Horizontal scroll</h2>
        <ComponentPreview code={`<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max gap-4 p-4">
    {works.map((work) => (
      <figure key={work} className="shrink-0">
        <div className="overflow-hidden rounded-md">
          <div className="h-[150px] w-[100px] bg-muted" />
        </div>
        <figcaption className="pt-2 text-xs text-muted-foreground">{work}</figcaption>
      </figure>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}>
          <ScrollArea className="w-80 whitespace-nowrap rounded-md border border-border">
            <div className="flex w-max gap-4 p-4">
              {Array.from({length:8}).map((_,i) => (
                <figure key={i} className="shrink-0">
                  <div className="h-[100px] w-[80px] rounded-md bg-muted" />
                  <figcaption className="pt-2 text-xs text-muted-foreground">Album {i+1}</figcaption>
                </figure>
              ))}
            </div>
          </ScrollArea>
        </ComponentPreview>
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
                { prop: "type", type: '"auto" | "always" | "scroll" | "hover"', def: '"hover"' },
                { prop: "scrollHideDelay", type: "number", def: "600" },
                { prop: "dir", type: '"ltr" | "rtl"', def: '"ltr"' },
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
