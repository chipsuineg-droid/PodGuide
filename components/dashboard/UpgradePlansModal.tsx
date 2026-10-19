"use client"
import { useState } from "react"
import { Sparkles, Crown, Check, X, Users, Zap, Shield, ArrowRight } from "lucide-react"

interface PlanFeature {
  text: string
}

interface Plan {
  id: string
  name: string
  tagline: string
  badge?: string
  isPopular?: boolean
  features: string[]
  buttonText: string
  isCurrent?: boolean
}

const PLANS: Plan[] = [
  {
    id: "free",
    name: "Guide Free",
    tagline: "Core medical learning essentials for every student.",
    badge: "Current",
    isCurrent: true,
    features: [
      "Access to standard curriculum modules",
      "Essential question bank practice",
      "AI Notebook assistant (standard speed)",
      "Community campus discussions",
      "Basic flashcard study mode",
    ],
    buttonText: "Active Plan",
  },
  {
    id: "pro",
    name: "Guide Pro",
    tagline: "Accelerated clinical mastery for high-performing students.",
    badge: "Coming Soon",
    isPopular: true,
    features: [
      "Unlimited notebook document & PDF uploads",
      "High-yield clinical cases & OSCE scenarios",
      "Full question bank with textbook explanations",
      "Spaced-repetition mastery tracking",
      "Priority AI mentor response time",
    ],
    buttonText: "Coming Soon",
  },
  {
    id: "ultra",
    name: "Guide Ultra",
    tagline: "The ultimate AI-powered medical education platform.",
    badge: "Coming Soon",
    features: [
      "Deep clinical reasoning with multi-source synthesis",
      "Unlimited studio tools (MCQs, Mind Maps, Flashcards)",
      "1-on-1 verified mentor booking & circles",
      "Official university exam papers & solutions",
      "Offline sync & high-yield revision summaries",
    ],
    buttonText: "Coming Soon",
  },
  {
    id: "group",
    name: "Group Plan",
    tagline: "For study groups, hospital firms, and medical cohorts.",
    badge: "Coming Soon",
    features: [
      "Shared cohort notebooks & collaborative sources",
      "Live team Quiz Arena & firm leaderboards",
      "Group rotation & clinical roster management",
      "Discounted cohort pricing for 5+ students",
      "Dedicated cohort moderator controls",
    ],
    buttonText: "Coming Soon",
  },
]

export function UpgradePlansModal({ variant = "hero" }: { variant?: "hero" | "sidebar" } = {}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {variant === "sidebar" ? (
        /* ── SIDEBAR UPGRADE BUTTON ── */
        <button
          onClick={() => setOpen(true)}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg mt-2 border border-brand/40 bg-[#0f0f0f] hover:bg-[#181818] hover:border-brand text-white transition-all group"
        >
          <div className="flex items-center gap-3">
            <Sparkles size={18} className="text-brand group-hover:rotate-12 transition-transform" />
            <span className="font-semibold text-sm text-white">Upgrade</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider bg-brand text-white px-1.5 py-0.5 rounded">
            Soon
          </span>
        </button>
      ) : (
        /* ── HERO UPGRADE BUTTON ── */
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-brand/20 active:scale-95 group"
        >
          <Sparkles size={14} className="text-white group-hover:rotate-12 transition-transform" />
          <span>Upgrade</span>
          <span className="text-[10px] font-bold uppercase tracking-wider bg-black/40 px-1.5 py-0.5 rounded border border-white/20">
            Soon
          </span>
        </button>
      )}

      {/* ── MODAL DIALOG ── */}
      {open && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[300] flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl w-full max-w-5xl my-8 overflow-hidden shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-[#181818] bg-[#0c0c0c]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand">PodGuide Membership</span>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest bg-[#151515] border border-[#222] px-2 py-0.5 rounded">
                    Plans & Tiers
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                  Choose your medical study plan
                </h2>
                <p className="text-xs text-gray-400 mt-1 max-w-xl">
                  Unlock advanced AI synthesis, unlimited medical document uploads, high-yield clinical question banks, and cohort collaboration.
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-xl bg-[#141414] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                title="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Plans Grid */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {PLANS.map(plan => {
                const isPro = plan.id === "pro"
                const isUltra = plan.id === "ultra"

                return (
                  <div
                    key={plan.id}
                    className={`rounded-2xl p-5 flex flex-col justify-between transition-all relative ${
                      isPro
                        ? "bg-[#0e0e0e] border-2 border-brand shadow-lg shadow-brand/10"
                        : "bg-[#0c0c0c] border border-[#1a1a1a] hover:border-[#2b2b2b]"
                    }`}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-sm font-bold text-white flex items-center gap-1.5">
                          {isPro || isUltra ? <Crown size={14} className="text-brand" /> : null}
                          {plan.name}
                        </span>
                        {plan.badge && (
                          <span
                            className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${
                              plan.isCurrent
                                ? "bg-[#181818] text-gray-400 border-[#262626]"
                                : "bg-brand/10 text-brand border-brand/30"
                            }`}
                          >
                            {plan.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-[11px] text-gray-400 leading-relaxed mb-4 min-h-[32px]">
                        {plan.tagline}
                      </p>

                      {/* Divider */}
                      <div className="h-px bg-[#181818] mb-4" />

                      {/* Feature List */}
                      <ul className="space-y-2.5 mb-6 text-xs text-gray-300">
                        {plan.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-[11px] leading-relaxed">
                            <span className="w-3.5 h-3.5 rounded-full bg-[#181818] border border-[#262626] flex items-center justify-center flex-shrink-0 mt-0.5 text-brand">
                              <Check size={9} />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Action */}
                    <div>
                      <button
                        disabled
                        className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          plan.isCurrent
                            ? "bg-[#161616] border border-[#262626] text-gray-400 cursor-default"
                            : isPro
                              ? "bg-brand text-white opacity-80 cursor-default shadow-sm"
                              : "bg-[#161616] border border-[#222] text-gray-400 cursor-default"
                        }`}
                      >
                        {plan.buttonText}
                      </button>
                      {!plan.isCurrent && (
                        <p className="text-center text-[10px] text-gray-500 font-semibold mt-2">
                          Registration opening soon
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#080808] border-t border-[#181818] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
              <div className="flex items-center gap-2">
                <Shield size={13} className="text-brand flex-shrink-0" />
                <span>All medical students currently enjoy free early-access features across the platform.</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-xs font-bold text-gray-400 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
