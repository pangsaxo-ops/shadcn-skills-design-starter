"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { docsNav } from "@/lib/docs-config"

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-6">
      {docsNav.map((group) => (
        <div key={group.title} className="flex flex-col gap-1">
          <p className="px-3 text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
            {group.title}
          </p>
          {group.items.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors",
                  isActive
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                  item.disabled && "pointer-events-none opacity-40"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.title}
                {item.badge && (
                  <Badge
                    variant="secondary"
                    className="text-[10px] h-4 px-1.5 font-medium"
                  >
                    {item.badge}
                  </Badge>
                )}
              </Link>
            )
          })}
        </div>
      ))}
    </nav>
  )
}
