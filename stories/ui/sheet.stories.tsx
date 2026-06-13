import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "UI/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { },
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

const Demo = (side: "top" | "right" | "bottom" | "left") => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open {side}</Button>
    </SheetTrigger>
    <SheetContent side={side}>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>Make changes to your profile here.</SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-2 px-4">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </div>
      <SheetFooter>
        <Button type="submit">Save changes</Button>
        <SheetClose asChild>
          <Button variant="outline">Close</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
)

export const Right: Story = { render: () => Demo("right") }
export const Left: Story = { render: () => Demo("left") }
export const Bottom: Story = { render: () => Demo("bottom") }
