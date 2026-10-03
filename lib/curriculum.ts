export type Resource = { label: string; url: string; source: string }
export type WeakArea = { name: string; topic: string }
export type Subject = { name: string; icon: string }
export type CurriculumData = {
  tagline: string
  focus: string
  subjects: Subject[]
  weakAreas: WeakArea[]
  todaysPriority: string
  keyReminder: string
  resources: Resource[]
}

const DB: Record<string, CurriculumData> = {

  // ─── MEDICINE ───────────────────────────────────────────────────────────
  med_y1: {
    tagline: "Year 1 · Pre-clinical Sciences",
    focus: "Building the molecular and cellular foundations of medicine.",
    subjects: [
      { name: "Gross Anatomy", icon: "🦴" },
      { name: "Medical Physiology", icon: "❤️" },
      { name: "Medical Biochemistry", icon: "🧪" },
      { name: "Histology and Embryology", icon: "🔬" },
      { name: "Medical Ethics and Law", icon: "⚖️" },
    ],
    weakAreas: [
      { name: "Brachial Plexus", topic: "Anatomy — Upper Limb Nerves" },
      { name: "Krebs Cycle", topic: "Biochemistry — Energy Metabolism" },
      { name: "Renal Physiology", topic: "Physiology — Kidney and Fluids" },
    ],
    todaysPriority: "Draw the brachial plexus from memory. Trunks, divisions, cords, branches.",
    keyReminder: "Read the anatomy region BEFORE your cadaveric practical — not after. Preparation is everything.",
    resources: [
      { label: "Upper Limb Anatomy Guides", url: "https://geekymedics.com/upper-limb-anatomy/", source: "Geeky Medics" },
      { label: "Physiology Full Lecture Series", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Biochemistry Pathways", url: "https://www.osmosis.org/learn/biochemistry", source: "Osmosis" },
      { label: "Anatomy and Physiology Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  med_y2: {
    tagline: "Year 2 · Pathological Sciences",
    focus: "Understanding how and why disease happens at a cellular level.",
    subjects: [
      { name: "General Pathology", icon: "🦠" },
      { name: "Pharmacology", icon: "💊" },
      { name: "Medical Microbiology", icon: "🦠" },
      { name: "Immunology", icon: "🛡️" },
      { name: "Behavioural Sciences", icon: "🧠" },
    ],
    weakAreas: [
      { name: "Beta-lactam Resistance", topic: "Pharmacology — Antimicrobials" },
      { name: "Hypersensitivity Types I–IV", topic: "Immunology — Type Reactions" },
      { name: "Coagulation Cascade", topic: "Pathology — Haemostasis" },
    ],
    todaysPriority: "Learn the mechanism of action of each antibiotic CLASS — not just the drug names.",
    keyReminder: "Pharmacology MCQs dominate licensing exams globally. Treat it as your most important subject.",
    resources: [
      { label: "Pathology Video Lectures", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Pharmacology Series", url: "https://www.osmosis.org/learn/pharmacology", source: "Osmosis" },
      { label: "Microbiology OSCE Guide", url: "https://geekymedics.com/microbiology/", source: "Geeky Medics" },
      { label: "Pathology and Micro Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  med_y3: {
    tagline: "Year 3 · Introduction to Clinical Medicine",
    focus: "Transitioning from bench to bedside — history, examination, and clinical reasoning.",
    subjects: [
      { name: "Clinical Skills and OSCE", icon: "🩺" },
      { name: "Internal Medicine Intro", icon: "🏥" },
      { name: "Surgical Principles", icon: "🩹" },
      { name: "Evidence-Based Medicine", icon: "📊" },
      { name: "Clinical Pharmacology", icon: "💊" },
    ],
    weakAreas: [
      { name: "Cardiovascular Examination", topic: "Clinical Skills — Systematic CVS Exam" },
      { name: "ECG Interpretation", topic: "Medicine — 12-lead ECG Reading" },
      { name: "Surgical Wound Classification", topic: "Surgery — Wound Healing" },
    ],
    todaysPriority: "Practise a full cardiovascular OSCE examination on a colleague. Time yourself to 6 minutes.",
    keyReminder: "Clinical communication is marked as heavily as clinical knowledge at this level. Work on both equally.",
    resources: [
      { label: "OSCE Guides — All Systems", url: "https://geekymedics.com/osce-guides/", source: "Geeky Medics" },
      { label: "Clinical Medicine Video Lectures", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Oxford Handbook of Clinical Medicine", url: "https://www.amboss.com", source: "Amboss" },
      { label: "EBM and Clinical Reasoning", url: "https://www.osmosis.org", source: "Osmosis" },
    ],
  },

  med_y4: {
    tagline: "Year 4 · Core Clinical Rotations",
    focus: "Applying medical knowledge during supervised clinical ward placements.",
    subjects: [
      { name: "Internal Medicine", icon: "🏥" },
      { name: "General Surgery", icon: "🩹" },
      { name: "Paediatrics", icon: "👶" },
      { name: "Obstetrics and Gynaecology", icon: "🤱" },
      { name: "Psychiatry", icon: "🧠" },
    ],
    weakAreas: [
      { name: "DKA vs HHS Algorithm", topic: "Medicine — Diabetic Emergencies" },
      { name: "Paediatric Developmental Milestones", topic: "Paediatrics — Child Development" },
      { name: "Pre-term Labour Management", topic: "OB/GYN — Obstetrics" },
    ],
    todaysPriority: "Review DKA management: fluid resuscitation, insulin protocol, potassium monitoring.",
    keyReminder: "Log every procedure in your portfolio — it is mandatory for graduation in most programmes.",
    resources: [
      { label: "OSCE Stations — All Specialties", url: "https://geekymedics.com/osce-guides/", source: "Geeky Medics" },
      { label: "Paediatrics and OB Lectures", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Clinical Decision Support", url: "https://www.amboss.com", source: "Amboss" },
      { label: "Specialty Video Courses", url: "https://www.osmosis.org", source: "Osmosis" },
    ],
  },

  med_y5: {
    tagline: "Year 5 · Advanced Clinical Rotations",
    focus: "Greater clinical independence across speciality and emergency settings.",
    subjects: [
      { name: "Emergency Medicine", icon: "🚨" },
      { name: "Anaesthesia and Critical Care", icon: "💤" },
      { name: "Dermatology and ENT", icon: "👂" },
      { name: "Orthopaedics and Ophthalmology", icon: "👁️" },
      { name: "Community and Family Medicine", icon: "🏡" },
    ],
    weakAreas: [
      { name: "ATLS Primary Survey", topic: "Emergency — Trauma Management" },
      { name: "Sepsis Bundle (Hour-1)", topic: "Critical Care — Sepsis Protocol" },
      { name: "Intubation Indications", topic: "Anaesthesia — Airway Management" },
    ],
    todaysPriority: "Drill the ABCDE approach for any critically ill patient. Time yourself under 2 minutes.",
    keyReminder: "Start writing your internship applications now. Most programmes open 6 months before graduation.",
    resources: [
      { label: "Emergency Medicine Guides", url: "https://geekymedics.com/emergency-medicine/", source: "Geeky Medics" },
      { label: "Critical Care Lectures", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Sepsis and ICU Protocols", url: "https://www.amboss.com", source: "Amboss" },
      { label: "Dermatology and ENT", url: "https://www.osmosis.org", source: "Osmosis" },
    ],
  },

  med_y6: {
    tagline: "Year 6 · Final Year and Licensing Preparation",
    focus: "Full clinical consolidation and licensing exam strategy.",
    subjects: [
      { name: "Clinical Integration", icon: "🎯" },
      { name: "Licensing Exam Prep (USMLE/PLAB/AMC)", icon: "📝" },
      { name: "Elective Rotation", icon: "✈️" },
      { name: "Medical Leadership and Ethics", icon: "👥" },
      { name: "Research Methods", icon: "📊" },
    ],
    weakAreas: [
      { name: "Renal Replacement Therapy", topic: "Medicine — Nephrology Emergencies" },
      { name: "Paediatric Resuscitation (PALS)", topic: "Paediatrics — Cardiac Arrest" },
      { name: "Complex Drug Interactions", topic: "Pharmacology — Polypharmacy" },
    ],
    todaysPriority: "Complete 30 licensing-style MCQs today. Review every wrong answer in detail before moving on.",
    keyReminder: "Your final OSCE tests full patient consultations. Practise with real patients every single day.",
    resources: [
      { label: "Final Year OSCE Prep", url: "https://geekymedics.com/osce-guides/", source: "Geeky Medics" },
      { label: "USMLE and PLAB Lectures", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Amboss Question Bank", url: "https://www.amboss.com", source: "Amboss" },
      { label: "Osmosis Final Review Series", url: "https://www.osmosis.org", source: "Osmosis" },
    ],
  },

  med_intern: {
    tagline: "Internship · First Year as a Doctor",
    focus: "Supervised clinical practice across all specialties as a junior doctor.",
    subjects: [
      { name: "Acute Medicine On-Call", icon: "🚨" },
      { name: "Surgical On-Call", icon: "🩹" },
      { name: "Safe Prescribing", icon: "💊" },
      { name: "Procedural Skills", icon: "🩺" },
      { name: "Referral and Communication", icon: "📞" },
    ],
    weakAreas: [
      { name: "Medication Dose Calculations", topic: "Prescribing — Drug Safety" },
      { name: "Blood Gas Interpretation (ABG)", topic: "Critical Care — Acid-Base" },
      { name: "IV Fluid Prescribing", topic: "Medicine — Fluid Management" },
    ],
    todaysPriority: "Know the 5 rights of prescribing: Right patient, drug, dose, route, and time. Every. Single. Time.",
    keyReminder: "Never hesitate to call your senior for help. It protects your patient — and your career.",
    resources: [
      { label: "Junior Doctor Guides", url: "https://geekymedics.com/junior-doctor/", source: "Geeky Medics" },
      { label: "Prescribing Safety Resources", url: "https://www.amboss.com", source: "Amboss" },
      { label: "Clinical Procedures Videos", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Drug Reference and BNF", url: "https://www.osmosis.org", source: "Osmosis" },
    ],
  },

  // ─── NURSING ────────────────────────────────────────────────────────────
  nurs_y1: {
    tagline: "Year 1 · Foundations of Nursing",
    focus: "Human anatomy, fundamentals of care, and professional identity as a nurse.",
    subjects: [
      { name: "Fundamentals of Nursing", icon: "🏥" },
      { name: "Anatomy and Physiology I", icon: "🦴" },
      { name: "Introduction to Pharmacology", icon: "💊" },
      { name: "Health Assessment", icon: "🩺" },
      { name: "Nursing Ethics and Professionalism", icon: "⚖️" },
    ],
    weakAreas: [
      { name: "Aseptic Non-Touch Technique", topic: "Fundamentals — Infection Control" },
      { name: "Vital Signs Interpretation", topic: "Health Assessment — Monitoring" },
      { name: "Therapeutic Communication", topic: "Professionalism — Patient Communication" },
    ],
    todaysPriority: "Practise correct hand-washing technique and PPE donning/doffing until it is automatic.",
    keyReminder: "The nursing process (ADPIE) is the backbone of every clinical decision you will ever make.",
    resources: [
      { label: "Nursing OSCE Guides", url: "https://geekymedics.com/nursing/", source: "Geeky Medics" },
      { label: "Nursing Fundamentals Videos", url: "https://www.youtube.com/@RegisteredNurseRN", source: "RegisteredNurseRN" },
      { label: "A and P for Nurses", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Nursing Clinical Skills", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  nurs_y2: {
    tagline: "Year 2 · Medical-Surgical Nursing",
    focus: "Managing patients with acute and chronic conditions across medical and surgical wards.",
    subjects: [
      { name: "Medical-Surgical Nursing", icon: "🏥" },
      { name: "Pathophysiology", icon: "🦠" },
      { name: "Pharmacotherapeutics", icon: "💊" },
      { name: "Mental Health Nursing", icon: "🧠" },
      { name: "Research Methods in Nursing", icon: "📊" },
    ],
    weakAreas: [
      { name: "Post-operative Nursing Care", topic: "Med-Surg — Perioperative Nursing" },
      { name: "Electrolyte Imbalances", topic: "Pathophysiology — Fluid and Electrolytes" },
      { name: "Mental State Examination", topic: "Mental Health — MSE Framework" },
    ],
    todaysPriority: "Revise the SBAR handover framework: Situation, Background, Assessment, Recommendation.",
    keyReminder: "Medication errors are the number one nursing malpractice issue. Master the 10 rights of administration.",
    resources: [
      { label: "Med-Surg Nursing Series", url: "https://www.youtube.com/@RegisteredNurseRN", source: "RegisteredNurseRN" },
      { label: "Pathophysiology Video Course", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Pharmacology for Nurses", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Mental Health Nursing Guide", url: "https://geekymedics.com", source: "Geeky Medics" },
    ],
  },

  nurs_y3: {
    tagline: "Year 3 · Speciality Nursing Practice",
    focus: "Maternity, paediatric, community, and critical care nursing placements.",
    subjects: [
      { name: "Maternal and Newborn Nursing", icon: "🤱" },
      { name: "Paediatric Nursing", icon: "👶" },
      { name: "Community and Public Health Nursing", icon: "🏡" },
      { name: "Critical Care Nursing", icon: "🚨" },
      { name: "Nursing Leadership", icon: "👥" },
    ],
    weakAreas: [
      { name: "APGAR Score Assessment", topic: "Maternal — Newborn Assessment" },
      { name: "Paediatric Weight-based Drug Dosing", topic: "Paediatrics — Medication Safety" },
      { name: "Ventilator Management Basics", topic: "Critical Care — Mechanical Ventilation" },
    ],
    todaysPriority: "Review the management of post-partum haemorrhage (PPH) — a critical obstetric emergency.",
    keyReminder: "Community health nursing requires understanding social determinants of health, not just clinical skills.",
    resources: [
      { label: "Maternal and Newborn Nursing", url: "https://www.youtube.com/@RegisteredNurseRN", source: "RegisteredNurseRN" },
      { label: "Paediatric Nursing Videos", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Critical Care Nursing Guide", url: "https://geekymedics.com", source: "Geeky Medics" },
      { label: "ICU and Ventilator Nursing", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  nurs_y4: {
    tagline: "Year 4 · Advanced Practice and Board Preparation",
    focus: "Consolidation of clinical competencies and transition to professional nursing practice.",
    subjects: [
      { name: "Advanced Clinical Practice", icon: "🩺" },
      { name: "Nursing Informatics", icon: "💻" },
      { name: "Health Systems and Policy", icon: "📋" },
      { name: "Evidence-Based Nursing", icon: "📊" },
      { name: "NCLEX and Board Exam Preparation", icon: "📝" },
    ],
    weakAreas: [
      { name: "Priority Setting with Multiple Patients", topic: "Advanced Practice — Delegation" },
      { name: "Lab Value Interpretation", topic: "Clinical Practice — Diagnostics" },
      { name: "Quality Improvement in Nursing", topic: "Systems — Patient Safety" },
    ],
    todaysPriority: "Practice 50 NCLEX-style questions today — focus on priority and delegation questions.",
    keyReminder: "On board exams, choose the SAFE answer, not the fastest one. Patient safety always comes first.",
    resources: [
      { label: "NCLEX Prep Full Series", url: "https://www.youtube.com/@RegisteredNurseRN", source: "RegisteredNurseRN" },
      { label: "Saunders NCLEX Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
      { label: "Nursing Leadership and Policy", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Clinical Skills Revision", url: "https://geekymedics.com", source: "Geeky Medics" },
    ],
  },

  // ─── PHARMACY ───────────────────────────────────────────────────────────
  pharm_y1: {
    tagline: "Year 1 · Pharmaceutical Sciences Foundation",
    focus: "Pharmaceutical chemistry, dosage forms, and how drugs interact with the body.",
    subjects: [
      { name: "Pharmaceutical Chemistry I", icon: "⚗️" },
      { name: "Anatomy and Physiology", icon: "🦴" },
      { name: "Pharmaceutics I — Dosage Forms", icon: "💊" },
      { name: "Biochemistry for Pharmacy", icon: "🧪" },
      { name: "Pharmacy Practice I", icon: "🏥" },
    ],
    weakAreas: [
      { name: "Drug Solubility and Stability", topic: "Pharmaceutics — Physicochemical Properties" },
      { name: "Receptor Terminology", topic: "Pharmacology — Agonists and Antagonists" },
      { name: "Acid-Base Buffer Chemistry", topic: "Pharmaceutical Chemistry — Buffers" },
    ],
    todaysPriority: "Understand what makes a drug bioavailable — solubility, permeability, and first-pass metabolism.",
    keyReminder: "Pharmacy is applied chemistry. A strong foundation in physical chemistry determines your clinical success.",
    resources: [
      { label: "Pharmacy Lectures", url: "https://www.youtube.com/@AKpharmD", source: "AKPharmD" },
      { label: "Biochemistry Full Series", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Pharmacology Foundations", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Pharmaceutical Sciences Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  pharm_y2: {
    tagline: "Year 2 · Pharmacology and Drug Delivery",
    focus: "Mechanisms of drug action and how medicines are formulated and delivered to targets.",
    subjects: [
      { name: "Pharmacology and Toxicology", icon: "💊" },
      { name: "Pharmaceutics II — Drug Delivery", icon: "🎯" },
      { name: "Pharmacognosy and Herbal Medicine", icon: "🌿" },
      { name: "Microbiology for Pharmacy", icon: "🦠" },
      { name: "Pharmaceutical Analysis", icon: "🧪" },
    ],
    weakAreas: [
      { name: "Pharmacokinetics — ADME", topic: "Pharmacology — Drug Absorption and Metabolism" },
      { name: "Controlled Release Systems", topic: "Drug Delivery — Modified Release Formulations" },
      { name: "Natural Product Identification", topic: "Pharmacognosy — Phytochemistry" },
    ],
    todaysPriority: "Master the ADME model completely — Absorption, Distribution, Metabolism, Excretion.",
    keyReminder: "Pharmacokinetics links directly to clinical dosing decisions. Understanding it prevents patient harm.",
    resources: [
      { label: "Pharmacology Full Series", url: "https://www.youtube.com/@AKpharmD", source: "AKPharmD" },
      { label: "Pharmacology Lectures", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Drug Delivery Systems", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Katzung Pharmacology Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  pharm_y3: {
    tagline: "Year 3 · Clinical Pharmacy",
    focus: "Applying pharmaceutical knowledge directly to real patient drug therapy management.",
    subjects: [
      { name: "Clinical Pharmacy Practice", icon: "🏥" },
      { name: "Pharmacotherapeutics", icon: "💊" },
      { name: "Drug Information and Literature", icon: "📚" },
      { name: "Hospital and Community Pharmacy", icon: "🏪" },
      { name: "Pharmacy Law and Regulation", icon: "⚖️" },
    ],
    weakAreas: [
      { name: "Drug-Drug Interactions", topic: "Clinical Pharmacy — Polypharmacy Management" },
      { name: "Inhaler Counselling Technique", topic: "Pharmacotherapeutics — Respiratory" },
      { name: "Renal Dose Adjustment", topic: "Clinical Pharmacy — Organ-Specific Dosing" },
    ],
    todaysPriority: "Review warfarin interactions and INR monitoring parameters — asked on virtually every clinical exam.",
    keyReminder: "Your role is not just to dispense — it is to optimise drug therapy and actively prevent harm.",
    resources: [
      { label: "Clinical Pharmacy Series", url: "https://www.youtube.com/@AKpharmD", source: "AKPharmD" },
      { label: "Therapeutics Lectures", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Drug Interactions Guide", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "DiPiro Pharmacotherapy Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  pharm_y4: {
    tagline: "Year 4 · Advanced Practice and Board Preparation",
    focus: "Speciality rotations, compounding, pharmacoeconomics, and pharmacy licensure.",
    subjects: [
      { name: "Speciality Clinical Rotations", icon: "🏥" },
      { name: "Pharmaceutical Compounding", icon: "⚗️" },
      { name: "Pharmacoeconomics", icon: "📊" },
      { name: "Research and Dissertation", icon: "📝" },
      { name: "NAPLEX and Board Exam Prep", icon: "🎯" },
    ],
    weakAreas: [
      { name: "Sterile Compounding Technique", topic: "Compounding — Aseptic Preparation" },
      { name: "Cost-Effectiveness Analysis", topic: "Pharmacoeconomics — CBA and CEA" },
      { name: "Pharmaceutical Calculation Sets", topic: "NAPLEX Prep — Dose Calculations" },
    ],
    todaysPriority: "Complete a full mock NAPLEX pharmaceutical calculations set — they are guaranteed on the exam.",
    keyReminder: "Keep a drug therapy monitoring log from your rotation. It doubles as revision and portfolio evidence.",
    resources: [
      { label: "NAPLEX Prep Videos", url: "https://www.youtube.com/@AKpharmD", source: "AKPharmD" },
      { label: "Board Exam Review Series", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Advanced Pharmacotherapy", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "NAPLEX Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  // ─── DENTISTRY ──────────────────────────────────────────────────────────
  dent_y1: {
    tagline: "Year 1 · Dental Sciences Foundation",
    focus: "Head and neck anatomy, dental tissues, and the foundations of dental practice.",
    subjects: [
      { name: "Head and Neck Anatomy", icon: "🦴" },
      { name: "Dental Histology and Embryology", icon: "🔬" },
      { name: "Oral Biochemistry", icon: "🧪" },
      { name: "Introduction to Dental Practice", icon: "🦷" },
      { name: "Dental Materials Science", icon: "⚗️" },
    ],
    weakAreas: [
      { name: "Cranial Nerve Pathways V, VII, IX", topic: "Anatomy — Cranial Nerves for Dentistry" },
      { name: "Permanent Tooth Morphology", topic: "Histology — Dentition Classification" },
      { name: "Composite Bonding Chemistry", topic: "Dental Materials — Adhesive Systems" },
    ],
    todaysPriority: "Learn permanent dentition tooth morphology and numbering systems (FDI and Palmer).",
    keyReminder: "In dentistry, manual dexterity matters as much as theory. Practise preclinical carving tasks weekly.",
    resources: [
      { label: "Dental Anatomy Video Series", url: "https://www.youtube.com/@DentistryInspired", source: "Dentistry Inspired" },
      { label: "Head and Neck Anatomy", url: "https://geekymedics.com/anatomy/", source: "Geeky Medics" },
      { label: "Dental Sciences Review", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Dental Materials Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  dent_y2: {
    tagline: "Year 2 · Pre-clinical Operative Dentistry",
    focus: "Mastering pre-clinical operative techniques and understanding oral pathology.",
    subjects: [
      { name: "Oral Pathology", icon: "🦠" },
      { name: "Operative Dentistry — Pre-clinical", icon: "🦷" },
      { name: "Dental Pharmacology", icon: "💊" },
      { name: "Periodontology", icon: "🦷" },
      { name: "Dental Radiology and Radiography", icon: "📡" },
    ],
    weakAreas: [
      { name: "GV Black Cavity Classification", topic: "Operative — Cavity Preparation Classes" },
      { name: "Periapical Lesion Diagnosis", topic: "Oral Pathology — Periapical Disease" },
      { name: "Periodontal Probing Technique", topic: "Periodontology — Clinical Assessment" },
    ],
    todaysPriority: "Revise GV Black cavity classifications I through VI — they underlie all restorative planning.",
    keyReminder: "Radiograph interpretation must be systematic. Use a consistent ABCDE approach for every film.",
    resources: [
      { label: "Operative Dentistry Series", url: "https://www.youtube.com/@DentistryInspired", source: "Dentistry Inspired" },
      { label: "Oral Pathology Review", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Periodontology Guide", url: "https://geekymedics.com", source: "Geeky Medics" },
      { label: "Dental Radiology Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  dent_y3: {
    tagline: "Year 3 · Clinical Dentistry Begins",
    focus: "First patient contact — restorations, extractions, and preventive dentistry.",
    subjects: [
      { name: "Clinical Operative Dentistry", icon: "🦷" },
      { name: "Oral Medicine", icon: "🏥" },
      { name: "Removable Prosthodontics", icon: "🦷" },
      { name: "Paediatric Dentistry", icon: "👶" },
      { name: "Dental Public Health", icon: "🌍" },
    ],
    weakAreas: [
      { name: "IANB Local Anaesthesia Technique", topic: "Oral Surgery — Inferior Alveolar Nerve Block" },
      { name: "Complete Denture Border Moulding", topic: "Prosthodontics — Impression Technique" },
      { name: "Pulp Therapy in Primary Teeth", topic: "Paediatric Dentistry — Pulpotomy" },
    ],
    todaysPriority: "Practise the IANB landmark approach on a mannequin before your next clinical session.",
    keyReminder: "Treat every patient encounter like an OSCE — consent, explain, perform, and review systematically.",
    resources: [
      { label: "Clinical Dentistry Videos", url: "https://www.youtube.com/@DentistryInspired", source: "Dentistry Inspired" },
      { label: "Local Anaesthesia Techniques", url: "https://geekymedics.com", source: "Geeky Medics" },
      { label: "Prosthodontics Review", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Oral Medicine Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  dent_y4: {
    tagline: "Year 4 · Advanced Clinical Rotations",
    focus: "Complex restorations, endodontics, oral surgery, and orthodontics in clinical practice.",
    subjects: [
      { name: "Endodontics", icon: "🦷" },
      { name: "Oral and Maxillofacial Surgery", icon: "🩹" },
      { name: "Fixed Prosthodontics", icon: "🦷" },
      { name: "Orthodontics", icon: "😬" },
      { name: "Implantology — Introduction", icon: "🔩" },
    ],
    weakAreas: [
      { name: "Working Length Determination", topic: "Endodontics — Electronic Apex Locator" },
      { name: "Crown Preparation Margin Design", topic: "Fixed Prosthodontics — Marginal Integrity" },
      { name: "Cephalometric Analysis and Tracing", topic: "Orthodontics — Cephalometry" },
    ],
    todaysPriority: "Master access cavity preparation for all tooth groups — this is tested in clinical OSCEs.",
    keyReminder: "Root canal failures are mostly due to missed canals. Always verify working length radiographically.",
    resources: [
      { label: "Endodontics Step by Step", url: "https://www.youtube.com/@DentistryInspired", source: "Dentistry Inspired" },
      { label: "Orthodontics and Surgery", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Fixed Prosthodontics Guide", url: "https://geekymedics.com", source: "Geeky Medics" },
      { label: "Oral Surgery Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  dent_y5: {
    tagline: "Year 5 · Final Year and Board Preparation",
    focus: "Clinical consolidation and national dental licensing examination preparation.",
    subjects: [
      { name: "Comprehensive Patient Care", icon: "🎯" },
      { name: "Dental Board Exam Prep", icon: "📝" },
      { name: "Special Needs Dentistry", icon: "♿" },
      { name: "Practice Management and Law", icon: "⚖️" },
      { name: "Research Project and Thesis", icon: "📊" },
    ],
    weakAreas: [
      { name: "Multi-phase Treatment Planning", topic: "Comprehensive Care — Complex Cases" },
      { name: "Medically Compromised Patients", topic: "Special Needs — ASA Classification" },
      { name: "Board Examination Strategy", topic: "NDEB, ADC, or ORE Preparation" },
    ],
    todaysPriority: "Draft your comprehensive treatment plan for your case presentation patient from start to finish.",
    keyReminder: "Boards test breadth. Cover every discipline — do not over-revise your strengths at the cost of weak areas.",
    resources: [
      { label: "Final Year Dentistry Videos", url: "https://www.youtube.com/@DentistryInspired", source: "Dentistry Inspired" },
      { label: "Board Exam Review", url: "https://www.amboss.com", source: "Amboss" },
      { label: "Special Needs and Law", url: "https://geekymedics.com", source: "Geeky Medics" },
      { label: "Comprehensive Dental Review", url: "https://www.osmosis.org", source: "Osmosis" },
    ],
  },

  // ─── PHYSIOTHERAPY ──────────────────────────────────────────────────────
  physio_y1: {
    tagline: "Year 1 · Biological and Physiotherapy Foundations",
    focus: "Understanding the body's structure, movement science, and the physiotherapy profession.",
    subjects: [
      { name: "Functional Anatomy and Kinesiology", icon: "🦴" },
      { name: "Physiology and Exercise Science", icon: "❤️" },
      { name: "Introduction to Physiotherapy", icon: "🏃" },
      { name: "Therapeutic Exercise I", icon: "💪" },
      { name: "Electrotherapy Principles", icon: "⚡" },
    ],
    weakAreas: [
      { name: "Muscle Actions at Major Joints", topic: "Kinesiology — Upper and Lower Limb" },
      { name: "Types of Muscle Contractions", topic: "Exercise Science — Isotonic and Isometric" },
      { name: "Normal Gait Cycle Phases", topic: "Biomechanics — Stance and Swing Phase" },
    ],
    todaysPriority: "Master the gait cycle — stance phase sub-phases, swing phase, and clinical significance of each.",
    keyReminder: "Physiotherapy is evidence-based. Every intervention you learn must have a physiological rationale.",
    resources: [
      { label: "Physio Anatomy and Kinesiology", url: "https://www.youtube.com/@BobandBrad", source: "Bob and Brad" },
      { label: "Exercise Science Fundamentals", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Physiopedia — All Topics", url: "https://www.physiopedia.com", source: "Physiopedia" },
      { label: "Physiotherapy Foundations", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  physio_y2: {
    tagline: "Year 2 · Clinical Sciences and Patient Assessment",
    focus: "Learning to assess patients systematically and understand pathological movement patterns.",
    subjects: [
      { name: "Musculoskeletal Physiotherapy", icon: "🦴" },
      { name: "Neurological Physiotherapy I", icon: "🧠" },
      { name: "Cardiopulmonary Physiotherapy", icon: "❤️" },
      { name: "Clinical Assessment and Diagnosis", icon: "🩺" },
      { name: "Research Methods in PT", icon: "📊" },
    ],
    weakAreas: [
      { name: "Special Tests for the Knee", topic: "Musculoskeletal — Ligament Integrity Tests" },
      { name: "ASIA Spinal Cord Classification", topic: "Neurology — SCI Assessment Grading" },
      { name: "Postural Drainage Positions", topic: "Cardiopulmonary — Airway Clearance" },
    ],
    todaysPriority: "Practise shoulder special tests: Hawkins-Kennedy, Neer, Speed, and Empty Can tests.",
    keyReminder: "Your clinical reasoning must always link your assessment findings directly to your treatment plan.",
    resources: [
      { label: "MSK Assessment Videos", url: "https://www.youtube.com/@BobandBrad", source: "Bob and Brad" },
      { label: "Neurological Physio Guide", url: "https://www.physiopedia.com", source: "Physiopedia" },
      { label: "Cardiopulmonary PT", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Orthopaedic Assessment Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  physio_y3: {
    tagline: "Year 3 · Clinical Placement I",
    focus: "Supervised clinical practice in hospital, outpatient, and community PT settings.",
    subjects: [
      { name: "Musculoskeletal Clinical Placement", icon: "🦴" },
      { name: "Neurological Clinical Placement", icon: "🧠" },
      { name: "Paediatric Physiotherapy", icon: "👶" },
      { name: "Sports and Exercise Physiotherapy", icon: "⚽" },
      { name: "Professional Practice and Ethics", icon: "⚖️" },
    ],
    weakAreas: [
      { name: "Stroke Rehabilitation Sequencing", topic: "Neuro — Bobath Approach for CVA" },
      { name: "Return to Sport Criteria", topic: "Sports PT — ACL Rehabilitation Protocol" },
      { name: "Developmental Motor Milestones", topic: "Paediatrics — Normal Development" },
    ],
    todaysPriority: "Write your SOAP note for your last patient encounter and discuss the plan with your supervisor.",
    keyReminder: "Your placement logbook entries are professional records. Write them as if a court may read them.",
    resources: [
      { label: "Sports and Rehab Videos", url: "https://www.youtube.com/@BobandBrad", source: "Bob and Brad" },
      { label: "Neurological Rehab Guide", url: "https://www.physiopedia.com", source: "Physiopedia" },
      { label: "Paediatric PT Resources", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Clinical Placement Support", url: "https://geekymedics.com", source: "Geeky Medics" },
    ],
  },

  physio_y4: {
    tagline: "Year 4 · Advanced Clinical Practice and Graduation",
    focus: "Advanced clinical specialisation, research completion, and board exam preparation.",
    subjects: [
      { name: "Advanced Clinical Speciality", icon: "🎯" },
      { name: "Community and Disability Rehabilitation", icon: "♿" },
      { name: "Research Thesis and Project", icon: "📝" },
      { name: "Health Services Management", icon: "📋" },
      { name: "PT Board Exam Preparation", icon: "📊" },
    ],
    weakAreas: [
      { name: "Outcome Measurement Scales", topic: "Advanced Practice — FIM, Barthel, SF-36" },
      { name: "Manual Therapy Maitland Grades", topic: "Musculoskeletal — Joint Mobilisation" },
      { name: "ICF Framework Application", topic: "Disability — WHO ICF Model" },
    ],
    todaysPriority: "Apply the WHO ICF framework to a complex case study — function, activity, participation.",
    keyReminder: "Your research project is due this year. Start your literature search and methodology section today.",
    resources: [
      { label: "NPTE and Board Exam Prep", url: "https://www.physiopedia.com", source: "Physiopedia" },
      { label: "Advanced Rehab Videos", url: "https://www.youtube.com/@BobandBrad", source: "Bob and Brad" },
      { label: "ICF and Disability Framework", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "PT Board Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  // ─── PUBLIC HEALTH ───────────────────────────────────────────────────────
  ph_y1: {
    tagline: "Year 1 · Foundations of Public Health",
    focus: "Understanding populations, health determinants, and the global burden of disease.",
    subjects: [
      { name: "Epidemiology I", icon: "📊" },
      { name: "Biostatistics I", icon: "🔢" },
      { name: "Social Determinants of Health", icon: "🌍" },
      { name: "Global Health", icon: "🌐" },
      { name: "Environmental Health", icon: "🌱" },
    ],
    weakAreas: [
      { name: "Sensitivity vs Specificity", topic: "Epidemiology — Screening Test Metrics" },
      { name: "Study Design Selection", topic: "Epi — RCT vs Cohort vs Case-Control" },
      { name: "DALYs and Burden of Disease", topic: "Global Health — Disease Burden Metrics" },
    ],
    todaysPriority: "Learn the difference between incidence and prevalence — and when each is the right measure to use.",
    keyReminder: "Public health operates at population level. Think in rates and distributions, not individual cases.",
    resources: [
      { label: "Epidemiology Video Lectures", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Biostatistics for Public Health", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Global Health Resources", url: "https://geekymedics.com", source: "Geeky Medics" },
      { label: "Gordis Epidemiology Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  ph_y2: {
    tagline: "Year 2 · Intermediate Public Health Science",
    focus: "Health policy, programme evaluation, disease surveillance, and NCD prevention.",
    subjects: [
      { name: "Health Policy and Systems", icon: "🏛️" },
      { name: "Infectious Disease Epidemiology", icon: "🦠" },
      { name: "NCD Prevention and Control", icon: "❤️" },
      { name: "Health Promotion", icon: "📢" },
      { name: "Biostatistics II — Advanced", icon: "📊" },
    ],
    weakAreas: [
      { name: "Herd Immunity Threshold", topic: "Infectious Disease Epi — Vaccination" },
      { name: "Odds Ratio Interpretation", topic: "Biostatistics — Case-Control Studies" },
      { name: "Behavioural Change Models", topic: "Health Promotion — TTM, HBM, SCT" },
    ],
    todaysPriority: "Calculate and interpret an odds ratio from a 2x2 contingency table without referring to notes.",
    keyReminder: "Health policy is shaped by politics as much as evidence. Learn to translate data into stakeholder language.",
    resources: [
      { label: "Epidemiology Advanced Lectures", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Health Policy and Systems", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Public Health Guides", url: "https://geekymedics.com", source: "Geeky Medics" },
      { label: "Biostatistics Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  ph_y3: {
    tagline: "Year 3 · Applied Public Health and Research",
    focus: "Translating theory into real-world interventions, outbreak response, and leadership.",
    subjects: [
      { name: "Applied Epi and Outbreak Investigation", icon: "🔍" },
      { name: "Public Health Nutrition", icon: "🥗" },
      { name: "Health Economics", icon: "💰" },
      { name: "Research Dissertation", icon: "📝" },
      { name: "Public Health Leadership", icon: "👥" },
    ],
    weakAreas: [
      { name: "Outbreak Investigation Steps", topic: "Applied Epi — Case Definition and Attack Rate" },
      { name: "Cost-Effectiveness ICER Plane", topic: "Health Economics — Economic Evaluation" },
      { name: "Meta-analysis Forest Plot Reading", topic: "Research — Systematic Review Methods" },
    ],
    todaysPriority: "Work on at least 3 articles for your dissertation literature review chapter today.",
    keyReminder: "Community trust is built BEFORE the outbreak, not during it. Invest in relationships now.",
    resources: [
      { label: "Applied Epidemiology Lectures", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Health Economics Guide", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Public Health Research Skills", url: "https://geekymedics.com", source: "Geeky Medics" },
      { label: "Oxford Public Health Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  // ─── MEDICAL LABORATORY SCIENCE ─────────────────────────────────────────
  mls_y1: {
    tagline: "Year 1 · Laboratory Science Foundations",
    focus: "Core science principles, laboratory equipment, safety, and quality systems.",
    subjects: [
      { name: "Anatomy and Physiology", icon: "🦴" },
      { name: "Biochemistry", icon: "🧪" },
      { name: "Introduction to MLS", icon: "🔬" },
      { name: "Laboratory Mathematics and Statistics", icon: "🔢" },
      { name: "Laboratory Safety and Quality", icon: "🛡️" },
    ],
    weakAreas: [
      { name: "SI Unit Conversions and Molarity", topic: "Lab Maths — Concentration Calculations" },
      { name: "Centrifuge Speed vs RCF", topic: "Equipment — Laboratory Instruments" },
      { name: "Chain of Custody for Specimens", topic: "Quality — Specimen Integrity and Handling" },
    ],
    todaysPriority: "Practise concentration and dilution calculations without a calculator — they appear in every exam.",
    keyReminder: "Every result you report affects a patient's diagnosis and treatment. Accuracy is not optional.",
    resources: [
      { label: "MLS Fundamentals Videos", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Clinical Chemistry Basics", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Lab Safety and Quality", url: "https://geekymedics.com", source: "Geeky Medics" },
      { label: "Clinical Lab Science Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  mls_y2: {
    tagline: "Year 2 · Core Laboratory Disciplines",
    focus: "Haematology, microbiology, clinical chemistry, and blood banking in depth.",
    subjects: [
      { name: "Haematology and Coagulation", icon: "🩸" },
      { name: "Medical Microbiology", icon: "🦠" },
      { name: "Clinical Chemistry", icon: "🧪" },
      { name: "Blood Banking and Transfusion", icon: "🩸" },
      { name: "Urinalysis and Body Fluids", icon: "🔬" },
    ],
    weakAreas: [
      { name: "Anaemia Classification by MCV", topic: "Haematology — Microcytic, Normocytic, Macrocytic" },
      { name: "Gram Stain Interpretation", topic: "Microbiology — Bacterial Morphology" },
      { name: "ABO and Rh Blood Group Systems", topic: "Blood Banking — Compatibility Testing" },
    ],
    todaysPriority: "Classify anaemia by MCV and list causes for each type without referring to notes.",
    keyReminder: "Blood banking errors can be fatal. Follow the two-patient identifier verification rule on every sample.",
    resources: [
      { label: "Haematology Lecture Series", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Clinical Chemistry Videos", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Microbiology Lab Guide", url: "https://geekymedics.com", source: "Geeky Medics" },
      { label: "Transfusion Medicine Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  mls_y3: {
    tagline: "Year 3 · Advanced Laboratory Practice and Board Prep",
    focus: "Molecular diagnostics, immunology, parasitology, and MLS licensure preparation.",
    subjects: [
      { name: "Molecular Diagnostics and PCR", icon: "🧬" },
      { name: "Immunology and Serology", icon: "🛡️" },
      { name: "Parasitology and Mycology", icon: "🦠" },
      { name: "Quality Assurance and Lab Management", icon: "📋" },
      { name: "MLS Board Exam Preparation", icon: "📝" },
    ],
    weakAreas: [
      { name: "PCR Primer Design Principles", topic: "Molecular — Polymerase Chain Reaction" },
      { name: "ELISA Plate Reading", topic: "Immunology — Enzyme Immunoassay Interpretation" },
      { name: "Malaria Species Differentiation", topic: "Parasitology — Thick and Thin Blood Films" },
    ],
    todaysPriority: "Study the differences between Plasmodium falciparum, P. vivax, and P. malariae on blood films.",
    keyReminder: "Quality assurance is tested heavily on boards. Know Westgard rules and their clinical implications.",
    resources: [
      { label: "Molecular Diagnostics Videos", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Immunology and Serology", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Parasitology Guide", url: "https://geekymedics.com", source: "Geeky Medics" },
      { label: "MLS Board Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },

  // ─── GENERIC FALLBACK ────────────────────────────────────────────────────
  generic: {
    tagline: "Health Sciences · Year 1",
    focus: "Building the scientific foundations for your health science career.",
    subjects: [
      { name: "Anatomy and Physiology", icon: "🦴" },
      { name: "Biochemistry and Cell Biology", icon: "🧪" },
      { name: "Introduction to Health Sciences", icon: "🏥" },
      { name: "Biostatistics and Research", icon: "📊" },
      { name: "Professional Ethics", icon: "⚖️" },
    ],
    weakAreas: [
      { name: "Cell Membrane Transport", topic: "Physiology — Active and Passive Transport" },
      { name: "Enzyme Kinetics", topic: "Biochemistry — Michaelis-Menten" },
      { name: "Hypothesis Testing", topic: "Biostatistics — P-value and Confidence Intervals" },
    ],
    todaysPriority: "Create a weekly study schedule and stick to it. Consistency beats cramming every time.",
    keyReminder: "Your first year builds the foundation for everything that follows. Invest in understanding, not memorisation.",
    resources: [
      { label: "Health Sciences Fundamentals", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
      { label: "Anatomy and Physiology Videos", url: "https://geekymedics.com", source: "Geeky Medics" },
      { label: "Science Video Courses", url: "https://www.osmosis.org", source: "Osmosis" },
      { label: "Clinical Sciences Q-Bank", url: "https://www.amboss.com", source: "Amboss" },
    ],
  },
}

function getKey(programme: string, level: string): string {
  const p = programme.toLowerCase()
  const l = level.toLowerCase()
  const y1 = l.includes("year 1") || l.includes("1 (") || l.includes("first")
  const y2 = l.includes("year 2") || l.includes("second")
  const y3 = l.includes("year 3") || l.includes("third")
  const y4 = l.includes("year 4") || l.includes("fourth")
  const y5 = l.includes("year 5") || l.includes("fifth")
  const y6 = l.includes("year 6") || l.includes("sixth") || l.includes("final")
  const intern = l.includes("intern") || l.includes("house")

  if (p.includes("mbchb") || p.includes("mbbs") || p.includes("medicine")) {
    if (intern) return "med_intern"
    if (y6) return "med_y6"
    if (y5) return "med_y5"
    if (y4) return "med_y4"
    if (y3) return "med_y3"
    if (y2) return "med_y2"
    return "med_y1"
  }
  if (p.includes("nurs") || p.includes("bnurs")) {
    if (y4) return "nurs_y4"
    if (y3) return "nurs_y3"
    if (y2) return "nurs_y2"
    return "nurs_y1"
  }
  if (p.includes("pharm")) {
    if (y4) return "pharm_y4"
    if (y3) return "pharm_y3"
    if (y2) return "pharm_y2"
    return "pharm_y1"
  }
  if (p.includes("dent")) {
    if (y5) return "dent_y5"
    if (y4) return "dent_y4"
    if (y3) return "dent_y3"
    if (y2) return "dent_y2"
    return "dent_y1"
  }
  if (p.includes("physio")) {
    if (y4) return "physio_y4"
    if (y3) return "physio_y3"
    if (y2) return "physio_y2"
    return "physio_y1"
  }
  if (p.includes("public health") || p.includes("mph") || p.includes("bsc public")) {
    if (y3) return "ph_y3"
    if (y2) return "ph_y2"
    return "ph_y1"
  }
  if (p.includes("lab") || p.includes("laboratory") || p.includes("bmls") || p.includes("mls")) {
    if (y3) return "mls_y3"
    if (y2) return "mls_y2"
    return "mls_y1"
  }
  return "generic"
}

export function getCurriculum(programme: string, level: string): CurriculumData {
  const key = getKey(programme || "", level || "")
  return DB[key] ?? DB["generic"]
}
