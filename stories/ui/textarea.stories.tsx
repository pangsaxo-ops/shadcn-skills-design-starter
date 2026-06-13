import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: { placeholder: "Type your message here." },
  argTypes: { disabled: { control: "boolean" } },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { render: (args) => <Textarea {...args} className="w-80" /> }
export const Disabled: Story = { ...Default, args: { disabled: true } }

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex w-80 flex-col gap-2">
      <Label htmlFor="msg">Your message</Label>
      <Textarea id="msg" {...args} />
    </div>
  ),
}
