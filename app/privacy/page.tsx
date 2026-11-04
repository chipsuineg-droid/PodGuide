import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ShieldCheck, Lock, Eye, Database, Cookie, UserCheck, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy explaining how PodGuide collects, protects, processes, and respects student and educator personal data.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#070707] text-gray-200">
      {/* ── TOP NAVIGATION BAR ── */}
      <header className="border-b border-[#1a1a1a] bg-[#0c0c0c]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-white hover:text-red-400 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center font-bold text-white text-sm shadow-sm group-hover:bg-red-500 transition-colors">
              P
            </div>
            <span className="font-bold text-base tracking-tight text-white">
              Pod<span className="text-red-500">Guide</span>
            </span>
          </Link>

          <div className="flex items-center gap-3 text-xs">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white px-3 py-1.5 rounded-lg border border-[#222] hover:border-[#333] transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/"
              className="flex items-center gap-1.5 bg-[#141414] hover:bg-[#1c1c1c] text-white px-3 py-1.5 rounded-lg border border-[#262626] transition-colors"
            >
              <ArrowLeft size={13} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ── HEADER HERO ── */}
      <section className="border-b border-[#161616] bg-[#0a0a0a] py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-semibold">
            <ShieldCheck size={13} />
            <span>Data Protection and Privacy</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            This policy outlines our commitments regarding the collection, use, storage, and protection of personal data across the PodGuide platform.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-gray-500 pt-1">
            <span>Effective Date: 1 January 2026</span>
            <span>·</span>
            <span>Last Updated: 4 November 2026</span>
            <span>·</span>
            <span>Scope: Web and Mobile Platforms</span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-10 text-xs sm:text-sm leading-relaxed text-gray-300">

        {/* Commitment Highlight */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#0e0e0e] border border-[#1f1f1f] text-gray-300 space-y-2">
          <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
            <Lock size={15} className="text-red-500" />
            <span>Our Core Privacy Principle</span>
          </div>
          <p className="text-xs leading-relaxed text-gray-300">
            PodGuide is built to empower medical and health sciences students. We believe your learning records, study notes, and personal academic progress belong to you. We do not sell your personal information to third-party data brokers, and we do not serve behavioral tracking advertisements.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">01.</span> Information We Collect
          </h2>
          <p>
            We collect only the information necessary to provide, personalize, and secure your academic experience on PodGuide:
          </p>
          <div className="space-y-3 pt-1">
            <div className="p-3.5 rounded-lg bg-[#0c0c0c] border border-[#1a1a1a]">
              <h3 className="text-xs font-bold text-white flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Account and Profile Information
              </h3>
              <p className="text-xs text-gray-400">
                When you create an account, we collect your full name, email address (typically your institutional or university address), password hash (securely encrypted), academic programme (such as BMS, MBChB / MBBS, Pharmacy, Nursing, or Veterinary Science), and your current academic year or level.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#0c0c0c] border border-[#1a1a1a]">
              <h3 className="text-xs font-bold text-white flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Academic Progress and Activity
              </h3>
              <p className="text-xs text-gray-400">
                To help you track your learning journey, our systems record your study progress, modules completed, flashcards reviewed, quiz and MCQ scores, study streak counters, and library resource engagement (such as materials viewed or marked as liked).
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#0c0c0c] border border-[#1a1a1a]">
              <h3 className="text-xs font-bold text-white flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                User-Generated Study Content
              </h3>
              <p className="text-xs text-gray-400">
                Personal notes authored in your Learn notebooks, study summaries, custom tags, and uploaded revision prompts are stored securely in your private workspace.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#0c0c0c] border border-[#1a1a1a]">
              <h3 className="text-xs font-bold text-white flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Technical and Device Information
              </h3>
              <p className="text-xs text-gray-400">
                We automatically receive standard technical diagnostic data, including your IP address, browser type, operating system version, and timestamps, to protect platform integrity, diagnose errors, and prevent malicious access.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">02.</span> How We Collect Your Information
          </h2>
          <p>
            We gather information through transparent, direct methods:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-gray-400">
            <li>
              <strong className="text-gray-200">Direct User Input:</strong> When you complete registration, update your profile, submit answers to revision questions, or create notebooks.
            </li>
            <li>
              <strong className="text-gray-200">Platform Interactions:</strong> Telemetry captured when you navigate through curriculum shelves, view documents, or download resources.
            </li>
            <li>
              <strong className="text-gray-200">Session Technologies:</strong> Secure authentication cookies that identify your active session across pages.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">03.</span> How We Use Your Information
          </h2>
          <p>
            Your information is processed strictly for the following purposes:
          </p>
          <ul className="space-y-1.5 list-disc pl-5 text-gray-400">
            <li>Authenticating your identity and maintaining your session security.</li>
            <li>Calculating and presenting your personal study statistics and progress dashboards.</li>
            <li>Enabling search, organization, and download of Google Drive academic resources.</li>
            <li>Facilitating MCQ practice tests, case studies, and automated answer scoring.</li>
            <li>Delivering important service notifications, security advisories, and administrative updates.</li>
            <li>Protecting the platform against abuse, automated scraping, or unauthorized access.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">04.</span> Information Sharing and Third Parties
          </h2>
          <p>
            We do not sell, rent, or trade your personal information. We share data only with trusted infrastructure providers that are strictly necessary to deliver the PodGuide platform:
          </p>
          <div className="space-y-2.5 pt-1">
            <div className="p-3 rounded-lg bg-[#0e0e0e] border border-[#1a1a1a]">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs">Supabase Inc.</span>
                <span className="text-[10px] text-gray-500">Database & Authentication</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Provides PostgreSQL database hosting, encrypted password authentication, and Row-Level Security (RLS) enforcement.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#0e0e0e] border border-[#1a1a1a]">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs">Google Cloud / Google Drive API</span>
                <span className="text-[10px] text-gray-500">File Storage & Streaming</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Used to host and stream medical educational resources, textbooks, and past papers. No personal student profile data is shared with Google Drive.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#0e0e0e] border border-[#1a1a1a]">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs">Vercel Inc.</span>
                <span className="text-[10px] text-gray-500">Application Hosting</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Hosts our web application edge routers and handles secure SSL/TLS web traffic.
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400 pt-1">
            We may disclose information if required to do so by applicable law, regulation, or legal process issued by a court of competent jurisdiction.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">05.</span> Cookies and Local Storage Technologies
          </h2>
          <p>
            PodGuide uses cookies and browser local storage strictly for essential operational functionality:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-gray-400">
            <li>
              <strong className="text-gray-200">Authentication Tokens:</strong> Secure HTTP-only cookies that verify your active sign-in status and protect against cross-site request forgery.
            </li>
            <li>
              <strong className="text-gray-200">Study Preferences:</strong> Browser local storage used to remember your theme selection, recent search queries, and working drafts of study notes.
            </li>
            <li>
              <strong className="text-gray-200">No Advertising Cookies:</strong> We do not use third-party marketing or cross-site tracking cookies.
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">06.</span> Data Security and Protection Standards
          </h2>
          <p>
            We implement comprehensive technical and organizational safeguards to ensure data security:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-lg bg-[#0e0e0e] border border-[#1a1a1a]">
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                <Lock size={13} className="text-red-500" />
                Encryption in Transit
              </h4>
              <p className="text-xs text-gray-400">
                All network communications between your browser and PodGuide are encrypted using Transport Layer Security (TLS 1.3 / HTTPS).
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#0e0e0e] border border-[#1a1a1a]">
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                <Database size={13} className="text-red-500" />
                Row-Level Security (RLS)
              </h4>
              <p className="text-xs text-gray-400">
                Database policies ensure each student can strictly access only their own private notebooks, study progress, and profile records.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">07.</span> Data Retention and Deletion
          </h2>
          <p>
            We retain your profile data, progress metrics, and study notes for as long as your account remains active. If you choose to close your account, we will permanently delete or anonymize your personal information within 30 days of receiving your verified request, except where retention is required by law.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">08.</span> Your Privacy Rights
          </h2>
          <p>
            Depending on your jurisdiction and institutional policies, you possess the following rights regarding your personal data:
          </p>
          <ul className="space-y-1.5 list-disc pl-5 text-gray-400">
            <li>
              <strong className="text-gray-200">Right to Access:</strong> You can request a summary of the personal data we hold about you.
            </li>
            <li>
              <strong className="text-gray-200">Right to Rectification:</strong> You can edit inaccurate or outdated profile information at any time.
            </li>
            <li>
              <strong className="text-gray-200">Right to Erasure:</strong> You can request the permanent deletion of your account and associated study records.
            </li>
            <li>
              <strong className="text-gray-200">Right to Data Portability:</strong> You can export personal notes authored in your study workspace.
            </li>
          </ul>
        </section>

        {/* Section 9 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">09.</span> Contact for Privacy Enquiries
          </h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please contact our privacy compliance team:
          </p>
          <div className="p-4 rounded-xl bg-[#0e0e0e] border border-[#1f1f1f] space-y-2 mt-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Privacy and Compliance Office</h3>
            <div className="pt-1 text-xs space-y-1 text-gray-300">
              <p>Email: <a href="mailto:info@podmyth.co.zw" className="text-red-400 hover:underline">info@podmyth.co.zw</a></p>
              <p>Platform: PodGuide Digital Campus</p>
              <p>Operating Entity: PodMyth Group, Harare, Zimbabwe</p>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#161616] py-8 px-4 sm:px-6 bg-[#050505] text-xs text-gray-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">PodGuide</span>
            <span>(a subsidiary of PodMyth Group)</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            <span>·</span>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Platform Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
