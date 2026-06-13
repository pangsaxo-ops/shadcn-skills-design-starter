"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ComponentPreviewProps {
  children: React.ReactNode
  code: string
  className?: string
}

export function ComponentPreview({ children, code, className }: ComponentPreviewProps) {
  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList className="h-9 w-fit">
        <TabsTrigger value="preview" className="text-xs px-3">Preview</TabsTrigger>
        <TabsTrigger value="code" className="text-xs px-3">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div
          className={cn(
            "rounded-lg border border-border bg-card/30 min-h-32 flex items-center justify-center p-8",
            className
          )}
        >
          {children}
        </div>
      </TabsContent>
      <TabsContent value="code">
        <div className="rounded-lg border border-border bg-zinc-950 overflow-x-auto">
          <pre className="p-4 text-xs text-zinc-100 leading-relaxed">
            <code>{code}</code>
          </pre>
        </div>
      </TabsContent>
    </Tabs>
  )
}
