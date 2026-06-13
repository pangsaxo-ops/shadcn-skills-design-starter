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

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Card</h3>
          <ComponentPreview code={`<Label className="flex items-start gap-3 rounded-lg border border-border p-3 has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/5">
  <Checkbox id="card" defaultChecked className="mt-0.5" />
  <div className="flex flex-col gap-1">
    <span className="text-sm font-medium leading-none">Enable notifications</span>
    <span className="text-sm text-muted-foreground">
      You can enable or disable notifications at any time.
    </span>
  </div>
</Label>`}>
            <Label
              htmlFor="card"
              className="flex max-w-sm items-start gap-3 rounded-lg border border-border p-3 has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/5"
            >
              <Checkbox id="card" defaultChecked className="mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium leading-none">Enable notifications</span>
                <span className="text-sm text-muted-foreground">
                  You can enable or disable notifications at any time.
                </span>
              </div>
            </Label>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
