import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronsUpDownIcon } from "lucide-react"

const meta = {
  title: "UI/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Collapsible className="flex w-72 flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold">@peduarte starred 3 repositories</span>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <ChevronsUpDownIcon className="size-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 text-sm font-mono">@radix-ui/primitives</div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 text-sm font-mono">@radix-ui/colors</div>
        <div className="rounded-md border px-4 py-2 text-sm font-mono">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  ),
}
