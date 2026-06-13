import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

export default function RadioGroupPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Radio Group</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A set of checkable buttons—known as radio buttons—where no more than one can be checked at a time.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`<RadioGroup defaultValue="comfortable">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>`}>
          <RadioGroup defaultValue="comfortable">
            {[{id:"r1",v:"default",l:"Default"},{id:"r2",v:"comfortable",l:"Comfortable"},{id:"r3",v:"compact",l:"Compact"}].map(({id,v,l})=>(
              <div key={id} className="flex items-center gap-2">
                <RadioGroupItem value={v} id={id} />
                <Label htmlFor={id}>{l}</Label>
              </div>
            ))}
          </RadioGroup>
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add radio-group" />
      </div>
    </div>
  )
}
