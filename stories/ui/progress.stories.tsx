import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Progress } from "@/components/ui/progress"

const meta = {
  title: "UI/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: { value: { control: { type: "range", min: 0, max: 100 } } },
  args: { value: 60 },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Progress {...args} className="w-72" />,
}

export const Steps: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <Progress value={0} />
      <Progress value={33} />
      <Progress value={66} />
      <Progress value={100} />
    </div>
  ),
}
