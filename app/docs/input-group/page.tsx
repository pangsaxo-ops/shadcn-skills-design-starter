import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { Search, Mail } from "lucide-react"

const INSTALL_CODE = `npx shadcn@latest add input-group`

const USAGE_CODE = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Search } from "lucide-react"

export function InputGroupDemo() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  )
}`

export default function InputGroupPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Input Group</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Groups an input with addons such as icons, text, or buttons aligned to either
          edge.
        </p>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={USAGE_CODE}>
          <InputGroup className="w-full max-w-sm">
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search..." />
          </InputGroup>
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
          <h3 className="text-base font-semibold">Text addon</h3>
          <ComponentPreview
            code={`<InputGroup>
  <InputGroupAddon>
    <InputGroupText>https://</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="example.com" />
</InputGroup>`}
          >
            <InputGroup className="w-full max-w-sm">
              <InputGroupAddon>
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="example.com" />
            </InputGroup>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Button addon</h3>
          <ComponentPreview
            code={`<InputGroup>
  <InputGroupAddon>
    <Mail />
  </InputGroupAddon>
  <InputGroupInput placeholder="you@example.com" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton>Subscribe</InputGroupButton>
  </InputGroupAddon>
</InputGroup>`}
          >
            <InputGroup className="w-full max-w-sm">
              <InputGroupAddon>
                <Mail />
              </InputGroupAddon>
              <InputGroupInput placeholder="you@example.com" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton>Subscribe</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">With textarea</h3>
          <ComponentPreview
            code={`<InputGroup>
  <InputGroupTextarea placeholder="Write a message..." />
  <InputGroupAddon align="block-end">
    <InputGroupButton>Send</InputGroupButton>
  </InputGroupAddon>
</InputGroup>`}
          >
            <InputGroup className="w-full max-w-sm">
              <InputGroupTextarea placeholder="Write a message..." />
              <InputGroupAddon align="block-end">
                <InputGroupButton>Send</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </ComponentPreview>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Anatomy</h2>
        <CodeBlock
          code={`<InputGroup>
  <InputGroupAddon align="inline-start | inline-end | block-start | block-end">
    <InputGroupText /> | <InputGroupButton /> | <Icon />
  </InputGroupAddon>
  <InputGroupInput /> | <InputGroupTextarea />
</InputGroup>`}
        />
      </div>
    </div>
  )
}
