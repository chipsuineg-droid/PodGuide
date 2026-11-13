import type { MCQQuestion } from "../mcq-bank"

export const INTERNAL_MEDICINE_QUESTIONS: MCQQuestion[] = [
  {
    "id": "med-sba-001",
    "stem": "A 58-year-old male presents with 2 hours of central crushing chest pain. ECG shows 3 mm ST elevation in leads V1 to V4 with reciprocal depression in II, III, and aVF. What is the preferred reperfusion strategy?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Cardiovascular",
    "programme": "mbchb",
    "explanation": "Primary PCI is the gold standard reperfusion modality for acute STEMI when feasible within 120 minutes of medical presentation.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-001-b",
        "text": "Immediate intravenous fibrinolysis within 24 hours regardless of PCI availability",
        "is_correct": false
      },
      {
        "id": "med-sba-001-e",
        "text": "Conservative observation with subcutaneous low-molecular-weight heparin alone",
        "is_correct": false
      },
      {
        "id": "med-sba-001-c",
        "text": "Oral aspirin 75 mg daily and routine elective outpatient treadmill test",
        "is_correct": false
      },
      {
        "id": "med-sba-001-d",
        "text": "Emergency coronary artery bypass grafting as first-line in all STEMI",
        "is_correct": false
      },
      {
        "id": "med-sba-001-a",
        "text": "Primary Percutaneous Coronary Intervention (PCI) within 120 minutes of first medical contact",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-002",
    "stem": "A 70-year-old male presents with exertional angina, syncope, and dyspnoea. Auscultation reveals an ejection systolic murmur radiating to the carotids with a slow-rising pulse. What is the definitive management?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Cardiovascular",
    "programme": "mbchb",
    "explanation": "Symptomatic severe aortic stenosis carries high mortality without intervention; valve replacement (SAVR or TAVR) is definitive.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-002-a",
        "text": "Aortic valve replacement (surgical SAVR or transcatheter TAVR)",
        "is_correct": true
      },
      {
        "id": "med-sba-002-b",
        "text": "Lifelong medical management with high-dose beta-blockers",
        "is_correct": false
      },
      {
        "id": "med-sba-002-c",
        "text": "External counterpulsation therapy and exercise rehabilitation",
        "is_correct": false
      },
      {
        "id": "med-sba-002-d",
        "text": "Mitral balloon valvuloplasty",
        "is_correct": false
      },
      {
        "id": "med-sba-002-e",
        "text": "Routine observation with annual echocardiography",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-003",
    "stem": "A 72-year-old female presents with fatigue and palpitations. ECG confirms atrial fibrillation with heart rate 130 bpm. Her CHA2DS2-VASc score is 4. How should stroke risk be managed?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Cardiovascular",
    "programme": "mbchb",
    "explanation": "DOACs are superior to or non-inferior to warfarin for stroke prevention in non-valvular AF with CHA2DS2-VASc >=2.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-003-d",
        "text": "Intravenous unfractionated heparin infusion for 6 months",
        "is_correct": false
      },
      {
        "id": "med-sba-003-e",
        "text": "No antithrombotic therapy because bleeding risk exceeds benefit",
        "is_correct": false
      },
      {
        "id": "med-sba-003-b",
        "text": "Aspirin monotherapy 75 mg daily",
        "is_correct": false
      },
      {
        "id": "med-sba-003-a",
        "text": "Direct Oral Anticoagulant (DOAC, e.g., Apixaban or Rivaroxaban)",
        "is_correct": true
      },
      {
        "id": "med-sba-003-c",
        "text": "Dual antiplatelet therapy with Aspirin and Clopidogrel",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-004",
    "stem": "A 65-year-old male with HFrEF (ejection fraction 28%) is established on guideline-directed therapy. Which four drug classes comprise the mortality-reducing 'four pillars'?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Cardiovascular",
    "programme": "mbchb",
    "explanation": "The four pillars of HFrEF medical therapy proven to reduce mortality are ARNI/ACEi, evidence-based beta-blockers, MRAs, and SGLT2 inhibitors.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-004-e",
        "text": "Furosemide, Potassium chloride, Diltiazem, and Enalapril",
        "is_correct": false
      },
      {
        "id": "med-sba-004-a",
        "text": "ARNI / ACEi, Beta-blocker (bisoprolol/carvedilol), MRA (spironolactone), and SGLT2 inhibitor (dapagliflozin)",
        "is_correct": true
      },
      {
        "id": "med-sba-004-c",
        "text": "Aspirin, Clopidogrel, Atorvastatin, and Amlodipine",
        "is_correct": false
      },
      {
        "id": "med-sba-004-d",
        "text": "Calcium channel blocker, Nitrate, Ivabradine, and Warfarin",
        "is_correct": false
      },
      {
        "id": "med-sba-004-b",
        "text": "Loop diuretic, Thiazide, Digoxin, and Hydralazine",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-005",
    "stem": "A 26-year-old male presents with pleuritic chest pain that improves sitting forward and worsens lying flat. ECG shows widespread concave ST-segment elevation and PR depression. What is the treatment?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Cardiovascular",
    "programme": "mbchb",
    "explanation": "Acute idiopathic or viral pericarditis is treated with NSAIDs plus Colchicine to reduce the rate of recurrent pericarditis.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-005-c",
        "text": "Emergency subxiphoid pericardiocentesis without effusion",
        "is_correct": false
      },
      {
        "id": "med-sba-005-b",
        "text": "Immediate coronary angiogram and bare-metal stenting",
        "is_correct": false
      },
      {
        "id": "med-sba-005-e",
        "text": "High-dose oral Prednisolone monotherapy as first line",
        "is_correct": false
      },
      {
        "id": "med-sba-005-d",
        "text": "Systemic fibrinolysis with tissue plasminogen activator",
        "is_correct": false
      },
      {
        "id": "med-sba-005-a",
        "text": "High-dose oral NSAIDs (e.g., Ibuprofen) combined with oral Colchicine for 3 months",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-006",
    "stem": "A patient with a large pericardial effusion presents with BP 82/50 mmHg, raised jugular venous pressure, muffled heart sounds, and pulsus paradoxus >15 mmHg. What is the immediate intervention?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Cardiovascular",
    "programme": "mbchb",
    "explanation": "Beck's triad with pulsus paradoxus signifies acute cardiac tamponade; emergency pericardiocentesis relieves intrapericardial pressure.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-006-b",
        "text": "Intravenous bolus of 80 mg Furosemide",
        "is_correct": false
      },
      {
        "id": "med-sba-006-d",
        "text": "Insertion of a wide-bore intercostal chest drain",
        "is_correct": false
      },
      {
        "id": "med-sba-006-c",
        "text": "Immediate initiation of beta-blocker therapy",
        "is_correct": false
      },
      {
        "id": "med-sba-006-a",
        "text": "Emergency ultrasound-guided pericardiocentesis",
        "is_correct": true
      },
      {
        "id": "med-sba-006-e",
        "text": "Therapeutic anticoagulation with low-molecular-weight heparin",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-007",
    "stem": "A 42-year-old intravenous drug user presents with fever, a new regurgitant heart murmur, and Roth spots on fundoscopy. Blood cultures grow Staphylococcus aureus. What diagnostic criteria are applied?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Cardiovascular",
    "programme": "mbchb",
    "explanation": "Infective endocarditis is diagnosed using the modified Duke criteria (major criteria: positive blood cultures and typical echocardiographic findings).",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-007-b",
        "text": "Jones criteria",
        "is_correct": false
      },
      {
        "id": "med-sba-007-e",
        "text": "Centor criteria",
        "is_correct": false
      },
      {
        "id": "med-sba-007-d",
        "text": "CURB-65 criteria",
        "is_correct": false
      },
      {
        "id": "med-sba-007-a",
        "text": "Modified Duke criteria",
        "is_correct": true
      },
      {
        "id": "med-sba-007-c",
        "text": "Wells scoring system",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-008",
    "stem": "A 50-year-old male presents with BP 220/130 mmHg, bilateral retinal flame haemorrhages with papilloedema, and acute kidney injury. How should his blood pressure be lowered?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Cardiovascular",
    "programme": "mbchb",
    "explanation": "Hypertensive emergencies require controlled gradual reduction (max 25% in the first hour) to avoid watershed cerebral infarction.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-008-b",
        "text": "Immediate normalization to 120/80 mmHg within 15 minutes",
        "is_correct": false
      },
      {
        "id": "med-sba-008-c",
        "text": "Oral sublingual nifedipine capsule bitten and swallowed",
        "is_correct": false
      },
      {
        "id": "med-sba-008-e",
        "text": "Immediate bilateral surgical nephrectomy",
        "is_correct": false
      },
      {
        "id": "med-sba-008-d",
        "text": "Oral bendroflumethiazide 2.5 mg and discharge home",
        "is_correct": false
      },
      {
        "id": "med-sba-008-a",
        "text": "Gradual reduction of mean arterial pressure by 20-25% over the first hour using IV Labetalol or Nicardipine",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-009",
    "stem": "A 62-year-old male post-MI develops monomorphic wide-complex tachycardia at 165 bpm with BP 120/80 mmHg and no signs of shock. What is the first-line pharmacological treatment?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Cardiovascular",
    "programme": "mbchb",
    "explanation": "Stable VT is treated with antiarrhythmic infusions (Amiodarone); unstable VT mandates immediate synchronized DC cardioversion.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-009-c",
        "text": "Intravenous Adenosine 6 mg rapid push",
        "is_correct": false
      },
      {
        "id": "med-sba-009-a",
        "text": "Intravenous Amiodarone (300 mg over 10-60 minutes)",
        "is_correct": true
      },
      {
        "id": "med-sba-009-b",
        "text": "Intravenous Verapamil bolus",
        "is_correct": false
      },
      {
        "id": "med-sba-009-e",
        "text": "Carotid sinus massage for 15 minutes",
        "is_correct": false
      },
      {
        "id": "med-sba-009-d",
        "text": "Immediate unsynchronized defibrillation at 360 Joules",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-010",
    "stem": "An 18-year-old male collapses during competitive athletics. Autopsy reveals asymmetrical left ventricular septal hypertrophy and myofibrillar disarray. What is the genetic basis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Cardiovascular",
    "programme": "mbchb",
    "explanation": "Hypertrophic Cardiomyopathy (HCM) is the commonest cause of sudden cardiac death in young athletes, caused by sarcomere gene mutations.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-010-a",
        "text": "Autosomal dominant mutation in cardiac sarcomere protein genes (e.g., MYH7, MYBPC3)",
        "is_correct": true
      },
      {
        "id": "med-sba-010-b",
        "text": "X-linked recessive mutation in the dystrophin gene",
        "is_correct": false
      },
      {
        "id": "med-sba-010-c",
        "text": "Autosomal recessive mutation in the CFTR chloride channel",
        "is_correct": false
      },
      {
        "id": "med-sba-010-d",
        "text": "Acquired autoimmune destruction of myocardial desmosomes",
        "is_correct": false
      },
      {
        "id": "med-sba-010-e",
        "text": "Trinucleotide CAG repeat expansion on chromosome 4",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-011",
    "stem": "A patient with an acute inferior myocardial infarction develops severe hypotension (BP 75/40 mmHg) following administration of sublingual nitroglycerin. What is the underlying cause?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Internal Medicine",
    "section": "Cardiovascular",
    "programme": "mbchb",
    "explanation": "Right ventricular infarction (ST elevation in V4R) depends critically on preload; nitrates precipitate severe hypotension.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-011-a",
        "text": "Concomitant right ventricular infarction with profound preload dependence",
        "is_correct": true
      },
      {
        "id": "med-sba-011-b",
        "text": "Acute rupture of the ventricular septum with left-to-right shunt",
        "is_correct": false
      },
      {
        "id": "med-sba-011-c",
        "text": "Anaphylactic reaction to nitrate metabolites",
        "is_correct": false
      },
      {
        "id": "med-sba-011-d",
        "text": "Development of severe aortic regurgitation",
        "is_correct": false
      },
      {
        "id": "med-sba-011-e",
        "text": "Acute cardiac tamponade from free wall rupture",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-012",
    "stem": "A 65-year-old male with severe COPD presents with increased dyspnoea and purulent sputum. ABG shows pH 7.33, pCO2 56 mmHg, pO2 58 mmHg. What is the target oxygen saturation?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Respiratory",
    "programme": "mbchb",
    "explanation": "In hypercapnic respiratory failure, high-flow uncontrolled oxygen can worsen ventilation-perfusion mismatch and hypoventilation; target 88-92%.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-012-a",
        "text": "88% to 92% using a Venturi mask",
        "is_correct": true
      },
      {
        "id": "med-sba-012-b",
        "text": "98% to 100% using a non-rebreather reservoir mask",
        "is_correct": false
      },
      {
        "id": "med-sba-012-c",
        "text": "Less than 80% to stimulate peripheral chemoreceptors",
        "is_correct": false
      },
      {
        "id": "med-sba-012-d",
        "text": "Target oxygen saturation is irrelevant in acute respiratory failure",
        "is_correct": false
      },
      {
        "id": "med-sba-012-e",
        "text": "SpO2 exactly 100% with high-flow nasal cannula",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-013",
    "stem": "A 45-year-old woman 1 week after major pelvic surgery presents with sudden pleuritic chest pain, tachypnoea, tachycardia, and SpO2 90%. What is the investigation of choice?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Respiratory",
    "programme": "mbchb",
    "explanation": "In high-probability suspected pulmonary embolism, CTPA is the definitive first-line diagnostic investigation.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-013-d",
        "text": "Peak expiratory flow rate measurement",
        "is_correct": false
      },
      {
        "id": "med-sba-013-e",
        "text": "Barium swallow examination",
        "is_correct": false
      },
      {
        "id": "med-sba-013-a",
        "text": "CT Pulmonary Angiography (CTPA)",
        "is_correct": true
      },
      {
        "id": "med-sba-013-b",
        "text": "D-dimer blood test alone",
        "is_correct": false
      },
      {
        "id": "med-sba-013-c",
        "text": "Echocardiogram alone without vascular imaging",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-014",
    "stem": "A 32-year-old male presents with chronic cough, night sweats, weight loss, and apical cavitary consolidation on chest X-ray. What is the standard intensive-phase treatment for active TB?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Respiratory",
    "programme": "mbchb",
    "explanation": "Standard intensive phase antituberculous therapy comprises RIPE for 2 months, followed by Rifampicin and Isoniazid for 4 months.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-014-e",
        "text": "Single-drug therapy with Pyrazinamide for 6 months",
        "is_correct": false
      },
      {
        "id": "med-sba-014-d",
        "text": "Intravenous Ceftriaxone and Azithromycin for 14 days",
        "is_correct": false
      },
      {
        "id": "med-sba-014-c",
        "text": "Ciprofloxacin and Clarithromycin for 6 weeks",
        "is_correct": false
      },
      {
        "id": "med-sba-014-b",
        "text": "Rifampicin and Isoniazid alone for 12 months",
        "is_correct": false
      },
      {
        "id": "med-sba-014-a",
        "text": "Rifampicin, Isoniazid, Pyrazinamide, and Ethambutol (RIPE) for 2 months",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-015",
    "stem": "A 68-year-old male presents with progressive exertional dyspnoea, dry cough, digital clubbing, and bilateral basal fine inspiratory crackles. HRCT reveals subpleural reticulation and honeycombing.",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Respiratory",
    "programme": "mbchb",
    "explanation": "Subpleural honeycombing and traction bronchiectasis on HRCT are pathognomonic for the UIP pattern of Idiopathic Pulmonary Fibrosis.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-015-c",
        "text": "Community-acquired lobar pneumonia",
        "is_correct": false
      },
      {
        "id": "med-sba-015-d",
        "text": "Small cell neuroendocrine carcinoma",
        "is_correct": false
      },
      {
        "id": "med-sba-015-b",
        "text": "Bronchial asthma with mucus plugging",
        "is_correct": false
      },
      {
        "id": "med-sba-015-e",
        "text": "Pulmonary arterial hypertension",
        "is_correct": false
      },
      {
        "id": "med-sba-015-a",
        "text": "Idiopathic Pulmonary Fibrosis (Usual Interstitial Pneumonia pattern)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-016",
    "stem": "Which of the following pleural fluid characteristics satisfies Light's criteria for an exudative pleural effusion?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Respiratory",
    "programme": "mbchb",
    "explanation": "Light's criteria define an exudate if pleural/serum protein >0.5, pleural/serum LDH >0.6, or pleural LDH >2/3 upper limit of normal serum LDH.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-016-a",
        "text": "Pleural fluid protein to serum protein ratio >0.5, or pleural fluid LDH to serum LDH ratio >0.6",
        "is_correct": true
      },
      {
        "id": "med-sba-016-e",
        "text": "Pleural fluid glucose >15 mmol/L with absent white cells",
        "is_correct": false
      },
      {
        "id": "med-sba-016-b",
        "text": "Pleural fluid protein <20 g/L with normal serum LDH",
        "is_correct": false
      },
      {
        "id": "med-sba-016-d",
        "text": "Serum albumin minus pleural albumin gradient >12 g/L",
        "is_correct": false
      },
      {
        "id": "med-sba-016-c",
        "text": "Pleural fluid pH >7.6 with low specific gravity",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-017",
    "stem": "A 30-year-old female presents with bilateral hilar lymphadenopathy on chest X-ray, erythema nodosum on her shins, and ankle arthritis (Löfgren's syndrome). What is the underlying pathology?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Respiratory",
    "programme": "mbchb",
    "explanation": "Löfgren's syndrome is an acute, benign manifestation of sarcoidosis characterized by non-caseating epithelioid granulomas.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-017-a",
        "text": "Sarcoidosis with non-caseating granulomatous inflammation",
        "is_correct": true
      },
      {
        "id": "med-sba-017-c",
        "text": "Stage IV non-small cell lung cancer with nodal metastases",
        "is_correct": false
      },
      {
        "id": "med-sba-017-e",
        "text": "Metastatic malignant melanoma",
        "is_correct": false
      },
      {
        "id": "med-sba-017-d",
        "text": "Granulomatosis with polyangiitis (Wegener's)",
        "is_correct": false
      },
      {
        "id": "med-sba-017-b",
        "text": "Caseating granulomatous tuberculosis infection",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-018",
    "stem": "A 48-year-old obese male presents with excessive daytime sleepiness, morning headaches, and witnessed nocturnal pauses in breathing. What is the gold-standard diagnostic investigation?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Respiratory",
    "programme": "mbchb",
    "explanation": "Overnight polysomnography measures the Apnoea-Hypopnoea Index (AHI) to definitively diagnose and grade Obstructive Sleep Apnoea.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-018-d",
        "text": "Resting awake electroencephalogram (EEG)",
        "is_correct": false
      },
      {
        "id": "med-sba-018-b",
        "text": "Arterial blood gas sampling during wakefulness",
        "is_correct": false
      },
      {
        "id": "med-sba-018-a",
        "text": "Overnight Polysomnography (sleep study)",
        "is_correct": true
      },
      {
        "id": "med-sba-018-e",
        "text": "CT scan of the soft palate and mandible",
        "is_correct": false
      },
      {
        "id": "med-sba-018-c",
        "text": "24-hour ambulatory blood pressure monitoring alone",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-019",
    "stem": "A 40-year-old male with a history of recurrent childhood pneumonia presents with chronic daily production of copious purulent foul-smelling sputum. HRCT shows airway dilatation exceeding adjacent vessel caliber ('signet-ring sign').",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Respiratory",
    "programme": "mbchb",
    "explanation": "Bronchiectasis is irreversible bronchial dilatation confirmed on HRCT by the signet-ring sign (broncho-arterial ratio >1).",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-019-a",
        "text": "Bronchiectasis",
        "is_correct": true
      },
      {
        "id": "med-sba-019-b",
        "text": "Extrinsic allergic alveolitis",
        "is_correct": false
      },
      {
        "id": "med-sba-019-e",
        "text": "Pulmonary alveolar proteinosis",
        "is_correct": false
      },
      {
        "id": "med-sba-019-c",
        "text": "Centrilobular emphysema",
        "is_correct": false
      },
      {
        "id": "med-sba-019-d",
        "text": "Pneumocystis jirovecii pneumonia",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-020",
    "stem": "A 62-year-old male heavy smoker presents with facial swelling, distended neck veins without peripheral edema, and hyponatraemia due to SIADH. What is the most likely tumor histology?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Respiratory",
    "programme": "mbchb",
    "explanation": "Small cell lung cancer is a high-grade neuroendocrine tumor strongly linked to tobacco smoke, presenting with central airway invasion, SVC obstruction, and SIADH.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-020-a",
        "text": "Small Cell Lung Carcinoma (SCLC)",
        "is_correct": true
      },
      {
        "id": "med-sba-020-b",
        "text": "Squamous cell carcinoma of the lung",
        "is_correct": false
      },
      {
        "id": "med-sba-020-e",
        "text": "Bronchial carcinoid tumor",
        "is_correct": false
      },
      {
        "id": "med-sba-020-c",
        "text": "Pulmonary adenocarcinoma",
        "is_correct": false
      },
      {
        "id": "med-sba-020-d",
        "text": "Large cell neuroendocrine carcinoma",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-021",
    "stem": "A 65-year-old retired insulation worker presents with progressive dyspnoea and left-sided chest wall pain. Chest CT shows nodular pleural thickening and calcified pleural plaques. What is the etiology?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Respiratory",
    "programme": "mbchb",
    "explanation": "Asbestos fiber inhalation has a 30-40 year latency for developing pleural plaques and malignant pleural mesothelioma.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-021-a",
        "text": "Malignant Pleural Mesothelioma secondary to Asbestos exposure",
        "is_correct": true
      },
      {
        "id": "med-sba-021-b",
        "text": "Silicosis secondary to sandblasting silica dust",
        "is_correct": false
      },
      {
        "id": "med-sba-021-d",
        "text": "Coal worker's pneumoconiosis with progressive massive fibrosis",
        "is_correct": false
      },
      {
        "id": "med-sba-021-e",
        "text": "Byssinosis caused by cotton dust inhalation",
        "is_correct": false
      },
      {
        "id": "med-sba-021-c",
        "text": "Berylliosis secondary to electronics manufacturing",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-022",
    "stem": "A 28-year-old baker develops episodic wheezing, chest tightness, and rhinitis that improves on weekends and vacations. How is the diagnosis confirmed?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Respiratory",
    "programme": "mbchb",
    "explanation": "Occupational asthma is confirmed by demonstrating diurnal and work-related variability (>20%) on serial PEF charting across work and rest periods.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-022-d",
        "text": "Serum IgA level measurement",
        "is_correct": false
      },
      {
        "id": "med-sba-022-c",
        "text": "Chest radiograph showing hyperinflation",
        "is_correct": false
      },
      {
        "id": "med-sba-022-b",
        "text": "Single resting spirometry performed on a Sunday morning",
        "is_correct": false
      },
      {
        "id": "med-sba-022-e",
        "text": "Sweat chloride test",
        "is_correct": false
      },
      {
        "id": "med-sba-022-a",
        "text": "Serial Peak Expiratory Flow (PEF) charting at work compared to rest days",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-023",
    "stem": "A 56-year-old cirrhotic male presents with acute confusion, reversed sleep cycle, and asterixis following an upper gastrointestinal bleed. What is the first-line medical therapy?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Gastroenterology",
    "programme": "mbchb",
    "explanation": "Lactulose acidifies colonic contents converting ammonia to non-absorbable ammonium; Rifaximin eliminates ammoniagenic gut bacteria.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-023-a",
        "text": "Lactulose (titrated to 2-3 soft stools/day) plus Rifaximin",
        "is_correct": true
      },
      {
        "id": "med-sba-023-b",
        "text": "High-protein red meat dietary supplementation",
        "is_correct": false
      },
      {
        "id": "med-sba-023-d",
        "text": "Immediate total proctocolectomy",
        "is_correct": false
      },
      {
        "id": "med-sba-023-c",
        "text": "Sedation with oral lorazepam for agitation",
        "is_correct": false
      },
      {
        "id": "med-sba-023-e",
        "text": "Intravenous potassium chloride infusion bolus",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-024",
    "stem": "A cirrhotic patient with ascites presents with low-grade fever and mild diffuse abdominal tenderness. Paracentesis yields an ascitic fluid absolute neutrophil count of 380/uL. What is the diagnosis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Gastroenterology",
    "programme": "mbchb",
    "explanation": "Ascitic fluid neutrophil count >=250/uL is diagnostic of SBP; third-generation cephalosporins plus albumin reduce mortality and renal failure.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-024-a",
        "text": "Spontaneous Bacterial Peritonitis (SBP); treat with IV Cefotaxime and IV Albumin",
        "is_correct": true
      },
      {
        "id": "med-sba-024-b",
        "text": "Secondary bacterial peritonitis requiring immediate emergency laparotomy",
        "is_correct": false
      },
      {
        "id": "med-sba-024-c",
        "text": "Tuberculous peritonitis requiring 12 months of quadruple therapy",
        "is_correct": false
      },
      {
        "id": "med-sba-024-e",
        "text": "Malignant ascites requiring intraperitoneal chemotherapy",
        "is_correct": false
      },
      {
        "id": "med-sba-024-d",
        "text": "Chylous ascites requiring medium-chain triglyceride diet",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-025",
    "stem": "A 28-year-old woman presents with chronic diarrhoea, bloating, iron deficiency anaemia, and a blistering pruritic rash on her extensor elbows and knees. What serological test is most sensitive and specific?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Gastroenterology",
    "programme": "mbchb",
    "explanation": "IgA anti-tTG is the gold standard screening serology for coeliac disease; associated with dermatitis herpetiformis.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-025-a",
        "text": "IgA Tissue Transglutaminase (anti-tTG) antibody",
        "is_correct": true
      },
      {
        "id": "med-sba-025-b",
        "text": "Anti-nuclear antibody (ANA)",
        "is_correct": false
      },
      {
        "id": "med-sba-025-c",
        "text": "Anti-mitochondrial antibody (AMA)",
        "is_correct": false
      },
      {
        "id": "med-sba-025-d",
        "text": "Serum gastrin level",
        "is_correct": false
      },
      {
        "id": "med-sba-025-e",
        "text": "Anti-neutrophil cytoplasmic antibody (ANCA)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-026",
    "stem": "A 24-year-old male presents with right lower quadrant pain, weight loss, non-bloody diarrhoea, and perianal fistulae. Colonoscopy shows cobblestone mucosa and skip lesions. What is the diagnosis?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Gastroenterology",
    "programme": "mbchb",
    "explanation": "Crohn's disease causes transmural inflammation, skip lesions, perianal disease, and non-caseating granulomas anywhere along the GI tract.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-026-e",
        "text": "Infectious Amoebic Dysentery",
        "is_correct": false
      },
      {
        "id": "med-sba-026-d",
        "text": "Microscopic Colitis",
        "is_correct": false
      },
      {
        "id": "med-sba-026-c",
        "text": "Irritable Bowel Syndrome",
        "is_correct": false
      },
      {
        "id": "med-sba-026-a",
        "text": "Crohn's Disease",
        "is_correct": true
      },
      {
        "id": "med-sba-026-b",
        "text": "Ulcerative Colitis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-027",
    "stem": "A 19-year-old student presents with tremor, dysarthria, personality changes, elevated transaminases, and brown-green rings at the limbus of the cornea (Kayser-Fleischer rings). What is the defect?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Gastroenterology",
    "programme": "mbchb",
    "explanation": "Wilson's disease impairs copper excretion leading to toxic copper accumulation in the liver, basal ganglia, and cornea.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-027-c",
        "text": "Alpha-1 antitrypsin deficiency with PAS-positive liver inclusions",
        "is_correct": false
      },
      {
        "id": "med-sba-027-d",
        "text": "Autoimmune hepatitis with anti-LKM1 antibodies",
        "is_correct": false
      },
      {
        "id": "med-sba-027-e",
        "text": "Prion protein misfolding (Creutzfeldt-Jakob disease)",
        "is_correct": false
      },
      {
        "id": "med-sba-027-b",
        "text": "Autosomal dominant mutation in HFE causing iron overload",
        "is_correct": false
      },
      {
        "id": "med-sba-027-a",
        "text": "Autosomal recessive mutation in ATP7B impairing biliary copper excretion (Wilson's disease)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-028",
    "stem": "A 52-year-old male presents with bronze skin pigmentation, erectile dysfunction, diabetes mellitus, and hepatomegaly. Serum ferritin is 1,800 ng/mL with transferrin saturation 85%. What is the management?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Gastroenterology",
    "programme": "mbchb",
    "explanation": "Hereditary hemochromatosis causes systemic iron overload; regular therapeutic venesection prevents progression to cirrhosis and heart failure.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-028-a",
        "text": "Therapeutic phlebotomy (venesection) targeting serum ferritin 50-100 ng/mL",
        "is_correct": true
      },
      {
        "id": "med-sba-028-b",
        "text": "Oral iron supplementation with ascorbic acid",
        "is_correct": false
      },
      {
        "id": "med-sba-028-c",
        "text": "Immediate orthotopic liver transplantation",
        "is_correct": false
      },
      {
        "id": "med-sba-028-e",
        "text": "Bile acid sequestrant therapy",
        "is_correct": false
      },
      {
        "id": "med-sba-028-d",
        "text": "Systemic high-dose corticosteroid therapy",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-029",
    "stem": "A 72-year-old male with atrial fibrillation develops sudden severe periumbilical abdominal pain out of proportion to mild tenderness on physical examination. What is the emergency diagnosis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Gastroenterology",
    "programme": "mbchb",
    "explanation": "Severe pain out of proportion to physical signs in patients with vascular disease/AF is acute mesenteric ischaemia until proven otherwise.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-029-d",
        "text": "Irritable bowel syndrome flare",
        "is_correct": false
      },
      {
        "id": "med-sba-029-c",
        "text": "Acute uncomplicated diverticulitis",
        "is_correct": false
      },
      {
        "id": "med-sba-029-e",
        "text": "Chronic radiation enteritis",
        "is_correct": false
      },
      {
        "id": "med-sba-029-b",
        "text": "Perforated duodenal ulcer with board-like peritonitis",
        "is_correct": false
      },
      {
        "id": "med-sba-029-a",
        "text": "Acute Mesenteric Ischaemia (superior mesenteric artery embolus)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-030",
    "stem": "A 70-year-old female develops profuse watery foul-smelling diarrhoea, abdominal cramping, and leukocytosis 5 days after receiving IV Clindamycin. What is the first-line treatment?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Gastroenterology",
    "programme": "mbchb",
    "explanation": "Oral Vancomycin or Fidaxomicin are first-line for Clostridioides difficile colitis; antimotility agents (loperamide) are contraindicated.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-030-c",
        "text": "Intravenous Ampicillin and Gentamicin",
        "is_correct": false
      },
      {
        "id": "med-sba-030-e",
        "text": "Immediate total proctocolectomy",
        "is_correct": false
      },
      {
        "id": "med-sba-030-b",
        "text": "Oral Loperamide to halt diarrhoeal fluid loss",
        "is_correct": false
      },
      {
        "id": "med-sba-030-a",
        "text": "Oral Vancomycin (125 mg QDS) or oral Fidaxomicin (200 mg BD)",
        "is_correct": true
      },
      {
        "id": "med-sba-030-d",
        "text": "Oral Metronidazole alone as primary first line in all cases",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-031",
    "stem": "A 45-year-old obese, type 2 diabetic male has asymptomatic elevated ALT > AST and diffuse echogenicity on liver ultrasound. Other liver causes are excluded. What is the primary therapy?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Gastroenterology",
    "programme": "mbchb",
    "explanation": "Metabolic dysfunction-associated steatotic liver disease (MASLD) management centers on lifestyle changes, diet, and 7-10% weight loss.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-031-a",
        "text": "Lifestyle modification and structured weight loss of 7% to 10% of total body weight",
        "is_correct": true
      },
      {
        "id": "med-sba-031-b",
        "text": "High-dose oral systemic corticosteroids for 1 year",
        "is_correct": false
      },
      {
        "id": "med-sba-031-c",
        "text": "Routine weekly therapeutic phlebotomy",
        "is_correct": false
      },
      {
        "id": "med-sba-031-d",
        "text": "Immediate open surgical wedge liver biopsy",
        "is_correct": false
      },
      {
        "id": "med-sba-031-e",
        "text": "High-dose oral paracetamol therapy",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-032",
    "stem": "A 55-year-old male with longstanding heartburn undergoes endoscopy showing salmon-pink tongues extending 4 cm into the distal oesophagus with intestinal metaplasia. What is the condition?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Gastroenterology",
    "programme": "mbchb",
    "explanation": "Barrett's oesophagus represents intestinal metaplasia replacing normal squamous mucosa in chronic reflux, predisposing to adenocarcinoma.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-032-a",
        "text": "Barrett's Oesophagus; premalignant for oesophageal adenocarcinoma",
        "is_correct": true
      },
      {
        "id": "med-sba-032-b",
        "text": "Squamous cell papilloma with zero malignant potential",
        "is_correct": false
      },
      {
        "id": "med-sba-032-c",
        "text": "Oesophageal candidiasis requiring oral fluconazole",
        "is_correct": false
      },
      {
        "id": "med-sba-032-d",
        "text": "Achalasia cardia requiring laparoscopic myotomy",
        "is_correct": false
      },
      {
        "id": "med-sba-032-e",
        "text": "Mallory-Weiss mucosal tear",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-033",
    "stem": "A 50-year-old female presents with persistent generalized pruritus without jaundice and elevated alkaline phosphatase. Anti-Mitochondrial Antibodies (AMA M2) are positive. What is the diagnosis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Gastroenterology",
    "programme": "mbchb",
    "explanation": "PBC is an autoimmune granulomatous destruction of interlobular bile ducts with positive AMA in >95%; UDCA delays histological progression.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-033-e",
        "text": "Wilson's disease treated with penicillamine",
        "is_correct": false
      },
      {
        "id": "med-sba-033-d",
        "text": "Hepatitis C infection requiring antiviral therapy",
        "is_correct": false
      },
      {
        "id": "med-sba-033-c",
        "text": "Autoimmune hepatitis type 1 treated with azathioprine",
        "is_correct": false
      },
      {
        "id": "med-sba-033-b",
        "text": "Primary Sclerosing Cholangitis associated with ulcerative colitis",
        "is_correct": false
      },
      {
        "id": "med-sba-033-a",
        "text": "Primary Biliary Cholangitis (PBC); treated with Ursodeoxycholic Acid (UDCA)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-034",
    "stem": "A 32-year-old woman presents with severe generalized edema, heavy proteinuria (6.5 g/24h), and serum albumin 18 g/L. What is the defining diagnostic constellation?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Nephrology",
    "programme": "mbchb",
    "explanation": "Nephrotic syndrome is defined by heavy proteinuria (>3.5 g/24h), severe hypoalbuminemia (<30 g/L), and peripheral edema.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-034-a",
        "text": "Nephrotic Syndrome (proteinuria >3.5 g/24h, hypoalbuminaemia <30 g/L, and edema)",
        "is_correct": true
      },
      {
        "id": "med-sba-034-b",
        "text": "Nephritic syndrome with active hematuria and red cell casts",
        "is_correct": false
      },
      {
        "id": "med-sba-034-c",
        "text": "Acute pyelonephritis with costovertebral tenderness",
        "is_correct": false
      },
      {
        "id": "med-sba-034-e",
        "text": "Primary hyperaldosteronism with hypokalaemia",
        "is_correct": false
      },
      {
        "id": "med-sba-034-d",
        "text": "Congestive heart failure with transudative fluid retention",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-035",
    "stem": "A 10-year-old boy presents with smoky brown urine, periorbital edema, oliguria, and hypertension 2 weeks after untreated streptococcal impetigo. What is the classic complement profile?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Nephrology",
    "programme": "mbchb",
    "explanation": "PSGN activates the alternative complement pathway, causing transient profound depression of serum C3 complement, normalizing by 6-8 weeks.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-035-a",
        "text": "Low serum C3 complement with normal or mildly reduced C4 (Post-Streptococcal Glomerulonephritis)",
        "is_correct": true
      },
      {
        "id": "med-sba-035-b",
        "text": "Markedly elevated serum C3 and C4 complement levels",
        "is_correct": false
      },
      {
        "id": "med-sba-035-e",
        "text": "Isolated elevation of complement factor H",
        "is_correct": false
      },
      {
        "id": "med-sba-035-d",
        "text": "Normal complement profile in all patients",
        "is_correct": false
      },
      {
        "id": "med-sba-035-c",
        "text": "Profound deficiency of C1 esterase inhibitor",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-036",
    "stem": "A patient with CKD stage 5 has serum potassium 7.2 mmol/L. ECG shows tall peaked T waves, absent P waves, and widened QRS. What is the immediate first-line drug?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Nephrology",
    "programme": "mbchb",
    "explanation": "IV Calcium Gluconate immediately antagonizes the cardiotoxic effects of hyperkalemia on cardiac myocytes; it does not alter serum K+.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-036-a",
        "text": "Intravenous 10% Calcium Gluconate (10 mL over 2-5 minutes)",
        "is_correct": true
      },
      {
        "id": "med-sba-036-d",
        "text": "Immediate hemodialysis without pharmacological stabilization",
        "is_correct": false
      },
      {
        "id": "med-sba-036-e",
        "text": "Subcutaneous insulin without dextrose",
        "is_correct": false
      },
      {
        "id": "med-sba-036-b",
        "text": "Intravenous Furosemide 80 mg bolus alone",
        "is_correct": false
      },
      {
        "id": "med-sba-036-c",
        "text": "Oral sodium polystyrene sulfonate resin alone",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-037",
    "stem": "A 42-year-old male presents with bilateral palpable flank masses, hypertension, and recurrent hematuria. His father required dialysis at age 50. What extra-renal complication requires vigilance?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Nephrology",
    "programme": "mbchb",
    "explanation": "ADPKD (PKD1/PKD2 mutations) is associated with intracranial berry aneurysms (up to 10-12%), carrying risk of subarachnoid hemorrhage.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-037-d",
        "text": "Medullary thyroid carcinoma and pheochromocytoma",
        "is_correct": false
      },
      {
        "id": "med-sba-037-c",
        "text": "Pulmonary arteriovenous fistulas in all lobes",
        "is_correct": false
      },
      {
        "id": "med-sba-037-e",
        "text": "Sertoli-Leydig cell tumors of the testis",
        "is_correct": false
      },
      {
        "id": "med-sba-037-b",
        "text": "Bilateral optic nerve colobomas",
        "is_correct": false
      },
      {
        "id": "med-sba-037-a",
        "text": "Intracranial saccular (berry) aneurysms of the Circle of Willis",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-038",
    "stem": "A 4-year-old child presents with sudden facial swelling, massive proteinuria, and hypoalbuminaemia. Light microscopy of renal biopsy is normal, but electron microscopy shows podocyte foot process effacement.",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Nephrology",
    "programme": "mbchb",
    "explanation": "Minimal change disease is the commonest cause of nephrotic syndrome in children; foot process effacement on EM; >90% respond to corticosteroids.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-038-b",
        "text": "Focal Segmental Glomerulosclerosis requiring immediate calcineurin inhibitors",
        "is_correct": false
      },
      {
        "id": "med-sba-038-a",
        "text": "Minimal Change Disease; treated first-line with oral Corticosteroids (Prednisolone)",
        "is_correct": true
      },
      {
        "id": "med-sba-038-d",
        "text": "IgA nephropathy with mesangial proliferation",
        "is_correct": false
      },
      {
        "id": "med-sba-038-c",
        "text": "Membranous nephropathy with subepithelial deposits",
        "is_correct": false
      },
      {
        "id": "med-sba-038-e",
        "text": "Alport syndrome with split glomerular basement membrane",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-039",
    "stem": "A 25-year-old male presents with haemoptysis, acute glomerulonephritis, and linear IgG staining along the glomerular basement membrane on immunofluorescence. What is the diagnosis?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Internal Medicine",
    "section": "Nephrology",
    "programme": "mbchb",
    "explanation": "Goodpasture syndrome causes pulmonary haemorrhage and crescentic glomerulonephritis with linear anti-alpha-3(IV) collagen antibodies.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-039-d",
        "text": "Lupus nephritis class IV (diffuse proliferative)",
        "is_correct": false
      },
      {
        "id": "med-sba-039-a",
        "text": "Anti-GBM Disease (Goodpasture Syndrome)",
        "is_correct": true
      },
      {
        "id": "med-sba-039-b",
        "text": "Granulomatosis with polyangiitis (c-ANCA positive)",
        "is_correct": false
      },
      {
        "id": "med-sba-039-e",
        "text": "Post-streptococcal glomerulonephritis with granular subepithelial humps",
        "is_correct": false
      },
      {
        "id": "med-sba-039-c",
        "text": "Microscopic polyangiitis (p-ANCA positive)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-040",
    "stem": "A 35-year-old female presents with hyperchloraemic normal anion-gap metabolic acidosis, hypokalaemia, nephrocalcinosis, and inability to acidify urine below pH 5.5. What is the diagnosis?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Internal Medicine",
    "section": "Nephrology",
    "programme": "mbchb",
    "explanation": "Type 1 (distal) RTA is caused by impaired alpha-intercalated cell H+ secretion, causing alkaline urine (pH >5.5) despite systemic metabolic acidosis.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-040-d",
        "text": "Diabetic ketoacidosis with high anion gap",
        "is_correct": false
      },
      {
        "id": "med-sba-040-a",
        "text": "Distal Renal Tubular Acidosis (Type 1 RTA)",
        "is_correct": true
      },
      {
        "id": "med-sba-040-b",
        "text": "Proximal Renal Tubular Acidosis (Type 2 RTA)",
        "is_correct": false
      },
      {
        "id": "med-sba-040-c",
        "text": "Hyperkalaemic Renal Tubular Acidosis (Type 4 RTA)",
        "is_correct": false
      },
      {
        "id": "med-sba-040-e",
        "text": "Lactic acidosis secondary to circulatory collapse",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-041",
    "stem": "An 80-year-old dehydrated male taking lisinopril and naproxen develops acute kidney injury. FeNa is <1% with urine osmolality >500 mOsm/kg. What is the mechanism?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Nephrology",
    "programme": "mbchb",
    "explanation": "NSAIDs block vasodilatory prostaglandins (constricting afferent arteriole); ACE inhibitors prevent efferent arteriolar constriction, collapsing GFR.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-041-a",
        "text": "Pre-renal azotaemia (NSAID afferent arteriolar constriction + ACEi efferent arteriolar dilatation)",
        "is_correct": true
      },
      {
        "id": "med-sba-041-b",
        "text": "Acute tubular necrosis with extensive muddy brown granular casts",
        "is_correct": false
      },
      {
        "id": "med-sba-041-c",
        "text": "Post-renal acute urinary tract obstruction by benign prostatic hyperplasia",
        "is_correct": false
      },
      {
        "id": "med-sba-041-e",
        "text": "Renal vein thrombosis",
        "is_correct": false
      },
      {
        "id": "med-sba-041-d",
        "text": "Rapidly progressive crescentic glomerulonephritis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-042",
    "stem": "A patient with stage 4 CKD develops secondary hyperparathyroidism. What is the initial biochemical trigger?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Nephrology",
    "programme": "mbchb",
    "explanation": "Falling GFR causes phosphate retention and decreased active 1,25(OH)2D3 (calcitriol), stimulating parathyroid hyperplasia and elevated PTH.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-042-d",
        "text": "Excessive intestinal calcium absorption driven by calcitriol",
        "is_correct": false
      },
      {
        "id": "med-sba-042-c",
        "text": "Excessive urinary excretion of phosphate causing hypophosphataemia",
        "is_correct": false
      },
      {
        "id": "med-sba-042-e",
        "text": "Adrenal cortex destruction causing mineralocorticoid deficiency",
        "is_correct": false
      },
      {
        "id": "med-sba-042-b",
        "text": "Primary parathyroid chief cell adenoma autonomous hypersecretion",
        "is_correct": false
      },
      {
        "id": "med-sba-042-a",
        "text": "Phosphate retention and impaired renal 1-alpha-hydroxylation of Vitamin D leading to hypocalcaemia",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-043",
    "stem": "A 22-year-old male presents with recurrent episodes of gross visible haematuria occurring 1 to 2 days after upper respiratory tract infections ('synpharyngitic haematuria'). Renal biopsy shows mesangial IgA deposition.",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Nephrology",
    "programme": "mbchb",
    "explanation": "IgA nephropathy typically presents with synpharyngitic hematuria (within 24-48 hours of infection), unlike PSGN which has a 1-3 week latency.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-043-b",
        "text": "Post-Streptococcal Glomerulonephritis with 2-week latent period",
        "is_correct": false
      },
      {
        "id": "med-sba-043-a",
        "text": "IgA Nephropathy (Berger's Disease)",
        "is_correct": true
      },
      {
        "id": "med-sba-043-c",
        "text": "Alport syndrome with high-frequency sensorineural hearing loss",
        "is_correct": false
      },
      {
        "id": "med-sba-043-e",
        "text": "Henoch-Schönlein purpura without skin rash",
        "is_correct": false
      },
      {
        "id": "med-sba-043-d",
        "text": "Membranoproliferative glomerulonephritis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-044",
    "stem": "Which of the following is an absolute indication for emergency renal replacement therapy (haemodialysis) in acute kidney injury?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Nephrology",
    "programme": "mbchb",
    "explanation": "AEIOU indications for acute dialysis: Acidosis (refractory), Electrolytes (refractory hyperkalemia), Ingestion (toxins), Overload (pulmonary edema), Uremia (pericarditis/encephalopathy).",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-044-c",
        "text": "Isolated mild proteinuria (0.5 g/24h) without fluid overload",
        "is_correct": false
      },
      {
        "id": "med-sba-044-d",
        "text": "Serum urea of 12 mmol/L with normal acid-base balance",
        "is_correct": false
      },
      {
        "id": "med-sba-044-b",
        "text": "Asymptomatic mild serum creatinine elevation from 80 to 140 umol/L",
        "is_correct": false
      },
      {
        "id": "med-sba-044-a",
        "text": "Refractory hyperkalaemia (>6.5 mmol/L) with ECG changes unresponsive to medical therapy",
        "is_correct": true
      },
      {
        "id": "med-sba-044-e",
        "text": "Mild peripheral pedal edema responsive to 20 mg oral furosemide",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-045",
    "stem": "A 36-year-old woman presents with severe fatigue, orthostatic hypotension, weight loss, salt craving, hyperpigmentation of palmar creases, K+ 5.8 mmol/L, and Na+ 128 mmol/L. What is the definitive test?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Endocrinology",
    "programme": "mbchb",
    "explanation": "Primary adrenal insufficiency (Addison's disease) is confirmed by failure of serum cortisol to rise appropriately after synthetic ACTH injection.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-045-c",
        "text": "Oral glucose tolerance test with serum insulin",
        "is_correct": false
      },
      {
        "id": "med-sba-045-b",
        "text": "Overnight 1 mg dexamethasone suppression test",
        "is_correct": false
      },
      {
        "id": "med-sba-045-a",
        "text": "Short Synacthen (cosyntropin) ACTH stimulation test",
        "is_correct": true
      },
      {
        "id": "med-sba-045-e",
        "text": "Thyroid-stimulating hormone (TSH) level alone",
        "is_correct": false
      },
      {
        "id": "med-sba-045-d",
        "text": "24-hour urinary free cortisol measurement",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-046",
    "stem": "A 30-year-old woman presents with weight loss despite increased appetite, heat intolerance, diffuse goitre with an audible bruit, exophthalmos, and pretibial myxoedema. What is the etiology?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Endocrinology",
    "programme": "mbchb",
    "explanation": "Graves' disease is an autoimmune condition driven by thyroid-stimulating antibodies against the TSH receptor.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-046-b",
        "text": "Toxic multinodular goitre with autonomous hyperfunctioning adenomas",
        "is_correct": false
      },
      {
        "id": "med-sba-046-a",
        "text": "Graves' Disease caused by Thyroid-Stimulating Immunoglobulin (TSH-receptor autoantibodies)",
        "is_correct": true
      },
      {
        "id": "med-sba-046-c",
        "text": "Subacute granulomatous (de Quervain) thyroiditis",
        "is_correct": false
      },
      {
        "id": "med-sba-046-e",
        "text": "Pituitary TSH-secreting neuroendocrine adenoma",
        "is_correct": false
      },
      {
        "id": "med-sba-046-d",
        "text": "Hashimoto's thyroiditis in early destructive phase",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-047",
    "stem": "A 58-year-old woman presents with recurrent calcium nephrolithiasis, generalized bone aches, abdominal pain from peptic ulcers, and depression ('bones, stones, abdominal groans, psychic moans'). Serum calcium is 2.85 mmol/L with high intact PTH.",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Endocrinology",
    "programme": "mbchb",
    "explanation": "Primary hyperparathyroidism features elevated calcium with inappropriately elevated/non-suppressed intact PTH, commonly cured by adenoma excision.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-047-c",
        "text": "Humoral hypercalcaemia of malignancy driven by PTHrP",
        "is_correct": false
      },
      {
        "id": "med-sba-047-b",
        "text": "Secondary hyperparathyroidism secondary to chronic kidney disease",
        "is_correct": false
      },
      {
        "id": "med-sba-047-e",
        "text": "Vitamin D intoxication",
        "is_correct": false
      },
      {
        "id": "med-sba-047-d",
        "text": "Familial hypocalciuric hypercalcaemia (FHH)",
        "is_correct": false
      },
      {
        "id": "med-sba-047-a",
        "text": "Primary Hyperparathyroidism most commonly due to a solitary parathyroid adenoma (85%)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-048",
    "stem": "A 38-year-old woman presents with central obesity, moon facies, buffalo hump, purple abdominal striae, and proximal muscle weakness. What initial screening test confirms hypercortisolism?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Endocrinology",
    "programme": "mbchb",
    "explanation": "Hypercortisolemia is screened by overnight 1 mg dexamethasone suppression, 24-h urinary free cortisol, or late-night salivary cortisol.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-048-b",
        "text": "Single morning serum cortisol measurement at 9:00 AM",
        "is_correct": false
      },
      {
        "id": "med-sba-048-c",
        "text": "Random spot urine cortisol dipstick testing",
        "is_correct": false
      },
      {
        "id": "med-sba-048-a",
        "text": "24-hour urinary free cortisol, late-night salivary cortisol, or 1 mg overnight dexamethasone suppression test",
        "is_correct": true
      },
      {
        "id": "med-sba-048-e",
        "text": "Short Synacthen stimulation test",
        "is_correct": false
      },
      {
        "id": "med-sba-048-d",
        "text": "Serum aldosterone-to-renin ratio",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-049",
    "stem": "A 44-year-old male presents with episodic pounding headaches, profuse diaphoresis, palpitations, and severe hypertension (BP 210/120 mmHg). What is the mandatory pharmacological sequence prior to surgery?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Endocrinology",
    "programme": "mbchb",
    "explanation": "In pheochromocytoma, beta-blockade before alpha-blockade leaves alpha receptors unopposed, precipitating catastrophic hypertensive crises.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-049-e",
        "text": "Bilateral renal denervation",
        "is_correct": false
      },
      {
        "id": "med-sba-049-b",
        "text": "Beta-blocker monotherapy (Propranolol) first without alpha blockade",
        "is_correct": false
      },
      {
        "id": "med-sba-049-d",
        "text": "High-dose intravenous loop diuretics and dietary sodium restriction",
        "is_correct": false
      },
      {
        "id": "med-sba-049-a",
        "text": "Alpha-adrenergic blockade (e.g., Phenoxybenzamine) first, followed by Beta-blocker initiation after adequate alpha blockade",
        "is_correct": true
      },
      {
        "id": "med-sba-049-c",
        "text": "Immediate laparoscopic adrenalectomy without medical preparation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-050",
    "stem": "A 45-year-old female presents with lethargy, cold intolerance, weight gain, constipation, dry skin, and a non-tender goitre. TSH is 18 mIU/L with low free T4 and high anti-TPO antibodies.",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Endocrinology",
    "programme": "mbchb",
    "explanation": "Hashimoto's thyroiditis is autoimmune chronic lymphocytic thyroiditis; anti-TPO antibodies are positive; managed with levothyroxine.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-050-e",
        "text": "Euthyroid sick syndrome in critical illness",
        "is_correct": false
      },
      {
        "id": "med-sba-050-d",
        "text": "Riedel's invasive fibrous thyroiditis",
        "is_correct": false
      },
      {
        "id": "med-sba-050-b",
        "text": "Graves' disease treated with carbimazole and radioiodine",
        "is_correct": false
      },
      {
        "id": "med-sba-050-c",
        "text": "Subacute de Quervain thyroiditis treated with NSAIDs",
        "is_correct": false
      },
      {
        "id": "med-sba-050-a",
        "text": "Hashimoto's Thyroiditis; treated with lifelong oral Levothyroxine replacement",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-051",
    "stem": "A 68-year-old male with small cell lung cancer has asymptomatic hyponatraemia (Na+ 122 mmol/L), serum osmolality 250 mOsm/kg, urine osmolality 450 mOsm/kg, and urine sodium 45 mmol/L in a euvolaemic state.",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Endocrinology",
    "programme": "mbchb",
    "explanation": "SIADH causes euvolemic hyponatremia with concentrated urine (urine osm > serum osm); fluid restriction (500-1000 mL/day) is initial therapy.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-051-a",
        "text": "Syndrome of Inappropriate Antidiuretic Hormone (SIADH); manage with fluid restriction",
        "is_correct": true
      },
      {
        "id": "med-sba-051-b",
        "text": "Hypovolaemic hyponatraemia managed with rapid 3-litre normal saline infusion",
        "is_correct": false
      },
      {
        "id": "med-sba-051-e",
        "text": "Primary psychogenic polydipsia managed with salt tablets",
        "is_correct": false
      },
      {
        "id": "med-sba-051-c",
        "text": "Cerebral salt wasting treated with fluid restriction alone",
        "is_correct": false
      },
      {
        "id": "med-sba-051-d",
        "text": "Central diabetes insipidus managed with desmopressin",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-052",
    "stem": "In severe chronic hyponatraemia, what is the maximum recommended rate of sodium correction over the first 24 hours to prevent osmotic demyelination syndrome?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Internal Medicine",
    "section": "Endocrinology",
    "programme": "mbchb",
    "explanation": "Overly rapid correction of chronic hyponatremia (>10 mmol/L/day) risks fatal osmotic demyelination (central pontine myelinolysis).",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-052-e",
        "text": "Complete water deprivation with no sodium monitoring",
        "is_correct": false
      },
      {
        "id": "med-sba-052-d",
        "text": "Sodium correction is unnecessary because chronic hyponatraemia carries zero risk",
        "is_correct": false
      },
      {
        "id": "med-sba-052-c",
        "text": "Rapid correction to 145 mmol/L within 6 hours using 3% saline",
        "is_correct": false
      },
      {
        "id": "med-sba-052-b",
        "text": "At least 20 to 25 mmol/L in 24 hours to rapidly normalize sodium",
        "is_correct": false
      },
      {
        "id": "med-sba-052-a",
        "text": "No more than 8 to 10 mmol/L in 24 hours (or <=6-8 mmol/L in high-risk patients)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-053",
    "stem": "A 40-year-old male presents with persistent hypertension and spontaneous hypokalaemia (K+ 2.8 mmol/L). Aldosterone-to-renin ratio (ARR) is markedly elevated. What is the diagnosis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Endocrinology",
    "programme": "mbchb",
    "explanation": "Conn's syndrome features autonomous aldosterone secretion with suppressed renin, producing hypertension and hypokalemia; screened by ARR.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-053-d",
        "text": "Liddle syndrome with pseudoaldosteronism",
        "is_correct": false
      },
      {
        "id": "med-sba-053-b",
        "text": "Renal artery stenosis with elevated plasma renin activity",
        "is_correct": false
      },
      {
        "id": "med-sba-053-a",
        "text": "Primary Hyperaldosteronism (Conn's Syndrome / bilateral adrenal hyperplasia)",
        "is_correct": true
      },
      {
        "id": "med-sba-053-e",
        "text": "Gitelman syndrome with metabolic alkalosis",
        "is_correct": false
      },
      {
        "id": "med-sba-053-c",
        "text": "Cushing's syndrome secondary to pituitary microadenoma",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-054",
    "stem": "A 28-year-old male with Type 1 Diabetes presents with vomiting, abdominal pain, deep rapid respirations, blood glucose 26 mmol/L, pH 7.18, and urine ketones 4+. What is the immediate first step?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Endocrinology",
    "programme": "mbchb",
    "explanation": "Fluid resuscitation with isotonic saline precedes or accompanies insulin in DKA to restore intravascular volume and tissue perfusion.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-054-c",
        "text": "Intravenous bolus of sodium bicarbonate 8.4%",
        "is_correct": false
      },
      {
        "id": "med-sba-054-d",
        "text": "Immediate subcutaneous ultra-long-acting insulin injection",
        "is_correct": false
      },
      {
        "id": "med-sba-054-e",
        "text": "High-dose intravenous potassium chloride bolus without fluids",
        "is_correct": false
      },
      {
        "id": "med-sba-054-b",
        "text": "Rapid intravenous push of 50 units short-acting insulin",
        "is_correct": false
      },
      {
        "id": "med-sba-054-a",
        "text": "Intravenous fluid expansion with 0.9% normal saline (1 litre in the first hour)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-055",
    "stem": "A 35-year-old woman presents with amenorrhoea, galactorrhoea, and bitemporal hemianopia. Serum prolactin is 4,500 mIU/L. MRI confirms a 15 mm pituitary macroadenoma. What is first-line treatment?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Endocrinology",
    "programme": "mbchb",
    "explanation": "Prolactinomas are uniquely responsive to medical therapy with dopamine agonists (Cabergoline), which shrink the tumor and normalize prolactin in >80-90%.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-055-d",
        "text": "Lifelong high-dose systemic corticosteroids",
        "is_correct": false
      },
      {
        "id": "med-sba-055-e",
        "text": "Bilateral prophylactic oophorectomy",
        "is_correct": false
      },
      {
        "id": "med-sba-055-c",
        "text": "Whole-brain stereotactic radiation therapy",
        "is_correct": false
      },
      {
        "id": "med-sba-055-b",
        "text": "Immediate emergency transsphenoidal surgical resection as first line in all prolactinomas",
        "is_correct": false
      },
      {
        "id": "med-sba-055-a",
        "text": "Dopamine D2-receptor agonist (Cabergoline or Bromocriptine)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-056",
    "stem": "A 32-year-old woman presents with fatigue, microcytic hypochromic anaemia (Hb 8.0 g/dL, MCV 68 fL), and serum ferritin 5 ng/mL. What is the diagnosis?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Haematology",
    "programme": "mbchb",
    "explanation": "Serum ferritin <15 ng/mL is diagnostic of depleted iron stores; oral ferrous sulfate and investigating underlying blood loss are mandatory.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-056-d",
        "text": "Sideroblastic anaemia; treat with pyridoxine monotherapy",
        "is_correct": false
      },
      {
        "id": "med-sba-056-c",
        "text": "Anaemia of chronic disease; treat with erythropoietin injections",
        "is_correct": false
      },
      {
        "id": "med-sba-056-e",
        "text": "Aplastic anaemia; arrange urgent bone marrow transplantation",
        "is_correct": false
      },
      {
        "id": "med-sba-056-b",
        "text": "Beta-thalassaemia trait; treat with repeated blood transfusions",
        "is_correct": false
      },
      {
        "id": "med-sba-056-a",
        "text": "Iron Deficiency Anaemia; identify the blood loss source and administer oral iron therapy",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-057",
    "stem": "A 68-year-old male presents with macrocytic anaemia (MCV 112 fL), sensory ataxia, loss of vibration and position sense, and positive anti-intrinsic factor antibodies. What is the management?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Haematology",
    "programme": "mbchb",
    "explanation": "Pernicious anemia causes B12 deficiency; treating with folic acid alone corrects anemia while allowing subacute combined spinal cord degeneration to progress.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-057-c",
        "text": "Therapeutic venesection every 2 weeks",
        "is_correct": false
      },
      {
        "id": "med-sba-057-d",
        "text": "Multiple myeloma induction chemotherapy",
        "is_correct": false
      },
      {
        "id": "med-sba-057-b",
        "text": "High-dose oral folic acid monotherapy alone",
        "is_correct": false
      },
      {
        "id": "med-sba-057-a",
        "text": "Lifelong intramuscular Vitamin B12 (hydroxocobalamin) replacement",
        "is_correct": true
      },
      {
        "id": "med-sba-057-e",
        "text": "Oral iron supplementation alone",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-058",
    "stem": "A 25-year-old female presents with petechiae, severe thrombocytopenia (platelets 12,000/uL), microangiopathic hemolytic anaemia with schistocytes, and confusion. Coagulation profile (PT, aPTT) is normal. What is the treatment?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Internal Medicine",
    "section": "Haematology",
    "programme": "mbchb",
    "explanation": "Thrombotic Thrombocytopenic Purpura (ADAMTS13 deficiency) is a medical emergency requiring urgent plasma exchange; platelet transfusions worsen microthrombosis and are contraindicated.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-058-a",
        "text": "Emergency Plasma Exchange (plasmapheresis) and systemic Corticosteroids for TTP",
        "is_correct": true
      },
      {
        "id": "med-sba-058-d",
        "text": "Oral aspirin and clopidogrel therapy",
        "is_correct": false
      },
      {
        "id": "med-sba-058-e",
        "text": "Observation without active intervention",
        "is_correct": false
      },
      {
        "id": "med-sba-058-b",
        "text": "Platelet transfusion bolus of 6 adult units immediately",
        "is_correct": false
      },
      {
        "id": "med-sba-058-c",
        "text": "Intravenous heparin infusion for disseminated intravascular coagulation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-059",
    "stem": "A 70-year-old male is noted to have an incidental isolated lymphocytosis of 42,000/uL with mature lymphocytes and 'smudge' cells on blood film. He has no lymphadenopathy or cytopenias (Binet Stage A). What is the management?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Haematology",
    "programme": "mbchb",
    "explanation": "Early-stage asymptomatic Chronic Lymphocytic Leukaemia (Binet A) does not benefit from early chemotherapy; watch-and-wait is standard.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-059-a",
        "text": "Watchful waiting / observation without active chemotherapy",
        "is_correct": true
      },
      {
        "id": "med-sba-059-b",
        "text": "Immediate intensive induction chemotherapy with fludarabine and cyclophosphamide",
        "is_correct": false
      },
      {
        "id": "med-sba-059-d",
        "text": "Emergency allogeneic stem cell transplantation",
        "is_correct": false
      },
      {
        "id": "med-sba-059-c",
        "text": "Immediate total body irradiation",
        "is_correct": false
      },
      {
        "id": "med-sba-059-e",
        "text": "Lifelong broad-spectrum intravenous antibiotic therapy",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-060",
    "stem": "A 52-year-old male with massive splenomegaly and WBC 120,000/uL has the t(9;22) translocation forming the BCR-ABL1 fusion gene. What is the targeted first-line therapy?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Haematology",
    "programme": "mbchb",
    "explanation": "Imatinib selectively inhibits the BCR-ABL1 oncoprotein tyrosine kinase in Chronic Myeloid Leukaemia, inducing deep molecular remissions.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-060-d",
        "text": "High-dose pulsed systemic corticosteroids alone",
        "is_correct": false
      },
      {
        "id": "med-sba-060-c",
        "text": "Immediate splenectomy as primary curative modality",
        "is_correct": false
      },
      {
        "id": "med-sba-060-b",
        "text": "Whole-brain cranial irradiation",
        "is_correct": false
      },
      {
        "id": "med-sba-060-a",
        "text": "Tyrosine Kinase Inhibitor (e.g., Imatinib, Dasatinib, or Nilotinib)",
        "is_correct": true
      },
      {
        "id": "med-sba-060-e",
        "text": "Autologous bone marrow transplantation without TKI",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-061",
    "stem": "A 66-year-old male presents with back pain, pathological fractures, hypercalcaemia, renal failure, and an IgG paraprotein spike on electrophoresis. Bone marrow shows 35% clonal plasma cells.",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Haematology",
    "programme": "mbchb",
    "explanation": "Multiple myeloma is defined by clonal marrow plasma cells >=10% plus CRAB end-organ damage; treated with proteasome inhibitors and immunomodulators.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-061-a",
        "text": "Multiple Myeloma (CRAB criteria: hyperCalcaemia, Renal failure, Anaemia, Bone lesions)",
        "is_correct": true
      },
      {
        "id": "med-sba-061-b",
        "text": "Monoclonal Gammopathy of Undetermined Significance (MGUS)",
        "is_correct": false
      },
      {
        "id": "med-sba-061-c",
        "text": "Waldenström's Macroglobulinaemia with IgM monoclonal band",
        "is_correct": false
      },
      {
        "id": "med-sba-061-d",
        "text": "Primary hyperparathyroidism with solitary adenoma",
        "is_correct": false
      },
      {
        "id": "med-sba-061-e",
        "text": "Osteoporosis with compression fracture",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-062",
    "stem": "A 22-year-old male with Sickle Cell Anaemia presents with fever, chest pain, tachypnoea, hypoxia, and a new pulmonary consolidation on chest X-ray. What is the diagnosis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Haematology",
    "programme": "mbchb",
    "explanation": "Acute chest syndrome is a life-threatening complication of sickle cell disease requiring prompt respiratory support, empiric antibiotics, and simple/exchange transfusion.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-062-e",
        "text": "Congestive heart failure requiring high-dose diuretics",
        "is_correct": false
      },
      {
        "id": "med-sba-062-b",
        "text": "Simple viral bronchitis requiring rest alone",
        "is_correct": false
      },
      {
        "id": "med-sba-062-c",
        "text": "Spontaneous tension pneumothorax requiring needle thoracostomy",
        "is_correct": false
      },
      {
        "id": "med-sba-062-d",
        "text": "Pulmonary contusion managed without fluids",
        "is_correct": false
      },
      {
        "id": "med-sba-062-a",
        "text": "Acute Chest Syndrome; managed with oxygen, analgesia, antibiotics, and blood transfusion",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-063",
    "stem": "An 8-year-old boy presents with painful hemarthrosis of the right knee after minor trauma. Laboratory testing shows normal platelet count, normal PT, and isolated prolonged aPTT with Factor VIII deficiency.",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Haematology",
    "programme": "mbchb",
    "explanation": "Haemophilia A is an X-linked recessive bleeding disorder caused by Factor VIII deficiency, presenting with hemarthroses and prolonged aPTT.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-063-b",
        "text": "Haemophilia B (Factor IX deficiency)",
        "is_correct": false
      },
      {
        "id": "med-sba-063-d",
        "text": "Immune thrombocytopenic purpura",
        "is_correct": false
      },
      {
        "id": "med-sba-063-a",
        "text": "Haemophilia A (X-linked recessive Factor VIII deficiency)",
        "is_correct": true
      },
      {
        "id": "med-sba-063-c",
        "text": "Von Willebrand disease type 1",
        "is_correct": false
      },
      {
        "id": "med-sba-063-e",
        "text": "Factor V Leiden thrombophilia",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-064",
    "stem": "A 28-year-old woman presents with painless cervical lymphadenopathy, drenching night sweats, and weight loss. Lymph node biopsy demonstrates binucleate Reed-Sternberg cells with prominent nucleoli.",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Haematology",
    "programme": "mbchb",
    "explanation": "Reed-Sternberg cells are diagnostic of Hodgkin lymphoma; Ann Arbor staging guides multi-agent chemotherapy (ABVD) with excellent cure rates.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-064-a",
        "text": "Hodgkin Lymphoma; treated with ABVD chemotherapy",
        "is_correct": true
      },
      {
        "id": "med-sba-064-b",
        "text": "Diffuse large B-cell lymphoma treated with R-CHOP",
        "is_correct": false
      },
      {
        "id": "med-sba-064-e",
        "text": "Cat scratch disease (Bartonella henselae)",
        "is_correct": false
      },
      {
        "id": "med-sba-064-c",
        "text": "Follicular non-Hodgkin lymphoma managed by observation",
        "is_correct": false
      },
      {
        "id": "med-sba-064-d",
        "text": "Tuberculous lymphadenitis treated with RIPE therapy",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-065",
    "stem": "A 60-year-old male presents with headache, plethora, splenomegaly, severe generalized itching after warm showers (aquagenic pruritus), hematocrit 62%, and positive JAK2 V617F mutation.",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Haematology",
    "programme": "mbchb",
    "explanation": "Polycythaemia Vera is a myeloproliferative neoplasm driven by JAK2 mutation; maintenance of hematocrit <45% reduces major thrombotic events.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-065-e",
        "text": "Essential thrombocythaemia requiring anagrelide",
        "is_correct": false
      },
      {
        "id": "med-sba-065-c",
        "text": "Dehydration with hemoconcentration",
        "is_correct": false
      },
      {
        "id": "med-sba-065-a",
        "text": "Polycythaemia Vera; managed with therapeutic phlebotomy (target hematocrit <45%) and low-dose aspirin",
        "is_correct": true
      },
      {
        "id": "med-sba-065-b",
        "text": "Secondary erythrocytosis due to chronic obstructive pulmonary disease",
        "is_correct": false
      },
      {
        "id": "med-sba-065-d",
        "text": "Renal cell carcinoma secreting erythropoietin",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-066",
    "stem": "A 30-year-old female presents with multiple spontaneous bruising and petechiae. Complete blood count shows platelets 8,000/uL with normal Hb, normal WBC, and normal coagulation studies.",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Haematology",
    "programme": "mbchb",
    "explanation": "ITP is an autoimmune clearance of platelets; first-line therapy comprises oral prednisolone or IVIG; platelet transfusions are reserved for life-threatening bleeds.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-066-a",
        "text": "Immune Thrombocytopenia (ITP); initial first-line therapy is oral Corticosteroids or IVIG",
        "is_correct": true
      },
      {
        "id": "med-sba-066-c",
        "text": "Immediate emergency splenectomy in all acute presentations",
        "is_correct": false
      },
      {
        "id": "med-sba-066-b",
        "text": "Immediate prophylactic platelet transfusion before any pharmacotherapy",
        "is_correct": false
      },
      {
        "id": "med-sba-066-d",
        "text": "Bone marrow harvest for immediate transplantation",
        "is_correct": false
      },
      {
        "id": "med-sba-066-e",
        "text": "Lifelong therapeutic warfarin anticoagulation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-067",
    "stem": "A 65-year-old male presents within 90 minutes of acute onset right hemiparesis and expressive aphasia. CT brain excludes hemorrhage. What is the immediate intervention?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Neurology",
    "programme": "mbchb",
    "explanation": "IV thrombolysis is indicated within 4.5 hours of ischemic stroke symptom onset; large vessel occlusions benefit from thrombectomy up to 24 hours.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-067-a",
        "text": "Intravenous Alteplase (thrombolysis) and assessment for endovascular mechanical thrombectomy",
        "is_correct": true
      },
      {
        "id": "med-sba-067-c",
        "text": "Oral aspirin 300 mg prior to any vascular evaluation",
        "is_correct": false
      },
      {
        "id": "med-sba-067-b",
        "text": "Immediate therapeutic dose intravenous heparin infusion",
        "is_correct": false
      },
      {
        "id": "med-sba-067-e",
        "text": "Immediate emergency decompressive hemicraniectomy",
        "is_correct": false
      },
      {
        "id": "med-sba-067-d",
        "text": "Aggressive reduction of blood pressure to 100/60 mmHg",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-068",
    "stem": "A 28-year-old female presents with painful visual loss in her right eye (optic neuritis), followed months later by lower limb sensory loss and periventricular white matter demyelination on MRI.",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Neurology",
    "programme": "mbchb",
    "explanation": "Multiple sclerosis features demyelinating lesions separated in time and space; acute relapses are treated with high-dose methylprednisolone.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-068-e",
        "text": "Glioblastoma multiforme treated with surgical resection",
        "is_correct": false
      },
      {
        "id": "med-sba-068-d",
        "text": "Bacterial meningitis treated with IV ceftriaxone",
        "is_correct": false
      },
      {
        "id": "med-sba-068-c",
        "text": "Guillain-Barré syndrome treated with plasma exchange",
        "is_correct": false
      },
      {
        "id": "med-sba-068-b",
        "text": "Amyotrophic lateral sclerosis treated with riluzole",
        "is_correct": false
      },
      {
        "id": "med-sba-068-a",
        "text": "Multiple Sclerosis; acute relapses treated with high-dose intravenous Methylprednisolone",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-069",
    "stem": "A 68-year-old male presents with asymmetrical resting pill-rolling tremor, cogwheel rigidity, bradykinesia, and postural instability. What is the fundamental neuropathology?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Neurology",
    "programme": "mbchb",
    "explanation": "Parkinson's disease is characterized by loss of pigmented dopaminergic neurons in the substantia nigra pars compacta and intracellular Lewy bodies.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-069-e",
        "text": "Demyelination of the posterior columns of the spinal cord",
        "is_correct": false
      },
      {
        "id": "med-sba-069-b",
        "text": "Atrophy of the caudate nucleus with huntingtin gene expansion",
        "is_correct": false
      },
      {
        "id": "med-sba-069-d",
        "text": "Neurofibrillary tangles and amyloid plaques in the hippocampus",
        "is_correct": false
      },
      {
        "id": "med-sba-069-c",
        "text": "Loss of upper and lower motor neurons in the spinal cord",
        "is_correct": false
      },
      {
        "id": "med-sba-069-a",
        "text": "Degeneration of dopaminergic neurons in the substantia nigra pars compacta with Lewy bodies (alpha-synuclein)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-070",
    "stem": "A 32-year-old woman presents with fluctuating bilateral ptosis, diplopia, and progressive muscle fatigue worsening toward evening. Anti-acetylcholine receptor antibodies are positive. What investigation is required?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Neurology",
    "programme": "mbchb",
    "explanation": "Thymic abnormalities (hyperplasia or thymoma) occur in ~75% of patients with Myasthenia Gravis; CT thorax is mandatory.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-070-b",
        "text": "Lumbar puncture for oligoclonal bands",
        "is_correct": false
      },
      {
        "id": "med-sba-070-e",
        "text": "Genetic testing for SMN1 gene deletion",
        "is_correct": false
      },
      {
        "id": "med-sba-070-d",
        "text": "24-hour EEG monitoring",
        "is_correct": false
      },
      {
        "id": "med-sba-070-c",
        "text": "Muscle biopsy showing ragged red fibers",
        "is_correct": false
      },
      {
        "id": "med-sba-070-a",
        "text": "Contrast CT of the thorax to screen for associated Thymoma",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-071",
    "stem": "A 35-year-old male develops symmetrical ascending flaccid muscle weakness and absent deep tendon reflexes 2 weeks after a diarrheal illness caused by Campylobacter jejuni. What is the treatment?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Neurology",
    "programme": "mbchb",
    "explanation": "Guillain-Barré Syndrome is an acute autoimmune post-infectious polyneuropathy; IVIG or plasma exchange are standard; steroids show zero efficacy.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-071-d",
        "text": "Oral pyridostigmine therapy",
        "is_correct": false
      },
      {
        "id": "med-sba-071-b",
        "text": "High-dose oral and intravenous corticosteroids as first-line",
        "is_correct": false
      },
      {
        "id": "med-sba-071-c",
        "text": "Immediate whole-spine surgical decompression",
        "is_correct": false
      },
      {
        "id": "med-sba-071-a",
        "text": "Intravenous Immunoglobulin (IVIG) or Plasma Exchange; systemic corticosteroids are ineffective",
        "is_correct": true
      },
      {
        "id": "med-sba-071-e",
        "text": "Intrathecal methotrexate administration",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-072",
    "stem": "A 40-year-old male presents with sudden excruciating occipital headache reaching maximum intensity within seconds ('thunderclap headache'). Non-contrast CT head within 6 hours is normal. What is the next step?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Neurology",
    "programme": "mbchb",
    "explanation": "In suspected subarachnoid hemorrhage with normal CT, LP performed at >=12 hours assesses for bilirubin (xanthochromia), which persists for weeks.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-072-b",
        "text": "Reassure the patient and discharge with oral paracetamol",
        "is_correct": false
      },
      {
        "id": "med-sba-072-c",
        "text": "Immediate bilateral carotid endarterectomy",
        "is_correct": false
      },
      {
        "id": "med-sba-072-e",
        "text": "Begin oral sumatriptan for migraine",
        "is_correct": false
      },
      {
        "id": "med-sba-072-a",
        "text": "Lumbar puncture >=12 hours post-headache onset to evaluate for CSF xanthochromia via spectrophotometry",
        "is_correct": true
      },
      {
        "id": "med-sba-072-d",
        "text": "Temporal artery biopsy",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-073",
    "stem": "A 25-year-old male is brought to the emergency department experiencing a generalized convulsion lasting >5 minutes without regaining consciousness (status epilepticus). What is the initial drug?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Neurology",
    "programme": "mbchb",
    "explanation": "Status epilepticus is defined by continuous seizure activity >=5 minutes; IV benzodiazepines (Lorazepam) are first-line agents.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-073-c",
        "text": "High-dose intravenous haloperidol bolus",
        "is_correct": false
      },
      {
        "id": "med-sba-073-a",
        "text": "Intravenous Lorazepam (or IV Diazepam) as first-line benzodiazepine",
        "is_correct": true
      },
      {
        "id": "med-sba-073-e",
        "text": "Immediate general anaesthesia without trial of benzodiazepines",
        "is_correct": false
      },
      {
        "id": "med-sba-073-b",
        "text": "Oral carbamazepine crushed via nasogastric tube",
        "is_correct": false
      },
      {
        "id": "med-sba-073-d",
        "text": "Wait 30 minutes for spontaneous cessation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-074",
    "stem": "A 72-year-old woman presents with progressive insidious memory impairment, spatial disorientation, and difficulty managing finances. Brain MRI shows prominent medial temporal and hippocampal atrophy.",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Neurology",
    "programme": "mbchb",
    "explanation": "Alzheimer's disease features extracellular amyloid-beta plaques and intracellular tau tangles causing hippocampal atrophy and progressive cognitive decline.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-074-d",
        "text": "Lewy body dementia with early visual hallucinations",
        "is_correct": false
      },
      {
        "id": "med-sba-074-a",
        "text": "Alzheimer's Disease; managed with Acetylcholinesterase Inhibitors (Donepezil, Rivastigmine) and Memantine",
        "is_correct": true
      },
      {
        "id": "med-sba-074-e",
        "text": "Normal pressure hydrocephalus with classic triad",
        "is_correct": false
      },
      {
        "id": "med-sba-074-b",
        "text": "Vascular dementia with stepwise sudden focal neurological deficits",
        "is_correct": false
      },
      {
        "id": "med-sba-074-c",
        "text": "Frontotemporal dementia with prominent early disinhibition",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-075",
    "stem": "A 55-year-old male presents with asymmetric hand weakness, tongue fasciculations, hyperreflexia, spasticity, and absent sensory deficits. What disease-modifying drug prolongs survival?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Internal Medicine",
    "section": "Neurology",
    "programme": "mbchb",
    "explanation": "Amyotrophic Lateral Sclerosis involves degeneration of upper and lower motor neurons; Riluzole slows disease progression and modestly prolongs survival.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-075-e",
        "text": "Donepezil",
        "is_correct": false
      },
      {
        "id": "med-sba-075-d",
        "text": "Pyridostigmine",
        "is_correct": false
      },
      {
        "id": "med-sba-075-a",
        "text": "Riluzole (glutamate release inhibitor)",
        "is_correct": true
      },
      {
        "id": "med-sba-075-b",
        "text": "Levodopa/carbidopa",
        "is_correct": false
      },
      {
        "id": "med-sba-075-c",
        "text": "Interferon beta-1a",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-076",
    "stem": "A 70-year-old female presents with unilateral throbbing temporal headache, jaw claudication when eating, scalp tenderness, and sudden visual loss in the right eye. What is the immediate treatment?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Neurology",
    "programme": "mbchb",
    "explanation": "Giant Cell Arteritis is an ophthalmic emergency; corticosteroids must be initiated immediately upon clinical suspicion to prevent irreversible contralateral blindness.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-076-a",
        "text": "Immediate high-dose systemic Corticosteroids (Prednisolone 60 mg/day) to prevent permanent bilateral blindness",
        "is_correct": true
      },
      {
        "id": "med-sba-076-b",
        "text": "Wait 7 days for temporal artery biopsy results before starting treatment",
        "is_correct": false
      },
      {
        "id": "med-sba-076-c",
        "text": "Oral sumatriptan for acute migraine with aura",
        "is_correct": false
      },
      {
        "id": "med-sba-076-d",
        "text": "Immediate carotid endarterectomy",
        "is_correct": false
      },
      {
        "id": "med-sba-076-e",
        "text": "Low-dose aspirin and routine outpatient referral in 4 weeks",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-077",
    "stem": "A 35-year-old male presents with sudden right-sided facial weakness. He is unable to raise his right eyebrow or close his right eye, and his right mouth angle droops. Facial sensation is intact.",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Neurology",
    "programme": "mbchb",
    "explanation": "Lower motor neuron facial nerve palsy paralyzes all ipsilateral facial muscles including the forehead (unlike UMN lesions which spare the forehead).",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-077-c",
        "text": "Trigeminal neuralgia involving the ophthalmic division",
        "is_correct": false
      },
      {
        "id": "med-sba-077-e",
        "text": "Myasthenia gravis flare",
        "is_correct": false
      },
      {
        "id": "med-sba-077-b",
        "text": "Upper motor neuron ischemic stroke; forehead movement is spared",
        "is_correct": false
      },
      {
        "id": "med-sba-077-d",
        "text": "Acoustic neuroma requiring urgent craniotomy",
        "is_correct": false
      },
      {
        "id": "med-sba-077-a",
        "text": "Bell's Palsy (lower motor neuron CN VII lesion); treated with oral Prednisolone within 72 hours and eye lubrication",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-078",
    "stem": "A 45-year-old female presents with symmetrical pain, swelling, and morning stiffness >1 hour in her MCP and PIP joints, with positive anti-CCP antibodies. What is the first-line disease-modifying therapy?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Rheumatology",
    "programme": "mbchb",
    "explanation": "Early initiation of conventional synthetic DMARDs (Methotrexate is the anchor drug) prevents irreversible joint destruction in Rheumatoid Arthritis.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-078-a",
        "text": "Methotrexate (combined with Folic Acid) plus short-term bridging corticosteroid therapy",
        "is_correct": true
      },
      {
        "id": "med-sba-078-b",
        "text": "Oral Paracetamol as sole long-term monotherapy",
        "is_correct": false
      },
      {
        "id": "med-sba-078-c",
        "text": "Lifelong high-dose oral Prednisolone alone without DMARDs",
        "is_correct": false
      },
      {
        "id": "med-sba-078-e",
        "text": "Oral ciprofloxacin for 6 months",
        "is_correct": false
      },
      {
        "id": "med-sba-078-d",
        "text": "Immediate bilateral total joint arthroplasty of all finger joints",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-079",
    "stem": "A 26-year-old woman presents with malar rash, photosensitivity, non-erosive arthritis, oral ulcers, and positive anti-dsDNA antibodies. What baseline disease-modifying drug improves survival?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Rheumatology",
    "programme": "mbchb",
    "explanation": "Hydroxychloroquine is recommended for all patients with SLE to reduce flares, prevent organ damage, and improve long-term survival.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-079-a",
        "text": "Hydroxychloroquine",
        "is_correct": true
      },
      {
        "id": "med-sba-079-b",
        "text": "Intravenous cyclophosphamide monotherapy in the absence of organ crisis",
        "is_correct": false
      },
      {
        "id": "med-sba-079-c",
        "text": "High-dose oral allopurinol",
        "is_correct": false
      },
      {
        "id": "med-sba-079-d",
        "text": "Oral penicillamine",
        "is_correct": false
      },
      {
        "id": "med-sba-079-e",
        "text": "Lifelong therapeutic anticoagulation with warfarin alone",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-080",
    "stem": "A 55-year-old male presents with excruciating pain and erythema in his first metatarsophalangeal joint (podagra). Synovial fluid shows negatively birefringent needle-shaped crystals. What is the diagnosis?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Rheumatology",
    "programme": "mbchb",
    "explanation": "Monosodium urate crystals are needle-shaped and strongly negatively birefringent under polarized light microscopy, diagnostic of gout.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-080-c",
        "text": "Septic arthritis requiring emergency surgical joint debridement",
        "is_correct": false
      },
      {
        "id": "med-sba-080-d",
        "text": "Osteoarthritis with acute osteophyte fracture",
        "is_correct": false
      },
      {
        "id": "med-sba-080-b",
        "text": "Pseudogout (Calcium Pyrophosphate crystal arthropathy)",
        "is_correct": false
      },
      {
        "id": "med-sba-080-e",
        "text": "Rheumatoid nodule flare",
        "is_correct": false
      },
      {
        "id": "med-sba-080-a",
        "text": "Acute Gout (Monosodium Urate crystal arthropathy)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-081",
    "stem": "A 70-year-old male presents with acute pain and swelling in his knee. Synovial fluid reveals positively birefringent, rhomboid-shaped crystals and linear chondrocalcinosis on X-ray. What is the diagnosis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Rheumatology",
    "programme": "mbchb",
    "explanation": "CPPD crystals are rhomboid and positively birefringent; chondrocalcinosis of articular cartilage on plain radiographs is characteristic.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-081-d",
        "text": "Avascular necrosis of the femoral condyle",
        "is_correct": false
      },
      {
        "id": "med-sba-081-c",
        "text": "Septic arthritis requiring 6 weeks of intravenous antibiotics",
        "is_correct": false
      },
      {
        "id": "med-sba-081-e",
        "text": "Rheumatoid arthritis requiring biologic therapy",
        "is_correct": false
      },
      {
        "id": "med-sba-081-b",
        "text": "Urate gout requiring lifelong high-dose allopurinol",
        "is_correct": false
      },
      {
        "id": "med-sba-081-a",
        "text": "Pseudogout (Calcium Pyrophosphate Dihydrate / CPPD crystal deposition)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-082",
    "stem": "A 24-year-old male presents with chronic inflammatory lower back pain for 6 months that improves with exercise and is worse with rest. Pelvic X-ray shows bilateral sacroiliitis. HLA-B27 is positive.",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Rheumatology",
    "programme": "mbchb",
    "explanation": "Ankylosing spondylitis is an axial spondyloarthritis characterized by sacroiliitis, morning stiffness, and spinal fusion; NSAIDs and anti-TNF are standard.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-082-a",
        "text": "Ankylosing Spondylitis; first-line therapy is regular exercise and continuous NSAIDs",
        "is_correct": true
      },
      {
        "id": "med-sba-082-b",
        "text": "Mechanical lumbar disc prolapse treated with absolute bed rest",
        "is_correct": false
      },
      {
        "id": "med-sba-082-e",
        "text": "Multiple myeloma requiring autologous stem cell transplantation",
        "is_correct": false
      },
      {
        "id": "med-sba-082-c",
        "text": "Lumbar canal stenosis requiring emergency decompressive laminectomy",
        "is_correct": false
      },
      {
        "id": "med-sba-082-d",
        "text": "Tuberculous spondylitis (Pott's disease) requiring quadruple anti-TB therapy",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-083",
    "stem": "A 28-year-old male develops asymmetrical oligoarthritis of the knee, sterile urethritis, and conjunctivitis 2 weeks after Chlamydia trachomatis infection. What is the diagnosis?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Rheumatology",
    "programme": "mbchb",
    "explanation": "Reactive arthritis is an aseptic inflammatory arthritis following genitourinary or gastrointestinal infections, presenting with the classic triad.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-083-b",
        "text": "Gonococcal septic arthritis requiring urgent joint arthrotomy",
        "is_correct": false
      },
      {
        "id": "med-sba-083-c",
        "text": "Psoriatic arthritis with pencil-in-cup deformity",
        "is_correct": false
      },
      {
        "id": "med-sba-083-d",
        "text": "Ankylosing spondylitis requiring spinal osteotomy",
        "is_correct": false
      },
      {
        "id": "med-sba-083-e",
        "text": "Gouty arthritis requiring allopurinol",
        "is_correct": false
      },
      {
        "id": "med-sba-083-a",
        "text": "Reactive Arthritis ('can't see, can't pee, can't climb a tree')",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-084",
    "stem": "A 45-year-old female presents with severe Raynaud's phenomenon, sclerodactyly, telangiectasia, esophageal dysmotility, and anti-centromere antibodies (CREST syndrome). What is the diagnosis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Rheumatology",
    "programme": "mbchb",
    "explanation": "Limited cutaneous systemic sclerosis (CREST syndrome) is associated with anti-centromere antibodies and carries high risk of pulmonary arterial hypertension.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-084-a",
        "text": "Limited Cutaneous Systemic Sclerosis",
        "is_correct": true
      },
      {
        "id": "med-sba-084-e",
        "text": "Rheumatoid arthritis with rheumatoid vasculitis",
        "is_correct": false
      },
      {
        "id": "med-sba-084-c",
        "text": "Systemic Lupus Erythematosus with lupus nephritis",
        "is_correct": false
      },
      {
        "id": "med-sba-084-d",
        "text": "Primary Sjögren's Syndrome with xerostomia",
        "is_correct": false
      },
      {
        "id": "med-sba-084-b",
        "text": "Diffuse Cutaneous Systemic Sclerosis with anti-Scl-70 antibodies",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-085",
    "stem": "A 50-year-old female presents with symmetrical proximal muscle weakness (difficulty standing from a chair or climbing stairs), elevated CK (4,000 U/L), and anti-Jo-1 antibodies. What is the diagnosis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Rheumatology",
    "programme": "mbchb",
    "explanation": "Polymyositis is an idiopathic inflammatory myopathy featuring endomysial CD8+ T-cell inflammation, proximal weakness, and high muscle enzymes.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-085-c",
        "text": "Duchenne muscular dystrophy with dystrophin gene mutation",
        "is_correct": false
      },
      {
        "id": "med-sba-085-d",
        "text": "Guillain-Barré syndrome with ascending flaccid paralysis",
        "is_correct": false
      },
      {
        "id": "med-sba-085-e",
        "text": "Amyotrophic lateral sclerosis with upper and lower motor neuron signs",
        "is_correct": false
      },
      {
        "id": "med-sba-085-a",
        "text": "Polymyositis; treated with high-dose Corticosteroids and immunosuppressants",
        "is_correct": true
      },
      {
        "id": "med-sba-085-b",
        "text": "Myasthenia Gravis with anti-acetylcholine receptor antibodies",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-086",
    "stem": "A 48-year-old woman presents with heliotrope rash on the upper eyelids, Gottron's papules over the MCP joints, and proximal muscle weakness. What mandatory investigation must be undertaken?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Internal Medicine",
    "section": "Rheumatology",
    "programme": "mbchb",
    "explanation": "Adult dermatomyositis is strongly associated with internal malignancies (ovary, lung, breast, GI); thorough cancer screening is mandatory.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-086-a",
        "text": "Age-appropriate comprehensive malignancy screening (associated with underlying cancer in up to 25% of cases)",
        "is_correct": true
      },
      {
        "id": "med-sba-086-b",
        "text": "Sweat chloride test to rule out cystic fibrosis",
        "is_correct": false
      },
      {
        "id": "med-sba-086-e",
        "text": "Lifelong therapeutic anticoagulation with warfarin",
        "is_correct": false
      },
      {
        "id": "med-sba-086-d",
        "text": "Immediate bilateral radical mastectomy in all patients",
        "is_correct": false
      },
      {
        "id": "med-sba-086-c",
        "text": "Genetic karyotyping for Turner syndrome",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-087",
    "stem": "A 52-year-old female presents with persistent dry eyes (keratoconjunctivitis sicca), dry mouth (xerostomia), and positive anti-Ro (SSA) and anti-La (SSB) antibodies. What malignancy risk is increased?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Internal Medicine",
    "section": "Rheumatology",
    "programme": "mbchb",
    "explanation": "Primary Sjögren's Syndrome confers a 20- to 40-fold increased risk of developing B-cell Non-Hodgkin (MALT) lymphomas.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-087-d",
        "text": "Glioblastoma multiforme",
        "is_correct": false
      },
      {
        "id": "med-sba-087-e",
        "text": "Acute myeloid leukaemia",
        "is_correct": false
      },
      {
        "id": "med-sba-087-c",
        "text": "Renal cell carcinoma",
        "is_correct": false
      },
      {
        "id": "med-sba-087-b",
        "text": "Hepatocellular carcinoma",
        "is_correct": false
      },
      {
        "id": "med-sba-087-a",
        "text": "B-cell Non-Hodgkin Lymphoma (MALT lymphoma)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-088",
    "stem": "A 65-year-old female presents with bilateral aching pain and morning stiffness in the shoulder and pelvic girdles, with ESR 80 mm/h and normal creatine kinase. What is the diagnosis and response?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Rheumatology",
    "programme": "mbchb",
    "explanation": "PMR occurs in patients >50 years with girdle pain, marked ESR elevation, and dramatic clinical response within 48-72 hours to low-dose steroids.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-088-c",
        "text": "Fibromyalgia requiring duloxetine and exercise therapy",
        "is_correct": false
      },
      {
        "id": "med-sba-088-b",
        "text": "Polymyositis requiring high-dose pulsed cyclophosphamide",
        "is_correct": false
      },
      {
        "id": "med-sba-088-e",
        "text": "Rotator cuff tear requiring urgent open repair",
        "is_correct": false
      },
      {
        "id": "med-sba-088-a",
        "text": "Polymyalgia Rheumatica (PMR); rapid and dramatic therapeutic response to low-dose oral Prednisolone (15 mg/day)",
        "is_correct": true
      },
      {
        "id": "med-sba-088-d",
        "text": "Osteoarthritis of the glenohumeral joint requiring joint replacement",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-089",
    "stem": "A 28-year-old traveller returns from Sub-Saharan Africa with fever, rigors, and jaundice. Blood film reveals delicate ring-form trophozoites in erythrocytes. What is the severe malaria treatment?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Infectious Disease",
    "programme": "mbchb",
    "explanation": "Severe falciparum malaria is treated with IV Artesunate, which rapidly reduces parasite biomass and mortality compared to quinine.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-089-d",
        "text": "Immediate surgical splenectomy to clear parasitaemia",
        "is_correct": false
      },
      {
        "id": "med-sba-089-e",
        "text": "High-dose intravenous Dexamethasone bolus",
        "is_correct": false
      },
      {
        "id": "med-sba-089-c",
        "text": "Intravenous Vancomycin for 14 days",
        "is_correct": false
      },
      {
        "id": "med-sba-089-b",
        "text": "Oral Chloroquine monotherapy without resistance testing",
        "is_correct": false
      },
      {
        "id": "med-sba-089-a",
        "text": "Intravenous Artesunate for at least 24 hours, followed by a complete oral ACT course",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-090",
    "stem": "A 35-year-old HIV patient with CD4 count 80/uL presents with dyspnoea, dry cough, hypoxaemia, and bilateral perihilar ground-glass infiltrates on chest X-ray. What is the treatment of choice?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Infectious Disease",
    "programme": "mbchb",
    "explanation": "Pneumocystis jirovecii pneumonia (PCP) is treated with high-dose TMP-SMX; adjunctive steroids reduce mortality in moderate-to-severe disease.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-090-b",
        "text": "Inhaled salbutamol and oral amoxicillin",
        "is_correct": false
      },
      {
        "id": "med-sba-090-e",
        "text": "Subcutaneous interferon-gamma therapy",
        "is_correct": false
      },
      {
        "id": "med-sba-090-a",
        "text": "High-dose Co-trimoxazole (TMP-SMX) plus adjunctive Corticosteroids if PaO2 <70 mmHg",
        "is_correct": true
      },
      {
        "id": "med-sba-090-d",
        "text": "Intravenous ganciclovir monotherapy",
        "is_correct": false
      },
      {
        "id": "med-sba-090-c",
        "text": "Standard quadruple anti-TB therapy alone",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-091",
    "stem": "A 22-year-old female presents with acute dysuria, frequency, and suprapubic discomfort without fever or flank pain. What is the first-line empirical antibiotic for uncomplicated cystitis?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Infectious Disease",
    "programme": "mbchb",
    "explanation": "Nitrofurantoin and Fosfomycin are first-line for uncomplicated lower UTI due to high urinary concentrations and low resistance rates.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-091-a",
        "text": "Nitrofurantoin (100 mg modified-release BD for 5 days) or Fosfomycin (3 g single dose)",
        "is_correct": true
      },
      {
        "id": "med-sba-091-b",
        "text": "Intravenous Meropenem for 14 days in hospital",
        "is_correct": false
      },
      {
        "id": "med-sba-091-c",
        "text": "Oral Ciprofloxacin for 30 days",
        "is_correct": false
      },
      {
        "id": "med-sba-091-d",
        "text": "Intramuscular Gentamicin for 7 days",
        "is_correct": false
      },
      {
        "id": "med-sba-091-e",
        "text": "Oral Metronidazole 400 mg TDS",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-092",
    "stem": "A 24-year-old male presents with a painless, indurated genital ulcer (chancre) with non-tender inguinal lymphadenopathy 3 weeks after sexual exposure. What is the treatment?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Infectious Disease",
    "programme": "mbchb",
    "explanation": "Primary syphilis (Treponema pallidum) presents with a painless hunterian chancre; single-dose IM Benzathine Penicillin G is curative.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-092-c",
        "text": "Oral Fluconazole single dose 150 mg",
        "is_correct": false
      },
      {
        "id": "med-sba-092-d",
        "text": "Intravenous Vancomycin for 21 days",
        "is_correct": false
      },
      {
        "id": "med-sba-092-e",
        "text": "Surgical excision of the genital lesion",
        "is_correct": false
      },
      {
        "id": "med-sba-092-b",
        "text": "Oral Acyclovir 200 mg 5 times daily for 5 days",
        "is_correct": false
      },
      {
        "id": "med-sba-092-a",
        "text": "Intramuscular Benzathine Penicillin G (2.4 million units single dose)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-093",
    "stem": "A 30-year-old traveller returns from South Asia with step-ladder fever, relative bradycardia (Faget's sign), rose spots on the abdomen, and constipation. What is the causative pathogen?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Infectious Disease",
    "programme": "mbchb",
    "explanation": "Typhoid fever presents with step-ladder fever, relative bradycardia, rose spots, and hepatosplenomegaly; treated with ceftriaxone or azithromycin.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-093-a",
        "text": "Salmonella enterica serovar Typhi (Enteric / Typhoid Fever)",
        "is_correct": true
      },
      {
        "id": "med-sba-093-b",
        "text": "Entamoeba histolytica causing amoebic dysentery",
        "is_correct": false
      },
      {
        "id": "med-sba-093-e",
        "text": "Dengue virus causing haemorrhagic fever",
        "is_correct": false
      },
      {
        "id": "med-sba-093-c",
        "text": "Vibrio cholerae causing profuse rice-water diarrhoea",
        "is_correct": false
      },
      {
        "id": "med-sba-093-d",
        "text": "Plasmodium vivax malaria",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-094",
    "stem": "A 45-year-old sewer worker presents with high fever, intense conjunctival suffusion, severe calf myalgia, jaundice, and acute renal failure (Weil's disease). What is the pathogen?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Infectious Disease",
    "programme": "mbchb",
    "explanation": "Severe leptospirosis (Weil's disease) features the triad of jaundice, renal failure, and haemorrhage; conjunctival suffusion and calf pain are classic.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-094-a",
        "text": "Leptospira interrogans (Leptospirosis)",
        "is_correct": true
      },
      {
        "id": "med-sba-094-b",
        "text": "Hepatitis A enterovirus",
        "is_correct": false
      },
      {
        "id": "med-sba-094-c",
        "text": "Yellow fever flavivirus",
        "is_correct": false
      },
      {
        "id": "med-sba-094-e",
        "text": "Schistosoma mansoni",
        "is_correct": false
      },
      {
        "id": "med-sba-094-d",
        "text": "Plasmodium falciparum",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-095",
    "stem": "A 19-year-old student presents with fever, exudative tonsillitis, and posterior cervical lymphadenopathy. A maculopapular rash develops after being prescribed amoxicillin. What is the diagnosis?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Infectious Disease",
    "programme": "mbchb",
    "explanation": "EBV mononucleosis characteristically produces a prominent erythematous rash when aminopenicillins (amoxicillin/ampicillin) are administered.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-095-d",
        "text": "Cytomegalovirus mononucleosis",
        "is_correct": false
      },
      {
        "id": "med-sba-095-a",
        "text": "Infectious Mononucleosis (Epstein-Barr Virus)",
        "is_correct": true
      },
      {
        "id": "med-sba-095-e",
        "text": "Toxoplasmosis lymphadenitis",
        "is_correct": false
      },
      {
        "id": "med-sba-095-b",
        "text": "Streptococcal pharyngitis with scarlet fever rash",
        "is_correct": false
      },
      {
        "id": "med-sba-095-c",
        "text": "Acute HIV seroconversion syndrome",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-096",
    "stem": "A 60-year-old ICU patient with a central line develops candidemia. Which class of antifungals is recommended as initial first-line therapy for invasive candidiasis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Infectious Disease",
    "programme": "mbchb",
    "explanation": "Echinocandins are first-line for candidaemia and invasive candidiasis due to superior efficacy, fungicidal activity, and excellent safety profiles.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-096-a",
        "text": "Echinocandins (e.g., Caspofungin, Anidulafungin, or Micafungin)",
        "is_correct": true
      },
      {
        "id": "med-sba-096-b",
        "text": "Oral Nystatin swish-and-swallow suspension",
        "is_correct": false
      },
      {
        "id": "med-sba-096-c",
        "text": "Intravenous Griseofulvin therapy",
        "is_correct": false
      },
      {
        "id": "med-sba-096-d",
        "text": "Topical Clotrimazole cream application",
        "is_correct": false
      },
      {
        "id": "med-sba-096-e",
        "text": "Oral Terbinafine tablets",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-097",
    "stem": "A 40-year-old male with fever of unknown origin has a positive blood culture for Streptococcus gallolyticus (formerly S. bovis). What investigation must be performed?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Internal Medicine",
    "section": "Infectious Disease",
    "programme": "mbchb",
    "explanation": "Streptococcus bovis/gallolyticus bacteremia or endocarditis has a strong association (>50%) with occult colonic malignancies.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-097-d",
        "text": "Routine repeat blood cultures only without imaging",
        "is_correct": false
      },
      {
        "id": "med-sba-097-c",
        "text": "Renal angiogram to rule out polyarteritis nodosa",
        "is_correct": false
      },
      {
        "id": "med-sba-097-a",
        "text": "Colonoscopy to screen for occult colorectal adenomas or adenocarcinoma",
        "is_correct": true
      },
      {
        "id": "med-sba-097-e",
        "text": "Bronchoalveolar lavage for atypical mycobacteria",
        "is_correct": false
      },
      {
        "id": "med-sba-097-b",
        "text": "Bone marrow biopsy to rule out multiple myeloma",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-098",
    "stem": "What is the recommended window for initiating Post-Exposure Prophylaxis (PEP) following occupational HIV exposure to maximize efficacy?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Infectious Disease",
    "programme": "mbchb",
    "explanation": "HIV PEP with a 3-drug antiretroviral regimen should be started as early as possible (ideally within 2-4 hours, max 72 hours) and continued for 28 days.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-098-d",
        "text": "PEP is contraindicated following occupational needlestick injuries",
        "is_correct": false
      },
      {
        "id": "med-sba-098-b",
        "text": "Only after waiting 6 weeks for antibody seroconversion confirmation",
        "is_correct": false
      },
      {
        "id": "med-sba-098-a",
        "text": "As soon as possible, ideally within 2 hours and no later than 72 hours post-exposure",
        "is_correct": true
      },
      {
        "id": "med-sba-098-c",
        "text": "Any time up to 3 months following the exposure incident",
        "is_correct": false
      },
      {
        "id": "med-sba-098-e",
        "text": "Within 14 to 28 days post-exposure",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-099",
    "stem": "A 50-year-old male with chronic Hepatitis C undergoes direct-acting antiviral (DAA) therapy. What defines a Sustained Virologic Response (SVR12)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Infectious Disease",
    "programme": "mbchb",
    "explanation": "SVR12 (undetectable HCV RNA 12 weeks post-treatment) corresponds to long-term virological cure in >95% of patients treated with DAAs.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-099-e",
        "text": "Suppression of viral load by 50% from baseline",
        "is_correct": false
      },
      {
        "id": "med-sba-099-d",
        "text": "Absence of jaundice after 5 years of continuous therapy",
        "is_correct": false
      },
      {
        "id": "med-sba-099-b",
        "text": "Normalization of ALT alone while HCV RNA remains detectable",
        "is_correct": false
      },
      {
        "id": "med-sba-099-c",
        "text": "Loss of anti-HCV antibodies with persistent viral replication",
        "is_correct": false
      },
      {
        "id": "med-sba-099-a",
        "text": "Undetectable serum HCV RNA 12 weeks after completing antiviral therapy (indicating cure in >95%)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-100",
    "stem": "A 62-year-old male with metastatic squamous cell lung cancer presents with confusion, polyuria, and constipation. Corrected serum calcium is 3.6 mmol/L. What is the immediate treatment?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Oncology",
    "programme": "mbchb",
    "explanation": "Hypercalcemia of malignancy requires vigorous saline rehydration to restore GFR, followed by IV bisphosphonates to inhibit osteoclast resorption.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-100-c",
        "text": "High-dose intravenous loop diuretics before fluid rehydration",
        "is_correct": false
      },
      {
        "id": "med-sba-100-a",
        "text": "Intravenous 0.9% normal saline rehydration followed by IV Bisphosphonate (Zoledronic acid)",
        "is_correct": true
      },
      {
        "id": "med-sba-100-e",
        "text": "Oral potassium chloride supplementation alone",
        "is_correct": false
      },
      {
        "id": "med-sba-100-b",
        "text": "Immediate bilateral total parathyroidectomy",
        "is_correct": false
      },
      {
        "id": "med-sba-100-d",
        "text": "Oral calcium carbonate and vitamin D replacement",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-101",
    "stem": "A 22-year-old male with high-grade Burkitt lymphoma develops hyperkalaemia (6.8 mmol/L), hyperuricaemia, and acute renal failure within 12 hours of starting chemotherapy. What is the diagnosis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Oncology",
    "programme": "mbchb",
    "explanation": "Tumour lysis syndrome releases massive intracellular potassium, phosphate, and uric acid; Rasburicase rapidly metabolizes uric acid into soluble allantoin.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-101-b",
        "text": "Disseminated intravascular coagulation; administer fresh frozen plasma",
        "is_correct": false
      },
      {
        "id": "med-sba-101-d",
        "text": "Adrenal crisis; administer high-dose intravenous hydrocortisone",
        "is_correct": false
      },
      {
        "id": "med-sba-101-e",
        "text": "Acute pyelonephritis; prescribe oral fluoroquinolones",
        "is_correct": false
      },
      {
        "id": "med-sba-101-a",
        "text": "Tumour Lysis Syndrome; treated with IV hydration, Rasburicase, and cardiac monitoring",
        "is_correct": true
      },
      {
        "id": "med-sba-101-c",
        "text": "Severe sepsis; administer broad-spectrum intravenous carbapenems",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-102",
    "stem": "A 68-year-old male with metastatic prostate cancer presents with bilateral leg weakness, T10 sensory level, hyperreflexia, and new urinary retention. What is the immediate management?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Oncology",
    "programme": "mbchb",
    "explanation": "Malignant spinal cord compression is an oncological emergency requiring urgent high-dose steroids, MRI, and decompression within 24 hours.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-102-c",
        "text": "Perform immediate diagnostic lumbar puncture in the ward",
        "is_correct": false
      },
      {
        "id": "med-sba-102-b",
        "text": "Prescribe oral tramadol and arrange outpatient physical therapy review in 2 weeks",
        "is_correct": false
      },
      {
        "id": "med-sba-102-e",
        "text": "Perform nerve conduction studies",
        "is_correct": false
      },
      {
        "id": "med-sba-102-d",
        "text": "Discharge with a Foley catheter and oral analgesia",
        "is_correct": false
      },
      {
        "id": "med-sba-102-a",
        "text": "High-dose IV Dexamethasone (16 mg), emergency whole-spine MRI, and urgent neurosurgical decompression or radiotherapy",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-103",
    "stem": "A 55-year-old woman undergoing chemotherapy for breast cancer presents with fever of 38.6°C and absolute neutrophil count (ANC) of 350/uL. What is the immediate intervention?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Oncology",
    "programme": "mbchb",
    "explanation": "Febrile neutropenia carries high septic mortality; empiric broad-spectrum antipseudomonal IV antibiotics must be given within the 'golden hour'.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-103-d",
        "text": "Administer high-dose oral paracetamol alone",
        "is_correct": false
      },
      {
        "id": "med-sba-103-c",
        "text": "Prescribe oral amoxicillin and discharge home with a fever chart",
        "is_correct": false
      },
      {
        "id": "med-sba-103-e",
        "text": "Immediate whole-body surgical drainage",
        "is_correct": false
      },
      {
        "id": "med-sba-103-b",
        "text": "Wait for blood culture results before starting any antibiotic therapy",
        "is_correct": false
      },
      {
        "id": "med-sba-103-a",
        "text": "Immediate broad-spectrum antipseudomonal IV beta-lactam monotherapy (e.g., Piperacillin-Tazobactam or Meropenem) within 1 hour",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-104",
    "stem": "A 60-year-old male with small cell lung cancer presents with facial oedema, plethoric cyanosis, distended veins across the anterior chest wall, and dyspnoea. What is the emergency diagnosis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Oncology",
    "programme": "mbchb",
    "explanation": "SVC obstruction causes venous congestion of head and neck; endovascular stenting provides rapid symptom relief alongside steroids and definitive oncology therapy.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-104-a",
        "text": "Superior Vena Cava (SVC) Obstruction; treated with endovascular stenting, Dexamethasone, and chemotherapy/radiotherapy",
        "is_correct": true
      },
      {
        "id": "med-sba-104-b",
        "text": "Congestive heart failure treated with high-dose loop diuretics and ACE inhibitors",
        "is_correct": false
      },
      {
        "id": "med-sba-104-c",
        "text": "Bilateral internal jugular vein thrombosis treated with immediate open thrombectomy",
        "is_correct": false
      },
      {
        "id": "med-sba-104-e",
        "text": "Severe anaphylaxis treated with intramuscular adrenaline",
        "is_correct": false
      },
      {
        "id": "med-sba-104-d",
        "text": "Acute pericardial tamponade requiring emergency needle pericardiocentesis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-105",
    "stem": "A palliative cancer patient with severe bone pain is prescribed regular oral morphine. What medication must ALWAYS be co-prescribed prophylactically?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Oncology",
    "programme": "mbchb",
    "explanation": "Opioids decrease gastrointestinal motility; tolerance develops to sedation and nausea but never to constipation; prophylactic laxatives are mandatory.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-105-b",
        "text": "Oral naloxone tablets twice daily",
        "is_correct": false
      },
      {
        "id": "med-sba-105-a",
        "text": "Stimulant laxative with stool softener (e.g., Senna plus Docusate)",
        "is_correct": true
      },
      {
        "id": "med-sba-105-c",
        "text": "High-dose oral loop diuretic",
        "is_correct": false
      },
      {
        "id": "med-sba-105-d",
        "text": "Prophylactic broad-spectrum oral antibiotics",
        "is_correct": false
      },
      {
        "id": "med-sba-105-e",
        "text": "Daily intravenous potassium supplements",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-106",
    "stem": "A 58-year-old female with metastatic colorectal cancer has wild-type KRAS and NRAS genes on molecular testing. Which targeted therapy is indicated?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Internal Medicine",
    "section": "Oncology",
    "programme": "mbchb",
    "explanation": "Anti-EGFR antibodies require wild-type RAS; downstream KRAS/NRAS mutations confer constitutive signaling and complete resistance to anti-EGFR therapy.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-106-a",
        "text": "Cetuximab or Panitumumab (monoclonal antibodies targeting EGFR)",
        "is_correct": true
      },
      {
        "id": "med-sba-106-b",
        "text": "Trastuzumab (anti-HER2 monoclonal antibody)",
        "is_correct": false
      },
      {
        "id": "med-sba-106-c",
        "text": "Imatinib (tyrosine kinase inhibitor targeting c-KIT)",
        "is_correct": false
      },
      {
        "id": "med-sba-106-e",
        "text": "Erlotinib (targeting EGFR exon 19 mutations)",
        "is_correct": false
      },
      {
        "id": "med-sba-106-d",
        "text": "Rituximab (anti-CD20 monoclonal antibody)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-107",
    "stem": "What is the primary clinical utility of serum Carcinoembryonic Antigen (CEA) in colorectal carcinoma?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Oncology",
    "programme": "mbchb",
    "explanation": "CEA lacks sensitivity/specificity for initial cancer screening, but serial measurements are invaluable for detecting postoperative recurrence.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-107-a",
        "text": "Surveillance for postoperative disease recurrence and monitoring response to systemic therapy",
        "is_correct": true
      },
      {
        "id": "med-sba-107-b",
        "text": "Routine screening for colorectal cancer in asymptomatic general populations",
        "is_correct": false
      },
      {
        "id": "med-sba-107-c",
        "text": "Histological confirmation of primary liver adenocarcinoma",
        "is_correct": false
      },
      {
        "id": "med-sba-107-e",
        "text": "Monitoring treatment efficacy in prostate carcinoma",
        "is_correct": false
      },
      {
        "id": "med-sba-107-d",
        "text": "Determining the depth of local mucosal invasion",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-108",
    "stem": "A 45-year-old male with small cell lung cancer develops proximal muscle weakness that improves with exercise (facilitation), dry mouth, and hyporeflexia. What is the underlying mechanism?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Internal Medicine",
    "section": "Oncology",
    "programme": "mbchb",
    "explanation": "Lambert-Eaton myasthenic syndrome is a presynaptic paraneoplastic disorder where antibodies against voltage-gated Ca2+ channels impair acetylcholine release.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-108-d",
        "text": "Autoantibodies against histidyl-tRNA synthetase (Polymyositis)",
        "is_correct": false
      },
      {
        "id": "med-sba-108-c",
        "text": "Autoantibodies against GM1 gangliosides (Guillain-Barré Syndrome)",
        "is_correct": false
      },
      {
        "id": "med-sba-108-b",
        "text": "Autoantibodies against postsynaptic acetylcholine receptors (Myasthenia Gravis)",
        "is_correct": false
      },
      {
        "id": "med-sba-108-e",
        "text": "Degeneration of lower motor neurons in the anterior horn cells",
        "is_correct": false
      },
      {
        "id": "med-sba-108-a",
        "text": "Autoantibodies against presynaptic voltage-gated P/Q-type calcium channels (Lambert-Eaton Syndrome)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "med-sba-109",
    "stem": "In clinical oncology, what does the 'TNM' classification system standardly denote?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Internal Medicine",
    "section": "Oncology",
    "programme": "mbchb",
    "explanation": "TNM staging standardizes cancer extent: primary Tumor (T), regional lymph Nodes (N), and distant Metastasis (M) to guide management and prognosis.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-109-a",
        "text": "Tumour size and local invasion (T), Regional lymph Node involvement (N), and Distant Metastasis (M)",
        "is_correct": true
      },
      {
        "id": "med-sba-109-b",
        "text": "Time since onset (T), Number of lesions (N), and Mitotic index (M)",
        "is_correct": false
      },
      {
        "id": "med-sba-109-c",
        "text": "Toxicity grade (T), Necrosis score (N), and Mutation burden (M)",
        "is_correct": false
      },
      {
        "id": "med-sba-109-d",
        "text": "Topography (T), Neoplasia type (N), and Malignancy score (M)",
        "is_correct": false
      },
      {
        "id": "med-sba-109-e",
        "text": "Temperature (T), Neutrophil count (N), and Monocyte count (M)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "med-sba-110",
    "stem": "Which chemo-protective agent is co-administered with high-dose Cyclophosphamide or Ifosfamide to prevent drug-induced haemorrhagic cystitis caused by acrolein?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Internal Medicine",
    "section": "Oncology",
    "programme": "mbchb",
    "explanation": "Mesna binds toxic acrolein metabolites in the urinary bladder, preventing ifosfamide/cyclophosphamide-induced chemical hemorrhagic cystitis.",
    "reference": "Harrison's Principles of Internal Medicine, 21st Ed. / Macleod's Clinical Examination",
    "options": [
      {
        "id": "med-sba-110-c",
        "text": "Leucovorin (folinic acid) to rescue bone marrow",
        "is_correct": false
      },
      {
        "id": "med-sba-110-d",
        "text": "Amifostine to protect salivary glands",
        "is_correct": false
      },
      {
        "id": "med-sba-110-e",
        "text": "Rasburicase to convert uric acid",
        "is_correct": false
      },
      {
        "id": "med-sba-110-b",
        "text": "Dexrazoxane to protect cardiac myocytes",
        "is_correct": false
      },
      {
        "id": "med-sba-110-a",
        "text": "Mesna (2-mercaptoethane sulfonate sodium) and aggressive intravenous hydration",
        "is_correct": true
      }
    ]
  }
]
