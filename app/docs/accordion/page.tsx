import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

const INSTALL_CODE = `npx shadcn@latest add accordion`

const USAGE_CODE = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`

const MULTIPLE_CODE = `<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content for section 1.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content for section 2.</AccordionContent>
  </AccordionItem>
</Accordion>`

export default function AccordionPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Component</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Accordion</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A vertically stacked set of interactive headings that each reveal a section of content.
        </p>
      </div>

      <Separator />

      {/* Preview */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview
          code={USAGE_CODE}
          className="items-start"
        >
          <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </div>

      <Separator />

      {/* Installation */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code={INSTALL_CODE} />
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

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Single (collapsible)</h3>
          <p className="text-sm text-muted-foreground">
            Only one item can be open at a time. The open item can be closed by clicking it again.
          </p>
          <ComponentPreview
            code={`<Accordion type="single" collapsible>
  ...
</Accordion>`}
            className="items-start"
          >
            <Accordion type="single" collapsible className="w-full max-w-md">
              <AccordionItem value="q1">
                <AccordionTrigger>Product Information</AccordionTrigger>
                <AccordionContent>
                  Our flagship product combines cutting-edge technology with sleek design.
                  Built with premium materials, it offers unparalleled performance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Shipping Details</AccordionTrigger>
                <AccordionContent>
                  We offer worldwide shipping. Standard delivery takes 3–5 business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Return Policy</AccordionTrigger>
                <AccordionContent>
                  30-day return policy. Hassle-free with free return shipping.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Multiple</h3>
          <p className="text-sm text-muted-foreground">
            Multiple items can be open at the same time.
          </p>
          <ComponentPreview code={MULTIPLE_CODE} className="items-start">
            <Accordion type="multiple" className="w-full max-w-md">
              <AccordionItem value="s1">
                <AccordionTrigger>Section 1</AccordionTrigger>
                <AccordionContent>Content for section 1.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="s2">
                <AccordionTrigger>Section 2</AccordionTrigger>
                <AccordionContent>Content for section 2.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="s3">
                <AccordionTrigger>Section 3</AccordionTrigger>
                <AccordionContent>Content for section 3.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </ComponentPreview>
        </div>
      </div>

      {/* Props */}
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Prop</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Type</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { prop: "type", type: '"single" | "multiple"', def: '"single"' },
                { prop: "collapsible", type: "boolean", def: "false" },
                { prop: "defaultValue", type: "string | string[]", def: "—" },
                { prop: "value", type: "string | string[]", def: "—" },
                { prop: "onValueChange", type: "(value) => void", def: "—" },
              ].map((row) => (
                <tr key={row.prop}>
                  <td className="px-4 py-2.5 font-mono text-xs text-foreground">{row.prop}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{row.type}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{row.def}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
