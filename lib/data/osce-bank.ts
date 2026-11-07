// ─── PodGuide Clinical OSCE Bank ─────────────────────────────────────────────
// Curriculum-aligned OSCE Stations across all major clinical modules.
// Aligned with Macleod's, Bailey & Love, Coovadia, Snell, and WHO guidelines.

export interface ExaminerQuestion {
  id: string
  number: number
  prompt: string
  hint: string
  modelAnswer: string
  rubricItems: { text: string; marks: number }[]
}

export interface ClinicalVignetteCase {
  id: string
  title: string
  module: string
  topic: string
  difficulty: "Easy" | "Medium" | "Hard"
  presentation: {
    story: string
    vitals: { hr: string; bp: string; temp: string; rr: string; spo2: string }
    labs: string
    imaging: string
  }
  questions: ExaminerQuestion[]
}

export interface ExamChecklistItem {
  id: string
  text: string
  marks: number
  critical: boolean
}

export interface ExamStation {
  id: string
  title: string
  module: string
  topic: string
  difficulty: "Easy" | "Medium" | "Hard"
  patientBrief: string
  hint: string
  steps: {
    category: string
    items: ExamChecklistItem[]
  }[]
}

export interface HistoryInquiry {
  id: string
  category: string
  question: string
  patientResponse: string
  marks: number
}

export interface HistoryStation {
  id: string
  title: string
  module: string
  topic: string
  difficulty: "Easy" | "Medium" | "Hard"
  patientName: string
  ageGender: string
  chiefComplaint: string
  scenario: string
  hint: string
  inquiries: HistoryInquiry[]
  modelSynthesis: string
}

export interface ModuleConfig {
  id: string
  name: string
  topics: string[]
}

export const OSCE_MODULES: ModuleConfig[] = [
  {
    id: "pediatrics",
    name: "Pediatrics",
    topics: ["Febrile Rash", "Respiratory Distress & Stridor", "Neonatal Jaundice", "Severe Dehydration", "Failure to Thrive", "Seizures & Meningitis"]
  },
  {
    id: "internal-medicine",
    name: "Internal Medicine",
    topics: ["Chest Pain & MI", "Headache & Meningism", "Jaundice & Hepatic Failure", "Dyspnea & Heart Failure", "Syncope & Arrhythmia", "Ascites & Portal HTN"]
  },
  {
    id: "surgery",
    name: "Surgery",
    topics: ["Acute Abdomen", "Bowel Obstruction", "Obstructive Jaundice", "Groin Hernia & Scrotum", "Lower GI Hemorrhage", "Head Injury & Trauma"]
  },
  {
    id: "obgyn",
    name: "Obstetrics & Gynecology",
    topics: ["Severe Pre-Eclampsia", "Antepartum Hemorrhage", "Postpartum Hemorrhage (PPH)", "Ectopic Pregnancy", "Pelvic Inflammatory Disease"]
  },
  {
    id: "psychiatry",
    name: "Psychiatry",
    topics: ["First-Episode Psychosis", "Severe Depression & Suicide Risk", "Acute Mania & Bipolar", "Delirium vs Dementia", "Alcohol Withdrawal"]
  },
  {
    id: "emergency",
    name: "Emergency & Critical Care",
    topics: ["Anaphylaxis & Shock", "Sepsis & Septic Shock", "Pulmonary Embolism", "Diabetic Ketoacidosis (DKA)", "Tension Pneumothorax"]
  },
  {
    id: "neurology",
    name: "Neurology",
    topics: ["Acute Ischemic Stroke", "Status Epilepticus", "Subarachnoid Hemorrhage", "Guillain-Barré Syndrome", "Parkinsonism & Tremor"]
  },
  {
    id: "orthopaedics",
    name: "Orthopaedics & Musculoskeletal",
    topics: ["Compartment Syndrome", "Open Fracture Management", "Septic Arthritis", "Cauda Equina Syndrome", "Acute Knee Hemarthrosis"]
  }
]

// ─── Comprehensive Bank of Clinical Vignettes ─────────────────────────────────

export const VIGNETTE_CASES: ClinicalVignetteCase[] = [
  // 1. PEDIATRICS: Febrile Rash (Kawasaki / MIS-C) - Exact from screenshot
  {
    id: "paeds-febrile-rash",
    title: "Febrile Multisystem Rash (Kawasaki / MIS-C)",
    module: "Pediatrics",
    topic: "Febrile Rash",
    difficulty: "Medium",
    presentation: {
      story: "A 7-year-old boy is brought to the emergency department with a 5-day history of fever, lethargy, abdominal discomfort and a widespread rash. His parents report red eyes without discharge, cracked lips and reduced oral intake; he had a mild cough and diarrhoea approximately four weeks ago, but no recent travel or known infectious contacts. He has mild asthma treated with salbutamol as required and has received all routine vaccinations. On examination, his temperature is 39.2°C, heart rate 142 beats/min, blood pressure 86/48 mmHg, respiratory rate 30 breaths/min and oxygen saturation 96% on air; he appears unwell, with bilateral non-purulent conjunctivitis, cervical lymphadenopathy and a polymorphous maculopapular rash. His extremities are warm with delayed capillary refill of 4 seconds, and abdominal examination reveals diffuse tenderness without guarding; there is no meningism. Initial investigations show haemoglobin 108 g/L, lymphocytes 0.7 × 10⁹/L, platelets 105 × 10⁹/L, CRP 240 mg/L, sodium 130 mmol/L, creatinine 78 µmol/L and mildly elevated ALT; venous lactate is 3.6 mmol/L. ECG demonstrates sinus tachycardia, and a rapid SARS-CoV-2 antigen test is negative.",
      vitals: { hr: "142 bpm", bp: "86/48 mmHg", temp: "39.2°C", rr: "30/min", spo2: "96%" },
      labs: "WCC 14.8 × 10⁹/L (lymphopenia 0.7), Platelets 105 × 10⁹/L, CRP 240 mg/L, Ferritin 840 µg/L, Troponin-T 48 ng/L, Lactate 3.6 mmol/L.",
      imaging: "Chest radiograph shows peribronchial thickening without focal consolidation. Bedside echocardiogram shows depressed left ventricular ejection fraction (42%) and mild dilatation of the left main coronary artery."
    },
    questions: [
      {
        id: "pfr-q1",
        number: 1,
        prompt: "What additional focused history would you obtain to clarify the diagnosis, identify preceding infections and assess the severity of this child's illness?",
        hint: "Inquire about prior COVID-19 exposures 2–6 weeks ago, BCG scar changes, perianal peeling, fluid balance, and altered sensorium.",
        modelAnswer: "Inquire specifically about household COVID-19 or febrile illness 2–6 weeks prior (confirming post-infectious MIS-C); duration of high fever; redness or induration at the BCG vaccination site; perineal desquamation; changes in extremities (swollen hands/feet); fluid balance (wet nappies/urine output in last 12 hours); irritability, lethargy, or signs of encephalopathy; and past cardiac or autoinflammatory history.",
        rubricItems: [
          { text: "Detailed inquiry into prior COVID-19 infection or close contact 2–6 weeks prior", marks: 1 },
          { text: "History of mucosal and extremity signs (BCG site induration, palm/sole erythema, perineal peeling)", marks: 1 },
          { text: "Assessment of hydration status, oral intake, and urine frequency", marks: 1 },
          { text: "Neurological red flags (irritability, encephalopathy, altered level of consciousness)", marks: 1 }
        ]
      },
      {
        id: "pfr-q2",
        number: 2,
        prompt: "What is the primary working diagnosis, and what key clinical condition does it overlap with?",
        hint: "Compare Multisystem Inflammatory Syndrome in Children (MIS-C / PIMS-TS) with classic Kawasaki Disease and Toxic Shock Syndrome.",
        modelAnswer: "Primary diagnosis is Multisystem Inflammatory Syndrome in Children (MIS-C / PIMS-TS) presenting with vasodilatory shock. It overlaps closely with atypical/incomplete Kawasaki Disease (fever ≥5 days, conjunctivitis, mucosal changes, rash, lymphadenopathy) and Staphylococcal/Streptococcal Toxic Shock Syndrome (TSS).",
        rubricItems: [
          { text: "Multisystem Inflammatory Syndrome in Children (MIS-C / PIMS-TS) identified as primary diagnosis", marks: 2 },
          { text: "Kawasaki Disease accurately cited as major clinical overlap", marks: 1 },
          { text: "Toxic Shock Syndrome (TSS) noted as infectious differential", marks: 1 }
        ]
      },
      {
        id: "pfr-q3",
        number: 3,
        prompt: "How will you immediately resuscitate and manage this child's warm vasodilatory shock (BP 86/48 mmHg, lactate 3.6)?",
        hint: "Recognize that cardiac dysfunction is common in MIS-C; over-resuscitation with large fluid boluses can induce acute pulmonary edema.",
        modelAnswer: "ABCDE approach: secure high-flow oxygen; establish IV/IO access; cautious fluid challenge (10 mL/kg balanced crystalloid over 20–30 min rather than aggressive 20 mL/kg due to myocarditis risk); early inotropic/vasopressor support with Norepinephrine or Epinephrine infusion if MAP remains low; broad-spectrum IV antibiotics (e.g. Cefotaxime + Vancomycin) until bacterial sepsis is excluded; urgent transfer to Pediatric Intensive Care Unit (PICU).",
        rubricItems: [
          { text: "Controlled fluid resuscitation (10 mL/kg aliquot) recognizing risk of myocardial failure", marks: 1 },
          { text: "Early initiation of vasoactive support (Norepinephrine/Epinephrine) for vasodilatory shock", marks: 1 },
          { text: "Immediate empiric broad-spectrum antimicrobial coverage pending blood cultures", marks: 1 },
          { text: "Urgent PICU referral and invasive monitoring placement", marks: 1 }
        ]
      },
      {
        id: "pfr-q4",
        number: 4,
        prompt: "Outline the definitive immunomodulatory therapy indicated once bacterial shock is managed.",
        hint: "Intravenous immunoglobulin (IVIG) and high-dose corticosteroids form the gold-standard backbone.",
        modelAnswer: "First-line immunomodulatory therapy consists of Intravenous Immunoglobulin (IVIG) 2 g/kg infused over 12–24 hours, combined with IV Methylprednisolone (1–2 mg/kg/day for moderate cases, pulsed at 10–30 mg/kg/day for severe shock). Low-dose Aspirin (3–5 mg/kg/day) is commenced for thromboprophylaxis and coronary protection once bleeding risk and platelet count permit.",
        rubricItems: [
          { text: "Intravenous Immunoglobulin (IVIG) 2 g/kg total dose specified", marks: 2 },
          { text: "Systemic corticosteroid therapy (IV Methylprednisolone) initiated", marks: 1 },
          { text: "Antiplatelet therapy with low-dose Aspirin for coronary thrombosis prevention", marks: 1 }
        ]
      }
    ]
  },

  // 2. SURGERY: Acute Abdomen (Bowel Obstruction)
  {
    id: "surg-acute-abdomen",
    title: "Large Bowel Obstruction with Impending Perforation",
    module: "Surgery",
    topic: "Acute Abdomen",
    difficulty: "Medium",
    presentation: {
      story: "A 72-year-old man presents to the emergency department with 24 hours of worsening central abdominal pain, repeated bilious vomiting, and marked abdominal distension. He has not passed stool or flatus for 18 hours. He reports several months of progressive constipation, pencil-thin stools, and occasional dark blood mixed in stool. Medical history includes type 2 diabetes and atrial fibrillation on apixaban. On examination, he is moderately dehydrated, with a distended, tympanitic abdomen and high-pitched tinkling bowel sounds. Rectal examination shows an empty ampulla with no palpable pelvic mass.",
      vitals: { hr: "108 bpm", bp: "104/66 mmHg", temp: "37.8°C", rr: "22/min", spo2: "96%" },
      labs: "WCC 15.2 × 10⁹/L, CRP 86 mg/L, Creatinine 146 µmol/L (baseline 84), Lactate 2.6 mmol/L, Hb 108 g/L.",
      imaging: "Plain abdominal radiograph shows marked colonic distension (>7 cm) with prominent haustra and absence of distal rectal gas, diagnostic of distal large bowel obstruction."
    },
    questions: [
      {
        id: "sao-q1",
        number: 1,
        prompt: "Outline your immediate resuscitation and gastrointestinal decompression protocol within the first hour.",
        hint: "Focus on intravenous rehydration, nasogastric decompression, urinary catheterization, and crossmatching.",
        modelAnswer: "Establish two large-bore IV cannulae and begin balanced crystalloid resuscitation; insert a wide-bore nasogastric tube (Ryle's) on free drainage to decompress the stomach and prevent pulmonary aspiration; insert a Foley urinary catheter to monitor hourly urine output (target ≥0.5 mL/kg/h); send bloods for type and crossmatch, coagulation, electrolytes, and arterial blood gas; keep strictly nil-by-mouth; order urgent contrast-enhanced CT of the abdomen and pelvis.",
        rubricItems: [
          { text: "IV fluid resuscitation with crystalloids targeting hemodynamic stability", marks: 1 },
          { text: "Wide-bore nasogastric tube on free drainage to prevent aspiration", marks: 1 },
          { text: "Foley catheterization for hourly urine output monitoring", marks: 1 },
          { text: "Urgent contrast-enhanced CT of abdomen and pelvis requested", marks: 1 }
        ]
      },
      {
        id: "sao-q2",
        number: 2,
        prompt: "What is the most probable underlying etiology, and what secondary differential must be excluded on imaging?",
        hint: "Consider the patient's age and months of altered bowel caliber without prior surgical adhesions.",
        modelAnswer: "Primary diagnosis is obstructive colorectal adenocarcinoma of the sigmoid colon or rectosigmoid junction. The crucial differential to exclude is sigmoid volvulus (which produces a closed-loop 'coffee-bean' sign without an apple-core stricture) and diverticular stricture.",
        rubricItems: [
          { text: "Sigmoid or rectosigmoid colorectal adenocarcinoma identified", marks: 2 },
          { text: "Sigmoid volvulus recognized as critical differential diagnosis", marks: 1 },
          { text: "Diverticular stricture considered", marks: 1 }
        ]
      },
      {
        id: "sao-q3",
        number: 3,
        prompt: "The patient suddenly develops localized caecal tenderness and rebound in the right iliac fossa. Explain the anatomical and physical principles.",
        hint: "Recall Laplace's law (Wall Tension = Pressure × Radius) and the competence of the ileocaecal valve.",
        modelAnswer: "Closed-loop obstruction with a competent ileocaecal valve (Bauhins valve). According to Laplace's Law (Wall Tension = Intraluminal Pressure × Radius), the caecum has the largest diameter in the entire gastrointestinal tract, and therefore experiences the greatest wall tension. When diameter exceeds 9–10 cm, mucosal perfusion ceases, leading to ischemic gangrene and perforation.",
        rubricItems: [
          { text: "Closed-loop obstruction due to competent ileocaecal valve explained", marks: 1 },
          { text: "Laplace's Law (Tension = Pressure × Radius) correctly applied", marks: 2 },
          { text: "Recognition of imminent caecal gangrene and perforation risk", marks: 1 }
        ]
      },
      {
        id: "sao-q4",
        number: 4,
        prompt: "What emergency surgical operation is indicated, and how will you manage his apixaban?",
        hint: "Hartmann's procedure vs primary resection; reverse apixaban with 4-factor prothrombin complex concentrate.",
        modelAnswer: "Emergency laparotomy with a Hartmann's procedure (resection of the obstructing rectosigmoid tumor, closure of the rectal stump, and end colostomy). Primary anastomosis in an unprepared, acutely obstructed, and edematous colon carries high dehiscence risk. Reverse apixaban immediately with 4-factor Prothrombin Complex Concentrate (PCC) or Andexanet alfa, administering Vitamin K and checking clotting parameters.",
        rubricItems: [
          { text: "Hartmann's procedure (sigmoid colectomy with end colostomy)", marks: 2 },
          { text: "Sound clinical rationale for avoiding primary anastomosis in obstructed bowel", marks: 1 },
          { text: "Reversal of apixaban with 4-factor PCC or specific antidote", marks: 1 }
        ]
      }
    ]
  },

  // 3. INTERNAL MEDICINE: Jaundice & Hepatic Failure
  {
    id: "med-jaundice-failure",
    title: "Acute Jaundice and Hepatorenal Impairment",
    module: "Internal Medicine",
    topic: "Jaundice & Hepatic Failure",
    difficulty: "Hard",
    presentation: {
      story: "A 48-year-old woman is admitted with a 2-week history of progressively deepening scleral icterus, dark tea-colored urine, pale acholic stools, and severe generalized pruritus. She notes a 4 kg weight loss over the past 2 months with vague right upper quadrant discomfort. She has no fever, chills, or past alcohol abuse. On examination, she is deeply jaundiced with excoriation marks across her limbs. Abdominal examination reveals a non-tender, distended, palpable gallbladder in the right hypochondrium with mild non-tender hepatomegaly. There is no ascites or peripheral edema.",
      vitals: { hr: "78 bpm", bp: "128/82 mmHg", temp: "36.8°C", rr: "16/min", spo2: "99%" },
      labs: "Total Bilirubin 284 µmol/L (Direct 232 µmol/L), ALP 640 U/L, GGT 480 U/L, ALT 92 U/L, AST 86 U/L, Albumin 34 g/L, INR 1.3 (corrects to 1.0 with parenteral Vitamin K).",
      imaging: "Abdominal ultrasound demonstrates marked intrahepatic and extrahepatic biliary ductal dilatation, with the common bile duct measuring 14 mm, terminating abruptly at the pancreatic head. The gallbladder is distended without gallstones."
    },
    questions: [
      {
        id: "mjf-q1",
        number: 1,
        prompt: "State the clinical sign demonstrated on abdominal examination (Courvoisier's law) and explain its diagnostic significance.",
        hint: "Courvoisier's law states that in the presence of jaundice, an enlarged, non-tender gallbladder is unlikely to be due to gallstones.",
        modelAnswer: "Courvoisier's Sign / Courvoisier's Law: In a jaundiced patient, a palpable, non-tender gallbladder indicates that the biliary obstruction is unlikely to be caused by gallstones (as chronic gallstone disease produces a fibrosed, shrunken gallbladder that cannot distend). It strongly points to a malignant obstruction of the distal common bile duct, most commonly adenocarcinoma of the head of the pancreas or periampullary carcinoma.",
        rubricItems: [
          { text: "Courvoisier's sign / law correctly named", marks: 2 },
          { text: "Pathophysiological rationale explained (fibrosed gallbladder in stones vs distensible in neoplasm)", marks: 1 },
          { text: "Pancreatic head adenocarcinoma identified as leading diagnosis", marks: 1 }
        ]
      },
      {
        id: "mjf-q2",
        number: 2,
        prompt: "Explain the biochemical pattern of her liver function tests (obstructive vs hepatocellular) and the Vitamin K response.",
        hint: "Disproportionate elevation of ALP/GGT compared to transaminases; malabsorption of fat-soluble vitamins.",
        modelAnswer: "The biochemical profile demonstrates a classic obstructive / cholestatic jaundice pattern: marked elevation of conjugated bilirubin (direct >80%) with profound alkaline phosphatase (ALP) and GGT elevation out of proportion to mild transaminase (ALT/AST) elevation. The prolonged INR that promptly corrects with parenteral Vitamin K indicates impaired intestinal absorption of fat-soluble vitamins due to absence of bile salts in the gut, rather than intrinsic hepatic synthetic failure.",
        rubricItems: [
          { text: "Cholestatic / post-hepatic obstructive jaundice pattern accurately classified", marks: 2 },
          { text: "Correction of INR with Vitamin K attributed to impaired fat-soluble absorption", marks: 1 },
          { text: "Differentiation from primary hepatocellular synthetic failure", marks: 1 }
        ]
      },
      {
        id: "mjf-q3",
        number: 3,
        prompt: "What is the single best cross-sectional diagnostic imaging modality to assess resectability?",
        hint: "Pancreatic protocol dual-phase contrast CT.",
        modelAnswer: "Triple-phase contrast-enhanced CT of the abdomen and pelvis (Pancreatic Protocol: non-contrast, arterial/pancreatic parenchymal phase, and portal venous phase with thin slices ≤1 mm). This assesses tumor size, local fat infiltration, and vascular involvement of the superior mesenteric artery (SMA), celiac axis, and superior mesenteric/portal veins.",
        rubricItems: [
          { text: "Triple-phase contrast-enhanced CT abdomen (pancreatic protocol) specified", marks: 2 },
          { text: "Vascular invasion assessment (SMA, celiac axis, portal vein) cited", marks: 2 }
        ]
      },
      {
        id: "mjf-q4",
        number: 4,
        prompt: "If the tumor is localized to the pancreatic head without distant metastases, what is the definitive curative surgical procedure?",
        hint: "Pancreaticoduodenectomy (Whipple's procedure).",
        modelAnswer: "Pancreaticoduodenectomy (Whipple's procedure), comprising resection of the pancreatic head, duodenum, distal stomach (or pylorus-preserving), common bile duct, and gallbladder, followed by reconstruction via pancreaticojejunostomy, hepaticojejunostomy, and gastrojejunostomy.",
        rubricItems: [
          { text: "Pancreaticoduodenectomy / Whipple procedure correctly named", marks: 2 },
          { text: "Key anatomical structures resected and reconstructed described", marks: 2 }
        ]
      }
    ]
  },

  // 4. INTERNAL MEDICINE: Headache & Meningism
  {
    id: "med-headache-meningism",
    title: "Acute Severe Headache with Meningism",
    module: "Internal Medicine",
    topic: "Headache & Meningism",
    difficulty: "Medium",
    presentation: {
      story: "A 29-year-old female medical student presents with an 18-hour history of an excruciating occipital headache that came on over 30 minutes, photophobia, fever, and repeated vomiting. She had a sore throat two days earlier. On examination, temperature is 38.9°C, and she lies curled in bed facing away from the room lights. She has marked neck stiffness with positive Kernig's and Brudzinski's signs. Examination reveals no focal neurological deficits, pupils are equal and reactive, and fundoscopy shows sharp optic disc margins. There are three petechial macules on her lower extremities.",
      vitals: { hr: "116 bpm", bp: "112/68 mmHg", temp: "38.9°C", rr: "22/min", spo2: "98%" },
      labs: "WCC 19.4 × 10⁹/L (88% neutrophils), CRP 182 mg/L, Blood glucose 5.4 mmol/L, Platelets 162 × 10⁹/L.",
      imaging: "Urgent non-contrast head CT demonstrates normal ventricular size, patent basal cisterns, and no intracranial hemorrhage or space-occupying lesion."
    },
    questions: [
      {
        id: "mhm-q1",
        number: 1,
        prompt: "What is your immediate presumptive diagnosis, and what is the primary pathogen indicated by petechial lesions?",
        hint: "Acute bacterial meningitis; Neisseria meningitidis is classic for petechial/purpuric skin lesions.",
        modelAnswer: "Acute bacterial meningitis. The presence of petechial lesions on the lower extremities strongly indicates Neisseria meningitidis (meningococcal meningitis), though Streptococcus pneumoniae remains an important consideration in young adults.",
        rubricItems: [
          { text: "Acute bacterial meningitis identified as primary diagnosis", marks: 2 },
          { text: "Neisseria meningitidis identified as the primary culprit pathogen", marks: 2 }
        ]
      },
      {
        id: "mhm-q2",
        number: 2,
        prompt: "Detail your emergency pharmacological treatment to be administered immediately without delay.",
        hint: "Empiric third-generation cephalosporin + IV dexamethasone administered prior to or with the first antibiotic dose.",
        modelAnswer: "Administer IV Ceftriaxone (2 g IV 12-hourly) or Cefotaxime (2 g IV 6-hourly) plus IV Vancomycin (if penicillin-resistant pneumococcus is suspected). Administer IV Dexamethasone (10 mg IV) prior to or with the first antibiotic dose to reduce hearing loss and neurological sequelae in pneumococcal meningitis. Initiate fluid resuscitation and isolation precautions.",
        rubricItems: [
          { text: "High-dose IV Ceftriaxone (2 g) or Cefotaxime initiated immediately", marks: 2 },
          { text: "IV Dexamethasone administered before or concurrently with antibiotics", marks: 1 },
          { text: "Droplet transmission isolation precautions instituted", marks: 1 }
        ]
      },
      {
        id: "mhm-q3",
        number: 3,
        prompt: "Interpret the anticipated CSF findings in acute bacterial meningitis compared to viral meningitis.",
        hint: "CSF pressure, appearance, white cell predominance, protein, and CSF-to-serum glucose ratio.",
        modelAnswer: "Bacterial CSF profile: Turbid/purulent appearance; elevated opening pressure (>200 mmH2O); markedly elevated white cells (1,000–10,000/µL) with strong polymorphonuclear (neutrophil) predominance (>80%); elevated protein (>1.0 g/L); severely depressed CSF glucose with a CSF:plasma glucose ratio <0.4. In viral meningitis, fluid is clear, lymphocytic predominance is present, and glucose is normal (ratio >0.6).",
        rubricItems: [
          { text: "Marked polymorphonuclear (neutrophilic) pleocytosis described", marks: 1 },
          { text: "Elevated protein and high opening pressure identified", marks: 1 },
          { text: "Low CSF-to-serum glucose ratio (<0.4) highlighted", marks: 1 },
          { text: "Clear distinction from viral lymphocytic pattern provided", marks: 1 }
        ]
      },
      {
        id: "mhm-q4",
        number: 4,
        prompt: "What public health and chemoprophylaxis measures are mandated for her close contacts?",
        hint: "Notify public health authorities; administer Rifampicin or single-dose Ciprofloxacin to household and intimate contacts.",
        modelAnswer: "Mandatory urgent notification to local public health authorities. Chemoprophylaxis for close household and intimate contacts with oral Ciprofloxacin (500 mg single dose) or oral Rifampicin (600 mg twice daily for 2 days) or IM Ceftriaxone (250 mg single dose in pregnant women). Offer meningococcal vaccination according to serogroup results.",
        rubricItems: [
          { text: "Urgent statutory notification to public health authorities", marks: 1 },
          { text: "Oral Ciprofloxacin (500 mg) or Rifampicin chemoprophylaxis prescribed for close contacts", marks: 2 },
          { text: "Definition of close contacts (household, dormitory, intimate contacts)", marks: 1 }
        ]
      }
    ]
  },

  // 5. OBGYN: Severe Pre-Eclampsia & Impending Eclampsia
  {
    id: "obgyn-pre-eclampsia",
    title: "Severe Pre-Eclampsia with HELLP Syndrome",
    module: "Obstetrics & Gynecology",
    topic: "Severe Pre-Eclampsia",
    difficulty: "Hard",
    presentation: {
      story: "A 26-year-old primigravida at 36 weeks gestation presents to the maternity assessment unit with a severe throbbing frontal headache, blurring of vision with flashing lights (scotomata), and epigastric discomfort. Examination reveals marked facial edema, generalized hyperreflexia with 3 beats of ankle clonus. Symphysis-fundal height is 32 cm. Fetal heart rate is 142 bpm with reassuring cardiotocography.",
      vitals: { hr: "92 bpm", bp: "172/114 mmHg", temp: "36.9°C", rr: "18/min", spo2: "98%" },
      labs: "Urinalysis: 4+ proteinuria. Platelets: 72 × 10⁹/L. Serum ALT: 184 U/L, AST: 196 U/L, LDH: 760 U/L, Serum Urate: 490 µmol/L.",
      imaging: "Bedside ultrasound confirms a singleton cephalic fetus with oligohydramnios (AFI 4.2 cm) and asymmetric fetal growth restriction."
    },
    questions: [
      {
        id: "ope-q1",
        number: 1,
        prompt: "State your multi-component clinical diagnosis and explain the significance of her epigastric pain.",
        hint: "Recognize severe pre-eclampsia, impending eclampsia, and HELLP syndrome. Epigastric pain reflects liver capsule distension.",
        modelAnswer: "Severe pre-eclampsia with impending eclampsia (frontal headache, scotomata, clonus) complicated by HELLP syndrome (Hemolysis, Elevated Liver enzymes, Low Platelets) and intrauterine fetal growth restriction. The epigastric and right upper quadrant pain reflects hepatic capsular distension (Glisson's capsule) caused by microvascular hepatic sinusoidal thrombosis and ischemia, warning of impending subcapsular hematoma or hepatic rupture.",
        rubricItems: [
          { text: "Severe pre-eclampsia with impending eclampsia diagnosed", marks: 1 },
          { text: "HELLP syndrome recognized from biochemical and platelet criteria", marks: 1 },
          { text: "Hepatic capsular stretching (Glisson's capsule) identified as cause of epigastric pain", marks: 2 }
        ]
      },
      {
        id: "ope-q2",
        number: 2,
        prompt: "Detail your emergency pharmacological regimen to prevent eclamptic seizures.",
        hint: "Magnesium sulphate 4 g IV loading dose followed by continuous maintenance infusion.",
        modelAnswer: "Administer Magnesium Sulphate (MgSO4): 4 g IV loading dose in 100 mL saline over 15–20 minutes, followed by a continuous IV maintenance infusion of 1 g/hour. Strict clinical monitoring: patellar reflexes present, respiratory rate >12/min, and urinary output >30 mL/hour. Calcium gluconate 10% (10 mL IV) must be kept immediately available at the bedside as the antidote for magnesium toxicity.",
        rubricItems: [
          { text: "Magnesium sulphate 4 g IV loading dose over 15–20 minutes", marks: 1 },
          { text: "Maintenance infusion of 1 g/hour continuous IV", marks: 1 },
          { text: "Monitoring criteria: patellar reflexes, respiratory rate, hourly urine output", marks: 1 },
          { text: "Calcium gluconate 10% kept at bedside as antidote", marks: 1 }
        ]
      },
      {
        id: "ope-q3",
        number: 3,
        prompt: "How will you safely reduce her blood pressure (BP 172/114 mmHg) and what is the therapeutic target?",
        hint: "Target systolic 135–150 and diastolic 85–95 mmHg to preserve uteroplacental perfusion.",
        modelAnswer: "Administer IV Labetalol (20 mg IV bolus over 2 minutes, repeating or doubling to 40 mg and 80 mg every 10–15 minutes up to 220 mg max) or oral immediate-release Nifedipine (10–20 mg). Target blood pressure: systolic 135–150 mmHg and diastolic 85–95 mmHg. Avoid precipitously dropping blood pressure to prevent placental hypoperfusion and fetal compromise.",
        rubricItems: [
          { text: "IV Labetalol or oral immediate-release Nifedipine selected", marks: 2 },
          { text: "Appropriate target range specified (135–150 / 85–95 mmHg)", marks: 1 },
          { text: "Avoidance of sudden over-correction to protect placental flow", marks: 1 }
        ]
      },
      {
        id: "ope-q4",
        number: 4,
        prompt: "What is the definitive cure, and what is your obstetric delivery strategy at 36 weeks?",
        hint: "Delivery of the baby and placenta once maternal status is stabilized.",
        modelAnswer: "Delivery of the fetus and placenta is the sole definitive cure. At 36 weeks with HELLP syndrome, expedite delivery once maternal hemodynamic and metabolic status are stabilized. Administer antenatal corticosteroids (Betamethasone) for fetal lung maturity; perform urgent Cesarean section if cervix is unfavorable or fetal distress occurs; verify platelet count prior to regional neuraxial anesthesia (>80 × 10⁹/L required).",
        rubricItems: [
          { text: "Delivery of fetus and placenta recognized as definitive cure", marks: 2 },
          { text: "Expedited delivery plan once mother is hemodynamically stabilized", marks: 1 },
          { text: "Platelet evaluation prior to neuraxial regional anesthesia", marks: 1 }
        ]
      }
    ]
  },

  // 6. PSYCHIATRY: First-Episode Psychosis
  {
    id: "psych-first-episode",
    title: "Acute First-Episode Psychosis",
    module: "Psychiatry",
    topic: "First-Episode Psychosis",
    difficulty: "Medium",
    presentation: {
      story: "A 21-year-old university engineering student is brought to the mental health triage by his distressed parents. Over the past six weeks, he has become increasingly withdrawn, ceased attending lectures, and covered the windows of his flat with aluminum foil. He claims the university intelligence service is transmitting microwave radiation into his brain to monitor his thoughts. He appears frightened, suspicious, and unkempt. During the interview, he frequently pauses, turns his head toward the corner of the room, and whispers inaudibly. He has no past psychiatric admissions and denies illicit drug use, though his friends report heavy cannabis smoking over the past year.",
      vitals: { hr: "84 bpm", bp: "122/76 mmHg", temp: "36.7°C", rr: "16/min", spo2: "99%" },
      labs: "Urine toxicology screen is positive for THC (cannabinoids) and negative for amphetamines/cocaine. Routine FBC, electrolytes, renal, liver, thyroid (TSH), and anti-NMDA receptor antibodies are normal.",
      imaging: "MRI brain is normal with no structural abnormalities, space-occupying lesions, or signs of encephalitis."
    },
    questions: [
      {
        id: "pfe-q1",
        number: 1,
        prompt: "Identify and classify the specific psychotic phenomena demonstrated in this clinical presentation.",
        hint: "Delusions of persecution/control, thought alienation, and auditory pseudo/hallucinations.",
        modelAnswer: "1. Persecutory delusion / delusion of control: Belief that university intelligence is broadcasting microwave radiation into his brain. 2. Thought alienation / insertion: Interference with his internal mental processes. 3. Third-person or running commentary auditory hallucinations: Evidence of pausing and whispering to unseen stimuli in the room corner. 4. Negative / prodromal symptoms: Social withdrawal, functional decline in engineering studies, self-neglect.",
        rubricItems: [
          { text: "Persecutory / paranoid delusions identified", marks: 1 },
          { text: "Delusions of control / thought alienation recognized", marks: 1 },
          { text: "Auditory hallucinations deduced from hallucinatory behavior", marks: 1 },
          { text: "Negative symptoms (social withdrawal, self-neglect, scholastic drop) noted", marks: 1 }
        ]
      },
      {
        id: "pfe-q2",
        number: 2,
        prompt: "Outline your essential organic and substance-induced differential diagnoses to exclude before confirming schizophrenia.",
        hint: "Cannabis-induced psychosis, autoimmune encephalitis, drug intoxication, Wilson's disease, temporal lobe epilepsy.",
        modelAnswer: "Differential diagnoses: 1. Substance/cannabis-induced psychotic disorder. 2. Autoimmune (anti-NMDA receptor) encephalitis. 3. First-episode Schizophrenia or Schizophreniform disorder. 4. Bipolar disorder with psychotic features. 5. Temporal lobe epilepsy or intracranial mass lesion. 6. Wilson's disease or metabolic encephalopathy.",
        rubricItems: [
          { text: "Cannabis-induced psychotic disorder prioritized", marks: 1 },
          { text: "Autoimmune encephalitis (anti-NMDA receptor) considered", marks: 1 },
          { text: "Schizophreniform disorder / First-episode Schizophrenia identified", marks: 1 },
          { text: "Neurological/metabolic organic etiologies listed", marks: 1 }
        ]
      },
      {
        id: "pfe-q3",
        number: 3,
        prompt: "How will you conduct the psychiatric risk assessment in this acute setting?",
        hint: "Risk to self, risk to others, risk of exploitation/neglect, insight and compliance.",
        modelAnswer: "Evaluate four cardinal risk domains: 1. Risk of harm to self / suicide: Command hallucinations or despair driven by persecutory beliefs. 2. Risk of harm to others: Retaliatory violence against suspected persecutors. 3. Risk of self-neglect and vulnerability: Dehydration, malnutrition, exploitation. 4. Level of insight and willingness to accept voluntary treatment vs necessity of involuntary admission under the Mental Health Act.",
        rubricItems: [
          { text: "Risk of suicide / self-harm evaluated", marks: 1 },
          { text: "Risk of aggression / violence toward perceived persecutors evaluated", marks: 1 },
          { text: "Risk of severe self-neglect and vulnerability assessed", marks: 1 },
          { text: "Capacity and Mental Health Act legal detention criteria examined", marks: 1 }
        ]
      },
      {
        id: "pfe-q4",
        number: 4,
        prompt: "Describe your initial biopsychosocial management strategy, including pharmacological choice and monitoring.",
        hint: "Second-generation antipsychotic, low-stimulus environment, family psychoeducation, metabolic monitoring.",
        modelAnswer: "Biological: Commence low-dose second-generation atypical antipsychotic (e.g. Risperidone 1–2 mg daily or Aripiprazole 5–10 mg daily) to minimize extrapyramidal symptoms; baseline ECG for QTc interval, baseline fasting lipids and glucose. Psychological: Calm, low-stimulus environment, non-confrontational engagement. Social: Family psychoeducation, cannabis cessation counseling, Early Intervention in Psychosis (EIP) service allocation.",
        rubricItems: [
          { text: "Second-generation atypical antipsychotic selected (Risperidone / Aripiprazole)", marks: 2 },
          { text: "Baseline metabolic (weight, glucose, lipids) and ECG QTc monitoring planned", marks: 1 },
          { text: "Psychosocial engagement and Early Intervention Psychosis referral", marks: 1 }
        ]
      }
    ]
  }
]

// ─── Comprehensive Bank of Physical Examination Stations ───────────────────────

export const EXAM_STATIONS: ExamStation[] = [
  {
    id: "exam-cvs",
    title: "Cardiovascular System Examination",
    module: "Internal Medicine",
    topic: "Chest Pain & MI",
    difficulty: "Medium",
    patientBrief: "A 54-year-old man presents for a cardiac assessment following an episode of chest tightness. Perform a systematic cardiovascular examination according to Macleod's clinical protocol.",
    hint: "Position the patient at 45° with adequate exposure, check peripheral stigmata of endocarditis and hyperlipidemia, and finish with dynamic auscultation maneuvers.",
    steps: [
      {
        category: "1. Introduction & General Inspection",
        items: [
          { id: "cv-1", text: "Introduce yourself, confirm patient identity, explain procedure, obtain verbal consent", marks: 1, critical: true },
          { id: "cv-2", text: "Position patient comfortably at 45 degrees with chest adequately exposed", marks: 1, critical: true },
          { id: "cv-3", text: "Inspect bedside: oxygen, GTN spray, ECG monitor, mobility aids", marks: 1, critical: false },
          { id: "cv-4", text: "General inspection: respiratory rate, dyspnoea at rest, pallor, cyanosis, diaphoresis", marks: 1, critical: false }
        ]
      },
      {
        category: "2. Hands, Pulses & Blood Pressure",
        items: [
          { id: "cv-5", text: "Inspect hands: finger clubbing, splinter hemorrhages, Janeway lesions, Osler nodes", marks: 1, critical: true },
          { id: "cv-6", text: "Palpate radial pulse: rate, rhythm, and assess for radio-radial delay", marks: 1, critical: true },
          { id: "cv-7", text: "Check for collapsing (water-hammer) pulse with patient consent", marks: 1, critical: false },
          { id: "cv-8", text: "Offer blood pressure measurement in both arms", marks: 1, critical: false }
        ]
      },
      {
        category: "3. Head, Neck & JVP",
        items: [
          { id: "cv-9", text: "Inspect eyes: corneal arcus, xanthelasma, conjunctival pallor", marks: 1, critical: false },
          { id: "cv-10", text: "Inspect mouth: central cyanosis under tongue, high-arched palate", marks: 1, critical: false },
          { id: "cv-11", text: "Inspect and measure Jugular Venous Pressure (JVP) at 45 degrees with tangential lighting", marks: 2, critical: true },
          { id: "cv-12", text: "Perform hepatojugular reflux test correctly", marks: 1, critical: false }
        ]
      },
      {
        category: "4. Precordial Palpation & Auscultation",
        items: [
          { id: "cv-13", text: "Locate apex beat: inspect and palpate for position (5th ICS MCL) and character", marks: 2, critical: true },
          { id: "cv-14", text: "Palpate for parasternal heaves (RVH) and thrills across all four valvular areas", marks: 1, critical: true },
          { id: "cv-15", text: "Auscultate four valve areas with diaphragm and bell, timing with carotid pulse", marks: 2, critical: true },
          { id: "cv-16", text: "Perform dynamic maneuvers: left lateral decubitus (MS) and sitting forward in expiration (AR)", marks: 2, critical: true }
        ]
      },
      {
        category: "5. Completion & Synthesis",
        items: [
          { id: "cv-17", text: "Auscultate lung bases for pulmonary edema crackles", marks: 1, critical: true },
          { id: "cv-18", text: "Check sacrum and ankles for bilateral pitting edema", marks: 1, critical: true },
          { id: "cv-19", text: "Thank patient, help dress, and formulate structured clinical synthesis", marks: 1, critical: false }
        ]
      }
    ]
  },
  {
    id: "exam-abdomen",
    title: "Abdominal & Gastrointestinal Examination",
    module: "Surgery",
    topic: "Acute Abdomen",
    difficulty: "Medium",
    patientBrief: "A 45-year-old woman presents with intermittent abdominal pain and dyspepsia. Perform a thorough, systematic abdominal examination.",
    hint: "Always ensure the patient lies flat with one pillow, ask if there is any pain BEFORE touching, and watch their face throughout palpation.",
    steps: [
      {
        category: "1. Introduction & General Inspection",
        items: [
          { id: "ab-1", text: "Introduce self, confirm identity, obtain consent, expose abdomen from xiphisternum to pubic symphysis", marks: 1, critical: true },
          { id: "ab-2", text: "Position patient strictly supine with arms relaxed by the sides and head on one pillow", marks: 1, critical: true },
          { id: "ab-3", text: "Inspect hands for leukonychia, palmar erythema, Dupuytren's contracture, asterixis/flapping tremor", marks: 1, critical: true },
          { id: "ab-4", text: "Examine eyes for jaundice, conjunctival pallor, Kayser-Fleischer rings; inspect mouth for glossitis and angular stomatitis", marks: 1, critical: false }
        ]
      },
      {
        category: "2. Inspection & Palpation of Abdomen",
        items: [
          { id: "ab-5", text: "Inspect abdomen from the foot of the bed: symmetry, scars, distension, striae, caput medusae, visible peristalsis", marks: 1, critical: false },
          { id: "ab-6", text: "Ask patient: 'Do you have pain anywhere?' and watch their face continuously while examining", marks: 2, critical: true },
          { id: "ab-7", text: "Perform gentle light palpation across all nine abdominal regions, starting furthest from pain", marks: 2, critical: true },
          { id: "ab-8", text: "Perform deep palpation assessing for localized tenderness, guarding, rigidity, and masses", marks: 2, critical: true }
        ]
      },
      {
        category: "3. Organ Palpation & Percussion",
        items: [
          { id: "ab-9", text: "Palpate for liver edge starting in right iliac fossa moving superiorly on inspiration", marks: 1, critical: true },
          { id: "ab-10", text: "Palpate for spleen starting in RIF moving toward left costal margin on deep inspiration", marks: 1, critical: true },
          { id: "ab-11", text: "Ballot both kidneys bimanually in the left and right flanks", marks: 1, critical: false },
          { id: "ab-12", text: "Percuss liver span and splenic dullness; perform shifting dullness for ascites", marks: 2, critical: true },
          { id: "ab-13", text: "Palpate for expansile abdominal aortic pulsation", marks: 1, critical: false }
        ]
      },
      {
        category: "4. Auscultation & Completion",
        items: [
          { id: "ab-14", text: "Auscultate bowel sounds for at least 30 seconds (normal, absent, high-pitched tinkling)", marks: 1, critical: true },
          { id: "ab-15", text: "Auscultate for renal and aortic bruits", marks: 1, critical: false },
          { id: "ab-16", text: "State intention to examine hernial orifices, external genitalia, and perform digital rectal examination (DRE)", marks: 2, critical: true }
        ]
      }
    ]
  },
  {
    id: "exam-respiratory",
    title: "Respiratory System Examination",
    module: "Internal Medicine",
    topic: "Dyspnea & Heart Failure",
    difficulty: "Medium",
    patientBrief: "A 62-year-old man presents with progressive shortness of breath and morning cough. Perform a systematic respiratory chest examination.",
    hint: "Remember the 4 classical steps: Inspection, Palpation (tracheal position & chest expansion), Percussion, and Auscultation.",
    steps: [
      {
        category: "1. Inspection & Peripheral Signs",
        items: [
          { id: "rp-1", text: "Introduce self, confirm identity, obtain consent, expose chest to waist at 45 degrees", marks: 1, critical: true },
          { id: "rp-2", text: "Assess hands for digital clubbing, nicotine staining, peripheral cyanosis, and fine resting tremor / CO2 flap", marks: 1, critical: true },
          { id: "rp-3", text: "Measure respiratory rate unobtrusively; note accessory muscle use, pursed-lip breathing, audible wheeze", marks: 1, critical: false },
          { id: "rp-4", text: "Inspect chest wall: barrel chest deformity, pectus excavatum/carinatum, surgical scars", marks: 1, critical: false }
        ]
      },
      {
        category: "2. Palpation of Thorax",
        items: [
          { id: "rp-5", text: "Gently assess tracheal deviation in suprasternal notch", marks: 2, critical: true },
          { id: "rp-6", text: "Assess cricosternal distance (<3 fingerbreadths indicating hyperinflation)", marks: 1, critical: false },
          { id: "rp-7", text: "Palpate apex beat position (displaced in tension pneumothorax or collapse)", marks: 1, critical: false },
          { id: "rp-8", text: "Assess bilateral chest expansion symmetrically anteriorly and posteriorly", marks: 2, critical: true },
          { id: "rp-9", text: "Evaluate tactile vocal fremitus symmetrically", marks: 1, critical: false }
        ]
      },
      {
        category: "3. Percussion & Auscultation",
        items: [
          { id: "rp-10", text: "Percuss anterior and posterior chest comparing side-to-side (resonant, dull, stony dull, hyper-resonant)", marks: 2, critical: true },
          { id: "rp-11", text: "Auscultate anterior and posterior lung zones with diaphragm during deep oral breathing", marks: 2, critical: true },
          { id: "rp-12", text: "Distinguish vesicular from bronchial breathing; identify added sounds (crackles, wheeze, pleural rub)", marks: 2, critical: true },
          { id: "rp-13", text: "Test vocal resonance / bronchophony over suspicious areas", marks: 1, critical: false }
        ]
      },
      {
        category: "4. Completion",
        items: [
          { id: "rp-14", text: "Palpate cervical, supraclavicular, and axillary lymph nodes", marks: 1, critical: true },
          { id: "rp-15", text: "Inspect ankles and sacrum for peripheral pitting edema; check sputum pot and peak flow meter", marks: 2, critical: false }
        ]
      }
    ]
  }
]

// ─── Comprehensive Bank of History Taking Stations ────────────────────────────

export const HISTORY_STATIONS: HistoryStation[] = [
  {
    id: "hist-chest-pain",
    title: "Acute Chest Pain History",
    module: "Internal Medicine",
    topic: "Chest Pain & MI",
    difficulty: "Medium",
    patientName: "Mr. Arthur Mpofu",
    ageGender: "58-year-old male",
    chiefComplaint: "Severe crushing retrosternal chest pain for 2 hours",
    scenario: "You are the attending doctor in medical admissions. Take a focused, structured cardiovascular history from Mr. Mpofu using the SOCRATES framework to distinguish cardiac ischemia from other acute chest emergencies.",
    hint: "Use SOCRATES systematically, explore cardiovascular risk factors (smoking, diabetes, family history), and rule out aortic dissection.",
    inquiries: [
      { id: "h1", category: "Site & Onset", question: "Where exactly is the pain, and how did it start?", patientResponse: "It started about 2 hours ago while I was watching TV. It is right in the center of my chest, behind the breastbone.", marks: 2 },
      { id: "h2", category: "Character & Radiation", question: "What does the pain feel like, and does it spread anywhere?", patientResponse: "It feels like a heavy band or vice tightening around my chest. It radiates up into my left neck, lower jaw, and down the inside of my left arm.", marks: 3 },
      { id: "h3", category: "Associated Symptoms", question: "Do you feel short of breath, sweaty, or sick to your stomach?", patientResponse: "Yes, I broke out in a cold drenching sweat and felt intensely nauseated. I am quite breathless.", marks: 2 },
      { id: "h4", category: "Timing & Aggravating", question: "Does taking a deep breath or changing your position change the pain at all?", patientResponse: "No, doctor. It is constant. Breathing in or leaning forward doesn't make it better or worse.", marks: 2 },
      { id: "h5", category: "Red Flag Dissection", question: "Was it maximal at the very first second like a tearing sensation into your shoulder blades?", patientResponse: "No, it built up over about 5 to 10 minutes. It does not feel sharp or tearing in my back.", marks: 2 },
      { id: "h6", category: "Past Medical History", question: "Have you ever had high blood pressure, diabetes, or heart attacks before?", patientResponse: "I have high blood pressure and type 2 diabetes for 8 years. My GP put me on metformin and amlodipine.", marks: 2 },
      { id: "h7", category: "Risk Factors", question: "Do you smoke, and is there any history of early heart disease in your family?", patientResponse: "I have smoked 20 cigarettes a day for 30 years. My father died suddenly of a heart attack at age 52.", marks: 3 },
      { id: "h8", category: "Ideas & Concerns", question: "What are you most worried this pain could be?", patientResponse: "I am terrified I am having a massive heart attack just like my father did.", marks: 2 },
      { id: "h9", category: "Medications & Allergies", question: "Are you taking any blood thinners, and do you have any drug allergies?", patientResponse: "No blood thinners, only my blood pressure tablets. I have no known drug allergies.", marks: 2 }
    ],
    modelSynthesis: "58-year-old hypertensive, diabetic smoker presenting with 2 hours of typical ischemic cardiac chest pain (retrosternal, crushing, radiating to jaw and left arm, accompanied by diaphoresis and nausea) in the presence of strong familial premature CAD. Findings are consistent with Acute Coronary Syndrome (STEMI/NSTEMI). Immediate 12-lead ECG and troponin required."
  },
  {
    id: "hist-pediatric-fever",
    title: "Pediatric Prolonged Fever & Rash History",
    module: "Pediatrics",
    topic: "Febrile Rash",
    difficulty: "Medium",
    patientName: "Master Tawanda Moyo (via mother Mrs. Moyo)",
    ageGender: "7-year-old boy",
    chiefComplaint: "5-day history of high spiking fever, red eyes, and spreading body rash",
    scenario: "You are the registrar in the pediatric emergency department. Take a structured clinical history from Mrs. Moyo to establish the diagnosis of MIS-C / Kawasaki Disease and assess for complications.",
    hint: "Explore Kawasaki diagnostic criteria: conjunctivitis, mucosal changes, strawberry tongue, cervical lymphadenopathy, extremity changes, and prior COVID-19.",
    inquiries: [
      { id: "hp1", category: "Fever Characteristics", question: "Exactly how many days has Tawanda had fever, and how high does it go?", patientResponse: "Today is the 5th day of unrelenting fever. It goes up to 39.5°C and paracetamol only brings it down for an hour before it shoots right back up.", marks: 2 },
      { id: "hp2", category: "Mucocutaneous Signs", question: "Have you noticed any changes in his eyes, mouth, lips, or tongue?", patientResponse: "Yes! His eyes are bloodshot red but with no pus or crusting. His lips are cracked and bleeding, and his tongue looks red and bumpy like a strawberry.", marks: 3 },
      { id: "hp3", category: "Rash & Extremities", question: "Where is the rash, and are his hands or feet swollen?", patientResponse: "The rash started on his tummy and back and spread to his limbs. His palms and the soles of his feet are puffy and red.", marks: 2 },
      { id: "hp4", category: "Neck & Nodes", question: "Have you felt any swollen lumps in his neck?", patientResponse: "Yes, there is a firm lump on the left side of his neck that is painful when I touch it.", marks: 2 },
      { id: "hp5", category: "COVID & Viral Exposure", question: "Has anyone in the family had COVID-19 or a flu-like illness in the past month?", patientResponse: "His father and I tested positive for COVID about four weeks ago. Tawanda only had a slight runny nose and loose stools back then.", marks: 3 },
      { id: "hp6", category: "Hydration & Output", question: "How much has he been drinking, and when was his last wet nappy or urination?", patientResponse: "He has barely drunk anything today because his throat hurts. He has only passed dark urine once in the last 12 hours.", marks: 2 },
      { id: "hp7", category: "Cardiovascular Symptoms", question: "Has he complained of chest pain, dizziness, or fast heartbeat?", patientResponse: "He says his chest is fluttering, and he is breathing much faster than normal and looking very floppy.", marks: 3 },
      { id: "hp8", category: "Immunizations & Past History", question: "Is he fully up to date on all childhood vaccinations?", patientResponse: "Yes, he received all his routine vaccinations according to the Zimbabwean EPI schedule. No prior admissions.", marks: 3 }
    ],
    modelSynthesis: "7-year-old boy presenting with 5 days of high fever fulfilling complete criteria for Kawasaki Disease / post-COVID Multisystem Inflammatory Syndrome in Children (MIS-C): bilateral non-exudative conjunctivitis, strawberry tongue, cracked lips, polymorphous rash, palm/sole edema, and cervical lymphadenopathy following confirmed parental COVID-19 4 weeks ago. Tachycardia and oliguria indicate evolving vasodilatory shock requiring emergency IVIG and inotropic stabilization."
  }
]
