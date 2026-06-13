import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react"

export default function TogglePage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Toggle</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A two-state button that can be either on or off.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`<Toggle>
  <Bold className="size-4" />
</Toggle>`}>
          <Toggle aria-label="Toggle bold">
            <Bold className="size-4" />
          </Toggle>
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add toggle toggle-group" />
      </div>
      <Separator />
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold tracking-tight">Examples</h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Outline</h3>
          <ComponentPreview code={`<Toggle variant="outline" aria-label="Toggle italic">
  <Italic className="size-4" />
</Toggle>`}>
            <Toggle variant="outline" aria-label="Toggle italic">
              <Italic className="size-4" />
            </Toggle>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">With Text</h3>
          <ComponentPreview code={`<Toggle aria-label="Toggle italic">
  <Italic className="size-4" />
  Italic
</Toggle>`}>
            <Toggle aria-label="Toggle italic">
              <Italic className="size-4" />
              Italic
            </Toggle>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Sizes</h3>
          <ComponentPreview code={`<Toggle size="sm"><Bold className="size-4" /></Toggle>
<Toggle size="default"><Bold className="size-4" /></Toggle>
<Toggle size="lg"><Bold className="size-4" /></Toggle>`}>
            <div className="flex flex-wrap items-center gap-3">
              <Toggle size="sm" aria-label="Small"><Bold className="size-4" /></Toggle>
              <Toggle size="default" aria-label="Default"><Bold className="size-4" /></Toggle>
              <Toggle size="lg" aria-label="Large"><Bold className="size-4" /></Toggle>
            </div>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Toggle Group</h3>
          <ComponentPreview code={`<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold"><Bold /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><Italic /></ToggleGroupItem>
  <ToggleGroupItem value="underline"><Underline /></ToggleGroupItem>
</ToggleGroup>`}>
            <ToggleGroup type="multiple">
              <ToggleGroupItem value="bold" aria-label="Bold"><Bold className="size-4" /></ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic"><Italic className="size-4" /></ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline"><Underline className="size-4" /></ToggleGroupItem>
            </ToggleGroup>
          </ComponentPreview>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Single Select Group</h3>
          <ComponentPreview code={`<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left"><AlignLeft /></ToggleGroupItem>
  <ToggleGroupItem value="center"><AlignCenter /></ToggleGroupItem>
  <ToggleGroupItem value="right"><AlignRight /></ToggleGroupItem>
</ToggleGroup>`}>
            <ToggleGroup type="single" defaultValue="center">
              <ToggleGroupItem value="left" aria-label="Left"><AlignLeft className="size-4" /></ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Center"><AlignCenter className="size-4" /></ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Right"><AlignRight className="size-4" /></ToggleGroupItem>
            </ToggleGroup>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
