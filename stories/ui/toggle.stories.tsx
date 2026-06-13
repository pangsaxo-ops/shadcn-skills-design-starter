import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { BoldIcon, ItalicIcon } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

const meta = {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "outline"] },
    size: { control: "select", options: ["default", "sm", "lg"] },
    disabled: { control: "boolean" },
  },
  args: { variant: "default", size: "default" },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { "aria-label": "Toggle bold", children: <BoldIcon className="size-4" /> },
}

export const Outline: Story = {
  args: { variant: "outline", "aria-label": "Toggle italic", children: <ItalicIcon className="size-4" /> },
}

export const WithText: Story = {
  args: {
    "aria-label": "Toggle italic",
    children: (
      <>
        <ItalicIcon className="size-4" />
        Italic
      </>
    ),
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Toggle size="sm" aria-label="Small"><BoldIcon className="size-4" /></Toggle>
      <Toggle size="default" aria-label="Default"><BoldIcon className="size-4" /></Toggle>
      <Toggle size="lg" aria-label="Large"><BoldIcon className="size-4" /></Toggle>
    </div>
  ),
}
