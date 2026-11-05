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
  verification: {
    google: "GekTjDQBJI9rg5HEDiPM0DzjkioiDlMqGHQrTqzzh98",
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
    // ── WebSite + Sitelinks Searchbox ─────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "PodGuide",
      "alternateName": ["Pod Guide", "PodGuide Digital Campus", "PodGuide Medical"],
      "description":
        "Unified digital campus and academic platform for medical and health sciences students, educators, and healthcare trainees.",
      "inLanguage": "en",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${SITE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    // ── WebApplication ────────────────────────────────────────────────────────
    {
      "@type": "WebApplication",
      "@id": `${SITE_URL}/#webapp`,
      "name": "PodGuide",
      "url": SITE_URL,
      "applicationCategory": "EducationApplication",
      "operatingSystem": "Web",
      "browserRequirements": "Requires a modern web browser",
      "description":
        "PodGuide is a digital academic campus for medical and health sciences students. It provides a curated digital library, adaptive question banks, clinical case simulations, AI-powered study tools, flashcards, and examination revision materials.",
      "featureList": [
        "Digital Academic Library with subject-organised resources",
        "Past examination papers and question banks",
        "Adaptive MCQ practice across BMS, MBChB, Pharmacy, Nursing, and Veterinary Science",
        "Clinical case simulations and OSCE preparation",
        "AI-powered study assistant",
        "Flashcard creator and spaced repetition",
        "Personal study notebooks",
        "Video and audio learning resources",
        "Peer study groups and campus community",
        "Progress tracking and performance analytics",
      ],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "description": "Free access for registered students",
      },
      "author": {
        "@id": `${SITE_URL}/#organization`,
      },
    },

    // ── EducationalOrganization ───────────────────────────────────────────────
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

    // ── Site Navigation (enables Sitelinks in Google) ─────────────────────────
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#navigation`,
      "name": "PodGuide Main Sections",
      "itemListElement": [
        {
          "@type": "SiteLinksSearchBox",
          "url": SITE_URL,
        },
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Digital Library",
          "description": "Curated academic resources for BMS, MBChB, Pharmacy, Nursing, and Veterinary Science",
          "url": `${SITE_URL}/library`,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Practise",
          "description": "MCQ question banks, clinical case simulations, flashcards, and quiz arena",
          "url": `${SITE_URL}/practise`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Learn",
          "description": "Structured learning modules, study notebooks, and AI study assistant",
          "url": `${SITE_URL}/learn`,
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Campus",
          "description": "Student community, peer groups, and campus events",
          "url": `${SITE_URL}/campus`,
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Grow",
          "description": "Career development, clinical electives, and professional resources",
          "url": `${SITE_URL}/grow`,
        },
      ],
    },

    // ── FAQ Rich Results ──────────────────────────────────────────────────────
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is PodGuide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "PodGuide is a digital academic campus built for medical and health sciences students. It brings together a structured digital library, past examination papers, MCQ question banks, clinical case simulations, AI study tools, and a student community in one platform.",
          },
        },
        {
          "@type": "Question",
          "name": "Which programmes does PodGuide support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "PodGuide supports students studying Biomedical Sciences (BMS), MBChB and MBBS medicine, Pharmacy, Nursing, and Veterinary Science.",
          },
        },
        {
          "@type": "Question",
          "name": "What resources are available in the PodGuide library?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "The PodGuide digital library contains textbooks, revision notes, lecture slides, past examination papers, question banks, journals, and multimedia resources organised by academic programme and subject.",
          },
        },
        {
          "@type": "Question",
          "name": "Does PodGuide have MCQ practice and past papers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. PodGuide offers adaptive MCQ practice, past examination papers, clinical case simulations, flashcards, and a quiz arena for competitive revision across all supported health sciences programmes.",
          },
        },
        {
          "@type": "Question",
          "name": "Is PodGuide free for students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "PodGuide offers free access to registered students. Create an account at podguide.org.zw to access the library, revision tools, and campus features.",
          },
        },
      ],
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
