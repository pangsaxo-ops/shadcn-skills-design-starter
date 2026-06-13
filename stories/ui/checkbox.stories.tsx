import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" {...args} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const Checked: Story = { ...Default, args: { defaultChecked: true } }
export const Disabled: Story = { ...Default, args: { disabled: true } }

export const Card: Story = {
  render: () => (
    <Label
      htmlFor="card"
      className="flex max-w-sm items-start gap-3 rounded-lg border border-border p-3 has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/5"
    >
      <Checkbox id="card" defaultChecked className="mt-0.5" />
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium leading-none">Enable notifications</span>
        <span className="text-sm text-muted-foreground">
          You can enable or disable notifications at any time.
        </span>
      </div>
    </Label>
  ),
}
