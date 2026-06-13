import type { Preview } from "@storybook/nextjs-vite"
import React, { useEffect } from "react"
import "../app/globals.css"

// 4 brand modes from DESIGN.md — semantic tokens switch automatically.
const THEMES = {
  light: { class: false, attr: null, label: "Light" },
  dark: { class: true, attr: null, label: "Dark" },
  primary: { class: false, attr: "primary", label: "Primary (blue)" },
  secondary: { class: false, attr: "secondary", label: "Secondary (yellow)" },
} as const

type ThemeKey = keyof typeof THEMES

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: "todo" },
    layout: "centered",
  },
  initialGlobals: {
    theme: "light",
  },
  globalTypes: {
    theme: {
      description: "Brand mode (light / dark / primary / secondary)",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: (Object.keys(THEMES) as ThemeKey[]).map((value) => ({
          value,
          title: THEMES[value].label,
        })),
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals.theme ?? "light") as ThemeKey
      useEffect(() => {
        const root = document.documentElement
        root.classList.toggle("dark", THEMES[theme].class)
        const attr = THEMES[theme].attr
        if (attr) root.setAttribute("data-theme", attr)
        else root.removeAttribute("data-theme")
      }, [theme])

      return (
        <div className="bg-background text-foreground antialiased flex min-h-[60vh] w-full items-center justify-center p-10">
          <Story />
        </div>
      )
    },
  ],
}

export default preview
