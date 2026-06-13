import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldSet,
  FieldLegend,
  FieldContent,
  FieldTitle,
  FieldSeparator,
  FieldError,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

const INSTALL_CODE = `npx shadcn@latest add field`

const USAGE_CODE = `import {
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldDemo() {
  return (
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" placeholder="you@example.com" />
      <FieldDescription>We'll never share your email.</FieldDescription>
    </Field>
  )
}`

export default function FieldPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Field</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Composable building blocks for form fields — label, control, and description
          with consistent spacing and accessible structure.
        </p>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={USAGE_CODE}>
          <Field className="w-full max-w-sm">
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" placeholder="you@example.com" />
            <FieldDescription>We&apos;ll never share your email.</FieldDescription>
          </Field>
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
          <h3 className="text-base font-semibold">Field group</h3>
          <ComponentPreview
            code={`<FieldGroup>
  <Field>
    <FieldLabel htmlFor="name">Name</FieldLabel>
    <Input id="name" placeholder="Jane Doe" />
  </Field>
  <Field>
    <FieldLabel htmlFor="bio">Bio</FieldLabel>
    <Textarea id="bio" placeholder="Tell us about yourself" />
  </Field>
</FieldGroup>`}
          >
            <FieldGroup className="w-full max-w-sm">
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" placeholder="Jane Doe" />
              </Field>
              <Field>
                <FieldLabel htmlFor="bio">Bio</FieldLabel>
                <Textarea id="bio" placeholder="Tell us about yourself" />
              </Field>
            </FieldGroup>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Fieldset with legend</h3>
          <p className="text-sm text-muted-foreground">
            Matches the Figma spec: legend at{" "}
            <code className="font-mono text-xs">text-base</code> /{" "}
            <code className="font-mono text-xs">font-medium</code> with{" "}
            <code className="font-mono text-xs">mb-3</code>, a muted description, a{" "}
            <code className="font-mono text-xs">gap-7</code> field group, and a two-column
            row for related inputs.
          </p>
          <ComponentPreview
            code={`<FieldSet>
  <div>
    <FieldLegend>Address Information</FieldLegend>
    <FieldDescription>We need your address to deliver your order.</FieldDescription>
  </div>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="street">Street Address</FieldLabel>
      <Input id="street" placeholder="123 Main St" />
    </Field>
    <div className="grid grid-cols-2 gap-4">
      <Field>
        <FieldLabel htmlFor="city">City</FieldLabel>
        <Input id="city" placeholder="New York" />
      </Field>
      <Field>
        <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
        <Input id="zip" placeholder="90502" />
      </Field>
    </div>
  </FieldGroup>
</FieldSet>`}
          >
            <FieldSet className="w-full max-w-md">
              <div>
                <FieldLegend>Address Information</FieldLegend>
                <FieldDescription>
                  We need your address to deliver your order.
                </FieldDescription>
              </div>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="street">Street Address</FieldLabel>
                  <Input id="street" placeholder="123 Main St" />
                </Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="city">City</FieldLabel>
                    <Input id="city" placeholder="New York" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
                    <Input id="zip" placeholder="90502" />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Legend variants</h3>
          <ComponentPreview
            code={`<FieldLegend variant="legend">Legend (text-base)</FieldLegend>
<FieldLegend variant="label">Label (text-sm)</FieldLegend>`}
          >
            <div className="flex w-full max-w-sm flex-col gap-6">
              <FieldSet>
                <FieldLegend variant="legend">Legend (default · 16px)</FieldLegend>
                <FieldDescription>Used as a section title for the group.</FieldDescription>
              </FieldSet>
              <FieldSet>
                <FieldLegend variant="label">Label (compact · 14px)</FieldLegend>
                <FieldDescription>Used when the group sits inline with other fields.</FieldDescription>
              </FieldSet>
            </div>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Choice rows (FieldContent + FieldTitle)</h3>
          <p className="text-sm text-muted-foreground">
            For checkbox/radio rows, place the control beside a{" "}
            <code className="font-mono text-xs">FieldContent</code> holding a{" "}
            <code className="font-mono text-xs">FieldTitle</code> and{" "}
            <code className="font-mono text-xs">FieldDescription</code>.
          </p>
          <ComponentPreview
            code={`<Field className="flex-row items-start">
  <Checkbox id="newsletter" defaultChecked className="mt-0.5" />
  <FieldContent>
    <FieldTitle>Subscribe to the newsletter</FieldTitle>
    <FieldDescription>Get product updates once a month. No spam.</FieldDescription>
  </FieldContent>
</Field>`}
          >
            <div className="w-full max-w-md">
              <Field className="flex-row items-start">
                <Checkbox id="newsletter" defaultChecked className="mt-0.5" />
                <FieldContent>
                  <FieldTitle>Subscribe to the newsletter</FieldTitle>
                  <FieldDescription>
                    Get product updates once a month. No spam.
                  </FieldDescription>
                </FieldContent>
              </Field>
            </div>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Error state</h3>
          <p className="text-sm text-muted-foreground">
            Set <code className="font-mono text-xs">data-invalid</code> on the{" "}
            <code className="font-mono text-xs">Field</code> and render a{" "}
            <code className="font-mono text-xs">FieldError</code> below the control.
          </p>
          <ComponentPreview
            code={`<Field data-invalid>
  <FieldLabel htmlFor="email-err">Email</FieldLabel>
  <Input id="email-err" defaultValue="not-an-email" aria-invalid />
  <FieldError>Enter a valid email address.</FieldError>
</Field>`}
          >
            <Field data-invalid className="w-full max-w-sm">
              <FieldLabel htmlFor="email-err">Email</FieldLabel>
              <Input id="email-err" defaultValue="not-an-email" aria-invalid />
              <FieldError>Enter a valid email address.</FieldError>
            </Field>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Separator</h3>
          <ComponentPreview
            code={`<FieldGroup>
  <Field>…</Field>
  <FieldSeparator>Or continue with</FieldSeparator>
  <Field>…</Field>
</FieldGroup>`}
          >
            <FieldGroup className="w-full max-w-sm">
              <Field>
                <FieldLabel htmlFor="sep-email">Email</FieldLabel>
                <Input id="sep-email" type="email" placeholder="you@example.com" />
              </Field>
              <FieldSeparator>Or continue with</FieldSeparator>
              <Field>
                <FieldLabel htmlFor="sep-user">Username</FieldLabel>
                <Input id="sep-user" placeholder="username" />
              </Field>
            </FieldGroup>
          </ComponentPreview>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Anatomy</h2>
        <CodeBlock
          code={`<FieldSet>
  <FieldLegend />
  <FieldDescription />
  <FieldGroup>
    <Field>
      <FieldLabel />
      {/* control: Input, Textarea, Select… */}
      <FieldDescription />
      <FieldError />
    </Field>

    <Field className="flex-row items-start">
      {/* control: Checkbox, Radio… */}
      <FieldContent>
        <FieldTitle />
        <FieldDescription />
      </FieldContent>
    </Field>

    <FieldSeparator />
  </FieldGroup>
</FieldSet>`}
        />
      </div>
    </div>
  )
}
