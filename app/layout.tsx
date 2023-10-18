import LDSchema from "@/components/shared/JSON-LD"
import Navbar from "@/components/shared/Navbar"
import { Toaster } from "@/components/ui/toaster"
import "@/globals.css"
import Provider from "@/providers/Provider"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
const jetBrains_Mono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bug Hunter: Simple and Standard Issue Tracking Solution.",
  description:
    "Effortlessly manage issues, public & private, with Bug Hunter. Your YouTrack-inspired solution for efficient internal issue management.",
  openGraph: {
    title: "Bug Hunter: Simple and Standard Issue Tracking Solution.",
    description:
      "Effortlessly manage issues, public & private, with Bug Hunter. Your YouTrack-inspired solution for efficient internal issue management.",
    type: "article",
    publishedTime: "2023-01-01T00:00:00.000Z",
    images:
      "https://i.pinimg.com/originals/b7/53/99/b75399858a77a4ba579fdcda9128f12d.jpg",
    url: "https://bug-hunter.vercel.app/",
  },
  alternates: {
    canonical: "https://bug-hunter.vercel.app",
    languages: {
      "en-US": "https://bug-hunter.vercel.app",
      "bn-BN": "https://bug-hunter.vercel.app/bn/",
    },
    types: {
      "application/sitemap+xml": "https://bug-hunter.vercel.app/sitemap.xml",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const searchSchema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Bug Hunter",
    url: "https://bug-hunter.vercel.app/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bug-hunter.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <html lang="en">
      <body className={`${jetBrains_Mono.className} antialiased`}>
        <Provider>
          <Navbar />
          <main className="container my-5">{children}</main>
          <Toaster />
        </Provider>
        <LDSchema schema={searchSchema} />
      </body>
    </html>
  )
}
