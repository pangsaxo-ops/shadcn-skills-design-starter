"use client"

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { Home, Inbox, Calendar, Search, Settings } from "lucide-react"

const INSTALL_CODE = `npx shadcn@latest add sidebar`

const USAGE_CODE = `import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Home /> Home
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <SidebarTrigger />
      </SidebarInset>
    </SidebarProvider>
  )
}`

const items = [
  { title: "Home", icon: Home },
  { title: "Inbox", icon: Inbox },
  { title: "Calendar", icon: Calendar },
  { title: "Search", icon: Search },
  { title: "Settings", icon: Settings },
]

export default function SidebarPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Sidebar</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A composable, collapsible application sidebar with header, footer, grouped menu,
          and an inset content area.
        </p>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview
          className="p-0 overflow-hidden"
          code={USAGE_CODE}
        >
          <div className="h-[380px] w-full overflow-hidden">
            <SidebarProvider className="min-h-full h-full items-stretch">
              <Sidebar collapsible="none" className="border-r">
                <SidebarHeader>
                  <div className="flex items-center gap-2 px-2 py-1.5">
                    <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-semibold">
                      A
                    </div>
                    <span className="text-sm font-semibold">Acme Inc</span>
                  </div>
                </SidebarHeader>
                <SidebarSeparator />
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {items.map((item) => (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton isActive={item.title === "Home"}>
                              <item.icon />
                              <span>{item.title}</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                  <div className="px-2 py-1.5 text-xs text-muted-foreground">
                    v1.0.0
                  </div>
                </SidebarFooter>
              </Sidebar>
              <SidebarInset className="bg-card/30">
                <header className="flex h-12 items-center gap-2 border-b px-4">
                  <SidebarTrigger />
                  <span className="text-sm font-medium">Dashboard</span>
                </header>
                <div className="flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
                  Content area
                </div>
              </SidebarInset>
            </SidebarProvider>
          </div>
        </ComponentPreview>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code={INSTALL_CODE} />
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={USAGE_CODE} />
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Anatomy</h2>
        <CodeBlock
          code={`<SidebarProvider>
  <Sidebar>
    <SidebarHeader />
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel />
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
  <SidebarInset>
    <SidebarTrigger />
    {/* page content */}
  </SidebarInset>
</SidebarProvider>`}
        />
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <p className="text-sm text-muted-foreground">
          <code className="font-mono text-xs">Sidebar</code> accepts{" "}
          <code className="font-mono text-xs">side</code> (<code className="font-mono text-xs">&quot;left&quot;</code> |{" "}
          <code className="font-mono text-xs">&quot;right&quot;</code>),{" "}
          <code className="font-mono text-xs">variant</code> (
          <code className="font-mono text-xs">&quot;sidebar&quot;</code> |{" "}
          <code className="font-mono text-xs">&quot;floating&quot;</code> |{" "}
          <code className="font-mono text-xs">&quot;inset&quot;</code>), and{" "}
          <code className="font-mono text-xs">collapsible</code> (
          <code className="font-mono text-xs">&quot;offcanvas&quot;</code> |{" "}
          <code className="font-mono text-xs">&quot;icon&quot;</code> |{" "}
          <code className="font-mono text-xs">&quot;none&quot;</code>).
        </p>
      </div>
    </div>
  )
}
