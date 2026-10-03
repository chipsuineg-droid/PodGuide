export interface QuestionOption {
  id: string
  option_text: string
  is_correct: boolean
  explanation?: string
}

export interface MedicalQuestion {
  id: string
  stem: string
  difficulty: "easy" | "medium" | "hard"
  subject: string
  topic: string
  explanation: string
  reference?: string
  question_options: QuestionOption[]
}

export const MEDICAL_MCQ_BANK: MedicalQuestion[] = [
  // ── ANATOMY (Snell's Clinical Anatomy / Gray's)
  {
    id: "mcq-anat-001",
    stem: "A 23-year-old motorcyclist is brought to the emergency department after a collision. He cannot extend his wrist ('wrist drop') and has loss of sensation over the dorsal aspect of the first web space. An X-ray confirms a midshaft humeral fracture. Which nerve has MOST likely been injured?",
    difficulty: "medium",
    subject: "Anatomy",
    topic: "Upper Limb & Peripheral Nerves",
    explanation: "The radial nerve runs in the radial (spiral) groove on the posterior surface of the midshaft humerus along with the profunda brachii artery. Fractures of the humeral shaft frequently compromise the radial nerve, paralyzing the wrist and finger extensors (producing wrist drop) and causing sensory loss over the dorsal aspect of the first web space.",
    reference: "Snell's Clinical Anatomy by Regions, 10th Ed. (Upper Limb: Radial Nerve)",
    question_options: [
      { id: "opt-anat-1a", option_text: "Median nerve", is_correct: false, explanation: "Median nerve injury at the elbow causes loss of wrist flexion/pronation and 'hand of benediction'." },
      { id: "opt-anat-1b", option_text: "Ulnar nerve", is_correct: false, explanation: "Ulnar nerve runs behind the medial epicondyle and its lesion leads to a 'claw hand'." },
      { id: "opt-anat-1c", option_text: "Radial nerve", is_correct: true, explanation: "Radial nerve is vulnerable in the midshaft radial groove, causing wrist drop." },
      { id: "opt-anat-1d", option_text: "Axillary nerve", is_correct: false, explanation: "Axillary nerve is injured in surgical neck fractures of the humerus or shoulder dislocation." },
      { id: "opt-anat-1e", option_text: "Musculocutaneous nerve", is_correct: false, explanation: "Musculocutaneous nerve innervates biceps and coracobrachialis, rarely injured in shaft fractures." }
    ]
  },
  {
    id: "mcq-anat-002",
    stem: "During a thyroidectomy for multinodular goiter, the surgeon ligates the superior thyroid artery close to the upper pole of the thyroid gland. Which nerve is MOST at risk of inadvertent injury during this specific step?",
    difficulty: "hard",
    subject: "Anatomy",
    topic: "Head & Neck",
    explanation: "The external branch of the superior laryngeal nerve travels intimately in close proximity to the superior thyroid artery near the superior pole of the thyroid gland. Injury paralyzes the cricothyroid muscle, resulting in a monotonic voice and loss of high-pitched phonation. In contrast, the recurrent laryngeal nerve is related to the inferior thyroid artery at the lower pole.",
    reference: "Snell's Clinical Anatomy by Regions, 10th Ed. (Neck: Thyroid Gland & Laryngeal Nerves)",
    question_options: [
      { id: "opt-anat-2a", option_text: "Recurrent laryngeal nerve", is_correct: false, explanation: "Recurrent laryngeal nerve is in close relation with the inferior thyroid artery." },
      { id: "opt-anat-2b", option_text: "External branch of superior laryngeal nerve", is_correct: true, explanation: "Travels alongside superior thyroid artery and innervates the cricothyroid muscle." },
      { id: "opt-anat-2c", option_text: "Internal branch of superior laryngeal nerve", is_correct: false, explanation: "Pierces thyrohyoid membrane to provide sensory innervation above vocal folds." },
      { id: "opt-anat-2d", option_text: "Hypoglossal nerve", is_correct: false, explanation: "Hypoglossal nerve is superior in the submandibular triangle." },
      { id: "opt-anat-2e", option_text: "Glossopharyngeal nerve", is_correct: false, explanation: "Located higher in carotid sheath region, not intimately on the upper thyroid pole." }
    ]
  },
  {
    id: "mcq-anat-003",
    stem: "A 48-year-old woman presents with severe right upper quadrant colicky pain radiating to the inferior angle of the right scapula after consuming fatty meals. The somatic pain referral to the inferior angle of the scapula is mediated via which nerve roots?",
    difficulty: "medium",
    subject: "Anatomy",
    topic: "Abdomen & Biliary System",
    explanation: "Visceral afferents from the inflamed gallbladder travel with sympathetic fibers to spinal cord segments T7–T9, producing right upper quadrant and epigastric discomfort. When inflammation irritates the diaphragmatic parietal peritoneum, sensory signals travel via the right phrenic nerve (C3, C4, C5), referring pain to the right shoulder and inferior angle of the scapula.",
    reference: "Snell's Clinical Anatomy (Abdomen: Biliary System & Dermatomal Pain Referral)",
    question_options: [
      { id: "opt-anat-3a", option_text: "Phrenic nerve (C3, C4, C5)", is_correct: true, explanation: "Diaphragmatic peritoneal irritation refers pain via the phrenic nerve to the C3-C5 dermatome over the shoulder/scapula." },
      { id: "opt-anat-3b", option_text: "Vagus nerve (CN X)", is_correct: false, explanation: "Vagus carries parasympathetic innervation but does not mediate somatic scapular pain." },
      { id: "opt-anat-3c", option_text: "Subcostal nerve (T12)", is_correct: false, explanation: "Subcostal nerve innervates lower abdominal wall and anterior superior iliac spine area." },
      { id: "opt-anat-3d", option_text: "Genitofemoral nerve (L1, L2)", is_correct: false, explanation: "Refers to groin and upper medial thigh." },
      { id: "opt-anat-3e", option_text: "Obturator nerve (L2, L3, L4)", is_correct: false, explanation: "Refers to medial thigh and knee." }
    ]
  },
  {
    id: "mcq-anat-004",
    stem: "A patient develops hoarseness following surgical resection of an aortic arch aneurysm. Which anatomical structure was injured by traction or ligation?",
    difficulty: "easy",
    subject: "Anatomy",
    topic: "Thorax & Mediastinum",
    explanation: "The left recurrent laryngeal nerve branches from the left vagus nerve, loops under the aortic arch immediately lateral to the ligamentum arteriosum, and ascends in the tracheoesophageal groove. Aortic aneurysms or arch surgery frequently injure this nerve, causing left vocal cord palsy and hoarseness.",
    reference: "Snell's Clinical Anatomy by Regions (Thorax: Superior Mediastinum)",
    question_options: [
      { id: "opt-anat-4a", option_text: "Right recurrent laryngeal nerve", is_correct: false, explanation: "The right recurrent loops under the right subclavian artery in the neck." },
      { id: "opt-anat-4b", option_text: "Left recurrent laryngeal nerve", is_correct: true, explanation: "Loops beneath the aortic arch lateral to the ligamentum arteriosum." },
      { id: "opt-anat-4c", option_text: "Left phrenic nerve", is_correct: false, explanation: "Passes anterior to the lung hilum and innervates the diaphragm." },
      { id: "opt-anat-4d", option_text: "Thoracic sympathetic trunk", is_correct: false, explanation: "Injury causes Horner syndrome, not hoarseness." },
      { id: "opt-anat-4e", option_text: "Greater splanchnic nerve", is_correct: false, explanation: "Arises from T5-T9 and supplies celiac ganglion in the abdomen." }
    ]
  },

  // ── PHYSIOLOGY (Guyton & Hall)
  {
    id: "mcq-phys-001",
    stem: "In response to acute severe hemorrhage with a 25% loss of circulating blood volume, which compensatory physiologic mechanism is activated FIRST within seconds to restore arterial blood pressure?",
    difficulty: "medium",
    subject: "Physiology",
    topic: "Cardiovascular Control",
    explanation: "The arterial baroreceptor reflex (located in the carotid sinus and aortic arch) responds instantaneously within seconds to a drop in arterial pressure. Reduced stretch on carotid/aortic baroreceptors decreases afferent firing to the medulla, triggering increased sympathetic outflow (tachycardia, vasoconstriction, increased contractility) and reduced vagal tone.",
    reference: "Guyton and Hall Textbook of Medical Physiology, 14th Ed. (Ch. 18: Nervous Regulation of the Circulation)",
    question_options: [
      { id: "opt-phys-1a", option_text: "Renin-angiotensin-aldosterone system activation", is_correct: false, explanation: "RAAS takes 10 to 30 minutes to generate systemic vasoconstriction and hours to days for volume retention." },
      { id: "opt-phys-1b", option_text: "Arterial baroreceptor reflex", is_correct: true, explanation: "Responds in 1 to 5 seconds by elevating heart rate and systemic vascular resistance." },
      { id: "opt-phys-1c", option_text: "Renal erythropoietin secretion", is_correct: false, explanation: "Takes days to stimulate reticulocyte release from bone marrow." },
      { id: "opt-phys-1d", option_text: "Transcapillary fluid shift", is_correct: false, explanation: "Takes 15 to 60 minutes for interstitial fluid to reabsorb into the vascular space." },
      { id: "opt-phys-1e", option_text: "Aldosterone-mediated sodium retention", is_correct: false, explanation: "Requires transcriptional synthesis of ENaC channels taking several hours." }
    ]
  },
  {
    id: "mcq-phys-002",
    stem: "Which section of the nephron reabsorbs the greatest percentage of filtered bicarbonate (HCO3-) under normal physiological conditions?",
    difficulty: "easy",
    subject: "Physiology",
    topic: "Renal Physiology & Acid-Base",
    explanation: "The proximal convoluted tubule (PCT) reabsorbs approximately 80% to 90% of filtered bicarbonate through the action of apical Na+/H+ exchangers (NHE3) and membrane-bound Carbonic Anhydrase IV/cytoplasmic CA-II.",
    reference: "Guyton and Hall Textbook of Medical Physiology, 14th Ed. (Ch. 31: Acid-Base Regulation)",
    question_options: [
      { id: "opt-phys-2a", option_text: "Proximal convoluted tubule", is_correct: true, explanation: "Reabsorbs 80-90% of all filtered bicarbonate." },
      { id: "opt-phys-2b", option_text: "Thick ascending limb of Loop of Henle", is_correct: false, explanation: "Reabsorbs approximately 10% of bicarbonate." },
      { id: "opt-phys-2c", option_text: "Distal convoluted tubule", is_correct: false, explanation: "Primarily manages calcium and sodium via NCC cotransporters." },
      { id: "opt-phys-2d", option_text: "Cortical collecting duct (Type A intercalated cells)", is_correct: false, explanation: "Responsible for fine-tuning H+ secretion and de novo bicarbonate generation (5%)." },
      { id: "opt-phys-2e", option_text: "Thin descending limb of Loop of Henle", is_correct: false, explanation: "Permeable to water, impermeable to solutes and bicarbonate." }
    ]
  },
  {
    id: "mcq-phys-003",
    stem: "During normal quiet inspiration, which alveolar-intrapleural pressure relationship is correct?",
    difficulty: "medium",
    subject: "Physiology",
    topic: "Respiratory Mechanics",
    explanation: "During quiet inspiration, diaphragm contraction increases thoracic volume, causing intrapleural pressure to become more negative (from approx. -5 cm H2O to -8 cm H2O). This expands the lungs and drops alveolar pressure below atmospheric pressure (to approx. -1 cm H2O), creating a pressure gradient for airflow into the alveoli.",
    reference: "Guyton and Hall Textbook of Medical Physiology, 14th Ed. (Ch. 38: Pulmonary Ventilation)",
    question_options: [
      { id: "opt-phys-3a", option_text: "Intrapleural pressure becomes more subatmospheric; alveolar pressure drops below 0 cm H2O", is_correct: true, explanation: "Intrapleural pressure drops to -8 cm H2O, expanding lungs and creating negative alveolar pressure." },
      { id: "opt-phys-3b", option_text: "Intrapleural pressure becomes positive; alveolar pressure drops", is_correct: false, explanation: "Intrapleural pressure is always subatmospheric in healthy spontaneous breathing." },
      { id: "opt-phys-3c", option_text: "Alveolar pressure rises above atmospheric; intrapleural pressure drops", is_correct: false, explanation: "Alveolar pressure must be subatmospheric to draw ambient air inward." },
      { id: "opt-phys-3d", option_text: "Both intrapleural and alveolar pressures rise above +5 cm H2O", is_correct: false, explanation: "This occurs only during forced expiration or positive pressure mechanical ventilation." },
      { id: "opt-phys-3e", option_text: "Intrapleural pressure equals atmospheric pressure throughout", is_correct: false, explanation: "Equalization occurs only in open pneumothorax." }
    ]
  },

  // ── PATHOLOGY (Robbins & Cotran)
  {
    id: "mcq-path-001",
    stem: "A 56-year-old chronic alcoholic presents with sudden severe epigastric pain radiating directly to the back, associated with persistent vomiting and elevated serum lipase (> 3000 U/L). Biopsy of peripancreatic tissue would classically demonstrate which type of tissue necrosis?",
    difficulty: "easy",
    subject: "Pathology",
    topic: "Cell Injury & Necrosis",
    explanation: "Acute pancreatitis leads to release of activated pancreatic lipases, which hydrolyze triglycerides in surrounding adipocytes into free fatty acids. These fatty acids combine with calcium ions to form visible chalky-white deposits (saponification), representing enzymatic fat necrosis.",
    reference: "Robbins and Cotran Pathologic Basis of Disease, 10th Ed. (Ch. 1: Cellular Pathology - Patterns of Necrosis)",
    question_options: [
      { id: "opt-path-1a", option_text: "Coagulative necrosis", is_correct: false, explanation: "Characteristic of ischemic infarcts in solid organs like heart, kidney, spleen." },
      { id: "opt-path-1b", option_text: "Liquefactive necrosis", is_correct: false, explanation: "Seen in brain infarcts and bacterial abscesses." },
      { id: "opt-path-1c", option_text: "Fat necrosis with calcium saponification", is_correct: true, explanation: "Enzymatic hydrolysis of peripancreatic fat followed by calcium soap formation." },
      { id: "opt-path-1d", option_text: "Caseous necrosis", is_correct: false, explanation: "Characteristic of mycobacterial tuberculosis and fungal granulomas." },
      { id: "opt-path-1e", option_text: "Fibrinoid necrosis", is_correct: false, explanation: "Seen in immune complex vasculitis and malignant hypertension." }
    ]
  },
  {
    id: "mcq-path-002",
    stem: "A 32-year-old woman with systemic lupus erythematosus (SLE) undergoes renal biopsy for proteinuria. Light microscopy shows diffuse glomerular capillary wall thickening with a 'wire loop' appearance, and immunofluorescence reveals granular IgG and C3 deposition along the basement membrane ('full house' pattern). Which WHO/ISN lupus nephritis class does this represent?",
    difficulty: "hard",
    subject: "Pathology",
    topic: "Renal Pathology & Glomerulopathies",
    explanation: "Class IV Lupus Nephritis (Diffuse Proliferative Lupus Nephritis, DPN) is the most common and severe form. It is characterized by extensive subendothelial immune complex deposition creating prominent 'wire loop' lesions on light microscopy, widespread endocapillary proliferation, and marked proteinuria/hematuria.",
    reference: "Robbins & Cotran Pathologic Basis of Disease, 10th Ed. (Ch. 20: The Kidney)",
    question_options: [
      { id: "opt-path-2a", option_text: "Class I (Minimal mesangial)", is_correct: false, explanation: "Normal light microscopy with mesangial immune deposits on IF." },
      { id: "opt-path-2b", option_text: "Class II (Mesangial proliferative)", is_correct: false, explanation: "Mesangial hypercellularity without subendothelial deposits." },
      { id: "opt-path-2c", option_text: "Class III (Focal proliferative)", is_correct: false, explanation: "Involves less than 50% of glomeruli." },
      { id: "opt-path-2d", option_text: "Class IV (Diffuse proliferative)", is_correct: true, explanation: "Involves >50% glomeruli with classic wire-loop subendothelial immune deposits." },
      { id: "opt-path-2e", option_text: "Class V (Membranous)", is_correct: false, explanation: "Pure subepithelial immune deposits producing diffuse spike-and-dome thickening." }
    ]
  },
  {
    id: "mcq-path-003",
    stem: "Which genetic mutation is MOST frequently identified in primary glioblastoma multiforme (WHO Grade 4) in adults and is associated with epidermal growth factor receptor pathway overactivation?",
    difficulty: "hard",
    subject: "Pathology",
    topic: "Neuropathology & Neoplasia",
    explanation: "Primary (de novo) glioblastoma in older adults typically features EGFR gene amplification/mutation (EGFRvIII variant), PTEN loss/mutation on chromosome 10q, and TERT promoter mutations. In contrast, secondary GBMs developing from lower-grade astrocytomas harbor IDH1/2 mutations and TP53 mutations.",
    reference: "Robbins & Cotran Pathologic Basis of Disease (Ch. 28: Central Nervous System)",
    question_options: [
      { id: "opt-path-3a", option_text: "EGFR gene amplification", is_correct: true, explanation: "Present in >50% of primary glioblastomas, driving uncontrolled cellular proliferation." },
      { id: "opt-path-3b", option_text: "IDH1 R132H mutation", is_correct: false, explanation: "Characteristic of lower-grade astrocytomas and secondary glioblastoma in younger adults." },
      { id: "opt-path-3c", option_text: "1p/19q codeletion", is_correct: false, explanation: "Pathognomonic hallmark of oligodendroglioma." },
      { id: "opt-path-3d", option_text: "BRAF V600E mutation", is_correct: false, explanation: "Seen in pleomorphic xanthoastrocytoma and melanoma." },
      { id: "opt-path-3e", option_text: "c-MYC translocation t(8;14)", is_correct: false, explanation: "Characteristic of Burkitt lymphoma." }
    ]
  },

  // ── PHARMACOLOGY (Katzung)
  {
    id: "mcq-pharm-001",
    stem: "A 64-year-old diabetic patient with stage 3 chronic kidney disease and hypertension is prescribed an ACE inhibitor (Lisinopril). Two weeks later, repeat biochemistry reveals a serum potassium of 5.8 mmol/L. What is the molecular mechanism underlying this hyperkalemia?",
    difficulty: "medium",
    subject: "Pharmacology",
    topic: "Cardiovascular & Renal Drugs",
    explanation: "ACE inhibitors prevent conversion of Angiotensin I to Angiotensin II, removing the primary physiological stimulus for aldosterone secretion from the adrenal cortex. Reduced aldosterone decreases the activity of epithelial sodium channels (ENaC) and renal outer medullary potassium (ROMK) channels in cortical collecting ducts, impairing K+ excretion and precipitating hyperkalemia.",
    reference: "Katzung Basic & Clinical Pharmacology, 15th Ed. (Ch. 11: Antihypertensive Agents)",
    question_options: [
      { id: "opt-pharm-1a", option_text: "Blockade of proximal tubular potassium secretion", is_correct: false, explanation: "Potassium is primarily reabsorbed in the proximal tubule, not secreted." },
      { id: "opt-pharm-1b", option_text: "Decreased adrenal aldosterone secretion leading to reduced distal K+ excretion", is_correct: true, explanation: "Lack of Angiotensin II decreases aldosterone, suppressing distal nephron K+ secretion." },
      { id: "opt-pharm-1c", option_text: "Inhibition of the Na+/K+/2Cl- cotransporter in the Loop of Henle", is_correct: false, explanation: "This is the mechanism of loop diuretics, which cause hypokalemia." },
      { id: "opt-pharm-1d", option_text: "Direct stimulation of renal medullary potassium symporters", is_correct: false, explanation: "ACE inhibitors do not stimulate medullary K+ symporters." },
      { id: "opt-pharm-1e", option_text: "Inhibition of carbonic anhydrase in renal tubular cells", is_correct: false, explanation: "This is the mechanism of acetazolamide." }
    ]
  },
  {
    id: "mcq-pharm-002",
    stem: "A 26-year-old pregnant woman in her second trimester is diagnosed with acute uncomplicated deep vein thrombosis (DVT). Which anticoagulant is the SAFEST and MOST appropriate first-line choice?",
    difficulty: "easy",
    subject: "Pharmacology",
    topic: "Anticoagulants & Hematology",
    explanation: "Low molecular weight heparin (LMWH, such as Enoxaparin) does not cross the placenta due to its high molecular weight and negative charge, making it safe and first-line in pregnancy. Warfarin crosses the placenta and is teratogenic (causing fetal warfarin syndrome and chondrodysplasia punctata), and DOACs lack sufficient safety data in pregnancy.",
    reference: "Katzung Basic & Clinical Pharmacology (Ch. 34: Drugs Used in Disorders of Coagulation); UpToDate (Anticoagulation in Pregnancy)",
    question_options: [
      { id: "opt-pharm-2a", option_text: "Warfarin", is_correct: false, explanation: "Teratogenic across all trimesters (nasal hypoplasia, stippled epiphyses, CNS abnormalities)." },
      { id: "opt-pharm-2b", option_text: "Low molecular weight heparin (LMWH / Enoxaparin)", is_correct: true, explanation: "Does not cross placental barrier; proven efficacy and safety for maternal DVT." },
      { id: "opt-pharm-2c", option_text: "Rivaroxaban", is_correct: false, explanation: "Direct oral FXa inhibitors cross the placenta and are contraindicated in pregnancy." },
      { id: "opt-pharm-2d", option_text: "Dabigatran", is_correct: false, explanation: "Direct thrombin inhibitor contraindicated in pregnancy due to reproductive toxicity." },
      { id: "opt-pharm-2e", option_text: "Aspirin high dose (325 mg tid)", is_correct: false, explanation: "Inadequate anticoagulation for acute DVT and increases maternal bleeding risk." }
    ]
  },
  {
    id: "mcq-pharm-003",
    stem: "A patient undergoing general anesthesia with succinylcholine and halothane develops rapid hyperpyrexia (temperature 41.2°C), severe muscle rigidity, tachycardia, and elevated end-tidal CO2. Which antidote must be administered IMMEDIATELY?",
    difficulty: "easy",
    subject: "Pharmacology",
    topic: "Anesthetics & Muscle Relaxants",
    explanation: "This is classic Malignant Hyperthermia triggered by volatile anesthetics and depolarizing neuromuscular blockers in patients with Ryanodine Receptor (RYR1) gene mutations. The definitive antidote is Dantrolene sodium, which blocks ryanodine receptors on the sarcoplasmic reticulum, stopping uncontrolled intracellular calcium release.",
    reference: "Katzung Basic & Clinical Pharmacology, 15th Ed. (Ch. 27: Skeletal Muscle Relaxants)",
    question_options: [
      { id: "opt-pharm-3a", option_text: "Dantrolene sodium", is_correct: true, explanation: "Ryanodine receptor antagonist that halts massive sarcoplasmic reticulum calcium release." },
      { id: "opt-pharm-3b", option_text: "Neostigmine", is_correct: false, explanation: "Cholinesterase inhibitor; worsens depolarization and contracture in succinylcholine toxicity." },
      { id: "opt-pharm-3c", option_text: "Atropine", is_correct: false, explanation: "Antimuscarinic; does not halt skeletal muscle ryanodine activation." },
      { id: "opt-pharm-3d", option_text: "Sugammadex", is_correct: false, explanation: "Reverses rocuronium/vecuronium, ineffective against succinylcholine or malignant hyperthermia." },
      { id: "opt-pharm-3e", option_text: "Naloxone", is_correct: false, explanation: "Opioid receptor antagonist." }
    ]
  },

  // ── INTERNAL MEDICINE (Kumar & Clark / Materials)
  {
    id: "mcq-med-001",
    stem: "A 58-year-old male with long-standing poorly controlled type 2 diabetes presents with 2 hours of crushing retrosternal chest tightness, diaphoresis, and nausea. An ECG shows 3mm ST-segment elevation in leads II, III, and aVF with reciprocal ST depression in leads I and aVL. Which coronary artery is MOST likely occluded?",
    difficulty: "easy",
    subject: "Internal Medicine",
    topic: "Cardiology & Acute Coronary Syndromes",
    explanation: "Leads II, III, and aVF view the inferior wall of the left ventricle. In 85% to 90% of individuals (right-dominant circulation), the inferior wall is supplied by the Posterior Descending Artery (PDA), which branches from the Right Coronary Artery (RCA). RCA occlusion causes inferior STEMI.",
    reference: "Kumar and Clark's Clinical Medicine, 10th Ed. (Ch. 18: Cardiovascular Disease - STEMI Localization)",
    question_options: [
      { id: "opt-med-1a", option_text: "Left anterior descending artery (LAD)", is_correct: false, explanation: "Occlusion produces anterior STEMI with ST elevation in V1–V4." },
      { id: "opt-med-1b", option_text: "Right coronary artery (RCA)", is_correct: true, explanation: "Supplies inferior wall via PDA in right-dominant circulation; leads II, III, aVF." },
      { id: "opt-med-1c", option_text: "Left circumflex artery (LCx)", is_correct: false, explanation: "Produces lateral STEMI with ST elevation in leads I, aVL, V5, V6." },
      { id: "opt-med-1d", option_text: "Left main coronary artery (LMCA)", is_correct: false, explanation: "Produces diffuse ST depression with ST elevation in lead aVR." },
      { id: "opt-med-1e", option_text: "Obtuse marginal branch", is_correct: false, explanation: "Supplies high lateral ventricular wall." }
    ]
  },
  {
    id: "mcq-med-002",
    stem: "A 34-year-old woman with a history of Graves disease presents with high fever (39.8°C), marked agitation, delirium, heart rate of 165 bpm with atrial fibrillation, and jaundice. Her condition is diagnosed as Thyroid Storm. Which sequence of pharmacotherapy represents the CORRECT management strategy?",
    difficulty: "hard",
    subject: "Internal Medicine",
    topic: "Endocrinology & Thyroid Emergencies",
    explanation: "In thyroid storm, therapy must follow strict sequence: (1) Beta-blocker (Propranolol) for hemodynamic control and peripheral T4-to-T3 conversion inhibition; (2) Thionamide (Propylthiouracil / PTU or Methimazole) to block new thyroid hormone synthesis; (3) Potassium iodide / Lugol's solution administered AT LEAST 1 HOUR AFTER thionamide to prevent iodine being used as substrate for new hormone synthesis (Wolff-Chaikoff effect); (4) Glucocorticoids (Hydrocortisone) to reduce peripheral T4 conversion and prevent relative adrenal crisis.",
    reference: "Kumar & Clark's Clinical Medicine; UpToDate (Management of Thyroid Storm)",
    question_options: [
      { id: "opt-med-2a", option_text: "Iodine solution first, followed by Methimazole 2 hours later", is_correct: false, explanation: "Giving iodine before thionamide provides substrate for increased hormone synthesis (Jod-Basedow effect)." },
      { id: "opt-med-2b", option_text: "Propranolol, Propylthiouracil (PTU), followed by Lugol's Iodine ≥1 hour later, and Hydrocortisone", is_correct: true, explanation: "Beta-blockade + PTU first, followed 1 hour later by iodine to inhibit release without providing synthesis substrate." },
      { id: "opt-med-2c", option_text: "Radioactive iodine-131 ablation immediately", is_correct: false, explanation: "Causes transient massive release of preformed hormone, fatal in acute storm." },
      { id: "opt-med-2d", option_text: "Emergent total thyroidectomy without medical preparation", is_correct: false, explanation: "Uncontrolled thyrotoxicosis carries prohibitive perioperative mortality." },
      { id: "opt-med-2e", option_text: "Levothyroxine high-dose bolus and Aspirin", is_correct: false, explanation: "Aspirin displaces thyroid hormone from thyroid-binding globulin, worsening toxic free T4." }
    ]
  },
  {
    id: "mcq-med-003",
    stem: "A 68-year-old smoker presents with productive cough, progressive dyspnea, and weight loss. Arterial Blood Gas (ABG) on room air shows: pH 7.32, PaCO2 58 mmHg, PaO2 54 mmHg, HCO3- 29 mmol/L. What is the primary acid-base disorder?",
    difficulty: "medium",
    subject: "Internal Medicine",
    topic: "Respiratory & Acid-Base Disorders",
    explanation: "pH < 7.35 indicates acidemia. PaCO2 > 45 mmHg indicates respiratory acidosis due to hypoventilation/airway obstruction in COPD. The elevated HCO3- (29 mmol/L, normal 22-26) reflects compensatory renal retention of bicarbonate characteristic of chronic respiratory acidosis.",
    reference: "Kumar & Clark's Clinical Medicine, 10th Ed. (Ch. 20: Respiratory Disease)",
    question_options: [
      { id: "opt-med-3a", option_text: "Partially compensated respiratory acidosis", is_correct: true, explanation: "Elevated PaCO2 drives the acidosis, with compensatory elevated HCO3- attempting to normalize pH." },
      { id: "opt-med-3b", option_text: "Acute uncompensated metabolic acidosis", is_correct: false, explanation: "Metabolic acidosis features low HCO3- (< 22 mmol/L)." },
      { id: "opt-med-3c", option_text: "Fully compensated metabolic alkalosis", is_correct: false, explanation: "The pH is acidemic (< 7.35), so primary disorder cannot be an alkalosis." },
      { id: "opt-med-3d", option_text: "Acute respiratory alkalosis with renal compensation", is_correct: false, explanation: "Respiratory alkalosis presents with low PaCO2 (< 35 mmHg)." },
      { id: "opt-med-3e", option_text: "Mixed metabolic and respiratory acidosis", is_correct: false, explanation: "HCO3- is elevated (compensatory), not reduced." }
    ]
  },

  // ── SURGERY (SRB's Manual of Surgery)
  {
    id: "mcq-surg-001",
    stem: "A 21-year-old college student presents with 14 hours of periumbilical discomfort that has now localized to the right iliac fossa. On examination, there is tenderness at McBurney's point and Rovsing's sign is positive. What is the initial pathophysiologic event triggering acute appendicitis in this age group?",
    difficulty: "easy",
    subject: "Surgery",
    topic: "Acute Abdomen & Appendicitis",
    explanation: "In young adults and adolescents, luminal obstruction of the appendix is most commonly caused by lymphoid hyperplasia (often following a viral gastroenteritis or respiratory infection). In older adults, obstruction by a fecalith (appendicolith) is more frequent.",
    reference: "SRB's Manual of Surgery, 6th Ed. (Ch. 24: Appendix)",
    question_options: [
      { id: "opt-surg-1a", option_text: "Lymphoid follicular hyperplasia obstructing the appendiceal lumen", is_correct: true, explanation: "Most common etiology in adolescents and young adults." },
      { id: "opt-surg-1b", option_text: "Appendiceal carcinoid tumor metastasis", is_correct: false, explanation: "Carcinoid is an incidental finding in <1% of appendectomies." },
      { id: "opt-surg-1c", option_text: "Cecal adenocarcinoma perforation", is_correct: false, explanation: "Seen in elderly patients presenting with appendiceal phlegmon." },
      { id: "opt-surg-1d", option_text: "Direct hematogenous seeding of Pseudomonas", is_correct: false, explanation: "Appendicitis begins with luminal obstruction, not hematogenous bacteremia." },
      { id: "opt-surg-1e", option_text: "Primary mesenteric venous thrombosis", is_correct: false, explanation: "Causes generalized bowel ischemia, not isolated focal appendicitis." }
    ]
  },
  {
    id: "mcq-surg-002",
    stem: "A 42-year-old woman with symptomatic gallstone disease is scheduled for laparoscopic cholecystectomy. During dissection of the Triangle of Calot (hepatobiliary triangle), which two anatomical structures form the classic boundaries that the surgeon must identify to achieve the 'Critical View of Safety'?",
    difficulty: "medium",
    subject: "Surgery",
    topic: "Hepatobiliary Surgery",
    explanation: "The anatomical Triangle of Calot is bounded by the cystic duct inferiorly, common hepatic duct medially, and the inferior surface of the liver superiorly. Inside this triangle runs the cystic artery (and lymph node of Lund). Establishing the Critical View of Safety requires clearing the hepatocystic triangle of fat and fibrous tissue to identify just two structures entering the gallbladder: the cystic duct and cystic artery.",
    reference: "SRB's Manual of Surgery, 6th Ed. (Ch. 27: Gallbladder and Biliary Tract)",
    question_options: [
      { id: "opt-surg-2a", option_text: "Cystic duct, common hepatic duct, and inferior surface of liver", is_correct: true, explanation: "Defines the anatomical Calot triangle containing the cystic artery." },
      { id: "opt-surg-2b", option_text: "Common bile duct, portal vein, and hepatic artery", is_correct: false, explanation: "These form the portal triad in the free edge of the lesser omentum." },
      { id: "opt-surg-2c", option_text: "Falciform ligament, ligamentum teres, and gallbladder fossa", is_correct: false, explanation: "Surface landmarks of the anterior hepatic surface." },
      { id: "opt-surg-2d", option_text: "Duodenum, head of pancreas, and right renal vein", is_correct: false, explanation: "Boundaries of the retroperitoneal Kocher maneuver." },
      { id: "opt-surg-2e", option_text: "Right hepatic artery, left hepatic duct, and caudate lobe", is_correct: false, explanation: "Located at the high hepatic hilum." }
    ]
  },
  {
    id: "mcq-surg-003",
    stem: "A 30-year-old unrestrained driver is involved in a high-speed road traffic accident. On arrival, he has distended neck veins, muffled heart sounds, and a systolic blood pressure of 75 mmHg that drops to 60 mmHg on inspiration (Pulsus Paradoxus). What is the immediate life-saving intervention?",
    difficulty: "easy",
    subject: "Surgery",
    topic: "Trauma & Cardiothoracic Emergencies",
    explanation: "The triad of hypotension, elevated JVP/distended neck veins, and muffled heart sounds is Beck's Triad, pathognomonic for Cardiac Tamponade. The immediate diagnostic and life-saving therapeutic procedure in acute traumatic instability is emergency subxiphoid pericardiocentesis (or emergent thoracotomy / pericardial window).",
    reference: "SRB's Manual of Surgery (Ch. 16: Trauma and ATLS Protocols); ATLS 10th Ed.",
    question_options: [
      { id: "opt-surg-3a", option_text: "Needle pericardiocentesis / Subxiphoid pericardial decompression", is_correct: true, explanation: "Relieves intrapericardial pressure and restores cardiac ventricular filling immediately." },
      { id: "opt-surg-3b", option_text: "Immediate tube thoracostomy at 5th intercostal space", is_correct: false, explanation: "Indicated for tension pneumothorax or hemothorax, but breath sounds are clear here." },
      { id: "opt-surg-3c", option_text: "High-dose intravenous Furosemide", is_correct: false, explanation: "Diuretics reduce preload and precipitate immediate cardiovascular collapse in tamponade." },
      { id: "opt-surg-3d", option_text: "Synchronized electrical cardioversion", is_correct: false, explanation: "Indicated for unstable tachyarrhythmias, not mechanical tamponade." },
      { id: "opt-surg-3e", option_text: "Endotracheal intubation with high PEEP ventilation", is_correct: false, explanation: "High positive pressure ventilation further impedes venous return, worsening shock." }
    ]
  },

  // ── PEDIATRICS (Ghai Essential Pediatrics)
  {
    id: "mcq-ped-001",
    stem: "A 3-week-old first-born male infant presents with non-bilious projectile vomiting immediately after every feed. He is avidly hungry after vomiting. Physical examination reveals visible left-to-right gastric peristaltic waves and a small, firm, olive-shaped mass palpable in the right upper quadrant. Which electrolyte and acid-base abnormality is classically seen?",
    difficulty: "medium",
    subject: "Paediatrics",
    topic: "Pediatric Gastrointestinal & Metabolic",
    explanation: "Infantile Hypertrophic Pyloric Stenosis causes persistent loss of gastric hydrochloric acid (HCl) and potassium through projectile non-bilious vomiting. This results in Hypochloremic, Hypokalemic Metabolic Alkalosis with paradoxical aciduria.",
    reference: "Ghai Essential Pediatrics, 9th Ed. (Ch. 11: Gastrointestinal Disorders)",
    question_options: [
      { id: "opt-ped-1a", option_text: "Hypochloremic, hypokalemic metabolic alkalosis", is_correct: true, explanation: "Classic biochemical hallmark resulting from selective loss of gastric gastric juice (HCl)." },
      { id: "opt-ped-1b", option_text: "Hyperchloremic, hyperkalemic metabolic acidosis", is_correct: false, explanation: "Characteristic of renal tubular acidosis type 4." },
      { id: "opt-ped-1c", option_text: "Normochloremic high anion gap metabolic acidosis", is_correct: false, explanation: "Seen in diabetic ketoacidosis and lactic acidosis." },
      { id: "opt-ped-1d", option_text: "Hypochloremic, hyperkalemic metabolic acidosis", is_correct: false, explanation: "Seen in congenital adrenal hyperplasia (salt-wasting 21-hydroxylase deficiency)." },
      { id: "opt-ped-1e", option_text: "Respiratory acidosis with hyperkalemia", is_correct: false, explanation: "Pyloric stenosis is an upper GI metabolic disorder, not a primary pulmonary pathology." }
    ]
  },
  {
    id: "mcq-ped-002",
    stem: "A 4-year-old child presents with a 4-day history of high fever (39.5°C), bilateral non-purulent conjunctivitis, red 'strawberry tongue', dry cracked lips, diffuse polymorphous erythematous rash, and indurated edema of the hands and feet with cervical lymphadenopathy. What is the MOST critical cardiac complication requiring early echocardiography?",
    difficulty: "easy",
    subject: "Paediatrics",
    topic: "Cardiology & Kawasaki Disease",
    explanation: "This child meets diagnostic criteria for Kawasaki Disease (mucocutaneous lymph node syndrome). The most dreaded complication is the development of Coronary Artery Aneurysms (in up to 25% of untreated children), which can lead to myocardial infarction and sudden death. Treatment with IVIG and high-dose aspirin within the first 10 days drastically reduces this risk to <5%.",
    reference: "Ghai Essential Pediatrics, 9th Ed. (Ch. 13: Cardiovascular Disorders - Kawasaki Disease)",
    question_options: [
      { id: "opt-ped-2a", option_text: "Coronary artery aneurysms", is_correct: true, explanation: "Occurs in up to 25% of untreated cases; prevented with early IVIG and aspirin." },
      { id: "opt-ped-2b", option_text: "Coarctation of the aorta", is_correct: false, explanation: "Congenital vascular malformation, not an inflammatory sequela." },
      { id: "opt-ped-2c", option_text: "Mitral valve prolapse with chordal rupture", is_correct: false, explanation: "Associated with connective tissue disorders like Marfan syndrome." },
      { id: "opt-ped-2d", option_text: "Patent ductus arteriosus", is_correct: false, explanation: "Congenital persistence of fetal vessel in neonates." },
      { id: "opt-ped-2e", option_text: "Tetralogy of Fallot", is_correct: false, explanation: "Cyanotic congenital heart defect present from birth." }
    ]
  },

  // ── EMBRYOLOGY (Langman's Medical Embryology)
  {
    id: "mcq-emb-001",
    stem: "A newborn is evaluated for cyanosis and tachypnea. Echocardiography reveals Tetralogy of Fallot (pulmonary stenosis, ventricular septal defect, overriding aorta, right ventricular hypertrophy). What is the primary embryological developmental defect underlying this constellation of malformations?",
    difficulty: "medium",
    subject: "Embryology",
    topic: "Cardiovascular Development",
    explanation: "Tetralogy of Fallot results from the abnormal anterior and cephalad deviation of the conotruncal (aorticopulmonary) septum during division of the truncus arteriosus and conus cordis by neural crest cells. This unequal division narrows the pulmonary outflow tract (pulmonary stenosis) and creates a large subaortic ventricular septal defect with an overriding aorta.",
    reference: "Langman's Medical Embryology, 14th Ed. (Ch. 13: Cardiovascular System - Conotruncal Malformations)",
    question_options: [
      { id: "opt-emb-1a", option_text: "Anterior and superior malalignment of the conotruncal septum", is_correct: true, explanation: "Unequal division of the truncus arteriosus creates all four classic anatomical components." },
      { id: "opt-emb-1b", option_text: "Failure of septum primum fusion with endocardial cushions", is_correct: false, explanation: "Results in ostium primum atrial septal defect." },
      { id: "opt-emb-1c", option_text: "Complete absence of spiral twisting of the truncus arteriosus", is_correct: false, explanation: "Results in Transposition of the Great Arteries (TGA)." },
      { id: "opt-emb-1d", option_text: "Premature closure of the foramen ovale in utero", is_correct: false, explanation: "Causes hypoplastic left heart syndrome." },
      { id: "opt-emb-1e", option_text: "Failure of the left 4th aortic arch to form", is_correct: false, explanation: "Results in interruption or coarctation of the aortic arch." }
    ]
  },

  // ── HISTOLOGY (Junqueira's Basic Histology)
  {
    id: "mcq-hist-001",
    stem: "A microscopic section of the stomach fundus shows large, round-to-pyramidal cells with intensely eosinophilic cytoplasm and central spherical nuclei located predominantly in the middle region of the gastric glands. Which substance is synthesized and secreted by these specific cells?",
    difficulty: "easy",
    subject: "Histology",
    topic: "Gastrointestinal Epithelium",
    explanation: "Parietal (oxyntic) cells are characterized histologically by intense eosinophilia due to abundant mitochondria required to power H+/K+ ATPase proton pumps. They synthesize and secrete Hydrochloric Acid (HCl) and Intrinsic Factor (vital for vitamin B12 absorption in the terminal ileum).",
    reference: "Junqueira's Basic Histology: Text and Atlas, 16th Ed. (Ch. 15: Digestive Tract - Stomach)",
    question_options: [
      { id: "opt-hist-1a", option_text: "Hydrochloric acid (HCl) and Intrinsic factor", is_correct: true, explanation: "Secreted by eosinophilic parietal (oxyntic) cells." },
      { id: "opt-hist-1b", option_text: "Pepsinogen", is_correct: false, explanation: "Secreted by basophilic Chief (zymogenic) cells at the base of gastric glands." },
      { id: "opt-hist-1c", option_text: "Gastrin", is_correct: false, explanation: "Secreted by neuroendocrine G-cells located in the gastric antrum." },
      { id: "opt-hist-1d", option_text: "Somatostatin", is_correct: false, explanation: "Secreted by D-cells in the antrum and pancreatic islets." },
      { id: "opt-hist-1e", option_text: "Alkaline mucus", is_correct: false, explanation: "Secreted by surface mucous cells and mucous neck cells." }
    ]
  },

  // ── OBSTETRICS & GYNAECOLOGY
  {
    id: "mcq-obg-001",
    stem: "A 28-year-old primigravida at 34 weeks gestation presents to the maternity assessment unit with a blood pressure of 165/110 mmHg on two readings 4 hours apart, 3+ proteinuria on dipstick, severe frontal headache, and visual scotomata. What is the drug of choice for the prevention and treatment of eclamptic seizures in this patient?",
    difficulty: "easy",
    subject: "Obstetrics & Gynaecology",
    topic: "Hypertensive Disorders of Pregnancy",
    explanation: "Magnesium sulfate (MgSO4) is the gold standard evidence-based drug of choice for seizure prophylaxis in severe pre-eclampsia and treatment of eclamptic convulsions (supported by the landmark Magpie Trial). It acts as a central NMDA receptor blocker and cerebral vasodilator.",
    reference: "Williams Obstetrics, 26th Ed.; WHO Guidelines for Prevention and Treatment of Pre-eclampsia and Eclampsia",
    question_options: [
      { id: "opt-obg-1a", option_text: "Magnesium sulfate (MgSO4)", is_correct: true, explanation: "Reduces eclampsia risk by >50% and is superior to phenytoin or diazepam." },
      { id: "opt-obg-1b", option_text: "Diazepam intravenous infusion", is_correct: false, explanation: "Inferior to MgSO4, causes neonatal respiratory depression and hypotonia." },
      { id: "opt-obg-1c", option_text: "Phenytoin sodium", is_correct: false, explanation: "Proven less effective than magnesium sulfate in clinical trials." },
      { id: "opt-obg-1d", option_text: "Sodium nitroprusside", is_correct: false, explanation: "Risk of fetal cyanide toxicity; used only in refractory hypertensive emergencies." },
      { id: "opt-obg-1e", option_text: "Labetalol only without anticonvulsant", is_correct: false, explanation: "Labetalol lowers blood pressure but does not prevent eclamptic seizures." }
    ]
  },

  // ── INFECTIOUS DISEASE & MICROBIOLOGY
  {
    id: "mcq-micro-001",
    stem: "A 24-year-old medical student on ward rounds sustains an accidental needlestick injury from a hollow-bore needle used on an HIV-positive patient with a viral load of 85,000 copies/mL. Which post-exposure prophylaxis (PEP) regimen should be initiated within 72 hours?",
    difficulty: "medium",
    subject: "Internal Medicine",
    topic: "Infectious Disease & HIV",
    explanation: "Standard WHO and CDC guidelines for occupational HIV post-exposure prophylaxis (PEP) recommend a 3-drug regimen for 28 days initiated as early as possible (ideally within 2 hours, and no later than 72 hours): Tenofovir disoproxil fumarate (TDF) + Emtricitabine (FTC) or Lamivudine (3TC) + Dolutegravir (DTG) or Raltegravir (RAL).",
    reference: "WHO Guidelines for Post-Exposure Prophylaxis for HIV; Kumar & Clark (Infectious Diseases)",
    question_options: [
      { id: "opt-micro-1a", option_text: "Tenofovir + Emtricitabine + Dolutegravir for 28 days", is_correct: true, explanation: "Preferred first-line 3-drug PEP regimen for 28 days." },
      { id: "opt-micro-1b", option_text: "Zidovudine monotherapy for 7 days", is_correct: false, explanation: "Monotherapy is outdated and ineffective against modern resistant viral strains." },
      { id: "opt-micro-1c", option_text: "Efavirenz + Lamivudine for 14 days", is_correct: false, explanation: "28-day duration is mandatory, and Dolutegravir is preferred over NNRTIs." },
      { id: "opt-micro-1d", option_text: "Wait for baseline antibody testing of student before starting treatment", is_correct: false, explanation: "PEP must be started immediately without waiting for lab test turnarounds." },
      { id: "opt-micro-1e", option_text: "Ceftriaxone single intramuscular dose", is_correct: false, explanation: "Ceftriaxone is an antibacterial (cephalosporin), with zero antiretroviral activity." }
    ]
  },

  // ── HEMATOLOGY
  {
    id: "mcq-hem-001",
    stem: "A 19-year-old male with Sickle Cell Anemia (HbSS) presents with sudden onset of severe pallor, extreme lethargy, and tachycardia. Complete blood count reveals Hb of 3.8 g/dL (baseline 8.0 g/dL) and a reticulocyte count of 0.1% (severe reticulocytopenia). Which pathogen is the MOST common cause of this transient aplastic crisis?",
    difficulty: "medium",
    subject: "Pathology",
    topic: "Hematology & Hemoglobinopathies",
    explanation: "Parvovirus B19 (a single-stranded DNA erythrovirus) specifically infects and lyses erythroid progenitor cells via the P-antigen receptor on erythroblasts. In patients with high baseline red cell turnover (such as sickle cell anemia or hereditary spherocytosis), acute cessation of erythropoiesis causes a life-threatening aplastic crisis with profound reticulocytopenia.",
    reference: "Robbins & Cotran Pathologic Basis of Disease, 10th Ed. (Ch. 14: Red Blood Cell Disorders)",
    question_options: [
      { id: "opt-hem-1a", option_text: "Parvovirus B19", is_correct: true, explanation: "Tropic to erythroid precursor cells, halting erythropoiesis in hemolytic states." },
      { id: "opt-hem-1b", option_text: "Epstein-Barr virus (EBV)", is_correct: false, explanation: "Infects B lymphocytes via CD21 receptor." },
      { id: "opt-hem-1c", option_text: "Cytomegalovirus (CMV)", is_correct: false, explanation: "Causes mononucleosis-like illness and retinitis in immunocompromised hosts." },
      { id: "opt-hem-1d", option_text: "Streptococcus pneumoniae", is_correct: false, explanation: "Causes invasive bacterial encapsulated sepsis in asplenic sickle cell patients." },
      { id: "opt-hem-1e", option_text: "Plasmodium falciparum", is_correct: false, explanation: "Causes hyperhemolytic crisis with elevated (not depressed) reticulocyte count." }
    ]
  },

  // ── NEUROLOGY
  {
    id: "mcq-neuro-001",
    stem: "A 62-year-old male presents with sudden onset of right-sided hemiplegia and expressive (Broca) aphasia. He can understand spoken and written words but struggles to formulate speech fluently. Which vascular territory is affected?",
    difficulty: "easy",
    subject: "Internal Medicine",
    topic: "Neurology & Stroke",
    explanation: "Broca's area (Brodmann areas 44 and 45) is located in the posterior inferior frontal gyrus of the dominant (left) hemisphere. It is supplied by the superior division of the Left Middle Cerebral Artery (MCA). Occlusion results in expressive motor aphasia and contralateral face/arm predominant hemiparesis.",
    reference: "Kumar & Clark's Clinical Medicine; Snell's Neuroanatomy",
    question_options: [
      { id: "opt-neuro-1a", option_text: "Left Middle Cerebral Artery (Superior division)", is_correct: true, explanation: "Supplies Broca area and lateral motor cortex (face and upper limb)." },
      { id: "opt-neuro-1b", option_text: "Left Middle Cerebral Artery (Inferior division)", is_correct: false, explanation: "Supplies Wernicke area, producing receptive/fluent sensory aphasia." },
      { id: "opt-neuro-1c", option_text: "Left Anterior Cerebral Artery (ACA)", is_correct: false, explanation: "Causes contralateral leg-predominant weakness and urinary incontinence." },
      { id: "opt-neuro-1d", option_text: "Posterior Cerebral Artery (PCA)", is_correct: false, explanation: "Causes homonymous hemianopia with macular sparing." },
      { id: "opt-neuro-1e", option_text: "Basilar artery", is_correct: false, explanation: "Causes locked-in syndrome or bilateral brainstem signs." }
    ]
  },

  // ── RENAL & ELECTROLYTES
  {
    id: "mcq-ren-001",
    stem: "A 72-year-old female with lung cancer is admitted with confusion and lethargy. Serum sodium is 118 mmol/L, serum osmolality is 245 mOsm/kg (low), urine osmolality is 520 mOsm/kg (inappropriately high), and urine sodium is 48 mmol/L (elevated). She is euvolemic on clinical exam. What is the MOST likely diagnosis?",
    difficulty: "medium",
    subject: "Internal Medicine",
    topic: "Nephrology & Fluids",
    explanation: "This is the classic presentation of Syndrome of Inappropriate Antidiuretic Hormone (SIADH) secretion (commonly ectopic ADH from small cell lung cancer). Diagnostic hallmarks include: hypotonic hyponatremia, high urine osmolality (>100 mOsm/kg), high urine sodium (>30-40 mmol/L), and clinical euvolemia without edema or dehydration.",
    reference: "Kumar & Clark's Clinical Medicine, 10th Ed. (Ch. 19: Water and Electrolytes); UpToDate (Etiology of SIADH)",
    question_options: [
      { id: "opt-ren-1a", option_text: "Syndrome of Inappropriate Antidiuretic Hormone (SIADH)", is_correct: true, explanation: "Euvolemic hypotonic hyponatremia with concentrated urine (osmolality > serum)." },
      { id: "opt-ren-1b", option_text: "Central Diabetes Insipidus", is_correct: false, explanation: "Features hypernatremia with dilute urine (<300 mOsm/kg)." },
      { id: "opt-ren-1c", option_text: "Primary Psychogenic Polydipsia", is_correct: false, explanation: "Produces dilute urine with urine osmolality < 100 mOsm/kg." },
      { id: "opt-ren-1d", option_text: "Congestive Heart Failure", is_correct: false, explanation: "Hypervolemic state with low urine sodium (<20 mmol/L)." },
      { id: "opt-ren-1e", option_text: "Dehydration from gastrointestinal losses", is_correct: false, explanation: "Hypovolemic state with low urine sodium (<20 mmol/L) due to aldosterone activation." }
    ]
  }
]
