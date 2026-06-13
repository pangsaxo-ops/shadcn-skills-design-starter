import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"

const meta = {
  title: "UI/Native Select",
  component: NativeSelect,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NativeSelect defaultValue="next" className="w-56">
      <NativeSelectOption value="next">Next.js</NativeSelectOption>
      <NativeSelectOption value="remix">Remix</NativeSelectOption>
      <NativeSelectOption value="astro">Astro</NativeSelectOption>
    </NativeSelect>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <NativeSelect defaultValue="apple" className="w-56">
      <NativeSelectOptGroup label="Fruits">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Vegetables">
        <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}
