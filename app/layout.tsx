import Navbar from "@/components/shared/Navbar"
import { Toaster } from "@/components/ui/toaster"
import "@/globals.css"
import Provider from "@/providers/Provider"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
const jetBrains_Mono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jetBrains_Mono.className} antialiased`}>
        <Provider>
          <Navbar />
          <main className="container my-5">{children}</main>
          <Toaster />
        </Provider>
      </body>
    </html>
  )
}
