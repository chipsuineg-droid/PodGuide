import type { Metadata, Viewport } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/theme/ThemeProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://podguide.org.zw"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PodGuide | Digital Campus for Medical & Health Sciences",
    template: "%s | PodGuide",
  },
  description:
    "PodGuide is the unified digital campus for medical and health sciences students. Access curated academic shelves, past examination papers, question banks, study notebooks, and clinical resources for BMS, MBChB, Pharmacy, Nursing, and Veterinary Science.",
  applicationName: "PodGuide",
  authors: [{ name: "PodMyth Group", url: "https://podmyth.co.zw" }],
  creator: "PodMyth Group",
  publisher: "PodMyth Group",
  category: "Medical Education",
  keywords: [
    "PodGuide",
    "Pod Guide",
    "PodGuide Zimbabwe",
    "PodGuide digital campus",
    "medical student platform",
    "MBChB revision notes",
    "Biomedical Sciences past papers",
    "Pharmacy study materials",
    "Nursing examination questions",
    "Veterinary Science clinical resources",
    "medical question bank",
    "OSCE revision",
    "University of Zimbabwe medical school",
    "ZIMSA medical students",
    "African medical education",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "PodGuide | Digital Campus for Medical & Health Sciences",
    description:
      "Access curated academic shelves, past examination papers, adaptive question banks, and clinical learning materials across BMS, MBChB, Pharmacy, Nursing, and Veterinary Science.",
    url: SITE_URL,
    siteName: "PodGuide",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PodGuide | Digital Campus for Medical & Health Sciences",
    description:
      "Unified academic library, interactive revision tools, and question banks for healthcare students and educators.",
    creator: "@PodGuide",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "PodGuide",
  },
}

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
}

// JSON-LD Structured Data for Google Rich Search & Brand Recognition
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "PodGuide",
      "alternateName": ["Pod Guide", "PodGuide Digital Campus", "PodGuide Medical"],
      "description":
        "Unified digital campus and academic platform for medical and health sciences students, educators, and healthcare trainees.",
      "inLanguage": "en",
    },
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      "name": "PodGuide",
      "url": SITE_URL,
      "description":
        "Academic digital campus providing medical, pharmacy, nursing, veterinary, and biomedical science learning resources.",
      "parentOrganization": {
        "@type": "Organization",
        "name": "PodMyth Group",
        "url": "https://podmyth.co.zw",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@podmyth.co.zw",
        "contactType": "academic support",
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased transition-colors duration-150`}>
        <ThemeProvider>
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
