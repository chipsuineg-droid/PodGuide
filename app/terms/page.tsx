import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Scale, ShieldAlert, FileText, Lock, Mail, ExternalLink, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Official terms and conditions governing the access, licensing, acceptable use, and operation of the PodGuide platform and academic resources.",
}

export default function TermsPage() {
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
              <span className="hidden sm:inline">Back to</span> Home
            </Link>
          </div>
        </div>
      </header>

      {/* ── STATUTORY HEADER ── */}
      <section className="border-b border-[#161616] bg-[#0a0a0a] py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-semibold">
            <Scale size={13} />
            <span>Statutory Agreement</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Terms and Conditions of Service
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            These Terms and Conditions constitute a legally binding agreement between the user and PodMyth Group governing the access, retrieval, and utilization of the PodGuide platform and associated services.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] text-gray-500 pt-1 flex-wrap">
            <span>Effective Date: 1 January 2026</span>
            <span>·</span>
            <span>Version: 2.1 (Formal Revision)</span>
            <span>·</span>
            <span>Jurisdiction: Republic of Zimbabwe</span>
          </div>
        </div>
      </section>

      {/* ── MAIN LEGAL DOCUMENT ── */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-10 text-xs sm:text-sm leading-relaxed text-gray-300">

        {/* MANDATORY MEDICAL DISCLAIMER */}
        <div id="disclaimer" className="p-4 sm:p-5 rounded-xl bg-red-600/5 border border-red-600/30 text-gray-300 space-y-2">
          <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider">
            <ShieldAlert size={16} />
            <span>Mandatory Medical and Clinical Disclaimer</span>
          </div>
          <p className="text-xs leading-relaxed text-gray-300">
            PodGuide is an academic educational repository designed exclusively for pedagogical review, examination preparation, and academic coursework. The materials, clinical spotters, past examination questions, drug monographs, and lecture notes accessible on this platform do not constitute medical, clinical, pharmaceutical, or surgical advice. Under no circumstances should information obtained from this platform be relied upon for the diagnosis, prognosis, treatment, or management of clinical patients in real-world healthcare settings. Licensed practitioners and healthcare students operating in hospital wards or clinical clerkships must independently consult authorized institutional protocols and approved pharmacopoeias. PodMyth Group expressly disclaims all civil or professional liability arising from the application of platform materials in clinical practice.
          </p>
        </div>

        {/* CLAUSE 1 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">1.</span> Binding Effect and Scope of Agreement
          </h2>
          <p>
            1.1 By accessing, registering an account with, browsing, or downloading data from the PodGuide platform, the User unreservedly agrees to be bound by these Terms and Conditions and our Privacy Policy.
          </p>
          <p>
            1.2 In the event that the User accesses the platform on behalf of an academic institution, faculty department, or student organization, the individual acting on behalf of such entity warrants and represents that they possess the necessary legal authority to bind said entity to this Agreement.
          </p>
          <p>
            1.3 If the User does not consent to the entirety of these terms, the User must immediately terminate their session and refrain from utilizing any services or data hosted on the platform.
          </p>
        </section>

        {/* CLAUSE 2 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">2.</span> Definitions and Interpretation
          </h2>
          <p>Within this Agreement, the following terms shall have the meanings ascribed hereto:</p>
          <ul className="space-y-2 pl-4 text-gray-400 list-disc">
            <li>
              <strong className="text-gray-200">&quot;Platform&quot;</strong> refers to the PodGuide software application, website, application programming interfaces (APIs), database repositories, and associated digital services operated by PodMyth Group.
            </li>
            <li>
              <strong className="text-gray-200">&quot;User&quot;</strong> refers to any student, faculty member, tutor, healthcare professional, or third party accessing the Platform.
            </li>
            <li>
              <strong className="text-gray-200">&quot;Educational Content&quot;</strong> refers to lecture notes, past examination papers, syllabus outlines, question banks, study guides, slides, audio files, and video recordings indexed on or delivered through the Platform.
            </li>
            <li>
              <strong className="text-gray-200">&quot;User-Generated Content&quot;</strong> refers to personal notes, custom flashcards, annotations, and study drafts authored directly by Users within the Platform workspace.
            </li>
          </ul>
        </section>

        {/* CLAUSE 3 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">3.</span> Account Registration, Security, and Governance
          </h2>
          <p>
            3.1 Certain functional modules of the Platform require the registration of a verified user profile. The User covenants to submit genuine, verifiable, and accurate personal data during the onboarding process.
          </p>
          <p>
            3.2 The User is strictly responsible for maintaining the confidentiality of their authentication credentials. Any activity, modification, or data transmission initiated through an active User account shall be deemed authorized by the registered account holder.
          </p>
          <p>
            3.3 Accounts are strictly personal to the registered User. Account sharing, credential aggregation, or concurrent shared access among multiple unauthorized parties is expressly prohibited and constitutes grounds for immediate account revocation without notice.
          </p>
        </section>

        {/* CLAUSE 4 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">4.</span> Acceptable Use and Prohibited Conduct
          </h2>
          <p>
            4.1 The User agrees to access and use the Platform solely for lawful educational, research, and non-commercial academic purposes.
          </p>
          <p>4.2 The User shall not, directly or indirectly:</p>
          <div className="space-y-2 pt-1">
            {[
              "Deploy automated bots, spiders, crawlers, scrapers, or programmatic routines to execute bulk extraction or harvesting of documents, question banks, or platform assets.",
              "Circumvent, disable, reverse-engineer, or tamper with security mechanisms, authentication systems, or rate-limiting controls implemented on platform APIs.",
              "Introduce viruses, worms, Trojan horses, ransomware, or other malicious code designed to disrupt, degrade, or compromise platform infrastructure.",
              "Misrepresent academic affiliation or access materials designated for restricted clinical levels or faculty administrators without authorization.",
              "Utilize the Platform in any manner that infringes upon the intellectual property rights, moral rights, or privacy rights of any third party.",
              "Transmit, store, or publish unlawful, defamatory, harassing, or sexually explicit content within public discussion boards or community directories.",
            ].map((rule, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-[#0c0c0c] border border-[#1a1a1a] text-xs text-gray-300"
              >
                <span className="font-mono text-red-500 mr-2">4.2.{idx + 1}</span>
                {rule}
              </div>
            ))}
          </div>
        </section>

        {/* CLAUSE 5 */}
        <section id="fair-dealing" className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">5.</span> Intellectual Property Rights and Fair Dealing
          </h2>
          <p>
            5.1 All proprietary software, database schemas, compilation arrangements, graphic interfaces, trademarks, and distinctive platform branding are the exclusive property of PodMyth Group and are protected under the Copyright and Neighboring Rights Act (Chapter 26:05) of Zimbabwe and relevant international conventions.
          </p>
          <p>
            5.2 Academic materials, past university examination papers, and clinical lecture slides organized within the digital library are indexed and made available pursuant to the principles of fair dealing for private study, research, criticism, review, and academic instruction. PodGuide does not claim exclusive copyright over historical institutional examination questions or open-access scientific publications.
          </p>
          <p>
            5.3 The User retains copyright in original User-Generated Content authored in personal workspaces. By authoring content on the Platform, the User grants PodGuide a worldwide, non-exclusive, royalty-free license to store, reproduce, and transmit such content solely to the extent required to execute platform functionality.
          </p>
          <p>
            5.4 If any copyright holder, academic department, or publisher identifies content that they believe infringes upon their protected rights, a formal notice containing proof of ownership and specific URL references must be dispatched to legal@podmyth.co.zw for immediate statutory assessment and appropriate remediation.
          </p>
        </section>

        {/* CLAUSE 6 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">6.</span> Third-Party Cloud Infrastructure and Storage
          </h2>
          <p>
            6.1 The digital library utilizes cloud storage interfaces, including Google Drive APIs, to index and retrieve educational assets. PodGuide implements proxy streaming and server-side caching to facilitate access.
          </p>
          <p>
            6.2 PodGuide does not warrant continuous, uninterrupted, or error-free transmission of assets hosted on third-party cloud architectures. Availability is subject to upstream provider operational uptime, regional network connectivity, and external data center latency.
          </p>
        </section>

        {/* CLAUSE 7 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">7.</span> MedStore and Commercial Merchandise Terms
          </h2>
          <p>
            7.1 Physical merchandise, scrubs, laboratory coats, diagnostic tools, and student apparel showcased within MedStore are furnished in conjunction with verified distribution partners.
          </p>
          <p>
            7.2 Pricing, inventory levels, and product specifications are subject to revision without prior notice. Title and risk of loss for physical items pass to the User upon delivery to the designated carrier or local distribution liaison.
          </p>
        </section>

        {/* CLAUSE 8 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">8.</span> Disclaimer of Warranties
          </h2>
          <p>
            8.1 The Platform, its services, question banks, and all indexed data are provided strictly on an &quot;as is&quot; and &quot;as available&quot; basis, without representation or warranty of any kind, whether express, statutory, or implied.
          </p>
          <p>
            8.2 PodMyth Group explicitly disclaims all implied warranties of merchantability, fitness for a particular academic or clinical purpose, accuracy of factual propositions, and non-infringement.
          </p>
          <p>
            8.3 No statement, advice, or tutorial material obtained from the Platform shall create any warranty not expressly set forth in this Agreement.
          </p>
        </section>

        {/* CLAUSE 9 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">9.</span> Limitation of Liability
          </h2>
          <p>
            9.1 To the maximum extent permitted by applicable law, neither PodMyth Group nor its directors, software developers, academic affiliates, or licensors shall be liable for any direct, indirect, incidental, special, consequential, or punitive damages.
          </p>
          <p>9.2 This limitation applies to, without limitation, damages arising from:</p>
          <ul className="space-y-1 pl-4 text-gray-400 list-disc">
            <li>Academic grades, examination performance, class rankings, or qualification outcomes.</li>
            <li>Inaccuracies, typological errors, or omissions in historical examination questions or syllabus outlines.</li>
            <li>System outages, data corruption, loss of personal notes, or unauthorized server access.</li>
            <li>Decisions executed or omitted in clinical settings based upon review of platform materials.</li>
          </ul>
        </section>

        {/* CLAUSE 10 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">10.</span> Indemnification
          </h2>
          <p>
            The User agrees to defend, indemnify, and hold harmless PodMyth Group, its officers, employees, and authorized agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, or expenses (including reasonable legal fees) arising out of or relating to the User&apos;s violation of this Agreement, unauthorized dissemination of resources, or improper use of the Platform.
          </p>
        </section>

        {/* CLAUSE 11 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">11.</span> Termination and Suspension of Access
          </h2>
          <p>
            11.1 PodMyth Group reserves the unilateral right to suspend, restrict, or revoke User accounts immediately upon identification of material breach of this Agreement, academic dishonesty, or credential compromise.
          </p>
          <p>
            11.2 The User may terminate their account at any time via written notice to info@podmyth.co.zw. Upon termination, all rights granted to the User shall immediately cease, while provisions relating to intellectual property, disclaimer of warranties, and limitation of liability shall survive.
          </p>
        </section>

        {/* CLAUSE 12 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">12.</span> Governing Law and Dispute Resolution
          </h2>
          <p>
            12.1 This Agreement shall be governed by, construed, and enforced in accordance with the substantive laws of the Republic of Zimbabwe, without regard to principles of conflicts of law.
          </p>
          <p>
            12.2 Any dispute, controversy, or claim arising out of or relating to this contract, including its formation, validity, breach, or termination, shall be submitted to the exclusive jurisdiction of the competent courts of Harare, Zimbabwe.
          </p>
        </section>

        {/* CLAUSE 13 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-2">
            <span className="text-red-500 font-mono text-sm">13.</span> Legal Notices and Inquiries
          </h2>
          <p>
            All formal legal notices, copyright claims, and regulatory inquiries must be delivered in writing to the designated legal department:
          </p>
          <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#1f1f1f] space-y-1.5 mt-3 text-xs text-gray-300">
            <p className="font-bold text-white">Legal Affairs Directorate, PodMyth Group</p>
            <p>Email: <a href="mailto:info@podmyth.co.zw" className="text-red-400 hover:underline">info@podmyth.co.zw</a></p>
            <p>Physical Location: Harare, Zimbabwe</p>
            <p>Platform: PodGuide Digital Campus</p>
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
