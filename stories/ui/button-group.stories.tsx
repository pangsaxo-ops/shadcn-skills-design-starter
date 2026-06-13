import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

const meta = {
  title: "UI/Button Group",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Years</Button>
      <Button variant="outline">Months</Button>
      <Button variant="outline">Days</Button>
    </ButtonGroup>
  ),
}

export const IconPair: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon"><ChevronLeftIcon className="size-4" /></Button>
      <Button variant="outline" size="icon"><ChevronRightIcon className="size-4" /></Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
}
