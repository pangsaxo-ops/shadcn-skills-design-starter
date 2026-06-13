import { SidebarNav } from "@/components/docs/sidebar-nav"
import { ThemeSwitcher } from "@/components/docs/theme-switcher"
import { DocsMobileNav } from "@/components/docs/docs-mobile-nav"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-svh flex flex-col">
      {/* Top nav */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center gap-3 px-4 md:px-6">
          <DocsMobileNav />
          <Link href="/docs" className="flex items-center gap-2">
            <div className="size-6 rounded-md bg-foreground flex items-center justify-center">
              <span className="text-background text-xs font-bold leading-none">S</span>
            </div>
            <span className="font-semibold text-sm">shadcn/ui</span>
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <span className="text-sm text-muted-foreground">Docs</span>
          <div className="ml-auto flex items-center gap-1">
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:flex w-60 shrink-0 border-r border-border">
          <ScrollArea className="w-full py-6 px-3">
            <SidebarNav />
          </ScrollArea>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <ScrollArea className="h-[calc(100svh-3.5rem)]">
            <div className="max-w-3xl mx-auto px-6 py-10">
              {children}
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  )
}
