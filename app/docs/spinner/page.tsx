import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

const INSTALL_CODE = `npx shadcn@latest add spinner`

const USAGE_CODE = `import { Spinner } from "@/components/ui/spinner"

export function SpinnerDemo() {
  return <Spinner />
}`

export default function SpinnerPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Spinner</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          An animated indicator that communicates an ongoing, indeterminate process.
        </p>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={USAGE_CODE}>
          <Spinner />
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
          <h3 className="text-base font-semibold">Sizes</h3>
          <ComponentPreview
            code={`<Spinner className="size-4" />
<Spinner className="size-6" />
<Spinner className="size-8" />`}
          >
            <div className="flex items-center gap-6">
              <Spinner className="size-4" />
              <Spinner className="size-6" />
              <Spinner className="size-8" />
            </div>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Color</h3>
          <ComponentPreview
            code={`<Spinner className="text-primary" />
<Spinner className="text-muted-foreground" />
<Spinner className="text-destructive" />`}
          >
            <div className="flex items-center gap-6">
              <Spinner className="text-primary" />
              <Spinner className="text-muted-foreground" />
              <Spinner className="text-destructive" />
            </div>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Inside a button</h3>
          <ComponentPreview
            code={`<Button disabled>
  <Spinner />
  Please wait
</Button>`}
          >
            <Button disabled>
              <Spinner />
              Please wait
            </Button>
          </ComponentPreview>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <p className="text-sm text-muted-foreground">
          Accepts all native <code className="font-mono text-xs">svg</code> props. Control
          size and color with <code className="font-mono text-xs">size-*</code> and{" "}
          <code className="font-mono text-xs">text-*</code> utilities.
        </p>
      </div>
    </div>
  )
}
