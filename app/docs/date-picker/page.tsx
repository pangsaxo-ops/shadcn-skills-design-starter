"use client"

import { useState } from "react"
import { format, addDays, addWeeks, addMonths } from "date-fns"

import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Field, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { cn } from "@/lib/utils"
import { CalendarIcon, ChevronDownIcon } from "lucide-react"

// ── Demos ─────────────────────────────────────────────────────────────────

function DateOfBirthDemo() {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date>()
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="dob" className="px-1">Date of Birth</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button id="dob" variant="outline" className="w-48 justify-between font-normal">
            {date ? format(date, "PPP") : "Select a date"}
            <ChevronDownIcon className="size-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(d) => { setDate(d); setOpen(false) }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

function PickerWithInputDemo() {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 1))
  const [value, setValue] = useState(date ? format(date, "MMMM dd, yyyy") : "")
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="sub-date" className="px-1">Subscription Date</Label>
      <div className="relative w-64">
        <Input
          id="sub-date"
          value={value}
          placeholder="June 01, 2025"
          className="pr-10"
          onChange={(e) => {
            setValue(e.target.value)
            const parsed = new Date(e.target.value)
            if (!isNaN(parsed.getTime())) setDate(parsed)
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 size-7 -translate-y-1/2"
            >
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Open calendar</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="end">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(d) => {
                setDate(d)
                if (d) setValue(format(d, "MMMM dd, yyyy"))
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

function DateTimeDemo() {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date>()
  return (
    <div className="flex items-end gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="dt-date" className="px-1">Date of birth</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button id="dt-date" variant="outline" className="w-40 justify-between font-normal">
              {date ? format(date, "PPP") : "Select a date"}
              <ChevronDownIcon className="size-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(d) => { setDate(d); setOpen(false) }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="dt-time" className="px-1">Time</Label>
        <Input
          id="dt-time"
          type="time"
          step="1"
          defaultValue="10:30:00"
          className="w-32 [&::-webkit-calendar-picker-indicator]:hidden"
        />
      </div>
    </div>
  )
}

function parseNaturalDate(input: string): Date | undefined {
  const s = input.trim().toLowerCase()
  const today = new Date()
  if (!s) return undefined
  if (s === "today") return today
  if (s === "tomorrow") return addDays(today, 1)
  if (s === "yesterday") return addDays(today, -1)
  if (s === "next week") return addWeeks(today, 1)
  if (s === "next month") return addMonths(today, 1)
  let m = s.match(/^in (\d+) days?$/)
  if (m) return addDays(today, parseInt(m[1]))
  m = s.match(/^in (\d+) weeks?$/)
  if (m) return addWeeks(today, parseInt(m[1]))
  const parsed = new Date(input)
  return isNaN(parsed.getTime()) ? undefined : parsed
}

function NaturalLanguageDemo() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("In 2 days")
  const [date, setDate] = useState<Date | undefined>(() => parseNaturalDate("In 2 days"))
  return (
    <div className="flex w-72 flex-col gap-2">
      <Label htmlFor="nl-date" className="px-1">Schedule Date</Label>
      <div className="relative">
        <Input
          id="nl-date"
          value={value}
          placeholder="Tomorrow or in 2 days"
          className="pr-10"
          onChange={(e) => {
            setValue(e.target.value)
            setDate(parseNaturalDate(e.target.value))
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 size-7 -translate-y-1/2">
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Open calendar</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="end">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(d) => {
                setDate(d)
                if (d) setValue(format(d, "PPP"))
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <p className="px-1 text-sm text-muted-foreground">
        Your post will be published on{" "}
        <span className="font-medium text-foreground">
          {date ? format(date, "PPP") : "—"}
        </span>.
      </p>
    </div>
  )
}

function FormDemo() {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date>()
  return (
    <form
      className="w-72"
      onSubmit={(e) => e.preventDefault()}
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-dob">Date of birth</FieldLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                id="form-dob"
                variant="outline"
                className={cn("justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="size-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(d) => { setDate(d); setOpen(false) }}
              />
            </PopoverContent>
          </Popover>
          <FieldDescription>Your date of birth is used to calculate your age.</FieldDescription>
        </Field>
        <Button type="submit" className="w-fit">Submit</Button>
      </FieldGroup>
    </form>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function DatePickerPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Date Picker</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A date picker component built by composing the{" "}
          <code className="text-sm">Calendar</code> and <code className="text-sm">Popover</code> components.
          Supports range and presets.
        </p>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <p className="text-sm text-muted-foreground">
          The Date Picker is composed from existing components — no separate install.
        </p>
        <CodeBlock code="npx shadcn@latest add calendar popover button" />
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Date of Birth</h2>
        <p className="text-sm text-muted-foreground">
          A button trigger with a dropdown month/year caption — ideal for picking far-back dates.
        </p>
        <ComponentPreview code={`const [open, setOpen] = useState(false)
const [date, setDate] = useState<Date>()

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button variant="outline" className="w-48 justify-between font-normal">
      {date ? format(date, "PPP") : "Select a date"}
      <ChevronDownIcon className="size-4 opacity-50" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto overflow-hidden p-0" align="start">
    <Calendar
      mode="single"
      selected={date}
      captionLayout="dropdown"
      onSelect={(d) => { setDate(d); setOpen(false) }}
    />
  </PopoverContent>
</Popover>`}>
          <DateOfBirthDemo />
        </ComponentPreview>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Picker with Input</h2>
        <p className="text-sm text-muted-foreground">
          Type a date directly or open the calendar from the trailing icon button.
        </p>
        <ComponentPreview code={`<div className="relative w-64">
  <Input value={value} placeholder="June 01, 2025" className="pr-10"
    onChange={(e) => setValue(e.target.value)} />
  <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button variant="ghost" size="icon"
        className="absolute right-1 top-1/2 size-7 -translate-y-1/2">
        <CalendarIcon className="size-3.5" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto overflow-hidden p-0" align="end">
      <Calendar mode="single" selected={date} captionLayout="dropdown"
        onSelect={(d) => { setDate(d); setValue(format(d, "MMMM dd, yyyy")); setOpen(false) }} />
    </PopoverContent>
  </Popover>
</div>`}>
          <PickerWithInputDemo />
        </ComponentPreview>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Date and Time</h2>
        <p className="text-sm text-muted-foreground">
          Pair the date picker with a native <code className="text-xs">time</code> input.
        </p>
        <ComponentPreview code={`<div className="flex items-end gap-4">
  {/* date picker */}
  <Popover>…</Popover>
  {/* time */}
  <Input type="time" step="1" defaultValue="10:30:00" className="w-32" />
</div>`}>
          <DateTimeDemo />
        </ComponentPreview>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Natural Language</h2>
        <p className="text-sm text-muted-foreground">
          Type phrases like <code className="text-xs">tomorrow</code> or{" "}
          <code className="text-xs">in 2 days</code> and resolve them to a real date.
        </p>
        <ComponentPreview code={`function parseNaturalDate(input: string): Date | undefined {
  const s = input.trim().toLowerCase()
  if (s === "today") return new Date()
  if (s === "tomorrow") return addDays(new Date(), 1)
  const m = s.match(/^in (\\d+) days?$/)
  if (m) return addDays(new Date(), parseInt(m[1]))
  const parsed = new Date(input)
  return isNaN(parsed.getTime()) ? undefined : parsed
}

<Input value={value} placeholder="Tomorrow or in 2 days"
  onChange={(e) => { setValue(e.target.value); setDate(parseNaturalDate(e.target.value)) }} />
<p>Your post will be published on {date ? format(date, "PPP") : "—"}.</p>`}>
          <NaturalLanguageDemo />
        </ComponentPreview>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Form</h2>
        <p className="text-sm text-muted-foreground">
          Inside a <code className="text-xs">Field</code> with a label and description.
        </p>
        <ComponentPreview code={`<Field>
  <FieldLabel htmlFor="dob">Date of birth</FieldLabel>
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline" className="justify-start text-left font-normal">
        <CalendarIcon className="size-4" />
        {date ? format(date, "PPP") : "Pick a date"}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
      <Calendar mode="single" selected={date} captionLayout="dropdown" onSelect={setDate} />
    </PopoverContent>
  </Popover>
  <FieldDescription>Your date of birth is used to calculate your age.</FieldDescription>
</Field>`}>
          <FormDemo />
        </ComponentPreview>
      </div>
    </div>
  )
}
