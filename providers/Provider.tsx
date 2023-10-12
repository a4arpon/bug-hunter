"use client"

import { ThemeProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

const Provider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export default Provider
