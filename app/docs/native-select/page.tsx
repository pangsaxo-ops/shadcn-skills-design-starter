import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from "@/components/ui/native-select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

const INSTALL_CODE = `npx shadcn@latest add native-select`

const USAGE_CODE = `import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"

export function NativeSelectDemo() {
  return (
    <NativeSelect defaultValue="next">
      <NativeSelectOption value="next">Next.js</NativeSelectOption>
      <NativeSelectOption value="remix">Remix</NativeSelectOption>
      <NativeSelectOption value="astro">Astro</NativeSelectOption>
    </NativeSelect>
  )
}`

export default function NativeSelectPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Native Select</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A styled wrapper around the native <code className="font-mono text-base">{"<select>"}</code>{" "}
          element — ideal for simple, accessible, platform-native dropdowns.
        </p>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={USAGE_CODE}>
          <NativeSelect defaultValue="next">
            <NativeSelectOption value="next">Next.js</NativeSelectOption>
            <NativeSelectOption value="remix">Remix</NativeSelectOption>
            <NativeSelectOption value="astro">Astro</NativeSelectOption>
          </NativeSelect>
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
          <h3 className="text-base font-semibold">Option groups</h3>
          <ComponentPreview
            code={`<NativeSelect>
  <NativeSelectOptGroup label="Frontend">
    <NativeSelectOption value="next">Next.js</NativeSelectOption>
    <NativeSelectOption value="remix">Remix</NativeSelectOption>
  </NativeSelectOptGroup>
  <NativeSelectOptGroup label="Backend">
    <NativeSelectOption value="nest">NestJS</NativeSelectOption>
  </NativeSelectOptGroup>
</NativeSelect>`}
          >
            <NativeSelect>
              <NativeSelectOptGroup label="Frontend">
                <NativeSelectOption value="next">Next.js</NativeSelectOption>
                <NativeSelectOption value="remix">Remix</NativeSelectOption>
              </NativeSelectOptGroup>
              <NativeSelectOptGroup label="Backend">
                <NativeSelectOption value="nest">NestJS</NativeSelectOption>
              </NativeSelectOptGroup>
            </NativeSelect>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Sizes</h3>
          <ComponentPreview
            code={`<NativeSelect size="sm">…</NativeSelect>
<NativeSelect size="default">…</NativeSelect>`}
          >
            <div className="flex items-center gap-4">
              <NativeSelect size="sm">
                <NativeSelectOption value="sm">Small</NativeSelectOption>
              </NativeSelect>
              <NativeSelect size="default">
                <NativeSelectOption value="default">Default</NativeSelectOption>
              </NativeSelect>
            </div>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Disabled</h3>
          <ComponentPreview
            code={`<NativeSelect disabled>
  <NativeSelectOption>Unavailable</NativeSelectOption>
</NativeSelect>`}
          >
            <NativeSelect disabled>
              <NativeSelectOption>Unavailable</NativeSelectOption>
            </NativeSelect>
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
                { prop: "size", type: '"sm" | "default"', def: '"default"' },
                { prop: "...props", type: "React.ComponentProps<\"select\">", def: "—" },
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
