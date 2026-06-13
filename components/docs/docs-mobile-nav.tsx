"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarNav } from "@/components/docs/sidebar-nav"

export function DocsMobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  // close the sheet whenever the route changes
  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-8 md:hidden"
          aria-label="Open navigation"
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="border-b border-border px-4 py-3">
          <SheetTitle className="text-sm">Documentation</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100svh-3.25rem)] px-3 py-4">
          <SidebarNav />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
