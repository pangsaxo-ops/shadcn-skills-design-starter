"use client"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

export default function SonnerPage() {
  return (
    <div className="flex flex-col gap-10">
      <Toaster />
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Sonner</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          An opinionated toast component for React.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`// In your layout:
import { Toaster } from "@/components/ui/sonner"
<Toaster />

// To trigger:
import { toast } from "sonner"
toast("Event has been created")`}>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" onClick={() => toast("Event has been created.")}>Default</Button>
            <Button variant="outline" onClick={() => toast.success("Profile updated!")}>Success</Button>
            <Button variant="outline" onClick={() => toast.error("Something went wrong.")}>Error</Button>
            <Button variant="outline" onClick={() => toast.warning("Low disk space.")}>Warning</Button>
            <Button variant="outline" onClick={() => toast.info("Update available.")}>Info</Button>
            <Button variant="outline" onClick={() => toast.loading("Loading...")}>Loading</Button>
          </div>
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add sonner" />
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Setup</h2>
        <CodeBlock code={`// app/layout.tsx
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}`} />
      </div>
    </div>
  )
}
