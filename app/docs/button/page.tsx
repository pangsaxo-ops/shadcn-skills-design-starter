import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { Mail, Loader2 } from "lucide-react"

const INSTALL_CODE = `npx shadcn@latest add button`

const USAGE_CODE = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Click me</Button>
}`

export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Button</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={USAGE_CODE}>
          <Button>Click me</Button>
        </ComponentPreview>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code={INSTALL_CODE} />
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={USAGE_CODE} />
      </div>

      <Separator />

      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold tracking-tight">Examples</h2>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Variants</h3>
          <ComponentPreview
            code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`}
          >
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Sizes</h3>
          <ComponentPreview
            code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Mail /></Button>`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Mail className="size-4" /></Button>
            </div>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">With Icon</h3>
          <ComponentPreview
            code={`<Button>
  <Mail /> Login with Email
</Button>`}
          >
            <Button>
              <Mail className="size-4" /> Login with Email
            </Button>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Loading</h3>
          <ComponentPreview
            code={`<Button disabled>
  <Loader2 className="animate-spin" />
  Please wait
</Button>`}
          >
            <Button disabled>
              <Loader2 className="size-4 animate-spin" />
              Please wait
            </Button>
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
                { prop: "variant", type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"', def: '"default"' },
                { prop: "size", type: '"default" | "sm" | "lg" | "icon"', def: '"default"' },
                { prop: "asChild", type: "boolean", def: "false" },
                { prop: "disabled", type: "boolean", def: "false" },
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
