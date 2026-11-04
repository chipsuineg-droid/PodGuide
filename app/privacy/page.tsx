import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ShieldCheck, Lock, Eye, Database, UserCheck, Mail, Scale } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy and Data Protection",
  description:
    "Official statutory privacy policy detailing the collection, processing, storage, and protection of personal data across the PodGuide platform.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#070707] text-gray-200">
      {/* ── TOP NAVIGATION BAR ── */}
      <header className="border-b border-[#1a1a1a] bg-[#0c0c0c]/90 backdrop-blur-md sticky top-0 z-30">
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

          <div className="flex items-center gap-2 sm:gap-3 text-xs">
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
              <span className="hidden sm:inline">Back to</span> Home
            </Link>
          </div>
        </div>
      </header>

      {/* ── STATUTORY HEADER ── */}
      <section className="border-b border-[#161616] bg-[#0a0a0a] py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-semibold">
            <ShieldCheck size={13} />
            <span>Statutory Privacy Policy</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Data Protection and Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            This Policy sets forth the mandatory principles, legal bases, and technical safeguards governing the acquisition, processing, security, and retention of personal data by PodMyth Group across the PodGuide digital architecture.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] text-gray-500 pt-1 flex-wrap">
            <span>Effective Date: 1 January 2026</span>
            <span>·</span>
            <span>Version: 2.1 (Statutory Compliance)</span>
            <span>·</span>
            <span>Data Controller: PodMyth Group</span>
          </div>
        </div>
      </section>

      {/* ── MAIN LEGAL DOCUMENT ── */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-10 text-xs sm:text-sm leading-relaxed text-gray-300">

        {/* STATUTORY COMMITMENT */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#0c0c0c] border border-[#1f1f1f] text-gray-300 space-y-2">
          <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
            <Lock size={15} className="text-red-500" />
            <span>Mandatory Non-Commercialization Guarantee</span>
          </div>
          <p className="text-xs leading-relaxed text-gray-300">
            PodMyth Group maintains a strict policy of zero commercialization regarding user personal data. Under no circumstances does the Data Controller sell, lease, license, trade, or distribute Personal Data or academic performance telemetry to commercial third-party brokers, marketing consortiums, or behavioral advertising platforms.
          </p>
        </div>

        {/* CLAUSE 1 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">1.</span> Regulatory Framework and Data Controller
          </h2>
          <p>
            1.1 The Data Controller responsible for the processing of Personal Data under this Policy is PodMyth Group, an incorporated entity operating under the laws of Zimbabwe, with registered corporate offices in Harare, Zimbabwe.
          </p>
          <p>
            1.2 This Policy is formulated in adherence to the Cyber and Data Protection Act (Chapter 12:07) of Zimbabwe and recognized international principles of lawful, fair, transparent, and proportional data processing.
          </p>
        </section>

        {/* CLAUSE 2 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">2.</span> Categories of Personal Data Processed
          </h2>
          <p>
            The Data Controller restricts data collection strictly to information required for platform authentication, academic tracking, and systems security:
          </p>
          <div className="space-y-2.5 pt-1">
            <div className="p-3 rounded-lg bg-[#0e0e0e] border border-[#1a1a1a]">
              <h3 className="text-xs font-bold text-white mb-1">
                2.1 Identity and Contact Data
              </h3>
              <p className="text-xs text-gray-400">
                Full legal name, institutional or student email address, cryptographic password hash, academic institution, affiliated faculty programme (e.g. Biomedical Sciences, MBChB, Pharmacy, Nursing, Veterinary Science), and matriculated academic year level.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#0e0e0e] border border-[#1a1a1a]">
              <h3 className="text-xs font-bold text-white mb-1">
                2.2 Academic Telemetry and Performance Records
              </h3>
              <p className="text-xs text-gray-400">
                Objective logs of questions attempted, multiple-choice assessment scoring, flashcard repetition intervals, module progress metrics, curriculum bookmarks, and platform engagement history (such as views recorded and study assets downloaded).
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#0e0e0e] border border-[#1a1a1a]">
              <h3 className="text-xs font-bold text-white mb-1">
                2.3 User-Authored Study Artifacts
              </h3>
              <p className="text-xs text-gray-400">
                Personalized notes authored within workspace notebooks, custom tags, study summaries, and self-generated annotations retained within private, row-isolated database tables.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#0e0e0e] border border-[#1a1a1a]">
              <h3 className="text-xs font-bold text-white mb-1">
                2.4 Technical Diagnostics and Access Logs
              </h3>
              <p className="text-xs text-gray-400">
                Internet Protocol (IP) addresses, user-agent device strings, browser types, operating system environments, access timestamps, and error diagnostics required for server load management and security audit trails.
              </p>
            </div>
          </div>
        </section>

        {/* CLAUSE 3 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">3.</span> Legal Bases and Purposes of Processing
          </h2>
          <p>The processing of Personal Data is executed exclusively pursuant to the following lawful grounds:</p>
          <ul className="space-y-2 pl-4 text-gray-400 list-disc">
            <li>
              <strong className="text-gray-200">Contractual Necessity:</strong> To fulfill our obligations in providing authentication, verifying academic levels, calculating study milestones, and maintaining private account access.
            </li>
            <li>
              <strong className="text-gray-200">Legitimate Operational Interests:</strong> To protect platform integrity, prevent brute-force attacks, mitigate unauthorized automated scraping, and ensure server stability.
            </li>
            <li>
              <strong className="text-gray-200">Statutory Compliance:</strong> To satisfy lawful mandates, judicial summonses, or statutory regulatory obligations issued by competent public authorities.
            </li>
          </ul>
        </section>

        {/* CLAUSE 4 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">4.</span> Third-Party Service Processors and Infrastructure
          </h2>
          <p>
            Personal data is never disclosed to external parties except to designated infrastructure processors operating under strict contractual data protection covenants:
          </p>
          <div className="space-y-2 pt-1">
            <div className="p-3 rounded-lg bg-[#0c0c0c] border border-[#1a1a1a] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-white">Supabase Inc.</span>
                <p className="text-[11px] text-gray-400">PostgreSQL relational database infrastructure, identity management, and encrypted credential storage.</p>
              </div>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider shrink-0 bg-[#141414] px-2 py-0.5 rounded border border-[#222]">Primary Database</span>
            </div>

            <div className="p-3 rounded-lg bg-[#0c0c0c] border border-[#1a1a1a] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-white">Google Cloud / Google Drive API</span>
                <p className="text-[11px] text-gray-400">File storage and streaming endpoints for public academic documents. No private user telemetry is transmitted.</p>
              </div>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider shrink-0 bg-[#141414] px-2 py-0.5 rounded border border-[#222]">Storage API</span>
            </div>

            <div className="p-3 rounded-lg bg-[#0c0c0c] border border-[#1a1a1a] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-white">Vercel Inc.</span>
                <p className="text-[11px] text-gray-400">Application edge routing, serverless execution environments, and TLS web traffic termination.</p>
              </div>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider shrink-0 bg-[#141414] px-2 py-0.5 rounded border border-[#222]">Edge Routing</span>
            </div>
          </div>
        </section>

        {/* CLAUSE 5 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">5.</span> Storage Technologies and Session Management
          </h2>
          <p>
            5.1 PodGuide implements browser storage mechanisms strictly for operational and functional execution:
          </p>
          <ul className="space-y-1.5 pl-4 text-gray-400 list-disc">
            <li>
              <strong className="text-gray-200">Cryptographic Session Cookies:</strong> Encrypted, secure, SameSite-compliant tokens deployed to authenticate active sessions and safeguard against cross-site scripting (XSS).
            </li>
            <li>
              <strong className="text-gray-200">Local Browser Storage:</strong> Client-side storage utilized to preserve user interface theme states, study note drafts, and client-side folder filter parameters.
            </li>
          </ul>
          <p>
            5.2 The Platform does not deploy third-party advertising cookies, fingerprinting pixels, or behavioral cross-site analytics beacons.
          </p>
        </section>

        {/* CLAUSE 6 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">6.</span> Security Architecture and Data Integrity
          </h2>
          <p>
            6.1 The Data Controller maintains robust administrative, physical, and technical controls to safeguard Personal Data against accidental loss, unauthorized destruction, alteration, or disclosure:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-lg bg-[#0c0c0c] border border-[#1a1a1a]">
              <h4 className="text-xs font-bold text-white mb-1">Row-Level Security (RLS)</h4>
              <p className="text-xs text-gray-400">
                Database access rules enforced at the engine level ensuring data partitions are strictly queryable only by the authenticated profile owner.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#0c0c0c] border border-[#1a1a1a]">
              <h4 className="text-xs font-bold text-white mb-1">Cryptographic In-Transit Security</h4>
              <p className="text-xs text-gray-400">
                All communications between client devices and edge servers are encrypted using modern Transport Layer Security (TLS 1.3 / HTTPS).
              </p>
            </div>
          </div>
        </section>

        {/* CLAUSE 7 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">7.</span> Data Retention, Archival, and Erasure Schedules
          </h2>
          <p>
            7.1 Personal Data is retained for the active duration of the User&apos;s educational account on the Platform.
          </p>
          <p>
            7.2 Upon receipt of a verified account cancellation request, the Data Controller shall permanently delete or anonymize all associated Personal Data and study records within thirty (30) calendar days, except where retention is mandated by law or for the resolution of active dispute claims.
          </p>
        </section>

        {/* CLAUSE 8 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">8.</span> Statutory Data Subject Rights
          </h2>
          <p>Pursuant to applicable data protection legislation, the User possesses the following enforceable statutory rights:</p>
          <div className="space-y-1.5 pl-4 text-gray-400 list-disc">
            <li>
              <strong className="text-gray-200">Right of Access:</strong> The right to obtain formal confirmation and an electronic transcript of Personal Data held by the Controller.
            </li>
            <li>
              <strong className="text-gray-200">Right to Rectification:</strong> The right to demand immediate correction of inaccurate or incomplete profile records.
            </li>
            <li>
              <strong className="text-gray-200">Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> The right to request permanent deletion of user profile data from active databases.
            </li>
            <li>
              <strong className="text-gray-200">Right to Restriction and Objection:</strong> The right to object to processing activities conducted under legitimate interest grounds.
            </li>
          </div>
          <p className="pt-1 text-xs text-gray-400">
            To invoke any statutory right, the User must submit a formal written demand to info@podmyth.co.zw. Requests shall be adjudicated and responded to within twenty-one (21) business days without fee.
          </p>
        </section>

        {/* CLAUSE 9 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">9.</span> Data Protection Inquiries and Supervisory Notice
          </h2>
          <p>
            Formal communications, compliance inquiries, or regulatory notices concerning this Policy must be addressed to the designated Data Compliance Officer:
          </p>
          <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#1f1f1f] space-y-1.5 mt-3 text-xs text-gray-300">
            <p className="font-bold text-white">Office of Data Compliance, PodMyth Group</p>
            <p>Email: <a href="mailto:info@podmyth.co.zw" className="text-red-400 hover:underline">info@podmyth.co.zw</a></p>
            <p>Subject Line: Formal Data Protection Inquiry / PodGuide</p>
            <p>Location: Harare, Zimbabwe</p>
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
