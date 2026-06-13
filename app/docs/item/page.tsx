import {
  Item,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemSeparator,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { ChevronRight, Bell, CreditCard } from "lucide-react"

const INSTALL_CODE = `npx shadcn@latest add item`

const USAGE_CODE = `import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "@/components/ui/item"
import { Bell } from "lucide-react"

export function ItemDemo() {
  return (
    <Item variant="outline">
      <ItemMedia variant="icon">
        <Bell />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Notifications</ItemTitle>
        <ItemDescription>Manage how you receive alerts.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon">
          <ChevronRight />
        </Button>
      </ItemActions>
    </Item>
  )
}`

export default function ItemPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Item</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A flexible row primitive for list rows, settings, and selectable entries — with
          media, content, and actions slots.
        </p>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={USAGE_CODE}>
          <Item variant="outline" className="w-full max-w-md">
            <ItemMedia variant="icon">
              <Bell />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Notifications</ItemTitle>
              <ItemDescription>Manage how you receive alerts.</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="icon">
                <ChevronRight />
              </Button>
            </ItemActions>
          </Item>
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
          <h3 className="text-base font-semibold">Variants</h3>
          <ComponentPreview
            code={`<Item variant="default">…</Item>
<Item variant="outline">…</Item>
<Item variant="muted">…</Item>`}
          >
            <div className="flex w-full max-w-md flex-col gap-3">
              <Item variant="default">
                <ItemContent>
                  <ItemTitle>Default</ItemTitle>
                </ItemContent>
              </Item>
              <Item variant="outline">
                <ItemContent>
                  <ItemTitle>Outline</ItemTitle>
                </ItemContent>
              </Item>
              <Item variant="muted">
                <ItemContent>
                  <ItemTitle>Muted</ItemTitle>
                </ItemContent>
              </Item>
            </div>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Grouped</h3>
          <ComponentPreview
            code={`<ItemGroup>
  <Item>…</Item>
  <ItemSeparator />
  <Item>…</Item>
</ItemGroup>`}
          >
            <ItemGroup className="w-full max-w-md rounded-lg border">
              <Item>
                <ItemMedia variant="icon">
                  <Bell />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Notifications</ItemTitle>
                </ItemContent>
              </Item>
              <ItemSeparator />
              <Item>
                <ItemMedia variant="icon">
                  <CreditCard />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Billing</ItemTitle>
                </ItemContent>
              </Item>
            </ItemGroup>
          </ComponentPreview>
        </div>
      </div>

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
                { prop: "variant", type: '"default" | "outline" | "muted"', def: '"default"' },
                { prop: "size", type: '"default" | "sm"', def: '"default"' },
                { prop: "asChild", type: "boolean", def: "false" },
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
