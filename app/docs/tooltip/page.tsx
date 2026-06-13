import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

export default function TooltipPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent><p>Add to library</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add tooltip" />
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Positions</h2>
        <ComponentPreview code={`<TooltipProvider>
  <div className="flex gap-4">
    {["top","bottom","left","right"].map(side => (
      <Tooltip key={side}>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">{side}</Button>
        </TooltipTrigger>
        <TooltipContent side={side}><p>Tooltip {side}</p></TooltipContent>
      </Tooltip>
    ))}
  </div>
</TooltipProvider>`}>
          <TooltipProvider>
            <div className="flex gap-3">
              {(["top","bottom","left","right"] as const).map(side => (
                <Tooltip key={side}>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm">{side}</Button>
                  </TooltipTrigger>
                  <TooltipContent side={side}><p>Tooltip {side}</p></TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </ComponentPreview>
      </div>
    </div>
  )
}
