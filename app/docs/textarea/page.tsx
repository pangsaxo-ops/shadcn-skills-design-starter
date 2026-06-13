import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

export default function TextareaPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Textarea</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Displays a form textarea or a component that looks like a textarea.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`<Textarea placeholder="Type your message here." />`}>
          <Textarea placeholder="Type your message here." className="max-w-sm" />
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add textarea" />
      </div>
      <Separator />
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold tracking-tight">Examples</h2>
        <ComponentPreview code={`<div className="flex flex-col gap-2">
  <Label htmlFor="message">Your Message</Label>
  <Textarea id="message" placeholder="Type your message here." />
  <Button>Send message</Button>
</div>`}>
          <div className="flex flex-col gap-2 w-full max-w-sm">
            <Label htmlFor="msg">Your Message</Label>
            <Textarea id="msg" placeholder="Type your message here." />
            <Button>Send message</Button>
          </div>
        </ComponentPreview>
      </div>
    </div>
  )
}
