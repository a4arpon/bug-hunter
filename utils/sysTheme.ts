"use client"
export const sysTheme = (): boolean => {
  if (typeof window !== "undefined") {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
    if (darkThemeMq.matches) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
