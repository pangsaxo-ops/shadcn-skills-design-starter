export type DocNavItem = {
  title: string
  href: string
  badge?: string
  disabled?: boolean
}

export type DocNavGroup = {
  title: string
  items: DocNavItem[]
}

export const docsNav: DocNavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation", disabled: true },
    ],
  },
  {
    title: "Design Tokens",
    items: [
      { title: "Colors", href: "/docs/colors" },
      { title: "Typography", href: "/docs/typography" },
      { title: "Border Radius", href: "/docs/radius" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/docs/accordion" },
      { title: "Alert", href: "/docs/alert" },
      { title: "Alert Dialog", href: "/docs/alert-dialog" },
      { title: "Aspect Ratio", href: "/docs/aspect-ratio" },
      { title: "Avatar", href: "/docs/avatar" },
      { title: "Badge", href: "/docs/badge" },
      { title: "Breadcrumb", href: "/docs/breadcrumb" },
      { title: "Button", href: "/docs/button" },
      { title: "Button Group", href: "/docs/button-group" },
      { title: "Calendar", href: "/docs/calendar" },
      { title: "Card", href: "/docs/card" },
      { title: "Carousel", href: "/docs/carousel" },
      { title: "Chart", href: "/docs/chart" },
      { title: "Checkbox", href: "/docs/checkbox" },
      { title: "Collapsible", href: "/docs/collapsible" },
      { title: "Command", href: "/docs/command" },
      { title: "Context Menu", href: "/docs/context-menu" },
      { title: "Dialog", href: "/docs/dialog" },
      { title: "Drawer", href: "/docs/drawer" },
      { title: "Dropdown Menu", href: "/docs/dropdown-menu" },
      { title: "Form", href: "/docs/form" },
      { title: "Hover Card", href: "/docs/hover-card" },
      { title: "Input", href: "/docs/input" },
      { title: "Input OTP", href: "/docs/input-otp" },
      { title: "Label", href: "/docs/label" },
      { title: "Menubar", href: "/docs/menubar" },
      { title: "Navigation Menu", href: "/docs/navigation-menu" },
      { title: "Pagination", href: "/docs/pagination" },
      { title: "Popover", href: "/docs/popover" },
      { title: "Progress", href: "/docs/progress" },
      { title: "Radio Group", href: "/docs/radio-group" },
      { title: "Resizable", href: "/docs/resizable" },
      { title: "Scroll Area", href: "/docs/scroll-area" },
      { title: "Select", href: "/docs/select" },
      { title: "Separator", href: "/docs/separator" },
      { title: "Sheet", href: "/docs/sheet" },
      { title: "Skeleton", href: "/docs/skeleton" },
      { title: "Slider", href: "/docs/slider" },
      { title: "Sonner", href: "/docs/sonner" },
      { title: "Switch", href: "/docs/switch" },
      { title: "Table", href: "/docs/table" },
      { title: "Tabs", href: "/docs/tabs" },
      { title: "Textarea", href: "/docs/textarea" },
      { title: "Toggle", href: "/docs/toggle" },
      { title: "Toggle Group", href: "/docs/toggle-group" },
      { title: "Tooltip", href: "/docs/tooltip" },
    ],
  },
]
