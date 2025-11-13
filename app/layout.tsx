import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saurav Pant - Full-Stack Developer",
  description:
    "Full-Stack Web and App Developer | React Native Developer | AI/ML Enthusiast | Building scalable, high-performance systems",
  generator: "v0.app",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Mobile Development",
  ],
  authors: [{ name: "Saurav Pant" }],
  openGraph: {
    title: "Saurav Pant - Full-Stack Developer",
    description: "Full-Stack Web and App Developer | React Native | AI/ML Enthusiast",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurav Pant - Full-Stack Developer",
    description: "Full-Stack Web and App Developer | React Native | AI/ML Enthusiast",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b0d17" />
      </head>
      <body className={`font-sans antialiased bg-gradient-dark`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
