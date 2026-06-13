import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

export default function ProgressPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Progress</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Displays an indicator showing the completion progress of a task.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`<Progress value={60} className="w-[60%]" />`}>
          <Progress value={60} className="w-64" />
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add progress" />
      </div>
      <Separator />
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold tracking-tight">Examples</h2>
        <ComponentPreview code={`<div className="flex flex-col gap-4">
  <div className="flex flex-col gap-1.5">
    <div className="flex justify-between text-sm">
      <span>Uploading...</span>
      <span>33%</span>
    </div>
    <Progress value={33} />
  </div>
  <div className="flex flex-col gap-1.5">
    <div className="flex justify-between text-sm">
      <span>Processing</span>
      <span>66%</span>
    </div>
    <Progress value={66} />
  </div>
  <div className="flex flex-col gap-1.5">
    <div className="flex justify-between text-sm">
      <span>Complete</span>
      <span>100%</span>
    </div>
    <Progress value={100} />
  </div>
</div>`}>
          <div className="flex flex-col gap-4 w-64">
            {[{label:"Uploading…",v:33},{label:"Processing",v:66},{label:"Complete",v:100}].map(({label,v})=>(
              <div key={v} className="flex flex-col gap-1.5">
                <div className="flex justify-between text-sm">
                  <span>{label}</span><span>{v}%</span>
                </div>
                <Progress value={v} />
              </div>
            ))}
          </div>
        </ComponentPreview>
      </div>
    </div>
  )
}
