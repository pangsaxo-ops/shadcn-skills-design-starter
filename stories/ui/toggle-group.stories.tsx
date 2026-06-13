import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
} from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const meta: Meta<typeof ToggleGroup> = {
  title: "UI/Toggle Group",
  component: ToggleGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof ToggleGroup>

export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Bold"><BoldIcon className="size-4" /></ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon className="size-4" /></ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline"><UnderlineIcon className="size-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Single: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Left"><AlignLeftIcon className="size-4" /></ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center"><AlignCenterIcon className="size-4" /></ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right"><AlignRightIcon className="size-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Outline: Story = {
  render: () => (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Bold"><BoldIcon className="size-4" /></ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon className="size-4" /></ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline"><UnderlineIcon className="size-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),
}
