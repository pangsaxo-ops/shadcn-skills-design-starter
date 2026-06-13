import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/Hover Card",
  component: HoverCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">The React Framework – created and maintained by Vercel.</p>
          <span className="text-xs text-muted-foreground">Joined December 2021</span>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
