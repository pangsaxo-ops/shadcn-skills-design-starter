import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { FolderOpen, Plus } from "lucide-react"

const INSTALL_CODE = `npx shadcn@latest add empty`

const USAGE_CODE = `import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty"
import { FolderOpen } from "lucide-react"

export function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpen />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          Get started by creating your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create project</Button>
      </EmptyContent>
    </Empty>
  )
}`

export default function EmptyPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Empty</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A placeholder for empty states — communicates that there is no content and
          guides the user toward a next action.
        </p>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={USAGE_CODE}>
          <Empty className="w-full max-w-sm">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FolderOpen />
              </EmptyMedia>
              <EmptyTitle>No projects yet</EmptyTitle>
              <EmptyDescription>
                Get started by creating your first project.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>
                <Plus />
                Create project
              </Button>
            </EmptyContent>
          </Empty>
        </ComponentPreview>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code={INSTALL_CODE} />
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={USAGE_CODE} />
      </div>

      <Separator />

      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold tracking-tight">Examples</h2>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Without media</h3>
          <ComponentPreview
            code={`<Empty>
  <EmptyHeader>
    <EmptyTitle>No results found</EmptyTitle>
    <EmptyDescription>Try adjusting your filters.</EmptyDescription>
  </EmptyHeader>
</Empty>`}
          >
            <Empty className="w-full max-w-sm">
              <EmptyHeader>
                <EmptyTitle>No results found</EmptyTitle>
                <EmptyDescription>Try adjusting your filters.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </ComponentPreview>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Anatomy</h2>
        <CodeBlock
          code={`<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon | default" />
    <EmptyTitle />
    <EmptyDescription />
  </EmptyHeader>
  <EmptyContent />
</Empty>`}
        />
      </div>
    </div>
  )
}
