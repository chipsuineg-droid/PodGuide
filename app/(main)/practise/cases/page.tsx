"use client"
import { useState, useEffect, useRef, useMemo } from "react"
import {
  Stethoscope, Clock, CheckCircle, ArrowLeft, RotateCcw,
  FileText, MessageSquare, ChevronRight, Check,
  AlertCircle, HelpCircle, User, Award, Sliders, Play,
  CheckSquare, Lightbulb, Star
} from "lucide-react"
import { toast } from "sonner"

// ─── Types ───────────────────────────────────────────────────────────────────

type ViewState = "hub" | "config" | "briefing" | "active" | "results"
type StationType = "vignette" | "exam" | "history"
type Level = "Undergraduate (Part 1-2)" | "Final Year (Part 3)" | "Intern / Junior Doctor" | "Registrar"
type StationTime = 8 | 10 | 15 | 0 // 0 = untimed

interface ExaminerQuestion {
  id: string
  number: number
  prompt: string
  hint: string
  modelAnswer: string
  rubricItems: { text: string; marks: number }[]
}

interface ClinicalCase {
  id: string
  title: string
  course: string
  topic: string
  level: Level
  presentation: {
    story: string
    vitals: { hr: string; bp: string; temp: string; rr: string; spo2: string }
    labs: string
    imaging: string
  }
  questions: ExaminerQuestion[]
}

interface ExamChecklistItem {
  id: string
  text: string
  marks: number
  critical: boolean
}

interface ExamStation {
  id: string
  title: string
  course: string
  topic: string
  level: Level
  patientBrief: string
  hint: string
  steps: {
    category: string
    items: ExamChecklistItem[]
  }[]
}

interface HistoryInquiry {
  id: string
  category: string
  question: string
  patientResponse: string
  marks: number
}

interface HistoryStation {
  id: string
  title: string
  course: string
  topic: string
  level: Level
  patientName: string
  ageGender: string
  chiefComplaint: string
  scenario: string
  hint: string
  inquiries: HistoryInquiry[]
  modelSynthesis: string
}

// ─── High-Yield Case Scenarios ────────────────────────────────────────────────

const CASES: ClinicalCase[] = [
  {
    id: "case-surg-01",
    title: "Acute Large Bowel Obstruction",
    course: "Surgery",
    topic: "Acute Abdomen",
    level: "Final Year (Part 3)",
    presentation: {
      story: "A 72-year-old man presents with 24 hours of worsening central abdominal pain, repeated bilious vomiting, and marked abdominal distension. He has not passed stool or flatus for 18 hours. He notes several months of intermittent left iliac fossa discomfort and progressively narrower stools. Medical history includes type 2 diabetes and atrial fibrillation on apixaban; no prior abdominal surgeries. On examination, he is moderately dehydrated. His abdomen is distended and tympanitic, with generalized tenderness but no guarding or rigidity. Bowel sounds are tinkling. Digital rectal examination demonstrates an empty rectum without palpable masses.",
      vitals: { hr: "108 bpm", bp: "104/66 mmHg", temp: "37.8°C", rr: "22/min", spo2: "96%" },
      labs: "WCC 15.2 × 10⁹/L, CRP 86 mg/L, Creatinine 146 µmol/L (baseline 84), Lactate 2.6 mmol/L, Hb 108 g/L.",
      imaging: "Abdominal radiograph shows marked colonic distension (>7 cm) with prominent haustra and absence of distal rectal gas, diagnostic of distal large bowel obstruction."
    },
    questions: [
      {
        id: "c1-q1",
        number: 1,
        prompt: "What is your immediate resuscitation and conservative stabilization protocol in the first hour?",
        hint: "Think 'drip and suck' plus strict monitoring of end-organ perfusion.",
        modelAnswer: "Initiate 'drip and suck': wide-bore IV access with balanced crystalloid fluid resuscitation; insert a nasogastric tube to decompress the stomach and prevent pulmonary aspiration; insert a Foley urinary catheter to monitor hourly output (target >0.5 mL/kg/h); cross-match blood; order urgent contrast-enhanced CT of the abdomen and pelvis.",
        rubricItems: [
          { text: "IV fluid resuscitation with crystalloids for acute dehydration", marks: 1 },
          { text: "Wide-bore nasogastric tube on free drainage with intermittent suction", marks: 1 },
          { text: "Foley catheterization for hourly urine output monitoring", marks: 1 },
          { text: "Urgent contrast-enhanced CT of abdomen and pelvis", marks: 1 }
        ]
      },
      {
        id: "c1-q2",
        number: 2,
        prompt: "What is the most probable underlying etiology, and what secondary differential must you exclude?",
        hint: "Consider the patient's age and months of altered bowel caliber without prior surgical adhesions.",
        modelAnswer: "Colorectal adenocarcinoma of the sigmoid or rectosigmoid junction is the most likely cause. The key differential to exclude is sigmoid volvulus (which produces an abrupt transition with a classic 'coffee-bean' closed loop on plain films) and diverticular stricture.",
        rubricItems: [
          { text: "Sigmoid or rectosigmoid colorectal carcinoma correctly identified", marks: 2 },
          { text: "Sigmoid volvulus considered as primary mechanical differential", marks: 1 },
          { text: "Diverticular stricture noted as secondary differential", marks: 1 }
        ]
      },
      {
        id: "c1-q3",
        number: 3,
        prompt: "The patient develops sharp localized pain in the right lower quadrant with guarding. Explain the pathophysiological mechanism.",
        hint: "Recall Laplace's law (Tension = Pressure × Radius) and the anatomical competence of the ileocaecal valve.",
        modelAnswer: "Closed-loop caecal distension with a competent ileocaecal valve. According to Laplace's law (Wall Tension = Intraluminal Pressure × Radius), the caecum has the largest diameter in the entire colon and generates the highest wall tension. When diameter exceeds 9–10 cm, mucosal ischemia, gangrene, and perforation occur at the caecum.",
        rubricItems: [
          { text: "Closed-loop obstruction with competent ileocaecal valve", marks: 1 },
          { text: "Application of Laplace's law correctly explained", marks: 2 },
          { text: "Recognition of impending caecal gangrene/perforation", marks: 1 }
        ]
      },
      {
        id: "c1-q4",
        number: 4,
        prompt: "Outline your surgical strategy at laparotomy and anticoagulant management for his apixaban.",
        hint: "Consider emergency Hartmann's vs primary anastomosis in an unprepared obstructed bowel, and 4-factor PCC for apixaban reversal.",
        modelAnswer: "Surgical procedure of choice is a Hartmann's procedure (resection of obstructing sigmoid segment, closure of rectal stump, and end colostomy) to avoid an unprotected anastomosis in an unprepared colon. For urgent reversal of apixaban, administer 4-factor Prothrombin Complex Concentrate (PCC) or Andexanet alfa, checking coagulation status with hematology support.",
        rubricItems: [
          { text: "Hartmann's procedure (sigmoid colectomy with end colostomy)", marks: 2 },
          { text: "Rationale for avoiding primary anastomosis in unprepared colon", marks: 1 },
          { text: "Reversal of apixaban with 4-factor PCC or specific antidote", marks: 1 }
        ]
      }
    ]
  },
  {
    id: "case-med-02",
    title: "Acute ST-Elevation Myocardial Infarction & Shock",
    course: "Internal Medicine",
    topic: "Cardiology",
    level: "Final Year (Part 3)",
    presentation: {
      story: "A 58-year-old woman is rushed to the emergency department with 90 minutes of crushing retrosternal chest pain radiating to her left jaw and shoulder, accompanied by profound diaphoresis and nausea. Medical history includes hypertension and 25 pack-years of smoking. On examination, she is cool and clammy. Heart sounds reveal a soft S1 with an S4 gallop. Auscultation of the chest reveals fine bibasilar crackles extending to the mid-zones. JVP is elevated 4 cm.",
      vitals: { hr: "114 bpm", bp: "86/52 mmHg", temp: "36.6°C", rr: "24/min", spo2: "92%" },
      labs: "Troponin I 5,200 ng/L, Potassium 4.0 mmol/L, Creatinine 112 µmol/L, Blood glucose 11.8 mmol/L.",
      imaging: "12-lead ECG demonstrates 4 mm convex ST elevation in leads V1–V5 with reciprocal ST depression in II, III, and aVF."
    },
    questions: [
      {
        id: "c2-q1",
        number: 1,
        prompt: "What is your immediate 10-minute emergency management prior to catheterization?",
        hint: "Remember the danger of nitrates in hypotensive patients.",
        modelAnswer: "Immediate chewable Aspirin 300 mg plus a potent P2Y12 inhibitor (Ticagrelor 180 mg or Prasugrel 60 mg); administer supplemental oxygen titrated to 94–98%; avoid nitrates due to hypotension (SBP <90 mmHg); administer IV opioid analgesia; activate catheterization laboratory for primary PCI.",
        rubricItems: [
          { text: "Aspirin 300 mg chewed loading dose", marks: 1 },
          { text: "P2Y12 inhibitor loading (Ticagrelor or Prasugrel)", marks: 1 },
          { text: "Avoidance of nitrates due to cardiogenic hypotension", marks: 1 },
          { text: "Immediate primary PCI catheterization activation", marks: 1 }
        ]
      },
      {
        id: "c2-q2",
        number: 2,
        prompt: "Identify the culprit coronary vessel and the anatomical myocardial wall involved.",
        hint: "V1 to V5 correlates to the anterior wall and septum.",
        modelAnswer: "Left Anterior Descending (LAD) coronary artery, causing acute infarction of the anterior left ventricular wall and interventricular septum.",
        rubricItems: [
          { text: "Left Anterior Descending (LAD) artery correctly named", marks: 2 },
          { text: "Anterior wall and interventricular septum identified", marks: 2 }
        ]
      },
      {
        id: "c2-q3",
        number: 3,
        prompt: "Classify her clinical hemodynamic state (Killip class) and describe your vasopressor choice.",
        hint: "Features include pulmonary edema plus systemic arterial hypotension.",
        modelAnswer: "Killip Class IV (cardiogenic shock with hypotension SBP <90 mmHg and pulmonary congestion). First-line vasopressor is Norepinephrine to restore coronary perfusion pressure without excessive tachycardia, accompanied by Dobutamine for inotropic support.",
        rubricItems: [
          { text: "Killip Class IV / Cardiogenic Shock accurately staged", marks: 2 },
          { text: "Norepinephrine as first-line agent to maintain MAP", marks: 1 },
          { text: "Dobutamine inotropic support indicated", marks: 1 }
        ]
      },
      {
        id: "c2-q4",
        number: 4,
        prompt: "On day 4, she develops sudden breathlessness and a harsh pansystolic murmur at the left sternal border. Name the mechanical complication.",
        hint: "Differentiate ventricular septal rupture from acute mitral regurgitation.",
        modelAnswer: "Post-infarction Ventricular Septal Rupture (VSR). The harsh pansystolic murmur with thrill at the left parasternal edge is characteristic. Confirm immediately with bedside transthoracic echocardiography.",
        rubricItems: [
          { text: "Ventricular Septal Rupture (VSR) identified", marks: 2 },
          { text: "Bedside emergency echocardiography ordered", marks: 1 },
          { text: "Urgent cardiothoracic surgical consultation initiated", marks: 1 }
        ]
      }
    ]
  },
  {
    id: "case-obgyn-03",
    title: "Severe Pre-Eclampsia & Impending Eclampsia",
    course: "Obstetrics & Gynaecology",
    topic: "Obstetric Emergencies",
    level: "Undergraduate (Part 1-2)",
    presentation: {
      story: "A 26-year-old primigravida at 36 weeks gestation presents to the maternity assessment unit with a severe frontal headache, blurring of vision with flashing lights (scotomata), and epigastric discomfort. Examination reveals marked facial and bilateral ankle edema. Deep tendon reflexes are brisk with 3 beats of ankle clonus. Symphysis-fundal height is 32 cm. Fetal heart rate is 142 bpm with reassuring variability.",
      vitals: { hr: "92 bpm", bp: "172/114 mmHg", temp: "36.9°C", rr: "18/min", spo2: "98%" },
      labs: "Urinalysis: 4+ protein. Platelets: 72 × 10⁹/L. Serum ALT: 184 U/L, AST: 196 U/L, LDH: 760 U/L.",
      imaging: "Bedside ultrasound confirms a singleton cephalic fetus with oligohydramnios (AFI 4.2 cm) and asymmetric fetal growth restriction."
    },
    questions: [
      {
        id: "c3-q1",
        number: 1,
        prompt: "State your definitive multi-component diagnosis based on the clinical and lab parameters.",
        hint: "Recognize the triad of elevated liver enzymes, low platelets, and maternal hemolysis alongside severe pre-eclampsia.",
        modelAnswer: "Severe Pre-eclampsia with impending eclampsia (hyperreflexia, clonus, visual symptoms), complicated by HELLP Syndrome (Haemolysis, Elevated Liver enzymes, Low Platelets) and intrauterine fetal growth restriction at 36 weeks.",
        rubricItems: [
          { text: "Severe pre-eclampsia / impending eclampsia diagnosed", marks: 2 },
          { text: "HELLP syndrome recognized from laboratory triad", marks: 1 },
          { text: "Intrauterine fetal growth restriction noted", marks: 1 }
        ]
      },
      {
        id: "c3-q2",
        number: 2,
        prompt: "Detail your emergency pharmacological regimen to prevent eclamptic seizures.",
        hint: "Magnesium sulphate is the gold standard.",
        modelAnswer: "Administer Magnesium Sulphate (MgSO4): 4 g IV loading dose in 100 mL saline over 15–20 minutes, followed by 1 g/hour continuous IV maintenance infusion. Monitor respiratory rate (>12/min), patellar reflexes, and hourly urine output (>30 mL/hr). Have Calcium Gluconate (10% 10 mL) readily available as antidote.",
        rubricItems: [
          { text: "Magnesium sulphate 4 g IV loading dose over 15–20 min", marks: 1 },
          { text: "Maintenance infusion of 1 g/hr IV", marks: 1 },
          { text: "Monitoring: patellar reflexes, respiratory rate, urine output", marks: 1 },
          { text: "Calcium gluconate kept at bedside as antidote", marks: 1 }
        ]
      },
      {
        id: "c3-q3",
        number: 3,
        prompt: "How will you safely control her severe hypertension (BP 172/114 mmHg)?",
        hint: "Target systolic BP 135–150 and diastolic 85–95 mmHg to preserve placental perfusion.",
        modelAnswer: "Administer IV Labetalol (20 mg IV bolus over 2 minutes, repeating or escalating to 40 mg and 80 mg every 10 minutes up to 220 mg) or oral Nifedipine (10–20 mg immediate-release). Target blood pressure 135–150 / 85–95 mmHg.",
        rubricItems: [
          { text: "IV Labetalol or oral immediate-release Nifedipine selected", marks: 2 },
          { text: "Safe target blood pressure range specified (135–150 / 85–95 mmHg)", marks: 1 },
          { text: "Avoidance of precipitous drop to protect placental flow", marks: 1 }
        ]
      },
      {
        id: "c3-q4",
        number: 4,
        prompt: "What is the definitive cure and what is your obstetric delivery plan?",
        hint: "The only definitive cure is delivery of the fetus and placenta once maternal status is stabilized.",
        modelAnswer: "Delivery of the fetus and placenta is the only definitive cure. At 36 weeks with HELLP syndrome, expedite delivery once maternal hemodynamic and coagulation status is stabilized. Cesarean section is indicated if cervix is unfavorable or fetal distress occurs; verify platelet count before regional neuraxial anesthesia.",
        rubricItems: [
          { text: "Delivery of placenta and fetus as definitive cure", marks: 2 },
          { text: "Expedited delivery once mother is stabilized", marks: 1 },
          { text: "Platelet evaluation prior to spinal/epidural anesthesia", marks: 1 }
        ]
      }
    ]
  }
]

// ─── Physical Examination Stations ────────────────────────────────────────────

const EXAM_STATIONS: ExamStation[] = [
  {
    id: "exam-cvs",
    title: "Cardiovascular System Examination",
    course: "Internal Medicine",
    topic: "Cardiology",
    level: "Undergraduate (Part 1-2)",
    patientBrief: "A 54-year-old man presents for a routine cardiac assessment. Please perform a systematic cardiovascular examination according to Macleod's clinical protocol.",
    hint: "Remember to position the patient at 45° with adequate exposure, and don't forget dynamic maneuvers.",
    steps: [
      {
        category: "1. Introduction & General Inspection",
        items: [
          { id: "cv-1", text: "Introduce yourself, confirm patient identity, explain procedure, obtain verbal consent", marks: 1, critical: true },
          { id: "cv-2", text: "Position patient comfortably at 45 degrees with chest adequately exposed", marks: 1, critical: true },
          { id: "cv-3", text: "Inspect bedside: oxygen masks, GTN spray, ECG monitor, mobility aids", marks: 1, critical: false },
          { id: "cv-4", text: "General inspection: respiratory rate, dyspnoea at rest, pallor, cyanosis, visible distress", marks: 1, critical: false }
        ]
      },
      {
        category: "2. Hands, Pulse & Face",
        items: [
          { id: "cv-5", text: "Inspect hands: splinter hemorrhages, clubbing, Osler nodes, Janeway lesions, tar staining", marks: 1, critical: true },
          { id: "cv-6", text: "Palpate radial pulse: calculate rate and determine rhythm (regular vs irregular)", marks: 1, critical: true },
          { id: "cv-7", text: "Test for collapsing pulse (water-hammer) while checking patient has no shoulder pain", marks: 1, critical: false },
          { id: "cv-8", text: "Inspect eyes (corneal arcus, xanthelasma) and mouth (central cyanosis, high-arched palate)", marks: 1, critical: false }
        ]
      },
      {
        category: "3. Neck & JVP",
        items: [
          { id: "cv-9", text: "Inspect Jugular Venous Pulse (JVP): measure vertical height above sternal angle in cm (<3 cm normal)", marks: 1, critical: true },
          { id: "cv-10", text: "Palpate carotid artery gently (one side at a time) for volume and character", marks: 1, critical: true }
        ]
      },
      {
        category: "4. Precordial Palpation & Auscultation",
        items: [
          { id: "cv-11", text: "Locate apex beat: 5th left intercostal space, midclavicular line; assess character", marks: 1, critical: true },
          { id: "cv-12", text: "Palpate for parasternal heave (RVH) and thrills across all four cardiac valve areas", marks: 1, critical: true },
          { id: "cv-13", text: "Auscultate mitral area (apex) with bell (low-pitch MS) and diaphragm (high-pitch MR)", marks: 1, critical: true },
          { id: "cv-14", text: "Auscultate tricuspid, pulmonary, and aortic areas systematically", marks: 1, critical: true },
          { id: "cv-15", text: "Auscultate carotid arteries for radiation of aortic stenosis murmur during breath-hold", marks: 1, critical: true },
          { id: "cv-16", text: "Sit patient forward in full expiration: auscultate left sternal edge for aortic regurgitation", marks: 1, critical: true }
        ]
      },
      {
        category: "5. Completion & Synthesis",
        items: [
          { id: "cv-17", text: "Auscultate posterior lung bases for crackles of pulmonary edema", marks: 1, critical: true },
          { id: "cv-18", text: "Inspect ankles and palpate sacrum for dependent pitting edema", marks: 1, critical: true },
          { id: "cv-19", text: "Thank patient, assist them in dressing, and state you would check BP and 12-lead ECG", marks: 1, critical: false },
          { id: "cv-20", text: "Deliver structured summary of positive and negative findings to the examiner", marks: 1, critical: true }
        ]
      }
    ]
  },
  {
    id: "exam-abdo",
    title: "Abdominal System Examination",
    course: "Surgery",
    topic: "Gastroenterology",
    level: "Undergraduate (Part 1-2)",
    patientBrief: "A 48-year-old woman is admitted for assessment of right upper quadrant pain. Conduct an abdominal examination according to standard clinical protocol.",
    hint: "Always ask if there is any pain before you touch, and watch the patient's face throughout.",
    steps: [
      {
        category: "1. Inspection & Stigmata",
        items: [
          { id: "ab-1", text: "Introduce yourself, explain procedure, obtain consent, position patient flat with one pillow", marks: 1, critical: true },
          { id: "ab-2", text: "Expose abdomen from xiphisternum to symphysis pubis while respecting modesty", marks: 1, critical: false },
          { id: "ab-3", text: "Inspect hands: palmar erythema, leukonychia, Dupuytren's contracture, asterixis/flapping tremor", marks: 1, critical: true },
          { id: "ab-4", text: "Inspect eyes for scleral icterus/jaundice and mouth for glossitis or stomatitis", marks: 1, critical: false },
          { id: "ab-5", text: "Inspect abdomen from foot of bed: distension, surgical scars, striae, caput medusae, visible masses", marks: 1, critical: true }
        ]
      },
      {
        category: "2. Palpation & Organomegaly",
        items: [
          { id: "ab-6", text: "Ask patient about pain locations; look at patient's face throughout palpation", marks: 1, critical: true },
          { id: "ab-7", text: "Perform light palpation across all 9 abdominal quadrants to assess tenderness and guarding", marks: 1, critical: true },
          { id: "ab-8", text: "Perform deep palpation across all 9 quadrants assessing for deep masses and organ tenderness", marks: 1, critical: true },
          { id: "ab-9", text: "Palpate liver edge from right iliac fossa upwards in synchronization with inspiration", marks: 1, critical: true },
          { id: "ab-10", text: "Palpate for spleen starting from right iliac fossa toward left costal margin", marks: 1, critical: true },
          { id: "ab-11", text: "Bimanually ballot right and left kidneys in both flanks", marks: 1, critical: false },
          { id: "ab-12", text: "Palpate abdominal aorta for expansile pulsatile mass", marks: 1, critical: true }
        ]
      },
      {
        category: "3. Percussion, Auscultation & Completion",
        items: [
          { id: "ab-13", text: "Percuss liver span from resonant chest downwards to dullness and up from right iliac fossa", marks: 1, critical: true },
          { id: "ab-14", text: "Test for shifting dullness if abdominal distension is present", marks: 1, critical: true },
          { id: "ab-15", text: "Auscultate for bowel sounds in right lower quadrant for at least 30-60 seconds", marks: 1, critical: true },
          { id: "ab-16", text: "Auscultate for aortic and renal artery bruits", marks: 1, critical: false },
          { id: "ab-17", text: "Examine hernial orifices (inguinal and femoral) and inspect external genitalia", marks: 1, critical: true },
          { id: "ab-18", text: "State requirement to perform a Digital Rectal Examination (DRE)", marks: 1, critical: true },
          { id: "ab-19", text: "Thank patient, assist with repositioning, and offer summary of findings", marks: 1, critical: false },
          { id: "ab-20", text: "Suggest appropriate baseline labs (LFTs, amylase, abdominal ultrasound)", marks: 1, critical: true }
        ]
      }
    ]
  }
]

// ─── History Taking Stations ──────────────────────────────────────────────────

const HISTORY_STATIONS: HistoryStation[] = [
  {
    id: "hist-01",
    title: "Acute Chest Pain Consultation",
    course: "Internal Medicine",
    topic: "Cardiology",
    level: "Undergraduate (Part 1-2)",
    patientName: "Mr. Edward Moyo",
    ageGender: "52-year-old Male",
    chiefComplaint: "Central crushing chest pain for 2 hours",
    scenario: "You are the doctor on call in the emergency assessment unit. A 52-year-old accountant has been admitted with acute chest pain. Conduct a focused history.",
    hint: "Use the SOCRATES framework systematically and screen for cardiovascular risk factors and red flags.",
    inquiries: [
      {
        id: "h1-1",
        category: "Site & Onset",
        question: "Can you point to where the pain is, and tell me what you were doing when it started?",
        patientResponse: "It is right across the middle of my chest, doctor, like a heavy tight band. It started about 2 hours ago while I was climbing the stairs at my office.",
        marks: 2
      },
      {
        id: "h1-2",
        category: "Character & Radiation",
        question: "What does the pain feel like, and does it travel anywhere else in your body?",
        patientResponse: "It feels like a heavy weight or crushing pressure. It aches up into my left jaw and radiates down the inside of my left arm.",
        marks: 2
      },
      {
        id: "h1-3",
        category: "Associated Symptoms",
        question: "Have you felt sweaty, nauseous, dizzy, or breathless?",
        patientResponse: "Yes, I broke out in a cold drenching sweat immediately and felt very sick to my stomach. I have to catch my breath because of the pressure.",
        marks: 2
      },
      {
        id: "h1-4",
        category: "Exacerbating & Relieving Factors",
        question: "Does taking a deep breath, coughing, or changing your posture change the pain?",
        patientResponse: "No, doctor. Sitting forward, lying flat, taking deep breaths—nothing changes it. It has stayed constant and intense.",
        marks: 2
      },
      {
        id: "h1-5",
        category: "Past Medical & Drug History",
        question: "Do you have high blood pressure, diabetes, cholesterol, or take any medications?",
        patientResponse: "I was told my blood pressure was borderline two years ago, but I don't take any regular prescriptions. No known allergies.",
        marks: 2
      },
      {
        id: "h1-6",
        category: "Cardiovascular Risk Factors",
        question: "Do you smoke, drink alcohol, and is there any family history of heart disease?",
        patientResponse: "I smoke about 15 cigarettes a day and have for 25 years. My father had a fatal heart attack when he was 54 years old.",
        marks: 2
      }
    ],
    modelSynthesis: "52-year-old male with acute cardiac chest pain radiating to left arm and jaw, diaphoresis, and strong risk profile (25 pack-years smoking, positive premature family history). Primary provisional diagnosis: Acute Coronary Syndrome (STEMI / NSTEMI). Immediate priority: 12-lead ECG, troponin, dual antiplatelets, analgesia, and urgent revascularization assessment."
  }
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function ClinicalOSCEPage() {
  const [view, setView] = useState<ViewState>("hub")
  const [stationType, setStationType] = useState<StationType>("vignette")

  // Configuration options
  const [selectedCourse, setSelectedCourse] = useState("Surgery")
  const [selectedCaseId, setSelectedCaseId] = useState("")
  const [selectedExamId, setSelectedExamId] = useState("exam-cvs")
  const [selectedHistId, setSelectedHistId] = useState("hist-01")
  const [selectedLevel, setSelectedLevel] = useState<Level>("Final Year (Part 3)")
  const [selectedTime, setSelectedTime] = useState<StationTime>(10)
  const [hintsEnabled, setHintsEnabled] = useState(true)
  const [markMeEnabled, setMarkMeEnabled] = useState(true)

  // Active Station Session State
  const [activeCase, setActiveCase] = useState<ClinicalCase | null>(null)
  const [activeExam, setActiveExam] = useState<ExamStation | null>(null)
  const [activeHistory, setActiveHistory] = useState<HistoryStation | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({})
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({})
  const [showHint, setShowHint] = useState<Record<string, boolean>>({})
  const [awardedMarks, setAwardedMarks] = useState<Record<string, boolean>>({})
  const [checkedExamItems, setCheckedExamItems] = useState<Record<string, boolean>>({})
  const [revealedHistoryInquiries, setRevealedHistoryInquiries] = useState<Record<string, boolean>>({})

  // Station Timer
  const [secondsRemaining, setSecondsRemaining] = useState(600)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Filtered cases for chosen course
  const availableCases = useMemo(() => {
    return CASES.filter(c => c.course === selectedCourse)
  }, [selectedCourse])

  useEffect(() => {
    if (availableCases.length > 0 && (!selectedCaseId || !availableCases.some(c => c.id === selectedCaseId))) {
      setSelectedCaseId(availableCases[0].id)
    }
  }, [availableCases, selectedCaseId])

  // Timer tick
  useEffect(() => {
    if (view !== "active" || selectedTime === 0) return
    timerRef.current = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          toast.warning("Time is up for this OSCE station!")
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [view, selectedTime])

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  // Open configuration for chosen station type
  const openStationConfig = (type: StationType) => {
    setStationType(type)
    if (type === "vignette") {
      setSelectedCourse("Surgery")
    }
    setView("config")
  }

  // Start Station
  const handleStartStation = () => {
    setCurrentQuestionIndex(0)
    setUserAnswers({})
    setRevealedQuestions({})
    setShowHint({})
    setAwardedMarks({})
    setCheckedExamItems({})
    setRevealedHistoryInquiries({})
    setSecondsRemaining(selectedTime > 0 ? selectedTime * 60 : 0)

    if (stationType === "vignette") {
      const c = CASES.find(item => item.id === selectedCaseId) || availableCases[0] || CASES[0]
      setActiveCase(c)
      setActiveExam(null)
      setActiveHistory(null)
      setView("briefing")
    } else if (stationType === "exam") {
      const ex = EXAM_STATIONS.find(item => item.id === selectedExamId) || EXAM_STATIONS[0]
      setActiveExam(ex)
      setActiveCase(null)
      setActiveHistory(null)
      setView("active")
    } else {
      const h = HISTORY_STATIONS.find(item => item.id === selectedHistId) || HISTORY_STATIONS[0]
      setActiveHistory(h)
      setActiveCase(null)
      setActiveExam(null)
      setView("active")
    }
  }

  // Calculate current score
  const calculateScore = () => {
    if (activeCase) {
      const totalPossible = activeCase.questions.reduce((sum, q) =>
        sum + q.rubricItems.reduce((sub, item) => sub + item.marks, 0), 0
      )
      const earned = Object.keys(awardedMarks).filter(k => awardedMarks[k]).length
      return { earned, total: totalPossible }
    }
    if (activeExam) {
      const totalPossible = activeExam.steps.reduce((sum, s) =>
        sum + s.items.reduce((sub, item) => sub + item.marks, 0), 0
      )
      const earned = Object.keys(checkedExamItems).filter(k => checkedExamItems[k]).length
      return { earned, total: totalPossible }
    }
    if (activeHistory) {
      const totalPossible = activeHistory.inquiries.reduce((sum, inq) => sum + inq.marks, 0)
      const earned = activeHistory.inquiries
        .filter(inq => revealedHistoryInquiries[inq.id])
        .reduce((sum, inq) => sum + inq.marks, 0)
      return { earned, total: totalPossible }
    }
    return { earned: 0, total: 20 }
  }

  // ═══════════════════════════════════════════════════════════
  // VIEW 1: HUB VIEW (ONLY 3 CARDS, NO LIST BELOW)
  // ═══════════════════════════════════════════════════════════
  if (view === "hub") {
    return (
      <div className="max-w-5xl mx-auto pb-24 space-y-8">
        {/* Header */}
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-2 shadow-xl">
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">Med OSCE</h1>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl leading-relaxed">
            Objective Structured Clinical Examination simulation stations.
            Select a station mode below to customize your rotation, clinical level, timing, and examiner marking rubric.
          </p>
        </div>

        {/* ONLY THE 3 PALETTE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Clinical Vignette */}
          <button
            onClick={() => openStationConfig("vignette")}
            className="text-left bg-[#0e0e0e] border border-[#1f1f1f] hover:border-[#333] hover:bg-[#121212] rounded-2xl p-6 sm:p-7 transition-all group flex flex-col justify-between space-y-6 shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-[#161616] group-hover:bg-brand/10 border border-[#242424] group-hover:border-brand/30 flex items-center justify-center text-gray-300 group-hover:text-brand transition-all">
              <FileText size={22} />
            </div>

            <div className="space-y-2">
              <h2 className="font-bold text-white text-lg group-hover:text-brand transition-colors">
                Clinical Vignette
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed">
                In-depth clinical cases with vital signs, laboratory data, imaging, and sequential consultant viva questions.
              </p>
            </div>

            <div className="pt-3 border-t border-[#181818] flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-white">
              <span>Configure Station</span>
              <ChevronRight size={15} className="text-gray-600 group-hover:text-brand transition-transform group-hover:translate-x-0.5" />
            </div>
          </button>

          {/* Card 2: Physical Examination */}
          <button
            onClick={() => openStationConfig("exam")}
            className="text-left bg-[#0e0e0e] border border-[#1f1f1f] hover:border-[#333] hover:bg-[#121212] rounded-2xl p-6 sm:p-7 transition-all group flex flex-col justify-between space-y-6 shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-[#161616] group-hover:bg-brand/10 border border-[#242424] group-hover:border-brand/30 flex items-center justify-center text-gray-300 group-hover:text-brand transition-all">
              <Stethoscope size={22} />
            </div>

            <div className="space-y-2">
              <h2 className="font-bold text-white text-lg group-hover:text-brand transition-colors">
                Physical Examination
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed">
                Systematic physical examination stations based on Macleod&apos;s protocols with interactive checklists.
              </p>
            </div>

            <div className="pt-3 border-t border-[#181818] flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-white">
              <span>Configure Station</span>
              <ChevronRight size={15} className="text-gray-600 group-hover:text-brand transition-transform group-hover:translate-x-0.5" />
            </div>
          </button>

          {/* Card 3: History Taking */}
          <button
            onClick={() => openStationConfig("history")}
            className="text-left bg-[#0e0e0e] border border-[#1f1f1f] hover:border-[#333] hover:bg-[#121212] rounded-2xl p-6 sm:p-7 transition-all group flex flex-col justify-between space-y-6 shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-[#161616] group-hover:bg-brand/10 border border-[#242424] group-hover:border-brand/30 flex items-center justify-center text-gray-300 group-hover:text-brand transition-all">
              <MessageSquare size={22} />
            </div>

            <div className="space-y-2">
              <h2 className="font-bold text-white text-lg group-hover:text-brand transition-colors">
                History Taking
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed">
                Structured patient consultation simulation. Interview virtual patients, explore symptoms, and formulate plans.
              </p>
            </div>

            <div className="pt-3 border-t border-[#181818] flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-white">
              <span>Configure Station</span>
              <ChevronRight size={15} className="text-gray-600 group-hover:text-brand transition-transform group-hover:translate-x-0.5" />
            </div>
          </button>
        </div>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════
  // VIEW 2: STATION CONFIGURATION (Course, Topic, Level, Time, Hints, Mark Me)
  // ═══════════════════════════════════════════════════════════
  if (view === "config") {
    const stationTitle =
      stationType === "vignette" ? "Clinical Vignette Station" :
      stationType === "exam" ? "Physical Examination Station" :
      "History Taking Station"

    return (
      <div className="max-w-3xl mx-auto pb-24 space-y-6">
        {/* Back and Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setView("hub")}
            className="w-9 h-9 rounded-xl bg-[#141414] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors flex-shrink-0"
          >
            <ArrowLeft size={16} />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-display font-bold text-white">{stationTitle}</h1>
            <p className="text-xs text-gray-400 mt-0.5">Customize your rotation parameters and assessment mode</p>
          </div>
        </div>

        {/* Configuration Box */}
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl divide-y divide-[#181818] shadow-2xl">

          {/* 1. Course Selection */}
          {stationType === "vignette" && (
            <div className="p-5 sm:p-6 space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
                Course / Specialty Rotation
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {["Surgery", "Internal Medicine", "Obstetrics & Gynaecology"].map(crs => (
                  <button
                    key={crs}
                    onClick={() => setSelectedCourse(crs)}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                      selectedCourse === crs
                        ? "bg-brand/10 border-brand text-white"
                        : "bg-[#141414] border-[#222] text-gray-400 hover:border-[#333] hover:text-gray-200"
                    }`}
                  >
                    {crs}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 2. Topic / Specific Scenario Selection */}
          <div className="p-5 sm:p-6 space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
              Clinical Scenario / Topic
            </label>

            {stationType === "vignette" && (
              <div className="space-y-2">
                {availableCases.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCaseId(c.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                      selectedCaseId === c.id
                        ? "bg-brand/10 border-brand text-white"
                        : "bg-[#141414] border-[#222] text-gray-400 hover:border-[#333]"
                    }`}
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-white">{c.title}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">{c.topic} &bull; {c.questions.length} questions</p>
                    </div>
                    {selectedCaseId === c.id && <Check size={16} className="text-brand flex-shrink-0" />}
                  </button>
                ))}
              </div>
            )}

            {stationType === "exam" && (
              <div className="space-y-2">
                {EXAM_STATIONS.map(ex => (
                  <button
                    key={ex.id}
                    onClick={() => setSelectedExamId(ex.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                      selectedExamId === ex.id
                        ? "bg-brand/10 border-brand text-white"
                        : "bg-[#141414] border-[#222] text-gray-400 hover:border-[#333]"
                    }`}
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-white">{ex.title}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">{ex.topic} &bull; 20 checklist criteria</p>
                    </div>
                    {selectedExamId === ex.id && <Check size={16} className="text-brand flex-shrink-0" />}
                  </button>
                ))}
              </div>
            )}

            {stationType === "history" && (
              <div className="space-y-2">
                {HISTORY_STATIONS.map(h => (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHistId(h.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                      selectedHistId === h.id
                        ? "bg-brand/10 border-brand text-white"
                        : "bg-[#141414] border-[#222] text-gray-400 hover:border-[#333]"
                    }`}
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-white">{h.title}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">{h.patientName} &bull; {h.chiefComplaint}</p>
                    </div>
                    {selectedHistId === h.id && <Check size={16} className="text-brand flex-shrink-0" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 3. Level Selection */}
          <div className="p-5 sm:p-6 space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
              Academic / Training Level
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                "Undergraduate (Part 1-2)",
                "Final Year (Part 3)",
                "Intern / Junior Doctor",
                "Registrar"
              ].map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl as Level)}
                  className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                    selectedLevel === lvl
                      ? "bg-brand/10 border-brand text-white"
                      : "bg-[#141414] border-[#222] text-gray-400 hover:border-[#333]"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Time Selection */}
          <div className="p-5 sm:p-6 space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
              Station Time Allocation
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { label: "8 Minutes", value: 8, desc: "Standard OSCE station" },
                { label: "10 Minutes", value: 10, desc: "Extended clinical case" },
                { label: "15 Minutes", value: 15, desc: "Comprehensive viva" },
                { label: "Untimed", value: 0, desc: "Self-paced revision" },
              ].map(t => (
                <button
                  key={t.value}
                  onClick={() => setSelectedTime(t.value as StationTime)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedTime === t.value
                      ? "bg-brand/10 border-brand text-white"
                      : "bg-[#141414] border-[#222] text-gray-400 hover:border-[#333]"
                  }`}
                >
                  <p className="text-xs font-bold text-white">{t.label}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{t.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 5. Features: Hint & Mark Me Rubric Toggles */}
          <div className="p-5 sm:p-6 space-y-4">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
              Interactive Assessment Controls
            </label>

            <div className="flex items-center justify-between p-3.5 bg-[#121212] border border-[#202020] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-center text-yellow-500">
                  <Lightbulb size={16} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">Enable Clinical Hints</p>
                  <p className="text-[11px] text-gray-500">Provide focused diagnostic clues when you need guidance</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setHintsEnabled(h => !h)}
                className={`w-11 h-6 rounded-full border transition-all relative flex-shrink-0 ${
                  hintsEnabled ? "bg-brand border-brand" : "bg-[#1a1a1a] border-[#2a2a2a]"
                }`}
              >
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all shadow-sm ${
                  hintsEnabled ? "left-5" : "left-0.5"
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-[#121212] border border-[#202020] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-center text-brand">
                  <CheckSquare size={16} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">&quot;Mark Me&quot; Scoring Rubric</p>
                  <p className="text-[11px] text-gray-500">Interactive examiner marking sheet with points awarded out of 20</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMarkMeEnabled(m => !m)}
                className={`w-11 h-6 rounded-full border transition-all relative flex-shrink-0 ${
                  markMeEnabled ? "bg-brand border-brand" : "bg-[#1a1a1a] border-[#2a2a2a]"
                }`}
              >
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all shadow-sm ${
                  markMeEnabled ? "left-5" : "left-0.5"
                }`} />
              </button>
            </div>
          </div>
        </div>

        {/* Start Station Button */}
        <button
          onClick={handleStartStation}
          className="w-full bg-brand hover:bg-red-700 text-white font-bold py-4 rounded-xl text-sm transition-all shadow-xl shadow-brand/25 flex items-center justify-center gap-2"
        >
          <Play size={15} fill="currentColor" /> Begin OSCE Station
        </button>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════
  // VIEW 2.5: BRIEFING VIEW (Consultation Room / Case Presentation)
  // ═══════════════════════════════════════════════════════════
  if (view === "briefing" && activeCase) {
    return (
      <div className="max-w-4xl mx-auto pb-24 space-y-6">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setView("config")}
              className="w-9 h-9 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-amber-500" />
                <h1 className="text-xl font-display font-bold text-white">Clinical Vignette</h1>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">{activeCase.course} &bull; {selectedLevel}</p>
            </div>
          </div>

          <button
            onClick={() => {
              const currentIdx = CASES.findIndex(c => c.id === activeCase.id)
              const nextIdx = (currentIdx + 1) % CASES.length
              setActiveCase(CASES[nextIdx])
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141414] hover:bg-[#1a1a1a] border border-[#222] text-xs font-semibold text-gray-300 hover:text-white transition-colors"
          >
            <RotateCcw size={13} /> New Case
          </button>
        </div>

        {/* Presentation Container */}
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
          {/* Status Pills */}
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
            <span className="flex items-center gap-2 text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2.5 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> LIVE SESSION
            </span>
            <span className="text-purple-400 bg-purple-950/40 border border-purple-800/50 px-2.5 py-1 rounded-full">
              CONSULTATION ROOM
            </span>
          </div>

          {/* Consultation Avatar Illustration */}
          <div className="flex justify-center py-4">
            <div className="w-24 h-24 rounded-full bg-[#161616] border border-[#262626] flex items-center justify-center relative shadow-inner">
              <div className="w-20 h-20 rounded-full bg-emerald-950/20 flex items-center justify-center">
                <Stethoscope size={36} className="text-emerald-500" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#121212] border border-[#2a2a2a] flex items-center justify-center text-xs">
                <User size={14} className="text-brand" />
              </div>
            </div>
          </div>

          {/* Patient Presentation Box */}
          <div className="bg-[#121212] border border-[#222] rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">PATIENT PRESENTATION</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">CLINICAL VIGNETTE</h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {activeCase.presentation.story}
              </p>
            </div>

            {/* Vital Signs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-[#1a1a1a] text-[11px]">
              <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                <span className="text-gray-500 block text-[9px]">HR</span>
                <span className="font-bold text-white">{activeCase.presentation.vitals.hr}</span>
              </div>
              <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                <span className="text-gray-500 block text-[9px]">BP</span>
                <span className="font-bold text-white">{activeCase.presentation.vitals.bp}</span>
              </div>
              <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                <span className="text-gray-500 block text-[9px]">TEMP</span>
                <span className="font-bold text-white">{activeCase.presentation.vitals.temp}</span>
              </div>
              <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                <span className="text-gray-500 block text-[9px]">RR</span>
                <span className="font-bold text-white">{activeCase.presentation.vitals.rr}</span>
              </div>
              <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                <span className="text-gray-500 block text-[9px]">SPO2</span>
                <span className="font-bold text-white">{activeCase.presentation.vitals.spo2}</span>
              </div>
            </div>
          </div>

          {/* Begin Assessment Questions Button */}
          <button
            onClick={() => {
              setView("active")
              setSecondsRemaining(selectedTime > 0 ? selectedTime * 60 : 0)
            }}
            className="w-full bg-[#1b4332] hover:bg-[#143628] border border-[#2d6a4f] text-white py-4 rounded-xl transition-all shadow-xl flex flex-col items-center justify-center gap-0.5 group"
          >
            <span className="font-bold text-sm tracking-wide flex items-center gap-2">
              <Play size={14} fill="currentColor" /> Begin Assessment Questions
            </span>
            <span className="text-[11px] text-emerald-300 font-normal">
              {activeCase.questions.length} examiner questions incl. consultant-level viva
            </span>
          </button>
        </div>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════
  // VIEW 3: ACTIVE STATION (Vignette, Exam, or History)
  // ═══════════════════════════════════════════════════════════
  if (view === "active") {
    const score = calculateScore()

    // ─── ACTIVE VIGNETTE ───
    if (stationType === "vignette" && activeCase) {
      const q = activeCase.questions[currentQuestionIndex]
      const isRevealed = revealedQuestions[q.id]
      const userText = userAnswers[q.id] || ""
      const isHintVisible = showHint[q.id]

      return (
        <div className="max-w-6xl mx-auto pb-24 space-y-4">
          {/* Top Control Bar */}
          <div className="flex items-center justify-between gap-3 bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setView("config")}
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={15} />
              </button>
              <div>
                <h1 className="text-sm sm:text-base font-bold text-white">{activeCase.title}</h1>
                <p className="text-[11px] text-gray-400">{activeCase.course} &bull; {selectedLevel}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {markMeEnabled && (
                <span className="text-xs font-bold text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-md">
                  Rubric: {score.earned} / {score.total} Marks
                </span>
              )}
              {selectedTime > 0 && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#222] text-xs font-bold text-white">
                  <Clock size={13} className="text-brand" /> {formatTimer(secondsRemaining)}
                </div>
              )}
            </div>
          </div>

          {/* Split Screen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

            {/* Left Column (5 cols): Patient Case Reference */}
            <div className="lg:col-span-5 bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-5 space-y-4 overflow-y-auto max-h-[calc(100vh-170px)]">
              <div className="flex items-center justify-between pb-3 border-b border-[#181818]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#161616] border border-[#222] flex items-center justify-center text-brand">
                    <User size={14} />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-white uppercase tracking-wider">Patient Case</h2>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">Clinical Reference</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-brand/10 text-brand border border-brand/20">
                  {activeCase.course}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Clinical Narrative</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {activeCase.presentation.story}
                </p>
              </div>

              {/* Vitals Grid */}
              <div className="bg-[#121212] border border-[#202020] rounded-xl p-3 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Recorded Vital Signs</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                    <span className="text-gray-500 block text-[9px]">HEART RATE</span>
                    <span className="font-bold text-white">{activeCase.presentation.vitals.hr}</span>
                  </div>
                  <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                    <span className="text-gray-500 block text-[9px]">BLOOD PRESSURE</span>
                    <span className="font-bold text-white">{activeCase.presentation.vitals.bp}</span>
                  </div>
                  <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                    <span className="text-gray-500 block text-[9px]">TEMPERATURE</span>
                    <span className="font-bold text-white">{activeCase.presentation.vitals.temp}</span>
                  </div>
                  <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                    <span className="text-gray-500 block text-[9px]">RESP RATE</span>
                    <span className="font-bold text-white">{activeCase.presentation.vitals.rr}</span>
                  </div>
                  <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                    <span className="text-gray-500 block text-[9px]">SPO2</span>
                    <span className="font-bold text-white">{activeCase.presentation.vitals.spo2}</span>
                  </div>
                </div>
              </div>

              {/* Labs & Imaging */}
              <div className="space-y-2 pt-2 border-t border-[#181818]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Diagnostic Findings</span>
                <p className="text-xs text-gray-400 leading-relaxed bg-[#121212] p-3 rounded-xl border border-[#202020]">
                  {activeCase.presentation.labs}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed bg-[#121212] p-3 rounded-xl border border-[#202020]">
                  {activeCase.presentation.imaging}
                </p>
              </div>
            </div>

            {/* Right Column (7 cols): Active Question & Rubric */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-7 space-y-5 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-[#181818]">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand">Consultant Viva</span>
                    <h2 className="text-sm sm:text-base font-bold text-white">
                      Question {q.number} of {activeCase.questions.length}
                    </h2>
                  </div>

                  {hintsEnabled && (
                    <button
                      onClick={() => setShowHint(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-xs font-semibold text-yellow-500 hover:bg-[#1a1a1a] transition-colors"
                    >
                      <Lightbulb size={13} /> {isHintVisible ? "Hide Hint" : "Need a Hint?"}
                    </button>
                  )}
                </div>

                {/* Question Prompt */}
                <div className="bg-[#141414] border border-[#242424] rounded-xl p-4 sm:p-5">
                  <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                    {q.prompt}
                  </p>
                </div>

                {/* Hint Box */}
                {isHintVisible && (
                  <div className="bg-[#141208] border border-yellow-500/30 p-3.5 rounded-xl space-y-1 animate-in fade-in duration-200">
                    <span className="text-[10px] font-bold uppercase text-yellow-500 flex items-center gap-1">
                      <Lightbulb size={12} /> Clinical Guidance Clue
                    </span>
                    <p className="text-xs text-yellow-200/90 leading-relaxed">
                      {q.hint}
                    </p>
                  </div>
                )}

                {/* Response Textarea */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Your Formulated Answer
                  </label>
                  <textarea
                    rows={4}
                    value={userText}
                    onChange={e => setUserAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                    placeholder={`Type your clinical answer to Question ${q.number}...`}
                    className="w-full bg-[#121212] border border-[#262626] focus:border-brand rounded-xl p-4 text-xs sm:text-sm text-white placeholder-gray-600 outline-none resize-none leading-relaxed"
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  {!isRevealed ? (
                    <button
                      onClick={() => setRevealedQuestions(prev => ({ ...prev, [q.id]: true }))}
                      className="flex-1 bg-brand hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20"
                    >
                      Submit & Reveal Model Answer
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (currentQuestionIndex + 1 < activeCase.questions.length) {
                          setCurrentQuestionIndex(i => i + 1)
                        } else {
                          setView("results")
                        }
                      }}
                      className="flex-1 bg-brand hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20 flex items-center justify-center gap-2"
                    >
                      {currentQuestionIndex + 1 < activeCase.questions.length ? "Next Question →" : "View Final Station Score"}
                    </button>
                  )}
                </div>

                {/* Revealed Answer & "Mark Me" Rubric */}
                {isRevealed && (
                  <div className="bg-[#121212] border border-[#262626] rounded-xl p-5 space-y-4 animate-in fade-in duration-200">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand block mb-1">
                        Consultant Model Answer
                      </span>
                      <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
                        {q.modelAnswer}
                      </p>
                    </div>

                    {/* Mark Me Interactive Scoring Checklist */}
                    {markMeEnabled && (
                      <div className="pt-3 border-t border-[#1e1e1e] space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                            &quot;Mark Me&quot; Examiner Scoring Sheet
                          </span>
                          <span className="text-[11px] text-brand font-bold">Tick points earned</span>
                        </div>

                        <div className="space-y-1.5">
                          {q.rubricItems.map((item, idx) => {
                            const rubricKey = `${q.id}-rubric-${idx}`
                            const isTicked = awardedMarks[rubricKey]
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setAwardedMarks(prev => ({ ...prev, [rubricKey]: !prev[rubricKey] }))}
                                className={`w-full text-left p-3 rounded-lg border text-xs transition-all flex items-start gap-2.5 ${
                                  isTicked
                                    ? "bg-green-950/20 border-green-800/40 text-green-300"
                                    : "bg-[#161616] border-[#242424] text-gray-300 hover:border-[#333]"
                                }`}
                              >
                                <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center flex-shrink-0 border ${
                                  isTicked ? "bg-green-600 border-green-500 text-white" : "border-[#3a3a3a] bg-[#1a1a1a]"
                                }`}>
                                  {isTicked && <Check size={11} />}
                                </div>
                                <span className="flex-1 leading-snug">{item.text}</span>
                                <span className="font-bold text-[10px] uppercase text-gray-400">+{item.marks} MK</span>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }

    // ─── ACTIVE PHYSICAL EXAMINATION ───
    if (stationType === "exam" && activeExam) {
      return (
        <div className="max-w-4xl mx-auto pb-24 space-y-5">
          <div className="flex items-center justify-between gap-3 bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setView("config")}
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={15} />
              </button>
              <div>
                <h1 className="text-sm sm:text-base font-bold text-white">{activeExam.title}</h1>
                <p className="text-[11px] text-gray-400">{activeExam.topic} &bull; {selectedLevel}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-md">
                Marks: {score.earned} / {score.total}
              </span>
              {selectedTime > 0 && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#222] text-xs font-bold text-white">
                  <Clock size={13} className="text-brand" /> {formatTimer(secondsRemaining)}
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            {hintsEnabled && (
              <div className="bg-[#141208] border border-yellow-500/30 p-3.5 rounded-xl space-y-1">
                <span className="text-[10px] font-bold uppercase text-yellow-500 flex items-center gap-1">
                  <Lightbulb size={12} /> Clinical Examination Tip
                </span>
                <p className="text-xs text-yellow-200/90 leading-relaxed">
                  {activeExam.hint}
                </p>
              </div>
            )}

            <div className="space-y-6">
              {activeExam.steps.map((sec, i) => (
                <div key={i} className="space-y-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-brand border-b border-[#1f1f1f] pb-1.5">
                    {sec.category}
                  </h2>
                  <div className="space-y-2">
                    {sec.items.map(item => {
                      const isChecked = checkedExamItems[item.id]
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setCheckedExamItems(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                            isChecked
                              ? "bg-green-950/20 border-green-800/40 text-white"
                              : "bg-[#141414] border-[#222] text-gray-300 hover:border-[#333]"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                            isChecked ? "bg-green-600 border-green-500 text-white" : "border-[#333] bg-[#1a1a1a]"
                          }`}>
                            {isChecked && <Check size={13} />}
                          </div>
                          <div className="flex-1 text-xs sm:text-sm">
                            <span className={isChecked ? "line-through text-gray-400" : "text-gray-200"}>
                              {item.text}
                            </span>
                            {item.critical && (
                              <span className="ml-2 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-brand/10 text-brand border border-brand/20">
                                Critical
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] font-bold text-gray-500">+{item.marks} MK</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setView("results")}
              className="w-full bg-brand hover:bg-red-700 text-white font-bold py-4 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20"
            >
              Conclude Physical Examination Station
            </button>
          </div>
        </div>
      )
    }

    // ─── ACTIVE HISTORY TAKING ───
    if (stationType === "history" && activeHistory) {
      return (
        <div className="max-w-4xl mx-auto pb-24 space-y-5">
          <div className="flex items-center justify-between gap-3 bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setView("config")}
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={15} />
              </button>
              <div>
                <h1 className="text-sm sm:text-base font-bold text-white">{activeHistory.title}</h1>
                <p className="text-[11px] text-gray-400">Patient: {activeHistory.patientName} &bull; {activeHistory.ageGender}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-md">
                Marks: {score.earned} / {score.total}
              </span>
              {selectedTime > 0 && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#222] text-xs font-bold text-white">
                  <Clock size={13} className="text-brand" /> {formatTimer(secondsRemaining)}
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="bg-[#141414] border border-[#242424] rounded-xl p-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand block mb-1">Presenting Problem</span>
              <p className="text-sm font-semibold text-white">&quot;{activeHistory.chiefComplaint}&quot;</p>
              <p className="text-xs text-gray-400 mt-1">{activeHistory.scenario}</p>
            </div>

            {hintsEnabled && (
              <div className="bg-[#141208] border border-yellow-500/30 p-3.5 rounded-xl space-y-1">
                <span className="text-[10px] font-bold uppercase text-yellow-500 flex items-center gap-1">
                  <Lightbulb size={12} /> History Taking Guidance
                </span>
                <p className="text-xs text-yellow-200/90 leading-relaxed">
                  {activeHistory.hint}
                </p>
              </div>
            )}

            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400">Clinical Inquiries & Responses</h2>
              <div className="space-y-3">
                {activeHistory.inquiries.map(inq => {
                  const isRevealed = revealedHistoryInquiries[inq.id]
                  return (
                    <div key={inq.id} className="bg-[#121212] border border-[#202020] rounded-xl p-4 space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{inq.category}</span>
                          <p className="text-xs sm:text-sm font-medium text-white mt-0.5">{inq.question}</p>
                        </div>
                        <button
                          onClick={() => setRevealedHistoryInquiries(prev => ({ ...prev, [inq.id]: !prev[inq.id] }))}
                          className="text-xs text-brand hover:text-white font-semibold flex-shrink-0"
                        >
                          {isRevealed ? "Hide Reply" : "Interview Patient"}
                        </button>
                      </div>

                      {isRevealed && (
                        <div className="bg-[#181818] border-l-2 border-brand p-3 rounded-r-lg mt-2 space-y-1">
                          <span className="text-[10px] font-bold text-gray-400 block">Patient Response:</span>
                          <p className="text-xs text-gray-200 italic">&quot;{inq.patientResponse}&quot;</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <button
              onClick={() => setView("results")}
              className="w-full bg-brand hover:bg-red-700 text-white font-bold py-4 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20"
            >
              Conclude Consultation & Review Synthesis
            </button>
          </div>
        </div>
      )
    }
  }

  // ═══════════════════════════════════════════════════════════
  // VIEW 4: RESULTS REPORT
  // ═══════════════════════════════════════════════════════════
  if (view === "results") {
    const score = calculateScore()
    const pct = score.total > 0 ? Math.round((score.earned / score.total) * 100) : 0
    const grade =
      pct >= 80 ? "Distinction" :
      pct >= 65 ? "Merit" :
      pct >= 50 ? "Pass" : "Below Pass"

    return (
      <div className="max-w-xl mx-auto py-12 space-y-6">
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mx-auto">
            <Award size={32} />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-1">
              Station Assessment Complete &bull; {grade}
            </span>
            <h2 className="text-4xl font-display font-bold text-white">{pct}%</h2>
            <p className="text-xs text-gray-400 mt-1">
              Earned {score.earned} of {score.total} total marks on examiner rubric
            </p>
          </div>

          <div className="bg-[#141414] border border-[#222] rounded-xl p-4 grid grid-cols-2 gap-3 text-center">
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-500">Marks Earned</span>
              <p className="text-xl font-bold text-white mt-0.5">{score.earned} / {score.total}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-500">Clinical Level</span>
              <p className="text-xs font-bold text-brand mt-1 truncate">{selectedLevel}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => handleStartStation()}
              className="flex-1 bg-brand hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-brand/20"
            >
              <RotateCcw size={14} /> Retake Station
            </button>
            <button
              onClick={() => setView("hub")}
              className="flex-1 bg-[#161616] border border-[#242424] hover:bg-[#202020] text-gray-300 hover:text-white font-bold py-3.5 rounded-xl text-xs transition-colors"
            >
              Back to OSCE Hub
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
