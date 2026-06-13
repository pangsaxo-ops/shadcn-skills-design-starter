import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const meta = {
  title: "UI/Field",
  component: Field,
  tags: ["autodocs"],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <FieldGroup className="w-80">
      <Field>
        <FieldLabel htmlFor="username">Username</FieldLabel>
        <Input id="username" placeholder="shadcn" />
        <FieldDescription>This is your public display name.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
}

export const Invalid: Story = {
  render: () => (
    <FieldGroup className="w-80">
      <Field data-invalid>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" aria-invalid defaultValue="not-an-email" />
        <FieldDescription>Enter a valid email address.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
}
