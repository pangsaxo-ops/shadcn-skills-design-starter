"use client"
import {
  Sheet, SheetContent, SheetDescription, SheetFooter,
  SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

export default function SheetPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Sheet</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Extends the Dialog component to display content that complements the main content of the screen.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    <div className="flex flex-col gap-4 py-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" value="Pedro Duarte" />
      </div>
    </div>
    <SheetFooter>
      <Button type="submit">Save changes</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}>
          <Sheet>
            <SheetTrigger asChild><Button variant="outline">Open Sheet</Button></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>Make changes to your profile here. Click save when done.</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="sname">Name</Label>
                  <Input id="sname" defaultValue="Pedro Duarte" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="susername">Username</Label>
                  <Input id="susername" defaultValue="@peduarte" />
                </div>
              </div>
              <SheetFooter><Button>Save changes</Button></SheetFooter>
            </SheetContent>
          </Sheet>
        </ComponentPreview>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add sheet" />
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Side variants</h2>
        <ComponentPreview code={`// side can be "top" | "bottom" | "left" | "right"
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open from bottom</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    ...
  </SheetContent>
</Sheet>`}>
          <div className="flex flex-wrap gap-2">
            {(["top","right","bottom","left"] as const).map(side => (
              <Sheet key={side}>
                <SheetTrigger asChild><Button variant="outline" size="sm">{side}</Button></SheetTrigger>
                <SheetContent side={side}>
                  <SheetHeader><SheetTitle>Sheet ({side})</SheetTitle></SheetHeader>
                </SheetContent>
              </Sheet>
            ))}
          </div>
        </ComponentPreview>
      </div>
    </div>
  )
}
