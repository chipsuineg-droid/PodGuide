import type { Metadata, Viewport } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" })

export const metadata: Metadata = {
  title: { default: "PodGuide", template: "%s | PodGuide" },
  description: "Your Digital Campus for Medical & Health Sciences Students",
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "PodGuide" },
}

export const viewport: Viewport = { themeColor: "#000000" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} bg-black text-white antialiased`}>
        {children}
        <Toaster position="bottom-right" theme="dark" richColors />
      </body>
    </html>
  )
}