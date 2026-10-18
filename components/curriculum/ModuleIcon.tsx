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
  Apple,
  Zap,
  Smile,
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

interface IconConfig {
  icon: LucideIcon
  colorClass: string
  bgClass: string
  borderClass: string
}

function resolveIconConfig(name = "", code = ""): IconConfig {
  const text = `${code} ${name}`.toLowerCase()

  // 1. Obstetrics, Gynaecology, Maternal Health, Midwifery
  if (
    text.includes("obstetric") ||
    text.includes("gynaecol") ||
    text.includes("gynecol") ||
    text.includes("maternal") ||
    text.includes("midwi") ||
    text.includes("labour") ||
    text.includes("delivery")
  ) {
    return {
      icon: Baby,
      colorClass: "text-rose-400",
      bgClass: "bg-rose-500/10",
      borderClass: "border-rose-500/20",
    }
  }

  // 2. Paediatrics / Child Health
  if (
    text.includes("paediatric") ||
    text.includes("pediatric") ||
    text.includes("child health") ||
    text.includes("neonat")
  ) {
    return {
      icon: Baby,
      colorClass: "text-amber-400",
      bgClass: "bg-amber-500/10",
      borderClass: "border-amber-500/20",
    }
  }

  // 3. Global Health / Public Health / Community Health / Epidemiology
  if (
    text.includes("global health") ||
    text.includes("public health") ||
    text.includes("epidemiolog") ||
    text.includes("community health") ||
    text.includes("community medicine")
  ) {
    return {
      icon: Globe,
      colorClass: "text-sky-400",
      bgClass: "bg-sky-500/10",
      borderClass: "border-sky-500/20",
    }
  }

  // 4. Forensic Medicine / Medical Ethics & Law / Jurisprudence
  if (
    text.includes("forensic") ||
    text.includes("ethics") ||
    text.includes("jurisprudence") ||
    text.includes("medico-legal") ||
    text.includes("courtroom")
  ) {
    return {
      icon: Scale,
      colorClass: "text-purple-400",
      bgClass: "bg-purple-500/10",
      borderClass: "border-purple-500/20",
    }
  }

  // 5. Surgery / Orthopaedics / Operative
  if (
    text.includes("surgery") ||
    text.includes("surgical") ||
    text.includes("orthopaedic") ||
    text.includes("operative")
  ) {
    return {
      icon: Scissors,
      colorClass: "text-red-400",
      bgClass: "bg-red-500/10",
      borderClass: "border-red-500/20",
    }
  }

  // 6. Internal Medicine / Senior Medicine / Clinical Practice
  if (
    text.includes("internal medicine") ||
    text.includes("clinical medicine") ||
    text.includes("ward") ||
    text.includes("health assessment") ||
    text.includes("doctor")
  ) {
    return {
      icon: Stethoscope,
      colorClass: "text-blue-400",
      bgClass: "bg-blue-500/10",
      borderClass: "border-blue-500/20",
    }
  }

  // 7. Psychiatry / Psychology / Behavioural Sciences
  if (
    text.includes("psychiat") ||
    text.includes("behavioral") ||
    text.includes("behavioural") ||
    text.includes("psycholog") ||
    text.includes("mental")
  ) {
    return {
      icon: Brain,
      colorClass: "text-indigo-400",
      bgClass: "bg-indigo-500/10",
      borderClass: "border-indigo-500/20",
    }
  }

  // 8. Pharmacology / Pharmacy / Pharmacotherapeutics / Toxicology / Drugs
  if (
    text.includes("pharmacol") ||
    text.includes("pharmacy") ||
    text.includes("toxicolog") ||
    text.includes("pharmacokinetic") ||
    text.includes("pharmacotherap") ||
    text.includes("medicinal") ||
    text.includes("drug")
  ) {
    return {
      icon: Pill,
      colorClass: "text-emerald-400",
      bgClass: "bg-emerald-500/10",
      borderClass: "border-emerald-500/20",
    }
  }

  // 9. Anatomy / Gross Anatomy / Musculoskeletal
  if (
    text.includes("anatomy") ||
    text.includes("bone") ||
    text.includes("skeletal")
  ) {
    return {
      icon: Bone,
      colorClass: "text-orange-400",
      bgClass: "bg-orange-500/10",
      borderClass: "border-orange-500/20",
    }
  }

  // 10. Pathology / Histology / Microbiology / Embryology
  if (
    text.includes("histolog") ||
    text.includes("patholog") ||
    text.includes("microbiol") ||
    text.includes("embryolog") ||
    text.includes("parasitol") ||
    text.includes("virolog")
  ) {
    return {
      icon: Microscope,
      colorClass: "text-teal-400",
      bgClass: "bg-teal-500/10",
      borderClass: "border-teal-500/20",
    }
  }

  // 11. Haematology / Blood
  if (
    text.includes("haematolog") ||
    text.includes("hematolog") ||
    text.includes("blood")
  ) {
    return {
      icon: Droplet,
      colorClass: "text-red-400",
      bgClass: "bg-red-500/10",
      borderClass: "border-red-500/20",
    }
  }

  // 12. Physiology / Cardiology / Cardiovascular
  if (
    text.includes("physiol") ||
    text.includes("cardio") ||
    text.includes("heart") ||
    text.includes("pulse")
  ) {
    return {
      icon: HeartPulse,
      colorClass: "text-pink-400",
      bgClass: "bg-pink-500/10",
      borderClass: "border-pink-500/20",
    }
  }

  // 13. Biochemistry / Biophysics / Chemical
  if (
    text.includes("biochem") ||
    text.includes("biophysic") ||
    text.includes("chemical")
  ) {
    return {
      icon: FlaskConical,
      colorClass: "text-violet-400",
      bgClass: "bg-violet-500/10",
      borderClass: "border-violet-500/20",
    }
  }

  // 14. Immunology
  if (text.includes("immunol") || text.includes("defense")) {
    return {
      icon: Shield,
      colorClass: "text-cyan-400",
      bgClass: "bg-cyan-500/10",
      borderClass: "border-cyan-500/20",
    }
  }

  // 15. Heritage-Based Medicine
  if (text.includes("heritage")) {
    return {
      icon: Sparkles,
      colorClass: "text-amber-400",
      bgClass: "bg-amber-500/10",
      borderClass: "border-amber-500/20",
    }
  }

  // 16. Emergency / Critical Care / Trauma
  if (
    text.includes("emergency") ||
    text.includes("critical care") ||
    text.includes("trauma") ||
    text.includes("intensive")
  ) {
    return {
      icon: Activity,
      colorClass: "text-red-400",
      bgClass: "bg-red-500/10",
      borderClass: "border-red-500/20",
    }
  }

  // 17. Research Methods
  if (text.includes("research")) {
    return {
      icon: FileText,
      colorClass: "text-gray-400",
      bgClass: "bg-gray-500/10",
      borderClass: "border-gray-500/20",
    }
  }

  // 18. Dentistry / Dental
  if (text.includes("dentist") || text.includes("dental") || text.includes("oral")) {
    return {
      icon: Smile,
      colorClass: "text-cyan-400",
      bgClass: "bg-cyan-500/10",
      borderClass: "border-cyan-500/20",
    }
  }

  // 19. Ophthalmology / Eye
  if (text.includes("eye") || text.includes("ophthalmol") || text.includes("optometr")) {
    return {
      icon: Eye,
      colorClass: "text-emerald-400",
      bgClass: "bg-emerald-500/10",
      borderClass: "border-emerald-500/20",
    }
  }

  // 20. Nutrition & Dietetics
  if (text.includes("nutrition") || text.includes("diet")) {
    return {
      icon: Apple,
      colorClass: "text-green-400",
      bgClass: "bg-green-500/10",
      borderClass: "border-green-500/20",
    }
  }

  // 21. Leadership
  if (text.includes("leadership") || text.includes("management")) {
    return {
      icon: Award,
      colorClass: "text-amber-400",
      bgClass: "bg-amber-500/10",
      borderClass: "border-amber-500/20",
    }
  }

  // 22. Physiotherapy
  if (text.includes("physiotherap") || text.includes("rehabilitat")) {
    return {
      icon: Zap,
      colorClass: "text-teal-400",
      bgClass: "bg-teal-500/10",
      borderClass: "border-teal-500/20",
    }
  }

  // Default Medical Icon
  return {
    icon: BookOpen,
    colorClass: "text-brand",
    bgClass: "bg-brand/10",
    borderClass: "border-brand/20",
  }
}

export function ModuleIcon({
  name = "",
  code = "",
  size = 18,
  showContainer = true,
  containerClassName = "",
  className = "",
}: ModuleIconProps) {
  const config = resolveIconConfig(name, code)
  const IconComponent = config.icon

  if (!showContainer) {
    return <IconComponent size={size} className={`${config.colorClass} ${className}`} />
  }

  return (
    <div
      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all flex-shrink-0 shadow-sm ${config.bgClass} ${config.borderClass} ${containerClassName}`}
    >
      <IconComponent
        size={size}
        className={`${config.colorClass} group-hover:scale-110 transition-transform ${className}`}
      />
    </div>
  )
}
