import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { BadgeCheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const meta = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "destructive"],
    },
  },
  args: { children: "Badge", variant: "default" },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Secondary: Story = { args: { variant: "secondary" } }
export const Outline: Story = { args: { variant: "outline" } }
export const Destructive: Story = { args: { variant: "destructive" } }

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <BadgeCheckIcon data-icon="inline-start" />
        Verified
      </>
    ),
  },
}

export const Number: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge className="h-5 min-w-5 rounded-full px-1 tabular-nums">8</Badge>
      <Badge variant="secondary" className="h-5 min-w-5 rounded-full px-1 tabular-nums">24</Badge>
      <Badge variant="destructive" className="h-5 min-w-5 rounded-full px-1 tabular-nums">99</Badge>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
}
