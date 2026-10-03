/**
 * lib/curriculum-engine.ts
 * Dynamic Curriculum Engine — type definitions and helper utilities.
 * Maps legacy onboarding values → normalized program_id / academic_level.
 */

// ─────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────

export type ProgramId =
  | "bms" | "medicine" | "pharmacy" | "nursing"
  | "dentistry" | "physiotherapy" | "public_health" | "mls" | "generic"

export interface Program {
  id: ProgramId
  title: string
  description: string
  total_levels: number
}

export interface Module {
  id: string
  code: string
  title: string
  description: string
  icon: string
  credits: number
  program_id?: ProgramId
  academic_level?: string
  display_order?: number
  is_core?: boolean
}

export interface StudentCurriculumContext {
  program_id: ProgramId
  academic_level: string
  modules: Module[]
}

// ─────────────────────────────────────────────────────────────────
// PROGRAM MAPPING — from onboarding dropdown values → program_id
// ─────────────────────────────────────────────────────────────────

const PROGRAMME_MAP: Record<string, ProgramId> = {
  "medicine (mbchb / mbbs)": "medicine",
  "nursing (bsc nursing / bnurs)": "nursing",
  "pharmacy (bpharm / pharmd)": "pharmacy",
  "dentistry (bds / bchd)": "dentistry",
  "physiotherapy (bsc / bpt)": "physiotherapy",
  "public health (bsc / mph)": "public_health",
  "medical laboratory science (bmls)": "mls",
  "biomedical science (bsc)": "bms",
  "biomedical sciences": "bms",
  "occupational therapy": "generic",
  "radiography / medical imaging": "generic",
  "clinical officer / medical assistant": "generic",
  "midwifery": "nursing",
  "nutrition & dietetics": "generic",
  "optometry": "generic",
  "veterinary medicine (dvm)": "generic",
}

const LEVEL_MAP: Record<string, string> = {
  "year 1 (pre-clinical / basic sciences)": "Part 1",
  "year 2": "Part 2",
  "year 3 (pre-clinical)": "Part 3",
  "year 4 (clinical rotations)": "Year 4",
  "year 6 (final year)": "Year 6",
  "internship / housemanship": "Internship",
  "post-graduate / residency": "Postgraduate",
  // Already normalised (from new onboarding or promotion)
  "part 1": "Part 1",
  "part 2": "Part 2",
  "part 3": "Part 3",
  "part 4": "Part 4",
  "year 4": "Year 4",
  "year 5": "Year 5",
  "year 6": "Year 6",
  "year 7": "Year 7",
  "internship": "Internship",
  "postgraduate": "Postgraduate",
}

/**
 * Derive a normalized program_id from the onboarding programme string.
 */
export function deriveProgramId(programme: string): ProgramId {
  return PROGRAMME_MAP[programme.toLowerCase().trim()] ?? "generic"
}

/**
 * Derive a normalized academic_level from the onboarding level string.
 */
export function deriveAcademicLevel(level: string): string {
  return LEVEL_MAP[level.toLowerCase().trim()] ?? level
}

// ─────────────────────────────────────────────────────────────────
// PROMOTION — define valid academic progressions
// ─────────────────────────────────────────────────────────────────

interface ProgressionPath {
  next_level: string
  next_program_id?: ProgramId  // Only if programme also changes (e.g. BMS → Medicine)
}

const PROGRESSION_MAP: Record<string, Record<string, ProgressionPath>> = {
  bms: {
    "Part 1": { next_level: "Part 2" },
    "Part 2": { next_level: "Part 3" },
    "Part 3": { next_level: "Year 4", next_program_id: "medicine" }, // BMS → Medicine pipeline
  },
  medicine: {
    "Year 4": { next_level: "Year 5" },
    "Year 5": { next_level: "Year 6" },
    "Year 6": { next_level: "Internship" },
    "Internship": { next_level: "Postgraduate" },
  },
  pharmacy: {
    "Part 1": { next_level: "Part 2" },
    "Part 2": { next_level: "Part 3" },
    "Part 3": { next_level: "Part 4" },
    "Part 4": { next_level: "Internship" },
  },
  nursing: {
    "Part 1": { next_level: "Part 2" },
    "Part 2": { next_level: "Part 3" },
    "Part 3": { next_level: "Part 4" },
    "Part 4": { next_level: "Internship" },
  },
  dentistry: {
    "Part 1": { next_level: "Part 2" },
    "Part 2": { next_level: "Part 3" },
    "Part 3": { next_level: "Year 4" },
    "Year 4": { next_level: "Year 5" },
    "Year 5": { next_level: "Internship" },
  },
  physiotherapy: {
    "Part 1": { next_level: "Part 2" },
    "Part 2": { next_level: "Part 3" },
    "Part 3": { next_level: "Part 4" },
    "Part 4": { next_level: "Internship" },
  },
  public_health: {
    "Part 1": { next_level: "Part 2" },
    "Part 2": { next_level: "Part 3" },
    "Part 3": { next_level: "Postgraduate" },
  },
  mls: {
    "Part 1": { next_level: "Part 2" },
    "Part 2": { next_level: "Part 3" },
    "Part 3": { next_level: "Part 4" },
    "Part 4": { next_level: "Internship" },
  },
}

/**
 * Get the next academic progression for a student.
 * Returns null if no further progression is defined.
 */
export function getNextProgression(
  program_id: ProgramId,
  academic_level: string
): ProgressionPath | null {
  return PROGRESSION_MAP[program_id]?.[academic_level] ?? null
}

// ─────────────────────────────────────────────────────────────────
// ACCESS GUARD — check module authorisation
// ─────────────────────────────────────────────────────────────────

/**
 * Determines whether a student may access a given module.
 * A student may access a module if it belongs to ANY level at or before
 * their current academic level within their programme.
 *
 * Returns true  → access granted
 * Returns false → 403 Forbidden
 */
export function canAccessModule(
  moduleProgram: ProgramId,
  moduleLevel: string,
  studentProgram: ProgramId,
  studentLevel: string
): boolean {
  // Must belong to same programme
  if (moduleProgram !== studentProgram) return false

  // Must be same or earlier level
  const allLevels = Object.keys(PROGRESSION_MAP[studentProgram] ?? {})
  const studentIdx = allLevels.indexOf(studentLevel)
  const moduleIdx = allLevels.indexOf(moduleLevel)

  if (studentIdx === -1 || moduleIdx === -1) return moduleLevel === studentLevel
  return moduleIdx <= studentIdx
}

// ─────────────────────────────────────────────────────────────────
// DISPLAY HELPERS
// ─────────────────────────────────────────────────────────────────

export function formatProgramLevel(program_id: ProgramId, academic_level: string): string {
  const programTitles: Record<string, string> = {
    bms: "Biomedical Sciences",
    medicine: "Medicine (MBChB)",
    pharmacy: "Pharmacy",
    nursing: "Nursing",
    dentistry: "Dentistry",
    physiotherapy: "Physiotherapy",
    public_health: "Public Health",
    mls: "Medical Laboratory Science",
    generic: "Health Sciences",
  }
  return `${programTitles[program_id] ?? program_id} — ${academic_level}`
}

export function getLevelTagline(program_id: ProgramId, academic_level: string): string {
  const taglines: Record<string, Record<string, string>> = {
    bms: {
      "Part 1": "Building the biological foundation of medicine",
      "Part 2": "Bridging sciences toward clinical application",
      "Part 3": "Pathology and diagnostics — seeing disease in tissue",
    },
    medicine: {
      "Year 4": "Entering the wards — clinical reasoning begins here",
      "Year 5": "Specialised rotations — women, children, and the world",
      "Year 6": "Senior clinician — the finish line is in sight",
      "Internship": "Doctor. The work starts now.",
    },
    pharmacy: {
      "Part 1": "Foundations of pharmaceutical sciences",
      "Part 2": "Drug design and delivery — from molecule to patient",
      "Part 3": "Clinical pharmacy — applying therapeutics at the bedside",
      "Part 4": "Advanced practice — leadership and specialisation",
    },
    nursing: {
      "Part 1": "The art and science of patient-centred care",
      "Part 2": "Medical-surgical nursing — confidence on the wards",
      "Part 3": "Critical care, community, and mental health nursing",
      "Part 4": "Advanced practice — leading nursing excellence",
    },
  }
  return taglines[program_id]?.[academic_level] ?? `${academic_level} — ${program_id}`
}
