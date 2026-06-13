import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

export default function SwitchPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Switch</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`<div className="flex items-center gap-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}>
          <div className="flex items-center gap-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add switch" />
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">With Form</h2>
        <ComponentPreview code={`<div className="flex flex-col gap-4">
  <div className="flex items-center justify-between rounded-lg border p-4">
    <div>
      <p className="font-medium text-sm">Marketing emails</p>
      <p className="text-sm text-muted-foreground">Receive emails about new products.</p>
    </div>
    <Switch defaultChecked />
  </div>
  <div className="flex items-center justify-between rounded-lg border p-4">
    <div>
      <p className="font-medium text-sm">Security emails</p>
      <p className="text-sm text-muted-foreground">Receive emails about your account.</p>
    </div>
    <Switch defaultChecked disabled />
  </div>
</div>`}>
          <div className="flex flex-col gap-4 w-full max-w-md">
            <div className="flex items-center justify-between rounded-lg border border-border p-4">
              <div>
                <p className="font-medium text-sm">Marketing emails</p>
                <p className="text-xs text-muted-foreground">Receive emails about new products.</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border p-4">
              <div>
                <p className="font-medium text-sm">Security emails</p>
                <p className="text-xs text-muted-foreground">Receive emails about your account.</p>
              </div>
              <Switch defaultChecked disabled />
            </div>
          </div>
        </ComponentPreview>
      </div>
    </div>
  )
}
