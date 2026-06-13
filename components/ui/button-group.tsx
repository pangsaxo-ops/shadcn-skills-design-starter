"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Orientation = "horizontal" | "vertical"

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: Orientation
  /** Gap between buttons instead of shared borders */
  separated?: boolean
}

function ButtonGroup({
  orientation = "horizontal",
  separated = false,
  className,
  children,
  ...props
}: ButtonGroupProps) {
  const isVertical = orientation === "vertical"
  const items = React.Children.toArray(children).filter(React.isValidElement)
  const count = items.length

  return (
    <div
      data-slot="button-group"
      data-orientation={orientation}
      role="group"
      className={cn("flex", isVertical ? "flex-col" : "flex-row", separated && "gap-1", className)}
      {...props}
    >
      {items.map((child, i) => {
        const isFirst = i === 0
        const isLast = i === count - 1
        const isOnly = count === 1

        // Border radius overrides
        const radiusClass = isOnly
          ? ""
          : isVertical
            ? cn(
                "rounded-none",
                isFirst && "rounded-t-md",
                isLast && "rounded-b-md",
              )
            : cn(
                "rounded-none",
                isFirst && "rounded-l-md",
                isLast && "rounded-r-md",
              )

        // Collapse borders in attached mode
        const borderClass =
          !separated && !isFirst
            ? isVertical
              ? "-mt-px hover:z-10 focus-visible:z-10 focus-visible:relative hover:relative"
              : "-ml-px hover:z-10 focus-visible:z-10 focus-visible:relative hover:relative"
            : ""

        const el = child as React.ReactElement<{ className?: string }>

        return React.cloneElement(el, {
          key: i,
          className: cn(el.props.className, radiusClass, borderClass),
        })
      })}
    </div>
  )
}

export { ButtonGroup }
export type { ButtonGroupProps }
