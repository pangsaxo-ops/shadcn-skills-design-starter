import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { MailIcon, Loader2Icon, PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
    },
    size: { control: "select", options: ["default", "sm", "lg", "icon"] },
    disabled: { control: "boolean" },
  },
  args: { children: "Button", variant: "default", size: "default" },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Secondary: Story = { args: { variant: "secondary" } }
export const Destructive: Story = { args: { variant: "destructive" } }
export const Outline: Story = { args: { variant: "outline" } }
export const Ghost: Story = { args: { variant: "ghost" } }
export const Link: Story = { args: { variant: "link" } }

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <MailIcon data-icon="inline-start" />
        Login with Email
      </>
    ),
  },
}

export const Icon: Story = {
  args: { size: "icon", children: <PlusIcon /> },
}

export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Loader2Icon data-icon="inline-start" className="animate-spin" />
        Please wait
      </>
    ),
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="default">Default</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}
