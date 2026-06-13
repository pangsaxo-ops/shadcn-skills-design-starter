"use client"

import { useState } from "react"
import { format, addDays } from "date-fns"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"

// ── Demo helpers ────────────────────────────────────────────────────────────

function SingleDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border border-border"
    />
  )
}

function MultipleDemo() {
  const [dates, setDates] = useState<Date[] | undefined>([new Date()])
  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={setDates}
      className="rounded-md border border-border"
    />
  )
}

function RangeDemo() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 6),
  })
  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      className="rounded-md border border-border"
    />
  )
}

function DatePickerDemo() {
  const [date, setDate] = useState<Date>()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("w-64 justify-start text-left font-normal", !date && "text-muted-foreground")}
        >
          <CalendarIcon className="size-4" />
          {date ? format(date, "PPP") : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  )
}

function DateRangePickerDemo({ className }: { className?: string }) {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 6),
  })
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn("w-72 justify-start text-left font-normal", !range && "text-muted-foreground")}
          >
            <CalendarIcon className="size-4" />
            {range?.from ? (
              range.to ? (
                <>{format(range.from, "LLL dd, y")} – {format(range.to, "LLL dd, y")}</>
              ) : format(range.from, "LLL dd, y")
            ) : "Pick a date range"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={range?.from}
            selected={range}
            onSelect={setRange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

const PRESETS = [
  { label: "Today",       value: 0 },
  { label: "Tomorrow",    value: 1 },
  { label: "In 3 days",   value: 3 },
  { label: "In a week",   value: 7 },
  { label: "In 2 weeks",  value: 14 },
  { label: "In a month",  value: 30 },
]

function DatePickerWithPresetsDemo() {
  const [date, setDate] = useState<Date>()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("w-64 justify-start text-left font-normal", !date && "text-muted-foreground")}
        >
          <CalendarIcon className="size-4" />
          {date ? format(date, "PPP") : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col gap-2 p-2" align="start">
        <Select
          onValueChange={(v) => setDate(addDays(new Date(), parseInt(v)))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select preset" />
          </SelectTrigger>
          <SelectContent position="popper">
            {PRESETS.map((p) => (
              <SelectItem key={p.value} value={String(p.value)}>
                {p.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="rounded-md border border-border">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
  )
}

function DisabledDatesDemo() {
  const [date, setDate] = useState<Date>()
  const today = new Date()
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={[
        { before: today },
        { dayOfWeek: [0, 6] },
      ]}
      className="rounded-md border border-border"
    />
  )
}

function MultipleMonthsDemo() {
  const [date, setDate] = useState<Date>()
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      numberOfMonths={2}
      className="rounded-md border border-border"
    />
  )
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function CalendarPage() {
  return (
    <div className="flex flex-col gap-10">

      {/* Header */}
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Calendar</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A date picker component built on top of{" "}
          <code className="text-sm">react-day-picker</code>.
          Supports single, multiple, and range selection.
        </p>
      </div>

      <Separator />

      {/* Installation */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add calendar" />
      </div>

      <Separator />

      {/* Single */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Single</h2>
        <p className="text-sm text-muted-foreground">Select one date.</p>
        <ComponentPreview code={`"use client"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}`}>
          <SingleDemo />
        </ComponentPreview>
      </div>

      <Separator />

      {/* Multiple */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Multiple</h2>
        <p className="text-sm text-muted-foreground">Select multiple individual dates.</p>
        <ComponentPreview code={`const [dates, setDates] = useState<Date[] | undefined>([new Date()])

<Calendar
  mode="multiple"
  selected={dates}
  onSelect={setDates}
  className="rounded-md border"
/>`}>
          <MultipleDemo />
        </ComponentPreview>
      </div>

      <Separator />

      {/* Range */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Range</h2>
        <p className="text-sm text-muted-foreground">
          Select a continuous date range. Pass{" "}
          <code className="text-xs">numberOfMonths={"{2}"}</code> to show two months side-by-side.
        </p>
        <ComponentPreview code={`import type { DateRange } from "react-day-picker"

const [range, setRange] = useState<DateRange | undefined>({
  from: new Date(),
  to: addDays(new Date(), 6),
})

<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
  numberOfMonths={2}
  className="rounded-md border"
/>`}>
          <RangeDemo />
        </ComponentPreview>
      </div>

      <Separator />

      {/* Date Picker */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Date Picker</h2>
        <p className="text-sm text-muted-foreground">
          Calendar inside a <code className="text-xs">Popover</code> triggered by a button.
          Uses <code className="text-xs">date-fns</code> for formatting.
        </p>
        <ComponentPreview code={`"use client"
import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export function DatePickerDemo() {
  const [date, setDate] = useState<Date>()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-64 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="size-4" />
          {date ? format(date, "PPP") : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  )
}`}>
          <DatePickerDemo />
        </ComponentPreview>
      </div>

      <Separator />

      {/* Date Range Picker */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Date Range Picker</h2>
        <p className="text-sm text-muted-foreground">
          Range selection in a popover — shows start and end formatted in the trigger button.
        </p>
        <ComponentPreview code={`import type { DateRange } from "react-day-picker"

const [range, setRange] = useState<DateRange | undefined>({
  from: new Date(),
  to: addDays(new Date(), 6),
})

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" className="w-72 justify-start text-left font-normal">
      <CalendarIcon className="size-4" />
      {range?.from ? (
        range.to
          ? <>{format(range.from, "LLL dd, y")} – {format(range.to, "LLL dd, y")}</>
          : format(range.from, "LLL dd, y")
      ) : "Pick a date range"}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0" align="start">
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
    />
  </PopoverContent>
</Popover>`}>
          <DateRangePickerDemo />
        </ComponentPreview>
      </div>

      <Separator />

      {/* Date Picker with Presets */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">With Presets</h2>
        <p className="text-sm text-muted-foreground">
          Quick-select presets via a <code className="text-xs">Select</code> dropdown above the calendar.
        </p>
        <ComponentPreview code={`const PRESETS = [
  { label: "Today",      value: 0 },
  { label: "Tomorrow",   value: 1 },
  { label: "In 3 days",  value: 3 },
  { label: "In a week",  value: 7 },
]

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" className="w-64 justify-start text-left font-normal">
      <CalendarIcon className="size-4" />
      {date ? format(date, "PPP") : "Pick a date"}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="flex w-auto flex-col gap-2 p-2">
    <Select onValueChange={(v) => setDate(addDays(new Date(), parseInt(v)))}>
      <SelectTrigger><SelectValue placeholder="Select preset" /></SelectTrigger>
      <SelectContent position="popper">
        {PRESETS.map((p) => (
          <SelectItem key={p.value} value={String(p.value)}>{p.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
    <div className="rounded-md border">
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </div>
  </PopoverContent>
</Popover>`}>
          <DatePickerWithPresetsDemo />
        </ComponentPreview>
      </div>

      <Separator />

      {/* Disabled dates */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Disabled Dates</h2>
        <p className="text-sm text-muted-foreground">
          Pass a <code className="text-xs">disabled</code> matcher array —
          supports dates, ranges, day-of-week, and custom functions.
        </p>
        <ComponentPreview code={`<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={[
    { before: new Date() },   // no past dates
    { dayOfWeek: [0, 6] },    // no weekends
  ]}
  className="rounded-md border"
/>`}>
          <DisabledDatesDemo />
        </ComponentPreview>
      </div>

      <Separator />

      {/* Multiple months */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Multiple Months</h2>
        <p className="text-sm text-muted-foreground">
          Show more than one month with <code className="text-xs">numberOfMonths</code>.
        </p>
        <ComponentPreview code={`<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  numberOfMonths={2}
  className="rounded-md border"
/>`}>
          <MultipleMonthsDemo />
        </ComponentPreview>
      </div>

      <Separator />

      {/* Props */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Prop</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Type</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { prop: "mode",             type: '"single" | "multiple" | "range"',  def: '"single"' },
                { prop: "selected",         type: "Date | Date[] | DateRange",         def: "—" },
                { prop: "onSelect",         type: "(value) => void",                   def: "—" },
                { prop: "numberOfMonths",   type: "number",                            def: "1" },
                { prop: "disabled",         type: "Matcher | Matcher[]",               def: "—" },
                { prop: "showOutsideDays",  type: "boolean",                           def: "true" },
                { prop: "captionLayout",    type: '"label" | "dropdown"',              def: '"label"' },
                { prop: "defaultMonth",     type: "Date",                              def: "today" },
                { prop: "fromDate",         type: "Date",                              def: "—" },
                { prop: "toDate",           type: "Date",                              def: "—" },
              ].map((row) => (
                <tr key={row.prop}>
                  <td className="px-4 py-2.5 font-mono text-xs text-foreground">{row.prop}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{row.type}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{row.def}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
