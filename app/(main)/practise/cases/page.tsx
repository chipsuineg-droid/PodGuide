"use client"
import { useState, useEffect, useRef } from "react"
import {
  Stethoscope, Clock, CheckCircle, ArrowLeft, RotateCcw,
  FileText, MessageSquare, ChevronRight, Share2, Copy,
  Check, AlertCircle, Bookmark, Eye, HelpCircle, User
} from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

// ─── Types ───────────────────────────────────────────────────────────────────

type StationType = "vignette" | "exam" | "history"

interface ExaminerQuestion {
  id: string
  number: number
  prompt: string
  modelAnswer: string
  keyRubricPoints: string[]
}

interface ClinicalCase {
  id: string
  title: string
  speciality: string
  difficulty: "Easy" | "Medium" | "Hard"
  timeMinutes: number
  presentation: {
    demographics: string
    vitals: { hr: string; bp: string; temp: string; rr: string; spo2: string }
    story: string
    labs: string
    imaging: string
  }
  questions: ExaminerQuestion[]
}

interface ExamChecklistItem {
  id: string
  text: string
  critical: boolean
}

interface ExamStation {
  id: string
  title: string
  system: string
  difficulty: "Easy" | "Medium" | "Hard"
  timeMinutes: number
  steps: {
    category: string
    items: ExamChecklistItem[]
  }[]
}

interface HistoryQuestion {
  category: string
  question: string
  patientResponse: string
}

interface HistoryStation {
  id: string
  title: string
  speciality: string
  patientName: string
  ageGender: string
  chiefComplaint: string
  scenario: string
  inquiries: HistoryQuestion[]
}

// ─── Clinical Cases Data (Bailey & Love, Macleod's, Coovadia, WHO) ─────────────

const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: "case-surg-01",
    title: "Acute Large Bowel Obstruction",
    speciality: "Surgery",
    difficulty: "Medium",
    timeMinutes: 10,
    presentation: {
      demographics: "A 72-year-old man presents to the emergency department.",
      vitals: { hr: "108 bpm (irregular)", bp: "104/66 mmHg", temp: "37.8°C", rr: "22/min", spo2: "96% room air" },
      story: "A 72-year-old man presents to the emergency department with 24 hours of worsening central abdominal pain, repeated bilious vomiting, and increasing abdominal distension. He has not passed stool or flatus since the previous evening and reports several months of intermittent left-sided abdominal discomfort and a recent change to narrower stools, but no obvious rectal bleeding. His medical history includes hypertension, type 2 diabetes, and atrial fibrillation treated with apixaban; he has had no previous abdominal surgery. On examination, he is dehydrated with dry mucous membranes. His abdomen is markedly distended and tympanitic, with generalized tenderness but no guarding or rebound tenderness; bowel sounds are high-pitched and tinkling, and there are no palpable groin hernias. Digital rectal examination reveals an empty rectum without a palpable mass.",
      labs: "Initial blood tests show haemoglobin 108 g/L, white cell count 15.2 × 10⁹/L, CRP 86 mg/L, urea 12.4 mmol/L, creatinine 146 µmol/L (baseline 88), and lactate 2.6 mmol/L.",
      imaging: "Abdominal plain radiograph demonstrates dilated peripheral large-bowel loops (>6 cm) with prominent haustra and absence of gas in the rectum, consistent with mechanical large bowel obstruction."
    },
    questions: [
      {
        id: "q1",
        number: 1,
        prompt: "What additional focused history would you obtain to clarify the cause, severity, and duration of this patient's bowel obstruction?",
        modelAnswer: "Focus on systemic red flags (weight loss, anorexia, night sweats pointing to colorectal malignancy), previous colonoscopies, change in bowel habit specifics, medication history (apixaban timing for emergency surgery), absolute vs relative constipation, and signs of strangulation/peritonitis (continuous unremitting pain, rigors).",
        keyRubricPoints: [
          "Enquire about red flag symptoms: unexplained weight loss and anorexia",
          "Clarify timing of last apixaban dose (anticoagulation reversal window)",
          "Assess whether obstipation is absolute (no flatus or stool)",
          "Screen for fever, rigors, or progression from colicky to constant unremitting pain"
        ]
      },
      {
        id: "q2",
        number: 2,
        prompt: "What is your immediate resuscitation and conservative management plan in the first hour?",
        modelAnswer: "Initiate 'drip and suck': insert a wide-bore IV cannula and start balanced crystalloid fluid resuscitation; place a wide-bore nasogastric tube (Ryle's) on free drainage with intermittent aspiration; insert a Foley urinary catheter for hourly fluid balance monitoring; cross-match blood; order urgent contrast-enhanced CT abdomen/pelvis.",
        keyRubricPoints: [
          "IV fluid resuscitation with crystalloids for acute kidney injury and third-space loss",
          "Wide-bore nasogastric tube insertion for gastric decompression and aspiration prevention",
          "Foley catheterization for strict hourly urine output monitoring (target >0.5 mL/kg/h)",
          "Urgent Contrast-Enhanced CT abdomen and pelvis with water-soluble rectal contrast"
        ]
      },
      {
        id: "q3",
        number: 3,
        prompt: "What is the most likely underlying cause of large bowel obstruction in this patient?",
        modelAnswer: "Colorectal adenocarcinoma (specifically sigmoid or rectosigmoid junction). This is supported by his age, months of preceding altered bowel habits (pencil-thin stools), left iliac fossa discomfort, anemia, and absence of previous abdominal operations (making post-surgical adhesions unlikely in large bowel).",
        keyRubricPoints: [
          "Sigmoid / rectosigmoid colorectal adenocarcinoma",
          "Secondary differential: Sigmoid volvulus (usually abrupt, coffee-bean sign on X-ray)",
          "Diverticular stricture (complication of chronic diverticular disease)"
        ]
      },
      {
        id: "q4",
        number: 4,
        prompt: "The patient's abdominal pain suddenly becomes severe and continuous, with localized guarding in the right iliac fossa. What acute complication do you suspect and why in the right iliac fossa?",
        modelAnswer: "Impending or established caecal perforation secondary to closed-loop obstruction (with a competent ileocaecal valve). According to Laplace's law (Tension = Pressure × Radius), the caecum has the largest diameter in the colon and therefore generates the highest wall tension, making it the most susceptible site for ischemic gangrene and perforation in distal obstruction.",
        keyRubricPoints: [
          "Caecal ischemia / closed-loop perforation with competent ileocaecal valve",
          "Application of Laplace's law (greatest diameter = highest wall tension)",
          "Requires immediate surgical exploration without delay for further conservative therapy"
        ]
      },
      {
        id: "q5",
        number: 5,
        prompt: "Outline your surgical options if an obstructing, non-perforated sigmoid carcinoma is confirmed at laparotomy.",
        modelAnswer: "1. Hartmann's procedure (sigmoid resection, end colostomy, rectal stump closure) — safest in an elderly, unstable patient with loaded colon. 2. Resection with on-table colonic lavage and primary anastomosis (+/- defunctioning loop ileostomy). 3. Endoscopic self-expanding metallic stent (SEMS) as a bridge to elective curative surgery.",
        keyRubricPoints: [
          "Hartmann's operation (sigmoid colectomy with end colostomy)",
          "Primary resection and anastomosis with proximal diversion",
          "Colonic stenting as a bridge to elective resection in suitable centers"
        ]
      },
      {
        id: "q6",
        number: 6,
        prompt: "How will you manage his apixaban if urgent emergency laparotomy is required tonight?",
        modelAnswer: "Check timing of last dose. If taken within 24 hours, reverse anticoagulation with Andexanet alfa (if available) or 4-Factor Prothrombin Complex Concentrate (PCC, 25-50 IU/kg) plus tranexamic acid. Check coagulation profile and platelet count, and coordinate with hematology and anesthesia for rapid-sequence induction.",
        keyRubricPoints: [
          "Check timing of last apixaban dose",
          "Administer specific antidote (Andexanet alfa) or 4-Factor PCC",
          "Ensure blood cross-matched and intensive care bed reserved"
        ]
      }
    ]
  },
  {
    id: "case-card-02",
    title: "Acute ST-Elevation Myocardial Infarction",
    speciality: "Internal Medicine",
    difficulty: "Hard",
    timeMinutes: 10,
    presentation: {
      demographics: "A 58-year-old woman is brought by ambulance to the resuscitation room.",
      vitals: { hr: "116 bpm", bp: "88/54 mmHg", temp: "36.8°C", rr: "24/min", spo2: "92% room air" },
      story: "A 58-year-old woman with a history of hyperlipidemia and 30 pack-year smoking presents with 90 minutes of excruciating, retrosternal chest tightness radiating to the left shoulder and lower jaw. She is diaphoretic, nauseous, and visibly distressed. On examination, she is pale, cool, and clammy. Heart sounds reveal an S4 gallop with no murmurs. Auscultation of the lungs reveals bibasilar end-inspiratory crackles extending halfway up both lung fields. JVP is elevated 4 cm above the sternal angle.",
      labs: "Initial point-of-care Troponin I is 4,820 ng/L (markedly elevated). Serum potassium is 3.9 mmol/L, hemoglobin 132 g/L, blood glucose 11.4 mmol/L.",
      imaging: "12-lead ECG demonstrates 4 mm convex ST-segment elevation in leads V1 to V5 with reciprocal ST depression in leads II, III, and aVF, diagnostic of an acute extensive anterior STEMI."
    },
    questions: [
      {
        id: "card-q1",
        number: 1,
        prompt: "What is your immediate pharmacological and supportive management in the first 10 minutes?",
        modelAnswer: "Administer high-flow oxygen only if SpO2 <90% (titrate to 94-98%); sublingual glyceryl trinitrate is contraindicated here due to hypotension (systolic BP <90 mmHg); administer aspirin 300 mg chewable oral load, plus a potent P2Y12 inhibitor (Ticagrelor 180 mg or Prasugrel 60 mg); administer IV opioid analgesia (Morphine 2.5-5 mg IV with metoclopramide); establish dual large-bore IV access.",
        keyRubricPoints: [
          "Aspirin 300 mg chewed loading dose",
          "P2Y12 inhibitor loading (Ticagrelor 180 mg or Prasugrel 60 mg)",
          "Avoid nitrates due to profound hypotension (BP 88/54 mmHg)",
          "Immediate activation of Cardiac Catheterization Lab for primary PCI"
        ]
      },
      {
        id: "card-q2",
        number: 2,
        prompt: "What is the culprit coronary artery and specific territory involved in this ECG pattern?",
        modelAnswer: "Left Anterior Descending (LAD) coronary artery occlusion (likely proximal LAD given ST elevation across V1-V5 and aVL with reciprocal inferior changes), affecting the anterior wall of the left ventricle and interventricular septum.",
        keyRubricPoints: [
          "Left Anterior Descending (LAD) coronary artery",
          "Anterior left ventricular myocardium and interventricular septum"
        ]
      },
      {
        id: "card-q3",
        number: 3,
        prompt: "The patient is in cardiogenic shock (BP 88/54, pulmonary crackles). What is Killip class is this, and what inotropic/vasopressor support would you select?",
        modelAnswer: "Killip Class III to IV (Class III = pulmonary edema, Class IV = cardiogenic shock with systemic hypotension). Norepinephrine is the first-line vasopressor to restore coronary and systemic perfusion pressure, combined with inotropic support (Dobutamine) if low cardiac output persists. Avoid beta-blockers immediately.",
        keyRubricPoints: [
          "Killip Class III / IV",
          "Norepinephrine as first-line agent to maintain MAP >65 mmHg",
          "Avoid beta-blockers in acute decompensated shock"
        ]
      },
      {
        id: "card-q4",
        number: 4,
        prompt: "On day 3 post-PCI, the patient suddenly develops severe breathlessness and a harsh pansystolic murmur at the lower left sternal border accompanied by a palpable thrill. What mechanical complication has occurred?",
        modelAnswer: "Acute ventricular septal rupture (VSR) secondary to anterior wall infarction. The differential includes acute mitral regurgitation due to papillary muscle rupture, but the harsh pansystolic murmur with thrill at the left parasternal edge is classic for VSR. Urgent echocardiography and surgical repair are indicated.",
        keyRubricPoints: [
          "Post-infarction Ventricular Septal Rupture (VSR)",
          "Confirm with urgent bedside Transthoracic Echocardiography (TTE)",
          "Requires mechanical circulatory support (IABP/Impella) and urgent cardiothoracic surgery"
        ]
      }
    ]
  },
  {
    id: "case-obgyn-03",
    title: "Severe Pre-Eclampsia & HELLP Syndrome",
    speciality: "Obstetrics & Gynaecology",
    difficulty: "Medium",
    timeMinutes: 10,
    presentation: {
      demographics: "A 28-year-old primigravida at 36 weeks gestation presents to the labour ward.",
      vitals: { hr: "94 bpm", bp: "172/112 mmHg", temp: "37.0°C", rr: "18/min", spo2: "98% room air" },
      story: "A 28-year-old woman in her first pregnancy presents at 36 weeks with a 2-day history of throbbing frontal headache unresponsive to paracetamol, visual disturbances (scotomata and blurred vision), and severe right upper quadrant/epigastric pain. She also reports progressive swelling of her hands and face over the past week. On examination, she has facial edema and brisk deep tendon reflexes with 3 beats of clonus at the ankle. Symphysis-fundal height corresponds to 33 cm. Fetal heart rate is 144 bpm with good baseline variability.",
      labs: "Automated urinalysis shows 4+ proteinuria. Serum uric acid is 490 µmol/L. Full blood count reveals platelet count of 68 × 10⁹/L. Serum AST is 214 U/L, ALT 198 U/L, and LDH is 780 U/L. Peripheral blood film reveals schistocytes and burr cells.",
      imaging: "Obstetric ultrasound confirms a singleton fetus in cephalic presentation with estimated fetal weight on the 8th centile (intrauterine growth restriction) and oligohydramnios (amniotic fluid index 4.2 cm)."
    },
    questions: [
      {
        id: "ob-q1",
        number: 1,
        prompt: "Formulate your definitive diagnosis based on the clinical presentation and laboratory profile.",
        modelAnswer: "Severe Pre-eclampsia complicated by HELLP syndrome (Haemolysis [elevated LDH, schistocytes], Elevated Liver enzymes [AST/ALT >70], Low Platelets [<100 × 10⁹/L]) with intrauterine fetal growth restriction at 36 weeks gestation.",
        keyRubricPoints: [
          "Severe pre-eclampsia with impending eclampsia (hyperreflexia, clonus, scotomata)",
          "HELLP syndrome (Haemolysis, Elevated Liver enzymes, Low Platelets)",
          "Fetal growth restriction and oligohydramnios"
        ]
      },
      {
        id: "ob-q2",
        number: 1,
        prompt: "What is your immediate medical intervention to prevent maternal seizures?",
        modelAnswer: "Administer Magnesium Sulphate (MgSO4) immediately: IV loading dose of 4 g over 15-20 minutes, followed by a continuous IV maintenance infusion of 1 g/hour (or intramuscular Pritchard regimen: 5 g IM in each buttock). Monitor urine output (>30 mL/hr), respiratory rate (>12/min), and patellar reflexes.",
        keyRubricPoints: [
          "Magnesium Sulphate loading dose 4 g IV over 15-20 minutes",
          "Maintenance infusion of 1 g/hour IV",
          "Safety monitoring: patellar deep tendon reflexes, respiratory rate, and urine output",
          "Keep antidote Calcium Gluconate (10% 10 mL) immediately accessible at bedside"
        ]
      },
      {
        id: "ob-q3",
        number: 3,
        prompt: "How will you urgently control her severe hypertension (BP 172/112 mmHg)?",
        modelAnswer: "Administer IV Labetalol (20 mg IV bolus over 2 minutes, repeating or doubling to 40 mg and 80 mg at 10-minute intervals up to 220 mg max) or oral Nifedipine (10-20 mg immediate-release capsule). Target systolic BP 135-150 mmHg and diastolic BP 85-95 mmHg to prevent maternal cerebral hemorrhage without compromising placental perfusion.",
        keyRubricPoints: [
          "IV Labetalol or oral immediate-release Nifedipine",
          "Target BP range 135-150 / 85-95 mmHg",
          "Avoid excessive rapid reduction to preserve uteroplacental blood flow"
        ]
      },
      {
        id: "ob-q4",
        number: 4,
        prompt: "What is the definitive cure for this condition and what is your delivery plan?",
        modelAnswer: "The definitive cure is delivery of the fetus and placenta. Since gestational age is 36 weeks and severe features/HELLP are present, expedite delivery once maternal hemodynamic and coagulation status is stabilized. Cesarean section is indicated if cervix is unfavorable or fetal distress occurs; regional anesthesia requires careful platelet count review (>70-80 × 10⁹/L required for spinal/epidural).",
        keyRubricPoints: [
          "Definitive cure is delivery of fetus and placenta",
          "Delivery indicated once mother is acutely stabilized",
          "Platelet count assessment prior to regional neuraxial anesthesia"
        ]
      }
    ]
  }
]

// ─── Physical Examination OSCE Stations (Macleod's Standards) ────────────────

const EXAM_STATIONS: ExamStation[] = [
  {
    id: "exam-cvs",
    title: "Cardiovascular System Examination",
    system: "Cardiology",
    difficulty: "Medium",
    timeMinutes: 8,
    steps: [
      {
        category: "1. Introduction & General Inspection",
        items: [
          { id: "cvs-1", text: "Introduce yourself, confirm patient identity, explain examination, and obtain verbal consent", critical: true },
          { id: "cvs-2", text: "Expose patient to waist and position at 45 degrees with adequate lighting", critical: true },
          { id: "cvs-3", text: "Inspect surrounding environment for oxygen, GTN spray, ECG leads, pacemaker", critical: false },
          { id: "cvs-4", text: "General inspection: dyspnoea, pallor, cyanosis, marfanoid habitus, visible distress", critical: false },
        ]
      },
      {
        category: "2. Hands, Pulse & Face",
        items: [
          { id: "cvs-5", text: "Inspect hands: splinter hemorrhages, clubbing, Osler nodes, Janeway lesions, tar staining", critical: true },
          { id: "cvs-6", text: "Palpate radial pulse: assess rate and rhythm (regular vs irregularly irregular)", critical: true },
          { id: "cvs-7", text: "Assess for collapsing pulse (water-hammer) by raising arm while palpating wrist", critical: false },
          { id: "cvs-8", text: "Inspect face: malar flush (mitral stenosis), eyes for corneal arcus and xanthelasma", critical: false },
          { id: "cvs-9", text: "Inspect oral cavity: central cyanosis under tongue, high-arched palate", critical: false },
        ]
      },
      {
        category: "3. Neck & Jugular Venous Pulse",
        items: [
          { id: "cvs-10", text: "Inspect Jugular Venous Pulse (JVP): identify double waveform, measure vertical height above sternal angle (<3 cm normal)", critical: true },
          { id: "cvs-11", text: "Assess hepatojugular reflux and differentiate JVP from carotid arterial pulsation", critical: false },
          { id: "cvs-12", text: "Palpate carotid arterial pulse gently (one side at a time) for character and volume", critical: true },
        ]
      },
      {
        category: "4. Precordial Inspection, Palpation & Auscultation",
        items: [
          { id: "cvs-13", text: "Inspect precordium: surgical scars (sternotomy, thoracotomy), pacemakers, visible apex pulsation", critical: false },
          { id: "cvs-14", text: "Palpate apex beat: locate 5th intercostal space, midclavicular line; assess character (heaving, tapping, dyskinetic)", critical: true },
          { id: "cvs-15", text: "Palpate for parasternal heave (right ventricular hypertrophy) and thrills across all 4 valves", critical: true },
          { id: "cvs-16", text: "Auscultate mitral area (apex) with bell (mitral stenosis) and diaphragm (mitral regurgitation)", critical: true },
          { id: "cvs-17", text: "Auscultate tricuspid, pulmonary, and aortic areas with diaphragm", critical: true },
          { id: "cvs-18", text: "Auscultate carotid arteries for radiation of aortic stenosis murmur while patient holds breath", critical: true },
          { id: "cvs-19", text: "Sit patient forward in expiration: auscultate left sternal edge for early diastolic murmur of aortic regurgitation", critical: true },
        ]
      },
      {
        category: "5. Back, Peripheral & Completion",
        items: [
          { id: "cvs-20", text: "Auscultate lung bases posteriorly for bibasilar crackles of left heart failure", critical: true },
          { id: "cvs-21", text: "Palpate sacrum and inspect lower limbs for pitting edema", critical: true },
          { id: "cvs-22", text: "Thank patient, ensure they are comfortable, and state you would measure blood pressure and 12-lead ECG", critical: false }
        ]
      }
    ]
  },
  {
    id: "exam-abdo",
    title: "Abdominal Examination",
    system: "Gastroenterology / Surgery",
    difficulty: "Medium",
    timeMinutes: 8,
    steps: [
      {
        category: "1. Preparation & Inspection",
        items: [
          { id: "abd-1", text: "Introduce yourself, explain examination, obtain consent, position patient flat with one pillow", critical: true },
          { id: "abd-2", text: "Adequate exposure from nipples to symphysis pubis while preserving modesty", critical: false },
          { id: "abd-3", text: "Inspect hands: leukonychia, palmar erythema, Dupuytren's contracture, asterixis/flapping tremor", critical: true },
          { id: "abd-4", text: "Inspect eyes for scleral jaundice and mouth for glossitis, stomatitis, or telangiectasia", critical: false },
          { id: "abd-5", text: "Inspect abdomen from foot of bed: symmetry, distension, striae, caput medusae, visible peristalsis, surgical scars", critical: true },
        ]
      },
      {
        category: "2. Palpation & Percussion",
        items: [
          { id: "abd-6", text: "Ask patient if they have pain before touching; watch patient's face throughout palpation", critical: true },
          { id: "abd-7", text: "Light palpation across all 9 quadrants to assess tenderness, guarding, and rigidity", critical: true },
          { id: "abd-8", text: "Deep palpation for masses and organomegaly across all quadrants", critical: true },
          { id: "abd-9", text: "Palpate liver edge from right iliac fossa upwards in synchronization with inspiration", critical: true },
          { id: "abd-10", text: "Palpate spleen starting from right iliac fossa toward left costal margin; roll patient on right side if needed", critical: true },
          { id: "abd-11", text: "Bimanually ballot both kidneys in right and left flanks", critical: false },
          { id: "abd-12", text: "Palpate abdominal aorta for expansile pulsatile mass", critical: true },
          { id: "abd-13", text: "Percuss for shifting dullness if abdominal distension is present", critical: true },
        ]
      },
      {
        category: "3. Auscultation & Completion",
        items: [
          { id: "abd-14", text: "Auscultate bowel sounds in right lower quadrant for at least 30-60 seconds", critical: true },
          { id: "abd-15", text: "Auscultate for renal and aortic arterial bruits", critical: false },
          { id: "abd-16", text: "Examine hernial orifices and external genitalia", critical: true },
          { id: "abd-17", text: "State requirement to perform Digital Rectal Examination (DRE)", critical: true }
        ]
      }
    ]
  }
]

// ─── History Taking Stations ──────────────────────────────────────────────────

const HISTORY_STATIONS: HistoryStation[] = [
  {
    id: "hist-01",
    title: "Acute Chest Pain Presentation",
    speciality: "Cardiology",
    patientName: "Mr. Edward Moyo",
    ageGender: "52-year-old Male",
    chiefComplaint: "Central crushing chest pain for 2 hours",
    scenario: "You are the attending doctor in the Medical Admissions Unit. A 52-year-old accountant has been admitted with acute chest pain. Conduct a focused history.",
    inquiries: [
      {
        category: "Site & Onset",
        question: "Can you point with one finger to where the pain is, and tell me exactly what you were doing when it started?",
        patientResponse: "It is right across the middle of my chest, doctor, like a heavy band. It started about 2 hours ago while I was climbing the stairs at my office."
      },
      {
        category: "Character & Radiation",
        question: "What does the pain feel like, and does it travel anywhere else?",
        patientResponse: "It feels like a heavy weight or crushing pressure, not sharp. It aches all the way up into my left jaw and down the inside of my left arm."
      },
      {
        category: "Associated Symptoms",
        question: "Have you felt sweaty, nauseous, or breathless with this pain?",
        patientResponse: "Yes, I broke out in a cold sweat immediately and felt very sick to my stomach. I'm breathing faster because of the pressure."
      },
      {
        category: "Exacerbating & Relieving Factors",
        question: "Does taking a deep breath, coughing, or changing your posture change the pain at all?",
        patientResponse: "No, doctor. Sitting forward, lying flat, taking deep breaths—nothing changes it. It has stayed constant and heavy."
      },
      {
        category: "Past Medical & Drug History",
        question: "Do you have high blood pressure, diabetes, high cholesterol, or take any regular medications?",
        patientResponse: "I was told my blood pressure was borderline 2 years ago, but I don't take medications. I take paracetamol occasionally for headaches."
      },
      {
        category: "Cardiovascular Risk Factors",
        question: "Do you smoke, and is there any family history of heart attacks at a young age?",
        patientResponse: "I smoke about 15 cigarettes a day and have for 25 years. My father actually had a fatal heart attack when he was 54."
      }
    ]
  }
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function ClinicalOSCEPage() {
  const [stationType, setStationType] = useState<StationType>("vignette")
  const [activeCase, setActiveCase] = useState<ClinicalCase | null>(null)
  const [activeExam, setActiveExam] = useState<ExamStation | null>(null)
  const [activeHistory, setActiveHistory] = useState<HistoryStation | null>(null)

  // In-session state
  const [inSession, setInSession] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({})
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({})
  const [checkedExamItems, setCheckedExamItems] = useState<Record<string, boolean>>({})
  const [revealedHistoryInquiries, setRevealedHistoryInquiries] = useState<Record<number, boolean>>({})

  // Session timer
  const [secondsRemaining, setSecondsRemaining] = useState(600)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!inSession) return
    timerRef.current = setInterval(() => {
      setSecondsRemaining(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [inSession])

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  const startCase = (c: ClinicalCase) => {
    setActiveCase(c)
    setCurrentQuestionIndex(0)
    setUserAnswers({})
    setRevealedQuestions({})
    setSecondsRemaining(c.timeMinutes * 60)
    setInSession(true)
  }

  const startExamStation = (station: ExamStation) => {
    setActiveExam(station)
    setCheckedExamItems({})
    setSecondsRemaining(station.timeMinutes * 60)
    setInSession(true)
  }

  const startHistoryStation = (h: HistoryStation) => {
    setActiveHistory(h)
    setRevealedHistoryInquiries({})
    setSecondsRemaining(10 * 60)
    setInSession(true)
  }

  const toggleExamItem = (id: string) => {
    setCheckedExamItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href)
      toast.success("Case reference link copied to clipboard")
    }
  }

  // ═══════════════════════════════════════════════════════════
  // VIEW 1: ACTIVE CLINICAL VIGNETTE SESSION (Matches Screenshot 1 & 2)
  // ═══════════════════════════════════════════════════════════
  if (inSession && activeCase) {
    const q = activeCase.questions[currentQuestionIndex]
    const isRevealed = revealedQuestions[q.id]
    const userText = userAnswers[q.id] || ""

    return (
      <div className="max-w-7xl mx-auto pb-24 space-y-4">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between gap-3 bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setInSession(false)}
              className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={15} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-brand" />
                <h1 className="text-sm sm:text-base font-bold text-white">Clinical Vignette</h1>
              </div>
              <p className="text-[11px] text-gray-400">
                {activeCase.speciality} &bull; {activeCase.difficulty} difficulty &bull; {activeCase.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#222] text-xs font-bold text-white">
              <Clock size={13} className="text-brand" /> {formatTimer(secondsRemaining)}
            </div>
            <button
              onClick={() => {
                const nextCase = CLINICAL_CASES.find(c => c.id !== activeCase.id) || CLINICAL_CASES[0]
                startCase(nextCase)
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1a1a1a] border border-[#222] text-xs font-semibold text-gray-300 hover:text-white transition-colors"
            >
              <RotateCcw size={13} /> New Case
            </button>
          </div>
        </div>

        {/* 3-Column Clinical Split Screen (Picture 2 Reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* Left Column (5 Cols): Patient Case Reference */}
          <div className="lg:col-span-5 bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-5 space-y-4 overflow-y-auto max-h-[calc(100vh-160px)]">
            <div className="flex items-center justify-between pb-3 border-b border-[#181818]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#161616] border border-[#222] flex items-center justify-center text-brand">
                  <User size={14} />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white uppercase tracking-wider">Patient Case</h2>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">Permanent Reference</span>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-brand/10 text-brand border border-brand/20">
                {activeCase.speciality}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Clinical Presentation</h3>
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
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Laboratory & Diagnostic Findings</span>
              <p className="text-xs text-gray-400 leading-relaxed bg-[#121212] p-3 rounded-xl border border-[#202020]">
                {activeCase.presentation.labs}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed bg-[#121212] p-3 rounded-xl border border-[#202020]">
                {activeCase.presentation.imaging}
              </p>
            </div>
          </div>

          {/* Center Column (7 Cols): Examiner Questions & Active Input */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-7 space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#181818]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand">Clinical Assessment</span>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Question {q.number} of {activeCase.questions.length}
                  </h3>
                </div>
                <span className="text-xs text-gray-500 font-semibold">
                  {q.number}/{activeCase.questions.length}
                </span>
              </div>

              {/* Examiner Prompt */}
              <div className="bg-[#141414] border border-[#242424] rounded-xl p-4 sm:p-5">
                <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                  {q.prompt}
                </p>
              </div>

              {/* Student Response Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                  Your Clinical Response
                </label>
                <textarea
                  rows={4}
                  value={userText}
                  onChange={e => setUserAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                  placeholder={`Type your detailed clinical reasoning for Question ${q.number}...`}
                  className="w-full bg-[#121212] border border-[#262626] focus:border-brand rounded-xl p-4 text-xs sm:text-sm text-white placeholder-gray-600 outline-none resize-none leading-relaxed"
                />
              </div>

              {/* Buttons: Submit & Reveal */}
              <div className="flex items-center gap-3">
                {!isRevealed ? (
                  <button
                    onClick={() => {
                      if (!userText.trim()) {
                        toast.info("You can view the consultant answer, or type your answer first to self-assess.")
                      }
                      setRevealedQuestions(prev => ({ ...prev, [q.id]: true }))
                    }}
                    className="flex-1 bg-brand hover:bg-red-700 text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20"
                  >
                    Submit & Compare Model Answer
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (currentQuestionIndex + 1 < activeCase.questions.length) {
                        setCurrentQuestionIndex(i => i + 1)
                      } else {
                        toast.success("Case Completed! Great work on this clinical viva.")
                        setInSession(false)
                      }
                    }}
                    className="flex-1 bg-brand hover:bg-red-700 text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20 flex items-center justify-center gap-2"
                  >
                    {currentQuestionIndex + 1 < activeCase.questions.length ? "Next Question →" : "Complete Case"}
                  </button>
                )}
              </div>

              {/* Consultant Model Answer & Rubric (Revealed) */}
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

                  <div className="pt-3 border-t border-[#1e1e1e]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                      Key Examiner Rubric Points
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-300">
                      {q.keyRubricPoints.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check size={13} className="text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Share / Collaboration Bar */}
            <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl p-3.5 flex items-center justify-between text-xs text-gray-400">
              <span>Study group reference & discussion</span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white bg-[#141414] border border-[#242424] px-3 py-1.5 rounded-lg transition-colors"
              >
                <Share2 size={12} className="text-brand" /> Share Case
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════
  // VIEW 2: ACTIVE PHYSICAL EXAM CHECKLIST SESSION
  // ═══════════════════════════════════════════════════════════
  if (inSession && activeExam) {
    const totalItems = activeExam.steps.reduce((sum, s) => sum + s.items.length, 0)
    const checkedCount = Object.values(checkedExamItems).filter(Boolean).length
    const scorePct = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0

    return (
      <div className="max-w-4xl mx-auto pb-24 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setInSession(false)}
              className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={15} />
            </button>
            <div>
              <h1 className="text-sm sm:text-base font-bold text-white">{activeExam.title}</h1>
              <p className="text-[11px] text-gray-400">{activeExam.system} &bull; Macleod&apos;s OSCE Protocol</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-md">
              Score: {scorePct}% ({checkedCount}/{totalItems})
            </span>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#222] text-xs font-bold text-white">
              <Clock size={13} className="text-brand" /> {formatTimer(secondsRemaining)}
            </div>
          </div>
        </div>

        {/* Steps and Checklist */}
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="space-y-1">
            <h2 className="text-base font-bold text-white">Interactive Examiner Checklist</h2>
            <p className="text-xs text-gray-400">
              Check off each clinical action as you execute it. Critical actions are highlighted.
            </p>
          </div>

          <div className="space-y-6">
            {activeExam.steps.map((sec, i) => (
              <div key={i} className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand border-b border-[#1f1f1f] pb-1.5">
                  {sec.category}
                </h3>
                <div className="space-y-2">
                  {sec.items.map(item => {
                    const isChecked = checkedExamItems[item.id]
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleExamItem(item.id)}
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
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              toast.success(`Checklist completed! Score: ${scorePct}%`)
              setInSession(false)
            }}
            className="w-full bg-brand hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20"
          >
            Complete Station Assessment
          </button>
        </div>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════
  // VIEW 3: ACTIVE HISTORY TAKING SESSION
  // ═══════════════════════════════════════════════════════════
  if (inSession && activeHistory) {
    return (
      <div className="max-w-4xl mx-auto pb-24 space-y-5">
        <div className="flex items-center justify-between gap-3 bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setInSession(false)}
              className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={15} />
            </button>
            <div>
              <h1 className="text-sm sm:text-base font-bold text-white">{activeHistory.title}</h1>
              <p className="text-[11px] text-gray-400">
                Patient: {activeHistory.patientName} &bull; {activeHistory.ageGender}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#222] text-xs font-bold text-white">
            <Clock size={13} className="text-brand" /> {formatTimer(secondsRemaining)}
          </div>
        </div>

        <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="bg-[#141414] border border-[#242424] rounded-xl p-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand block mb-1">Chief Complaint</span>
            <p className="text-sm font-semibold text-white">&quot;{activeHistory.chiefComplaint}&quot;</p>
            <p className="text-xs text-gray-400 mt-1">{activeHistory.scenario}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Clinical Inquiries & Patient Responses</h3>
            <div className="space-y-3">
              {activeHistory.inquiries.map((inq, idx) => {
                const isRevealed = revealedHistoryInquiries[idx]
                return (
                  <div key={idx} className="bg-[#121212] border border-[#202020] rounded-xl p-4 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{inq.category}</span>
                        <p className="text-xs sm:text-sm font-medium text-white mt-0.5">{inq.question}</p>
                      </div>
                      <button
                        onClick={() => setRevealedHistoryInquiries(prev => ({ ...prev, [idx]: !prev[idx] }))}
                        className="text-xs text-brand hover:text-white font-semibold flex-shrink-0"
                      >
                        {isRevealed ? "Hide Reply" : "Ask Patient"}
                      </button>
                    </div>

                    {isRevealed && (
                      <div className="bg-[#181818] border-l-2 border-brand p-3 rounded-r-lg mt-2">
                        <span className="text-[10px] font-bold text-gray-400 block mb-0.5">Patient Reply:</span>
                        <p className="text-xs text-gray-200 italic">&quot;{inq.patientResponse}&quot;</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <button
            onClick={() => {
              toast.success("History Taking Station Complete!")
              setInSession(false)
            }}
            className="w-full bg-brand hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20"
          >
            Conclude Patient Interview
          </button>
        </div>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════
  // VIEW 4: MED OSCE HUB (Picture 3 Reference)
  // ═══════════════════════════════════════════════════════════
  return (
    <div className="max-w-5xl mx-auto pb-24 space-y-6">
      {/* Header (No AI badges, no color gradients, simple sophisticated layout) */}
      <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-2 shadow-xl">
        <h1 className="text-3xl font-display font-bold text-white tracking-tight">Med OSCE</h1>
        <p className="text-xs sm:text-sm text-gray-400">
          Virtual clinical simulation stations &bull; Structured clinical cases, physical examinations, and patient history taking.
        </p>
      </div>

      {/* 3 Main OSCE Station Cards (Picture 3 Design) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            type: "vignette" as StationType,
            title: "Clinical Vignette",
            desc: "Immersive story-mode clinical cases with structured questions and consultant-level viva.",
            icon: FileText,
          },
          {
            type: "exam" as StationType,
            title: "Physical Examination",
            desc: "Practice clinical examination skills with interactive checklists based on Macleod's.",
            icon: Stethoscope,
          },
          {
            type: "history" as StationType,
            title: "History Taking",
            desc: "Structured patient consultation simulation – interview as the attending doctor.",
            icon: MessageSquare,
          },
        ].map(station => {
          const Icon = station.icon
          const isSelected = stationType === station.type
          return (
            <button
              key={station.type}
              onClick={() => setStationType(station.type)}
              className={`text-left p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-4 group ${
                isSelected
                  ? "bg-[#141414] border-brand shadow-md shadow-brand/10"
                  : "bg-[#0e0e0e] border-[#1f1f1f] hover:border-[#333] hover:bg-[#121212]"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#161616] group-hover:bg-brand/10 border border-[#242424] flex items-center justify-center text-gray-300 group-hover:text-brand transition-all">
                <Icon size={20} />
              </div>

              <div>
                <h3 className="font-bold text-white text-base group-hover:text-brand transition-colors">
                  {station.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  {station.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-[#1a1a1a] flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-white">
                <span>{isSelected ? "Selected Mode" : "Open Stations"}</span>
                <ChevronRight size={14} className={isSelected ? "text-brand" : "text-gray-600"} />
              </div>
            </button>
          )
        })}
      </div>

      {/* Station List based on Selected Mode */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white">
            {stationType === "vignette" ? "Available Clinical Vignettes" :
             stationType === "exam" ? "Physical Examination Stations" :
             "History Taking Consultations"}
          </h2>
          <span className="text-xs text-gray-500">
            {stationType === "vignette" ? `${CLINICAL_CASES.length} cases` :
             stationType === "exam" ? `${EXAM_STATIONS.length} checklists` :
             `${HISTORY_STATIONS.length} scenarios`}
          </span>
        </div>

        {/* Clinical Vignettes List (Picture 1 Card style) */}
        {stationType === "vignette" && (
          <div className="space-y-3">
            {CLINICAL_CASES.map(c => (
              <div
                key={c.id}
                className="bg-[#0e0e0e] border border-[#1f1f1f] hover:border-[#333] rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 transition-all group"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#161616] text-gray-300 border border-[#262626]">
                      {c.speciality}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                      c.difficulty === "Easy" ? "bg-green-500/10 text-green-400 border-green-500/20" :
                      c.difficulty === "Medium" ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" :
                      "bg-brand/10 text-brand border-brand/20"
                    }`}>
                      {c.difficulty}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock size={12} /> {c.timeMinutes} mins
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {c.presentation.story}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    {c.questions.length} examiner questions &bull; Consultant-level clinical viva
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <button
                    onClick={() => startCase(c)}
                    className="w-full md:w-auto bg-brand hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20 flex items-center justify-center gap-2"
                  >
                    Start Case <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Physical Examination Stations List */}
        {stationType === "exam" && (
          <div className="space-y-3">
            {EXAM_STATIONS.map(s => {
              const totalItems = s.steps.reduce((sum, st) => sum + st.items.length, 0)
              return (
                <div
                  key={s.id}
                  className="bg-[#0e0e0e] border border-[#1f1f1f] hover:border-[#333] rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all group"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#161616] text-gray-300 border border-[#262626]">
                        {s.system}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock size={12} /> {s.timeMinutes} mins
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {s.steps.length} examination phases &bull; {totalItems} checklist criteria according to Macleod&apos;s
                    </p>
                  </div>

                  <button
                    onClick={() => startExamStation(s)}
                    className="w-full md:w-auto bg-brand hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20 flex items-center justify-center gap-2"
                  >
                    Open Checklist <ChevronRight size={15} />
                  </button>
                </div>
              )
            })}
          </div>
        )}

        {/* History Taking Stations List */}
        {stationType === "history" && (
          <div className="space-y-3">
            {HISTORY_STATIONS.map(h => (
              <div
                key={h.id}
                className="bg-[#0e0e0e] border border-[#1f1f1f] hover:border-[#333] rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all group"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#161616] text-gray-300 border border-[#262626]">
                      {h.speciality}
                    </span>
                    <span className="text-xs text-gray-400">
                      Patient: {h.patientName} ({h.ageGender})
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand transition-colors">
                    {h.title}
                  </h3>
                  <p className="text-xs text-gray-400 italic">
                    &quot;{h.chiefComplaint}&quot;
                  </p>
                </div>

                <button
                  onClick={() => startHistoryStation(h)}
                  className="w-full md:w-auto bg-brand hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20 flex items-center justify-center gap-2"
                >
                  Start Consultation <ChevronRight size={15} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
