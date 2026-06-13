"use client"

import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import {
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Bold, Italic, Underline,
  ChevronLeft, ChevronRight,
  LayoutGrid, List, Table2,
} from "lucide-react"

const INSTALL_CODE = `# ButtonGroup is a project component — copy from components/ui/button-group.tsx`

const USAGE_CODE = `import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"

<ButtonGroup>
  <Button variant="outline">One</Button>
  <Button variant="outline">Two</Button>
  <Button variant="outline">Three</Button>
</ButtonGroup>`

export default function ButtonGroupPage() {
  return (
    <div className="flex flex-col gap-10">

      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Component</Badge>
          <Badge variant="outline" className="text-xs">Custom</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Button Group</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Groups multiple buttons into a single attached control.
          Built on top of <code className="text-sm">Button</code> — collapses borders and
          applies outer-only rounded corners automatically.
        </p>
      </div>

      <Separator />

      {/* Preview */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={USAGE_CODE}>
          <ButtonGroup>
            <Button variant="outline">One</Button>
            <Button variant="outline">Two</Button>
            <Button variant="outline">Three</Button>
          </ButtonGroup>
        </ComponentPreview>
      </div>

      <Separator />

      {/* Usage */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={USAGE_CODE} />
      </div>

      <Separator />

      {/* Examples */}
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold tracking-tight">Examples</h2>

        {/* Default variant */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Default variant</h3>
          <ComponentPreview code={`<ButtonGroup>
  <Button>Save</Button>
  <Button>Preview</Button>
  <Button>Publish</Button>
</ButtonGroup>`}>
            <ButtonGroup>
              <Button>Save</Button>
              <Button>Preview</Button>
              <Button>Publish</Button>
            </ButtonGroup>
          </ComponentPreview>
        </div>

        {/* Outline variant */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Outline variant</h3>
          <ComponentPreview code={`<ButtonGroup>
  <Button variant="outline">Left</Button>
  <Button variant="outline">Center</Button>
  <Button variant="outline">Right</Button>
</ButtonGroup>`}>
            <ButtonGroup>
              <Button variant="outline">Left</Button>
              <Button variant="outline">Center</Button>
              <Button variant="outline">Right</Button>
            </ButtonGroup>
          </ComponentPreview>
        </div>

        {/* Icon buttons */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Icon buttons</h3>
          <ComponentPreview code={`<ButtonGroup>
  <Button variant="outline" size="icon"><AlignLeft /></Button>
  <Button variant="outline" size="icon"><AlignCenter /></Button>
  <Button variant="outline" size="icon"><AlignRight /></Button>
  <Button variant="outline" size="icon"><AlignJustify /></Button>
</ButtonGroup>`}>
            <ButtonGroup>
              <Button variant="outline" size="icon"><AlignLeft className="size-4" /></Button>
              <Button variant="outline" size="icon"><AlignCenter className="size-4" /></Button>
              <Button variant="outline" size="icon"><AlignRight className="size-4" /></Button>
              <Button variant="outline" size="icon"><AlignJustify className="size-4" /></Button>
            </ButtonGroup>
          </ComponentPreview>
        </div>

        {/* Mixed — one active */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">With active state</h3>
          <p className="text-sm text-muted-foreground">
            Use <code className="text-xs">variant="default"</code> for the active button
            and <code className="text-xs">variant="outline"</code> for the rest.
          </p>
          <ComponentPreview code={`<ButtonGroup>
  <Button variant="outline" size="icon"><Bold /></Button>
  <Button variant="default" size="icon"><Italic /></Button>
  <Button variant="outline" size="icon"><Underline /></Button>
</ButtonGroup>`}>
            <div className="flex flex-wrap gap-6">
              <ButtonGroup>
                <Button variant="outline" size="icon"><Bold className="size-4" /></Button>
                <Button variant="default" size="icon"><Italic className="size-4" /></Button>
                <Button variant="outline" size="icon"><Underline className="size-4" /></Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button variant="outline" size="icon"><LayoutGrid className="size-4" /></Button>
                <Button variant="default" size="icon"><List className="size-4" /></Button>
                <Button variant="outline" size="icon"><Table2 className="size-4" /></Button>
              </ButtonGroup>
            </div>
          </ComponentPreview>
        </div>

        {/* Sizes */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Sizes</h3>
          <ComponentPreview code={`<ButtonGroup>
  <Button variant="outline" size="sm">Small</Button>
  <Button variant="outline" size="sm">Group</Button>
</ButtonGroup>

<ButtonGroup>
  <Button variant="outline">Default</Button>
  <Button variant="outline">Group</Button>
</ButtonGroup>

<ButtonGroup>
  <Button variant="outline" size="lg">Large</Button>
  <Button variant="outline" size="lg">Group</Button>
</ButtonGroup>`}>
            <div className="flex flex-wrap items-center gap-4">
              <ButtonGroup>
                <Button variant="outline" size="sm">Small</Button>
                <Button variant="outline" size="sm">Group</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button variant="outline">Default</Button>
                <Button variant="outline">Group</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button variant="outline" size="lg">Large</Button>
                <Button variant="outline" size="lg">Group</Button>
              </ButtonGroup>
            </div>
          </ComponentPreview>
        </div>

        {/* Vertical */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Vertical</h3>
          <ComponentPreview code={`<ButtonGroup orientation="vertical">
  <Button variant="outline">Top</Button>
  <Button variant="outline">Middle</Button>
  <Button variant="outline">Bottom</Button>
</ButtonGroup>`}>
            <div className="flex flex-wrap items-start gap-6">
              <ButtonGroup orientation="vertical">
                <Button variant="outline">Top</Button>
                <Button variant="outline">Middle</Button>
                <Button variant="outline">Bottom</Button>
              </ButtonGroup>
              <ButtonGroup orientation="vertical">
                <Button variant="outline" size="icon"><ChevronLeft className="size-4 -rotate-90" /></Button>
                <Button variant="outline" size="icon"><ChevronLeft className="size-4 rotate-90" /></Button>
              </ButtonGroup>
            </div>
          </ComponentPreview>
        </div>

        {/* Separated */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Separated</h3>
          <p className="text-sm text-muted-foreground">
            Pass <code className="text-xs">separated</code> for a gap between buttons
            instead of shared borders.
          </p>
          <ComponentPreview code={`<ButtonGroup separated>
  <Button variant="outline">
    <ChevronLeft /> Prev
  </Button>
  <Button variant="outline">
    Next <ChevronRight />
  </Button>
</ButtonGroup>`}>
            <ButtonGroup separated>
              <Button variant="outline"><ChevronLeft className="size-4" /> Prev</Button>
              <Button variant="outline">Next <ChevronRight className="size-4" /></Button>
            </ButtonGroup>
          </ComponentPreview>
        </div>

        {/* With text + icon */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">With icon + text</h3>
          <ComponentPreview code={`<ButtonGroup>
  <Button variant="outline">
    <ChevronLeft /> Previous
  </Button>
  <Button variant="outline">
    Next <ChevronRight />
  </Button>
</ButtonGroup>`}>
            <ButtonGroup>
              <Button variant="outline"><ChevronLeft className="size-4" /> Previous</Button>
              <Button variant="outline">Next <ChevronRight className="size-4" /></Button>
            </ButtonGroup>
          </ComponentPreview>
        </div>

        {/* Disabled */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Disabled</h3>
          <ComponentPreview code={`<ButtonGroup>
  <Button variant="outline">Active</Button>
  <Button variant="outline" disabled>Disabled</Button>
  <Button variant="outline">Active</Button>
</ButtonGroup>`}>
            <ButtonGroup>
              <Button variant="outline">Active</Button>
              <Button variant="outline" disabled>Disabled</Button>
              <Button variant="outline">Active</Button>
            </ButtonGroup>
          </ComponentPreview>
        </div>
      </div>

      <Separator />

      {/* Props */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Prop</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Type</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Default</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { prop: "orientation", type: '"horizontal" | "vertical"', def: '"horizontal"', desc: "Layout direction of the group" },
                { prop: "separated",   type: "boolean",                   def: "false",         desc: "Gap between buttons instead of shared borders" },
                { prop: "className",   type: "string",                    def: "—",             desc: "Additional CSS classes" },
                { prop: "children",    type: "ReactNode",                 def: "—",             desc: "Button elements" },
              ].map((row) => (
                <tr key={row.prop}>
                  <td className="px-4 py-2.5 font-mono text-xs text-foreground">{row.prop}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{row.type}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{row.def}</td>
                  <td className="px-4 py-2.5 text-xs text-muted-foreground">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground">
          All other props are forwarded to the underlying <code>div</code> element.
        </p>
      </div>

    </div>
  )
}
