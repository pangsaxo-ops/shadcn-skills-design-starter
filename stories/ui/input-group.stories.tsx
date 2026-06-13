import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { SearchIcon, MailIcon } from "lucide-react"

const meta = {
  title: "UI/Input Group",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Search: Story = {
  render: () => (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon>
        <SearchIcon className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  ),
}

export const Prefix: Story = {
  render: () => (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
  ),
}

export const InlineButton: Story = {
  render: () => (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon>
        <MailIcon className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="you@example.com" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>Subscribe</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}
