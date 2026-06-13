import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Slider } from "@/components/ui/slider"

const meta = {
  title: "UI/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Slider defaultValue={[50]} max={100} step={1} className="w-72" />,
}

export const Range: Story = {
  render: () => <Slider defaultValue={[25, 75]} max={100} step={1} className="w-72" />,
}

export const Disabled: Story = {
  render: () => <Slider defaultValue={[40]} max={100} step={1} disabled className="w-72" />,
}
