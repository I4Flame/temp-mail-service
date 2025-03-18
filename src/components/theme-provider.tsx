"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ThemeProviderProps = {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<typeof NextThemesProvider>

export function ThemeProvider(props: ThemeProviderProps) {
  return <NextThemesProvider {...props} />
}
