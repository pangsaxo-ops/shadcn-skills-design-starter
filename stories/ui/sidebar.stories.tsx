import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Home, Inbox, Calendar, Search, Settings } from "lucide-react"

const meta = {
  title: "UI/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { title: "Home", icon: Home },
  { title: "Inbox", icon: Inbox },
  { title: "Calendar", icon: Calendar },
  { title: "Search", icon: Search },
  { title: "Settings", icon: Settings },
]

export const Default: Story = {
  render: () => (
    <div className="h-[420px] w-full overflow-hidden">
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
            <div className="px-2 py-1.5 text-xs text-muted-foreground">v1.0.0</div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="bg-card/30">
          <div className="flex items-center gap-2 p-4">
            <SidebarTrigger />
            <span className="text-sm text-muted-foreground">Content area</span>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  ),
}
