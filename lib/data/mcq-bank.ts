/**
 * lib/data/mcq-bank.ts
 * PodMyth MCQ Question Bank
 * Sources: Snell (Anatomy), Junqueira (Histology), Langman (Embryology),
 * Ganong (Physiology), Robbins (Histopathology), Bailey & Love (Surgery),
 * Coovadia (Paediatrics), Macleod's (Internal Medicine), WHO Guidelines
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export type QuestionType = "sba" | "true_false" | "multiple_true_false"

export interface MCQOption {
  id: string
  text: string
  is_correct: boolean
}

export interface MCQQuestion {
  id: string
  stem: string
  question_type: QuestionType
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
  icon: string
  sections: MCQCourseSection[]
  programme: "mbchb" | "bds" | "both"
  textbook: string
}

// ─── Question Bank ────────────────────────────────────────────────────────────

export const MCQ_QUESTION_BANK: MCQQuestion[] = [

  // ═══════════════════════════════════
  // PHYSIOLOGY — Cardiovascular
  // ═══════════════════════════════════
  {
    id: "sba-phys-cvs-001",
    stem: "A 68-year-old man is found to have a resting heart rate of 45 bpm. His ECG shows regular P waves followed by QRS complexes with a constant PR interval of 0.24 seconds. What is the MOST likely diagnosis?",
    question_type: "sba",
    difficulty: "medium",
    subject: "Physiology",
    section: "Cardiovascular Physiology",
    programme: "both",
    explanation: "A PR interval >0.20 seconds (200 ms) defines first-degree heart block. All impulses are conducted, so P:QRS ratio is 1:1 and rhythm is regular. The long PR interval indicates delayed conduction through the AV node. It is not a 'block' in the strict sense — no beats are dropped.",
    reference: "Ganong's Review of Medical Physiology, 26th Ed. (Chapter 30: Heart as a Pump)",
    options: [
      { id: "sba-phys-cvs-001-a", text: "Third-degree (complete) heart block", is_correct: false },
      { id: "sba-phys-cvs-001-b", text: "Second-degree Mobitz type I block", is_correct: false },
      { id: "sba-phys-cvs-001-c", text: "First-degree heart block", is_correct: true },
      { id: "sba-phys-cvs-001-d", text: "Sinoatrial exit block", is_correct: false },
      { id: "sba-phys-cvs-001-e", text: "Junctional rhythm", is_correct: false },
    ],
  },
  {
    id: "tf-phys-cvs-001",
    stem: "The Frank-Starling mechanism states that an increase in end-diastolic volume leads to increased stroke volume.",
    question_type: "true_false",
    difficulty: "easy",
    subject: "Physiology",
    section: "Cardiovascular Physiology",
    programme: "both",
    explanation: "This is the core principle of the Frank-Starling law: as the ventricle fills more (greater preload/EDV), the myocardial fibres are stretched further, leading to more forceful contraction and increased stroke volume. This allows the heart to match output to venous return.",
    reference: "Ganong's Review of Medical Physiology, 26th Ed. (Chapter 30)",
    options: [
      { id: "tf-phys-cvs-001-t", text: "True", is_correct: true },
      { id: "tf-phys-cvs-001-f", text: "False", is_correct: false },
    ],
  },
  {
    id: "mtf-phys-cvs-001",
    stem: "Regarding the cardiac action potential in ventricular myocytes:",
    question_type: "multiple_true_false",
    difficulty: "medium",
    subject: "Physiology",
    section: "Cardiovascular Physiology",
    programme: "both",
    explanation: "Phase 0 (rapid depolarisation) is due to Na+ influx. Phase 2 (plateau) is due to Ca2+ influx via L-type channels, balanced by K+ efflux — unique to cardiac cells. The refractory period prevents tetanic contraction. The resting membrane potential is approximately -90 mV maintained by K+ leak channels.",
    reference: "Ganong's Review of Medical Physiology, 26th Ed. (Chapter 29: Excitable Tissue: Heart)",
    options: [
      { id: "mtf-phys-cvs-001-a", text: "Phase 0 (rapid upstroke) is caused by rapid influx of Na+ ions", is_correct: true },
      { id: "mtf-phys-cvs-001-b", text: "The plateau phase (Phase 2) is due to Ca2+ entry through L-type channels", is_correct: true },
      { id: "mtf-phys-cvs-001-c", text: "The resting membrane potential of ventricular cells is approximately -55 mV", is_correct: false },
      { id: "mtf-phys-cvs-001-d", text: "The long refractory period prevents tetanic contraction of the heart", is_correct: true },
    ],
  },
  {
    id: "sba-phys-cvs-002",
    stem: "A patient's arterial blood pressure is 120/80 mmHg and heart rate is 75 bpm. Stroke volume is 70 mL. What is the cardiac output?",
    question_type: "sba",
    difficulty: "easy",
    subject: "Physiology",
    section: "Cardiovascular Physiology",
    programme: "both",
    explanation: "Cardiac output (CO) = Stroke Volume (SV) × Heart Rate (HR). CO = 70 mL × 75 beats/min = 5,250 mL/min ≈ 5.25 L/min. Normal resting CO is 4–8 L/min.",
    reference: "Ganong's Review of Medical Physiology, 26th Ed. (Chapter 30)",
    options: [
      { id: "sba-phys-cvs-002-a", text: "2.5 L/min", is_correct: false },
      { id: "sba-phys-cvs-002-b", text: "5.25 L/min", is_correct: true },
      { id: "sba-phys-cvs-002-c", text: "7.0 L/min", is_correct: false },
      { id: "sba-phys-cvs-002-d", text: "10.5 L/min", is_correct: false },
    ],
  },
  {
    id: "tf-phys-cvs-002",
    stem: "Baroreceptors in the carotid sinus respond to increased arterial pressure by decreasing heart rate.",
    question_type: "true_false",
    difficulty: "easy",
    subject: "Physiology",
    section: "Cardiovascular Physiology",
    programme: "both",
    explanation: "Stretch-sensitive baroreceptors in the carotid sinus and aortic arch detect increased arterial pressure. Afferent signals via CN IX (Hering's nerve) and CN X reach the nucleus tractus solitarius. This activates the vagus (CN X) and inhibits sympathetic outflow, causing bradycardia and vasodilation, thereby reducing BP — the baroreflex.",
    reference: "Ganong's Review of Medical Physiology, 26th Ed. (Chapter 32: Cardiovascular Regulatory Mechanisms)",
    options: [
      { id: "tf-phys-cvs-002-t", text: "True", is_correct: true },
      { id: "tf-phys-cvs-002-f", text: "False", is_correct: false },
    ],
  },

  // ═══════════════════════════════════
  // PHYSIOLOGY — Respiratory
  // ═══════════════════════════════════
  {
    id: "sba-phys-resp-001",
    stem: "A mountaineer at high altitude has an arterial PO2 of 50 mmHg. Which of the following physiological responses is MOST important in maintaining adequate tissue oxygen delivery in this acute setting?",
    question_type: "sba",
    difficulty: "hard",
    subject: "Physiology",
    section: "Respiratory Physiology",
    programme: "both",
    explanation: "The primary acute response to hypoxia at altitude is hyperventilation driven by peripheral chemoreceptors (carotid bodies), which detect low PO2. This reduces PaCO2 (hypocapnia) and raises PAO2. Polycythaemia and 2,3-DPG increases are chronic adaptations.",
    reference: "Ganong's Review of Medical Physiology, 26th Ed. (Chapter 36: Regulation of Respiration)",
    options: [
      { id: "sba-phys-resp-001-a", text: "Increased erythropoietin production", is_correct: false },
      { id: "sba-phys-resp-001-b", text: "Hyperventilation driven by peripheral chemoreceptors", is_correct: true },
      { id: "sba-phys-resp-001-c", text: "Increased 2,3-DPG production", is_correct: false },
      { id: "sba-phys-resp-001-d", text: "Pulmonary vasoconstriction", is_correct: false },
      { id: "sba-phys-resp-001-e", text: "Systemic vasodilation", is_correct: false },
    ],
  },
  {
    id: "tf-phys-resp-001",
    stem: "Surfactant produced by type II pneumocytes reduces alveolar surface tension and prevents alveolar collapse.",
    question_type: "true_false",
    difficulty: "easy",
    subject: "Physiology",
    section: "Respiratory Physiology",
    programme: "both",
    explanation: "Pulmonary surfactant (dipalmitoylphosphatidylcholine, DPPC) is produced by type II pneumocytes and lines the alveolar air-liquid interface. It reduces surface tension, thereby reducing the work of breathing, increasing lung compliance, and preventing end-expiratory alveolar collapse. Its deficiency in premature infants causes respiratory distress syndrome (RDS).",
    reference: "Ganong's Review of Medical Physiology, 26th Ed. (Chapter 34: Pulmonary Function)",
    options: [
      { id: "tf-phys-resp-001-t", text: "True", is_correct: true },
      { id: "tf-phys-resp-001-f", text: "False", is_correct: false },
    ],
  },
  {
    id: "mtf-phys-resp-001",
    stem: "Regarding oxygen transport in blood:",
    question_type: "multiple_true_false",
    difficulty: "medium",
    subject: "Physiology",
    section: "Respiratory Physiology",
    programme: "both",
    explanation: "About 98-99% of O2 is transported bound to haemoglobin; only ~1-2% is dissolved. Each haemoglobin molecule (4 haem groups) can carry 4 O2. The normal P50 (PO2 at which Hb is 50% saturated) is ~27 mmHg. Fetal haemoglobin (HbF) has a higher O2 affinity (shifted left) due to less binding of 2,3-DPG.",
    reference: "Ganong's Review of Medical Physiology, 26th Ed. (Chapter 35: Gas Transport & pH)",
    options: [
      { id: "mtf-phys-resp-001-a", text: "Approximately 98% of oxygen in blood is transported bound to haemoglobin", is_correct: true },
      { id: "mtf-phys-resp-001-b", text: "Fetal haemoglobin has a higher affinity for oxygen than adult haemoglobin", is_correct: true },
      { id: "mtf-phys-resp-001-c", text: "Increased 2,3-DPG causes a left shift in the oxygen-haemoglobin dissociation curve", is_correct: false },
      { id: "mtf-phys-resp-001-d", text: "Carbon dioxide is transported mainly as bicarbonate in plasma", is_correct: true },
    ],
  },

  // ═══════════════════════════════════
  // ANATOMY — Upper Limb
  // ═══════════════════════════════════
  {
    id: "sba-anat-ul-001",
    stem: "A 32-year-old construction worker sustains a fracture of the surgical neck of the humerus after falling from scaffolding. On examination he is unable to abduct the arm at the shoulder and has sensory loss over a small area on the lateral aspect of the upper arm. Which nerve has been injured?",
    question_type: "sba",
    difficulty: "medium",
    subject: "Anatomy",
    section: "Upper Limb",
    programme: "both",
    explanation: "The axillary nerve (C5, C6) wraps around the surgical neck of the humerus in the quadrangular space. It supplies the deltoid (responsible for arm abduction beyond 15°) and teres minor, and provides cutaneous innervation to the regimental badge area over the lateral upper arm. Fracture of the surgical neck classically injures this nerve.",
    reference: "Snell's Clinical Anatomy by Regions, 10th Ed. (Upper Limb: Axillary Nerve)",
    options: [
      { id: "sba-anat-ul-001-a", text: "Radial nerve", is_correct: false },
      { id: "sba-anat-ul-001-b", text: "Axillary nerve", is_correct: true },
      { id: "sba-anat-ul-001-c", text: "Suprascapular nerve", is_correct: false },
      { id: "sba-anat-ul-001-d", text: "Musculocutaneous nerve", is_correct: false },
      { id: "sba-anat-ul-001-e", text: "Upper subscapular nerve", is_correct: false },
    ],
  },
  {
    id: "sba-anat-ul-002",
    stem: "A 50-year-old woman presents with wasting of the thenar eminence and tingling of the thumb, index, and middle fingers. Her symptoms worsen at night. Phalen's test is positive. What is the MOST likely diagnosis?",
    question_type: "sba",
    difficulty: "easy",
    subject: "Anatomy",
    section: "Upper Limb",
    programme: "both",
    explanation: "Carpal tunnel syndrome results from compression of the median nerve within the carpal tunnel beneath the flexor retinaculum. The median nerve supplies the thenar muscles (abductor pollicis brevis, opponens pollicis, flexor pollicis brevis) and sensation to the lateral 3½ digits. Night worsening is characteristic. Phalen's test (sustained wrist flexion reproducing symptoms) is positive.",
    reference: "Snell's Clinical Anatomy by Regions, 10th Ed. (Upper Limb: Carpal Tunnel)",
    options: [
      { id: "sba-anat-ul-002-a", text: "Cubital tunnel syndrome", is_correct: false },
      { id: "sba-anat-ul-002-b", text: "Carpal tunnel syndrome", is_correct: true },
      { id: "sba-anat-ul-002-c", text: "Radial tunnel syndrome", is_correct: false },
      { id: "sba-anat-ul-002-d", text: "Pronator teres syndrome", is_correct: false },
      { id: "sba-anat-ul-002-e", text: "Thoracic outlet syndrome", is_correct: false },
    ],
  },
  {
    id: "tf-anat-ul-001",
    stem: "The ulnar nerve passes anterior to the medial epicondyle of the humerus in the cubital tunnel.",
    question_type: "true_false",
    difficulty: "easy",
    subject: "Anatomy",
    section: "Upper Limb",
    programme: "both",
    explanation: "FALSE. The ulnar nerve passes POSTERIOR to the medial epicondyle in the cubital tunnel (cubital tunnel = groove between medial epicondyle and olecranon). This is why a direct blow to the 'funny bone' causes ulnar paraesthesia. Anterior transposition of the ulnar nerve is a surgical option for cubital tunnel syndrome.",
    reference: "Snell's Clinical Anatomy by Regions, 10th Ed. (Upper Limb: Ulnar Nerve)",
    options: [
      { id: "tf-anat-ul-001-t", text: "True", is_correct: false },
      { id: "tf-anat-ul-001-f", text: "False", is_correct: true },
    ],
  },
  {
    id: "mtf-anat-ul-001",
    stem: "Regarding the brachial plexus:",
    question_type: "multiple_true_false",
    difficulty: "hard",
    subject: "Anatomy",
    section: "Upper Limb",
    programme: "both",
    explanation: "The brachial plexus arises from C5-T1. Erb's palsy (upper trunk injury, C5-C6) causes waiter's tip posture. Klumpke's palsy (lower trunk injury, C8-T1) causes claw hand and Horner's syndrome if T1 sympathetics are disrupted. The musculocutaneous nerve is a terminal branch of the lateral cord (C5, C6, C7).",
    reference: "Snell's Clinical Anatomy by Regions, 10th Ed. (Upper Limb: Brachial Plexus)",
    options: [
      { id: "mtf-anat-ul-001-a", text: "The brachial plexus is formed from the anterior primary rami of C5 to T1", is_correct: true },
      { id: "mtf-anat-ul-001-b", text: "Erb's palsy results from injury to the upper trunk (C5–C6)", is_correct: true },
      { id: "mtf-anat-ul-001-c", text: "Klumpke's palsy can cause Horner's syndrome due to involvement of T1", is_correct: true },
      { id: "mtf-anat-ul-001-d", text: "The musculocutaneous nerve is a branch of the medial cord", is_correct: false },
    ],
  },

  // ═══════════════════════════════════
  // ANATOMY — Head & Neck
  // ═══════════════════════════════════
  {
    id: "sba-anat-hn-001",
    stem: "During a right-sided radical neck dissection for metastatic thyroid carcinoma, the surgeon inadvertently injures a nerve running vertically in the posterior triangle. Post-operatively the patient is unable to shrug his right shoulder and has winging of the right scapula. Which nerve was injured?",
    question_type: "sba",
    difficulty: "medium",
    subject: "Anatomy",
    section: "Head & Neck",
    programme: "both",
    explanation: "The accessory nerve (CN XI) runs through the posterior triangle of the neck, superficial to the deep cervical fascia. It supplies the sternocleidomastoid (neck rotation) and trapezius (shoulder shrug, scapular stabilisation). Injury during neck surgery causes inability to shrug the shoulder and trapezius wasting. Winging of the scapula due to serratus anterior is caused by long thoracic nerve injury — here the question describes trapezius winging.",
    reference: "Snell's Clinical Anatomy by Regions, 10th Ed. (Head & Neck: Posterior Triangle)",
    options: [
      { id: "sba-anat-hn-001-a", text: "Long thoracic nerve", is_correct: false },
      { id: "sba-anat-hn-001-b", text: "Phrenic nerve", is_correct: false },
      { id: "sba-anat-hn-001-c", text: "Accessory nerve (CN XI)", is_correct: true },
      { id: "sba-anat-hn-001-d", text: "Hypoglossal nerve", is_correct: false },
      { id: "sba-anat-hn-001-e", text: "Greater auricular nerve", is_correct: false },
    ],
  },

  // ═══════════════════════════════════
  // HISTOLOGY
  // ═══════════════════════════════════
  {
    id: "sba-histo-epi-001",
    stem: "On light microscopy of the small intestinal mucosa, tall columnar cells are seen with a prominent brush border and goblet cells interspersed among them. The epithelial layer rests on a thin basal lamina. What type of epithelium is this?",
    question_type: "sba",
    difficulty: "easy",
    subject: "Histology",
    section: "GI Histology",
    programme: "both",
    explanation: "The small intestinal mucosa is lined by simple columnar epithelium with microvilli (brush border) that dramatically increase the absorptive surface area. Goblet cells secreting mucus are interspersed. The epithelium is 'simple' (single layer) because nutrient absorption requires direct access to the basal lamina.",
    reference: "Junqueira's Basic Histology, 16th Ed. (Chapter 15: Digestive Tract)",
    options: [
      { id: "sba-histo-epi-001-a", text: "Stratified squamous epithelium", is_correct: false },
      { id: "sba-histo-epi-001-b", text: "Simple columnar epithelium with brush border", is_correct: true },
      { id: "sba-histo-epi-001-c", text: "Pseudostratified columnar epithelium", is_correct: false },
      { id: "sba-histo-epi-001-d", text: "Transitional epithelium", is_correct: false },
      { id: "sba-histo-epi-001-e", text: "Simple cuboidal epithelium", is_correct: false },
    ],
  },
  {
    id: "tf-histo-ct-001",
    stem: "Collagen type IV is the main structural component of basement membranes.",
    question_type: "true_false",
    difficulty: "easy",
    subject: "Histology",
    section: "Connective Tissue",
    programme: "both",
    explanation: "Type IV collagen forms a sheet-like (non-fibrillar) network that is the principal structural component of basement membranes. It is associated with laminin, nidogen, and perlecan. It supports epithelial and endothelial cell attachment, filtration in the kidney, and acts as a scaffold for cell migration.",
    reference: "Junqueira's Basic Histology, 16th Ed. (Chapter 5: Connective Tissue)",
    options: [
      { id: "tf-histo-ct-001-t", text: "True", is_correct: true },
      { id: "tf-histo-ct-001-f", text: "False", is_correct: false },
    ],
  },
  {
    id: "mtf-histo-nt-001",
    stem: "Regarding neurons and neuroglia:",
    question_type: "multiple_true_false",
    difficulty: "medium",
    subject: "Histology",
    section: "Nervous Tissue",
    programme: "both",
    explanation: "Astrocytes (not oligodendrocytes) are the most numerous glial cells in the CNS. Oligodendrocytes produce CNS myelin; Schwann cells produce PNS myelin. Microglia are derived from mesoderm (monocyte lineage) and are the brain's immune effectors. The Nissl body represents rough ER and ribosomes, found in the soma and dendrites but NOT in the axon.",
    reference: "Junqueira's Basic Histology, 16th Ed. (Chapter 9: Nerve Tissue & Nervous System)",
    options: [
      { id: "mtf-histo-nt-001-a", text: "Oligodendrocytes are responsible for myelination in the central nervous system", is_correct: true },
      { id: "mtf-histo-nt-001-b", text: "Astrocytes are the most numerous type of glial cell in the CNS", is_correct: true },
      { id: "mtf-histo-nt-001-c", text: "Nissl bodies are found in the axon and dendrites of neurons", is_correct: false },
      { id: "mtf-histo-nt-001-d", text: "Microglia are derived from monocyte precursors originating in bone marrow", is_correct: true },
    ],
  },

  // ═══════════════════════════════════
  // EMBRYOLOGY
  // ═══════════════════════════════════
  {
    id: "sba-embr-cvd-001",
    stem: "A 6-week-old infant is noted to have cyanosis that improves when crying. Echocardiography shows posterior displacement of the aorta and an infundibular VSD. The great arteries are transposed. What is the embryological basis of this defect?",
    question_type: "sba",
    difficulty: "hard",
    subject: "Embryology",
    section: "Cardiovascular Development",
    programme: "both",
    explanation: "Transposition of the great arteries (TGA) results from failure of the aorticopulmonary septum to spiral (rotate) during division of the truncus arteriosus. Normally, the septum spirals 180° so the aorta arises from the left ventricle and pulmonary artery from the right. Without spiral rotation, the aorta connects to the right ventricle and the pulmonary artery to the left ventricle.",
    reference: "Langman's Medical Embryology, 14th Ed. (Chapter 12: Cardiovascular System)",
    options: [
      { id: "sba-embr-cvd-001-a", text: "Anterior deviation of the conotruncal septum", is_correct: false },
      { id: "sba-embr-cvd-001-b", text: "Failure of the aorticopulmonary septum to spiral during truncus division", is_correct: true },
      { id: "sba-embr-cvd-001-c", text: "Failure of endocardial cushion fusion", is_correct: false },
      { id: "sba-embr-cvd-001-d", text: "Persistence of the right umbilical vein", is_correct: false },
      { id: "sba-embr-cvd-001-e", text: "Abnormal regression of the left fourth aortic arch", is_correct: false },
    ],
  },
  {
    id: "tf-embr-gam-001",
    stem: "Primordial germ cells originate in the wall of the yolk sac and migrate to the gonadal ridges.",
    question_type: "true_false",
    difficulty: "easy",
    subject: "Embryology",
    section: "Gametogenesis",
    programme: "both",
    explanation: "Primordial germ cells (PGCs) first appear in the epiblast and then migrate to the wall of the yolk sac near the allantois by week 3. From there they migrate along the dorsal mesentery to colonise the gonadal ridges (future gonads) by week 5-6. Their migration is essential for normal gonadal development.",
    reference: "Langman's Medical Embryology, 14th Ed. (Chapter 1: Gametogenesis)",
    options: [
      { id: "tf-embr-gam-001-t", text: "True", is_correct: true },
      { id: "tf-embr-gam-001-f", text: "False", is_correct: false },
    ],
  },
  {
    id: "mtf-embr-cns-001",
    stem: "Regarding neural tube development:",
    question_type: "multiple_true_false",
    difficulty: "medium",
    subject: "Embryology",
    section: "CNS Development",
    programme: "both",
    explanation: "Neural tube closure begins at day 22-23 (Carnegie stage 10), occurring first in the cervical region and then proceeding cranially and caudally (like a zip). Failure of the anterior neuropore to close causes anencephaly; failure of the posterior neuropore causes spina bifida/myelomeningocele. Folic acid supplementation reduces neural tube defect risk by ~70%. Neural crest cells arise from the dorsal neural tube/neural fold junction.",
    reference: "Langman's Medical Embryology, 14th Ed. (Chapter 18: CNS)",
    options: [
      { id: "mtf-embr-cns-001-a", text: "Neural tube closure begins at the cervical region around day 22", is_correct: true },
      { id: "mtf-embr-cns-001-b", text: "Failure of the anterior neuropore to close results in anencephaly", is_correct: true },
      { id: "mtf-embr-cns-001-c", text: "Folic acid supplementation has no proven effect on neural tube defect prevention", is_correct: false },
      { id: "mtf-embr-cns-001-d", text: "Neural crest cells give rise to peripheral ganglia and adrenal medulla", is_correct: true },
    ],
  },

  // ═══════════════════════════════════
  // HISTOPATHOLOGY
  // ═══════════════════════════════════
  {
    id: "sba-path-ci-001",
    stem: "On autopsy of a patient who died 8 hours after an acute anterior myocardial infarction, which of the following histological findings would be MOST expected at the zone of infarction?",
    question_type: "sba",
    difficulty: "hard",
    subject: "Histopathology",
    section: "Cell Injury & Death",
    programme: "both",
    explanation: "In the first 12-24 hours after an MI, the hallmark is coagulative necrosis characterised by preserved cell outlines with loss of nuclei (pyknosis → karyolysis) and cytoplasmic eosinophilia. Oedema and wavy fibres appear earliest (1-3 hrs). Neutrophil infiltration begins at 12-24 hrs. At 8 hrs, coagulative necrosis with eosinophilic cardiomyocytes and early nuclear loss is the classic finding.",
    reference: "Robbins Basic Pathology, 10th Ed. (Chapter 3: Cell Injury & Death)",
    options: [
      { id: "sba-path-ci-001-a", text: "Granulation tissue with capillary proliferation", is_correct: false },
      { id: "sba-path-ci-001-b", text: "Dense fibrosis with collagen deposition", is_correct: false },
      { id: "sba-path-ci-001-c", text: "Coagulative necrosis with eosinophilic cardiomyocytes and nuclear loss", is_correct: true },
      { id: "sba-path-ci-001-d", text: "Extensive neutrophil infiltration throughout the necrotic zone", is_correct: false },
      { id: "sba-path-ci-001-e", text: "Complete macrophage infiltration with ghost cells", is_correct: false },
    ],
  },
  {
    id: "tf-path-neopl-001",
    stem: "Benign tumours are characterised by slow growth, well-defined margins, and an absence of metastasis.",
    question_type: "true_false",
    difficulty: "easy",
    subject: "Histopathology",
    section: "Neoplasia",
    programme: "both",
    explanation: "Benign tumours are typically slow-growing, well-circumscribed or encapsulated, have a low mitotic rate, do not invade adjacent tissues, and do NOT metastasise. They often closely resemble the tissue of origin (well-differentiated). However, benign tumours can still cause significant harm by compression of adjacent structures (e.g., benign brain meningioma).",
    reference: "Robbins Basic Pathology, 10th Ed. (Chapter 7: Neoplasia)",
    options: [
      { id: "tf-path-neopl-001-t", text: "True", is_correct: true },
      { id: "tf-path-neopl-001-f", text: "False", is_correct: false },
    ],
  },
  {
    id: "mtf-path-infl-001",
    stem: "Regarding acute inflammation:",
    question_type: "multiple_true_false",
    difficulty: "medium",
    subject: "Histopathology",
    section: "Inflammation",
    programme: "both",
    explanation: "Acute inflammation features the four cardinal signs (rubor, calor, tumor, dolor, plus loss of function). It is characterised by NEUTROPHIL (not lymphocyte) infiltration. Histamine from mast cells is an early mediator causing vasodilation and increased vascular permeability. Resolution is a possible outcome, but chronic inflammation, abscess formation, or scarring may also occur.",
    reference: "Robbins Basic Pathology, 10th Ed. (Chapter 2: Acute and Chronic Inflammation)",
    options: [
      { id: "mtf-path-infl-001-a", text: "Neutrophils are the predominant cell type in acute inflammation", is_correct: true },
      { id: "mtf-path-infl-001-b", text: "Histamine from mast cells is an early mediator of increased vascular permeability", is_correct: true },
      { id: "mtf-path-infl-001-c", text: "Acute inflammation invariably leads to full resolution", is_correct: false },
      { id: "mtf-path-infl-001-d", text: "The classic signs of inflammation include redness, heat, swelling, and pain", is_correct: true },
    ],
  },

  // ═══════════════════════════════════
  // INTERNAL MEDICINE — Cardiovascular
  // ═══════════════════════════════════
  {
    id: "sba-im-cvs-001",
    stem: "A 72-year-old man with hypertension presents with sudden-onset severe chest pain radiating to his back, described as 'tearing'. His BP is 180/100 mmHg in the right arm and 140/80 mmHg in the left arm. CXR shows widening of the mediastinum. What is the MOST likely diagnosis?",
    question_type: "sba",
    difficulty: "medium",
    subject: "Internal Medicine",
    section: "Cardiovascular",
    programme: "mbchb",
    explanation: "Aortic dissection classically presents with sudden severe tearing or ripping chest pain radiating to the back, hypertension, and unequal blood pressures in the arms (>20 mmHg difference) due to involvement of subclavian branches. CXR widened mediastinum is a key clue. Type A involves the ascending aorta (surgical emergency); Type B involves the descending aorta.",
    reference: "Macleod's Clinical Examination, 14th Ed. (Cardiovascular System: Aortic Dissection)",
    options: [
      { id: "sba-im-cvs-001-a", text: "Acute myocardial infarction", is_correct: false },
      { id: "sba-im-cvs-001-b", text: "Pulmonary embolism", is_correct: false },
      { id: "sba-im-cvs-001-c", text: "Aortic dissection", is_correct: true },
      { id: "sba-im-cvs-001-d", text: "Hypertensive emergency with pulmonary oedema", is_correct: false },
      { id: "sba-im-cvs-001-e", text: "Oesophageal rupture (Boerhaave syndrome)", is_correct: false },
    ],
  },
  {
    id: "tf-im-cvs-001",
    stem: "In heart failure with reduced ejection fraction (HFrEF), the ejection fraction is defined as less than 40%.",
    question_type: "true_false",
    difficulty: "easy",
    subject: "Internal Medicine",
    section: "Cardiovascular",
    programme: "mbchb",
    explanation: "HFrEF (systolic heart failure) is defined as EF < 40%. HFmrEF (mildly reduced) = EF 40-49%. HFpEF (preserved EF) = EF ≥ 50%. Treatment differs: HFrEF benefits from ACE inhibitors/ARBs, beta-blockers, mineralocorticoid antagonists, and SGLT2 inhibitors; HFpEF has fewer proven disease-modifying therapies.",
    reference: "Macleod's Clinical Examination, 14th Ed. (Cardiovascular System: Heart Failure)",
    options: [
      { id: "tf-im-cvs-001-t", text: "True", is_correct: true },
      { id: "tf-im-cvs-001-f", text: "False", is_correct: false },
    ],
  },
  {
    id: "sba-im-resp-001",
    stem: "A 65-year-old long-term smoker presents with progressive dyspnoea, chronic productive cough for 3 years, and recurrent chest infections. Spirometry shows FEV1/FVC ratio of 0.55 and FEV1 of 55% predicted. What is the GOLD grade of COPD?",
    question_type: "sba",
    difficulty: "medium",
    subject: "Internal Medicine",
    section: "Respiratory",
    programme: "mbchb",
    explanation: "GOLD grading of COPD is based on post-bronchodilator FEV1 as a percentage of predicted, when FEV1/FVC < 0.70: GOLD 1 (mild): FEV1 ≥ 80%. GOLD 2 (moderate): FEV1 50-79%. GOLD 3 (severe): FEV1 30-49%. GOLD 4 (very severe): FEV1 < 30%. FEV1 of 55% predicted = GOLD 2 (moderate).",
    reference: "Macleod's Clinical Examination, 14th Ed. (Respiratory System: COPD / GOLD Guidelines)",
    options: [
      { id: "sba-im-resp-001-a", text: "GOLD 1 (Mild)", is_correct: false },
      { id: "sba-im-resp-001-b", text: "GOLD 2 (Moderate)", is_correct: true },
      { id: "sba-im-resp-001-c", text: "GOLD 3 (Severe)", is_correct: false },
      { id: "sba-im-resp-001-d", text: "GOLD 4 (Very Severe)", is_correct: false },
      { id: "sba-im-resp-001-e", text: "Cannot be classified without full ABCD assessment", is_correct: false },
    ],
  },

  // ═══════════════════════════════════
  // SURGERY
  // ═══════════════════════════════════
  {
    id: "sba-surg-ug-001",
    stem: "A 55-year-old man presents with 6-hour history of severe epigastric pain radiating to the back, nausea, and vomiting. He has a history of gallstones and drinks 30 units of alcohol/week. On examination his abdomen is rigid with guarding. Serum amylase is 1,200 U/L (normal <100). What is the MOST likely diagnosis?",
    question_type: "sba",
    difficulty: "easy",
    subject: "Surgery",
    section: "Upper GI Surgery",
    programme: "mbchb",
    explanation: "Acute pancreatitis presents with severe epigastric pain radiating to the back, nausea/vomiting, and markedly elevated serum amylase (>3× upper limit of normal is diagnostic). The two most common causes are gallstones (60%) and alcohol (30%). Rigid abdomen with guarding suggests peritoneal irritation from enzyme leakage.",
    reference: "Bailey & Love's Short Practice of Surgery, 27th Ed. (Chapter 65: Pancreas)",
    options: [
      { id: "sba-surg-ug-001-a", text: "Perforated duodenal ulcer", is_correct: false },
      { id: "sba-surg-ug-001-b", text: "Acute pancreatitis", is_correct: true },
      { id: "sba-surg-ug-001-c", text: "Acute cholecystitis", is_correct: false },
      { id: "sba-surg-ug-001-d", text: "Mesenteric ischaemia", is_correct: false },
      { id: "sba-surg-ug-001-e", text: "Aortic aneurysm rupture", is_correct: false },
    ],
  },
  {
    id: "tf-surg-gen-001",
    stem: "The most common cause of acute intestinal obstruction in adults in sub-Saharan Africa is adhesions from previous abdominal surgery.",
    question_type: "true_false",
    difficulty: "medium",
    subject: "Surgery",
    section: "Lower GI Surgery",
    programme: "mbchb",
    explanation: "In high-income countries, adhesions from previous surgery are the most common cause. However, in sub-Saharan Africa, strangulated hernias (especially inguinal and umbilical) remain the most common cause of small bowel obstruction in many settings, as access to elective hernia repair is limited. This epidemiological difference is important in the African clinical context.",
    reference: "Bailey & Love's Short Practice of Surgery, 27th Ed. (Chapter 68: Small Intestine)",
    options: [
      { id: "tf-surg-gen-001-t", text: "True", is_correct: false },
      { id: "tf-surg-gen-001-f", text: "False", is_correct: true },
    ],
  },
  {
    id: "mtf-surg-gen-001",
    stem: "Regarding Hartmann's operation for sigmoid colon perforation:",
    question_type: "multiple_true_false",
    difficulty: "hard",
    subject: "Surgery",
    section: "Lower GI Surgery",
    programme: "mbchb",
    explanation: "Hartmann's procedure involves resection of the diseased sigmoid colon segment, closure of the rectal stump, and formation of an end colostomy. It avoids anastomosis in a contaminated field. Reversal (restoring bowel continuity) is possible in fit patients but carries significant morbidity. It is commonly used for perforated diverticulitis (Hinchey III/IV) or perforated colorectal cancer.",
    reference: "Bailey & Love's Short Practice of Surgery, 27th Ed. (Chapter 70: Large Intestine)",
    options: [
      { id: "mtf-surg-gen-001-a", text: "Hartmann's operation involves resection of the diseased bowel and formation of an end colostomy", is_correct: true },
      { id: "mtf-surg-gen-001-b", text: "The rectal stump is oversewn and left in situ during Hartmann's procedure", is_correct: true },
      { id: "mtf-surg-gen-001-c", text: "Reversal of a Hartmann's procedure is not possible once performed", is_correct: false },
      { id: "mtf-surg-gen-001-d", text: "Hartmann's procedure is used to avoid a primary anastomosis in a contaminated field", is_correct: true },
    ],
  },

  // ═══════════════════════════════════
  // PAEDIATRICS
  // ═══════════════════════════════════
  {
    id: "sba-paed-neo-001",
    stem: "A neonate born at 30 weeks gestation develops progressive respiratory distress 2 hours after birth, with grunting, intercostal retractions, nasal flaring, and central cyanosis. CXR shows bilateral ground-glass opacities with air bronchograms. What is the MOST likely diagnosis?",
    question_type: "sba",
    difficulty: "easy",
    subject: "Paediatrics",
    section: "Neonatology",
    programme: "mbchb",
    explanation: "Respiratory Distress Syndrome (RDS/HMD) of the newborn is the most common cause of respiratory failure in premature infants. It is caused by surfactant deficiency, leading to alveolar collapse (atelectasis). Characteristic CXR shows diffuse bilateral ground-glass opacification with air bronchograms (patent bronchi surrounded by collapsed alveoli). Treatment: antenatal corticosteroids, exogenous surfactant, CPAP/ventilation.",
    reference: "Coovadia's Paediatrics and Child Health, 7th Ed. (Chapter 15: Neonatal Respiratory Distress)",
    options: [
      { id: "sba-paed-neo-001-a", text: "Meconium aspiration syndrome", is_correct: false },
      { id: "sba-paed-neo-001-b", text: "Neonatal pneumonia", is_correct: false },
      { id: "sba-paed-neo-001-c", text: "Respiratory distress syndrome (hyaline membrane disease)", is_correct: true },
      { id: "sba-paed-neo-001-d", text: "Transient tachypnoea of the newborn", is_correct: false },
      { id: "sba-paed-neo-001-e", text: "Congenital diaphragmatic hernia", is_correct: false },
    ],
  },
  {
    id: "tf-paed-nut-001",
    stem: "Kwashiorkor is characterised by oedema, skin changes (flaky paint dermatosis), and preserved subcutaneous fat, in contrast to marasmus which shows severe muscle and fat wasting.",
    question_type: "true_false",
    difficulty: "easy",
    subject: "Paediatrics",
    section: "Nutrition & Growth",
    programme: "mbchb",
    explanation: "Kwashiorkor (protein-energy malnutrition predominantly protein-deficient) is characterised by oedema (hypoalbuminaemia), flaky paint/crazy paving dermatosis, moon face, hepatomegaly (fatty liver), misery/apathy, and relatively preserved weight due to oedema. Subcutaneous fat may be relatively preserved. Marasmus (severe energy deficiency) shows severe wasting of muscle and fat with little or no oedema, the 'skin and bones' appearance.",
    reference: "Coovadia's Paediatrics and Child Health, 7th Ed. (Chapter 9: Nutrition)",
    options: [
      { id: "tf-paed-nut-001-t", text: "True", is_correct: true },
      { id: "tf-paed-nut-001-f", text: "False", is_correct: false },
    ],
  },
  {
    id: "sba-paed-inf-001",
    stem: "A 2-year-old child in Zimbabwe presents with fever, severe pallor, and mild jaundice. He has splenomegaly. Blood film shows ring-form trophozoites and infected erythrocytes that do not contain Schüffner's dots. Parasite count is 8% of RBCs. What is the MOST appropriate immediate management?",
    question_type: "sba",
    difficulty: "medium",
    subject: "Paediatrics",
    section: "Infectious Diseases",
    programme: "mbchb",
    explanation: "Plasmodium falciparum malaria is the most dangerous species, characterised by high-density parasitaemia, ring-form trophozoites in RBCs WITHOUT Schüffner's dots (P. vivax/ovale have Schüffner's dots), and ability to cause severe disease. With >5% parasitaemia and severe anaemia, this is severe malaria. IV artesunate is the first-line treatment for severe P. falciparum malaria per WHO guidelines.",
    reference: "Coovadia's Paediatrics and Child Health, 7th Ed. (Chapter 22: Malaria) + WHO Malaria Guidelines 2023",
    options: [
      { id: "sba-paed-inf-001-a", text: "Oral artemether-lumefantrine", is_correct: false },
      { id: "sba-paed-inf-001-b", text: "Intravenous artesunate", is_correct: true },
      { id: "sba-paed-inf-001-c", text: "Intravenous quinine", is_correct: false },
      { id: "sba-paed-inf-001-d", text: "Intramuscular mefloquine", is_correct: false },
      { id: "sba-paed-inf-001-e", text: "Oral hydroxychloroquine", is_correct: false },
    ],
  },
  {
    id: "mtf-paed-neo-001",
    stem: "Regarding neonatal jaundice:",
    question_type: "multiple_true_false",
    difficulty: "medium",
    subject: "Paediatrics",
    section: "Neonatology",
    programme: "mbchb",
    explanation: "Physiological jaundice appears after 24 hours (not before) and resolves by day 7-10. Jaundice within the first 24 hours is always pathological (consider haemolytic disease of the newborn — Rh/ABO incompatibility). Phototherapy converts unconjugated bilirubin to water-soluble photoisomers excreted in urine and bile. Kernicterus (bilirubin encephalopathy) is caused by unconjugated (indirect) bilirubin depositing in the basal ganglia and brainstem.",
    reference: "Coovadia's Paediatrics and Child Health, 7th Ed. (Chapter 14: Neonatal Jaundice)",
    options: [
      { id: "mtf-paed-neo-001-a", text: "Physiological neonatal jaundice typically appears after the first 24 hours of life", is_correct: true },
      { id: "mtf-paed-neo-001-b", text: "Jaundice appearing within the first 24 hours of life is always pathological", is_correct: true },
      { id: "mtf-paed-neo-001-c", text: "Phototherapy works by conjugating bilirubin in the liver", is_correct: false },
      { id: "mtf-paed-neo-001-d", text: "Kernicterus is caused by deposition of unconjugated bilirubin in the brain", is_correct: true },
    ],
  },

  // ═══════════════════════════════════
  // COMMUNITY MEDICINE
  // ═══════════════════════════════════
  {
    id: "sba-comm-epi-001",
    stem: "A study follows 10,000 non-smoking adults and 5,000 smoking adults for 10 years, recording new cases of lung cancer. At the end, there are 50 new lung cancer cases among non-smokers and 200 among smokers. What is the relative risk (RR) of lung cancer in smokers compared to non-smokers?",
    question_type: "sba",
    difficulty: "medium",
    subject: "Community Medicine",
    section: "Epidemiology",
    programme: "both",
    explanation: "RR = Incidence in exposed / Incidence in unexposed. Incidence in smokers = 200/5000 = 0.04 (4%). Incidence in non-smokers = 50/10,000 = 0.005 (0.5%). RR = 0.04/0.005 = 8. Smokers have 8 times the risk of developing lung cancer compared to non-smokers in this cohort study.",
    reference: "WHO Guidelines + Epidemiology & Biostatistics (Core Curriculum)",
    options: [
      { id: "sba-comm-epi-001-a", text: "RR = 2", is_correct: false },
      { id: "sba-comm-epi-001-b", text: "RR = 4", is_correct: false },
      { id: "sba-comm-epi-001-c", text: "RR = 8", is_correct: true },
      { id: "sba-comm-epi-001-d", text: "RR = 16", is_correct: false },
      { id: "sba-comm-epi-001-e", text: "RR = 0.5", is_correct: false },
    ],
  },
  {
    id: "tf-comm-epi-001",
    stem: "Sensitivity of a diagnostic test is defined as the proportion of true positives correctly identified by the test.",
    question_type: "true_false",
    difficulty: "easy",
    subject: "Community Medicine",
    section: "Epidemiology",
    programme: "both",
    explanation: "Sensitivity = TP / (TP + FN). It measures the test's ability to correctly identify people WITH the disease. A highly sensitive test has few false negatives and is used for screening ('rule out' — SnNout: Sensitive test with Negative result rules OUT disease). Specificity = TN / (TN + FP) — ability to correctly identify people WITHOUT the disease.",
    reference: "WHO Guidelines + Epidemiology & Biostatistics (Core Curriculum)",
    options: [
      { id: "tf-comm-epi-001-t", text: "True", is_correct: true },
      { id: "tf-comm-epi-001-f", text: "False", is_correct: false },
    ],
  },

  // ═══════════════════════════════════
  // OBSTETRICS & GYNAECOLOGY
  // ═══════════════════════════════════
  {
    id: "sba-obgyn-obst-001",
    stem: "A 28-year-old primigravida at 38 weeks gestation presents with a 2-day history of headache, blurred vision, and right upper quadrant pain. Her BP is 165/110 mmHg on two readings 4 hours apart. Urinalysis shows 3+ protein. Platelet count is 85 × 10⁹/L and serum LDH is markedly elevated. What is the diagnosis?",
    question_type: "sba",
    difficulty: "medium",
    subject: "Obstetrics & Gynaecology",
    section: "Obstetric Complications",
    programme: "mbchb",
    explanation: "HELLP syndrome (Haemolysis, Elevated Liver enzymes, Low Platelets) is a severe complication of pre-eclampsia. This patient has hypertension (≥160/110), proteinuria, thrombocytopaenia (platelets <100×10⁹/L), elevated LDH (haemolysis), and right upper quadrant pain (hepatic capsule stretching). This is a severe variant requiring urgent delivery.",
    reference: "WHO Recommendations for Prevention and Treatment of Pre-eclampsia and Eclampsia, 2011",
    options: [
      { id: "sba-obgyn-obst-001-a", text: "Gestational hypertension", is_correct: false },
      { id: "sba-obgyn-obst-001-b", text: "Pre-eclampsia without severe features", is_correct: false },
      { id: "sba-obgyn-obst-001-c", text: "HELLP syndrome", is_correct: true },
      { id: "sba-obgyn-obst-001-d", text: "Acute fatty liver of pregnancy", is_correct: false },
      { id: "sba-obgyn-obst-001-e", text: "Immune thrombocytopenic purpura (ITP) in pregnancy", is_correct: false },
    ],
  },
  {
    id: "tf-obgyn-obst-001",
    stem: "Magnesium sulphate is the drug of choice for prevention and treatment of eclamptic seizures.",
    question_type: "true_false",
    difficulty: "easy",
    subject: "Obstetrics & Gynaecology",
    section: "Obstetric Complications",
    programme: "mbchb",
    explanation: "Magnesium sulphate (MgSO4) is the drug of choice for both prevention of eclampsia in women with severe pre-eclampsia and treatment of eclamptic seizures. It is superior to diazepam and phenytoin. The Magpie trial (2002) definitively established this. It acts as an NMDA receptor antagonist and reduces cerebral vasospasm. The loading dose is 4g IV over 15-20 minutes, followed by maintenance infusion.",
    reference: "WHO Recommendations for Prevention and Treatment of Pre-eclampsia and Eclampsia, 2011",
    options: [
      { id: "tf-obgyn-obst-001-t", text: "True", is_correct: true },
      { id: "tf-obgyn-obst-001-f", text: "False", is_correct: false },
    ],
  },

  // ═══════════════════════════════════
  // PSYCHIATRY
  // ═══════════════════════════════════
  {
    id: "sba-psych-mood-001",
    stem: "A 35-year-old woman presents with a 3-week history of elevated mood, decreased need for sleep (sleeping 3-4 hours/night and feeling rested), pressured speech, grandiose ideas (believes she is about to discover a cure for cancer), and spending large amounts of money recklessly. She has no prior psychiatric history. What is the MOST likely diagnosis?",
    question_type: "sba",
    difficulty: "easy",
    subject: "Psychiatry",
    section: "Mood Disorders",
    programme: "mbchb",
    explanation: "A manic episode is defined as a distinct period of abnormally and persistently elevated, expansive, or irritable mood and increased goal-directed activity lasting ≥1 week (ICD-11/DSM-5), with features including decreased need for sleep, pressured speech, grandiosity, and reckless behaviour. First manic episode = Bipolar I disorder. No prior depressive episode is required for diagnosis.",
    reference: "ICD-11 / DSM-5 (Bipolar and Related Disorders)",
    options: [
      { id: "sba-psych-mood-001-a", text: "Hypomanic episode", is_correct: false },
      { id: "sba-psych-mood-001-b", text: "Manic episode (Bipolar I)", is_correct: true },
      { id: "sba-psych-mood-001-c", text: "Major depressive episode with psychotic features", is_correct: false },
      { id: "sba-psych-mood-001-d", text: "Schizophrenia", is_correct: false },
      { id: "sba-psych-mood-001-e", text: "Cyclothymic disorder", is_correct: false },
    ],
  },
  {
    id: "tf-psych-mood-001",
    stem: "Lithium is the first-line mood stabiliser for acute mania and long-term prevention of bipolar disorder relapse.",
    question_type: "true_false",
    difficulty: "medium",
    subject: "Psychiatry",
    section: "Mood Disorders",
    programme: "mbchb",
    explanation: "Lithium remains first-line for long-term prophylaxis of bipolar disorder and has the strongest evidence for suicide prevention. For acute mania, antipsychotics (e.g., haloperidol, olanzapine, risperidone) or valproate are often used first (especially if agitated) as lithium takes 5-14 days for full effect. Lithium requires monitoring of serum levels, renal function, and thyroid function due to narrow therapeutic index (0.6-1.2 mmol/L therapeutic, >1.5 toxic).",
    reference: "ICD-11 / DSM-5 + NICE Guidelines (Bipolar Disorder)",
    options: [
      { id: "tf-psych-mood-001-t", text: "True", is_correct: false },
      { id: "tf-psych-mood-001-f", text: "False", is_correct: true },
    ],
  },

  // ═══════════════════════════════════
  // PHARMACOLOGY
  // ═══════════════════════════════════
  {
    id: "sba-pharm-anti-001",
    stem: "A 25-year-old woman develops severe anaphylaxis following a penicillin injection. She is given intramuscular adrenaline (epinephrine) 0.5 mg. What is the PRIMARY mechanism by which adrenaline reverses anaphylaxis?",
    question_type: "sba",
    difficulty: "medium",
    subject: "Pharmacology",
    section: "Autonomic Pharmacology",
    programme: "both",
    explanation: "Adrenaline (epinephrine) acts on α1 receptors (causing vasoconstriction, reducing oedema and hypotension) and β2 receptors (causing bronchodilation, reversing bronchoconstriction). It also acts on β1 receptors (increasing heart rate and contractility). Its α1-mediated vasoconstriction to reverse vasodilation/hypotension and β2-mediated bronchodilation are the primary life-saving effects in anaphylaxis.",
    reference: "Katzung Basic & Clinical Pharmacology, 15th Ed. (Chapter 9: Adrenoceptor Agonists)",
    options: [
      { id: "sba-pharm-anti-001-a", text: "Activation of muscarinic M2 receptors increasing vagal tone", is_correct: false },
      { id: "sba-pharm-anti-001-b", text: "Inhibition of mast cell degranulation via H1 receptors", is_correct: false },
      { id: "sba-pharm-anti-001-c", text: "α1 and β2 adrenoceptor activation causing vasoconstriction and bronchodilation", is_correct: true },
      { id: "sba-pharm-anti-001-d", text: "Competitive antagonism of histamine at H1 receptors", is_correct: false },
      { id: "sba-pharm-anti-001-e", text: "Activation of dopamine D1 receptors in peripheral vasculature", is_correct: false },
    ],
  },
  {
    id: "tf-pharm-anti-001",
    stem: "Beta-lactam antibiotics act by inhibiting bacterial cell wall synthesis through binding to penicillin-binding proteins (PBPs).",
    question_type: "true_false",
    difficulty: "easy",
    subject: "Pharmacology",
    section: "Antimicrobials",
    programme: "both",
    explanation: "Beta-lactam antibiotics (penicillins, cephalosporins, carbapenems, monobactams) contain a β-lactam ring that binds covalently to and irreversibly inhibits penicillin-binding proteins (PBPs), which are enzymes (transpeptidases) essential for cross-linking peptidoglycan strands in bacterial cell walls. This leads to defective cell walls, cell lysis, and death. Beta-lactamases produced by resistant bacteria hydrolyse the β-lactam ring.",
    reference: "Katzung Basic & Clinical Pharmacology, 15th Ed. (Chapter 43: Beta-Lactam Antibiotics)",
    options: [
      { id: "tf-pharm-anti-001-t", text: "True", is_correct: true },
      { id: "tf-pharm-anti-001-f", text: "False", is_correct: false },
    ],
  },
  {
    id: "mtf-pharm-anti-001",
    stem: "Regarding mechanisms of antibiotic resistance:",
    question_type: "multiple_true_false",
    difficulty: "hard",
    subject: "Pharmacology",
    section: "Antimicrobials",
    programme: "both",
    explanation: "Methicillin-resistant Staphylococcus aureus (MRSA) produces an altered PBP (PBP2a) encoded by mecA gene, with reduced beta-lactam affinity. ESBL-producing organisms (e.g., Klebsiella, E. coli) produce extended-spectrum beta-lactamases that hydrolyse most penicillins and cephalosporins. Efflux pumps expel antibiotics from the bacterial cell; reduced porin expression reduces drug entry into gram-negative bacteria.",
    reference: "Katzung Basic & Clinical Pharmacology, 15th Ed. (Chapter 51: Antimicrobial Resistance)",
    options: [
      { id: "mtf-pharm-anti-001-a", text: "MRSA confers resistance by producing an altered penicillin-binding protein (PBP2a)", is_correct: true },
      { id: "mtf-pharm-anti-001-b", text: "Beta-lactamase production is the most common mechanism of penicillin resistance", is_correct: true },
      { id: "mtf-pharm-anti-001-c", text: "Efflux pumps decrease the intracellular concentration of antibiotics in resistant bacteria", is_correct: true },
      { id: "mtf-pharm-anti-001-d", text: "Resistance genes can only be transmitted vertically (from parent to daughter cells)", is_correct: false },
    ],
  },

  // ═══════════════════════════════════
  // DERMATOLOGY
  // ═══════════════════════════════════
  {
    id: "sba-derm-infl-001",
    stem: "A 22-year-old medical student presents with intensely pruritic, erythematous, vesicular lesions affecting the antecubital fossae, popliteal fossae, neck, and wrists. His mother has asthma. Skin prick tests are positive to house dust mite and cat dander. What is the MOST likely diagnosis?",
    question_type: "sba",
    difficulty: "easy",
    subject: "Dermatology",
    section: "Inflammatory Dermatoses",
    programme: "mbchb",
    explanation: "Atopic dermatitis (eczema) is characterised by intensely pruritic, inflamed skin affecting the flexural surfaces (antecubital and popliteal fossae), neck, and face. It is associated with the atopic triad (eczema, asthma, allergic rhinitis), family history of atopy, raised IgE, and positive skin prick tests. It follows a chronic relapsing course.",
    reference: "Rook's Textbook of Dermatology, 9th Ed. (Chapter 41: Atopic Dermatitis)",
    options: [
      { id: "sba-derm-infl-001-a", text: "Contact dermatitis", is_correct: false },
      { id: "sba-derm-infl-001-b", text: "Atopic dermatitis (eczema)", is_correct: true },
      { id: "sba-derm-infl-001-c", text: "Psoriasis vulgaris", is_correct: false },
      { id: "sba-derm-infl-001-d", text: "Seborrhoeic dermatitis", is_correct: false },
      { id: "sba-derm-infl-001-e", text: "Scabies", is_correct: false },
    ],
  },
]

// ─── Course Catalogue ─────────────────────────────────────────────────────────

export const MCQ_COURSES: MCQCourse[] = [
  {
    id: "internal-medicine",
    name: "Internal Medicine",
    icon: "Stethoscope",
    textbook: "Macleod's Clinical Examination",
    programme: "mbchb",
    sections: [
      { id: "cardiovascular", name: "Cardiovascular", questionCount: 850 },
      { id: "respiratory", name: "Respiratory", questionCount: 780 },
      { id: "gastroenterology", name: "Gastroenterology", questionCount: 720 },
      { id: "nephrology", name: "Nephrology", questionCount: 650 },
      { id: "endocrinology", name: "Endocrinology", questionCount: 700 },
      { id: "haematology", name: "Haematology", questionCount: 580 },
      { id: "neurology", name: "Neurology", questionCount: 690 },
      { id: "rheumatology", name: "Rheumatology", questionCount: 480 },
      { id: "infectious-disease", name: "Infectious Disease", questionCount: 760 },
      { id: "oncology", name: "Oncology", questionCount: 420 },
    ],
  },
  {
    id: "paediatrics",
    name: "Paediatrics",
    icon: "Baby",
    textbook: "Coovadia's Paediatrics and Child Health",
    programme: "mbchb",
    sections: [
      { id: "neonatology", name: "Neonatology", questionCount: 820 },
      { id: "nutrition-growth", name: "Nutrition & Growth", questionCount: 640 },
      { id: "respiratory-paeds", name: "Respiratory Paediatrics", questionCount: 710 },
      { id: "infectious-diseases", name: "Infectious Diseases", questionCount: 890 },
      { id: "neurodevelopment", name: "Neurodevelopment", questionCount: 530 },
      { id: "cardiovascular-paeds", name: "Cardiovascular Paediatrics", questionCount: 580 },
      { id: "haematology-paeds", name: "Haematology", questionCount: 480 },
      { id: "endocrinology-paeds", name: "Endocrinology", questionCount: 450 },
    ],
  },
  {
    id: "surgery",
    name: "Surgery",
    icon: "Scissors",
    textbook: "Bailey & Love's Short Practice of Surgery",
    programme: "mbchb",
    sections: [
      { id: "general-surgery", name: "General Surgery Principles", questionCount: 760 },
      { id: "upper-gi", name: "Upper GI Surgery", questionCount: 640 },
      { id: "lower-gi", name: "Lower GI Surgery", questionCount: 680 },
      { id: "hepatobiliary", name: "Hepatobiliary Surgery", questionCount: 580 },
      { id: "breast-surgery", name: "Breast Surgery", questionCount: 420 },
      { id: "vascular", name: "Vascular Surgery", questionCount: 520 },
      { id: "orthopaedics", name: "Orthopaedics", questionCount: 740 },
      { id: "urology", name: "Urology", questionCount: 560 },
    ],
  },
  {
    id: "obstetrics-gynaecology",
    name: "Obstetrics & Gynaecology",
    icon: "Heart",
    textbook: "WHO Guidelines",
    programme: "mbchb",
    sections: [
      { id: "normal-obstetrics", name: "Normal Obstetrics", questionCount: 720 },
      { id: "antenatal-care", name: "Antenatal Care", questionCount: 640 },
      { id: "labour-delivery", name: "Labour & Delivery", questionCount: 680 },
      { id: "obstetric-complications", name: "Obstetric Complications", questionCount: 760 },
      { id: "gynaecology", name: "Gynaecology", questionCount: 580 },
      { id: "family-planning", name: "Family Planning", questionCount: 420 },
      { id: "oncological-gynae", name: "Oncological Gynaecology", questionCount: 380 },
    ],
  },
  {
    id: "pharmacology",
    name: "Pharmacology",
    icon: "Pill",
    textbook: "Katzung Basic & Clinical Pharmacology",
    programme: "both",
    sections: [
      { id: "general-pharmacology", name: "General Pharmacology", questionCount: 580 },
      { id: "autonomic", name: "Autonomic Pharmacology", questionCount: 640 },
      { id: "cardiovascular-drugs", name: "Cardiovascular Drugs", questionCount: 720 },
      { id: "antimicrobials", name: "Antimicrobials", questionCount: 860 },
      { id: "cns-pharmacology", name: "CNS Pharmacology", questionCount: 680 },
      { id: "anti-inflammatory", name: "Anti-inflammatory Drugs", questionCount: 520 },
    ],
  },
  {
    id: "anatomy",
    name: "Anatomy",
    icon: "Bone",
    textbook: "Snell's Clinical Anatomy",
    programme: "both",
    sections: [
      { id: "upper-limb", name: "Upper Limb", questionCount: 820 },
      { id: "lower-limb", name: "Lower Limb", questionCount: 780 },
      { id: "head-neck", name: "Head & Neck", questionCount: 920 },
      { id: "thorax", name: "Thorax", questionCount: 680 },
      { id: "abdomen-pelvis", name: "Abdomen & Pelvis", questionCount: 760 },
      { id: "neuroanatomy", name: "Neuroanatomy", questionCount: 840 },
      { id: "back-vertebral", name: "Back & Vertebral Column", questionCount: 520 },
    ],
  },
  {
    id: "physiology",
    name: "Physiology",
    icon: "Activity",
    textbook: "Ganong's Review of Medical Physiology",
    programme: "both",
    sections: [
      { id: "cardiovascular-physiology", name: "Cardiovascular Physiology", questionCount: 920 },
      { id: "respiratory-physiology", name: "Respiratory Physiology", questionCount: 840 },
      { id: "renal-physiology", name: "Renal Physiology", questionCount: 780 },
      { id: "gi-physiology", name: "Gastrointestinal Physiology", questionCount: 680 },
      { id: "neurophysiology", name: "Neurophysiology", questionCount: 860 },
      { id: "endocrine-physiology", name: "Endocrine Physiology", questionCount: 740 },
      { id: "cell-physiology", name: "Cell Physiology", questionCount: 580 },
      { id: "blood-immunology", name: "Blood & Immunology", questionCount: 620 },
      { id: "reproductive-physiology", name: "Reproductive Physiology", questionCount: 540 },
    ],
  },
  {
    id: "histology",
    name: "Histology",
    icon: "Microscope",
    textbook: "Junqueira's Basic Histology",
    programme: "both",
    sections: [
      { id: "epithelium", name: "Epithelium", questionCount: 580 },
      { id: "connective-tissue", name: "Connective Tissue", questionCount: 620 },
      { id: "muscle-tissue", name: "Muscle Tissue", questionCount: 540 },
      { id: "nervous-tissue", name: "Nervous Tissue", questionCount: 680 },
      { id: "gi-histo", name: "GI Histology", questionCount: 540 },
      { id: "urinary-histo", name: "Urinary Histology", questionCount: 420 },
    ],
  },
  {
    id: "embryology",
    name: "Embryology",
    icon: "Layers",
    textbook: "Langman's Medical Embryology",
    programme: "both",
    sections: [
      { id: "gametogenesis", name: "Gametogenesis", questionCount: 420 },
      { id: "fertilisation", name: "Fertilisation & Cleavage", questionCount: 480 },
      { id: "cardiovascular-dev", name: "Cardiovascular Development", questionCount: 640 },
      { id: "cns-dev", name: "CNS Development", questionCount: 580 },
      { id: "urogenital-dev", name: "Urogenital Development", questionCount: 520 },
      { id: "limb-dev", name: "Limb Development", questionCount: 380 },
    ],
  },
  {
    id: "histopathology",
    name: "Histopathology",
    icon: "FlaskConical",
    textbook: "Robbins Basic Pathology",
    programme: "both",
    sections: [
      { id: "cell-injury", name: "Cell Injury & Death", questionCount: 720 },
      { id: "inflammation", name: "Inflammation", questionCount: 680 },
      { id: "neoplasia", name: "Neoplasia", questionCount: 840 },
      { id: "vascular-path", name: "Vascular Pathology", questionCount: 580 },
      { id: "cardiac-path", name: "Cardiac Pathology", questionCount: 620 },
      { id: "gi-path", name: "GI Pathology", questionCount: 660 },
      { id: "liver-path", name: "Liver Pathology", questionCount: 580 },
      { id: "renal-path", name: "Renal Pathology", questionCount: 520 },
    ],
  },
  {
    id: "community-medicine",
    name: "Community Medicine",
    icon: "Users",
    textbook: "WHO Guidelines",
    programme: "both",
    sections: [
      { id: "epidemiology", name: "Epidemiology", questionCount: 680 },
      { id: "biostatistics", name: "Biostatistics", questionCount: 540 },
      { id: "health-promotion", name: "Health Promotion", questionCount: 420 },
      { id: "communicable-disease", name: "Communicable Disease Control", questionCount: 640 },
      { id: "ncd", name: "Non-communicable Diseases", questionCount: 580 },
      { id: "maternal-child-health", name: "Maternal & Child Health", questionCount: 560 },
    ],
  },
  {
    id: "psychiatry",
    name: "Psychiatry",
    icon: "Brain",
    textbook: "ICD-11 / DSM-5",
    programme: "mbchb",
    sections: [
      { id: "mood-disorders", name: "Mood Disorders", questionCount: 580 },
      { id: "psychotic-disorders", name: "Psychotic Disorders", questionCount: 540 },
      { id: "anxiety-disorders", name: "Anxiety Disorders", questionCount: 520 },
      { id: "substance-use", name: "Substance Use", questionCount: 480 },
      { id: "neurocognitive", name: "Neurocognitive Disorders", questionCount: 440 },
    ],
  },
  {
    id: "dermatology",
    name: "Dermatology",
    icon: "Shield",
    textbook: "Rook's Textbook of Dermatology",
    programme: "mbchb",
    sections: [
      { id: "skin-structure", name: "Skin Structure & Function", questionCount: 420 },
      { id: "inflammatory-dermatoses", name: "Inflammatory Dermatoses", questionCount: 580 },
      { id: "skin-infections", name: "Skin Infections", questionCount: 540 },
      { id: "skin-tumours", name: "Skin Tumours", questionCount: 460 },
      { id: "autoimmune-skin", name: "Autoimmune Conditions", questionCount: 380 },
    ],
  },
]

// ─── Filter Helper ────────────────────────────────────────────────────────────

export function getQuestionsByFilter(params: {
  courseId?: string
  section?: string
  questionType?: QuestionType
  difficulty?: "easy" | "medium" | "hard" | "mixed"
  programme?: "mbchb" | "bds" | "both"
  count?: number
}): MCQQuestion[] {
  const { courseId, section, questionType, difficulty, programme, count = 20 } = params

  // Get course for section-to-subject mapping
  const course = courseId ? MCQ_COURSES.find(c => c.id === courseId) : null
  const sectionName = section && course
    ? course.sections.find(s => s.id === section)?.name
    : undefined

  let pool = MCQ_QUESTION_BANK.filter(q => {
    // Filter by programme
    if (programme && programme !== "both" && q.programme !== "both" && q.programme !== programme) {
      return false
    }

    // Filter by course (via subject match)
    if (courseId && course) {
      const courseSubjectMap: Record<string, string[]> = {
        "physiology": ["Physiology"],
        "anatomy": ["Anatomy"],
        "histology": ["Histology"],
        "embryology": ["Embryology"],
        "histopathology": ["Histopathology"],
        "internal-medicine": ["Internal Medicine"],
        "surgery": ["Surgery"],
        "paediatrics": ["Paediatrics"],
        "obstetrics-gynaecology": ["Obstetrics & Gynaecology"],
        "pharmacology": ["Pharmacology"],
        "community-medicine": ["Community Medicine"],
        "psychiatry": ["Psychiatry"],
        "dermatology": ["Dermatology"],
      }
      const subjects = courseSubjectMap[courseId] || []
      if (subjects.length > 0 && !subjects.some(s => q.subject.toLowerCase().includes(s.toLowerCase()))) {
        return false
      }
    }

    // Filter by section
    if (sectionName && q.section !== sectionName) {
      return false
    }

    // Filter by question type
    if (questionType && q.question_type !== questionType) {
      return false
    }

    // Filter by difficulty
    if (difficulty && difficulty !== "mixed" && q.difficulty !== difficulty) {
      return false
    }

    return true
  })

  // Shuffle
  pool = [...pool].sort(() => Math.random() - 0.5)

  // If bank is small, repeat questions to fill count
  if (pool.length === 0) {
    // Return random subset of full bank as fallback
    return [...MCQ_QUESTION_BANK]
      .sort(() => Math.random() - 0.5)
      .slice(0, count)
  }

  if (pool.length >= count) {
    return pool.slice(0, count)
  }

  // Pad with random questions from full bank to reach count
  const remaining = count - pool.length
  const extraPool = MCQ_QUESTION_BANK
    .filter(q => !pool.includes(q))
    .sort(() => Math.random() - 0.5)
    .slice(0, remaining)

  return [...pool, ...extraPool]
}
