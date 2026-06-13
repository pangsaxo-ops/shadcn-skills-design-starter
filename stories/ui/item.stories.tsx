import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { BellIcon, ChevronRightIcon } from "lucide-react"

const meta = {
  title: "UI/Item",
  component: Item,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Item variant="outline" className="w-full max-w-md">
      <ItemMedia variant="icon">
        <BellIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Notifications</ItemTitle>
        <ItemDescription>Manage how you receive alerts.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon">
          <ChevronRightIcon className="size-4" />
        </Button>
      </ItemActions>
    </Item>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Item variant="default">
        <ItemContent><ItemTitle>Default</ItemTitle></ItemContent>
      </Item>
      <Item variant="outline">
        <ItemContent><ItemTitle>Outline</ItemTitle></ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent><ItemTitle>Muted</ItemTitle></ItemContent>
      </Item>
    </div>
  ),
}
