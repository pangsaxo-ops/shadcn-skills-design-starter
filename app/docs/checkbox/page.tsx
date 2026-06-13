"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

export default function CheckboxPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Checkbox</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add checkbox" />
      </div>
      <Separator />
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold tracking-tight">Examples</h2>
        <ComponentPreview code={`<div className="flex flex-col gap-3">
  <div className="flex items-center gap-2">
    <Checkbox id="opt1" defaultChecked />
    <Label htmlFor="opt1">Recieve emails</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="opt2" />
    <Label htmlFor="opt2">Receive SMS</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="opt3" disabled />
    <Label htmlFor="opt3" className="opacity-50">Push notifications (disabled)</Label>
  </div>
</div>`}>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Checkbox id="opt1" defaultChecked />
              <Label htmlFor="opt1">Receive emails</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="opt2" />
              <Label htmlFor="opt2">Receive SMS</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="opt3" disabled />
              <Label htmlFor="opt3" className="opacity-50">Push notifications (disabled)</Label>
            </div>
          </div>
        </ComponentPreview>
      </div>
    </div>
  )
}
