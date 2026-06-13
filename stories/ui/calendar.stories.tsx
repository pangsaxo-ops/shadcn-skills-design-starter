import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { useState } from "react"
import type { DateRange } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"

const meta = {
  title: "UI/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

function SingleDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
  )
}

function RangeDemo() {
  const [range, setRange] = useState<DateRange | undefined>()
  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      className="rounded-md border"
    />
  )
}

export const Single: Story = { render: () => <SingleDemo /> }
export const Range: Story = { render: () => <RangeDemo /> }
