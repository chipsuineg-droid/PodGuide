import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Scale, ShieldAlert, FileText, CheckCircle2, Lock, Mail, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions governing the use of the PodGuide academic platform, learning resources, and student services.",
}

export default function TermsPage() {
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
              href="/privacy"
              className="text-gray-400 hover:text-white px-3 py-1.5 rounded-lg border border-[#222] hover:border-[#333] transition-colors"
            >
              Privacy Policy
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
            <Scale size={13} />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            These terms govern your access to and use of PodGuide, its academic repository, interactive study tools, and related digital services.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-gray-500 pt-1">
            <span>Effective Date: 1 January 2026</span>
            <span>·</span>
            <span>Last Updated: 4 November 2026</span>
            <span>·</span>
            <span>Entity: PodMyth Group</span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-10 text-xs sm:text-sm leading-relaxed text-gray-300">

        {/* Clinical Disclaimer Notice */}
        <div className="p-4 sm:p-5 rounded-xl bg-red-600/5 border border-red-600/30 text-gray-300 space-y-2">
          <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider">
            <ShieldAlert size={16} />
            <span>Important Medical Educational Disclaimer</span>
          </div>
          <p className="text-xs leading-relaxed text-gray-300">
            PodGuide is an academic study and revision platform built specifically for university students, educators, and health sciences trainees. All materials, past papers, lecture slides, question banks, and notes accessible on this platform are provided strictly for educational preparation. Under no circumstances should any content on PodGuide be used as clinical medical advice, diagnostic instructions, or treatment guidelines for real-world patient management. Licensed clinical professionals and healthcare institutions must exercise their own independent clinical judgment and follow established institutional protocols.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">01.</span> Acceptance of Terms
          </h2>
          <p>
            By creating an account, browsing our digital library, accessing study notebooks, or utilizing any feature of the PodGuide platform, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
          </p>
          <p>
            If you do not agree with any part of these terms, you must refrain from using the platform. If you are accessing PodGuide on behalf of an academic institution, student society, or faculty department, you represent and warrant that you possess the authority to bind that entity to these terms.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">02.</span> Eligibility and Account Registration
          </h2>
          <p>
            Access to certain core areas of PodGuide, including personal revision tracking, question banks, and interactive notebooks, requires an active user account.
          </p>
          <ul className="space-y-2 list-disc pl-5 text-gray-400">
            <li>
              <strong className="text-gray-200">Account Accuracy:</strong> You agree to provide accurate, current, and complete information during registration and to maintain the accuracy of your profile.
            </li>
            <li>
              <strong className="text-gray-200">Institutional Email:</strong> Where applicable, users registering through university affiliations should use their assigned institutional email addresses.
            </li>
            <li>
              <strong className="text-gray-200">Credential Confidentiality:</strong> You are solely responsible for maintaining the confidentiality of your login credentials and for all activities conducted through your account.
            </li>
            <li>
              <strong className="text-gray-200">Prohibition on Account Sharing:</strong> Individual user accounts are personal to the registered user. Sharing accounts or login credentials with unauthorized third parties is prohibited.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">03.</span> User Conduct and Acceptable Use Policy
          </h2>
          <p>
            PodGuide fosters a focused, professional learning environment for future healthcare leaders. When using the platform, you agree to comply with all applicable local, national, and international laws and regulations.
          </p>
          <p>You agree that you will not:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {[
              "Engage in automated data scraping, crawling, or systematic bulk extraction of resources without written consent.",
              "Attempt to bypass authentication mechanisms, gain unauthorized access, or probe system vulnerabilities.",
              "Upload, share, or transmit malicious code, viruses, corrupted files, or disruptive scripts.",
              "Engage in academic dishonesty, plagiarism, or misuse past examination materials contrary to institutional codes.",
              "Distribute defamatory, harassing, abusive, or unlawful content in community or discussion forums.",
              "Interfere with or disrupt the normal operation of our servers, networks, or connected storage services.",
            ].map((rule, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-[#0e0e0e] border border-[#1a1a1a] text-xs text-gray-300"
              >
                {rule}
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">04.</span> Intellectual Property and Ownership
          </h2>
          <p>
            The software, interface designs, logos, graphics, source code, interactive question engines, and platform layout of PodGuide are the proprietary intellectual property of PodMyth Group and its licensors, protected by copyright and intellectual property legislation.
          </p>
          <p>
            <strong className="text-white">Educational and Fair Dealing Resources:</strong> Academic documents, slides, past examination papers, and clinical notes organized within our digital library are curated for educational review, study, and research under fair dealing principles. PodGuide respects the intellectual property rights of academic publishers, universities, and educators. If you believe any material on the platform infringes upon your copyright, please contact our legal representative immediately for prompt review and resolution.
          </p>
          <p>
            <strong className="text-white">User-Created Content:</strong> Students and tutors retain intellectual ownership of their personal notes, original flashcards, and study notebooks authored within their workspace. By creating content on PodGuide, you grant us a non-exclusive license to store, process, and display that content solely for the purpose of delivering the service to you.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">05.</span> Cloud Storage and Google Drive Integration
          </h2>
          <p>
            Our digital library connects with Google Drive and cloud storage infrastructure to organize and deliver study files, lecture recordings, and reference documents.
          </p>
          <p>
            While PodGuide uses optimized caching and streaming proxies to ensure reliable file access, we do not guarantee uninterrupted availability of external cloud servers. File downloads and video playback speeds are dependent on your network connection and upstream service availability.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">06.</span> MedStore and Physical Merchandise
          </h2>
          <p>
            PodGuide provides an integrated medical merchandise catalog (MedStore) showcasing clinical apparel, scrubs, laboratory coats, and diagnostic instruments.
          </p>
          <ul className="space-y-1.5 list-disc pl-5 text-gray-400">
            <li>Product descriptions, pricing, and sizing charts are displayed as accurately as possible.</li>
            <li>Orders are processed in coordination with verified student societies and licensed merchandise partners.</li>
            <li>Delivery timelines and exchange policies are specified per order and subject to partner verification.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">07.</span> Disclaimer of Warranties and Limitation of Liability
          </h2>
          <p>
            PodGuide is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular academic purpose, or non-infringement.
          </p>
          <p>
            PodMyth Group, its officers, developers, and partners shall not be liable for any direct, indirect, incidental, consequential, or punitive damages resulting from:
          </p>
          <ul className="space-y-1 list-disc pl-5 text-gray-400">
            <li>Academic examination performance, grades, or institutional evaluation outcomes.</li>
            <li>Temporary platform downtime, service interruptions, or file transmission failures.</li>
            <li>Errors, omissions, or inaccuracies in study materials created or submitted by third parties.</li>
            <li>Unauthorized access to or alteration of your transmissions or data.</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">08.</span> Account Suspension and Termination
          </h2>
          <p>
            We reserve the right to suspend, restrict, or terminate your account and access to the platform at our discretion, without prior notice, if you breach these Terms and Conditions, engage in fraudulent activity, or compromise platform security.
          </p>
          <p>
            You may terminate your account at any time by contacting our support team or submitting an account closure request through your profile settings. Upon termination, your right to use the platform will immediately cease.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">09.</span> Amendments to These Terms
          </h2>
          <p>
            We may update these Terms and Conditions periodically to reflect modifications in our services, technological advancements, or regulatory requirements. Material changes will be communicated via notice on our website or through email notification. Your continued use of PodGuide following the posting of revised terms constitutes your acceptance of the changes.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">10.</span> Governing Law and Enquiries
          </h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of Zimbabwe, without regard to conflict of law principles. Any legal disputes arising under these terms shall be subject to the jurisdiction of the competent courts of Zimbabwe.
          </p>
          <div className="p-4 rounded-xl bg-[#0e0e0e] border border-[#1f1f1f] space-y-2 mt-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Contact for Legal Enquiries</h3>
            <p className="text-xs text-gray-400">
              For questions regarding these Terms and Conditions, copyright inquiries, or institutional agreements, please reach out to our legal department:
            </p>
            <div className="pt-1 text-xs space-y-1 text-gray-300">
              <p>Email: <a href="mailto:info@podmyth.co.zw" className="text-red-400 hover:underline">info@podmyth.co.zw</a></p>
              <p>Organization: PodMyth Group / PodGuide Education</p>
              <p>Location: Harare, Zimbabwe</p>
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
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
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
