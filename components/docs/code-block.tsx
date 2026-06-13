import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  className?: string
}

export function CodeBlock({ code, className }: CodeBlockProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-zinc-950 overflow-x-auto", className)}>
      <pre className="p-4 text-xs text-zinc-100 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}
