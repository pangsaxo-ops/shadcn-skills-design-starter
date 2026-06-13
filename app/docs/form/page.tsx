import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet,
} from "@/components/ui/field"

export default function FormPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Form</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Composable form primitives: <code className="text-sm">Field</code>,{" "}
          <code className="text-sm">FieldGroup</code>,{" "}
          <code className="text-sm">FieldLabel</code>,{" "}
          <code className="text-sm">FieldDescription</code> — project-level wrappers defined in{" "}
          <code className="text-sm">components/ui/field.tsx</code>.
        </p>
      </div>

      <Separator />

      {/* Basic field */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Basic field</h2>
        <ComponentPreview code={`<Field>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" placeholder="m@example.com" />
  <FieldDescription>We'll never share your email.</FieldDescription>
</Field>`}>
          <Field className="max-w-sm w-full">
            <FieldLabel htmlFor="f-email">Email</FieldLabel>
            <Input id="f-email" type="email" placeholder="m@example.com" />
            <FieldDescription>We&apos;ll never share your email.</FieldDescription>
          </Field>
        </ComponentPreview>
      </div>

      <Separator />

      {/* FieldGroup */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">FieldGroup</h2>
        <ComponentPreview code={`<FieldGroup>
  <Field>
    <FieldLabel htmlFor="fname">First name</FieldLabel>
    <Input id="fname" placeholder="John" />
  </Field>
  <Field>
    <FieldLabel htmlFor="lname">Last name</FieldLabel>
    <Input id="lname" placeholder="Doe" />
  </Field>
  <Field>
    <FieldLabel htmlFor="bio">Bio</FieldLabel>
    <Textarea id="bio" placeholder="Tell us about yourself" />
    <FieldDescription>Max 160 characters.</FieldDescription>
  </Field>
  <Button type="submit">Save profile</Button>
</FieldGroup>`}>
          <FieldGroup className="max-w-sm w-full">
            <Field>
              <FieldLabel htmlFor="fg-fname">First name</FieldLabel>
              <Input id="fg-fname" placeholder="John" />
            </Field>
            <Field>
              <FieldLabel htmlFor="fg-lname">Last name</FieldLabel>
              <Input id="fg-lname" placeholder="Doe" />
            </Field>
            <Field>
              <FieldLabel htmlFor="fg-bio">Bio</FieldLabel>
              <Textarea id="fg-bio" placeholder="Tell us about yourself" />
              <FieldDescription>Max 160 characters.</FieldDescription>
            </Field>
            <Button type="submit">Save profile</Button>
          </FieldGroup>
        </ComponentPreview>
      </div>

      <Separator />

      {/* Validation state */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Validation state</h2>
        <p className="text-sm text-muted-foreground">
          Add <code className="text-xs">data-invalid</code> on <code className="text-xs">Field</code> and{" "}
          <code className="text-xs">aria-invalid</code> on the control.
          Label and description turn destructive automatically.
        </p>
        <ComponentPreview code={`<Field data-invalid>
  <FieldLabel htmlFor="bad-email">Email</FieldLabel>
  <Input id="bad-email" type="email" aria-invalid defaultValue="not-an-email" />
  <FieldDescription>Invalid email address.</FieldDescription>
</Field>`}>
          <Field data-invalid className="max-w-sm w-full">
            <FieldLabel htmlFor="f-invalid-email">Email</FieldLabel>
            <Input id="f-invalid-email" type="email" aria-invalid defaultValue="not-an-email" />
            <FieldDescription>Invalid email address.</FieldDescription>
          </Field>
        </ComponentPreview>
      </div>

      <Separator />

      {/* Disabled state */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Disabled state</h2>
        <ComponentPreview code={`<Field data-disabled>
  <FieldLabel htmlFor="locked">Username</FieldLabel>
  <Input id="locked" disabled defaultValue="@peduarte" />
  <FieldDescription>Cannot be changed after 30 days.</FieldDescription>
</Field>`}>
          <Field data-disabled className="max-w-sm w-full">
            <FieldLabel htmlFor="f-locked">Username</FieldLabel>
            <Input id="f-locked" disabled defaultValue="@peduarte" />
            <FieldDescription>Cannot be changed after 30 days.</FieldDescription>
          </Field>
        </ComponentPreview>
      </div>

      <Separator />

      {/* FieldSet for checkbox group */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">FieldSet — checkbox / radio group</h2>
        <ComponentPreview code={`<FieldSet>
  <FieldLegend>Notifications</FieldLegend>
  <Field>
    <div className="flex items-center gap-2">
      <Checkbox id="email-notif" defaultChecked />
      <FieldLabel htmlFor="email-notif">Email</FieldLabel>
    </div>
    <FieldDescription>Receive email notifications.</FieldDescription>
  </Field>
  <Field>
    <div className="flex items-center gap-2">
      <Checkbox id="sms-notif" />
      <FieldLabel htmlFor="sms-notif">SMS</FieldLabel>
    </div>
  </Field>
</FieldSet>`}>
          <FieldSet>
            <FieldLegend>Notifications</FieldLegend>
            <Field>
              <div className="flex items-center gap-2">
                <Checkbox id="fs-email" defaultChecked />
                <FieldLabel htmlFor="fs-email">Email</FieldLabel>
              </div>
              <FieldDescription>Receive email notifications.</FieldDescription>
            </Field>
            <Field>
              <div className="flex items-center gap-2">
                <Checkbox id="fs-sms" />
                <FieldLabel htmlFor="fs-sms">SMS</FieldLabel>
              </div>
            </Field>
          </FieldSet>
        </ComponentPreview>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <p className="text-sm text-muted-foreground">
          These are project-level helpers, not from the shadcn registry.
          They live in <code className="text-xs">components/ui/field.tsx</code>.
        </p>
        <CodeBlock code={`// components/ui/field.tsx — already in this project
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldSet,
  FieldLegend,
} from "@/components/ui/field"`} />
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">API</h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Component</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Element</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Key props / data attrs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { comp: "FieldGroup", el: "div", attrs: "—" },
                { comp: "Field", el: "div", attrs: "data-invalid · data-disabled" },
                { comp: "FieldLabel", el: "label (via Label)", attrs: "htmlFor" },
                { comp: "FieldDescription", el: "p", attrs: "—" },
                { comp: "FieldSet", el: "fieldset", attrs: "—" },
                { comp: "FieldLegend", el: "legend", attrs: "—" },
              ].map((row) => (
                <tr key={row.comp}>
                  <td className="px-4 py-2.5 font-mono text-xs text-foreground">{row.comp}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{row.el}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{row.attrs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
