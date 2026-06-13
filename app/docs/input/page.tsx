import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { Search, Eye } from "lucide-react"

export default function InputPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Input</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Displays a form input field or a component that looks like an input field.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`<Input type="email" placeholder="Email" />`}>
          <Input type="email" placeholder="Email" className="max-w-sm" />
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add input" />
      </div>
      <Separator />
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold tracking-tight">Examples</h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">With Label</h3>
          <ComponentPreview code={`<div className="flex flex-col gap-2">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="m@example.com" />
</div>`}>
            <div className="flex flex-col gap-2 w-full max-w-sm">
              <Label htmlFor="email2">Email</Label>
              <Input type="email" id="email2" placeholder="m@example.com" />
            </div>
          </ComponentPreview>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">With Button</h3>
          <ComponentPreview code={`<div className="flex gap-2">
  <Input placeholder="Search..." />
  <Button>Search</Button>
</div>`}>
            <div className="flex gap-2 w-full max-w-sm">
              <Input placeholder="Search..." />
              <Button>Search</Button>
            </div>
          </ComponentPreview>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">States</h3>
          <ComponentPreview code={`<Input placeholder="Default" />
<Input placeholder="Disabled" disabled />
<Input placeholder="File" type="file" />`}>
            <div className="flex flex-col gap-3 w-full max-w-sm">
              <Input placeholder="Default" />
              <Input placeholder="Disabled" disabled />
              <Input type="file" />
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
