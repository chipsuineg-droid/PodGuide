import { Handshake, Clock, Users, Star, CheckCircle, ArrowRight } from "lucide-react"

const mentorTypes = [
  {
    title: "1-on-1 Mentoring",
    desc: "Personalised guidance from a senior student, junior doctor, or specialist. Get matched based on your programme and goals.",
    icon: "👤",
    eta: "Launching soon",
  },
  {
    title: "Peer Mentoring",
    desc: "Connect with students one or two years ahead of you in your exact programme. Ask questions, get advice, and stay on track.",
    icon: "🤝",
    eta: "Launching soon",
  },
  {
    title: "Mentorship Circles",
    desc: "Join small, structured group mentoring sessions led by senior students or doctors on specific themes like finals prep or clinical rotations.",
    icon: "⭕",
    eta: "Launching soon",
  },
  {
    title: "Career Mentoring",
    desc: "Get connected with specialists and consultants to explore career paths, research opportunities, and postgraduate applications.",
    icon: "🚀",
    eta: "Launching soon",
  },
]

const faqs = [
  {
    q: "Who can be a mentor on PodGuide?",
    a: "Senior students (Year 4+), junior doctors, and verified specialists who have applied and been approved by the PodGuide team.",
  },
  {
    q: "How will I be matched with a mentor?",
    a: "You will be matched based on your programme, year level, and specific goals — clinical skills, research, career exploration, or exam prep.",
  },
  {
    q: "Is there a cost?",
    a: "Peer and group mentoring will always be free. One-on-one sessions with specialists may be subject to a small platform fee in the future.",
  },
  {
    q: "Can I become a mentor?",
    a: "Yes! If you are in Year 4 or above, or a qualified health professional, you can apply to become a PodGuide mentor when applications open.",
  },
]

export default function MentorPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-16">

      {/* Hero */}
      <div className="text-center space-y-4 pt-4">
        <div className="w-16 h-16 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center mx-auto text-3xl">
          🤝
        </div>
        <h1 className="text-4xl font-display font-bold text-white">Mentorship is Coming</h1>
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
          We are building a structured, verified mentorship system connecting students with senior peers,
          junior doctors, and specialists across Africa and beyond.
        </p>
        <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-sm font-semibold px-4 py-2 rounded-full">
          <Clock size={14} /> Launching soon — be the first to know
        </div>
      </div>

      {/* What's coming */}
      <div>
        <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <Handshake size={20} className="text-brand" /> What we are building
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mentorTypes.map(m => (
            <div key={m.title} className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-6 space-y-3">
              <div className="text-3xl">{m.icon}</div>
              <div>
                <h3 className="font-bold text-white">{m.title}</h3>
                <p className="text-sm text-gray-400 mt-1 leading-relaxed">{m.desc}</p>
              </div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded">
                {m.eta}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats teaser */}
      <div className="bg-[#0f0a0a] border border-brand/20 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { value: "500+", label: "Students waiting to be matched" },
          { value: "50+", label: "Mentors ready to join" },
          { value: "10+", label: "Countries across Africa" },
        ].map(s => (
          <div key={s.label}>
            <p className="text-3xl font-bold text-brand">{s.value}</p>
            <p className="text-sm text-gray-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-lg font-bold text-white mb-5">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map(f => (
            <div key={f.q} className="bg-[#111] border border-[#1f1f1f] rounded-xl p-5">
              <h3 className="font-semibold text-white text-sm mb-1.5">{f.q}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Notify CTA */}
      <div className="text-center bg-[#111] border border-[#1f1f1f] rounded-2xl p-8 space-y-4">
        <h3 className="text-xl font-bold text-white">Want to be notified at launch?</h3>
        <p className="text-sm text-gray-400">Post in the Campus feed and tag <span className="text-brand font-semibold">@PodGuide</span> — our team will add you to the early access list.</p>
        <a href="/campus"
          className="inline-flex items-center gap-2 bg-brand text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition-colors">
          Go to Campus Feed <ArrowRight size={16} />
        </a>
      </div>

    </div>
  )
}