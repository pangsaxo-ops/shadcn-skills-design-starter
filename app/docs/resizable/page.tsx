"use client"
import {
  ResizableHandle, ResizablePanel, ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

export default function ResizablePage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Resizable</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Accessible resizable panel groups and layouts with keyboard support.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Horizontal</h2>
        <ComponentPreview code={`<ResizablePanelGroup orientation="horizontal" className="rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center">One</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center">Two</div>
  </ResizablePanel>
</ResizablePanelGroup>`}>
          <ResizablePanelGroup orientation="horizontal" className="rounded-lg border border-border w-full max-w-lg min-h-[120px]">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold text-sm">One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold text-sm">Two</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Vertical</h2>
        <ComponentPreview code={`<ResizablePanelGroup orientation="vertical">`}>
          <ResizablePanelGroup orientation="vertical" className="rounded-lg border border-border w-full max-w-sm min-h-[200px]">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full min-h-[60px] items-center justify-center p-4">
                <span className="font-semibold text-sm">Top</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full min-h-[60px] items-center justify-center p-4">
                <span className="font-semibold text-sm">Bottom</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add resizable" />
      </div>
    </div>
  )
}
