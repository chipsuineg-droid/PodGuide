import { Handshake, Clock, Users, UserCheck, Compass, Share2, ArrowRight } from "lucide-react"

const mentorTypes = [
  {
    title: "1-on-1 Mentoring",
    desc: "Personalized guidance from a senior student, junior doctor, or specialist. Matched based on your specific academic programme and clinical goals.",
    icon: UserCheck,
    eta: "In Development",
  },
  {
    title: "Peer Mentoring",
    desc: "Connect with students one or two years ahead of you in your exact discipline to ask questions, share revision methods, and navigate transitions.",
    icon: Users,
    eta: "In Development",
  },
  {
    title: "Mentorship Circles",
    desc: "Small, focused cohort sessions discussing high-yield topics, OSCE preparation strategies, and clinical rotation expectations.",
    icon: Share2,
    eta: "In Development",
  },
  {
    title: "Career Mentoring",
    desc: "Engage with healthcare practitioners to discuss clinical specialties, academic research opportunities, and residency pathways.",
    icon: Compass,
    eta: "In Development",
  },
]

const faqs = [
  {
    q: "Who can be a mentor on PodGuide?",
    a: "Senior students (Year 4 and above), junior doctors, and qualified medical professionals who have completed institutional verification.",
  },
  {
    q: "How will matching work?",
    a: "Matching will be coordinated based on your academic programme, current year level, and specific goals such as clinical skills, research, or exam preparation.",
  },
  {
    q: "Is there a cost involved?",
    a: "Peer and group mentoring within student cohorts will remain accessible without fees. Specialist clinical consultations will follow transparent guidelines.",
  },
  {
    q: "Can I register interest as a mentor?",
    a: "Yes. Final-year students, house officers, and qualified practitioners can express interest to help shape the program before general release.",
  },
]

export default function MentorPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-16">

      {/* Hero */}
      <div className="text-center space-y-4 pt-4">
        <div className="w-16 h-16 bg-red-600/10 border border-red-600/20 rounded-2xl flex items-center justify-center mx-auto text-red-500">
          <Handshake size={32} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Mentorship Network
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed text-xs sm:text-sm">
          We are developing a structured, verified mentorship system connecting healthcare students with senior peers, house officers, and clinical educators.
        </p>
        <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-semibold px-3 py-1.5 rounded-lg">
          <Clock size={13} />
          <span>Currently in structured preparation</span>
        </div>
      </div>

      {/* What we are building */}
      <div>
        <h2 className="text-base sm:text-lg font-bold text-white mb-5 flex items-center gap-2">
          <Handshake size={18} className="text-red-500" />
          <span>Mentorship Tracks</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mentorTypes.map(m => {
            const Icon = m.icon
            return (
              <div key={m.title} className="bg-[#101010] border border-[#1f1f1f] rounded-xl p-5 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-center text-red-500">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{m.title}</h3>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">{m.desc}</p>
                </div>
                <span className="inline-block text-[10px] font-semibold text-gray-400 bg-[#161616] border border-[#262626] px-2 py-0.5 rounded">
                  {m.eta}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Structured Commitments */}
      <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Curriculum Aligned</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Mentors are paired according to exact academic curricula and clinical clerkship blocks.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Identity Verified</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Senior student and practitioner profiles are verified prior to joining mentorship cohorts.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Focused Guidance</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Goal-directed sessions designed around OSCE techniques, case write-ups, and study habits.
          </p>
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h2 className="text-base sm:text-lg font-bold text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map(f => (
            <div key={f.q} className="bg-[#101010] border border-[#1c1c1c] rounded-xl p-4 sm:p-5">
              <h3 className="font-semibold text-white text-xs sm:text-sm mb-1">{f.q}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Community Connection */}
      <div className="text-center bg-[#101010] border border-[#1f1f1f] rounded-xl p-6 sm:p-8 space-y-3">
        <h3 className="text-lg font-bold text-white">Join the Student Community</h3>
        <p className="text-xs text-gray-400 max-w-md mx-auto">
          Connect with peers on the Campus feed to share study questions, clinical case discussions, and department announcements.
        </p>
        <div>
          <a
            href="/campus"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <span>Go to Campus Feed</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

    </div>
  )
}
