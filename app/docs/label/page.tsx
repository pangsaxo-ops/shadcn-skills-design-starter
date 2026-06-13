import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

export default function LabelPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Label</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Renders an accessible label associated with controls.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`<div className="flex flex-col gap-2">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="m@example.com" />
</div>`}>
          <div className="flex flex-col gap-2 w-full max-w-sm">
            <Label htmlFor="lemail">Email</Label>
            <Input type="email" id="lemail" placeholder="m@example.com" />
          </div>
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add label" />
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">With Checkbox</h2>
        <ComponentPreview code={`<div className="flex items-center gap-2">
  <Checkbox id="terms2" />
  <Label htmlFor="terms2">Accept terms and conditions</Label>
</div>`}>
          <div className="flex items-center gap-2">
            <Checkbox id="lterms" />
            <Label htmlFor="lterms">Accept terms and conditions</Label>
          </div>
        </ComponentPreview>
      </div>
    </div>
  )
}
