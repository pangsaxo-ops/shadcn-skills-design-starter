import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

const INSTALL_CODE = `npx shadcn@latest add kbd`

const USAGE_CODE = `import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function KbdDemo() {
  return (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  )
}`

export default function KbdPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Kbd</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Displays a keyboard key or a sequence of keys used to trigger an action.
        </p>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={USAGE_CODE}>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
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
          <h3 className="text-base font-semibold">Single keys</h3>
          <ComponentPreview
            code={`<Kbd>⌘</Kbd>
<Kbd>Shift</Kbd>
<Kbd>Esc</Kbd>`}
          >
            <div className="flex items-center gap-2">
              <Kbd>⌘</Kbd>
              <Kbd>Shift</Kbd>
              <Kbd>Esc</Kbd>
            </div>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Combinations</h3>
          <ComponentPreview
            code={`<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>⇧</Kbd>
  <Kbd>P</Kbd>
</KbdGroup>`}
          >
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>⇧</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Inline with text</h3>
          <ComponentPreview
            code={`<span className="text-sm text-muted-foreground">
  Press <KbdGroup><Kbd>⌘</Kbd><Kbd>J</Kbd></KbdGroup> to toggle.
</span>`}
          >
            <span className="text-sm text-muted-foreground inline-flex items-center gap-1.5">
              Press{" "}
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>J</Kbd>
              </KbdGroup>{" "}
              to toggle.
            </span>
          </ComponentPreview>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Anatomy</h2>
        <p className="text-sm text-muted-foreground">
          Use <code className="font-mono text-xs">Kbd</code> for a single key and wrap
          multiple keys in <code className="font-mono text-xs">KbdGroup</code> to render a
          shortcut sequence.
        </p>
      </div>
    </div>
  )
}
