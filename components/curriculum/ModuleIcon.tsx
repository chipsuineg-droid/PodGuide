import React from "react"
import {
  Baby,
  Globe,
  Scale,
  Scissors,
  Stethoscope,
  Brain,
  Pill,
  Bone,
  Microscope,
  HeartPulse,
  Droplet,
  Shield,
  FlaskConical,
  Sparkles,
  Activity,
  FileText,
  Award,
  Eye,
  Zap,
  BookOpen,
  GraduationCap,
  type LucideIcon,
} from "lucide-react"

interface ModuleIconProps {
  name?: string
  code?: string
  size?: number
  showContainer?: boolean
  containerClassName?: string
  className?: string
}

function resolveIcon(name = "", code = ""): LucideIcon {
  const text = `${code} ${name}`.toLowerCase()

  if (
    text.includes("obstetric") ||
    text.includes("gynaecol") ||
    text.includes("gynecol") ||
    text.includes("maternal") ||
    text.includes("midwi") ||
    text.includes("labour") ||
    text.includes("delivery") ||
    text.includes("paediatric") ||
    text.includes("pediatric") ||
    text.includes("child health") ||
    text.includes("neonat")
  ) {
    return Baby
  }

  if (
    text.includes("global health") ||
    text.includes("public health") ||
    text.includes("epidemiolog") ||
    text.includes("community health") ||
    text.includes("community medicine")
  ) {
    return Globe
  }

  if (
    text.includes("forensic") ||
    text.includes("ethics") ||
    text.includes("jurisprudence") ||
    text.includes("medico-legal") ||
    text.includes("courtroom")
  ) {
    return Scale
  }

  if (
    text.includes("surgery") ||
    text.includes("surgical") ||
    text.includes("orthopaedic") ||
    text.includes("operative")
  ) {
    return Scissors
  }

  if (
    text.includes("internal medicine") ||
    text.includes("clinical medicine") ||
    text.includes("ward") ||
    text.includes("health assessment") ||
    text.includes("doctor")
  ) {
    return Stethoscope
  }

  if (
    text.includes("psychiat") ||
    text.includes("behavioral") ||
    text.includes("behavioural") ||
    text.includes("psycholog") ||
    text.includes("mental")
  ) {
    return Brain
  }

  if (
    text.includes("pharmacol") ||
    text.includes("pharmacy") ||
    text.includes("toxicolog") ||
    text.includes("pharmacokinetic") ||
    text.includes("pharmacotherap") ||
    text.includes("medicinal") ||
    text.includes("drug")
  ) {
    return Pill
  }

  if (
    text.includes("anatomy") ||
    text.includes("bone") ||
    text.includes("skeletal")
  ) {
    return Bone
  }

  if (
    text.includes("histolog") ||
    text.includes("patholog") ||
    text.includes("microbiol") ||
    text.includes("embryolog") ||
    text.includes("parasitol") ||
    text.includes("virolog")
  ) {
    return Microscope
  }

  if (
    text.includes("haematolog") ||
    text.includes("hematolog") ||
    text.includes("blood")
  ) {
    return Droplet
  }

  if (
    text.includes("physiol") ||
    text.includes("cardio") ||
    text.includes("heart") ||
    text.includes("pulse")
  ) {
    return HeartPulse
  }

  if (
    text.includes("biochem") ||
    text.includes("biophysic") ||
    text.includes("chemical")
  ) {
    return FlaskConical
  }

  if (text.includes("immunol") || text.includes("defense")) {
    return Shield
  }

  if (text.includes("heritage")) {
    return Sparkles
  }

  if (
    text.includes("emergency") ||
    text.includes("critical care") ||
    text.includes("trauma") ||
    text.includes("intensive")
  ) {
    return Activity
  }

  if (text.includes("research")) {
    return FileText
  }

  if (text.includes("eye") || text.includes("ophthalmol") || text.includes("optometr")) {
    return Eye
  }

  if (text.includes("leadership") || text.includes("management")) {
    return Award
  }

  if (text.includes("physiotherap") || text.includes("rehabilitat")) {
    return Zap
  }

  return BookOpen
}

export function ModuleIcon({
  name = "",
  code = "",
  size = 18,
  showContainer = true,
  containerClassName = "",
  className = "",
}: ModuleIconProps) {
  const IconComponent = resolveIcon(name, code)

  if (!showContainer) {
    return <IconComponent size={size} className={`text-red-500 ${className}`} />
  }

  return (
    <div
      className={`w-10 h-10 rounded-xl flex items-center justify-center bg-[#151515] border border-[#262626] group-hover:border-red-600/60 group-hover:bg-[#1a1212] transition-colors flex-shrink-0 shadow-sm ${containerClassName}`}
    >
      <IconComponent
        size={size}
        className={`text-red-500 group-hover:text-red-400 transition-colors ${className}`}
      />
    </div>
  )
}
