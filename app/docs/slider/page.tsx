import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

export default function SliderPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Slider</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          An input where the user selects a value from within a given range.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`<Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />`}>
          <Slider defaultValue={[50]} max={100} step={1} className="w-64" />
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add slider" />
      </div>
      <Separator />
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold tracking-tight">Examples</h2>
        <ComponentPreview code={`<div className="flex flex-col gap-6">
  <Slider defaultValue={[25]} max={100} step={1} />
  <Slider defaultValue={[25, 75]} max={100} step={1} />
  <Slider defaultValue={[50]} max={100} step={10} disabled />
</div>`}>
          <div className="flex flex-col gap-6 w-64">
            <Slider defaultValue={[25]} max={100} step={1} />
            <Slider defaultValue={[25, 75]} max={100} step={1} />
            <Slider defaultValue={[50]} max={100} step={10} disabled />
          </div>
        </ComponentPreview>
      </div>
    </div>
  )
}
