"use client"
import { useEffect, useState, useMemo, useCallback, useRef } from "react"
import { createClient } from "@/lib/supabase/client"
import {
  ArrowLeft, ChevronDown, ChevronRight, RotateCcw, Trophy,
  BookOpen, Loader2, Clock, Pause, Play, CheckCircle, XCircle,
  History, BarChart2, RefreshCw, Check, Sparkles, Share2, Award,
  HelpCircle, UserCheck
} from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

// ─── Types ───────────────────────────────────────────────────────────────────

export type QuestionType = "multiple_true_false" | "sba" | "true_false" | "abcde"
export type Difficulty = "easy" | "medium" | "hard" | "mixed"
export type TimingMode = "off" | "per_question" | "whole_session"
export type Programme = "mbchb" | "bds"
export type Step = "courses" | "config" | "quiz" | "results"

export interface MCQOption {
  id: string
  text: string
  is_correct: boolean
}

export interface MCQQuestion {
  id: string
  stem: string
  question_type: "sba" | "true_false" | "multiple_true_false"
  difficulty: "easy" | "medium" | "hard"
  subject: string
  section: string
  programme: "mbchb" | "bds" | "both"
  explanation: string
  reference: string
  options: MCQOption[]
}

export interface MCQCourseSection {
  id: string
  name: string
  questionCount: number
}

export interface MCQCourse {
  id: string
  name: string
  icon: React.ReactNode
  sections: MCQCourseSection[]
  programme: "mbchb" | "bds" | "both"
  textbook: string
}

export interface SessionConfig {
  courseId: string
  courseName: string
  section: string   // "all" or section id
  questionType: QuestionType
  difficulty: Difficulty
  count: 10 | 20 | 50 | 100
  timingMode: TimingMode
  secondsPerQuestion: number
  allowPause: boolean
  programme: Programme
}

export interface SessionAnswer {
  questionId: string
  selectedOptionId: string | null
  mtfSelections?: Record<string, "T" | "F">
  isCorrect: boolean
  subScore?: { correct: number; total: number }
}

// ─── Course SVG Icons (PodMyth styled) ────────────────────────────────────────

const CourseIcons = {
  stethoscope: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>
    </svg>
  ),
  baby: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/>
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>
    </svg>
  ),
  scissors: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>
    </svg>
  ),
  heart: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  ),
  pill: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>
    </svg>
  ),
  bone: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/>
    </svg>
  ),
  activity: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  microscope: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/>
      <path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
    </svg>
  ),
  layers: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
    </svg>
  ),
  flask: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/>
      <path d="M8.5 2h7"/><path d="M7 16h10"/>
    </svg>
  ),
  users: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  brain: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
      <path d="M12 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
    </svg>
  ),
  shield: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"/>
    </svg>
  ),
}

// ─── Course Definitions (with designated textbooks) ───────────────────────────

export const COURSES: MCQCourse[] = [
  {
    id: "internal-medicine",
    name: "Internal Medicine",
    icon: CourseIcons.stethoscope,
    textbook: "Macleod's Clinical Examination (14th Ed.)",
    programme: "mbchb",
    sections: [
      { id: "cardiovascular", name: "Cardiovascular Medicine", questionCount: 850 },
      { id: "respiratory", name: "Respiratory Medicine", questionCount: 780 },
      { id: "gastroenterology", name: "Gastroenterology & Hepatology", questionCount: 720 },
      { id: "nephrology", name: "Nephrology & Renal Medicine", questionCount: 650 },
      { id: "endocrinology", name: "Endocrinology & Diabetes", questionCount: 700 },
      { id: "haematology", name: "Haematology & Transfusion", questionCount: 580 },
      { id: "neurology", name: "Clinical Neurology", questionCount: 690 },
      { id: "rheumatology", name: "Rheumatology & Bone", questionCount: 480 },
      { id: "infectious-disease", name: "Infectious Diseases & HIV", questionCount: 760 },
      { id: "oncology", name: "Medical Oncology", questionCount: 420 },
      { id: "dermatology-im", name: "Dermatological Manifestations", questionCount: 380 },
    ],
  },
  {
    id: "paediatrics",
    name: "Paediatrics",
    icon: CourseIcons.baby,
    textbook: "Coovadia's Paediatrics and Child Health (7th Ed.)",
    programme: "mbchb",
    sections: [
      { id: "neonatology", name: "Neonatology & Perinatal Care", questionCount: 820 },
      { id: "nutrition-growth", name: "Nutrition, Malnutrition & Growth", questionCount: 640 },
      { id: "respiratory-paeds", name: "Respiratory Paediatrics", questionCount: 710 },
      { id: "cardiovascular-paeds", name: "Congenital Heart Diseases", questionCount: 580 },
      { id: "infectious-diseases-paeds", name: "Childhood Infections & Malaria", questionCount: 890 },
      { id: "neurodevelopment", name: "Neurodevelopment & Seizures", questionCount: 530 },
      { id: "gastro-nutrition", name: "Paediatric Gastroenterology", questionCount: 620 },
      { id: "haematology-paeds", name: "Paediatric Haematology & Oncology", questionCount: 480 },
      { id: "endocrinology-paeds", name: "Paediatric Endocrinology", questionCount: 450 },
      { id: "immunodeficiency", name: "Immunodeficiency & HIV in Children", questionCount: 390 },
    ],
  },
  {
    id: "surgery",
    name: "Surgery",
    icon: CourseIcons.scissors,
    textbook: "Bailey & Love's Short Practice of Surgery (27th Ed.)",
    programme: "mbchb",
    sections: [
      { id: "general-surgery", name: "Principles of Surgery, Shock & Sepsis", questionCount: 760 },
      { id: "upper-gi", name: "Upper GI & Oesophagogastric Surgery", questionCount: 640 },
      { id: "lower-gi", name: "Colorectal Surgery & Acute Abdomen", questionCount: 680 },
      { id: "hepatobiliary", name: "Hepatobiliary & Pancreatic Surgery", questionCount: 580 },
      { id: "breast-surgery", name: "Breast Diseases & Endocrine Surgery", questionCount: 420 },
      { id: "vascular", name: "Vascular Surgery & Aneurysms", questionCount: 520 },
      { id: "orthopaedics", name: "Orthopaedic Surgery & Trauma", questionCount: 740 },
      { id: "urology", name: "Urology & Genitourinary Surgery", questionCount: 560 },
      { id: "neurosurgery", name: "Neurosurgery & Head Injuries", questionCount: 380 },
    ],
  },
  {
    id: "obstetrics-gynaecology",
    name: "Obstetrics & Gynaecology",
    icon: CourseIcons.heart,
    textbook: "WHO Maternal & Reproductive Health Guidelines",
    programme: "mbchb",
    sections: [
      { id: "normal-obstetrics", name: "Normal Obstetrics & Physiology of Pregnancy", questionCount: 720 },
      { id: "antenatal-care", name: "Antenatal Care & Fetal Surveillance", questionCount: 640 },
      { id: "labour-delivery", name: "Labour, Delivery & Partogram", questionCount: 680 },
      { id: "obstetric-complications", name: "Obstetric Emergencies (PPH, Pre-eclampsia)", questionCount: 760 },
      { id: "gynaecology", name: "General Gynaecology & Menstrual Disorders", questionCount: 580 },
      { id: "reproductive-health", name: "Reproductive Health & Infertility", questionCount: 490 },
      { id: "family-planning", name: "Family Planning & Contraception", questionCount: 420 },
      { id: "oncological-gynae", name: "Gynaecological Oncology", questionCount: 380 },
      { id: "neonatal-resuscitation", name: "Perinatal Mortality & Resuscitation", questionCount: 460 },
    ],
  },
  {
    id: "anatomy",
    name: "Anatomy",
    icon: CourseIcons.bone,
    textbook: "Snell's Clinical Anatomy by Regions (10th Ed.)",
    programme: "both",
    sections: [
      { id: "upper-limb", name: "Upper Limb & Brachial Plexus", questionCount: 820 },
      { id: "lower-limb", name: "Lower Limb & Sciatic Nerve", questionCount: 780 },
      { id: "head-neck", name: "Head & Neck & Cranial Nerves", questionCount: 920 },
      { id: "thorax", name: "Thorax, Heart & Mediastinum", questionCount: 680 },
      { id: "abdomen-pelvis", name: "Abdomen, Peritoneum & Pelvis", questionCount: 760 },
      { id: "neuroanatomy", name: "Neuroanatomy & Spinal Cord", questionCount: 840 },
      { id: "back-vertebral", name: "Vertebral Column & Back", questionCount: 520 },
      { id: "surface-anatomy", name: "Surface & Radiological Anatomy", questionCount: 380 },
    ],
  },
  {
    id: "physiology",
    name: "Physiology",
    icon: CourseIcons.activity,
    textbook: "Ganong's Review of Medical Physiology (26th Ed.)",
    programme: "both",
    sections: [
      { id: "cardiovascular-physiology", name: "Cardiovascular Physiology", questionCount: 920 },
      { id: "respiratory-physiology", name: "Respiratory Physiology", questionCount: 840 },
      { id: "renal-physiology", name: "Renal Physiology & Body Fluids", questionCount: 780 },
      { id: "gi-physiology", name: "Gastrointestinal Physiology", questionCount: 680 },
      { id: "neurophysiology", name: "Neurophysiology & Sensation", questionCount: 860 },
      { id: "endocrine-physiology", name: "Endocrine & Metabolic Physiology", questionCount: 740 },
      { id: "cell-physiology", name: "General & Cellular Physiology", questionCount: 580 },
      { id: "blood-immunology", name: "Blood Cells & Immunity", questionCount: 620 },
      { id: "reproductive-physiology", name: "Reproductive Physiology", questionCount: 540 },
    ],
  },
  {
    id: "histology",
    name: "Histology",
    icon: CourseIcons.microscope,
    textbook: "Junqueira's Basic Histology: Text & Atlas (16th Ed.)",
    programme: "both",
    sections: [
      { id: "epithelium", name: "Epithelial Tissue & Cell Junctions", questionCount: 580 },
      { id: "connective-tissue", name: "Connective Tissue & Extracellular Matrix", questionCount: 620 },
      { id: "muscle-tissue", name: "Skeletal, Cardiac & Smooth Muscle", questionCount: 540 },
      { id: "nervous-tissue", name: "Nerve Tissue & Neuroglia", questionCount: 680 },
      { id: "gi-histo", name: "Digestive Tract & Glands", questionCount: 540 },
      { id: "urinary-histo", name: "Urinary System & Glomerulus", questionCount: 420 },
      { id: "endocrine-histo", name: "Endocrine Organs & Pituitary", questionCount: 380 },
      { id: "reproductive-histo", name: "Male & Female Reproductive Tracts", questionCount: 440 },
    ],
  },
  {
    id: "embryology",
    name: "Embryology",
    icon: CourseIcons.layers,
    textbook: "Langman's Medical Embryology (14th Ed.)",
    programme: "both",
    sections: [
      { id: "gametogenesis", name: "Gametogenesis & Fertilisation", questionCount: 420 },
      { id: "cleavage-germ-layers", name: "Cleavage, Blastocyst & Germ Layers", questionCount: 480 },
      { id: "cardiovascular-dev", name: "Cardiovascular System Development", questionCount: 640 },
      { id: "cns-dev", name: "Neural Tube & Brain Development", questionCount: 580 },
      { id: "urogenital-dev", name: "Urogenital System & Kidney Ascent", questionCount: 520 },
      { id: "pharyngeal-apparatus", name: "Pharyngeal Arches & Craniofacial", questionCount: 510 },
      { id: "limb-dev", name: "Limb Development & Somites", questionCount: 380 },
      { id: "fetal-circulation", name: "Fetal Membranes & Placenta", questionCount: 440 },
    ],
  },
  {
    id: "histopathology",
    name: "Histopathology",
    icon: CourseIcons.flask,
    textbook: "Robbins Basic Pathology (10th Ed.)",
    programme: "both",
    sections: [
      { id: "cell-injury", name: "Cell Injury, Necrosis & Apoptosis", questionCount: 720 },
      { id: "inflammation", name: "Acute & Chronic Inflammation", questionCount: 680 },
      { id: "neoplasia", name: "Neoplasia & Carcinogenesis", questionCount: 840 },
      { id: "vascular-path", name: "Vascular Pathology & Atherosclerosis", questionCount: 580 },
      { id: "cardiac-path", name: "Ischaemic Heart Disease & Myocarditis", questionCount: 620 },
      { id: "gi-path", name: "GI Pathology & Gastritis / Colitis", questionCount: 660 },
      { id: "liver-path", name: "Liver Pathology & Cirrhosis", questionCount: 580 },
      { id: "renal-path", name: "Glomerulonephritis & Nephrotic Syndrome", questionCount: 520 },
    ],
  },
  {
    id: "pharmacology",
    name: "Pharmacology",
    icon: CourseIcons.pill,
    textbook: "Katzung's Basic & Clinical Pharmacology (15th Ed.)",
    programme: "both",
    sections: [
      { id: "general-pharmacology", name: "Pharmacokinetics & Pharmacodynamics", questionCount: 580 },
      { id: "autonomic", name: "Autonomic Nervous System Agents", questionCount: 640 },
      { id: "cardiovascular-drugs", name: "Antihypertensives & Antiarrhythmics", questionCount: 720 },
      { id: "antimicrobials", name: "Antimicrobials, Beta-lactams & Antifungals", questionCount: 860 },
      { id: "cns-pharmacology", name: "CNS Drugs, Sedatives & Analgesics", questionCount: 680 },
      { id: "anti-inflammatory", name: "NSAIDs, DMARDs & Steroids", questionCount: 520 },
      { id: "endocrine-pharmacology", name: "Insulin, Oral Hypoglycaemics & Thyroid", questionCount: 480 },
    ],
  },
  {
    id: "community-medicine",
    name: "Community Medicine",
    icon: CourseIcons.users,
    textbook: "WHO Public Health & Epidemiological Guidelines",
    programme: "both",
    sections: [
      { id: "epidemiology", name: "Epidemiological Studies & Risk Measures", questionCount: 680 },
      { id: "biostatistics", name: "Biostatistics, P-values & Confidence Intervals", questionCount: 540 },
      { id: "communicable-disease", name: "Outbreak Investigation & Surveillance", questionCount: 640 },
      { id: "maternal-child-health", name: "Maternal & Child Health Indicators", questionCount: 560 },
      { id: "environmental-health", name: "Water, Sanitation & Environmental Health", questionCount: 380 },
      { id: "ncd", name: "Non-Communicable Diseases & Prevention", questionCount: 580 },
      { id: "health-systems", name: "Health Systems & Universal Health Coverage", questionCount: 460 },
    ],
  },
  {
    id: "psychiatry",
    name: "Psychiatry",
    icon: CourseIcons.brain,
    textbook: "ICD-11 / DSM-5 Clinical Psychiatry Standards",
    programme: "mbchb",
    sections: [
      { id: "mood-disorders", name: "Depressive & Bipolar Disorders", questionCount: 580 },
      { id: "psychotic-disorders", name: "Schizophrenia & Psychotic Disorders", questionCount: 540 },
      { id: "anxiety-disorders", name: "Anxiety, Phobias & OCD", questionCount: 520 },
      { id: "substance-use", name: "Substance Use & Addictions", questionCount: 480 },
      { id: "neurocognitive", name: "Delirium & Dementia", questionCount: 440 },
      { id: "emergency-psychiatry", name: "Suicide Risk & Emergency Psychiatry", questionCount: 380 },
    ],
  },
  {
    id: "dermatology",
    name: "Dermatology",
    icon: CourseIcons.shield,
    textbook: "Rook's Textbook of Dermatology (9th Ed.)",
    programme: "mbchb",
    sections: [
      { id: "inflammatory-dermatoses", name: "Eczema, Psoriasis & Lichen Planus", questionCount: 580 },
      { id: "skin-infections", name: "Bacterial, Viral & Fungal Skin Infections", questionCount: 540 },
      { id: "skin-tumours", name: "Benign & Malignant Skin Lesions", questionCount: 460 },
      { id: "autoimmune-skin", name: "Blistering Disorders & Cutaneous Lupus", questionCount: 380 },
      { id: "skin-manifestations", name: "Cutaneous Signs of Systemic Disease", questionCount: 420 },
    ],
  },
]

function getTotalQuestions(course: MCQCourse): number {
  return course.sections.reduce((sum, s) => sum + s.questionCount, 0)
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, "0")}`
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function QuestionsPage() {
  const supabase = createClient()
  const [user, setUser] = useState<any>(null)
  const [step, setStep] = useState<Step>("courses")
  const [programme, setProgramme] = useState<Programme>("mbchb")
  const [selectedCourse, setSelectedCourse] = useState<MCQCourse | null>(null)
  const [config, setConfig] = useState<SessionConfig | null>(null)
  const [questions, setQuestions] = useState<MCQQuestion[]>([])
  const [loadingQuestions, setLoadingQuestions] = useState(false)
  const [inProgressSession, setInProgressSession] = useState<any>(null)
  const [showHistory, setShowHistory] = useState(false)
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  const [history, setHistory] = useState<any[]>([])

  // Quiz state
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<SessionAnswer[]>([])
  const [revealed, setRevealed] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [mtfAnswers, setMtfAnswers] = useState<Record<string, "T" | "F">>({})
  const [paused, setPaused] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const sessionIdRef = useRef<string | null>(null)

  // Auth & In-Progress Check
  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getUser()
      if (data?.user) {
        setUser(data.user)
        try {
          const { data: sessions } = await supabase
            .from("quiz_sessions")
            .select("*")
            .eq("user_id", data.user.id)
            .eq("is_completed", false)
            .order("started_at", { ascending: false })
            .limit(1)
          if (sessions && sessions.length > 0) {
            setInProgressSession(sessions[0])
          }
        } catch {
          // Table may not exist yet if migration hasn't been run
        }
      }
    }
    init()
  }, [])

  // Timer logic
  useEffect(() => {
    if (step !== "quiz" || !config || paused || revealed) return
    if (config.timingMode === "off") return

    if (config.timingMode === "per_question") {
      setTimeLeft(config.secondsPerQuestion)
    }
  }, [currentIndex, step, config, paused, revealed])

  useEffect(() => {
    if (step !== "quiz" || !config || config.timingMode === "off" || paused || revealed) return

    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          handleReveal()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [currentIndex, paused, step, revealed, config])

  // Load questions
  const loadQuestions = useCallback(async (cfg: SessionConfig) => {
    setLoadingQuestions(true)
    try {
      const mod = await import("@/lib/data/mcq-bank")
      const mappedType = cfg.questionType === "abcde" ? "sba" : cfg.questionType
      const fetched = mod.getQuestionsByFilter({
        courseId: cfg.courseId,
        section: cfg.section === "all" ? undefined : cfg.section,
        questionType: mappedType as any,
        difficulty: cfg.difficulty,
        programme: cfg.programme,
        count: cfg.count,
      })
      setQuestions(fetched)

      // Record session in Supabase if logged in
      if (user) {
        try {
          const { data: session } = await supabase
            .from("quiz_sessions")
            .insert({
              user_id: user.id,
              course_id: cfg.courseId,
              course_name: cfg.courseName,
              section: cfg.section === "all" ? null : cfg.section,
              question_type: cfg.questionType,
              difficulty: cfg.difficulty,
              question_count: Math.min(fetched.length, cfg.count),
              question_ids: fetched.map(q => q.id),
              programme: cfg.programme,
              timing_mode: cfg.timingMode,
              seconds_per_question: cfg.secondsPerQuestion,
              allow_pause: cfg.allowPause,
            })
            .select("id")
            .single()
          if (session) sessionIdRef.current = session.id
        } catch {
          // Local fallback
        }
      }

      if (cfg.timingMode === "per_question") setTimeLeft(cfg.secondsPerQuestion)
      if (cfg.timingMode === "whole_session") setTimeLeft(cfg.count * 60)
    } catch (err) {
      console.error("Failed to load questions:", err)
      toast.error("Could not load questions. Please try again.")
    } finally {
      setLoadingQuestions(false)
    }
  }, [user, supabase])

  const startQuiz = useCallback(async (cfg: SessionConfig) => {
    setConfig(cfg)
    setCurrentIndex(0)
    setAnswers([])
    setRevealed(false)
    setSelectedOption(null)
    setMtfAnswers({})
    setPaused(false)
    setStep("quiz")
    await loadQuestions(cfg)
  }, [loadQuestions])

  // Answer handler for SBA / True-False
  const handleSelectOption = useCallback((optId: string) => {
    if (revealed) return
    setSelectedOption(optId)
  }, [revealed])

  // Answer handler for Multiple True/False sub-statement (T or F)
  const handleSetMtfAnswer = useCallback((optId: string, value: "T" | "F") => {
    if (revealed) return
    setMtfAnswers(prev => ({
      ...prev,
      [optId]: prev[optId] === value ? undefined as any : value,
    }))
  }, [revealed])

  // Reveal / Submit answer
  const handleReveal = useCallback(() => {
    if (revealed) return
    const q = questions[currentIndex]
    if (!q) return
    if (timerRef.current) clearInterval(timerRef.current)

    let isCorrect = false
    let subScore = undefined

    if (q.question_type === "multiple_true_false") {
      let correctCount = 0
      q.options.forEach(opt => {
        const userChoice = mtfAnswers[opt.id]
        const actual = opt.is_correct ? "T" : "F"
        if (userChoice === actual) correctCount++
      })
      subScore = { correct: correctCount, total: q.options.length }
      isCorrect = correctCount === q.options.length
    } else {
      const opt = q.options.find(o => o.id === selectedOption)
      isCorrect = opt?.is_correct ?? false
    }

    setRevealed(true)
    setAnswers(prev => [...prev, {
      questionId: q.id,
      selectedOptionId: selectedOption,
      mtfSelections: { ...mtfAnswers },
      isCorrect,
      subScore,
    }])

    if (user && sessionIdRef.current) {
      supabase.from("quiz_session_answers").insert({
        session_id: sessionIdRef.current,
        question_id: q.id,
        selected_option_id: selectedOption,
        is_correct: isCorrect,
      }).then(() => {})
    }
  }, [revealed, questions, currentIndex, selectedOption, mtfAnswers, user, supabase])

  // Move to next question or complete
  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      if (user && sessionIdRef.current) {
        const totalCorrect = answers.filter(a => a.isCorrect).length
        supabase.from("quiz_sessions").update({
          is_completed: true,
          completed_at: new Date().toISOString(),
          score: totalCorrect,
          current_index: questions.length,
        }).eq("id", sessionIdRef.current).then(() => {})
      }
      setStep("results")
    } else {
      setCurrentIndex(i => i + 1)
      setRevealed(false)
      setSelectedOption(null)
      setMtfAnswers({})
    }
  }, [currentIndex, questions.length, answers, user, supabase])

  const handleDiscardProgress = async () => {
    if (!inProgressSession || !user) return
    await supabase.from("quiz_sessions").delete().eq("id", inProgressSession.id)
    setInProgressSession(null)
    toast.success("In-progress quiz cleared")
  }

  const handleResumeSession = () => {
    toast.info("Resuming session...", {
      description: `Course: ${inProgressSession?.course_name}`
    })
    const course = COURSES.find(c => c.id === inProgressSession?.course_id)
    if (course) {
      setSelectedCourse(course)
      setStep("config")
    }
  }

  const loadHistory = async () => {
    if (!user) {
      toast.info("Sign in to view your completed quiz sessions")
      return
    }
    try {
      const { data } = await supabase
        .from("quiz_sessions")
        .select("*")
        .eq("user_id", user.id)
        .eq("is_completed", true)
        .order("completed_at", { ascending: false })
        .limit(20)
      setHistory(data || [])
    } catch {
      setHistory([])
    }
    setShowHistory(true)
  }

  const correctCount = answers.filter(a => a.isCorrect).length

  // ═══════════════════════════════════════════════════════════
  // STEP 1: COURSES GRID (Med Quiz Hub)
  // ═══════════════════════════════════════════════════════════
  if (step === "courses") {
    const visibleCourses = COURSES.filter(c =>
      c.programme === "both" || c.programme === programme
    )

    return (
      <div className="max-w-5xl mx-auto pb-24 space-y-6">
        {/* Top Header Card */}
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles size={12} /> AI-Powered MCQ Bank
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">Med Quiz</h1>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-2xl leading-relaxed">
                10,000+ AI-generated MCQs per subject across Medicine ({programme.toUpperCase()}).
                Pick a difficulty, choose your region or mixed bag, and test your clinical mastery.
              </p>
            </div>

            {/* Top Right Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={loadHistory}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141414] hover:bg-[#1a1a1a] border border-[#222] text-xs font-semibold text-gray-300 hover:text-white transition-colors"
              >
                <History size={14} className="text-gray-400" /> History
              </button>
              <button
                onClick={() => setShowLeaderboard(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141414] hover:bg-[#1a1a1a] border border-[#222] text-xs font-semibold text-gray-300 hover:text-white transition-colors"
              >
                <Trophy size={14} className="text-brand" /> Leaderboard
              </button>
            </div>
          </div>

          {/* Programme Switcher */}
          <div className="flex items-center gap-1 bg-[#141414] border border-[#222] p-1 rounded-xl w-fit">
            {(["mbchb", "bds"] as Programme[]).map(p => (
              <button
                key={p}
                onClick={() => setProgramme(p)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  programme === p
                    ? "bg-brand text-white shadow-sm shadow-brand/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {p === "mbchb" ? "MBChB" : "BDS (Dentistry)"}
              </button>
            ))}
          </div>
        </div>

        {/* Resume In-Progress Quiz Banner */}
        {inProgressSession && (
          <div className="bg-[#121212] border border-[#262626] rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                <RefreshCw size={15} />
              </div>
              <div>
                <p className="text-sm text-white font-semibold">Resume in-progress quiz</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {inProgressSession.course_name}
                  {inProgressSession.section ? ` · ${inProgressSession.section}` : " · All Sections"}
                  {` · ${inProgressSession.question_count} questions`}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDiscardProgress}
                className="text-xs text-gray-500 hover:text-white transition-colors px-3 py-1.5 font-medium"
              >
                Discard
              </button>
              <button
                onClick={handleResumeSession}
                className="bg-brand hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-md shadow-brand/20 flex items-center gap-1.5"
              >
                <Play size={12} fill="currentColor" /> Resume
              </button>
            </div>
          </div>
        )}

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {visibleCourses.map(course => (
            <button
              key={course.id}
              onClick={() => {
                setSelectedCourse(course)
                setStep("config")
              }}
              className="bg-[#0e0e0e] border border-[#1f1f1f] hover:border-[#333] hover:bg-[#121212] rounded-2xl p-5 text-left transition-all group flex flex-col justify-between space-y-4"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#161616] group-hover:bg-brand/10 border border-[#242424] group-hover:border-brand/30 flex items-center justify-center text-gray-300 group-hover:text-brand transition-all">
                  {course.icon}
                </div>
                <span className="text-[10px] uppercase font-bold text-gray-500 bg-[#141414] border border-[#222] px-2 py-0.5 rounded-md">
                  {course.programme === "both" ? "Core" : course.programme.toUpperCase()}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-white text-base group-hover:text-brand transition-colors">
                  {course.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {course.sections.length} sections · 10,000+ AI MCQs
                </p>
                <p className="text-[11px] text-gray-500 mt-2 truncate flex items-center gap-1">
                  <BookOpen size={11} className="text-gray-600 flex-shrink-0" />
                  {course.textbook}
                </p>
              </div>

              <div className="pt-2 border-t border-[#1a1a1a] flex items-center justify-between text-xs text-gray-400 group-hover:text-white">
                <span>Start Practice</span>
                <ChevronRight size={14} className="text-gray-600 group-hover:text-brand transition-transform group-hover:translate-x-0.5" />
              </div>
            </button>
          ))}
        </div>

        {/* History Modal */}
        {showHistory && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
            <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl w-full max-w-lg max-h-[75vh] overflow-hidden flex flex-col shadow-2xl">
              <div className="flex items-center justify-between p-5 border-b border-[#1f1f1f]">
                <div>
                  <h2 className="font-bold text-white text-base">Quiz Attempt History</h2>
                  <p className="text-xs text-gray-500">Your recent completed assessments</p>
                </div>
                <button onClick={() => setShowHistory(false)} className="text-gray-500 hover:text-white text-2xl leading-none">&times;</button>
              </div>
              <div className="overflow-y-auto flex-1 divide-y divide-[#161616]">
                {history.length === 0 ? (
                  <div className="text-center py-12 px-4">
                    <History size={32} className="text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm font-semibold">No quiz history recorded yet</p>
                    <p className="text-xs text-gray-600 mt-1">Complete a quiz session to track your performance over time.</p>
                  </div>
                ) : (
                  history.map(h => (
                    <div key={h.id} className="p-4 flex items-center justify-between gap-3 hover:bg-[#121212] transition-colors">
                      <div>
                        <p className="text-sm text-white font-semibold">{h.course_name}</p>
                        <p className="text-xs text-gray-500">{h.section || "All Sections"} · {h.question_count} Questions</p>
                        <p className="text-[10px] text-gray-600 mt-0.5">{new Date(h.completed_at).toLocaleString()}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-lg font-bold text-brand">
                          {h.question_count > 0 ? Math.round((h.score / h.question_count) * 100) : 0}%
                        </span>
                        <p className="text-[11px] text-gray-500">{h.score} / {h.question_count}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* Leaderboard Modal */}
        {showLeaderboard && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
            <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between p-5 border-b border-[#1f1f1f]">
                <div className="flex items-center gap-2">
                  <Trophy size={18} className="text-brand" />
                  <h2 className="font-bold text-white text-base">MBChB / BDS Leaderboard</h2>
                </div>
                <button onClick={() => setShowLeaderboard(false)} className="text-gray-500 hover:text-white text-2xl leading-none">&times;</button>
              </div>
              <div className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mx-auto">
                  <Award size={24} />
                </div>
                <h3 className="text-sm font-bold text-white">Weekly Study Rankings</h3>
                <p className="text-xs text-gray-400">
                  Compete with other medical and dental students across Zimbabwe and Southern Africa.
                  Rankings refresh every Sunday at midnight.
                </p>
                <div className="bg-[#141414] border border-[#222] rounded-xl p-3 text-xs text-gray-400">
                  Complete questions in Quiz Arena or Question Bank to earn points on the leaderboard.
                </div>
                <button
                  onClick={() => setShowLeaderboard(false)}
                  className="w-full bg-[#161616] hover:bg-[#202020] border border-[#2a2a2a] text-white text-xs font-bold py-2.5 rounded-xl transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════
  // STEP 2: SESSION CONFIG
  // ═══════════════════════════════════════════════════════════
  if (step === "config" && selectedCourse) {
    return (
      <SessionConfigView
        course={selectedCourse}
        programme={programme}
        onBack={() => setStep("courses")}
        onStart={startQuiz}
      />
    )
  }

  // ═══════════════════════════════════════════════════════════
  // STEP 3: QUIZ SESSION
  // ═══════════════════════════════════════════════════════════
  if (step === "quiz" && config) {
    if (loadingQuestions) {
      return (
        <div className="flex flex-col items-center justify-center h-80 space-y-3">
          <Loader2 size={32} className="animate-spin text-brand" />
          <p className="text-sm text-gray-300 font-semibold">{config.courseName}</p>
          <p className="text-xs text-gray-500">Preparing {config.count} curriculum-aligned questions...</p>
        </div>
      )
    }

    if (questions.length === 0) {
      return (
        <div className="max-w-lg mx-auto text-center py-16 bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-8 space-y-4">
          <p className="text-white font-bold text-lg">No questions found</p>
          <p className="text-gray-400 text-xs">
            We are indexing additional questions for this exact combination. Try choosing &quot;All Sections&quot; or another question format.
          </p>
          <button
            onClick={() => setStep("config")}
            className="bg-brand text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-red-700 transition-colors"
          >
            Back to Configuration
          </button>
        </div>
      )
    }

    const q = questions[currentIndex]
    const progress = ((currentIndex + 1) / questions.length) * 100
    const isMTF = q.question_type === "multiple_true_false"
    const isTF = q.question_type === "true_false"

    return (
      <div className="max-w-3xl mx-auto pb-24 space-y-5">
        {/* Top Quiz Header: Progress + Timer + Pause */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => {
              if (config.allowPause) setPaused(p => !p)
            }}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white bg-[#111] border border-[#222] px-3 py-2 rounded-xl transition-colors"
          >
            {paused ? <Play size={13} fill="currentColor" /> : <Pause size={13} />}
            {paused ? "Resume" : "Pause"}
          </button>

          <div className="flex-1 space-y-1.5">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="font-semibold text-gray-200">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <div className="flex items-center gap-3">
                {config.timingMode !== "off" && (
                  <span className={`flex items-center gap-1 font-bold ${timeLeft < 10 ? "text-brand" : "text-gray-300"}`}>
                    <Clock size={12} /> {formatTime(timeLeft)}
                  </span>
                )}
                <span className="text-brand font-bold bg-brand/10 border border-brand/20 px-2 py-0.5 rounded-md text-[11px]">
                  {correctCount} correct
                </span>
              </div>
            </div>
            <div className="w-full h-1.5 bg-[#161616] rounded-full overflow-hidden">
              <div
                className="h-full bg-brand transition-all duration-300 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Pause Overlay */}
        {paused ? (
          <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-12 text-center space-y-4">
            <Pause size={36} className="text-brand mx-auto" />
            <h3 className="text-xl font-bold text-white">Quiz Paused</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              The timer is paused. Take a breath and resume whenever you are ready.
            </p>
            <button
              onClick={() => setPaused(false)}
              className="bg-brand hover:bg-red-700 text-white px-8 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg shadow-brand/20"
            >
              Resume Quiz
            </button>
          </div>
        ) : (
          /* Question Card */
          <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl overflow-hidden shadow-xl space-y-6">
            {/* Meta Bar */}
            <div className="px-6 py-3.5 border-b border-[#1a1a1a] flex items-center justify-between gap-2 flex-wrap bg-[#111]">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-md">
                  {q.section}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-[#161616] border border-[#242424] px-2 py-1 rounded-md">
                  {q.difficulty}
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                {isMTF ? "Multiple True/False (Mark Each)" : isTF ? "True / False" : "Single Best Answer"}
              </span>
            </div>

            <div className="px-6 sm:px-8 pb-8 space-y-6">
              {/* Question Stem */}
              <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">
                {q.stem}
              </p>

              {/* Multiple True / False Format (Distinct True/False buttons per statement) */}
              {isMTF ? (
                <div className="space-y-3">
                  <p className="text-xs text-gray-400 italic border-l-2 border-brand/50 pl-3">
                    Mark each statement independently as True (T) or False (F).
                  </p>

                  <div className="space-y-2.5">
                    {q.options.map((opt, i) => {
                      const userChoice = mtfAnswers[opt.id]
                      const actual = opt.is_correct ? "T" : "F"
                      const isItemCorrect = userChoice === actual

                      let cardCls = "bg-[#141414] border-[#222]"
                      if (revealed) {
                        if (isItemCorrect) {
                          cardCls = "bg-green-950/20 border-green-800/40"
                        } else {
                          cardCls = "bg-red-950/20 border-red-800/40"
                        }
                      }

                      return (
                        <div
                          key={opt.id}
                          className={`p-3.5 sm:p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${cardCls}`}
                        >
                          <div className="flex items-start gap-3 flex-1">
                            <span className="w-6 h-6 rounded-lg bg-[#1c1c1c] text-gray-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {String.fromCharCode(65 + i)}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-200 leading-snug pt-0.5">
                              {opt.text}
                            </span>
                          </div>

                          {/* True / False Toggle Buttons */}
                          <div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
                            {revealed ? (
                              <div className="flex items-center gap-2">
                                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${
                                  isItemCorrect ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
                                }`}>
                                  {isItemCorrect ? `Correct (${actual})` : `Wrong (Actually ${actual})`}
                                </span>
                              </div>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  onClick={() => handleSetMtfAnswer(opt.id, "T")}
                                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                                    userChoice === "T"
                                      ? "bg-brand text-white border-brand shadow-sm shadow-brand/20"
                                      : "bg-[#1a1a1a] text-gray-400 border-[#2a2a2a] hover:text-white"
                                  }`}
                                >
                                  True
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleSetMtfAnswer(opt.id, "F")}
                                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                                    userChoice === "F"
                                      ? "bg-brand text-white border-brand shadow-sm shadow-brand/20"
                                      : "bg-[#1a1a1a] text-gray-400 border-[#2a2a2a] hover:text-white"
                                  }`}
                                >
                                  False
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ) : (
                /* SBA & Single True/False Options */
                <div className="space-y-2.5">
                  {q.options.map((opt, i) => {
                    const isSelected = selectedOption === opt.id

                    let stateClass = "bg-[#141414] border-[#242424] text-gray-300 hover:border-[#444] hover:text-white cursor-pointer"
                    if (revealed) {
                      if (opt.is_correct) {
                        stateClass = "bg-brand/10 border-brand/60 text-white font-medium"
                      } else if (isSelected && !opt.is_correct) {
                        stateClass = "bg-red-950/30 border-red-800 text-gray-400"
                      } else {
                        stateClass = "bg-[#111] border-[#1a1a1a] text-gray-600 opacity-50 cursor-default"
                      }
                    } else if (isSelected) {
                      stateClass = "bg-[#1a1a1a] border-brand/60 text-white"
                    }

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(opt.id)}
                        disabled={revealed}
                        className={`w-full text-left px-4 sm:px-5 py-3.5 rounded-xl border transition-all flex items-start gap-3.5 disabled:cursor-default ${stateClass}`}
                      >
                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${
                          revealed && opt.is_correct
                            ? "bg-brand text-white"
                            : revealed && isSelected && !opt.is_correct
                            ? "bg-red-800 text-white"
                            : isSelected
                            ? "bg-brand/20 text-brand border border-brand/40"
                            : "bg-[#1e1e1e] text-gray-400"
                        }`}>
                          {isTF
                            ? (opt.text.toLowerCase().includes("true") ? "T" : "F")
                            : String.fromCharCode(65 + i)}
                        </span>
                        <span className="text-xs sm:text-sm flex-1 leading-normal pt-0.5">
                          {opt.text}
                        </span>
                        {revealed && opt.is_correct && (
                          <CheckCircle size={16} className="text-brand flex-shrink-0 mt-0.5" />
                        )}
                        {revealed && isSelected && !opt.is_correct && (
                          <XCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                        )}
                      </button>
                    )
                  })}
                </div>
              )}

              {/* Confirm / Submit Button */}
              {!revealed && (
                <button
                  onClick={handleReveal}
                  disabled={isMTF ? Object.keys(mtfAnswers).length === 0 : !selectedOption}
                  className="w-full bg-brand hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20"
                >
                  {isMTF ? "Submit MTF Judgements" : "Confirm Answer"}
                </button>
              )}

              {/* Rationale & Textbook Reference Box */}
              {revealed && (
                <div className="bg-[#0c0c0c] border border-[#222] rounded-xl p-5 space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand flex items-center gap-1.5">
                      <Sparkles size={13} /> High-Yield Rationale
                    </span>
                    {q.reference && (
                      <span className="text-[10px] text-gray-500 flex items-center gap-1">
                        <BookOpen size={11} /> {q.reference}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Next Question CTA */}
        {revealed && !paused && (
          <button
            onClick={handleNext}
            className="w-full bg-brand hover:bg-red-700 text-white font-bold py-4 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-brand/20 flex items-center justify-center gap-2"
          >
            {currentIndex + 1 >= questions.length ? "View Final Assessment Score" : "Next Clinical Question"}
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════
  // STEP 4: RESULTS REPORT
  // ═══════════════════════════════════════════════════════════
  if (step === "results" && config) {
    const total = questions.length
    const correct = answers.filter(a => a.isCorrect).length
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0
    const grade =
      pct >= 80 ? { label: "Distinction", color: "text-brand" } :
      pct >= 65 ? { label: "Merit", color: "text-green-400" } :
      pct >= 50 ? { label: "Pass", color: "text-yellow-400" } :
      { label: "Below Pass", color: "text-red-400" }

    return (
      <div className="max-w-xl mx-auto py-10 space-y-6">
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mx-auto">
            <Trophy size={32} />
          </div>

          <div>
            <span className={`text-xs font-bold uppercase tracking-widest block mb-1 ${grade.color}`}>
              {grade.label}
            </span>
            <h1 className="text-4xl font-display font-bold text-white tracking-tight">{pct}%</h1>
            <p className="text-gray-400 text-xs mt-1">
              {config.courseName}
              {config.section !== "all" ? ` · ${config.section}` : " · All Sections"}
              {` · ${total} Questions`}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { label: "Correct", value: correct, color: "text-brand" },
              { label: "Incorrect", value: total - correct, color: "text-red-400" },
              { label: "Total", value: total, color: "text-white" },
            ].map(s => (
              <div key={s.label} className="bg-[#141414] border border-[#222] rounded-xl p-4">
                <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                setStep("config")
                setAnswers([])
                setCurrentIndex(0)
              }}
              className="flex-1 bg-brand hover:bg-red-700 text-white font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-brand/20"
            >
              <RotateCcw size={14} /> New Session
            </button>
            <button
              onClick={() => setStep("courses")}
              className="flex-1 bg-[#161616] border border-[#2a2a2a] hover:bg-[#202020] text-gray-300 hover:text-white font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
            >
              <BarChart2 size={14} /> All Courses
            </button>
          </div>
        </div>

        {/* Detailed Question Review */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-1">Session Review</h2>
          {questions.map((q, i) => {
            const answer = answers[i]
            const isCorrect = answer?.isCorrect
            return (
              <div
                key={q.id}
                className={`bg-[#0e0e0e] border rounded-xl p-4 space-y-2 ${
                  isCorrect ? "border-brand/20" : "border-red-900/30"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    isCorrect ? "bg-brand/10" : "bg-red-900/20"
                  }`}>
                    {isCorrect
                      ? <CheckCircle size={12} className="text-brand" />
                      : <XCircle size={12} className="text-red-500" />}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 flex-1 leading-snug font-medium">
                    {q.stem}
                  </p>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed pl-8">
                  {q.explanation}
                </p>
                {q.reference && (
                  <p className="text-[10px] text-gray-500 pl-8 flex items-center gap-1">
                    <BookOpen size={10} /> {q.reference}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return null
}

// ═══════════════════════════════════════════════════════════
// SESSION CONFIG VIEW COMPONENT (Inspired by screenshots)
// ═══════════════════════════════════════════════════════════

interface SessionConfigViewProps {
  course: MCQCourse
  programme: Programme
  onBack: () => void
  onStart: (cfg: SessionConfig) => void
}

function SessionConfigView({ course, programme, onBack, onStart }: SessionConfigViewProps) {
  const [questionType, setQuestionType] = useState<QuestionType>("multiple_true_false")
  const [difficulty, setDifficulty] = useState<Difficulty>("mixed")
  const [section, setSection] = useState("all")
  const [count, setCount] = useState<10 | 20 | 50 | 100>(20)
  const [timingMode, setTimingMode] = useState<TimingMode>("off")
  const [secondsPerQuestion, setSecondsPerQuestion] = useState(60)
  const [allowPause, setAllowPause] = useState(true)
  const [sectionOpen, setSectionOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSectionOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const selectedSection = course.sections.find(s => s.id === section)
  const totalQs = section === "all"
    ? course.sections.reduce((s, sec) => s + sec.questionCount, 0)
    : selectedSection?.questionCount ?? 0

  const handleStart = () => {
    onStart({
      courseId: course.id,
      courseName: course.name,
      section,
      questionType,
      difficulty,
      count,
      timingMode,
      secondsPerQuestion,
      allowPause,
      programme,
    })
  }

  return (
    <div className="max-w-3xl mx-auto pb-24 space-y-6">
      {/* Top Header with Back Arrow and Group Quiz Badge */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors flex-shrink-0"
          >
            <ArrowLeft size={16} />
          </button>
          <div>
            <h1 className="text-2xl font-display font-bold text-white">{course.name}</h1>
            <p className="text-xs text-gray-400 mt-0.5">Configure your practice session · {course.textbook}</p>
          </div>
        </div>

        <button
          onClick={() => toast.info("Multiplayer group quizzes coming to PodGuide soon!")}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white bg-[#111] border border-[#222] px-3.5 py-2 rounded-xl transition-colors"
        >
          <Share2 size={13} className="text-brand" /> Group quiz
        </button>
      </div>

      {/* Main Configuration Card */}
      <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl divide-y divide-[#181818] shadow-2xl">

        {/* 1. Question Format */}
        <div className="p-5 sm:p-6 space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Question Format
            </label>
            <span className="text-[11px] text-brand font-medium">Standard Medical Exam Types</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {[
              {
                id: "multiple_true_false",
                label: "Multiple True/False",
                desc: "Mark every sub-statement T/F (Medical standard)",
                badge: "Most Common"
              },
              {
                id: "sba",
                label: "Single Best Answer",
                desc: "Pick 1 of 4 or 5 options with vignette",
                badge: "SBA"
              },
              {
                id: "true_false",
                label: "True / False",
                desc: "Judge one high-yield clinical statement",
                badge: "T/F"
              },
              {
                id: "abcde",
                label: "Structured / ABCDE",
                desc: "5 options (A-E) clinical vignette",
                badge: "ABCDE"
              },
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => setQuestionType(opt.id as QuestionType)}
                className={`p-3.5 rounded-xl border text-left transition-all relative ${
                  questionType === opt.id
                    ? "bg-brand/10 border-brand/60 text-white shadow-sm shadow-brand/10"
                    : "bg-[#141414] border-[#222] text-gray-400 hover:border-[#333] hover:text-gray-200"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-white">{opt.label}</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-snug">{opt.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Difficulty */}
        <div className="p-5 sm:p-6 space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
            Difficulty
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: "easy", label: "Easy", desc: "Classic, high-yield recall" },
              { id: "medium", label: "Medium", desc: "Typical clinical reasoning" },
              { id: "hard", label: "Hard", desc: "Atypical, resident-level" },
              { id: "mixed", label: "Mixed", desc: "Balanced spread across all" },
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => setDifficulty(opt.id as Difficulty)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  difficulty === opt.id
                    ? "bg-brand/10 border-brand/60 text-white shadow-sm shadow-brand/10"
                    : "bg-[#141414] border-[#222] text-gray-400 hover:border-[#333]"
                }`}
              >
                <p className="text-xs font-bold text-white">{opt.label}</p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">{opt.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Section / Region Dropdown */}
        <div className="p-5 sm:p-6 space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
            Section / Specific Region
          </label>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSectionOpen(o => !o)}
              className="w-full flex items-center justify-between bg-[#141414] border border-[#242424] hover:border-[#3a3a3a] rounded-xl px-4 py-3.5 text-sm text-white transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="font-semibold">
                  {section === "all" ? "All Sections (Mixed Bag)" : selectedSection?.name}
                </span>
                <span className="text-gray-500 text-xs">
                  · {totalQs.toLocaleString()}+ in bank
                </span>
              </span>
              <ChevronDown size={16} className={`text-gray-500 transition-transform ${sectionOpen ? "rotate-180" : ""}`} />
            </button>

            {sectionOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#141414] border border-[#262626] rounded-xl shadow-2xl shadow-black/80 z-30 max-h-64 overflow-y-auto divide-y divide-[#1c1c1c]">
                <button
                  onClick={() => { setSection("all"); setSectionOpen(false) }}
                  className={`w-full text-left px-4 py-3 text-xs sm:text-sm flex items-center justify-between hover:bg-[#1a1a1a] transition-colors ${
                    section === "all" ? "text-brand font-bold bg-[#181818]" : "text-white"
                  }`}
                >
                  <span>All Sections (Mixed Bag)</span>
                  {section === "all" && <Check size={14} className="text-brand" />}
                </button>
                {course.sections.map(sec => (
                  <button
                    key={sec.id}
                    onClick={() => { setSection(sec.id); setSectionOpen(false) }}
                    className={`w-full text-left px-4 py-3 text-xs sm:text-sm flex items-center justify-between hover:bg-[#1a1a1a] transition-colors ${
                      section === sec.id ? "text-brand font-bold bg-[#181818]" : "text-gray-300"
                    }`}
                  >
                    <span>{sec.name}</span>
                    <span className="text-[11px] text-gray-500">{sec.questionCount.toLocaleString()}+ in bank</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 4. Number of Questions */}
        <div className="p-5 sm:p-6 space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
            Number of Questions
          </label>
          <div className="grid grid-cols-4 gap-2.5">
            {([10, 20, 50, 100] as const).map(n => (
              <button
                key={n}
                onClick={() => setCount(n)}
                className={`py-3.5 rounded-xl border text-sm font-bold transition-all ${
                  count === n
                    ? "bg-brand text-white border-brand shadow-sm shadow-brand/20"
                    : "bg-[#141414] border-[#222] text-gray-400 hover:text-white hover:border-[#333]"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* 5. Timing */}
        <div className="p-5 sm:p-6 space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
            Timing
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { id: "off", label: "Off", desc: "No timer, self-paced" },
              { id: "per_question", label: "Per question", desc: `${secondsPerQuestion}s each` },
              { id: "whole_session", label: "Whole session", desc: `${count}m total` },
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => setTimingMode(opt.id as TimingMode)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  timingMode === opt.id
                    ? "bg-brand/10 border-brand/60 text-white shadow-sm shadow-brand/10"
                    : "bg-[#141414] border-[#222] text-gray-400 hover:border-[#333]"
                }`}
              >
                <p className="text-xs font-bold text-white">{opt.label}</p>
                <p className="text-[10px] text-gray-500 mt-0.5">{opt.desc}</p>
              </button>
            ))}
          </div>

          {timingMode === "per_question" && (
            <div className="space-y-2 pt-2 bg-[#121212] p-4 rounded-xl border border-[#222]">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Seconds per question</span>
                <span className="font-bold text-white text-sm">{secondsPerQuestion}s</span>
              </div>
              <input
                type="range"
                min={15}
                max={120}
                step={15}
                value={secondsPerQuestion}
                onChange={e => setSecondsPerQuestion(Number(e.target.value))}
                className="w-full accent-brand cursor-pointer"
              />
            </div>
          )}
        </div>

        {/* 6. Allow Pause Toggle */}
        <div className="p-5 sm:p-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Allow Pause</p>
            <p className="text-xs text-gray-500 mt-0.5">Stop the timer and resume the quiz later</p>
          </div>
          <button
            type="button"
            onClick={() => setAllowPause(p => !p)}
            className={`w-11 h-6 rounded-full border transition-all relative flex-shrink-0 ${
              allowPause ? "bg-brand border-brand" : "bg-[#1a1a1a] border-[#2a2a2a]"
            }`}
          >
            <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all shadow-sm ${
              allowPause ? "left-5" : "left-0.5"
            }`} />
          </button>
        </div>
      </div>

      {/* Start Quiz Action CTA */}
      <button
        onClick={handleStart}
        className="w-full bg-brand hover:bg-red-700 text-white font-bold py-4 rounded-xl text-sm transition-all shadow-xl shadow-brand/25 flex items-center justify-center gap-2"
      >
        <Sparkles size={16} /> Start Quiz · {count} Questions
        <ChevronRight size={16} />
      </button>
    </div>
  )
}
