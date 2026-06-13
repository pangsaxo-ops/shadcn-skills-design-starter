import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowRight, Palette, Type, SquareStack } from "lucide-react"

const TOKENS = [
  {
    title: "Colors",
    description: "35 semantic tokens × 4 brand modes. Built on Tailwind and Radix palettes.",
    href: "/docs/colors",
    icon: Palette,
    meta: "35 tokens · 4 modes",
  },
  {
    title: "Typography",
    description: "Font families, size scale, and weight tokens.",
    href: "/docs/typography",
    icon: Type,
    meta: "Inter · Geist Mono",
  },
  {
    title: "Border Radius",
    description: "9-step radius scale from 2px to full.",
    href: "/docs/radius",
    icon: SquareStack,
    meta: "9 steps",
  },
]

const COMPONENTS = [
  {
    title: "Accordion",
    description: "A vertically stacked set of interactive headings that each reveal a section of content.",
    href: "/docs/accordion",
  },
  {
    title: "Button",
    description: "Displays a button or a component that looks like a button.",
    href: "/docs/button",
  },
  {
    title: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    href: "/docs/badge",
  },
  {
    title: "Tabs",
    description: "A set of layered sections of content displayed one at a time.",
    href: "/docs/tabs",
  },
]

export default function DocsPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <Badge variant="secondary" className="w-fit">Introduction</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Component Library</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A complete design system with{" "}
          <span className="text-foreground font-medium">1806 design tokens</span>,{" "}
          <span className="text-foreground font-medium">4 brand modes</span>, and{" "}
          reusable components built with{" "}
          <span className="text-foreground font-medium">shadcn/ui</span>,{" "}
          <span className="text-foreground font-medium">Tailwind CSS v4</span>, and{" "}
          <span className="text-foreground font-medium">Next.js 15</span>.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: "1806", label: "Design tokens" },
          { value: "4", label: "Brand modes" },
          { value: "35", label: "CSS variables" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border bg-muted/30 px-5 py-4 flex flex-col gap-1">
            <span className="text-2xl font-bold tracking-tight">{stat.value}</span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>

      <Separator />

      {/* Design Tokens */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Design Tokens</h2>
          <Badge variant="outline" className="text-xs">Figma-synced</Badge>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TOKENS.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-3 rounded-lg border border-border p-4 hover:border-foreground/20 hover:bg-accent/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="size-8 rounded-md bg-muted flex items-center justify-center">
                    <Icon className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <ArrowRight className="size-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-sm">{item.title}</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground">{item.meta}</span>
              </Link>
            )
          })}
        </div>
      </div>

      <Separator />

      {/* Components */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Components</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {COMPONENTS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col gap-1.5 rounded-lg border border-border p-4 hover:border-foreground/20 hover:bg-accent/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{item.title}</span>
                <ArrowRight className="size-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
