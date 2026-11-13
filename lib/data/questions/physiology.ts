import type { MCQQuestion } from "../mcq-bank"

export const PHYSIOLOGY_QUESTIONS: MCQQuestion[] = [
  {
    "id": "phys-sba-001",
    "stem": "During which phase of the cardiac cycle is coronary blood flow to the left ventricle at its MAXIMUM?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Cardiovascular Physiology",
    "programme": "both",
    "explanation": "Left ventricular coronary blood flow occurs predominantly during diastole because during systole, high intramyocardial tissue pressure compresses the intramural coronary vessels.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-001-e",
        "text": "Atrial systole",
        "is_correct": false
      },
      {
        "id": "phys-sba-001-d",
        "text": "Late systole",
        "is_correct": false
      },
      {
        "id": "phys-sba-001-b",
        "text": "Systolic peak ejection",
        "is_correct": false
      },
      {
        "id": "phys-sba-001-c",
        "text": "Isovolumetric contraction",
        "is_correct": false
      },
      {
        "id": "phys-sba-001-a",
        "text": "Early diastole (isovolumetric relaxation and rapid filling)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-002",
    "stem": "Which cellular mechanism explains the positive inotropic effect of Cardiac Glycosides (Digoxin)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Cardiovascular Physiology",
    "programme": "both",
    "explanation": "Digoxin inhibits Na+/K+-ATPase, which raises intracellular [Na+]. This reduces the driving force for the Na+/Ca2+ exchanger (NCX), leading to elevated cytosolic Ca2+ and increased contractility.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-002-c",
        "text": "Blockade of L-type calcium channels",
        "is_correct": false
      },
      {
        "id": "phys-sba-002-d",
        "text": "Inhibition of phosphodiesterase-3",
        "is_correct": false
      },
      {
        "id": "phys-sba-002-b",
        "text": "Direct stimulation of beta-1 adrenergic receptors",
        "is_correct": false
      },
      {
        "id": "phys-sba-002-e",
        "text": "Activation of cardiac SERCA2a pump directly",
        "is_correct": false
      },
      {
        "id": "phys-sba-002-a",
        "text": "Inhibition of the sarcolemmal Na+/K+-ATPase pump, increasing intracellular Na+ and decreasing Ca2+ efflux via NCX",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-003",
    "stem": "According to the Frank-Starling law of the heart, an increase in end-diastolic volume directly leads to:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Cardiovascular Physiology",
    "programme": "both",
    "explanation": "Frank-Starling law states that the greater the ventricular stretch during diastole (preload), the greater the force of contraction and resulting stroke volume, due to optimal cross-bridge formation.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-003-d",
        "text": "Decreased systolic arterial blood pressure",
        "is_correct": false
      },
      {
        "id": "phys-sba-003-b",
        "text": "Decreased cardiac output due to excessive myocardial stretch",
        "is_correct": false
      },
      {
        "id": "phys-sba-003-a",
        "text": "Increased stroke volume due to optimal myofilament overlap and increased calcium sensitivity of troponin C",
        "is_correct": true
      },
      {
        "id": "phys-sba-003-e",
        "text": "Reduced end-systolic volume without change in stroke volume",
        "is_correct": false
      },
      {
        "id": "phys-sba-003-c",
        "text": "Immediate reflex bradycardia mediated by the Bainbridge reflex",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-004",
    "stem": "Which vascular bed exhibits the most pronounced metabolic autoregulation in response to tissue hypoxia and adenosine?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Cardiovascular Physiology",
    "programme": "both",
    "explanation": "Coronary and cerebral circulations are heavily autoregulated by local metabolic factors (adenosine, hypoxia, nitric oxide, CO2), overriding autonomic vasomotor control.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-004-c",
        "text": "Renal circulation",
        "is_correct": false
      },
      {
        "id": "phys-sba-004-d",
        "text": "Pulmonary circulation",
        "is_correct": false
      },
      {
        "id": "phys-sba-004-b",
        "text": "Cutaneous circulation",
        "is_correct": false
      },
      {
        "id": "phys-sba-004-a",
        "text": "Coronary circulation",
        "is_correct": true
      },
      {
        "id": "phys-sba-004-e",
        "text": "Skeletal muscle at rest",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-005",
    "stem": "In the cardiac pacemaker action potential of the Sinoatrial (SA) node, which ion current is responsible for phase 4 spontaneous diastolic depolarization?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Cardiovascular Physiology",
    "programme": "both",
    "explanation": "Spontaneous phase 4 depolarization in SA nodal cells is driven by funny current (If) carried by inward Na+ ions through hyperpolarization-activated cyclic nucleotide-gated (HCN) channels, followed by T-type Ca2+ currents.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-005-c",
        "text": "Rapid outward K+ current (IKr)",
        "is_correct": false
      },
      {
        "id": "phys-sba-005-b",
        "text": "Inward L-type Ca2+ current (ICa-L)",
        "is_correct": false
      },
      {
        "id": "phys-sba-005-a",
        "text": "Funny current (If) carried by inward Na+ through HCN channels",
        "is_correct": true
      },
      {
        "id": "phys-sba-005-e",
        "text": "Inward rectifier K+ current (IK1)",
        "is_correct": false
      },
      {
        "id": "phys-sba-005-d",
        "text": "Fast voltage-gated Na+ current (INa)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-006",
    "stem": "What happens to the systemic arterial baroreceptor firing rate when mean arterial blood pressure suddenly rises?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Cardiovascular Physiology",
    "programme": "both",
    "explanation": "Elevated arterial pressure stretches carotid sinus and aortic arch baroreceptors, increasing afferent firing along CN IX and X to the NTS. This enhances parasympathetic vagal output and inhibits sympathetic outflow, lowering HR and BP.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-006-b",
        "text": "Firing rate decreases, causing reflex tachycardia and peripheral vasoconstriction",
        "is_correct": false
      },
      {
        "id": "phys-sba-006-e",
        "text": "Firing rate decreases in the carotid sinus but increases in the aortic arch",
        "is_correct": false
      },
      {
        "id": "phys-sba-006-d",
        "text": "Firing rate stays constant but sensitivity shifts within 5 seconds",
        "is_correct": false
      },
      {
        "id": "phys-sba-006-a",
        "text": "Firing rate increases, stimulating the nucleus tractus solitarius (NTS) to increase vagal tone and inhibit sympathetic outflow",
        "is_correct": true
      },
      {
        "id": "phys-sba-006-c",
        "text": "Firing rate ceases entirely, leading to respiratory arrest",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-007",
    "stem": "The second heart sound (S2) is caused by the closure of which valves, and what characterizes physiological splitting during inspiration?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Cardiovascular Physiology",
    "programme": "both",
    "explanation": "S2 corresponds to semilunar valve closure (A2 then P2). Inspiration drops intrathoracic pressure, increasing venous return to the right heart and prolonging RV systole, which delays P2 (physiological splitting).",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-007-a",
        "text": "Aortic and pulmonary valves; inspiration delays P2 due to increased right ventricular venous return",
        "is_correct": true
      },
      {
        "id": "phys-sba-007-b",
        "text": "Mitral and tricuspid valves; inspiration causes A2 to precede M1",
        "is_correct": false
      },
      {
        "id": "phys-sba-007-c",
        "text": "Aortic and mitral valves; expiration causes paradoxical splitting",
        "is_correct": false
      },
      {
        "id": "phys-sba-007-d",
        "text": "Pulmonary and tricuspid valves; split disappears entirely on inspiration",
        "is_correct": false
      },
      {
        "id": "phys-sba-007-e",
        "text": "Aortic and pulmonary valves; expiration widens the A2-P2 interval",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-008",
    "stem": "On an ECG, the PR interval represents the time taken for:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Cardiovascular Physiology",
    "programme": "both",
    "explanation": "The PR interval (normal 0.12–0.20 s) measures the time from the onset of atrial depolarization (P wave) to the beginning of ventricular depolarization (QRS), reflecting AV nodal delay.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-008-a",
        "text": "Atrial depolarization and conduction delay through the AV node to the ventricles",
        "is_correct": true
      },
      {
        "id": "phys-sba-008-c",
        "text": "Ventricular depolarization alone",
        "is_correct": false
      },
      {
        "id": "phys-sba-008-d",
        "text": "Atrial repolarization and ST-segment elevation",
        "is_correct": false
      },
      {
        "id": "phys-sba-008-e",
        "text": "Conduction through the Purkinje fibres exclusively",
        "is_correct": false
      },
      {
        "id": "phys-sba-008-b",
        "text": "Total duration of ventricular depolarization and repolarization",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-009",
    "stem": "What is the primary determinant of Total Peripheral Resistance (TPR) according to Poiseuille's law?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Cardiovascular Physiology",
    "programme": "both",
    "explanation": "Poiseuille's equation states resistance R = 8ηL / (π·r^4). Because resistance is inversely proportional to the 4th power of vessel radius, small changes in arteriolar smooth muscle tone produce huge shifts in TPR.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-009-a",
        "text": "Arteriolar radius (inversely proportional to the fourth power, r^4)",
        "is_correct": true
      },
      {
        "id": "phys-sba-009-b",
        "text": "Blood viscosity (linearly proportional to haematocrit squared)",
        "is_correct": false
      },
      {
        "id": "phys-sba-009-c",
        "text": "Length of large elastic conducting arteries",
        "is_correct": false
      },
      {
        "id": "phys-sba-009-d",
        "text": "Capillary surface area",
        "is_correct": false
      },
      {
        "id": "phys-sba-009-e",
        "text": "Venous capacitance and compliance",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-010",
    "stem": "Which change in ventricular pressure-volume loop indicates an isolated increase in Myocardial Contractility (Inotropy)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Cardiovascular Physiology",
    "programme": "both",
    "explanation": "Increased contractility shifts the ESPVR line upward and to the left (steeper slope), resulting in higher ejection fraction and greater stroke volume without requiring increased preload.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-010-d",
        "text": "Flattened ESPVR slope with decreased ejection fraction",
        "is_correct": false
      },
      {
        "id": "phys-sba-010-a",
        "text": "Steeper end-systolic pressure-volume relationship (ESPVR) slope and increased stroke volume at the same end-diastolic volume",
        "is_correct": true
      },
      {
        "id": "phys-sba-010-b",
        "text": "Rightward shift of the end-diastolic pressure-volume relationship (EDPVR)",
        "is_correct": false
      },
      {
        "id": "phys-sba-010-e",
        "text": "Widened loop solely due to increased venous return",
        "is_correct": false
      },
      {
        "id": "phys-sba-010-c",
        "text": "Increased end-systolic volume with reduced stroke volume",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-011",
    "stem": "The Bainbridge reflex is elicited by stretch receptors in which cardiac chamber, and what is its physiological response?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Cardiovascular Physiology",
    "programme": "both",
    "explanation": "The Bainbridge (atrial) reflex is triggered by increased venous return stretching right atrial mechanoreceptors, sending vagal afferents that reflexively increase heart rate.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-011-a",
        "text": "Right atrium; causes reflex tachycardia to prevent pooling of venous blood",
        "is_correct": true
      },
      {
        "id": "phys-sba-011-b",
        "text": "Left ventricle; causes profound reflex bradycardia and hypotension",
        "is_correct": false
      },
      {
        "id": "phys-sba-011-c",
        "text": "Carotid sinus; causes peripheral arteriolar vasodilation",
        "is_correct": false
      },
      {
        "id": "phys-sba-011-d",
        "text": "Aortic arch; causes coronary vasoconstriction",
        "is_correct": false
      },
      {
        "id": "phys-sba-011-e",
        "text": "Pulmonary veins; causes bronchoconstriction and tachypnoea",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-012",
    "stem": "Which physiological mechanism is primarily responsible for the rapid repolarization phase (Phase 3) of ventricular myocardial action potentials?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Cardiovascular Physiology",
    "programme": "both",
    "explanation": "Phase 3 repolarization occurs as voltage-gated L-type calcium channels inactivate while delayed rectifier potassium channels open, allowing massive K+ efflux that restores negative resting membrane potential.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-012-b",
        "text": "Inactivation of fast voltage-gated Na+ channels",
        "is_correct": false
      },
      {
        "id": "phys-sba-012-d",
        "text": "Active extrusion of Ca2+ by sarcoplasmic reticulum pumps",
        "is_correct": false
      },
      {
        "id": "phys-sba-012-a",
        "text": "Efflux of K+ through delayed rectifier potassium channels (IKr and IKs) while L-type Ca2+ channels close",
        "is_correct": true
      },
      {
        "id": "phys-sba-012-e",
        "text": "Opening of non-selective transient receptor potential channels",
        "is_correct": false
      },
      {
        "id": "phys-sba-012-c",
        "text": "Influx of chloride ions through GABA-A channels",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-013",
    "stem": "Which parameter CANNOT be measured directly by standard spirometry?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Respiratory Physiology",
    "programme": "both",
    "explanation": "Standard spirometry cannot measure air that remains in the lungs after maximal expiration (Residual Volume, RV). FRC, RV, and Total Lung Capacity (TLC) require helium dilution or body plethysmography.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-013-a",
        "text": "Functional Residual Capacity (FRC) and Residual Volume (RV)",
        "is_correct": true
      },
      {
        "id": "phys-sba-013-d",
        "text": "Tidal Volume (VT)",
        "is_correct": false
      },
      {
        "id": "phys-sba-013-b",
        "text": "Vital Capacity (VC)",
        "is_correct": false
      },
      {
        "id": "phys-sba-013-e",
        "text": "Inspiratory Reserve Volume (IRV)",
        "is_correct": false
      },
      {
        "id": "phys-sba-013-c",
        "text": "Forced Expiratory Volume in 1 second (FEV1)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-014",
    "stem": "What is the primary physiological function of Pulmonary Surfactant produced by Type II pneumocytes?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Respiratory Physiology",
    "programme": "both",
    "explanation": "Dipalmitoylphosphatidylcholine (surfactant) disrupts water intermolecular forces at the air-liquid interface, reducing surface tension progressively as alveolar radius shrinks (Laplace's Law: P = 2T/r).",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-014-a",
        "text": "Reduces alveolar surface tension, preventing alveolar collapse (atelectasis) at low lung volumes and increasing compliance",
        "is_correct": true
      },
      {
        "id": "phys-sba-014-b",
        "text": "Increases surface tension to facilitate rapid elastic recoil",
        "is_correct": false
      },
      {
        "id": "phys-sba-014-c",
        "text": "Directly binds and neutralizes inhaled bacterial toxins",
        "is_correct": false
      },
      {
        "id": "phys-sba-014-e",
        "text": "Thickens the respiratory membrane to prevent capillary fluid leak",
        "is_correct": false
      },
      {
        "id": "phys-sba-014-d",
        "text": "Transports carbon dioxide across the blood-gas barrier",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-015",
    "stem": "A rightward shift of the Oxygen-Haemoglobin Dissociation Curve (Bohr effect) is caused by which physiological change?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Respiratory Physiology",
    "programme": "both",
    "explanation": "A right shift signifies reduced affinity of haemoglobin for oxygen (facilitating O2 unloading in tissues). Caused by the CADET face right mnemonic: CO2, Acidosis/Altitude, 2,3-DPG, Exercise, Temperature.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-015-b",
        "text": "Decreased [H+] (alkalosis), decreased PaCO2, and hypothermia",
        "is_correct": false
      },
      {
        "id": "phys-sba-015-c",
        "text": "Elevated fetal haemoglobin (HbF) concentration",
        "is_correct": false
      },
      {
        "id": "phys-sba-015-d",
        "text": "Carbon monoxide poisoning",
        "is_correct": false
      },
      {
        "id": "phys-sba-015-a",
        "text": "Increased [H+] (decreased pH), elevated PaCO2, elevated 2,3-DPG, and increased temperature",
        "is_correct": true
      },
      {
        "id": "phys-sba-015-e",
        "text": "Methemoglobinemia with elevated ferric iron",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-016",
    "stem": "In an upright lung, how do the Ventilation-Perfusion (V/Q) ratio and regional ventilation vary from apex to base?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Respiratory Physiology",
    "programme": "both",
    "explanation": "Gravity pulls blood downward, so perfusion is much higher at the lung base than apex. Ventilation also increases towards the base due to alveolar compliance. Hence, V/Q is highest at apex (~3.3) and lowest at base (~0.63).",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-016-d",
        "text": "Ventilation is highest at the apex due to negative intrapleural pressure",
        "is_correct": false
      },
      {
        "id": "phys-sba-016-b",
        "text": "Perfusion is highest at the apex and ventilation is highest at the base",
        "is_correct": false
      },
      {
        "id": "phys-sba-016-a",
        "text": "Both ventilation and perfusion increase towards the base, but perfusion increases more steeply, making the apex high V/Q (~3.0) and base low V/Q (~0.6)",
        "is_correct": true
      },
      {
        "id": "phys-sba-016-e",
        "text": "The base has high V/Q (>3.0) and apex has low V/Q (<0.5)",
        "is_correct": false
      },
      {
        "id": "phys-sba-016-c",
        "text": "The V/Q ratio is completely uniform throughout all lung zones",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-017",
    "stem": "How is the majority of Carbon Dioxide (CO2) transported in arterial blood?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Respiratory Physiology",
    "programme": "both",
    "explanation": "Approx. 70% of blood CO2 is transported as bicarbonate (HCO3-), 20-23% as carbaminohaemoglobin, and 7-10% dissolved in plasma.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-017-c",
        "text": "Bound to haemoglobin as carbamino-haemoglobin (95%)",
        "is_correct": false
      },
      {
        "id": "phys-sba-017-b",
        "text": "Dissolved CO2 gas in physical solution",
        "is_correct": false
      },
      {
        "id": "phys-sba-017-a",
        "text": "As bicarbonate ions (HCO3-) dissolved in plasma (approx. 70%)",
        "is_correct": true
      },
      {
        "id": "phys-sba-017-e",
        "text": "Bound to plasma albumin as carbamate",
        "is_correct": false
      },
      {
        "id": "phys-sba-017-d",
        "text": "As carbonic acid (H2CO3) inside red blood cells",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-018",
    "stem": "What happens to the pulmonary vasculature in response to localized alveolar hypoxia?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Respiratory Physiology",
    "programme": "both",
    "explanation": "Unlike systemic vessels (which dilate in response to hypoxia), pulmonary arterioles constrict in response to alveolar hypoxia (HPV), optimizing V/Q matching.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-018-e",
        "text": "Reflex systemic vasodilation mediated by endothelin-1",
        "is_correct": false
      },
      {
        "id": "phys-sba-018-d",
        "text": "Direct stimulation of bronchial smooth muscle relaxation",
        "is_correct": false
      },
      {
        "id": "phys-sba-018-c",
        "text": "Capillary recruitment and massive pulmonary extravasation",
        "is_correct": false
      },
      {
        "id": "phys-sba-018-b",
        "text": "Generalized pulmonary vasodilation to increase capillary transit time",
        "is_correct": false
      },
      {
        "id": "phys-sba-018-a",
        "text": "Hypoxic Pulmonary Vasoconstriction (HPV) redirects blood flow away from poorly ventilated alveoli to well-ventilated regions",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-019",
    "stem": "Where are the central chemoreceptors located, and what is their primary stimulus for increasing ventilation?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Respiratory Physiology",
    "programme": "both",
    "explanation": "Central chemoreceptors in the medulla respond to pH changes in brain extracellular fluid/CSF. CO2 readily crosses the blood-brain barrier and hydrates to form H+ and HCO3-, stimulating central chemoreceptors.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-019-b",
        "text": "Carotid bodies; stimulated by arterial hypoxaemia (PaO2 < 60 mmHg)",
        "is_correct": false
      },
      {
        "id": "phys-sba-019-d",
        "text": "Dorsal respiratory group; stimulated directly by plasma bicarbonate ions",
        "is_correct": false
      },
      {
        "id": "phys-sba-019-a",
        "text": "Ventrolateral medulla; stimulated by increased [H+] in CSF resulting from arterial hypercapnia (diffusion of CO2 across the BBB)",
        "is_correct": true
      },
      {
        "id": "phys-sba-019-c",
        "text": "Aortic arch; stimulated by acute fluctuations in mean arterial pressure",
        "is_correct": false
      },
      {
        "id": "phys-sba-019-e",
        "text": "Pulmonary stretch receptors; stimulated by lung hyperinflation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-020",
    "stem": "What is the Hering-Breuer inflation reflex?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Respiratory Physiology",
    "programme": "both",
    "explanation": "The Hering-Breuer reflex is initiated by pulmonary stretch receptors during tidal lung inflation (>1 L), sending inhibitory impulses via the vagus nerve to the medullary inspiratory centre.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-020-a",
        "text": "Tension in pulmonary stretch receptors in airway smooth muscle sends vagal afferents that terminate inspiration to prevent over-distension",
        "is_correct": true
      },
      {
        "id": "phys-sba-020-b",
        "text": "Deflation of alveoli triggers instantaneous deep sighing respirations",
        "is_correct": false
      },
      {
        "id": "phys-sba-020-c",
        "text": "Chemical irritation of C-fibres produces prolonged apnoea",
        "is_correct": false
      },
      {
        "id": "phys-sba-020-d",
        "text": "Carotid sinus compression induces sudden paradoxical hyperventilation",
        "is_correct": false
      },
      {
        "id": "phys-sba-020-e",
        "text": "Diaphragmatic fatigue triggers intercostal muscle recruitment",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-021",
    "stem": "What defines Anatomic Dead Space in the human respiratory tract?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Respiratory Physiology",
    "programme": "both",
    "explanation": "Anatomic dead space represents the conducting zone from nose to terminal bronchioles (~2 mL/kg or ~150 mL) that does not participate in alveolar gas exchange.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-021-e",
        "text": "The physiological reserve capacity during strenuous physical exertion",
        "is_correct": false
      },
      {
        "id": "phys-sba-021-d",
        "text": "The total gas volume exchanged during one quiet breathing cycle",
        "is_correct": false
      },
      {
        "id": "phys-sba-021-c",
        "text": "The volume of air remaining in the lungs after maximal forced expiration",
        "is_correct": false
      },
      {
        "id": "phys-sba-021-b",
        "text": "Alveoli that are ventilated but receive zero pulmonary capillary perfusion",
        "is_correct": false
      },
      {
        "id": "phys-sba-021-a",
        "text": "The volume of the conducting airways (nose, pharynx, trachea, bronchi) where no gas exchange occurs (~150 mL in adults)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-022",
    "stem": "In an obstructive lung defect such as chronic asthma or COPD, what spirometry findings are diagnostic?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Respiratory Physiology",
    "programme": "both",
    "explanation": "Obstructive defects impair expiratory flow, reducing FEV1 disproportionately to FVC, resulting in an FEV1/FVC ratio below 70%.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-022-c",
        "text": "Isolated elevation of FEV1 with normal FVC",
        "is_correct": false
      },
      {
        "id": "phys-sba-022-e",
        "text": "Normal FEV1 and FVC with reduced diffusing capacity only",
        "is_correct": false
      },
      {
        "id": "phys-sba-022-d",
        "text": "Markedly elevated peak expiratory flow rate with normal FRC",
        "is_correct": false
      },
      {
        "id": "phys-sba-022-b",
        "text": "Normal or elevated FEV1/FVC ratio (>0.80) with proportionally reduced FVC",
        "is_correct": false
      },
      {
        "id": "phys-sba-022-a",
        "text": "Reduced FEV1, reduced FVC, and an FEV1/FVC ratio < 0.70 (70%)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-023",
    "stem": "What happens to the work of breathing in a patient with severe idiopathic pulmonary fibrosis (restrictive lung disease)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Respiratory Physiology",
    "programme": "both",
    "explanation": "Pulmonary fibrosis stiffens the parenchyma (decreased compliance), increasing the elastic work of breathing. Patients adopt a rapid, shallow breathing pattern to minimize total work.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-023-a",
        "text": "Elastic work of breathing increases due to markedly decreased lung compliance, prompting rapid shallow breathing",
        "is_correct": true
      },
      {
        "id": "phys-sba-023-b",
        "text": "Resistive work increases due to airway narrowing, prompting slow deep breathing",
        "is_correct": false
      },
      {
        "id": "phys-sba-023-c",
        "text": "Total work of breathing decreases because residual volume is smaller",
        "is_correct": false
      },
      {
        "id": "phys-sba-023-e",
        "text": "Surface tension decreases, minimizing the work of chest wall expansion",
        "is_correct": false
      },
      {
        "id": "phys-sba-023-d",
        "text": "Dynamic airway compression during inspiration increases work of diaphragm",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-024",
    "stem": "The Haldane effect describes which physiological phenomenon?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Respiratory Physiology",
    "programme": "both",
    "explanation": "The Haldane effect states that deoxygenated haemoglobin binds CO2 and H+ with higher affinity than oxyhaemoglobin, aiding CO2 pickup in peripheral tissues and CO2 release in the lungs.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-024-d",
        "text": "Alveolar hyperventilation increases dissolved plasma oxygen content",
        "is_correct": false
      },
      {
        "id": "phys-sba-024-c",
        "text": "Binding of oxygen to haemoglobin shifts the pH of red blood cells to alkaline",
        "is_correct": false
      },
      {
        "id": "phys-sba-024-b",
        "text": "Binding of CO2 to haemoglobin displaces oxygen into the tissues",
        "is_correct": false
      },
      {
        "id": "phys-sba-024-e",
        "text": "Carbon monoxide shifts the oxygen dissociation curve to the right",
        "is_correct": false
      },
      {
        "id": "phys-sba-024-a",
        "text": "Deoxygenation of haemoglobin increases its affinity for CO2 and H+, facilitating CO2 loading in peripheral tissues",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-025",
    "stem": "Which cellular transporter in the Thick Ascending Limb of the loop of Henle is inhibited by furosemide?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Renal Physiology",
    "programme": "both",
    "explanation": "Furosemide blocks the NKCC2 symporter in the thick ascending limb, abolishing the medullary hyperosmolar gradient and impairing both urinary concentration and dilution.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-025-b",
        "text": "Na+/Cl- cotransporter (NCCT)",
        "is_correct": false
      },
      {
        "id": "phys-sba-025-a",
        "text": "Na+/K+/2Cl- cotransporter (NKCC2)",
        "is_correct": true
      },
      {
        "id": "phys-sba-025-d",
        "text": "Na+/H+ antiporter (NHE3)",
        "is_correct": false
      },
      {
        "id": "phys-sba-025-c",
        "text": "Epithelial sodium channel (ENaC)",
        "is_correct": false
      },
      {
        "id": "phys-sba-025-e",
        "text": "Na+/glucose cotransporter (SGLT2)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-026",
    "stem": "What is the primary action of Aldosterone on the principal cells of the renal cortical collecting duct?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Renal Physiology",
    "programme": "both",
    "explanation": "Aldosterone binds mineralocorticoid receptors in principal cells, upregulating luminal ENaC channels and basolateral Na+/K+-ATPase to reabsorb Na+ and secrete K+.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-026-a",
        "text": "Increases transcription and insertion of luminal ENaC channels and basolateral Na+/K+-ATPase, promoting Na+ reabsorption and K+ excretion",
        "is_correct": true
      },
      {
        "id": "phys-sba-026-c",
        "text": "Directly blocks H+-ATPase pumps in intercalated cells",
        "is_correct": false
      },
      {
        "id": "phys-sba-026-b",
        "text": "Stimulates water reabsorption independently of solute by inserting aquaporin-2",
        "is_correct": false
      },
      {
        "id": "phys-sba-026-d",
        "text": "Inhibits renin secretion via negative feedback on macula densa cells",
        "is_correct": false
      },
      {
        "id": "phys-sba-026-e",
        "text": "Promotes calcium and magnesium excretion in the distal tubule",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-027",
    "stem": "How does Antidiuretic Hormone (ADH / Vasopressin) concentrate urine in the collecting ducts?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Renal Physiology",
    "programme": "both",
    "explanation": "ADH acts on basolateral V2 receptors of collecting duct principal cells via Gs/cAMP/PKA, promoting translocation of Aquaporin-2 vesicles to the luminal membrane, allowing water to follow the medullary osmotic gradient.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-027-c",
        "text": "Directly stimulates the Na+/Cl- cotransporter in the early distal tubule",
        "is_correct": false
      },
      {
        "id": "phys-sba-027-a",
        "text": "Binds V2 receptors, activates adenylyl cyclase/cAMP, and causes exocytic insertion of Aquaporin-2 water channels into the apical membrane",
        "is_correct": true
      },
      {
        "id": "phys-sba-027-e",
        "text": "Opens calcium-activated chloride channels in the descending limb",
        "is_correct": false
      },
      {
        "id": "phys-sba-027-b",
        "text": "Binds V1 receptors causing intense vasoconstriction of the vasa recta",
        "is_correct": false
      },
      {
        "id": "phys-sba-027-d",
        "text": "Inhibits prostaglandin synthesis in the renal medullary interstitium",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-028",
    "stem": "Which physiological substance provides the gold-standard clinical measurement of Glomerular Filtration Rate (GFR)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Renal Physiology",
    "programme": "both",
    "explanation": "Inulin clearance equals GFR because it is freely filtered at the glomerulus and undergoes zero reabsorption, secretion, or metabolism by the renal tubules.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-028-a",
        "text": "Inulin (freely filtered, neither reabsorbed nor secreted, not metabolized)",
        "is_correct": true
      },
      {
        "id": "phys-sba-028-b",
        "text": "Creatinine (freely filtered with significant tubular reabsorption)",
        "is_correct": false
      },
      {
        "id": "phys-sba-028-e",
        "text": "Glucose (freely filtered and completely cleared in urine)",
        "is_correct": false
      },
      {
        "id": "phys-sba-028-c",
        "text": "Para-aminohippuric acid (PAH, measures renal plasma flow)",
        "is_correct": false
      },
      {
        "id": "phys-sba-028-d",
        "text": "Urea (freely filtered with 50% variable medullary reabsorption)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-029",
    "stem": "What triggers the release of Renin by juxtaglomerular cells in the afferent arteriole?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Renal Physiology",
    "programme": "both",
    "explanation": "Renin release is stimulated by: 1) renal baroreceptors sensing low afferent arteriolar pressure; 2) decreased NaCl delivery sensed by macula densa; 3) renal sympathetic nerve stimulation (beta-1).",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-029-d",
        "text": "Hyperkalaemia and elevated circulating angiotensin II levels",
        "is_correct": false
      },
      {
        "id": "phys-sba-029-e",
        "text": "Parasympathetic stimulation via the pelvic splanchnic nerves",
        "is_correct": false
      },
      {
        "id": "phys-sba-029-c",
        "text": "Increased NaCl delivery and tubular flow rate at the macula densa",
        "is_correct": false
      },
      {
        "id": "phys-sba-029-b",
        "text": "Elevated systemic arterial blood pressure and atrial natriuretic peptide",
        "is_correct": false
      },
      {
        "id": "phys-sba-029-a",
        "text": "Decreased renal perfusion pressure, sympathetic beta-1 stimulation, and decreased NaCl delivery to the macula densa",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-030",
    "stem": "Where is the majority (approximately 65-70%) of filtered water, sodium, and bicarbonate reabsorbed in the nephron?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Renal Physiology",
    "programme": "both",
    "explanation": "The proximal tubule reabsorbs ~67% of filtered water and Na+, 100% of glucose and amino acids, and ~85-90% of filtered bicarbonate via brush border carbonic anhydrase and NHE3.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-030-e",
        "text": "Descending Thin Limb of Henle",
        "is_correct": false
      },
      {
        "id": "phys-sba-030-a",
        "text": "Proximal Convoluted Tubule (PCT)",
        "is_correct": true
      },
      {
        "id": "phys-sba-030-b",
        "text": "Thick Ascending Limb of Henle",
        "is_correct": false
      },
      {
        "id": "phys-sba-030-c",
        "text": "Early Distal Convoluted Tubule",
        "is_correct": false
      },
      {
        "id": "phys-sba-030-d",
        "text": "Cortical Collecting Duct",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-031",
    "stem": "What is the primary role of the Vasa Recta in the renal medulla?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Renal Physiology",
    "programme": "both",
    "explanation": "The vasa recta act as countercurrent exchangers: their hairpin shape and slow blood flow allow passive diffusion of solutes and water, preserving the hypertonic medullary gradient created by the loops of Henle.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-031-b",
        "text": "Generates the medullary osmotic gradient by active solute transport",
        "is_correct": false
      },
      {
        "id": "phys-sba-031-d",
        "text": "Filters 20% of plasma volume to form the primary ultrafiltrate",
        "is_correct": false
      },
      {
        "id": "phys-sba-031-a",
        "text": "Maintains the hyperosmolar medullary gradient via passive countercurrent exchange of water and solutes",
        "is_correct": true
      },
      {
        "id": "phys-sba-031-e",
        "text": "Directly synthesizes erythropoietin in response to local hyperoxia",
        "is_correct": false
      },
      {
        "id": "phys-sba-031-c",
        "text": "Supplies high-pressure arterial blood to the renal cortex",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-032",
    "stem": "In metabolic acidosis, what is the primary renal mechanism for excreting excess hydrogen ions and generating new bicarbonate?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Renal Physiology",
    "programme": "both",
    "explanation": "During chronic acidosis, the proximal tubule metabolizes glutamine into ammonium (NH4+) and alpha-ketoglutarate, which generates two new HCO3- ions for systemic circulation while NH4+ is excreted in urine.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-032-a",
        "text": "Renal ammoniagenesis in the proximal tubule (glutamine metabolism yielding NH4+ and new HCO3-)",
        "is_correct": true
      },
      {
        "id": "phys-sba-032-e",
        "text": "Passive reabsorption of chloride ions in exchange for sodium",
        "is_correct": false
      },
      {
        "id": "phys-sba-032-c",
        "text": "Direct active transport of carbonic acid across the thin descending limb",
        "is_correct": false
      },
      {
        "id": "phys-sba-032-b",
        "text": "Precipitation of calcium hydrogen phosphate stones in collecting ducts",
        "is_correct": false
      },
      {
        "id": "phys-sba-032-d",
        "text": "Inhibition of apical H+/K+-ATPase in type A intercalated cells",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-033",
    "stem": "How does Angiotensin II exert its autoregulatory effect on Glomerular Filtration Rate during hypovolaemia?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Renal Physiology",
    "programme": "both",
    "explanation": "Angiotensin II preferentially constricts the post-glomerular efferent arteriole, maintaining intraglomerular hydrostatic pressure and GFR despite systemic hypotension.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-033-b",
        "text": "Dilates the efferent arteriole while constricting the afferent arteriole",
        "is_correct": false
      },
      {
        "id": "phys-sba-033-e",
        "text": "Inhibits thirst and suppresses aldosterone secretion",
        "is_correct": false
      },
      {
        "id": "phys-sba-033-c",
        "text": "Directly constricts podocyte slit diaphragms to decrease filtration area",
        "is_correct": false
      },
      {
        "id": "phys-sba-033-a",
        "text": "Preferentially constricts the efferent arteriole, increasing glomerular capillary hydrostatic pressure and preserving GFR",
        "is_correct": true
      },
      {
        "id": "phys-sba-033-d",
        "text": "Relaxes mesangial cells to expand glomerular surface area",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-034",
    "stem": "At what plasma glucose concentration is the renal threshold (transport maximum, Tm) exceeded, leading to glucosuria?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Renal Physiology",
    "programme": "both",
    "explanation": "The tubular transport maximum (TmG) for glucose via SGLT2 and SGLT1 is saturated when plasma glucose exceeds ~10–11 mmol/L (180–200 mg/dL), after which excess glucose spills into urine.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-034-b",
        "text": "5.5 mmol/L (100 mg/dL)",
        "is_correct": false
      },
      {
        "id": "phys-sba-034-c",
        "text": "7.0 mmol/L (126 mg/dL)",
        "is_correct": false
      },
      {
        "id": "phys-sba-034-e",
        "text": "22 mmol/L (400 mg/dL)",
        "is_correct": false
      },
      {
        "id": "phys-sba-034-a",
        "text": "Approximately 10 to 11 mmol/L (180 to 200 mg/dL)",
        "is_correct": true
      },
      {
        "id": "phys-sba-034-d",
        "text": "15 to 16 mmol/L (270 to 300 mg/dL)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-035",
    "stem": "Which hormone inhibits sodium reabsorption in the renal medullary collecting ducts in response to atrial stretch?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Renal Physiology",
    "programme": "both",
    "explanation": "ANP is secreted by atrial myocytes in response to hypervolaemia/stretch. It acts via cGMP to dilate afferent arterioles, constrict efferent arterioles, and inhibit Na+ reabsorption in collecting ducts.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-035-c",
        "text": "Angiotensin II",
        "is_correct": false
      },
      {
        "id": "phys-sba-035-b",
        "text": "Aldosterone",
        "is_correct": false
      },
      {
        "id": "phys-sba-035-a",
        "text": "Atrial Natriuretic Peptide (ANP)",
        "is_correct": true
      },
      {
        "id": "phys-sba-035-d",
        "text": "Parathyroid Hormone (PTH)",
        "is_correct": false
      },
      {
        "id": "phys-sba-035-e",
        "text": "Erythropoietin (EPO)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-036",
    "stem": "How does Parathyroid Hormone (PTH) alter phosphate and calcium handling in the renal tubules?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Renal Physiology",
    "programme": "both",
    "explanation": "PTH promotes phosphate excretion (inhibits Na+/phosphate cotransporter in PCT) and increases calcium reabsorption in the distal convoluted tubule, raising serum ionized Ca2+ and lowering phosphate.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-036-d",
        "text": "Promotes phosphate retention to facilitate bone remineralization",
        "is_correct": false
      },
      {
        "id": "phys-sba-036-e",
        "text": "Stimulates calcium excretion while conserving magnesium exclusively",
        "is_correct": false
      },
      {
        "id": "phys-sba-036-a",
        "text": "Inhibits proximal tubule phosphate reabsorption (causes phosphaturia) and stimulates distal convoluted tubule calcium reabsorption",
        "is_correct": true
      },
      {
        "id": "phys-sba-036-b",
        "text": "Stimulates both phosphate and calcium reabsorption in the proximal tubule",
        "is_correct": false
      },
      {
        "id": "phys-sba-036-c",
        "text": "Inhibits both calcium and phosphate reabsorption in the loop of Henle",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-037",
    "stem": "Which cells in the gastric mucosa secrete Hydrochloric Acid (HCl) and Intrinsic Factor?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Gastrointestinal Physiology",
    "programme": "both",
    "explanation": "Parietal cells in the gastric corpus/fundus secrete HCl (via H+/K+-ATPase proton pumps) and intrinsic factor (essential for terminal ileal absorption of vitamin B12).",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-037-c",
        "text": "G cells",
        "is_correct": false
      },
      {
        "id": "phys-sba-037-b",
        "text": "Chief (peptic) cells",
        "is_correct": false
      },
      {
        "id": "phys-sba-037-d",
        "text": "Enterochromaffin-like (ECL) cells",
        "is_correct": false
      },
      {
        "id": "phys-sba-037-a",
        "text": "Parietal (oxyntic) cells",
        "is_correct": true
      },
      {
        "id": "phys-sba-037-e",
        "text": "Mucous neck cells",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-038",
    "stem": "Which endogenous secretagogue is the MOST potent physiological stimulus for parietal cell acid secretion via H2 receptors?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Gastrointestinal Physiology",
    "programme": "both",
    "explanation": "Histamine released by ECL cells is the strongest paracrine stimulator of parietal acid production, acting via H2 receptors and cAMP. Gastrin and vagal ACh stimulate acid partly directly, but mainly by triggering histamine release.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-038-a",
        "text": "Histamine (released from Enterochromaffin-like cells)",
        "is_correct": true
      },
      {
        "id": "phys-sba-038-d",
        "text": "Somatostatin acting on sst2 receptors",
        "is_correct": false
      },
      {
        "id": "phys-sba-038-e",
        "text": "Secretin acting on ductal VIP receptors",
        "is_correct": false
      },
      {
        "id": "phys-sba-038-b",
        "text": "Gastrin acting directly on parietal gastrin/CCK-B receptors",
        "is_correct": false
      },
      {
        "id": "phys-sba-038-c",
        "text": "Acetylcholine acting on muscarinic M3 receptors",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-039",
    "stem": "What is the primary physiological stimulus for the release of Cholecystokinin (CCK) from I-cells in the duodenum?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Gastrointestinal Physiology",
    "programme": "both",
    "explanation": "Duodenal and jejunal I-cells release CCK in response to fatty acids (>8 carbons) and amino acids/peptides. CCK stimulates gallbladder contraction, pancreatic acinar enzyme secretion, and relaxes the sphincter of Oddi.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-039-d",
        "text": "Sympathetic postganglionic noradrenergic nerve stimulation",
        "is_correct": false
      },
      {
        "id": "phys-sba-039-c",
        "text": "Distension of the gastric antrum by alkaline fluid",
        "is_correct": false
      },
      {
        "id": "phys-sba-039-b",
        "text": "Acidic chyme with pH < 4.5 entering the duodenal cap",
        "is_correct": false
      },
      {
        "id": "phys-sba-039-e",
        "text": "High luminal concentrations of glucose and fructose",
        "is_correct": false
      },
      {
        "id": "phys-sba-039-a",
        "text": "Fatty acids, monoglycerides, and amino acids in the duodenal lumen",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-040",
    "stem": "Which gastrointestinal hormone stimulates copious secretion of bicarbonate-rich pancreatic fluid and neutralizes gastric acid in the duodenum?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Gastrointestinal Physiology",
    "programme": "both",
    "explanation": "Secretin is released by duodenal S-cells when luminal pH drops below 4.5. It acts on pancreatic ductal cells via cAMP to secrete water and HCO3-, neutralizing gastric chyme.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-040-e",
        "text": "Vasoactive Intestinal Peptide (VIP)",
        "is_correct": false
      },
      {
        "id": "phys-sba-040-b",
        "text": "Gastrin",
        "is_correct": false
      },
      {
        "id": "phys-sba-040-c",
        "text": "Motilin",
        "is_correct": false
      },
      {
        "id": "phys-sba-040-a",
        "text": "Secretin (secreted by S-cells in response to luminal H+)",
        "is_correct": true
      },
      {
        "id": "phys-sba-040-d",
        "text": "Glucagon-like peptide 1 (GLP-1)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-041",
    "stem": "Where and by what mechanism is Vitamin B12 (cobalamin) absorbed in the gastrointestinal tract?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Gastrointestinal Physiology",
    "programme": "both",
    "explanation": "Vitamin B12 binds haptocorrin in saliva, is transferred to intrinsic factor in the duodenum, and the intact IF-B12 complex is absorbed by cubilin-amnionless receptors in the terminal ileum.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-041-a",
        "text": "Terminal ileum via receptor-mediated endocytosis of the Intrinsic Factor-B12 complex (Cubilin receptors)",
        "is_correct": true
      },
      {
        "id": "phys-sba-041-c",
        "text": "Jejunum via the sodium-glucose cotransporter (SGLT1)",
        "is_correct": false
      },
      {
        "id": "phys-sba-041-e",
        "text": "Transverse colon via short-chain fatty acid symporters",
        "is_correct": false
      },
      {
        "id": "phys-sba-041-b",
        "text": "Duodenum via passive non-carrier mediated transcellular diffusion",
        "is_correct": false
      },
      {
        "id": "phys-sba-041-d",
        "text": "Gastric fundus by pinocytosis across parietal cells",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-042",
    "stem": "What is the primary motor pattern of the small intestine during the interdigestive (fasting) state that clears residual debris?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Gastrointestinal Physiology",
    "programme": "both",
    "explanation": "The Migrating Motor Complex (MMC) is a cyclic electromechanical pattern that sweeps through the stomach and small intestine every 90-120 min during fasting, clearing undigested food and bacteria. It is mediated by motilin.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-042-b",
        "text": "Segmental non-propulsive contractions",
        "is_correct": false
      },
      {
        "id": "phys-sba-042-a",
        "text": "Migrating Motor Complex (MMC), initiated by motilin",
        "is_correct": true
      },
      {
        "id": "phys-sba-042-d",
        "text": "Retrograde giant contractions",
        "is_correct": false
      },
      {
        "id": "phys-sba-042-c",
        "text": "Mass movement peristalsis",
        "is_correct": false
      },
      {
        "id": "phys-sba-042-e",
        "text": "Receptive gastric relaxation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-043",
    "stem": "Which transporter on the enterocyte apical brush border mediates secondary active transport of glucose and galactose?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Gastrointestinal Physiology",
    "programme": "both",
    "explanation": "SGLT1 couples the entry of 2 Na+ ions down their electrochemical gradient with 1 molecule of glucose or galactose. Fructose is absorbed by facilitated diffusion via GLUT5. GLUT2 exports all three sugars across the basolateral membrane.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-043-d",
        "text": "Facilitated Glucose Transporter 4 (GLUT4)",
        "is_correct": false
      },
      {
        "id": "phys-sba-043-c",
        "text": "Facilitated Glucose Transporter 2 (GLUT2)",
        "is_correct": false
      },
      {
        "id": "phys-sba-043-b",
        "text": "Facilitated Glucose Transporter 5 (GLUT5)",
        "is_correct": false
      },
      {
        "id": "phys-sba-043-e",
        "text": "Monocarboxylate Transporter 1 (MCT1)",
        "is_correct": false
      },
      {
        "id": "phys-sba-043-a",
        "text": "Sodium-Glucose Cotransporter 1 (SGLT1)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-044",
    "stem": "What constitutes the Enterohepatic Circulation of bile salts?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Gastrointestinal Physiology",
    "programme": "both",
    "explanation": "Over 95% of bile salts are actively reabsorbed in the terminal ileum via the apical sodium-dependent bile acid transporter (ASBT), returned to the liver via the portal vein, and re-secreted into bile.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-044-a",
        "text": "Active reabsorption of conjugated bile salts in the terminal ileum into the portal circulation for re-uptake and re-secretion by hepatocytes",
        "is_correct": true
      },
      {
        "id": "phys-sba-044-b",
        "text": "Passive filtration of bile salts at the glomerulus followed by loop reabsorption",
        "is_correct": false
      },
      {
        "id": "phys-sba-044-e",
        "text": "Recycling of unconjugated bilirubin across the gastric mucosa",
        "is_correct": false
      },
      {
        "id": "phys-sba-044-d",
        "text": "Secretion of bile salts directly into systemic veins via thoracic duct lymphatics",
        "is_correct": false
      },
      {
        "id": "phys-sba-044-c",
        "text": "Complete destruction of bile salts in the colon with de novo synthesis daily",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-045",
    "stem": "Which peptide hormone secreted by K-cells in the duodenum and jejunum enhances glucose-stimulated insulin secretion (incretin effect)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Gastrointestinal Physiology",
    "programme": "both",
    "explanation": "GIP (from K-cells) and GLP-1 (from L-cells) are the primary incretins. Oral glucose stimulates greater insulin release than an equivalent IV glucose dose due to these incretin hormones.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-045-a",
        "text": "Glucose-dependent Insulinotropic Polypeptide (GIP)",
        "is_correct": true
      },
      {
        "id": "phys-sba-045-b",
        "text": "Somatostatin",
        "is_correct": false
      },
      {
        "id": "phys-sba-045-c",
        "text": "Gastrin-Releasing Peptide (GRP)",
        "is_correct": false
      },
      {
        "id": "phys-sba-045-d",
        "text": "Neurotensin",
        "is_correct": false
      },
      {
        "id": "phys-sba-045-e",
        "text": "Pancreatic Polypeptide (PP)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-046",
    "stem": "What is the mechanism of action of Somatostatin (released by D-cells) in gastric physiology?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Gastrointestinal Physiology",
    "programme": "both",
    "explanation": "Somatostatin (paracrine from D-cells) acts as a potent inhibitor of GI exocrine and endocrine secretions, suppressing gastrin, histamine, HCl, secretin, CCK, and insulin.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-046-a",
        "text": "Inhibits parietal cell HCl secretion, ECL cell histamine release, and G-cell gastrin release (universal off-switch)",
        "is_correct": true
      },
      {
        "id": "phys-sba-046-e",
        "text": "Enhances duodenal iron and calcium absorption",
        "is_correct": false
      },
      {
        "id": "phys-sba-046-c",
        "text": "Promotes receptive relaxation of the stomach fundus via nitric oxide",
        "is_correct": false
      },
      {
        "id": "phys-sba-046-d",
        "text": "Selectively activates pancreatic lipase and colonic chloride secretion",
        "is_correct": false
      },
      {
        "id": "phys-sba-046-b",
        "text": "Stimulates chief cell pepsinogen production and gastric motility",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-047",
    "stem": "Which brush-border enzyme converts inactive pancreatic trypsinogen into active trypsin in the duodenum?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Gastrointestinal Physiology",
    "programme": "both",
    "explanation": "Enteropeptidase (enterokinase) on the duodenal enterocyte brush border cleaves a hexapeptide from trypsinogen to form active trypsin, which then autocatalytically activates all other pancreatic zymogens.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-047-d",
        "text": "Carboxypeptidase A",
        "is_correct": false
      },
      {
        "id": "phys-sba-047-c",
        "text": "Chymotrypsin",
        "is_correct": false
      },
      {
        "id": "phys-sba-047-b",
        "text": "Pepsin",
        "is_correct": false
      },
      {
        "id": "phys-sba-047-e",
        "text": "Dipeptidyl peptidase-4 (DPP-4)",
        "is_correct": false
      },
      {
        "id": "phys-sba-047-a",
        "text": "Enteropeptidase (Enterokinase)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-048",
    "stem": "The defecation reflex is integrated primarily at which spinal cord level, and which autonomic nerves mediate it?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Gastrointestinal Physiology",
    "programme": "both",
    "explanation": "Distension of the rectal wall initiates intrinsic and parasympathetic defecation reflexes integrated in S2-S4 via pelvic splanchnic nerves, producing strong peristaltic contractions and relaxing the internal anal sphincter.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-048-e",
        "text": "Brainstem vagal nuclei via the wandering nerve",
        "is_correct": false
      },
      {
        "id": "phys-sba-048-c",
        "text": "L4–S1 segments via the sciatic nerve trunk",
        "is_correct": false
      },
      {
        "id": "phys-sba-048-b",
        "text": "T10–L2 thoracolumbar segments via sympathetic hypogastric nerves",
        "is_correct": false
      },
      {
        "id": "phys-sba-048-d",
        "text": "C3–C5 cervical segments via the phrenic nerve",
        "is_correct": false
      },
      {
        "id": "phys-sba-048-a",
        "text": "S2–S4 sacral segments via parasympathetic pelvic splanchnic nerves",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-049",
    "stem": "What ion conductance maintains the resting membrane potential of a typical mammalian neuron at approximately -70 mV?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Neurophysiology",
    "programme": "both",
    "explanation": "Resting membrane potential is close to the equilibrium potential of potassium (EK ~ -90 mV) because the neuronal membrane at rest has high permeability to K+ through leak channels compared to Na+ or Ca2+.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-049-a",
        "text": "High resting membrane permeability to K+ via inward rectifier and background leak potassium channels",
        "is_correct": true
      },
      {
        "id": "phys-sba-049-b",
        "text": "High resting membrane permeability to Na+ through voltage-gated channels",
        "is_correct": false
      },
      {
        "id": "phys-sba-049-c",
        "text": "Active inward transport of Ca2+ by the plasma membrane calcium pump",
        "is_correct": false
      },
      {
        "id": "phys-sba-049-d",
        "text": "Unchecked influx of chloride ions through GABA-gated pores",
        "is_correct": false
      },
      {
        "id": "phys-sba-049-e",
        "text": "Continuous extrusion of intracellular protein anions",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-050",
    "stem": "During an action potential, which event causes the absolute refractory period?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Neurophysiology",
    "programme": "both",
    "explanation": "The absolute refractory period is dictated by voltage-gated Na+ channel inactivation. Until the membrane repolarizes and the inactivation gate resets to the closed-but-activatable state, no stimulus can elicit a second action potential.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-050-a",
        "text": "Inactivation of voltage-gated Na+ channels (closure of the h-inactivation gate)",
        "is_correct": true
      },
      {
        "id": "phys-sba-050-c",
        "text": "Depletion of extracellular Ca2+ in the synaptic cleft",
        "is_correct": false
      },
      {
        "id": "phys-sba-050-b",
        "text": "Hyperpolarization below resting potential due to slow K+ closure",
        "is_correct": false
      },
      {
        "id": "phys-sba-050-d",
        "text": "Saturation of myelin sheath capacitance",
        "is_correct": false
      },
      {
        "id": "phys-sba-050-e",
        "text": "Excessive release of GABA from inhibitory interneurons",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-051",
    "stem": "Saltatory conduction in myelinated axons occurs because action potentials:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Neurophysiology",
    "programme": "both",
    "explanation": "Myelin increases membrane resistance and decreases capacitance. Ion exchange occurs almost exclusively at the unmyelinated Nodes of Ranvier where Na+ channels are concentrated, dramatically increasing conduction velocity.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-051-c",
        "text": "Propagate continuously without the involvement of ion channels",
        "is_correct": false
      },
      {
        "id": "phys-sba-051-e",
        "text": "Move backwards and forwards simultaneously along the axon",
        "is_correct": false
      },
      {
        "id": "phys-sba-051-b",
        "text": "Travel exclusively through the insulating lipid bilayer of the myelin sheath",
        "is_correct": false
      },
      {
        "id": "phys-sba-051-d",
        "text": "Require zero ATP expenditure by Na+/K+-ATPase pumps",
        "is_correct": false
      },
      {
        "id": "phys-sba-051-a",
        "text": "Jump between Nodes of Ranvier where voltage-gated Na+ channels are densely clustered",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-052",
    "stem": "Which excitatory neurotransmitter is the primary mediator of fast synaptic transmission in the human central nervous system?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Neurophysiology",
    "programme": "both",
    "explanation": "Glutamate is the principal excitatory neurotransmitter in the brain, acting on ionotropic receptors (AMPA, NMDA, kainate) to mediate rapid EPSPs.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-052-b",
        "text": "Gamma-aminobutyric acid (GABA)",
        "is_correct": false
      },
      {
        "id": "phys-sba-052-a",
        "text": "Glutamate",
        "is_correct": true
      },
      {
        "id": "phys-sba-052-e",
        "text": "Substance P",
        "is_correct": false
      },
      {
        "id": "phys-sba-052-d",
        "text": "Dopamine",
        "is_correct": false
      },
      {
        "id": "phys-sba-052-c",
        "text": "Glycine",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-053",
    "stem": "Which neurotransmitter is the primary inhibitory transmitter in the spinal cord, and what poison antagonizes its receptor?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Neurophysiology",
    "programme": "both",
    "explanation": "Glycine is the predominant inhibitory neurotransmitter in the spinal cord and brainstem. Strychnine competitively blocks glycine receptors, causing convulsions and muscle spasms.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-053-d",
        "text": "Dopamine; antagonized by Haloperidol",
        "is_correct": false
      },
      {
        "id": "phys-sba-053-a",
        "text": "Glycine; antagonized by Strychnine",
        "is_correct": true
      },
      {
        "id": "phys-sba-053-e",
        "text": "Serotonin; antagonized by Ondansetron",
        "is_correct": false
      },
      {
        "id": "phys-sba-053-b",
        "text": "GABA; antagonized by Picrotoxin",
        "is_correct": false
      },
      {
        "id": "phys-sba-053-c",
        "text": "Acetylcholine; antagonized by Atropine",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-054",
    "stem": "The monosynaptic stretch reflex (myotatic reflex, such as the knee jerk) is initiated by which receptor?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Neurophysiology",
    "programme": "both",
    "explanation": "The muscle spindle detects muscle stretch. Ia afferent fibres enter the spinal cord and synapse directly on alpha motor neurons innervating the homonymous muscle, causing reflex contraction.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-054-c",
        "text": "Pacinian corpuscle (A-beta fibres)",
        "is_correct": false
      },
      {
        "id": "phys-sba-054-d",
        "text": "Free nerve endings (unmyelinated C fibres)",
        "is_correct": false
      },
      {
        "id": "phys-sba-054-b",
        "text": "Golgi tendon organ (Ib afferent fibres)",
        "is_correct": false
      },
      {
        "id": "phys-sba-054-a",
        "text": "Muscle spindle (annulospiral primary afferents, Ia fibres)",
        "is_correct": true
      },
      {
        "id": "phys-sba-054-e",
        "text": "Ruffini endings (slowly adapting type II)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-055",
    "stem": "What is the function of the Golgi Tendon Organ reflex (inverse myotatic reflex)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Neurophysiology",
    "programme": "both",
    "explanation": "Golgi tendon organs are arranged in series with muscle fibres. When tension becomes excessive, Ib afferents activate inhibitory interneurons in the spinal cord, relaxing the agonist muscle.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-055-b",
        "text": "Detects muscle stretch and causes immediate muscle shortening",
        "is_correct": false
      },
      {
        "id": "phys-sba-055-d",
        "text": "Coordinates reciprocal excitation of antagonist muscle groups",
        "is_correct": false
      },
      {
        "id": "phys-sba-055-a",
        "text": "Senses muscle tension via Ib afferents and causes reflex relaxation of the contracting muscle to prevent tendon avulsion",
        "is_correct": true
      },
      {
        "id": "phys-sba-055-c",
        "text": "Maintains baseline gamma motor neuron efferent tone",
        "is_correct": false
      },
      {
        "id": "phys-sba-055-e",
        "text": "Transmits epicritic vibration sense to the dorsal columns",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-056",
    "stem": "Which sensory tract carries fine discriminative touch, conscious proprioception, and vibration sense to the cerebral cortex?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Neurophysiology",
    "programme": "both",
    "explanation": "The dorsal column-medial lemniscal system transmits discriminative touch, vibration, and conscious proprioception. First-order fibres ascend ipsilaterally in gracilis/cuneatus, synapsing and decussating in the medulla.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-056-e",
        "text": "Rubrospinal tract",
        "is_correct": false
      },
      {
        "id": "phys-sba-056-d",
        "text": "Anterior spinocerebellar tract",
        "is_correct": false
      },
      {
        "id": "phys-sba-056-c",
        "text": "Lateral corticospinal tract",
        "is_correct": false
      },
      {
        "id": "phys-sba-056-b",
        "text": "Anterolateral system (spinothalamic tract)",
        "is_correct": false
      },
      {
        "id": "phys-sba-056-a",
        "text": "Dorsal Column-Medial Lemniscal pathway (fasciculus gracilis and cuneatus)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-057",
    "stem": "Where do second-order neurons of the lateral spinothalamic tract decussate?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Neurophysiology",
    "programme": "both",
    "explanation": "Pain and temperature fibres enter the dorsal horn, synapse in the substantia gelatinosa, and second-order axons cross in the anterior white commissure within 1-2 segments before ascending as the spinothalamic tract.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-057-e",
        "text": "In the midbrain superior colliculus",
        "is_correct": false
      },
      {
        "id": "phys-sba-057-d",
        "text": "In the thalamic ventral posterolateral (VPL) nucleus",
        "is_correct": false
      },
      {
        "id": "phys-sba-057-c",
        "text": "In the internal capsule",
        "is_correct": false
      },
      {
        "id": "phys-sba-057-b",
        "text": "At the junction of the medulla and pons",
        "is_correct": false
      },
      {
        "id": "phys-sba-057-a",
        "text": "At the spinal cord level of entry in the anterior white commissure",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-058",
    "stem": "What characterizes the Blood-Brain Barrier (BBB) anatomically?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Neurophysiology",
    "programme": "both",
    "explanation": "The BBB consists of non-fenestrated capillary endothelial cells joined by tight junctions, a basal lamina, pericytes, and foot processes of astrocytes, strictly limiting paracellular transport.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-058-c",
        "text": "Discontinuous sinusoidal endothelium with large intercellular clefts",
        "is_correct": false
      },
      {
        "id": "phys-sba-058-a",
        "text": "Continuous brain capillary endothelial cells with tight junctions (zonula occludens), supported by pericytes and astrocyte end-feet",
        "is_correct": true
      },
      {
        "id": "phys-sba-058-b",
        "text": "Fenestrated capillaries surrounded by thick connective tissue trabeculae",
        "is_correct": false
      },
      {
        "id": "phys-sba-058-e",
        "text": "Unmyelinated pia mater vessels with porous basement membranes",
        "is_correct": false
      },
      {
        "id": "phys-sba-058-d",
        "text": "Ependymal lining of the lateral ventricles with loose junctions",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-059",
    "stem": "Which EEG wave pattern is characteristic of normal alert wakefulness with eyes OPEN, focusing on a mental task?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Neurophysiology",
    "programme": "both",
    "explanation": "Beta rhythms (>13 Hz) predominate during active cognitive concentration and alertness with eyes open. Alpha rhythm (8-13 Hz) appears when relaxed with eyes closed.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-059-a",
        "text": "Beta waves (13–30 Hz, low voltage, desynchronized)",
        "is_correct": true
      },
      {
        "id": "phys-sba-059-b",
        "text": "Alpha waves (8–13 Hz, high voltage, synchronized over occiput)",
        "is_correct": false
      },
      {
        "id": "phys-sba-059-c",
        "text": "Theta waves (4–7 Hz, prominent in stage 1 NREM sleep)",
        "is_correct": false
      },
      {
        "id": "phys-sba-059-d",
        "text": "Delta waves (0.5–4 Hz, high amplitude, deep slow-wave sleep)",
        "is_correct": false
      },
      {
        "id": "phys-sba-059-e",
        "text": "Sleep spindles and K-complexes",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-060",
    "stem": "Which basal ganglia pathway is inhibited by dopamine acting on D2 receptors, and what is its net effect on cortical motor drive?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Neurophysiology",
    "programme": "both",
    "explanation": "Dopamine from substantia nigra pars compacta stimulates the direct pathway (via D1 receptors) and inhibits the indirect pathway (via D2 receptors). Both actions promote motor cortex activation and facilitate voluntary movement.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-060-a",
        "text": "Indirect pathway; dopamine inhibits the indirect pathway, thereby disinhibiting the thalamus and promoting movement",
        "is_correct": true
      },
      {
        "id": "phys-sba-060-b",
        "text": "Direct pathway; dopamine inhibits the direct pathway to terminate tremor",
        "is_correct": false
      },
      {
        "id": "phys-sba-060-c",
        "text": "Rubrospinal pathway; dopamine stimulates red nucleus output",
        "is_correct": false
      },
      {
        "id": "phys-sba-060-d",
        "text": "Vestibulospinal pathway; dopamine blocks extensor postural tone",
        "is_correct": false
      },
      {
        "id": "phys-sba-060-e",
        "text": "Nigrostriatal pathway; dopamine stimulates GABAergic output from the striatum",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-061",
    "stem": "Which hormone is synthesized by the hypothalamus and transported to the posterior pituitary (neurohypophysis) via axonal flow?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Endocrine Physiology",
    "programme": "both",
    "explanation": "The posterior pituitary stores and secretes oxytocin (paraventricular nucleus) and vasopressin/ADH (supraoptic nucleus), synthesized as prohormones in the hypothalamus and transported down the hypothalamo-hypophyseal tract.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-061-b",
        "text": "Growth Hormone (GH) and Prolactin",
        "is_correct": false
      },
      {
        "id": "phys-sba-061-d",
        "text": "Luteinizing Hormone (LH) and FSH",
        "is_correct": false
      },
      {
        "id": "phys-sba-061-e",
        "text": "Thyroperoxidase and Calcitonin",
        "is_correct": false
      },
      {
        "id": "phys-sba-061-a",
        "text": "Oxytocin and Arginine Vasopressin (ADH)",
        "is_correct": true
      },
      {
        "id": "phys-sba-061-c",
        "text": "Adrenocorticotropic Hormone (ACTH) and TSH",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-062",
    "stem": "What is the primary action of Insulin on target tissues (adipose tissue and skeletal muscle)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Endocrine Physiology",
    "programme": "both",
    "explanation": "Insulin acts on receptor tyrosine kinases to activate the IRS-1/PI3K/Akt pathway, inducing GLUT4 vesicle translocation in skeletal muscle and adipose tissue, while stimulating glycogen and protein synthesis.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-062-e",
        "text": "Blocks amino acid uptake and accelerates gluconeogenesis",
        "is_correct": false
      },
      {
        "id": "phys-sba-062-d",
        "text": "Inhibits glucokinase in hepatocytes to halt glucose phosphorylation",
        "is_correct": false
      },
      {
        "id": "phys-sba-062-c",
        "text": "Activates hormone-sensitive lipase in adipose tissue to promote lipolysis",
        "is_correct": false
      },
      {
        "id": "phys-sba-062-b",
        "text": "Directly stimulates glycogen phosphorylase in skeletal muscle",
        "is_correct": false
      },
      {
        "id": "phys-sba-062-a",
        "text": "Promotes translocation of GLUT4 glucose transporter vesicles to the plasma membrane, facilitating glucose uptake",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-063",
    "stem": "How does Cortisol influence blood glucose levels during stress and fasting?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Endocrine Physiology",
    "programme": "both",
    "explanation": "Cortisol is a counter-regulatory catabolic hormone: it upregulates gluconeogenic enzymes (PEPCK, G6Pase), mobilizes amino acids from muscle, enhances lipolysis, and decreases peripheral glucose utilization.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-063-a",
        "text": "Stimulates hepatic gluconeogenesis, induces skeletal muscle protein catabolism, and decreases peripheral glucose uptake",
        "is_correct": true
      },
      {
        "id": "phys-sba-063-b",
        "text": "Increases glycogen synthesis in skeletal muscle and decreases lipolysis",
        "is_correct": false
      },
      {
        "id": "phys-sba-063-d",
        "text": "Increases GLUT4 expression in visceral adipose tissue",
        "is_correct": false
      },
      {
        "id": "phys-sba-063-e",
        "text": "Inhibits phosphoenolpyruvate carboxykinase (PEPCK) in the liver",
        "is_correct": false
      },
      {
        "id": "phys-sba-063-c",
        "text": "Stimulates pancreatic beta cells to produce massive insulin surges",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-064",
    "stem": "What is the principal biological action of Thyroid Hormones (T3 and T4) at the cellular level?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Endocrine Physiology",
    "programme": "both",
    "explanation": "T3 binds nuclear thyroid hormone receptors (TR-RXR heterodimers), upregulating Na+/K+-ATPase, uncoupling proteins (thermogenesis), and beta-1 adrenergic receptors, thereby elevating basal metabolic rate.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-064-e",
        "text": "Promotes peripheral conversion of cholesterol into bile salts exclusively",
        "is_correct": false
      },
      {
        "id": "phys-sba-064-c",
        "text": "Directly suppresses mitochondrial ATP synthase to generate futile heat",
        "is_correct": false
      },
      {
        "id": "phys-sba-064-d",
        "text": "Inhibits beta-adrenergic receptor expression in cardiac myocytes",
        "is_correct": false
      },
      {
        "id": "phys-sba-064-a",
        "text": "Binds nuclear thyroid receptors to stimulate Na+/K+-ATPase synthesis, increasing basal metabolic rate and oxygen consumption",
        "is_correct": true
      },
      {
        "id": "phys-sba-064-b",
        "text": "Activates Gs-coupled cell surface receptors to stimulate calcitonin release",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-065",
    "stem": "What is the primary negative feedback signal that regulates Growth Hormone (GH) secretion from the anterior pituitary?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Endocrine Physiology",
    "programme": "both",
    "explanation": "GH stimulates hepatic secretion of IGF-1. IGF-1 exerts strong negative feedback by inhibiting anterior pituitary GH secretion and stimulating hypothalamic somatostatin (GHIH) release.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-065-d",
        "text": "Circulating plasma glucose drop below 3.0 mmol/L",
        "is_correct": false
      },
      {
        "id": "phys-sba-065-c",
        "text": "Dopamine released from the tuberoinfundibular pathway",
        "is_correct": false
      },
      {
        "id": "phys-sba-065-b",
        "text": "Ghrelin secreted by the gastric fundus",
        "is_correct": false
      },
      {
        "id": "phys-sba-065-a",
        "text": "Insulin-like Growth Factor 1 (IGF-1 / Somatomedin C) produced in the liver",
        "is_correct": true
      },
      {
        "id": "phys-sba-065-e",
        "text": "Arginine and leucine in portal blood",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-066",
    "stem": "Which hypothalamic neurohormone tonically inhibits Prolactin secretion from the anterior pituitary?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Endocrine Physiology",
    "programme": "both",
    "explanation": "Prolactin is uniquely under tonic hypothalamic inhibition mediated by dopamine from the tuberoinfundibular tract. Disruption of the pituitary stalk causes elevated prolactin levels with loss of all other pituitary hormones.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-066-d",
        "text": "Vasoactive Intestinal Peptide (VIP)",
        "is_correct": false
      },
      {
        "id": "phys-sba-066-c",
        "text": "Gonadotropin-Releasing Hormone (GnRH)",
        "is_correct": false
      },
      {
        "id": "phys-sba-066-b",
        "text": "Thyrotropin-Releasing Hormone (TRH)",
        "is_correct": false
      },
      {
        "id": "phys-sba-066-a",
        "text": "Dopamine (Prolactin-Inhibiting Hormone)",
        "is_correct": true
      },
      {
        "id": "phys-sba-066-e",
        "text": "Somatostatin (SS)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-067",
    "stem": "Which zone of the adrenal cortex synthesizes Aldosterone, and which key enzyme is restricted to this zone?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Endocrine Physiology",
    "programme": "both",
    "explanation": "The outermost zona glomerulosa lacks 17-alpha-hydroxylase but uniquely contains aldosterone synthase (CYP11B2), allowing it to convert corticosterone to aldosterone under the control of Angiotensin II and K+.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-067-d",
        "text": "Adrenal medulla; Phenylethanolamine N-methyltransferase (PNMT)",
        "is_correct": false
      },
      {
        "id": "phys-sba-067-c",
        "text": "Zona reticularis; 21-hydroxylase (CYP21A2)",
        "is_correct": false
      },
      {
        "id": "phys-sba-067-b",
        "text": "Zona fasciculata; 17-alpha-hydroxylase (CYP17A1)",
        "is_correct": false
      },
      {
        "id": "phys-sba-067-e",
        "text": "Zona fasciculata; 11-beta-hydroxylase (CYP11B1)",
        "is_correct": false
      },
      {
        "id": "phys-sba-067-a",
        "text": "Zona glomerulosa; Aldosterone synthase (CYP11B2)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-068",
    "stem": "What triggers the mid-cycle LH surge that initiates Ovulation in the normal female menstrual cycle?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Endocrine Physiology",
    "programme": "both",
    "explanation": "During the late follicular phase, sustained high oestradiol (>200 pg/mL for >48 h) triggers a switch from negative to positive feedback on the anterior pituitary and hypothalamus, provoking the LH surge.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-068-b",
        "text": "Sudden surge of progesterone from the newly formed corpus luteum",
        "is_correct": false
      },
      {
        "id": "phys-sba-068-c",
        "text": "Rapid fall in circulating inhibin B levels below detection limits",
        "is_correct": false
      },
      {
        "id": "phys-sba-068-e",
        "text": "Negative feedback inhibition of follicle-stimulating hormone (FSH)",
        "is_correct": false
      },
      {
        "id": "phys-sba-068-a",
        "text": "Sustained high levels of circulating 17-beta-oestradiol produced by the dominant Graafian follicle exerting POSITIVE feedback on the pituitary and hypothalamus",
        "is_correct": true
      },
      {
        "id": "phys-sba-068-d",
        "text": "Complete suppression of hypothalamic GnRH pulse frequency",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-069",
    "stem": "What is the primary endocrine role of Parathyroid Hormone (PTH) in calcium homeostasis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Endocrine Physiology",
    "programme": "both",
    "explanation": "PTH responds to low ionized calcium sensed by calcium-sensing receptors (CaSR). It activates 1-alpha-hydroxylase (producing 1,25-(OH)2D), promotes renal Ca2+ reabsorption, stimulates phosphaturia, and activates osteoclastic resorption via RANKL.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-069-c",
        "text": "Inhibits the activation of 25-hydroxyvitamin D3 in the renal tubule",
        "is_correct": false
      },
      {
        "id": "phys-sba-069-b",
        "text": "Lowers serum calcium by depositing calcium hydroxyapatite into osteoid",
        "is_correct": false
      },
      {
        "id": "phys-sba-069-a",
        "text": "Increases serum calcium by stimulating osteoclast-mediated bone resorption, distal renal calcium reabsorption, and renal 1-alpha-hydroxylase",
        "is_correct": true
      },
      {
        "id": "phys-sba-069-d",
        "text": "Increases renal tubular reabsorption of inorganic phosphate",
        "is_correct": false
      },
      {
        "id": "phys-sba-069-e",
        "text": "Directly binds enterocyte calcium channels without requiring vitamin D",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-070",
    "stem": "Which hormone secreted by the thyroid gland's parafollicular C-cells acts as a physiological antagonist to Parathyroid Hormone?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Endocrine Physiology",
    "programme": "both",
    "explanation": "Calcitonin is secreted by thyroid parafollicular (C) cells in response to hypercalcaemia. It directly inhibits osteoclast motility and bone resorption, promoting renal calcium excretion.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-070-a",
        "text": "Calcitonin",
        "is_correct": true
      },
      {
        "id": "phys-sba-070-d",
        "text": "Reverse T3 (rT3)",
        "is_correct": false
      },
      {
        "id": "phys-sba-070-b",
        "text": "Thyroxine (T4)",
        "is_correct": false
      },
      {
        "id": "phys-sba-070-c",
        "text": "Thyroglobulin",
        "is_correct": false
      },
      {
        "id": "phys-sba-070-e",
        "text": "Parathyroid Hormone-related Protein (PTHrP)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-071",
    "stem": "In the male reproductive system, which cells secrete Testosterone in response to Luteinizing Hormone (LH)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Endocrine Physiology",
    "programme": "both",
    "explanation": "LH stimulates testicular interstitial Leydig cells to synthesize and secrete testosterone. FSH acts on Sertoli cells within seminiferous tubules to support spermatogenesis and secrete inhibin B and androgen-binding protein (ABP).",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-071-c",
        "text": "Primary spermatocytes",
        "is_correct": false
      },
      {
        "id": "phys-sba-071-e",
        "text": "Prostatic acinar cells",
        "is_correct": false
      },
      {
        "id": "phys-sba-071-b",
        "text": "Sertoli (sustentacular) cells",
        "is_correct": false
      },
      {
        "id": "phys-sba-071-d",
        "text": "Epididymal principal cells",
        "is_correct": false
      },
      {
        "id": "phys-sba-071-a",
        "text": "Leydig (interstitial) cells",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-072",
    "stem": "What is the primary function of Inhibin B in the male pituitary-gonadal axis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Endocrine Physiology",
    "programme": "both",
    "explanation": "Inhibin B, produced by Sertoli cells in proportion to spermatogenesis rate, selectively inhibits pituitary FSH secretion, serving as a circulating biomarker of seminiferous tubule function.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-072-e",
        "text": "Inhibits hypothalamic GnRH pulsatility universally",
        "is_correct": false
      },
      {
        "id": "phys-sba-072-d",
        "text": "Promotes testicular descent into the scrotum during development",
        "is_correct": false
      },
      {
        "id": "phys-sba-072-c",
        "text": "Blocks the peripheral conversion of testosterone to dihydrotestosterone (DHT)",
        "is_correct": false
      },
      {
        "id": "phys-sba-072-b",
        "text": "Stimulates Leydig cell testosterone production directly",
        "is_correct": false
      },
      {
        "id": "phys-sba-072-a",
        "text": "Exerts selective negative feedback on anterior pituitary FSH secretion without altering LH",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-073",
    "stem": "The Na+/K+-ATPase electrogenic pump transports which ions across the plasma membrane per cycle of ATP hydrolysis?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Cell Physiology",
    "programme": "both",
    "explanation": "The Na+/K+-ATPase hydrolyzes 1 ATP to export 3 Na+ ions and import 2 K+ ions against their electrochemical gradients, generating a net outward current (electrogenic) and maintaining intracellular [K+] high and [Na+] low.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-073-c",
        "text": "3 Na+ ions in, 3 K+ ions out",
        "is_correct": false
      },
      {
        "id": "phys-sba-073-d",
        "text": "1 Na+ ion out, 1 K+ ion in, 1 Ca2+ ion out",
        "is_correct": false
      },
      {
        "id": "phys-sba-073-b",
        "text": "2 Na+ ions out of the cell, 3 K+ ions into the cell",
        "is_correct": false
      },
      {
        "id": "phys-sba-073-e",
        "text": "2 Na+ ions in, 1 H+ ion out",
        "is_correct": false
      },
      {
        "id": "phys-sba-073-a",
        "text": "3 Na+ ions out of the cell, 2 K+ ions into the cell",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-074",
    "stem": "Which cellular junctional complex provides low-resistance electrical and metabolic coupling between adjacent cardiac myocytes?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Cell Physiology",
    "programme": "both",
    "explanation": "Gap junctions (formed of hexameric connexons) form aqueous channels between adjacent cells, allowing direct passage of ions and small molecules (<1 kDa) to permit synchronized electromechanical syncytium behavior.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-074-d",
        "text": "Desmosomes (macula adherens)",
        "is_correct": false
      },
      {
        "id": "phys-sba-074-b",
        "text": "Tight junctions (zonula occludens)",
        "is_correct": false
      },
      {
        "id": "phys-sba-074-a",
        "text": "Gap junctions (connexons composed of connexin proteins)",
        "is_correct": true
      },
      {
        "id": "phys-sba-074-e",
        "text": "Hemidesmosomes",
        "is_correct": false
      },
      {
        "id": "phys-sba-074-c",
        "text": "Adherens junctions (zonula adherens)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-075",
    "stem": "What happens to a normal human red blood cell placed in a 0.2% NaCl solution (hypotonic medium)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Cell Physiology",
    "programme": "both",
    "explanation": "0.2% NaCl has an osmolarity of ~68 mOsm/L, far below normal plasma (~290 mOsm/L). Water flows down its osmotic gradient into the hypertonic intracellular compartment, causing cell swelling and lysis.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-075-d",
        "text": "Active extrusion of NaCl preserves cell volume",
        "is_correct": false
      },
      {
        "id": "phys-sba-075-a",
        "text": "Water enters down its osmotic gradient, causing cellular swelling, membrane rupture, and haemolysis",
        "is_correct": true
      },
      {
        "id": "phys-sba-075-e",
        "text": "Potassium rushes out, preventing osmotic water movement",
        "is_correct": false
      },
      {
        "id": "phys-sba-075-b",
        "text": "Water exits the cell, causing cell shrinkage and crenation",
        "is_correct": false
      },
      {
        "id": "phys-sba-075-c",
        "text": "The cell maintains normal biconcave disc shape indefinitely",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-076",
    "stem": "Which intracellular second messenger is generated when a ligand activates a Gq protein-coupled receptor?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Cell Physiology",
    "programme": "both",
    "explanation": "Gq activates phospholipase C-beta (PLC-beta), which hydrolyzes PIP2 into IP3 (releasing Ca2+ from endoplasmic reticulum) and DAG (activating Protein Kinase C).",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-076-e",
        "text": "Phosphatidylinositol 3,4,5-trisphosphate (PIP3) via PI3-Kinase",
        "is_correct": false
      },
      {
        "id": "phys-sba-076-a",
        "text": "Inositol 1,4,5-trisphosphate (IP3) and Diacylglycerol (DAG) via Phospholipase C-beta",
        "is_correct": true
      },
      {
        "id": "phys-sba-076-b",
        "text": "Cyclic Adenosine Monophosphate (cAMP) via Adenylyl Cyclase",
        "is_correct": false
      },
      {
        "id": "phys-sba-076-d",
        "text": "Nitric Oxide (NO) via inducible NO synthase",
        "is_correct": false
      },
      {
        "id": "phys-sba-076-c",
        "text": "Cyclic Guanosine Monophosphate (cGMP) via Guanylyl Cyclase",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-077",
    "stem": "What is the equilibrium potential for an ion as calculated by the Nernst equation?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Cell Physiology",
    "programme": "both",
    "explanation": "The Nernst potential E = (RT/zF) · ln([ion]out/[ion]in) is the membrane voltage at which the electrical force exactly counterbalances the chemical driving force, resulting in zero net flux of that ion.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-077-a",
        "text": "The electrical potential across the membrane that exactly balances the chemical concentration gradient for that specific ion",
        "is_correct": true
      },
      {
        "id": "phys-sba-077-b",
        "text": "The resting membrane potential when all ion channels are open simultaneously",
        "is_correct": false
      },
      {
        "id": "phys-sba-077-e",
        "text": "The potential where ATP hydrolysis by primary active transporters stops",
        "is_correct": false
      },
      {
        "id": "phys-sba-077-c",
        "text": "The threshold voltage required to fire an all-or-none action potential",
        "is_correct": false
      },
      {
        "id": "phys-sba-077-d",
        "text": "The maximal overshoot potential during rapid sodium channel opening",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-078",
    "stem": "Which cytoskeletal motor protein moves vesicular cargo toward the plus-end of microtubules (anterograde axonal transport)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Cell Physiology",
    "programme": "both",
    "explanation": "Kinesin hydrolyzes ATP to step towards the plus-end (periphery/synapse) of microtubules (anterograde transport). Dynein mediates minus-end directed retrograde transport back to the soma.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-078-d",
        "text": "Actin",
        "is_correct": false
      },
      {
        "id": "phys-sba-078-c",
        "text": "Myosin II",
        "is_correct": false
      },
      {
        "id": "phys-sba-078-b",
        "text": "Dynein",
        "is_correct": false
      },
      {
        "id": "phys-sba-078-a",
        "text": "Kinesin",
        "is_correct": true
      },
      {
        "id": "phys-sba-078-e",
        "text": "Tubulin",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-079",
    "stem": "How is calcium primarily extruded from the cytosol back into the Sarcoplasmic Reticulum in relaxed skeletal muscle?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Cell Physiology",
    "programme": "both",
    "explanation": "SERCA pumps utilize ATP to sequester cytosolic Ca2+ back into the sarcoplasmic reticulum against an enormous concentration gradient, terminating cross-bridge cycling and inducing muscle relaxation.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-079-c",
        "text": "Mitochondrial calcium uniporter",
        "is_correct": false
      },
      {
        "id": "phys-sba-079-d",
        "text": "Ryanodine receptor type 1 (RyR1)",
        "is_correct": false
      },
      {
        "id": "phys-sba-079-b",
        "text": "Sodium-Calcium Exchanger (NCX) in the sarcolemma",
        "is_correct": false
      },
      {
        "id": "phys-sba-079-e",
        "text": "Voltage-gated L-type calcium channels (Cav1.1)",
        "is_correct": false
      },
      {
        "id": "phys-sba-079-a",
        "text": "Sarcoplasmic/Endoplasmic Reticulum Calcium-ATPase (SERCA) pumps",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-080",
    "stem": "Apoptosis (programmed cell death) is fundamentally distinguished from necrosis by which feature?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Cell Physiology",
    "programme": "both",
    "explanation": "Apoptosis is an energy-dependent, programmed process characterized by cell shrinkage, chromatin condensation, apoptotic body formation, and phagocytic clearance without cell membrane lysis or inflammation.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-080-e",
        "text": "Does not involve caspase enzymatic cascades",
        "is_correct": false
      },
      {
        "id": "phys-sba-080-d",
        "text": "Is entirely ATP-independent and initiated only by physical trauma",
        "is_correct": false
      },
      {
        "id": "phys-sba-080-c",
        "text": "Always leads to widespread neutrophilic tissue infiltration and liquefaction",
        "is_correct": false
      },
      {
        "id": "phys-sba-080-b",
        "text": "Causes early cell swelling and sudden rupture of the plasma membrane",
        "is_correct": false
      },
      {
        "id": "phys-sba-080-a",
        "text": "Maintains plasma membrane integrity without leakage of intracellular contents or inciting acute inflammation",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-081",
    "stem": "Which cellular organelle is responsible for post-translational modification, sorting, and packaging of proteins for secretion?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Cell Physiology",
    "programme": "both",
    "explanation": "The Golgi apparatus receives newly synthesized proteins from the rough ER, adds post-translational modifications (glycosylation, sulfation, phosphorylation), and packages them into secretory vesicles or lysosomes.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-081-d",
        "text": "Lysosome",
        "is_correct": false
      },
      {
        "id": "phys-sba-081-a",
        "text": "Golgi apparatus",
        "is_correct": true
      },
      {
        "id": "phys-sba-081-b",
        "text": "Rough endoplasmic reticulum",
        "is_correct": false
      },
      {
        "id": "phys-sba-081-e",
        "text": "Centrosome",
        "is_correct": false
      },
      {
        "id": "phys-sba-081-c",
        "text": "Peroxisome",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-082",
    "stem": "Facilitated diffusion differs from simple diffusion because facilitated diffusion:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Cell Physiology",
    "programme": "both",
    "explanation": "Facilitated diffusion involves specific transmembrane carrier proteins or channels that allow passive movement down an electrochemical gradient without ATP, but exhibit saturation (Vmax) and specificity.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-082-d",
        "text": "Occurs exclusively through the hydrophobic core of the phospholipid bilayer",
        "is_correct": false
      },
      {
        "id": "phys-sba-082-c",
        "text": "Transports substances against their electrochemical gradient",
        "is_correct": false
      },
      {
        "id": "phys-sba-082-e",
        "text": "Is non-specific and allows any molecule smaller than 500 Da to pass",
        "is_correct": false
      },
      {
        "id": "phys-sba-082-a",
        "text": "Is carrier-mediated, displays saturation kinetics (Vmax), and is subject to competitive inhibition",
        "is_correct": true
      },
      {
        "id": "phys-sba-082-b",
        "text": "Requires the direct hydrolysis of cellular ATP",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-083",
    "stem": "Which intracellular organelle contains catalase and oxidase enzymes that detoxify hydrogen peroxide and metabolize very long-chain fatty acids?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Cell Physiology",
    "programme": "both",
    "explanation": "Peroxisomes contain oxidases that produce H2O2 and catalase that breaks it down to H2O and O2, and are essential for beta-oxidation of very long-chain fatty acids (VLCFAs) and plasmalogen synthesis.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-083-a",
        "text": "Peroxisome",
        "is_correct": true
      },
      {
        "id": "phys-sba-083-b",
        "text": "Lysosome",
        "is_correct": false
      },
      {
        "id": "phys-sba-083-e",
        "text": "Endosome",
        "is_correct": false
      },
      {
        "id": "phys-sba-083-c",
        "text": "Proteasome",
        "is_correct": false
      },
      {
        "id": "phys-sba-083-d",
        "text": "Mitochondrion",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-084",
    "stem": "What role does Calmodulin play in smooth muscle contraction?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Cell Physiology",
    "programme": "both",
    "explanation": "Smooth muscle lacks troponin. Instead, elevated cytosolic Ca2+ binds calmodulin; this Ca2+-calmodulin complex activates MLCK, which phosphorylates the 20-kDa regulatory light chain of myosin, enabling cross-bridge cycling.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-084-d",
        "text": "Sequ視聴ers calcium within caveolae to induce rapid vasodilation",
        "is_correct": false
      },
      {
        "id": "phys-sba-084-c",
        "text": "Hydrolyzes ATP to generate the mechanical power stroke",
        "is_correct": false
      },
      {
        "id": "phys-sba-084-e",
        "text": "Inactivates myosin light chain phosphatase to prolong rigor",
        "is_correct": false
      },
      {
        "id": "phys-sba-084-b",
        "text": "Directly binds actin to shift tropomyosin away from myosin-binding sites",
        "is_correct": false
      },
      {
        "id": "phys-sba-084-a",
        "text": "Binds four calcium ions to form a Ca2+-calmodulin complex that activates Myosin Light Chain Kinase (MLCK)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-085",
    "stem": "What is the primary physiological stimulus for Erythropoietin (EPO) secretion by renal interstitial peritubular fibroblasts?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Blood & Immunology",
    "programme": "both",
    "explanation": "Renal peritubular interstitial cells detect reduced oxygen delivery. Under hypoxic conditions, prolyl hydroxylases are inhibited, stabilizing HIF-2alpha, which translocates to the nucleus to induce transcription of erythropoietin.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-085-a",
        "text": "Tissue hypoxia sensed via hypoxia-inducible factors (HIF-1alpha / HIF-2alpha)",
        "is_correct": true
      },
      {
        "id": "phys-sba-085-b",
        "text": "High circulating haematocrit and blood hyperviscosity",
        "is_correct": false
      },
      {
        "id": "phys-sba-085-c",
        "text": "Elevated systemic arterial blood pressure",
        "is_correct": false
      },
      {
        "id": "phys-sba-085-d",
        "text": "Alkalosis and hypercapnia",
        "is_correct": false
      },
      {
        "id": "phys-sba-085-e",
        "text": "Bacterial lipopolysaccharide entering the bloodstream",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-086",
    "stem": "In the intrinsic coagulation pathway, which clotting factor is activated by Factor XIIa in the presence of high-molecular-weight kininogen?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Blood & Immunology",
    "programme": "both",
    "explanation": "The contact activation (intrinsic) pathway proceeds: Factor XII -> Factor XI -> Factor IX -> (with Factor VIIIa) activates Factor X. Factor VII is unique to the extrinsic (tissue factor) pathway.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-086-a",
        "text": "Factor XI (activated to Factor XIa)",
        "is_correct": true
      },
      {
        "id": "phys-sba-086-d",
        "text": "Factor II (prothrombin)",
        "is_correct": false
      },
      {
        "id": "phys-sba-086-e",
        "text": "Factor XIII",
        "is_correct": false
      },
      {
        "id": "phys-sba-086-c",
        "text": "Factor X",
        "is_correct": false
      },
      {
        "id": "phys-sba-086-b",
        "text": "Factor VII",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-087",
    "stem": "What is the primary role of von Willebrand Factor (vWF) in primary haemostasis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Blood & Immunology",
    "programme": "both",
    "explanation": "vWF forms an adhesive bridge between exposed subendothelial collagen and platelet surface GPIb receptors, initiating platelet adhesion, especially in high shear stress arterial vessels. It also stabilizes circulating Factor VIII.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-087-a",
        "text": "Binds exposed subendothelial collagen and platelet glycoprotein Ib (GPIb) receptors to mediate platelet adhesion under high shear stress",
        "is_correct": true
      },
      {
        "id": "phys-sba-087-b",
        "text": "Cross-links platelet GPIIb/IIIa receptors using soluble plasma fibrinogen",
        "is_correct": false
      },
      {
        "id": "phys-sba-087-c",
        "text": "Converts soluble fibrinogen into an insoluble fibrin meshwork",
        "is_correct": false
      },
      {
        "id": "phys-sba-087-d",
        "text": "Directly hydrolyzes tissue factor pathway inhibitor (TFPI)",
        "is_correct": false
      },
      {
        "id": "phys-sba-087-e",
        "text": "Inactivates activated Factor Va and Factor VIIIa",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-088",
    "stem": "Which endogenous anticoagulation complex degrades activated Factors Va and VIIIa to restrict thrombus formation?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Blood & Immunology",
    "programme": "both",
    "explanation": "Thrombin binds thrombomodulin on endothelial cells, activating Protein C. Activated Protein C (with cofactor Protein S) proteolytically cleaves and inactivates Factors Va and VIIIa.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-088-a",
        "text": "Activated Protein C (APC) in conjunction with its cofactor, Protein S",
        "is_correct": true
      },
      {
        "id": "phys-sba-088-b",
        "text": "Antithrombin III alone without heparin cofactor",
        "is_correct": false
      },
      {
        "id": "phys-sba-088-c",
        "text": "Tissue Factor Pathway Inhibitor (TFPI) and Factor VIIa",
        "is_correct": false
      },
      {
        "id": "phys-sba-088-d",
        "text": "Plasminogen activator inhibitor-1 (PAI-1)",
        "is_correct": false
      },
      {
        "id": "phys-sba-088-e",
        "text": "Thromboxane A2 and prostacyclin",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-089",
    "stem": "Which antibody isotype is the FIRST to be produced in a primary humoral immune response and exists predominantly as a pentamer?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Blood & Immunology",
    "programme": "both",
    "explanation": "IgM is the initial immunoglobulin class produced upon primary antigen encounter. In serum, it circulates as a pentamer linked by a J chain, providing 10 antigen-binding sites for efficient complement activation and agglutination.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-089-d",
        "text": "IgE",
        "is_correct": false
      },
      {
        "id": "phys-sba-089-e",
        "text": "IgD",
        "is_correct": false
      },
      {
        "id": "phys-sba-089-c",
        "text": "IgA",
        "is_correct": false
      },
      {
        "id": "phys-sba-089-b",
        "text": "IgG",
        "is_correct": false
      },
      {
        "id": "phys-sba-089-a",
        "text": "IgM",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-090",
    "stem": "Which antibody isotype cross the human placenta to confer passive protective immunity to the neonate?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Blood & Immunology",
    "programme": "both",
    "explanation": "IgG is the only immunoglobulin class that crosses the placenta via active transport by syncytiotrophoblast neonatal Fc receptors (FcRn), providing passive humoral immunity to the fetus and newborn.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-090-d",
        "text": "IgE",
        "is_correct": false
      },
      {
        "id": "phys-sba-090-c",
        "text": "Secretory IgA",
        "is_correct": false
      },
      {
        "id": "phys-sba-090-e",
        "text": "IgD",
        "is_correct": false
      },
      {
        "id": "phys-sba-090-b",
        "text": "IgM",
        "is_correct": false
      },
      {
        "id": "phys-sba-090-a",
        "text": "IgG (specifically IgG1, IgG3, and IgG4 via neonatal Fc receptors, FcRn)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-091",
    "stem": "The alternative pathway of complement activation is triggered by:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Blood & Immunology",
    "programme": "both",
    "explanation": "The alternative pathway is antibody-independent and initiated by spontaneous hydrolysis of C3 into C3(H2O). When Factor B and Factor D bind to pathogen surfaces that lack decay-accelerating factor, C3 convertase (C3bBb) is formed.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-091-a",
        "text": "Spontaneous low-level hydrolysis of C3 ('tick-over') and binding to microbial surface carbohydrates lacking host regulatory proteins",
        "is_correct": true
      },
      {
        "id": "phys-sba-091-d",
        "text": "Direct cleavage of C5 by bacterial endotoxin",
        "is_correct": false
      },
      {
        "id": "phys-sba-091-e",
        "text": "Platelet factor 4 release during aggregation",
        "is_correct": false
      },
      {
        "id": "phys-sba-091-b",
        "text": "Antigen-antibody complexes binding C1q",
        "is_correct": false
      },
      {
        "id": "phys-sba-091-c",
        "text": "Mannose-binding lectin binding microbial mannose residues",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-092",
    "stem": "What is the physiological function of the Membrane Attack Complex (MAC / C5b-9) in the complement cascade?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Blood & Immunology",
    "programme": "both",
    "explanation": "C5b complexes sequentially with C6, C7, C8, and multiple C9 molecules to assemble the MAC (C5b-9), forming a 10 nm hydrophilic pore that disrupts target cell membrane integrity, resulting in osmotic lysis (vital against Neisseria).",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-092-d",
        "text": "Neutralizes viral capsids by competitive binding",
        "is_correct": false
      },
      {
        "id": "phys-sba-092-b",
        "text": "Opsonizes encapsulated bacteria for neutrophil phagocytosis (acting as C3b)",
        "is_correct": false
      },
      {
        "id": "phys-sba-092-e",
        "text": "Directly stimulates T-cell differentiation in the paracortex",
        "is_correct": false
      },
      {
        "id": "phys-sba-092-a",
        "text": "Forms transmembrane pores in targeted cell membranes, causing osmotic cell lysis and death",
        "is_correct": true
      },
      {
        "id": "phys-sba-092-c",
        "text": "Functions as an anaphylatoxin inducing histamine release from mast cells",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-093",
    "stem": "Which cells express Major Histocompatibility Complex (MHC) Class II molecules on their surface?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Blood & Immunology",
    "programme": "both",
    "explanation": "MHC Class II molecules are restricted to professional antigen-presenting cells (dendritic cells, macrophages, B cells) and thymic epithelial cells, presenting exogenous antigens to CD4+ T helper cells.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-093-e",
        "text": "Haploid spermatozoa and primary oocytes",
        "is_correct": false
      },
      {
        "id": "phys-sba-093-b",
        "text": "All nucleated human cells and platelets",
        "is_correct": false
      },
      {
        "id": "phys-sba-093-d",
        "text": "Resting vascular endothelial cells and skeletal muscle fibres only",
        "is_correct": false
      },
      {
        "id": "phys-sba-093-a",
        "text": "Professional Antigen-Presenting Cells (Dendritic cells, Macrophages, and B lymphocytes)",
        "is_correct": true
      },
      {
        "id": "phys-sba-093-c",
        "text": "Mature erythrocytes and reticulocytes exclusively",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-094",
    "stem": "What is the role of Natural Killer (NK) cells in innate immunity?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Blood & Immunology",
    "programme": "both",
    "explanation": "NK cells recognize host cells that lack normal surface MHC Class I ('missing self' hypothesis), commonly caused by viral evasion or malignant transformation. NK inhibitory receptors are disengaged, triggering perforin/granzyme-mediated apoptosis.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-094-c",
        "text": "Present intracellular viral antigens to CD8+ cytotoxic T lymphocytes",
        "is_correct": false
      },
      {
        "id": "phys-sba-094-b",
        "text": "Produce high-affinity antibodies following somatic hypermutation",
        "is_correct": false
      },
      {
        "id": "phys-sba-094-e",
        "text": "Phagocytose and digest opsonized extracellular pyogenic bacteria",
        "is_correct": false
      },
      {
        "id": "phys-sba-094-d",
        "text": "Differentiate into long-lived memory plasma cells in bone marrow",
        "is_correct": false
      },
      {
        "id": "phys-sba-094-a",
        "text": "Identify and induce apoptosis in virus-infected and neoplastic cells that have down-regulated surface MHC Class I expression ('missing self')",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-095",
    "stem": "Which cytokine secreted primarily by TH1 cells activates macrophages and enhances their intracellular microbial killing capacity?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Blood & Immunology",
    "programme": "both",
    "explanation": "Interferon-gamma is the signature cytokine of CD4+ TH1 cells and NK cells. It activates classical (M1) macrophages, upregulating inducible nitric oxide synthase (iNOS), reactive oxygen species, and phagolysosomal digestion.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-095-a",
        "text": "Interferon-gamma (IFN-gamma)",
        "is_correct": true
      },
      {
        "id": "phys-sba-095-b",
        "text": "Interleukin-4 (IL-4)",
        "is_correct": false
      },
      {
        "id": "phys-sba-095-c",
        "text": "Interleukin-10 (IL-10)",
        "is_correct": false
      },
      {
        "id": "phys-sba-095-d",
        "text": "Transforming Growth Factor-beta (TGF-beta)",
        "is_correct": false
      },
      {
        "id": "phys-sba-095-e",
        "text": "Interleukin-5 (IL-5)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-096",
    "stem": "What is the lifespan of a normal circulating human erythrocyte in the peripheral bloodstream?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Blood & Immunology",
    "programme": "both",
    "explanation": "Normal human erythrocytes circulate for ~120 days. As they age, they lose membrane flexibility, surface sialic acid, and enzyme activity, and are sequestered and destroyed by macrophages in the splenic red pulp.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-096-e",
        "text": "1 to 2 years",
        "is_correct": false
      },
      {
        "id": "phys-sba-096-d",
        "text": "180 to 240 days",
        "is_correct": false
      },
      {
        "id": "phys-sba-096-c",
        "text": "30 to 45 days",
        "is_correct": false
      },
      {
        "id": "phys-sba-096-b",
        "text": "7 to 10 days",
        "is_correct": false
      },
      {
        "id": "phys-sba-096-a",
        "text": "Approximately 120 days",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-097",
    "stem": "Which hormone produced by the syncytiotrophoblast maintains the corpus luteum during the first 8-10 weeks of pregnancy?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Reproductive Physiology",
    "programme": "both",
    "explanation": "hCG is secreted by syncytiotrophoblasts beginning around implantation (~day 8-9 post-fertilization). Sharing an identical alpha subunit and LH-like beta subunit, it binds LH receptors on the corpus luteum to sustain progesterone production until the luteal-placental shift.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-097-d",
        "text": "Oestriol (E3)",
        "is_correct": false
      },
      {
        "id": "phys-sba-097-c",
        "text": "Progesterone",
        "is_correct": false
      },
      {
        "id": "phys-sba-097-a",
        "text": "Human Chorionic Gonadotropin (hCG)",
        "is_correct": true
      },
      {
        "id": "phys-sba-097-e",
        "text": "Prolactin",
        "is_correct": false
      },
      {
        "id": "phys-sba-097-b",
        "text": "Human Placental Lactogen (hPL)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-098",
    "stem": "What changes occur in maternal cardiovascular physiology during a normal singleton pregnancy?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Reproductive Physiology",
    "programme": "both",
    "explanation": "Normal pregnancy features widespread vasodilation (decreased SVR mediated by progesterone, prostacyclin, and relaxin), prompting compensatory plasma volume expansion (~50%), increased stroke volume, and 30-50% elevated cardiac output.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-098-b",
        "text": "Systemic vascular resistance doubles, leading to high maternal blood pressure",
        "is_correct": false
      },
      {
        "id": "phys-sba-098-c",
        "text": "Cardiac output drops by 20% to conserve metabolic reserves",
        "is_correct": false
      },
      {
        "id": "phys-sba-098-d",
        "text": "Stroke volume decreases while pulmonary vascular resistance increases dramatically",
        "is_correct": false
      },
      {
        "id": "phys-sba-098-a",
        "text": "Cardiac output increases by 30-50%, systemic vascular resistance decreases, and resting heart rate increases by 10-15 bpm",
        "is_correct": true
      },
      {
        "id": "phys-sba-098-e",
        "text": "Blood volume decreases due to rapid urinary salt wasting",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-099",
    "stem": "What is the physiological role of the Acrosome Reaction during human fertilization?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Reproductive Physiology",
    "programme": "both",
    "explanation": "Sperm binding to ZP3 glycoproteins on the zona pellucida triggers the acrosome reaction: exocytosis of acrosomal proteases (acrosin) and hyaluronidase allows the sperm to digest a path through the zona pellucida.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-099-e",
        "text": "Fusion of paternal and maternal polar bodies",
        "is_correct": false
      },
      {
        "id": "phys-sba-099-d",
        "text": "Immediate nuclear decondensation of maternal chromatin",
        "is_correct": false
      },
      {
        "id": "phys-sba-099-c",
        "text": "Reorganization of sperm tail mitochondria to double swimming speed",
        "is_correct": false
      },
      {
        "id": "phys-sba-099-b",
        "text": "Exocytosis of cortical granules to prevent polyspermy",
        "is_correct": false
      },
      {
        "id": "phys-sba-099-a",
        "text": "Release of acrosomal enzymes (hyaluronidase and acrosin) to penetrate the corona radiata and zona pellucida of the oocyte",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-100",
    "stem": "How does the oocyte prevent Polyspermy once a single spermatozoon has fused with its plasma membrane?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Reproductive Physiology",
    "programme": "both",
    "explanation": "Sperm-oocyte fusion triggers an intracellular Ca2+ wave that causes the cortical reaction: exocytosis of cortical granules whose hydrolytic enzymes cleave ZP3 receptors and cross-link the zona pellucida (zona reaction), permanently blocking polyspermy.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-100-a",
        "text": "Cortical reaction (exocytosis of cortical granules releasing enzymes that harden the zona pellucida and inactivate ZP3 receptors)",
        "is_correct": true
      },
      {
        "id": "phys-sba-100-d",
        "text": "Immediate secretion of high-dose progesterone by the theca interna",
        "is_correct": false
      },
      {
        "id": "phys-sba-100-b",
        "text": "Instantaneous hyperpolarization of the oocyte membrane to -120 mV",
        "is_correct": false
      },
      {
        "id": "phys-sba-100-e",
        "text": "Degradation of all sperm tail mitochondria within the corona radiata",
        "is_correct": false
      },
      {
        "id": "phys-sba-100-c",
        "text": "Rapid expulsion of paternal chromosomal material into the second polar body",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-101",
    "stem": "Which hormone is primarily responsible for milk SYNTHESIS in alveolar epithelial cells, and which stimulates milk EJECTION (let-down)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Reproductive Physiology",
    "programme": "both",
    "explanation": "Prolactin (anterior pituitary) stimulates transcription of milk proteins (casein, lactalbumin) in mammary alveoli. Oxytocin (posterior pituitary) triggers contraction of surrounding myoepithelial cells for milk ejection.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-101-a",
        "text": "Prolactin stimulates milk synthesis; Oxytocin stimulates milk ejection via myoepithelial contraction",
        "is_correct": true
      },
      {
        "id": "phys-sba-101-c",
        "text": "Progesterone stimulates synthesis; Oestrogen stimulates ejection",
        "is_correct": false
      },
      {
        "id": "phys-sba-101-b",
        "text": "Oxytocin stimulates milk synthesis; Prolactin stimulates ejection",
        "is_correct": false
      },
      {
        "id": "phys-sba-101-d",
        "text": "Human Placental Lactogen stimulates synthesis; Dopamine stimulates ejection",
        "is_correct": false
      },
      {
        "id": "phys-sba-101-e",
        "text": "Growth Hormone stimulates synthesis; Vasopressin stimulates ejection",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-102",
    "stem": "In the male fetus, which hormone secreted by Sertoli cells causes the regression of the paramesonephric (Müllerian) ducts?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Reproductive Physiology",
    "programme": "both",
    "explanation": "Sertoli cells secrete Anti-Müllerian Hormone (AMH), a TGF-beta family glycoprotein that induces apoptosis and regression of the paramesonephric (Müllerian) ducts, preventing female internal organ development.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-102-a",
        "text": "Anti-Müllerian Hormone (AMH / Müllerian-Inhibiting Substance)",
        "is_correct": true
      },
      {
        "id": "phys-sba-102-b",
        "text": "Dihydrotestosterone (DHT)",
        "is_correct": false
      },
      {
        "id": "phys-sba-102-e",
        "text": "Insulin-like factor 3 (INSL3)",
        "is_correct": false
      },
      {
        "id": "phys-sba-102-c",
        "text": "Testosterone",
        "is_correct": false
      },
      {
        "id": "phys-sba-102-d",
        "text": "Inhibin B",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-103",
    "stem": "Which 5-alpha-dihydrotestosterone (DHT)-dependent structure develops from the embryonic genital tubercle in the male?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Reproductive Physiology",
    "programme": "both",
    "explanation": "Under the influence of DHT (converted from testosterone by 5-alpha-reductase), the genital tubercle forms the glans penis and corpora cavernosa; genital swellings form the scrotum; urethral folds form the penile urethra.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-103-d",
        "text": "Prostate gland (from endodermal urogenital sinus)",
        "is_correct": false
      },
      {
        "id": "phys-sba-103-c",
        "text": "Penile urethra (from urethral folds)",
        "is_correct": false
      },
      {
        "id": "phys-sba-103-b",
        "text": "Scrotal sac (from genital swellings)",
        "is_correct": false
      },
      {
        "id": "phys-sba-103-a",
        "text": "Glans penis and corpus cavernosum",
        "is_correct": true
      },
      {
        "id": "phys-sba-103-e",
        "text": "Epididymis and vas deferens (from mesonephric duct)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-104",
    "stem": "What causes the temperature increase (~0.5°C) observed immediately after ovulation in women tracking their basal body temperature?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Reproductive Physiology",
    "programme": "both",
    "explanation": "Progesterone secreted by the corpus luteum has a direct thermogenic action on the preoptic area of the anterior hypothalamus, raising baseline body temperature by ~0.3-0.5°C throughout the luteal phase.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-104-d",
        "text": "Increased resting metabolic rate induced by the LH surge",
        "is_correct": false
      },
      {
        "id": "phys-sba-104-c",
        "text": "Release of interleukin-1 from rupturing ovarian follicles",
        "is_correct": false
      },
      {
        "id": "phys-sba-104-b",
        "text": "Oestrogen surge stimulating thyroid hormone synthesis",
        "is_correct": false
      },
      {
        "id": "phys-sba-104-e",
        "text": "Transient increase in sympathetic tone during luteal transition",
        "is_correct": false
      },
      {
        "id": "phys-sba-104-a",
        "text": "Thermogenic effect of Progesterone acting on the hypothalamic thermoregulatory center",
        "is_correct": true
      }
    ]
  },
  {
    "id": "phys-sba-105",
    "stem": "During the luteal phase of the menstrual cycle, what hormone profile dominates?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Reproductive Physiology",
    "programme": "both",
    "explanation": "The corpus luteum secretes high amounts of progesterone and oestrogen, which exert negative feedback on the anterior pituitary, keeping LH and FSH low to prevent new follicular recruitment.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-105-a",
        "text": "High progesterone and moderate oestradiol with low LH and FSH",
        "is_correct": true
      },
      {
        "id": "phys-sba-105-b",
        "text": "High LH and FSH with low progesterone",
        "is_correct": false
      },
      {
        "id": "phys-sba-105-c",
        "text": "Low progesterone and low oestradiol with elevated inhibin A",
        "is_correct": false
      },
      {
        "id": "phys-sba-105-d",
        "text": "Peak oestradiol with zero detectable progesterone",
        "is_correct": false
      },
      {
        "id": "phys-sba-105-e",
        "text": "Suppression of all gonadal steroids with high GnRH pulsatility",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-106",
    "stem": "What happens to maternal systemic blood pressure during the second trimester of normal pregnancy?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Physiology",
    "section": "Reproductive Physiology",
    "programme": "both",
    "explanation": "Due to vascular smooth muscle relaxation (high progesterone, NO, prostacyclin) and low-resistance uteroplacental shunt, SVR falls by up to 35-40%, reaching a blood pressure nadir in the mid-second trimester.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-106-a",
        "text": "Decreases slightly (nadir around 20-24 weeks) due to profound reduction in systemic vascular resistance, then returns to baseline near term",
        "is_correct": true
      },
      {
        "id": "phys-sba-106-b",
        "text": "Progressively rises throughout all three trimesters to reach 150/90 mmHg",
        "is_correct": false
      },
      {
        "id": "phys-sba-106-c",
        "text": "Remains absolutely identical to pre-pregnancy values without any change",
        "is_correct": false
      },
      {
        "id": "phys-sba-106-d",
        "text": "Drops precipitously causing continuous syncopal episodes throughout pregnancy",
        "is_correct": false
      },
      {
        "id": "phys-sba-106-e",
        "text": "Diastolic pressure doubles while systolic pressure halves",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-107",
    "stem": "Which fetal vascular shunt bypasses the high-resistance pulmonary circulation by connecting the pulmonary artery directly to the descending aorta?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Physiology",
    "section": "Reproductive Physiology",
    "programme": "both",
    "explanation": "The ductus arteriosus diverts ~90% of right ventricular output directly from the pulmonary trunk into the descending aorta, bypassing the unexpanded, fluid-filled fetal lungs.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-107-c",
        "text": "Ductus venosus",
        "is_correct": false
      },
      {
        "id": "phys-sba-107-b",
        "text": "Foramen ovale",
        "is_correct": false
      },
      {
        "id": "phys-sba-107-a",
        "text": "Ductus arteriosus",
        "is_correct": true
      },
      {
        "id": "phys-sba-107-d",
        "text": "Umbilical vein",
        "is_correct": false
      },
      {
        "id": "phys-sba-107-e",
        "text": "Sinus venosus",
        "is_correct": false
      }
    ]
  },
  {
    "id": "phys-sba-108",
    "stem": "What triggers the anatomical and functional closure of the Ductus Arteriosus immediately after birth?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Physiology",
    "section": "Reproductive Physiology",
    "programme": "both",
    "explanation": "At birth, ventilation with room air raises neonatal PaO2 (a potent ductal constrictor) and removal of the placenta eliminates the major source of circulating PGE2, prompting muscular constriction and functional ductal closure.",
    "reference": "Guyton & Hall Textbook of Medical Physiology, 14th Ed. / Ganong's Review of Medical Physiology, 26th Ed.",
    "options": [
      {
        "id": "phys-sba-108-b",
        "text": "Immediate surge of maternal oxytocin entering neonatal circulation",
        "is_correct": false
      },
      {
        "id": "phys-sba-108-c",
        "text": "Reflex pulmonary vasoconstriction induced by cold ambient air",
        "is_correct": false
      },
      {
        "id": "phys-sba-108-a",
        "text": "Sudden rise in arterial oxygen tension (PaO2) and dramatic decline in circulating maternal/placental Prostaglandin E2 (PGE2)",
        "is_correct": true
      },
      {
        "id": "phys-sba-108-d",
        "text": "Complete cessation of blood flow through the umbilical arteries",
        "is_correct": false
      },
      {
        "id": "phys-sba-108-e",
        "text": "Closure of the foramen ovale via left atrial volume overload",
        "is_correct": false
      }
    ]
  }
]
