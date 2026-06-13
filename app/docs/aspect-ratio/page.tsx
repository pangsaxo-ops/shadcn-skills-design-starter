import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

export default function AspectRatioPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Aspect Ratio</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Displays content within a desired ratio.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`<div className="w-[450px]">
  <AspectRatio ratio={16 / 9} className="bg-muted">
    <Image src="..." alt="..." fill className="rounded-md object-cover" />
  </AspectRatio>
</div>`}>
          <div className="w-full max-w-sm">
            <AspectRatio ratio={16/9} className="bg-muted rounded-md overflow-hidden">
              <div className="size-full flex items-center justify-center text-muted-foreground text-sm">
                16 / 9
              </div>
            </AspectRatio>
          </div>
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add aspect-ratio" />
      </div>
      <Separator />
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold tracking-tight">Common ratios</h2>
        <div className="grid grid-cols-3 gap-4">
          {[[1,1],[4,3],[16,9]].map(([w,h])=>(
            <div key={`${w}/${h}`} className="flex flex-col gap-1.5">
              <AspectRatio ratio={w/h} className="bg-muted rounded-md overflow-hidden">
                <div className="size-full flex items-center justify-center text-muted-foreground text-xs font-mono">{w}/{h}</div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
