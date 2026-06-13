import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" onClick={() => toast("Event has been created.")}>Default</Button>
        <Button variant="outline" onClick={() => toast.success("Profile updated!")}>Success</Button>
        <Button variant="outline" onClick={() => toast.error("Something went wrong.")}>Error</Button>
        <Button variant="outline" onClick={() => toast.warning("Low disk space.")}>Warning</Button>
        <Button variant="outline" onClick={() => toast.info("Update available.")}>Info</Button>
      </div>
    </>
  ),
}
