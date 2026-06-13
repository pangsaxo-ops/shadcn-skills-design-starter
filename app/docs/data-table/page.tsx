import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { DataTableDemo } from "@/components/docs/data-table-demo"

const INSTALL_CODE = `npx shadcn@latest add table checkbox dropdown-menu input button
npm install @tanstack/react-table`

const USAGE_CODE = `"use client"

import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function DataTable({ columns, data }) {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })
  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((hg) => (
          <TableRow key={hg.id}>
            {hg.headers.map((h) => (
              <TableHead key={h.id}>
                {flexRender(h.column.columnDef.header, h.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`

export default function DataTablePage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary">Component</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Data Table</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Powerful tables and datagrids built using{" "}
          <a
            href="https://tanstack.com/table"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            TanStack Table
          </a>
          .
        </p>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <p className="text-sm text-muted-foreground">
          Sorting, filtering, column visibility, row selection, and pagination — composed from
          the <code className="text-xs">Table</code>, <code className="text-xs">Checkbox</code>,{" "}
          <code className="text-xs">DropdownMenu</code>, and <code className="text-xs">Input</code> primitives.
        </p>
        <ComponentPreview code={USAGE_CODE}>
          <DataTableDemo />
        </ComponentPreview>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <p className="text-sm text-muted-foreground">
          The Data Table is a composition pattern, not a single component. Install the primitives
          and the TanStack Table headless library.
        </p>
        <CodeBlock code={INSTALL_CODE} />
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Anatomy</h2>
        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">Toolbar</span> — filter{" "}
            <code className="text-xs">Input</code> + a{" "}
            <code className="text-xs">Columns</code> visibility dropdown.
          </li>
          <li>
            <span className="font-medium text-foreground">Selection</span> — a leading{" "}
            <code className="text-xs">Checkbox</code> column with select-all + indeterminate state.
          </li>
          <li>
            <span className="font-medium text-foreground">Sorting</span> — clickable column header
            toggles <code className="text-xs">asc</code> / <code className="text-xs">desc</code>.
          </li>
          <li>
            <span className="font-medium text-foreground">Row actions</span> — a trailing{" "}
            <code className="text-xs">DropdownMenu</code> per row.
          </li>
          <li>
            <span className="font-medium text-foreground">Footer</span> — selection count +{" "}
            <code className="text-xs">Previous</code> / <code className="text-xs">Next</code> pagination.
          </li>
        </ul>
      </div>
    </div>
  )
}
