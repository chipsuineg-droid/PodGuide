import type { MCQQuestion } from "../mcq-bank"

export const PHARMACOLOGY_QUESTIONS: MCQQuestion[] = [
  {
    "id": "pharm-sba-001",
    "stem": "What is the pharmacological definition of Bioavailability (F)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Bioavailability (F) is 100% for intravenous administration and varies for oral routes due to incomplete absorption and first-pass hepatic metabolism.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-001-a",
        "text": "The fraction of an administered dose of unchanged drug that reaches the systemic circulation",
        "is_correct": true
      },
      {
        "id": "pharm-sba-001-c",
        "text": "The volume of distribution divided by clearance",
        "is_correct": false
      },
      {
        "id": "pharm-sba-001-d",
        "text": "The time required for plasma concentration to halve",
        "is_correct": false
      },
      {
        "id": "pharm-sba-001-e",
        "text": "The percentage of drug bound to plasma albumin",
        "is_correct": false
      },
      {
        "id": "pharm-sba-001-b",
        "text": "The rate at which a drug is metabolized by liver enzymes",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-002",
    "stem": "Which anatomical route of drug administration bypasses the portal circulation and avoids first-pass hepatic metabolism?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Sublingual and transdermal drugs enter systemic venous drainage directly, bypassing the hepatic portal vein and avoiding first-pass metabolism.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-002-d",
        "text": "Jejunostomy infusion",
        "is_correct": false
      },
      {
        "id": "pharm-sba-002-a",
        "text": "Sublingual, transdermal, and intravenous routes",
        "is_correct": true
      },
      {
        "id": "pharm-sba-002-c",
        "text": "Gastrostomy enteral feeding tube",
        "is_correct": false
      },
      {
        "id": "pharm-sba-002-b",
        "text": "Oral swallowed tablets",
        "is_correct": false
      },
      {
        "id": "pharm-sba-002-e",
        "text": "Oral liquid elixirs",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-003",
    "stem": "A lipid-soluble drug that is extensively sequestered in adipose tissues will exhibit which pharmacokinetic property?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Lipophilic drugs (e.g. Amiodarone, Chloroquine) distribute widely into peripheral tissues, giving very large apparent Vd values exceeding total body water.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-003-d",
        "text": "Zero penetration across the blood-brain barrier",
        "is_correct": false
      },
      {
        "id": "pharm-sba-003-b",
        "text": "A very small Volume of Distribution (<5 L)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-003-e",
        "text": "Total restriction to the intravascular plasma compartment",
        "is_correct": false
      },
      {
        "id": "pharm-sba-003-c",
        "text": "Immediate instantaneous complete renal elimination",
        "is_correct": false
      },
      {
        "id": "pharm-sba-003-a",
        "text": "A very large Apparent Volume of Distribution (Vd >> total body water, >50 L/70kg)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-004",
    "stem": "What distinguishes Zero-Order elimination kinetics from First-Order elimination kinetics?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "First-order kinetics eliminate a constant fraction (constant t1/2); zero-order kinetics (e.g. ethanol, high-dose aspirin, phenytoin) eliminate a fixed amount/hour.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-004-a",
        "text": "Zero-order eliminates a constant AMOUNT of drug per unit time because elimination pathways are saturated, regardless of concentration",
        "is_correct": true
      },
      {
        "id": "pharm-sba-004-e",
        "text": "Zero-order only applies to inhaled gases",
        "is_correct": false
      },
      {
        "id": "pharm-sba-004-b",
        "text": "Zero-order eliminates a constant percentage of drug per unit time",
        "is_correct": false
      },
      {
        "id": "pharm-sba-004-c",
        "text": "Zero-order has a constant half-life",
        "is_correct": false
      },
      {
        "id": "pharm-sba-004-d",
        "text": "Zero-order clearance is independent of dose",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-005",
    "stem": "What does the Therapeutic Index (TI) measure, and what does a low therapeutic index signify?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Therapeutic Index = TD50/ED50. Narrow TI drugs (Warfarin, Digoxin, Lithium, Gentamicin, Theophylline) require therapeutic drug monitoring.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-005-c",
        "text": "The affinity of a ligand for its target receptor",
        "is_correct": false
      },
      {
        "id": "pharm-sba-005-d",
        "text": "The degree of oral absorption across the intestinal mucosa",
        "is_correct": false
      },
      {
        "id": "pharm-sba-005-b",
        "text": "The time required to reach steady-state plasma concentration",
        "is_correct": false
      },
      {
        "id": "pharm-sba-005-e",
        "text": "The maximal efficacy achieved by a full agonist",
        "is_correct": false
      },
      {
        "id": "pharm-sba-005-a",
        "text": "The ratio of Median Toxic Dose to Median Effective Dose (TD50/ED50); a low TI indicates a narrow margin of safety requiring drug monitoring",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-006",
    "stem": "How does a reversible Competitive Antagonist alter the agonist log concentration-response curve?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Competitive antagonists compete for the same receptor site; increasing agonist concentration overcomes the block, shifting the curve right (parallel shift).",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-006-b",
        "text": "Depresses the maximal response (Emax) without shifting EC50",
        "is_correct": false
      },
      {
        "id": "pharm-sba-006-e",
        "text": "Converts the full agonist into an inverse agonist",
        "is_correct": false
      },
      {
        "id": "pharm-sba-006-d",
        "text": "Permanently abolishes all receptor activation",
        "is_correct": false
      },
      {
        "id": "pharm-sba-006-c",
        "text": "Shifts the curve to the left and increases Emax",
        "is_correct": false
      },
      {
        "id": "pharm-sba-006-a",
        "text": "Shifts the curve to the RIGHT (increases EC50 / lowers potency) without reducing maximal efficacy (Emax can still be reached)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-007",
    "stem": "Which of the following medications is a potent INDUCER of hepatic Cytochrome P450 enzymes (e.g. CYP3A4)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Rifampicin, phenytoin, carbamazepine, and St John's wort induce CYPs, accelerating metabolism of oral contraceptives, warfarin, and cyclosporine.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-007-d",
        "text": "Fluconazole and Isoniazid",
        "is_correct": false
      },
      {
        "id": "pharm-sba-007-b",
        "text": "Cimetidine, Ketoconazole, and Grapefruit juice",
        "is_correct": false
      },
      {
        "id": "pharm-sba-007-a",
        "text": "Rifampicin, Carbamazepine, Phenytoin, and St John's Wort",
        "is_correct": true
      },
      {
        "id": "pharm-sba-007-e",
        "text": "Amiodarone and Diltiazem",
        "is_correct": false
      },
      {
        "id": "pharm-sba-007-c",
        "text": "Erythromycin and Clarithromycin",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-008",
    "stem": "Which of the following substances is a potent INHIBITOR of Cytochrome P450 (CYP3A4) enzymes, leading to toxic elevation of co-administered statins?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Grapefruit juice (furanocoumarins) and macrolides/azoles inhibit CYP3A4, raising levels of statins, calcineurin inhibitors, and antiarrhythmics.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-008-d",
        "text": "St John's wort",
        "is_correct": false
      },
      {
        "id": "pharm-sba-008-c",
        "text": "Chronic heavy tobacco smoking",
        "is_correct": false
      },
      {
        "id": "pharm-sba-008-e",
        "text": "Ethanol in chronic alcoholics",
        "is_correct": false
      },
      {
        "id": "pharm-sba-008-b",
        "text": "Rifampicin and Phenobarbital",
        "is_correct": false
      },
      {
        "id": "pharm-sba-008-a",
        "text": "Grapefruit juice, Clarithromycin, Ketoconazole, and Ciprofloxacin",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-009",
    "stem": "For a drug following first-order elimination kinetics, how many elimination half-lives (t1/2) are required to reach steady-state concentration (~95%)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Steady state is achieved when rate of input equals rate of output, requiring 4 to 5 half-lives (50% at 1 t1/2, 75% at 2, 87.5% at 3, 93.75% at 4, 96.8% at 5).",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-009-a",
        "text": "4 to 5 elimination half-lives",
        "is_correct": true
      },
      {
        "id": "pharm-sba-009-b",
        "text": "1 half-life",
        "is_correct": false
      },
      {
        "id": "pharm-sba-009-c",
        "text": "2 half-lives",
        "is_correct": false
      },
      {
        "id": "pharm-sba-009-d",
        "text": "10 to 12 half-lives",
        "is_correct": false
      },
      {
        "id": "pharm-sba-009-e",
        "text": "Steady state is reached instantaneously after the first oral dose",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-010",
    "stem": "How is the Loading Dose of a drug calculated to rapidly achieve target steady-state plasma concentration?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Loading dose fills the volume of distribution: Loading Dose = (Target Cp x Vd) / F.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-010-d",
        "text": "Loading Dose = Bioavailability divided by GFR",
        "is_correct": false
      },
      {
        "id": "pharm-sba-010-a",
        "text": "Loading Dose = Target Plasma Concentration x Apparent Volume of Distribution (Vd)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-010-e",
        "text": "Loading Dose = Half-life x Plasma protein binding",
        "is_correct": false
      },
      {
        "id": "pharm-sba-010-b",
        "text": "Loading Dose = Target Plasma Concentration x Clearance",
        "is_correct": false
      },
      {
        "id": "pharm-sba-010-c",
        "text": "Loading Dose = Clearance divided by Half-life",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-011",
    "stem": "How is the Maintenance Dose rate of a drug calculated to sustain steady-state plasma concentration?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Maintenance dosing replaces drug lost through clearance: Dosing rate = (Target Cp x CL) / F.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-011-a",
        "text": "Maintenance Dose Rate = Target Plasma Concentration x Systemic Clearance (CL)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-011-b",
        "text": "Maintenance Dose Rate = Target Plasma Concentration x Volume of Distribution",
        "is_correct": false
      },
      {
        "id": "pharm-sba-011-e",
        "text": "Maintenance Dose Rate = Bioavailability multiplied by GFR",
        "is_correct": false
      },
      {
        "id": "pharm-sba-011-c",
        "text": "Maintenance Dose Rate = Vd divided by half-life",
        "is_correct": false
      },
      {
        "id": "pharm-sba-011-d",
        "text": "Maintenance Dose Rate = Dose divided by AUC",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-012",
    "stem": "What chemical modifications characterize Phase I hepatic drug metabolism?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Phase I introduces polar groups (-OH, -NH2, -SH) via CYPs; Phase II couples polar conjugates (glucuronate, sulfate) for renal/biliary excretion.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-012-a",
        "text": "Oxidation, reduction, and hydrolysis reactions mediated predominantly by Cytochrome P450 enzymes to introduce functional polar groups",
        "is_correct": true
      },
      {
        "id": "pharm-sba-012-b",
        "text": "Glucuronidation, sulfation, and glutathione conjugation (Phase II)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-012-c",
        "text": "Acetylation and methylation of lipid stores",
        "is_correct": false
      },
      {
        "id": "pharm-sba-012-d",
        "text": "Complete exocytosis into bile without chemical change",
        "is_correct": false
      },
      {
        "id": "pharm-sba-012-e",
        "text": "Polymerization into macromolecules",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-013",
    "stem": "Which of the following antihypertensive agents is an inactive prodrug that requires hepatic esterase cleavage to form its active diacid metabolite?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Enalapril is an ethyl ester prodrug with superior oral bioavailability, hydrolyzed in the liver to the active ACE inhibitor enalaprilat.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-013-d",
        "text": "Amlodipine",
        "is_correct": false
      },
      {
        "id": "pharm-sba-013-e",
        "text": "Losartan",
        "is_correct": false
      },
      {
        "id": "pharm-sba-013-b",
        "text": "Lisinopril (active parent molecule)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-013-c",
        "text": "Captopril (active parent molecule)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-013-a",
        "text": "Enalapril (converted to Enalaprilat)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-014",
    "stem": "In receptor pharmacology, what is the fundamental difference between Drug Efficacy and Drug Potency?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Efficacy (Emax) reflects intrinsic receptor activation capacity; Potency (EC50) reflects affinity and receptor reserve.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-014-a",
        "text": "Efficacy refers to the maximal response (Emax) a drug can produce; Potency refers to the concentration (EC50) required to produce 50% of its maximal effect",
        "is_correct": true
      },
      {
        "id": "pharm-sba-014-b",
        "text": "Efficacy and potency are identical synonyms",
        "is_correct": false
      },
      {
        "id": "pharm-sba-014-c",
        "text": "Potency is the maximal response; efficacy is the dose",
        "is_correct": false
      },
      {
        "id": "pharm-sba-014-e",
        "text": "Efficacy depends entirely on oral bioavailability",
        "is_correct": false
      },
      {
        "id": "pharm-sba-014-d",
        "text": "Potency is measured in percentage; efficacy is measured in milligrams",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-015",
    "stem": "Which intracellular second-messenger cascade is activated when a drug stimulates a Gs-coupled receptor (e.g. beta-1 adrenergic receptor)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Gs couples to adenylyl cyclase, raising cAMP and activating PKA; Gi inhibits adenylyl cyclase; Gq activates phospholipase C (IP3/DAG/Ca2+).",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-015-a",
        "text": "Stimulation of Adenylyl Cyclase, increasing intracellular Cyclic AMP (cAMP) and activating Protein Kinase A (PKA)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-015-d",
        "text": "Opening of chloride channels causing hyperpolarization",
        "is_correct": false
      },
      {
        "id": "pharm-sba-015-c",
        "text": "Activation of Phospholipase C, generating IP3 and DAG (Gq-coupled)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-015-e",
        "text": "Direct cleavage of receptor tyrosine kinase domains",
        "is_correct": false
      },
      {
        "id": "pharm-sba-015-b",
        "text": "Inhibition of adenylyl cyclase, lowering cAMP",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-016",
    "stem": "Which of the following drugs requires routine Therapeutic Drug Monitoring (TDM) due to zero-order saturable pharmacokinetics within its clinical range?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Phenytoin exhibits Michaelis-Menten (saturable) kinetics: small dose increases produce disproportionately large plasma surges, risking severe toxicity.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-016-a",
        "text": "Phenytoin",
        "is_correct": true
      },
      {
        "id": "pharm-sba-016-b",
        "text": "Penicillin V",
        "is_correct": false
      },
      {
        "id": "pharm-sba-016-c",
        "text": "Paracetamol at therapeutic doses",
        "is_correct": false
      },
      {
        "id": "pharm-sba-016-e",
        "text": "Atorvastatin",
        "is_correct": false
      },
      {
        "id": "pharm-sba-016-d",
        "text": "Amoxicillin",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-017",
    "stem": "If a drug is freely filtered at the glomerulus, neither reabsorbed nor secreted by the renal tubules, what does its renal clearance equal?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Inulin is freely filtered with zero tubular secretion or reabsorption; its clearance is the gold standard measurement of GFR (~120-125 mL/min).",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-017-c",
        "text": "Renal Plasma Flow (RPF, e.g. PAH clearance)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-017-d",
        "text": "Zero clearance",
        "is_correct": false
      },
      {
        "id": "pharm-sba-017-b",
        "text": "Total Renal Blood Flow (RBF)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-017-a",
        "text": "Glomerular Filtration Rate (GFR, e.g. Inulin or accurate Creatinine clearance)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-017-e",
        "text": "Double the hepatic clearance rate",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-018",
    "stem": "What happens when a highly protein-bound drug (e.g. Warfarin, 99% bound) is displaced by another drug (e.g. Phenylbutazone or Sulfonamides)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "General Pharmacology",
    "programme": "both",
    "explanation": "Displacement increases the free active fraction; for narrow-index drugs like warfarin, this precipitates bleeding until clearance re-equilibrates.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-018-d",
        "text": "Complete conversion of the drug into an inactive prodrug",
        "is_correct": false
      },
      {
        "id": "pharm-sba-018-c",
        "text": "Immediate drop in drug excretion",
        "is_correct": false
      },
      {
        "id": "pharm-sba-018-a",
        "text": "Transient increase in free (unbound) pharmacologically active drug concentration, risking acute toxicity",
        "is_correct": true
      },
      {
        "id": "pharm-sba-018-e",
        "text": "Zero change in any pharmacological effect",
        "is_correct": false
      },
      {
        "id": "pharm-sba-018-b",
        "text": "Permanent inactivation of the displaced drug",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-019",
    "stem": "An agricultural worker presents with miosis, salivation, bronchorrhoea, bradycardia, and fasciculations. What is the mechanism of Pralidoxime (2-PAM)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Atropine blocks muscarinic receptors; Pralidoxime regenerates acetylcholinesterase at both muscarinic and nicotinic neuromuscular synapses.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-019-a",
        "text": "Reactivates acetylcholinesterase by hydrolyzing the organophosphate-enzyme bond before 'aging' occurs",
        "is_correct": true
      },
      {
        "id": "pharm-sba-019-b",
        "text": "Competitively blocks muscarinic receptors (action of Atropine)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-019-c",
        "text": "Directly stimulates adrenergic beta-2 receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-019-d",
        "text": "Inhibits presynaptic acetylcholine release",
        "is_correct": false
      },
      {
        "id": "pharm-sba-019-e",
        "text": "Blocks nicotinic receptors permanently",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-020",
    "stem": "What constellation of clinical findings characterizes acute Anticholinergic / Atropine poisoning?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Atropine competitively blocks muscarinic receptors: mydriasis, cycloplegia, dry mouth, hot flushed skin, tachycardia, and urinary retention.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-020-b",
        "text": "Miosis, salivation, urination, diarrhea, and bradycardia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-020-a",
        "text": "'Blind as a bat (mydriasis), dry as a bone (anhidrosis), red as a beet (flushing), hot as a hare (hyperthermia), mad as a hatter (delirium)'",
        "is_correct": true
      },
      {
        "id": "pharm-sba-020-e",
        "text": "Profuse sweating, lacrimation, and bronchorrhea",
        "is_correct": false
      },
      {
        "id": "pharm-sba-020-d",
        "text": "Severe tremors, hyperreflexia, and diarrhea",
        "is_correct": false
      },
      {
        "id": "pharm-sba-020-c",
        "text": "Hypothermia, pinpoint pupils, and respiratory depression",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-021",
    "stem": "Why is Neostigmine, a quaternary ammonium anticholinesterase, preferred over Physostigmine for treating peripheral myasthenia gravis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Quaternary amines (Neostigmine, Pyridostigmine) do not penetrate the blood-brain barrier; tertiary amines (Physostigmine) cross into the CNS.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-021-e",
        "text": "It is administered as an inhaled gas",
        "is_correct": false
      },
      {
        "id": "pharm-sba-021-b",
        "text": "It has zero effect on nicotinic neuromuscular junctions",
        "is_correct": false
      },
      {
        "id": "pharm-sba-021-c",
        "text": "It crosses the blood-brain barrier rapidly to stimulate memory",
        "is_correct": false
      },
      {
        "id": "pharm-sba-021-a",
        "text": "Its charged quaternary structure prevents it from crossing the blood-brain barrier, avoiding central nervous system toxicity",
        "is_correct": true
      },
      {
        "id": "pharm-sba-021-d",
        "text": "It permanently destroys acetylcholinesterase enzymes",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-022",
    "stem": "At low therapeutic doses (0.01-0.05 mcg/kg/min), which adrenergic receptor does Adrenaline (Epinephrine) predominantly stimulate to produce bronchodilation and peripheral vasodilation?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Adrenaline has high affinity for beta-2 receptors at low doses (vasodilation, bronchodilation); at higher doses, alpha-1 vasoconstriction predominates.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-022-c",
        "text": "Alpha-2 adrenergic receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-022-b",
        "text": "Alpha-1 adrenergic receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-022-d",
        "text": "Muscarinic M3 receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-022-a",
        "text": "Beta-2 adrenergic receptors",
        "is_correct": true
      },
      {
        "id": "pharm-sba-022-e",
        "text": "Dopamine D1 receptors",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-023",
    "stem": "What is the single most important, life-saving first-line medication for acute systemic Anaphylaxis?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "IM adrenaline into the vastus lateralis rapidly reverses airway obstruction (beta-2) and hypotension/shock (alpha-1); antihistamines and steroids are second-line.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-023-a",
        "text": "Intramuscular Adrenaline (Epinephrine 1:1,000, 0.5 mg in adults) into the anterolateral mid-thigh",
        "is_correct": true
      },
      {
        "id": "pharm-sba-023-b",
        "text": "Intravenous Hydrocortisone 100 mg alone",
        "is_correct": false
      },
      {
        "id": "pharm-sba-023-c",
        "text": "Oral Chlorphenamine 4 mg tablet",
        "is_correct": false
      },
      {
        "id": "pharm-sba-023-d",
        "text": "Inhaled Salbutamol alone without adrenaline",
        "is_correct": false
      },
      {
        "id": "pharm-sba-023-e",
        "text": "Intravenous broad-spectrum cephalosporins",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-024",
    "stem": "What is the primary mechanism and advantage of Tamsulosin in treating Benign Prostatic Hyperplasia?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Tamsulosin selectively targets alpha-1A subtype receptors in the prostate/urethra, relieving outflow obstruction with less systemic vasodilation.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-024-b",
        "text": "Non-selective alpha blockade causing severe reflex tachycardia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-024-c",
        "text": "Direct inhibition of 5-alpha-reductase lowering prostate volume",
        "is_correct": false
      },
      {
        "id": "pharm-sba-024-d",
        "text": "Stimulation of beta-3 receptors on the detrusor muscle",
        "is_correct": false
      },
      {
        "id": "pharm-sba-024-e",
        "text": "Irreversible alkylation of androgen receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-024-a",
        "text": "Selective antagonism of Alpha-1A adrenergic receptors in the prostate and bladder neck, improving urinary flow with minimal hypotension",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-025",
    "stem": "Which of the following beta-adrenergic receptor antagonists is Cardioselective (predominantly blocks Beta-1 receptors over Beta-2)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Bisoprolol, metoprolol, and atenolol selectively block cardiac beta-1 receptors at standard doses, with less bronchospasm risk than non-selective blockers.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-025-d",
        "text": "Pindolol and Acebutolol (with intrinsic sympathomimetic activity)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-025-a",
        "text": "Bisoprolol, Atenolol, and Metoprolol",
        "is_correct": true
      },
      {
        "id": "pharm-sba-025-b",
        "text": "Propranolol, Timolol, and Nadolol (non-selective beta-1 and beta-2)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-025-c",
        "text": "Carvedilol and Labetalol (combined alpha and beta blockers)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-025-e",
        "text": "Sotalol (with class III potassium-blocking properties)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-026",
    "stem": "In which of the following conditions is non-selective beta-blocker therapy (e.g. Propranolol) STRICTLY CONTRAINDICATED?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Beta-2 blockade causes life-threatening bronchospasm in asthmatics; beta-1 blockade worsens high-grade AV nodal conduction block.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-026-e",
        "text": "Thyrotoxicosis with sinus tachycardia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-026-c",
        "text": "Compensated heart failure with reduced ejection fraction",
        "is_correct": false
      },
      {
        "id": "pharm-sba-026-d",
        "text": "Essential hypertension",
        "is_correct": false
      },
      {
        "id": "pharm-sba-026-a",
        "text": "Severe bronchial asthma and second- or third-degree atrioventricular (AV) heart block",
        "is_correct": true
      },
      {
        "id": "pharm-sba-026-b",
        "text": "Chronic stable angina pectoris",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-027",
    "stem": "What is the mechanism of action of Clonidine in lowering systemic arterial blood pressure?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Clonidine activates presynaptic alpha-2 receptors in the nucleus tractus solitarius, inhibiting sympathetic vasomotor tone.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-027-c",
        "text": "Peripheral beta-1 receptor antagonist in the heart",
        "is_correct": false
      },
      {
        "id": "pharm-sba-027-e",
        "text": "Direct inhibitor of renin secretion",
        "is_correct": false
      },
      {
        "id": "pharm-sba-027-b",
        "text": "Direct competitive antagonist of vascular alpha-1 receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-027-a",
        "text": "Centrally-acting Alpha-2 adrenergic receptor agonist in the medulla, reducing central sympathetic outflow",
        "is_correct": true
      },
      {
        "id": "pharm-sba-027-d",
        "text": "Calcium channel blocker in arteriolar smooth muscle",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-028",
    "stem": "What life-threatening clinical phenomenon occurs if Clonidine is abruptly stopped without tapering?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Sudden clonidine withdrawal causes unopposed sympathetic rebound with hypertensive crisis; must be tapered gradually over days.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-028-a",
        "text": "Severe rebound hypertensive crisis due to massive sudden surge of endogenous catecholamines",
        "is_correct": true
      },
      {
        "id": "pharm-sba-028-b",
        "text": "Severe profound circulatory collapse and shock",
        "is_correct": false
      },
      {
        "id": "pharm-sba-028-d",
        "text": "Permanent destruction of autonomic ganglia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-028-e",
        "text": "Irreversible bronchial spasm",
        "is_correct": false
      },
      {
        "id": "pharm-sba-028-c",
        "text": "Persistent hypokalemia and metabolic alkalosis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-029",
    "stem": "What is the mechanism and route of Ipratropium bromide in the treatment of acute asthma and COPD?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Ipratropium is an inhaled quaternary anticholinergic, blocking M3 receptors on bronchial smooth muscle and submucosal glands.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-029-b",
        "text": "Beta-2 adrenergic agonist stimulating adenylyl cyclase",
        "is_correct": false
      },
      {
        "id": "pharm-sba-029-d",
        "text": "Cysteinyl leukotriene receptor antagonist",
        "is_correct": false
      },
      {
        "id": "pharm-sba-029-c",
        "text": "Phosphodiesterase inhibitor increasing cGMP",
        "is_correct": false
      },
      {
        "id": "pharm-sba-029-a",
        "text": "Inhaled muscarinic (M3) receptor antagonist that blocks parasympathetic vagal bronchoconstriction and reduces mucus secretion",
        "is_correct": true
      },
      {
        "id": "pharm-sba-029-e",
        "text": "Mast cell stabilizer preventing histamine release",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-030",
    "stem": "What is the pharmacological action of Bethanechol in non-obstructive postoperative urinary retention?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Bethanechol is a muscarinic choline ester resistant to cholinesterase that selectively stimulates detrusor M3 receptors.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-030-e",
        "text": "Loop diuretic that increases urine production",
        "is_correct": false
      },
      {
        "id": "pharm-sba-030-d",
        "text": "Anticholinergic agent that relaxes the bladder dome",
        "is_correct": false
      },
      {
        "id": "pharm-sba-030-c",
        "text": "Alpha-1 agonist that constricts the bladder neck",
        "is_correct": false
      },
      {
        "id": "pharm-sba-030-b",
        "text": "Nicotinic antagonist that paralyzes the urethral sphincter",
        "is_correct": false
      },
      {
        "id": "pharm-sba-030-a",
        "text": "Direct muscarinic (M3) agonist that stimulates detrusor muscle contraction to promote bladder emptying",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-031",
    "stem": "How does topical Pilocarpine lower intraocular pressure in acute angle-closure glaucoma?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Pilocarpine induces miosis and ciliary contraction, opening the iridocorneal angle and facilitating aqueous outflow via the canal of Schlemm.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-031-b",
        "text": "Paralyzes the ciliary muscle (cycloplegia) causing mydriasis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-031-a",
        "text": "Contracts the pupillary sphincter muscle (miosis) and ciliary muscle, pulling the iris away from the trabecular meshwork and opening the drainage angle",
        "is_correct": true
      },
      {
        "id": "pharm-sba-031-c",
        "text": "Inhibits carbonic anhydrase in ciliary processes",
        "is_correct": false
      },
      {
        "id": "pharm-sba-031-d",
        "text": "Reduces blood flow to the choroidal plexus",
        "is_correct": false
      },
      {
        "id": "pharm-sba-031-e",
        "text": "Directly binds and destroys vitreous humor",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-032",
    "stem": "What is the mechanism of action of Succinylcholine (Suxamethonium) as a depolarizing neuromuscular blocker?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Succinylcholine depolarizes the motor endplate persistently (not degraded by acetylcholinesterase), causing refractory inactivation of sodium channels.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-032-e",
        "text": "Permanent blockade of ryanodine receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-032-d",
        "text": "Inhibition of acetylcholinesterase at the presynaptic terminal",
        "is_correct": false
      },
      {
        "id": "pharm-sba-032-c",
        "text": "Direct inhibition of voltage-gated calcium channels in T-tubules",
        "is_correct": false
      },
      {
        "id": "pharm-sba-032-b",
        "text": "Competitive non-depolarizing antagonism of nicotinic receptors (action of Rocuronium)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-032-a",
        "text": "Persistent agonism of nicotinic (Nm) receptors at the neuromuscular motor endplate, causing initial fasciculations followed by prolonged flaccid paralysis (Phase I block)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-033",
    "stem": "Which anaesthetic combination triggers Malignant Hyperthermia (hyperpyrexia, muscle rigidity, hypercapnia), and what is the specific antidote?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Malignant hyperthermia is caused by RYR1 mutations triggering uncontrolled calcium release; Dantrolene blocks ryanodine receptors.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-033-a",
        "text": "Volatile halogenated anaesthetics (halothane/isoflurane) + Succinylcholine; treated immediately with intravenous Dantrolene",
        "is_correct": true
      },
      {
        "id": "pharm-sba-033-b",
        "text": "Propofol and Fentanyl; treated with Naloxone",
        "is_correct": false
      },
      {
        "id": "pharm-sba-033-c",
        "text": "Ketamine and Midazolam; treated with Flumazenil",
        "is_correct": false
      },
      {
        "id": "pharm-sba-033-e",
        "text": "Nitrous oxide alone; treated with Atropine",
        "is_correct": false
      },
      {
        "id": "pharm-sba-033-d",
        "text": "Bupivacaine and Lignocaine; treated with Intralipid",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-034",
    "stem": "How is non-depolarizing neuromuscular blockade (e.g. Rocuronium or Vecuronium) pharmacologically reversed at the end of surgery?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Neostigmine raises ACh to displace blockers; atropine prevents muscarinic bradycardia/salivation; Sugammadex selectively encapsulates rocuronium.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-034-e",
        "text": "Dantrolene sodium infusion",
        "is_correct": false
      },
      {
        "id": "pharm-sba-034-a",
        "text": "Neostigmine (anticholinesterase to raise synaptic acetylcholine) co-administered with Atropine/Glycopyrrolate, or Sugammadex (direct encapsulating agent)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-034-b",
        "text": "Succinylcholine administration to stimulate receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-034-c",
        "text": "High-dose intravenous magnesium sulfate",
        "is_correct": false
      },
      {
        "id": "pharm-sba-034-d",
        "text": "Intravenous adrenaline bolus",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-035",
    "stem": "What is the primary receptor mechanism of Dobutamine when used for inotropic support in acute decompensated heart failure?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Dobutamine is a synthetic inotrope acting predominantly on cardiac beta-1 receptors to augment stroke volume and cardiac output.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-035-a",
        "text": "Potent Beta-1 adrenergic receptor agonist, increasing myocardial contractility (inotropy) with modest heart rate increase (chronotropy)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-035-b",
        "text": "Alpha-1 adrenergic agonist causing profound peripheral vasoconstriction",
        "is_correct": false
      },
      {
        "id": "pharm-sba-035-c",
        "text": "Dopamine D2 receptor antagonist in the renal vasculature",
        "is_correct": false
      },
      {
        "id": "pharm-sba-035-e",
        "text": "Beta-2 antagonist causing coronary vasoconstriction",
        "is_correct": false
      },
      {
        "id": "pharm-sba-035-d",
        "text": "Muscarinic M2 receptor agonist",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-036",
    "stem": "Why is Noradrenaline (Norepinephrine) the first-line vasopressor of choice in distributive septic shock?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Autonomic Pharmacology",
    "programme": "both",
    "explanation": "Noradrenaline restores vascular tone via strong alpha-1 stimulation while supporting cardiac output via modest beta-1 agonism.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-036-a",
        "text": "Potent Alpha-1 receptor vasoconstriction restoring Systemic Vascular Resistance (SVR) combined with modest Beta-1 inotropic cardiac support",
        "is_correct": true
      },
      {
        "id": "pharm-sba-036-b",
        "text": "Pure beta-2 receptor stimulation causing splanchnic vasodilation",
        "is_correct": false
      },
      {
        "id": "pharm-sba-036-d",
        "text": "Pure cholinergic stimulation of the vagus nerve",
        "is_correct": false
      },
      {
        "id": "pharm-sba-036-c",
        "text": "Direct inhibition of bacterial endotoxin release",
        "is_correct": false
      },
      {
        "id": "pharm-sba-036-e",
        "text": "Inhibition of nitric oxide synthases in the kidney alone",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-037",
    "stem": "In diabetic nephropathy with albuminuria, why are ACE Inhibitors (e.g. Ramipril) renoprotective beyond their blood pressure-lowering effect?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "Angiotensin II selectively constricts efferent arterioles; ACEi dilate efferent arterioles, reducing glomerular hyperfiltration and slowing CKD.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-037-d",
        "text": "They increase renal tubular reabsorption of glucose",
        "is_correct": false
      },
      {
        "id": "pharm-sba-037-a",
        "text": "They selectively dilate the efferent arteriole, reducing intraglomerular capillary hydrostatic pressure and decreasing proteinuria",
        "is_correct": true
      },
      {
        "id": "pharm-sba-037-e",
        "text": "They stimulate renin release to raise systemic pressure",
        "is_correct": false
      },
      {
        "id": "pharm-sba-037-b",
        "text": "They constrict the afferent arteriole to collapse glomerular filtration",
        "is_correct": false
      },
      {
        "id": "pharm-sba-037-c",
        "text": "They permanently inhibit podocyte slit diaphragm proteins",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-038",
    "stem": "What biochemical mediator accumulates in the respiratory tract to cause the characteristic dry, intractable cough seen in 10-20% of patients taking ACE inhibitors?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "ACE (kininase II) metabolizes bradykinin; its inhibition leads to bradykinin and substance P accumulation, provoking bronchial irritation.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-038-d",
        "text": "Leukotrienes C4 and D4",
        "is_correct": false
      },
      {
        "id": "pharm-sba-038-a",
        "text": "Bradykinin and Substance P (which are normally degraded by ACE / kininase II)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-038-b",
        "text": "Histamine released from pulmonary mast cells",
        "is_correct": false
      },
      {
        "id": "pharm-sba-038-e",
        "text": "Prostaglandin I2 deficiency",
        "is_correct": false
      },
      {
        "id": "pharm-sba-038-c",
        "text": "Angiotensin II overproduction",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-039",
    "stem": "Why are Angiotensin Receptor Blockers (ARBs, e.g. Losartan) an excellent alternative in patients who develop ACE inhibitor-induced cough?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "ARBs competitively block AT1 receptors without affecting kininase II (ACE), effectively avoiding bradykinin-mediated cough and angioedema.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-039-d",
        "text": "They inhibit the renin enzyme upstream",
        "is_correct": false
      },
      {
        "id": "pharm-sba-039-e",
        "text": "They lack any effect on blood pressure",
        "is_correct": false
      },
      {
        "id": "pharm-sba-039-a",
        "text": "They selectively block the AT1 receptor without inhibiting kininase II, preventing bradykinin accumulation while blocking Angiotensin II actions",
        "is_correct": true
      },
      {
        "id": "pharm-sba-039-c",
        "text": "They directly bind and destroy histamine receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-039-b",
        "text": "They stimulate kininase II to destroy all bradykinin in the body",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-040",
    "stem": "What is the primary mechanism and characteristic adverse effect of Amlodipine in systemic hypertension?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "Dihydropyridines (Amlodipine) selectively relax vascular smooth muscle; precapillary dilatation causes fluid extravasation and ankle edema.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-040-a",
        "text": "Inhibition of L-type voltage-gated calcium channels in vascular smooth muscle causing arteriolar vasodilation; peripheral ankle oedema",
        "is_correct": true
      },
      {
        "id": "pharm-sba-040-b",
        "text": "Direct blockade of cardiac pacemaker channels; profound bronchospasm",
        "is_correct": false
      },
      {
        "id": "pharm-sba-040-d",
        "text": "Direct stimulation of central alpha-2 receptors; sedation",
        "is_correct": false
      },
      {
        "id": "pharm-sba-040-c",
        "text": "Inhibition of renal tubular sodium reabsorption; severe hypercalcaemia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-040-e",
        "text": "Inhibition of aldosterone receptors; severe gynecomastia",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-041",
    "stem": "Why should Verapamil NEVER be combined with a Beta-blocker in the management of cardiovascular disease?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "Verapamil and beta-blockers both depress SA node automaticity and AV nodal conduction; combination risks profound asystole or AV block.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-041-e",
        "text": "They cause irreversible hemolytic anemia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-041-c",
        "text": "They precipitate acute hypertensive crisis via alpha-1 stimulation",
        "is_correct": false
      },
      {
        "id": "pharm-sba-041-a",
        "text": "Synergistic negative inotropic and chronotropic depression risks fatal complete heart block, severe bradycardia, and acute heart failure",
        "is_correct": true
      },
      {
        "id": "pharm-sba-041-b",
        "text": "They chemically neutralize each other in the bloodstream",
        "is_correct": false
      },
      {
        "id": "pharm-sba-041-d",
        "text": "They induce acute massive pulmonary embolism",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-042",
    "stem": "In which segment of the nephron and on which transporter do Thiazide diuretics (e.g. Hydrochlorothiazide, Indapamide) exert their primary action?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "Thiazides inhibit the Na+/Cl- cotransporter in the early distal tubule, promoting moderate natriuresis and mild calcium retention.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-042-d",
        "text": "Inhibition of carbonic anhydrase in the proximal convoluted tubule",
        "is_correct": false
      },
      {
        "id": "pharm-sba-042-a",
        "text": "Inhibition of the Na+/Cl- cotransporter (NCCT) in the early Distal Convoluted Tubule",
        "is_correct": true
      },
      {
        "id": "pharm-sba-042-e",
        "text": "Antagonism of vasopressin V2 receptors in the medullary collecting duct",
        "is_correct": false
      },
      {
        "id": "pharm-sba-042-b",
        "text": "Inhibition of the Na+/K+/2Cl- cotransporter (NKCC2) in the thick ascending limb",
        "is_correct": false
      },
      {
        "id": "pharm-sba-042-c",
        "text": "Blockade of epithelial sodium channels (ENaC) in the collecting duct",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-043",
    "stem": "Where does Furosemide act in the nephron, and what recognized dose-dependent toxicity can occur with rapid high-dose intravenous administration?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "Loop diuretics inhibit NKCC2 in the thick ascending limb; can cause ototoxicity by disrupting endolymph ion transport in the inner ear stria vascularis.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-043-a",
        "text": "Inhibits the Na+/K+/2Cl- cotransporter (NKCC2) in the thick ascending limb of Henle's loop; Ototoxicity (tinnitus/hearing loss)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-043-b",
        "text": "Inhibits the sodium-glucose cotransporter (SGLT2); severe ketoacidosis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-043-e",
        "text": "Inhibits aquaporin-2 water channels; nephrogenic diabetes insipidus",
        "is_correct": false
      },
      {
        "id": "pharm-sba-043-c",
        "text": "Inhibits ENaC channels; severe hyperkalaemia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-043-d",
        "text": "Inhibits aldosterone synthesis; adrenal atrophy",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-044",
    "stem": "What is the mechanism of Spironolactone, and why does it cause painful gynecomastia in up to 10% of treated males?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "Spironolactone is a non-selective mineralocorticoid antagonist that blocks androgen receptors, causing gynecomastia; Eplerenone avoids this.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-044-b",
        "text": "Direct stimulator of estrogen synthesis in the liver",
        "is_correct": false
      },
      {
        "id": "pharm-sba-044-a",
        "text": "Mineralocorticoid receptor antagonist; also acts as an androgen receptor antagonist and inhibits 17-hydroxylase (Eplerenone is more selective)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-044-c",
        "text": "Inhibitor of testosterone synthesis in the testes",
        "is_correct": false
      },
      {
        "id": "pharm-sba-044-d",
        "text": "Direct agonist of prolactin receptors in breast tissue",
        "is_correct": false
      },
      {
        "id": "pharm-sba-044-e",
        "text": "Inhibitor of hepatic estrogen conjugation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-045",
    "stem": "What enzyme do Statins (e.g. Atorvastatin) competitively inhibit, and what serious muscle complication requires serum Creatine Kinase monitoring?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "Statins inhibit HMG-CoA reductase, upregulating hepatic LDL receptors; myopathy and rhabdomyolysis are serious rare toxicities.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-045-c",
        "text": "Cholesterol ester transfer protein (CETP); acute hepatitis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-045-e",
        "text": "Acyl-CoA cholesterol acyltransferase; osteomalacia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-045-d",
        "text": "PCSK9; severe thrombocytopenia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-045-a",
        "text": "HMG-CoA Reductase (rate-limiting step in cholesterol biosynthesis); Rhabdomyolysis and Statin-Induced Myopathy",
        "is_correct": true
      },
      {
        "id": "pharm-sba-045-b",
        "text": "Lipoprotein lipase; acute pancreatitis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-046",
    "stem": "What is the cellular target of Digoxin, and which electrolyte abnormality markedly POTENTIATES Digoxin toxicity and lethal arrhythmias?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "Digoxin inhibits Na+/K+-ATPase, raising intracellular Ca2+ (inotropic); K+ competes with digoxin for binding, so hypokalemia exacerbates toxicity.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-046-b",
        "text": "Inhibition of sarcoplasmic reticulum calcium release; Hypercalcaemia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-046-d",
        "text": "Blockade of voltage-gated potassium channels; Hyponatraemia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-046-e",
        "text": "Inhibition of phosphodiesterase-3; Hypomagnesaemia alone",
        "is_correct": false
      },
      {
        "id": "pharm-sba-046-a",
        "text": "Inhibition of the sarcolemmal Na+/K+-ATPase pump; Hypokalaemia markedly increases toxicity",
        "is_correct": true
      },
      {
        "id": "pharm-sba-046-c",
        "text": "Stimulation of beta-1 adrenergic receptors; Hyperkalaemia",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-047",
    "stem": "What cellular mechanism explains the rapid development of pharmacological tolerance ('tachyphylaxis') to continuous organic nitrates (e.g. Nitroglycerin)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "Nitrates require intracellular sulfhydryl donors to generate NO; continuous delivery depletes sulfhydryl pools, necessitating a nitrate-free window.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-047-c",
        "text": "Rapid antibody formation against the nitrate molecule",
        "is_correct": false
      },
      {
        "id": "pharm-sba-047-e",
        "text": "Exhaustion of extracellular calcium stores",
        "is_correct": false
      },
      {
        "id": "pharm-sba-047-d",
        "text": "Induction of Cytochrome P450 enzymes in the lungs",
        "is_correct": false
      },
      {
        "id": "pharm-sba-047-b",
        "text": "Permanent down-regulation of vascular smooth muscle guanylyl cyclase",
        "is_correct": false
      },
      {
        "id": "pharm-sba-047-a",
        "text": "Depletion of intracellular sulfhydryl (-SH) groups required for enzymatic bioactivation to nitric oxide; requires a daily 8-12 hour nitrate-free interval",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-048",
    "stem": "Which of the following recognized organ toxicities is characteristically associated with long-term therapy with the Class III antiarrhythmic Amiodarone?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "Amiodarone contains iodine and accumulates in tissues, risking pulmonary toxicity (fibrosis), thyroid disorders, and vortex keratopathy.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-048-a",
        "text": "Pulmonary fibrosis, Thyroid dysfunction (hypo- and hyper-thyroidism), Corneal microdeposits, and Blue-grey skin discoloration",
        "is_correct": true
      },
      {
        "id": "pharm-sba-048-b",
        "text": "Aplastic anaemia, acute pancreatitis, and osteoporosis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-048-c",
        "text": "Nephrotic syndrome, sensorineural deafness, and alopecia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-048-e",
        "text": "Type 1 diabetes mellitus and primary hypoadrenalism",
        "is_correct": false
      },
      {
        "id": "pharm-sba-048-d",
        "text": "Severe ulcerative colitis and colonic strictures",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-049",
    "stem": "What is the primary mechanism of SGLT2 inhibitors (e.g. Dapagliflozin, Empagliflozin) in reducing heart failure hospitalizations and CKD progression?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "SGLT2 inhibitors increase distal sodium delivery to macula densa, restoring tubuloglomerular feedback and reducing cardiac preload and afterload.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-049-d",
        "text": "Inhibition of myocardial sodium-hydrogen exchanger-1 alone",
        "is_correct": false
      },
      {
        "id": "pharm-sba-049-c",
        "text": "Competitive antagonism of cardiac endothelin receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-049-b",
        "text": "Direct stimulation of myocardial beta-1 adrenergic receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-049-e",
        "text": "Direct stimulation of pancreatic insulin release",
        "is_correct": false
      },
      {
        "id": "pharm-sba-049-a",
        "text": "Inhibition of sodium-glucose cotransporter-2 in the proximal tubule, promoting osmotic diuresis, natriuresis, and tubuloglomerular feedback",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-050",
    "stem": "What are the two complementary pharmacological mechanisms combined in Sacubitril/Valsartan (ARNI) for heart failure with reduced ejection fraction?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "Sacubitril inhibits neprilysin (elevating beneficial ANP/BNP/bradykinin), while valsartan blocks AT1 receptors to prevent adverse angiotensin effects.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-050-a",
        "text": "Neprilysin inhibition (Sacubitril, preventing natriuretic peptide breakdown) plus Angiotensin II Type 1 receptor blockade (Valsartan)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-050-b",
        "text": "ACE inhibition plus Beta-blockade",
        "is_correct": false
      },
      {
        "id": "pharm-sba-050-c",
        "text": "Aldosterone antagonism plus Loop diuresis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-050-d",
        "text": "Direct renin inhibition plus Calcium channel blockade",
        "is_correct": false
      },
      {
        "id": "pharm-sba-050-e",
        "text": "Phosphodiesterase-5 inhibition plus Endothelin antagonism",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-051",
    "stem": "What is the mechanism of action of Warfarin, and how does it differ from Direct Oral Anticoagulants (DOACs like Apixaban)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "Warfarin inhibits vitamin K epoxide reductase (VKORC1); Apixaban/Rivaroxaban directly inhibit Factor Xa; Dabigatran directly inhibits thrombin (Factor IIa).",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-051-d",
        "text": "Warfarin lyses existing fibrin clots; Apixaban prevents platelet aggregation",
        "is_correct": false
      },
      {
        "id": "pharm-sba-051-e",
        "text": "Warfarin inhibits ADP P2Y12 receptors on platelets",
        "is_correct": false
      },
      {
        "id": "pharm-sba-051-a",
        "text": "Warfarin inhibits Vitamin K Epoxide Reductase (VKORC1), blocking synthesis of Factors II, VII, IX, X; Apixaban directly inhibits Factor Xa",
        "is_correct": true
      },
      {
        "id": "pharm-sba-051-b",
        "text": "Warfarin directly inhibits Factor Xa; Apixaban inhibits Thrombin directly",
        "is_correct": false
      },
      {
        "id": "pharm-sba-051-c",
        "text": "Warfarin binds Antithrombin III; Apixaban activates protein C",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-052",
    "stem": "Why can administration of Warfarin without initial heparin bridging paradoxically trigger a transient pro-thrombotic state and skin necrosis?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "Protein C (anticoagulant) has a short half-life (~6 hours) and falls faster than prothrombin (t1/2 ~60 hours), creating a transient hypercoagulable state.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-052-a",
        "text": "Rapid early depletion of Protein C and Protein S (which have much shorter half-lives than Factors II, IX, X)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-052-b",
        "text": "Direct cytotoxic damage to cutaneous capillary endothelial cells",
        "is_correct": false
      },
      {
        "id": "pharm-sba-052-e",
        "text": "Profound hypercalcemia inducing generalized intravascular clotting",
        "is_correct": false
      },
      {
        "id": "pharm-sba-052-d",
        "text": "Sudden release of tissue factor from damaged keratinocytes",
        "is_correct": false
      },
      {
        "id": "pharm-sba-052-c",
        "text": "Immediate massive activation of platelet aggregation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-053",
    "stem": "Why do poor metabolizers of Cytochrome P450 2C19 (CYP2C19) or patients taking Omeprazole have reduced antiplatelet efficacy with Clopidogrel?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "Clopidogrel is a prodrug bioactivated by CYP2C19; CYP2C19 loss-of-function alleles or PPI inhibition (omeprazole) impair active metabolite formation.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-053-d",
        "text": "CYP2C19 inhibits platelet ADP P2Y12 receptors directly",
        "is_correct": false
      },
      {
        "id": "pharm-sba-053-a",
        "text": "Clopidogrel is an inactive prodrug requiring two-step hepatic CYP2C19 oxidation to generate its active thiol platelet-inhibiting metabolite",
        "is_correct": true
      },
      {
        "id": "pharm-sba-053-b",
        "text": "CYP2C19 directly degrades active clopidogrel into toxic compounds",
        "is_correct": false
      },
      {
        "id": "pharm-sba-053-e",
        "text": "Clopidogrel requires gastric acid for intestinal activation",
        "is_correct": false
      },
      {
        "id": "pharm-sba-053-c",
        "text": "Omeprazole binds clopidogrel in the stomach, preventing all absorption",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-054",
    "stem": "What is the precise biochemical mechanism of tissue plasminogen activator (tPA, Alteplase) in the emergency management of ischemic stroke and STEMI?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Cardiovascular Drugs",
    "programme": "both",
    "explanation": "Alteplase is a recombinant tPA that selectively activates fibrin-bound plasminogen into plasmin, enzymatic digestor of the fibrin mesh.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-054-e",
        "text": "Competitively inhibits vitamin K-dependent carboxylation",
        "is_correct": false
      },
      {
        "id": "pharm-sba-054-d",
        "text": "Directly cleaves the glycoprotein IIb/IIIa receptor complex",
        "is_correct": false
      },
      {
        "id": "pharm-sba-054-c",
        "text": "Irreversibly acetylates platelet Cyclooxygenase-1",
        "is_correct": false
      },
      {
        "id": "pharm-sba-054-b",
        "text": "Directly activates Antithrombin III to inhibit Thrombin and Factor Xa",
        "is_correct": false
      },
      {
        "id": "pharm-sba-054-a",
        "text": "Binds to fibrin in a thrombus and converts trapped Plasminogen into active Plasmin, which degrades the fibrin clot matrix",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-055",
    "stem": "What is the bactericidal target of beta-lactam antibiotics (penicillins, cephalosporins, carbapenems)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Beta-lactams are structural analogs of D-Ala-D-Ala, acylating active-site serines of transpeptidases (PBPs), causing cell wall lysis.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-055-e",
        "text": "RNA polymerase inhibiting mRNA transcription",
        "is_correct": false
      },
      {
        "id": "pharm-sba-055-d",
        "text": "Dihydropteroate synthase inhibiting folic acid synthesis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-055-c",
        "text": "DNA gyrase (topoisomerase II) preventing DNA replication",
        "is_correct": false
      },
      {
        "id": "pharm-sba-055-b",
        "text": "30S ribosomal subunit inhibiting protein translation",
        "is_correct": false
      },
      {
        "id": "pharm-sba-055-a",
        "text": "Penicillin-Binding Proteins (transpeptidases) that catalyze cross-linking of peptidoglycan strands in the bacterial cell wall",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-056",
    "stem": "Why is Clavulanic Acid or Tazobactam combined with Amoxicillin or Piperacillin?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Clavulanate, sulbactam, and tazobactam inactivate class A beta-lactamases, restoring penicillin antimicrobial spectrum against resistant strains.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-056-c",
        "text": "They increase renal tubular reabsorption of penicillins",
        "is_correct": false
      },
      {
        "id": "pharm-sba-056-b",
        "text": "They stimulate bacterial autolysins directly",
        "is_correct": false
      },
      {
        "id": "pharm-sba-056-a",
        "text": "They are suicide inhibitors of bacterial beta-lactamase enzymes, protecting the partner penicillin from enzymatic degradation",
        "is_correct": true
      },
      {
        "id": "pharm-sba-056-e",
        "text": "They facilitate penetration across the intact blood-brain barrier",
        "is_correct": false
      },
      {
        "id": "pharm-sba-056-d",
        "text": "They prevent fungal superinfections in the gut",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-057",
    "stem": "What is the genetic and molecular mechanism conferring Methicillin resistance in Methicillin-Resistant Staphylococcus aureus (MRSA)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "mecA encodes PBP2a, which has very low affinity for beta-lactams; MRSA is intrinsically resistant to all penicillins and cephalosporins (except ceftaroline).",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-057-d",
        "text": "Mutation in DNA gyrase conferring fluoroquinolone resistance",
        "is_correct": false
      },
      {
        "id": "pharm-sba-057-e",
        "text": "Thickened capsule preventing antibiotic entry",
        "is_correct": false
      },
      {
        "id": "pharm-sba-057-a",
        "text": "Acquisition of the mecA gene encoding an altered Penicillin-Binding Protein (PBP2a) with low binding affinity for all beta-lactams",
        "is_correct": true
      },
      {
        "id": "pharm-sba-057-b",
        "text": "Hyperproduction of TEM-1 plasmid beta-lactamase enzymes",
        "is_correct": false
      },
      {
        "id": "pharm-sba-057-c",
        "text": "Efflux pump over-expression pumping penicillins out of the cell",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-058",
    "stem": "How does Vancomycin inhibit cell wall synthesis, and what infusion-related adverse reaction occurs with rapid intravenous administration?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Vancomycin binds D-Ala-D-Ala, sterically blocking transglycosylases; rapid IV infusion releases histamine causing Red Man syndrome (slow infusion to >1h).",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-058-d",
        "text": "Inhibits topoisomerase IV; spontaneous Achilles tendon rupture",
        "is_correct": false
      },
      {
        "id": "pharm-sba-058-a",
        "text": "Binds directly to the D-Ala-D-Ala terminus of peptidoglycan precursors; 'Red Man Syndrome' (histamine-mediated flushing and pruritus)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-058-e",
        "text": "Inhibits fungal ergosterol synthesis; severe hypokalemia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-058-b",
        "text": "Inhibits transpeptidases directly; severe aplastic anemia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-058-c",
        "text": "Inhibits 50S ribosomes; irreversible gray baby syndrome",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-059",
    "stem": "What are the two major dose-limiting toxicities associated with high trough concentrations of Gentamicin?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Aminoglycosides accumulate in renal proximal tubules (nephrotoxicity, usually reversible) and endolymph (ototoxicity, frequently irreversible).",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-059-d",
        "text": "Severe peripheral neuropathy and pancreatitis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-059-b",
        "text": "Hepatotoxicity and severe pulmonary fibrosis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-059-a",
        "text": "Nephrotoxicity (acute tubular necrosis) and Ototoxicity (irreversible auditory hair cell damage and vestibular dysfunction)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-059-c",
        "text": "Bone marrow aplasia and hemolytic anemia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-059-e",
        "text": "Hypothyroidism and blue-grey skin pigmentation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-060",
    "stem": "Which ribosomal subunit do Macrolides (e.g. Azithromycin, Erythromycin) bind to, and why does Erythromycin stimulate gastrointestinal motility?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Macrolides bind 50S rRNA blocking translocation; erythromycin binds motilin receptors, stimulating migrating motor complexes (used as a prokinetic).",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-060-a",
        "text": "Binds to the 50S ribosomal subunit inhibiting protein synthesis; acts as a direct agonist of gastrointestinal Motilin receptors",
        "is_correct": true
      },
      {
        "id": "pharm-sba-060-d",
        "text": "Binds DNA topoisomerase; inhibits gastric gastrin release",
        "is_correct": false
      },
      {
        "id": "pharm-sba-060-b",
        "text": "Binds 30S ribosomal subunit; stimulates serotonin 5-HT3 receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-060-c",
        "text": "Binds bacterial RNA polymerase; blocks muscarinic M3 receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-060-e",
        "text": "Binds peptidoglycan monomers; stimulates secretin receptors",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-061",
    "stem": "What bacterial enzymes do Fluoroquinolones (e.g. Ciprofloxacin, Levofloxacin) inhibit, and what FDA black box musculoskeletal warning do they carry?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Fluoroquinolones inhibit bacterial topoisomerases; can induce chondrotoxicity and tendon rupture (Achilles), especially in elderly and patients on steroids.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-061-a",
        "text": "Inhibit bacterial DNA Gyrase (topoisomerase II) and Topoisomerase IV; risk of Tendinitis and spontaneous Achilles Tendon Rupture",
        "is_correct": true
      },
      {
        "id": "pharm-sba-061-e",
        "text": "Inhibit RNA polymerase; risk of avascular femoral head necrosis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-061-b",
        "text": "Inhibit 50S peptidyl transferase; risk of severe rhabdomyolysis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-061-d",
        "text": "Inhibit bacterial cell wall transpeptidase; risk of acute gout",
        "is_correct": false
      },
      {
        "id": "pharm-sba-061-c",
        "text": "Inhibit bacterial dihydrofolate reductase; risk of osteonecrosis of the jaw",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-062",
    "stem": "Why are Tetracyclines (e.g. Doxycycline) contraindicated in pregnant women and children under 8 years of age?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Tetracyclines bind divalent cations (Ca2+), depositing in growing bones and developing dentition, producing permanent discoloration and enamel hypoplasia.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-062-b",
        "text": "They cause acute maternal and fetal liver rupture",
        "is_correct": false
      },
      {
        "id": "pharm-sba-062-a",
        "text": "They chelate calcium and deposit in developing bones and teeth, causing permanent tooth discoloration (yellow-brown enamel dysplasia) and stunted bone growth",
        "is_correct": true
      },
      {
        "id": "pharm-sba-062-c",
        "text": "They trigger severe congenital sensorineural deafness",
        "is_correct": false
      },
      {
        "id": "pharm-sba-062-d",
        "text": "They induce neonatal aplastic anemia in 100% of cases",
        "is_correct": false
      },
      {
        "id": "pharm-sba-062-e",
        "text": "They cause premature closure of the fetal ductus arteriosus",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-063",
    "stem": "Why do neonates and premature infants develop fatal 'Gray Baby Syndrome' (cyanosis, ashen-grey skin, flaccidity, shock) when given Chloramphenicol?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Neonates have immature glucuronidation (UGT2B7) and low GFR, accumulating chloramphenicol, which poisons mitochondrial ribosomes causing shock.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-063-e",
        "text": "Congenital absence of plasma pseudocholinesterase",
        "is_correct": false
      },
      {
        "id": "pharm-sba-063-c",
        "text": "Deficiency of glucose-6-phosphate dehydrogenase in erythrocytes",
        "is_correct": false
      },
      {
        "id": "pharm-sba-063-b",
        "text": "Immediate direct destruction of neonatal bone marrow stem cells",
        "is_correct": false
      },
      {
        "id": "pharm-sba-063-d",
        "text": "Inability of neonatal ribosomes to synthesize albumin",
        "is_correct": false
      },
      {
        "id": "pharm-sba-063-a",
        "text": "Deficiency of hepatic UDP-glucuronosyltransferase enzyme and immature renal clearance, leading to massive toxic drug accumulation",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-064",
    "stem": "What is the antimicrobial spectrum of Metronidazole, and what unpleasant reaction occurs when ingested with alcohol?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Metronidazole is reduced to toxic free radicals in anaerobes/protozoa; inhibits aldehyde dehydrogenase, causing a disulfiram ethanol reaction.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-064-a",
        "text": "Active against obligate Anaerobes and Protozoa (Entamoeba, Giardia, Trichomonas); Disulfiram-like reaction (nausea, flushing, tachycardia) with ethanol",
        "is_correct": true
      },
      {
        "id": "pharm-sba-064-c",
        "text": "Active against all respiratory viral pathogens; acute renal failure",
        "is_correct": false
      },
      {
        "id": "pharm-sba-064-e",
        "text": "Active against systemic fungi; severe hypoglycaemia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-064-b",
        "text": "Active exclusively against aerobic Gram-positive bacilli; severe hyperthermia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-064-d",
        "text": "Active against atypical mycobacteria; severe agranulocytosis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-065",
    "stem": "What is the pharmacological rationale for combining Trimethoprim and Sulfamethoxazole (Co-trimoxazole)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Sulfamethoxazole blocks dihydropteroate synthase; trimethoprim blocks dihydrofolate reductase; sequential inhibition yields bactericidal synergy.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-065-d",
        "text": "Sulfamethoxazole activates Trimethoprim in the bloodstream",
        "is_correct": false
      },
      {
        "id": "pharm-sba-065-a",
        "text": "Synergistic sequential blockade of bacterial folate synthesis: Sulfamethoxazole inhibits dihydropteroate synthase; Trimethoprim inhibits dihydrofolate reductase",
        "is_correct": true
      },
      {
        "id": "pharm-sba-065-b",
        "text": "Sulfamethoxazole opens cell wall pores to let Trimethoprim enter",
        "is_correct": false
      },
      {
        "id": "pharm-sba-065-e",
        "text": "Trimethoprim protects Sulfamethoxazole from beta-lactamase degradation",
        "is_correct": false
      },
      {
        "id": "pharm-sba-065-c",
        "text": "Trimethoprim prevents renal excretion of Sulfamethoxazole",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-066",
    "stem": "Which first-line anti-TB drug is correctly matched with its mechanism and characteristic adverse effect?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Isoniazid inhibits mycolic acid synthesis and depletes pyridoxine (causing neuropathy); Rifampicin colors fluids orange; Ethambutol causes optic neuritis.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-066-c",
        "text": "Ethambutol (inhibits RNA polymerase) -> Orange-red discoloration of body fluids",
        "is_correct": false
      },
      {
        "id": "pharm-sba-066-a",
        "text": "Isoniazid (inhibits mycolic acid synthesis) -> Peripheral Neuropathy (prevented by Pyridoxine / Vitamin B6 co-administration)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-066-b",
        "text": "Rifampicin (inhibits arabinosyl transferase) -> Severe optic neuritis and red-green color blindness",
        "is_correct": false
      },
      {
        "id": "pharm-sba-066-e",
        "text": "Streptomycin (inhibits cell wall) -> Gout and hyperuricaemia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-066-d",
        "text": "Pyrazinamide (inhibits folate synthesis) -> Severe ototoxicity and vestibular ataxia",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-067",
    "stem": "A patient on quadruple therapy for pulmonary tuberculosis develops decreased visual acuity and loss of red-green color discrimination. Which drug is responsible?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Ethambutol causes retrobulbar optic neuritis; patients must be educated to report decreased visual acuity or loss of red-green discrimination immediately.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-067-d",
        "text": "Pyrazinamide",
        "is_correct": false
      },
      {
        "id": "pharm-sba-067-c",
        "text": "Rifampicin",
        "is_correct": false
      },
      {
        "id": "pharm-sba-067-b",
        "text": "Isoniazid",
        "is_correct": false
      },
      {
        "id": "pharm-sba-067-a",
        "text": "Ethambutol (dose-dependent retrobulbar optic neuritis)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-067-e",
        "text": "Pyridoxine",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-068",
    "stem": "What is the cellular target of Amphotericin B compared to Azole antifungals (e.g. Fluconazole)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Amphotericin B binds ergosterol directly, opening lethal ion pores; Azoles inhibit CYP51 (14-alpha-demethylase), depleting membrane ergosterol.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-068-e",
        "text": "Amphotericin B binds chitin; Azoles destroy fungal ribosomes",
        "is_correct": false
      },
      {
        "id": "pharm-sba-068-d",
        "text": "Amphotericin B inhibits squalene epoxidase; Azoles form cell wall pores",
        "is_correct": false
      },
      {
        "id": "pharm-sba-068-c",
        "text": "Amphotericin B inhibits fungal DNA replication; Azoles inhibit fungal microtubules",
        "is_correct": false
      },
      {
        "id": "pharm-sba-068-b",
        "text": "Amphotericin B inhibits 14-alpha-demethylase; Azoles bind beta-glucan synthase",
        "is_correct": false
      },
      {
        "id": "pharm-sba-068-a",
        "text": "Amphotericin B binds to fungal Ergosterol, forming membrane pores and ion leakage; Azoles inhibit 14-alpha-demethylase, blocking ergosterol synthesis",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-069",
    "stem": "What is the fungal cell wall target of the Echinocandin class of antifungals (Caspofungin, Anidulafungin)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Echinocandins inhibit beta-(1,3)-D-glucan synthesis, unique to fungal cell walls, providing excellent activity against Candida and Aspergillus with low toxicity.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-069-d",
        "text": "Inhibition of fungal squalene epoxidase in the cytoplasm",
        "is_correct": false
      },
      {
        "id": "pharm-sba-069-e",
        "text": "Blockade of fungal RNA polymerase transcription",
        "is_correct": false
      },
      {
        "id": "pharm-sba-069-c",
        "text": "Direct binding to fungal ergosterol in the plasma membrane",
        "is_correct": false
      },
      {
        "id": "pharm-sba-069-b",
        "text": "Inhibition of fungal Cytochrome P450 enzymes in the mitochondria",
        "is_correct": false
      },
      {
        "id": "pharm-sba-069-a",
        "text": "Inhibition of Beta-(1,3)-D-glucan synthase, disrupting fungal cell wall integrity and causing osmotic lysis",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-070",
    "stem": "Why does Acyclovir selectively kill Herpes Simplex Virus (HSV) and Varicella Zoster Virus (VZV) infected cells while sparing healthy host cells?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Viral thymidine kinase monophosphorylates acyclovir ~200 times faster than host enzymes; cellular kinases complete phosphorylation to active acyclovir-triphosphate.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-070-e",
        "text": "Host cells have zero DNA polymerase enzymes",
        "is_correct": false
      },
      {
        "id": "pharm-sba-070-c",
        "text": "Healthy host cells possess enzymes that rapidly degrade acyclovir into water",
        "is_correct": false
      },
      {
        "id": "pharm-sba-070-a",
        "text": "It requires initial monophosphorylation by viral-specific Thymidine Kinase, which is absent in uninfected human host cells",
        "is_correct": true
      },
      {
        "id": "pharm-sba-070-d",
        "text": "It binds selectively to human cell membranes and repels viral entry",
        "is_correct": false
      },
      {
        "id": "pharm-sba-070-b",
        "text": "It can only penetrate into viral capsids through specific viral pores",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-071",
    "stem": "Which antiretroviral medication belongs to the Integrase Strand Transfer Inhibitor (INSTI) class, recommended as a core component of first-line ART?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "Dolutegravir inhibits HIV integrase, preventing proviral DNA integration into the host genome; high genetic barrier to resistance and rapid viral suppression.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-071-b",
        "text": "Tenofovir and Emtricitabine (Nucleoside Reverse Transcriptase Inhibitors / NRTIs)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-071-a",
        "text": "Dolutegravir (or Bictegravir, Raltegravir)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-071-c",
        "text": "Efavirenz and Nevirapine (Non-Nucleoside Reverse Transcriptase Inhibitors / NNRTIs)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-071-e",
        "text": "Maraviroc (CCR5 co-receptor antagonist)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-071-d",
        "text": "Darunavir and Atazanavir (Protease Inhibitors / PIs)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-072",
    "stem": "What is the pharmacological rationale for combining an Artemisinin derivative (e.g. Artemether) with a long-acting partner antimalarial (e.g. Lumefantrine)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Antimicrobials",
    "programme": "both",
    "explanation": "ACT pairs a fast-acting artemisinin (rapid reduction in parasite load) with a slowly eliminated partner to mop up remaining parasites and prevent resistance.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-072-a",
        "text": "The artemisinin derivative rapidly clears the vast majority of parasite biomass, while the long-acting partner eradicates residual parasites and prevents resistance",
        "is_correct": true
      },
      {
        "id": "pharm-sba-072-b",
        "text": "Artemether protects lumefantrine from renal elimination",
        "is_correct": false
      },
      {
        "id": "pharm-sba-072-d",
        "text": "Artemether is exclusively active against liver hypnozoites",
        "is_correct": false
      },
      {
        "id": "pharm-sba-072-c",
        "text": "Lumefantrine is an inactive prodrug that requires artemether to function",
        "is_correct": false
      },
      {
        "id": "pharm-sba-072-e",
        "text": "Lumefantrine acts as an antiemetic to prevent vomiting of artemether",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-073",
    "stem": "How do Benzodiazepines (e.g. Diazepam, Lorazepam) exert their sedative, anxiolytic, and anticonvulsant effects at the GABA-A receptor?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "Benzodiazepines increase chloride channel opening frequency; Barbiturates increase opening duration (more toxic in overdose, no ceiling effect).",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-073-a",
        "text": "Allosteric modulators that increase the FREQUENCY of chloride channel opening in the presence of GABA, enhancing hyperpolarization",
        "is_correct": true
      },
      {
        "id": "pharm-sba-073-b",
        "text": "Direct agonists that open the chloride channel in the complete absence of GABA",
        "is_correct": false
      },
      {
        "id": "pharm-sba-073-c",
        "text": "Allosteric modulators that increase the DURATION of channel opening (action of Barbiturates)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-073-d",
        "text": "Competitive antagonists of the excitatory NMDA glutamate receptor",
        "is_correct": false
      },
      {
        "id": "pharm-sba-073-e",
        "text": "Direct inhibitors of voltage-gated sodium channels",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-074",
    "stem": "What is the specific competitive antagonist used to reverse central nervous system depression in acute Benzodiazepine overdose?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "Flumazenil reverses benzodiazepine sedation; must be used cautiously in dependent patients to avoid precipitating acute withdrawal seizures.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-074-a",
        "text": "Flumazenil (competitive antagonist at the benzodiazepine binding site on GABA-A receptors)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-074-b",
        "text": "Naloxone (opioid receptor antagonist)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-074-c",
        "text": "N-acetylcysteine (glutathione precursor)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-074-e",
        "text": "Physostigmine (acetylcholinesterase inhibitor)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-074-d",
        "text": "Atropine sulfate (muscarinic antagonist)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-075",
    "stem": "What is the mechanism of action of SSRIs (e.g. Sertraline, Fluoxetine), and what is the typical therapeutic lag before clinical antidepressant onset?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "SSRIs block SERT, increasing synaptic 5-HT; therapeutic benefit takes 2-4 weeks due to desensitization of 5-HT1A autoreceptors and BDNF expression.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-075-d",
        "text": "Selective inhibition of dopamine reuptake transporter (DAT); immediate onset",
        "is_correct": false
      },
      {
        "id": "pharm-sba-075-e",
        "text": "Blockade of vesicular monoamine transporter-2 (VMAT-2)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-075-a",
        "text": "Selectively inhibit the presynaptic Serotonin Transporter (SERT); therapeutic response typically requires 2 to 4 weeks due to downstream receptor adaptation",
        "is_correct": true
      },
      {
        "id": "pharm-sba-075-b",
        "text": "Direct agonist at postsynaptic 5-HT1A receptors; instantaneous onset within 30 minutes",
        "is_correct": false
      },
      {
        "id": "pharm-sba-075-c",
        "text": "Irreversible inhibition of Monoamine Oxidase-A; requires 6 months for onset",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-076",
    "stem": "A patient taking Sertraline and Tramadol presents with agitation, hyperthermia, profuse diaphoresis, hyperreflexia, and inducible ocular and ankle clonus.",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "Serotonin toxicity is characterized by neuromuscular excitation (clonus, hyperreflexia), autonomic instability, and altered mental status (Hunter criteria).",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-076-c",
        "text": "Anticholinergic toxicity treated with Physostigmine",
        "is_correct": false
      },
      {
        "id": "pharm-sba-076-d",
        "text": "Malignant Hyperthermia treated with Dantrolene alone",
        "is_correct": false
      },
      {
        "id": "pharm-sba-076-e",
        "text": "Opioid withdrawal treated with Methadone",
        "is_correct": false
      },
      {
        "id": "pharm-sba-076-b",
        "text": "Neuroleptic Malignant Syndrome treated with Bromocriptine and Dantrolene",
        "is_correct": false
      },
      {
        "id": "pharm-sba-076-a",
        "text": "Serotonin Syndrome (5-HT toxicity); discontinue all serotonergic agents, supportive care, and administer Cyproheptadine (5-HT2A antagonist)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-077",
    "stem": "In acute overdose of Tricyclic Antidepressants (e.g. Amitriptyline), what is the primary cause of fatal cardiac arrhythmias and widened QRS complexes on ECG?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "TCAs block cardiac sodium channels, slowing phase 0 depolarization and widening QRS (>100 ms); IV Sodium Bicarbonate overcomes blockade by raising pH and Na+.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-077-e",
        "text": "Stimulation of potassium efflux channels treated with amiodarone",
        "is_correct": false
      },
      {
        "id": "pharm-sba-077-d",
        "text": "Blockade of muscarinic receptors treated with high-dose atropine",
        "is_correct": false
      },
      {
        "id": "pharm-sba-077-b",
        "text": "Blockade of L-type calcium channels treated with calcium chloride",
        "is_correct": false
      },
      {
        "id": "pharm-sba-077-c",
        "text": "Massive direct stimulation of cardiac beta-1 receptors treated with propranolol",
        "is_correct": false
      },
      {
        "id": "pharm-sba-077-a",
        "text": "Blockade of cardiac fast voltage-gated Sodium (Nav1.5) channels; treated with intravenous Sodium Bicarbonate (8.4%)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-078",
    "stem": "What pharmacological receptor mechanism distinguishes Second-Generation (Atypical) Antipsychotics (e.g. Olanzapine, Risperidone) from First-Generation agents (Haloperidol)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "Atypical antipsychotics combine 5-HT2A and D2 antagonism, reducing extrapyramidal side effects and hyperprolactinemia compared to typical high-potency D2 blockers.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-078-a",
        "text": "Combined potent Serotonin 5-HT2A receptor antagonism and moderate D2 receptor antagonism, offering lower risk of Extrapyramidal Side Effects (EPS)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-078-b",
        "text": "Pure D2 receptor agonism with zero effect on serotonin receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-078-c",
        "text": "Direct permanent destruction of striatal dopaminergic tracts",
        "is_correct": false
      },
      {
        "id": "pharm-sba-078-d",
        "text": "Exclusive inhibition of monoamine oxidase-B",
        "is_correct": false
      },
      {
        "id": "pharm-sba-078-e",
        "text": "Pure GABA-A receptor allosteric agonism",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-079",
    "stem": "A 22-year-old male develops painful involuntary spasm of the neck muscles (torticollis) and oculogyric crisis 24 hours after receiving intramuscular Haloperidol. What is the treatment?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "Acute dystonic reactions result from sudden dopamine D2 blockade tipping striatal dopamine/ACh balance; anticholinergics (procyclidine) rapidly restore balance.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-079-d",
        "text": "Administer intravenous sodium bicarbonate",
        "is_correct": false
      },
      {
        "id": "pharm-sba-079-b",
        "text": "Increase the haloperidol dose to suppress the spasm",
        "is_correct": false
      },
      {
        "id": "pharm-sba-079-e",
        "text": "Immediate electroconvulsive therapy",
        "is_correct": false
      },
      {
        "id": "pharm-sba-079-a",
        "text": "Intravenous or intramuscular Anticholinergic agent (e.g., Benztropine or Procyclidine)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-079-c",
        "text": "Administer high-dose oral bromocriptine",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-080",
    "stem": "A patient on high-dose Haloperidol develops severe 'lead-pipe' muscle rigidity, hyperthermia (40.2°C), autonomic instability, altered consciousness, and elevated CK (15,000 U/L). What is the treatment?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "NMS is a life-threatening idiosyncratic reaction to dopamine D2 blockade featuring lead-pipe rigidity, hyperthermia, and rhabdomyolysis; treated with bromocriptine/dantrolene.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-080-c",
        "text": "Administer oral cyproheptadine for serotonin excess",
        "is_correct": false
      },
      {
        "id": "pharm-sba-080-b",
        "text": "Administer high-dose intramuscular haloperidol to regain control",
        "is_correct": false
      },
      {
        "id": "pharm-sba-080-d",
        "text": "Oral fluoxetine and paracetamol",
        "is_correct": false
      },
      {
        "id": "pharm-sba-080-e",
        "text": "Wait 7 days for spontaneous resolution",
        "is_correct": false
      },
      {
        "id": "pharm-sba-080-a",
        "text": "Stop antipsychotic immediately; supportive cooling, IV hydration, and Dopamine agonist (Bromocriptine) or Dantrolene",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-081",
    "stem": "What unique therapeutic role does Clozapine hold in schizophrenia, and which life-threatening hematological adverse effect mandates mandatory regular blood count monitoring?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "Clozapine is the only proven agent for treatment-resistant schizophrenia, but carries ~1% risk of agranulocytosis, requiring strict ANC registry monitoring.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-081-d",
        "text": "Treatment for unipolar depression; severe polycythemia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-081-e",
        "text": "Treatment for insomnia; severe hemolytic jaundice",
        "is_correct": false
      },
      {
        "id": "pharm-sba-081-c",
        "text": "Therapy for acute bipolar mania; irreversible thrombocytosis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-081-b",
        "text": "First-line for simple mild anxiety; severe aplastic anemia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-081-a",
        "text": "Gold-standard for Treatment-Resistant Schizophrenia; Agranulocytosis (absolute neutrophil count monitoring required)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-082",
    "stem": "A bipolar patient taking Lithium is prescribed a thiazide diuretic for hypertension and develops coarse tremor, ataxia, confusion, and vomiting. What is the mechanism of toxicity?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "Lithium is handled like sodium by the proximal tubule; volume depletion or thiazides/NSAIDs/ACEi enhance proximal reabsorption, precipitating lithium toxicity.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-082-d",
        "text": "Thiazides inhibit blood-brain barrier transport of lithium",
        "is_correct": false
      },
      {
        "id": "pharm-sba-082-b",
        "text": "Thiazides directly displace lithium from albumin binding sites",
        "is_correct": false
      },
      {
        "id": "pharm-sba-082-a",
        "text": "Thiazide-induced sodium depletion in the distal tubule stimulates compensatory proximal tubular reabsorption of both Sodium and Lithium, causing toxic lithium accumulation",
        "is_correct": true
      },
      {
        "id": "pharm-sba-082-c",
        "text": "Thiazides stimulate hepatic CYP3A4 metabolism of lithium",
        "is_correct": false
      },
      {
        "id": "pharm-sba-082-e",
        "text": "Lithium directly binds and destroys thiazide molecules",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-083",
    "stem": "What is the primary cellular mechanism of action of classic antiepileptic drugs such as Carbamazepine and Lamotrigine?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "Carbamazepine and lamotrigine bind preferentially to inactivated Na+ channels, prolonging recovery and selectively blunting rapid repetitive epileptic firing.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-083-d",
        "text": "Inhibition of glutamate storage in synaptic vesicles",
        "is_correct": false
      },
      {
        "id": "pharm-sba-083-c",
        "text": "Direct activation of central GABA-B receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-083-e",
        "text": "Direct opening of potassium leak channels",
        "is_correct": false
      },
      {
        "id": "pharm-sba-083-b",
        "text": "Blockade of T-type calcium channels in the thalamus",
        "is_correct": false
      },
      {
        "id": "pharm-sba-083-a",
        "text": "Use-dependent prolongation of the inactivated state of voltage-gated Sodium (Nav) channels, suppressing high-frequency sustained repetitive firing",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-084",
    "stem": "What major congenital structural malformation is associated with maternal exposure to Sodium Valproate during the first trimester of pregnancy?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "Valproate is strongly teratogenic, causing a 10-fold increase in neural tube defects and neurodevelopmental delay; contraindicated in women of childbearing potential.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-084-a",
        "text": "Neural Tube Defects (Spina Bifida, incidence up to 10%) and Valproate fetal syndrome with cognitive impairment",
        "is_correct": true
      },
      {
        "id": "pharm-sba-084-b",
        "text": "Transposition of the great arteries exclusively",
        "is_correct": false
      },
      {
        "id": "pharm-sba-084-d",
        "text": "Agenesis of the corpus callosum with limb reduction",
        "is_correct": false
      },
      {
        "id": "pharm-sba-084-e",
        "text": "Cystic fibrosis in all exposed fetuses",
        "is_correct": false
      },
      {
        "id": "pharm-sba-084-c",
        "text": "Congenital cataracts and sensorineural deafness",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-085",
    "stem": "At which G-protein coupled receptor do full opioid agonists (Morphine, Fentanyl) act to produce analgesia, respiratory depression, and euphoria?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "Mu opioid receptor activation inhibits adenylyl cyclase (Gi), closes presynaptic Ca2+ channels (reducing glutamate/Substance P release), and hyperpolarizes postsynaptic neurons via K+ efflux.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-085-b",
        "text": "Kappa (kappa) opioid receptors exclusively",
        "is_correct": false
      },
      {
        "id": "pharm-sba-085-d",
        "text": "NMDA glutamate receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-085-e",
        "text": "Alpha-2 adrenergic receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-085-a",
        "text": "Mu (micro) Opioid Receptors (coupled to Gi/Go, closing presynaptic voltage-gated Ca2+ channels and opening postsynaptic K+ channels)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-085-c",
        "text": "Delta (delta) opioid receptors exclusively",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-086",
    "stem": "A patient presents comatose with pinpoint pupils (miosis) and a respiratory rate of 4 breaths/minute following an overdose. What is the specific competitive antidote?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "The classic opioid toxidrome is coma, respiratory depression, and pinpoint pupils; Naloxone rapidly reverses respiratory arrest.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-086-e",
        "text": "Intravenous Sodium Bicarbonate (sodium channel regenerator)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-086-a",
        "text": "Intravenous Naloxone (pure competitive antagonist at mu, kappa, and delta opioid receptors)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-086-d",
        "text": "Oral N-acetylcysteine (glutathione donor)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-086-c",
        "text": "Intramuscular Neostigmine (anticholinesterase)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-086-b",
        "text": "Intravenous Flumazenil (benzodiazepine antagonist)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-087",
    "stem": "Why is Levodopa (L-DOPA) always co-administered with a peripheral Dopa-Decarboxylase Inhibitor such as Carbidopa or Benserazide?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "Levodopa crosses the BBB via amino acid transporters; carbidopa blocks peripheral conversion, increasing brain bioavailability from 1% to 10% and mitigating nausea/tachycardia.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-087-d",
        "text": "Carbidopa prevents monoamine oxidase-B from destroying dopamine in the brain",
        "is_correct": false
      },
      {
        "id": "pharm-sba-087-b",
        "text": "Carbidopa accelerates hepatic clearance of dopamine metabolites",
        "is_correct": false
      },
      {
        "id": "pharm-sba-087-a",
        "text": "Carbidopa does not cross the blood-brain barrier, preventing peripheral conversion of L-DOPA to Dopamine, which minimizes nausea and maximizes CNS bioavailability",
        "is_correct": true
      },
      {
        "id": "pharm-sba-087-e",
        "text": "Carbidopa acts as a powerful central dopaminergic receptor agonist",
        "is_correct": false
      },
      {
        "id": "pharm-sba-087-c",
        "text": "Carbidopa directly binds and stimulates striatal dopamine D2 receptors",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-088",
    "stem": "What is the pharmacological role of Catechol-O-Methyltransferase (COMT) inhibitors (e.g. Entacapone) in managing Parkinson's disease with motor fluctuations?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "Entacapone prevents peripheral conversion of levodopa to 3-OMD, prolonging on-time and decreasing wearing-off fluctuations in advanced Parkinson's.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-088-a",
        "text": "Inhibits peripheral COMT breakdown of Levodopa to 3-O-methyldopa, extending Levodopa plasma half-life and smoothing motor 'wearing-off' fluctuations",
        "is_correct": true
      },
      {
        "id": "pharm-sba-088-b",
        "text": "Directly stimulates central dopamine D2 receptors in the caudate",
        "is_correct": false
      },
      {
        "id": "pharm-sba-088-c",
        "text": "Inhibits central acetylcholinesterase enzymes in the cortex",
        "is_correct": false
      },
      {
        "id": "pharm-sba-088-d",
        "text": "Blocks central NMDA glutamate receptors to prevent excitotoxicity",
        "is_correct": false
      },
      {
        "id": "pharm-sba-088-e",
        "text": "Reverses striatal Lewy body alpha-synuclein aggregation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-089",
    "stem": "What is the precise electrophysiological mechanism of action of Local Anaesthetics (e.g. Lidocaine, Bupivacaine)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "Local anesthetics enter axons in uncharged form, become protonated, and plug open/inactivated voltage-gated Na+ channels from the intracellular side.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-089-a",
        "text": "Block voltage-gated Sodium (Nav) channels from the inside of the axonal membrane, preventing action potential generation and conduction in sensory nerve fibers",
        "is_correct": true
      },
      {
        "id": "pharm-sba-089-b",
        "text": "Open potassium leak channels causing permanent hyperpolarization",
        "is_correct": false
      },
      {
        "id": "pharm-sba-089-d",
        "text": "Inhibit acetylcholine synthesis in sensory Schwann cells",
        "is_correct": false
      },
      {
        "id": "pharm-sba-089-e",
        "text": "Block presynaptic calcium channels exclusively in motor neurons",
        "is_correct": false
      },
      {
        "id": "pharm-sba-089-c",
        "text": "Directly destroy the myelin sheath around sensory nerve fibers",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-090",
    "stem": "In inhalation general anaesthesia, what is the definition and significance of Minimum Alveolar Concentration (MAC)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "CNS Pharmacology",
    "programme": "both",
    "explanation": "MAC is the standard measure of inhalational anesthetic potency; 1.2-1.3 MAC prevents movement in 95% of patients; lower MAC indicates higher oil:gas solubility and higher potency.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-090-a",
        "text": "The alveolar concentration of an inhaled anaesthetic at 1 atmosphere that prevents movement in 50% of patients in response to a standard surgical incision; inversely related to potency",
        "is_correct": true
      },
      {
        "id": "pharm-sba-090-d",
        "text": "The rate of hepatic metabolism of the inhaled gas per hour",
        "is_correct": false
      },
      {
        "id": "pharm-sba-090-b",
        "text": "The maximum concentration that can be safely breathed without causing cardiac arrest",
        "is_correct": false
      },
      {
        "id": "pharm-sba-090-c",
        "text": "The concentration that causes 100% complete memory loss in all patients",
        "is_correct": false
      },
      {
        "id": "pharm-sba-090-e",
        "text": "The concentration required to induce complete muscle relaxation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-091",
    "stem": "What is the fundamental enzyme target of Non-Steroidal Anti-inflammatory Drugs (NSAIDs), and what mediates their anti-inflammatory vs ulcerogenic effects?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "Constitutive COX-1 generates cytoprotective mucosal prostaglandins (PGE2, PGI2); inducible COX-2 generates inflammatory prostaglandins at sites of tissue injury.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-091-a",
        "text": "Inhibition of Cyclooxygenase (COX); anti-inflammatory effect via COX-2 inhibition; gastrointestinal ulceration and bleeding via COX-1 inhibition",
        "is_correct": true
      },
      {
        "id": "pharm-sba-091-e",
        "text": "Direct inhibition of proton pump H+/K+-ATPase",
        "is_correct": false
      },
      {
        "id": "pharm-sba-091-b",
        "text": "Inhibition of 5-Lipoxygenase; anti-inflammatory via leukotriene suppression; ulcers via thromboxane",
        "is_correct": false
      },
      {
        "id": "pharm-sba-091-d",
        "text": "Competitive blockade of histamine H2 receptors in the stomach",
        "is_correct": false
      },
      {
        "id": "pharm-sba-091-c",
        "text": "Inhibition of Phospholipase A2; anti-inflammatory via arachidonate depletion",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-092",
    "stem": "Why do Selective COX-2 Inhibitors (e.g. Celecoxib, Etoricoxib) carry an increased risk of myocardial infarction and thrombotic cardiovascular events?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "COX-2 in endothelium synthesizes anti-thrombotic PGI2; platelet COX-1 synthesizes pro-thrombotic TXA2; selective COX-2 inhibition tips balance toward thrombosis.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-092-a",
        "text": "They selectively inhibit endothelial prostacyclin (PGI2, a vasodilator and platelet inhibitor) while leaving platelet thromboxane A2 (TXA2, a vasoconstrictor and aggregator) unopposed",
        "is_correct": true
      },
      {
        "id": "pharm-sba-092-b",
        "text": "They directly bind and rupture coronary atherosclerotic plaques",
        "is_correct": false
      },
      {
        "id": "pharm-sba-092-e",
        "text": "They cause severe coronary vasospasm through muscarinic activation",
        "is_correct": false
      },
      {
        "id": "pharm-sba-092-c",
        "text": "They stimulate massive systemic release of tissue plasminogen activator inhibitor",
        "is_correct": false
      },
      {
        "id": "pharm-sba-092-d",
        "text": "They permanently inactivate all nitric oxide synthases in the heart",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-093",
    "stem": "How does low-dose Aspirin (75-100 mg/day) exert its permanent antiplatelet effect for the lifespan of the platelet (~7-10 days)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "Platelets lack nuclei and cannot resynthesize COX-1; a single dose of aspirin irreversibly inactivates COX-1 for the remainder of the platelet's 7-10 day lifespan.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-093-c",
        "text": "Irreversible blockade of the glycoprotein IIb/IIIa receptor complex",
        "is_correct": false
      },
      {
        "id": "pharm-sba-093-e",
        "text": "Direct proteolytic degradation of plasma fibrinogen",
        "is_correct": false
      },
      {
        "id": "pharm-sba-093-a",
        "text": "Irreversible covalent acetylation of a serine residue (Ser-529) in Cyclooxygenase-1 (COX-1), permanently abolishing Thromboxane A2 synthesis in anucleate platelets",
        "is_correct": true
      },
      {
        "id": "pharm-sba-093-b",
        "text": "Reversible competitive inhibition of the ADP P2Y12 platelet receptor",
        "is_correct": false
      },
      {
        "id": "pharm-sba-093-d",
        "text": "Stimulation of prostacyclin synthesis in vascular endothelial cells",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-094",
    "stem": "What is the molecular mechanism by which Glucocorticoids (e.g. Dexamethasone, Prednisolone) exert their profound anti-inflammatory and immunosuppressive actions?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "Steroid-receptor complexes transrepress NF-kB (shutting down IL-1, IL-6, TNF) and upregulate annexin A1 (lipocortin), which inhibits Phospholipase A2.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-094-d",
        "text": "Stimulate the synthesis of arachidonic acid from membrane phospholipids",
        "is_correct": false
      },
      {
        "id": "pharm-sba-094-a",
        "text": "Bind intracellular cytoplasmic receptors, translocate to the nucleus, and transrepress pro-inflammatory transcription factors (NF-kappaB and AP-1) while inducing Lipocortin-1 (annexin A1)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-094-c",
        "text": "Inhibit voltage-gated calcium channels in T-lymphocytes",
        "is_correct": false
      },
      {
        "id": "pharm-sba-094-e",
        "text": "Permanently destroy circulating CD4+ helper T-cells within 1 hour",
        "is_correct": false
      },
      {
        "id": "pharm-sba-094-b",
        "text": "Directly bind and neutralize circulating cytokines in the bloodstream",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-095",
    "stem": "Why must systemic corticosteroid therapy taken for >3 weeks NEVER be abruptly discontinued?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "Chronic steroid therapy suppresses CRH and ACTH, causing adrenocortical atrophy; gradual tapering allows the dormant adrenal cortex time to recover endogenous cortisol synthesis.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-095-d",
        "text": "Abrupt withdrawal permanently paralyzes the gastrointestinal tract",
        "is_correct": false
      },
      {
        "id": "pharm-sba-095-e",
        "text": "Abrupt withdrawal causes spontaneous rupture of the spleen",
        "is_correct": false
      },
      {
        "id": "pharm-sba-095-a",
        "text": "Prolonged exogenous steroids suppress the Hypothalamic-Pituitary-Adrenal (HPA) axis; abrupt withdrawal precipitates life-threatening Acute Adrenal Crisis",
        "is_correct": true
      },
      {
        "id": "pharm-sba-095-c",
        "text": "Abrupt withdrawal triggers massive immediate osteoporosis within 24 hours",
        "is_correct": false
      },
      {
        "id": "pharm-sba-095-b",
        "text": "Abrupt withdrawal causes immediate irreversible toxic liver failure",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-096",
    "stem": "What is the mechanism of low-dose weekly Methotrexate as the anchor conventional synthetic DMARD in Rheumatoid Arthritis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "At low weekly doses in RA, methotrexate's anti-inflammatory action is mediated by AICAR inhibition and extracellular adenosine release (co-prescribed with folic acid).",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-096-a",
        "text": "Inhibition of aminoimidazolecarboxamide ribonucleotide (AICAR) transformylase and thymidylate synthase, leading to extracellular Adenosine accumulation (anti-inflammatory)",
        "is_correct": true
      },
      {
        "id": "pharm-sba-096-b",
        "text": "Direct competitive blockade of TNF-alpha cell surface receptors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-096-e",
        "text": "Direct inhibition of cyclooxygenase-1 in synovial joints",
        "is_correct": false
      },
      {
        "id": "pharm-sba-096-c",
        "text": "Complete permanent ablation of bone marrow B-lymphocyte precursors",
        "is_correct": false
      },
      {
        "id": "pharm-sba-096-d",
        "text": "Inhibition of bacterial protein synthesis in the gut microbiome",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-097",
    "stem": "Which of the following biological agents is a chimeric monoclonal antibody that binds and neutralizes both soluble and transmembrane Tumour Necrosis Factor-alpha (TNF-alpha)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "Infliximab and adalimumab are monoclonal antibodies neutralizing TNF-alpha, transforming the management of severe RA, ankylosing spondylitis, and IBD.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-097-e",
        "text": "Abatacept (CTLA-4 fusion protein blocking T-cell co-stimulation)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-097-c",
        "text": "Tocilizumab (targeting the Interleukin-6 receptor)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-097-d",
        "text": "Anakinra (recombinant Interleukin-1 receptor antagonist)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-097-b",
        "text": "Rituximab (targeting the CD20 antigen on B-cells)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-097-a",
        "text": "Infliximab (or Adalimumab, Golimumab)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-098",
    "stem": "Why MUST all patients undergo screening for Latent Tuberculosis (via Tuberculin Skin Test or Interferon-Gamma Release Assay / IGRA) prior to initiating Anti-TNF therapy?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "TNF-alpha maintains tuberculous granuloma architecture; anti-TNF agents trigger granuloma breakdown, risking disseminated miliary TB or tuberculous meningitis.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-098-d",
        "text": "Anti-TNF agents cause severe hypersensitivity reactions in the presence of BCG",
        "is_correct": false
      },
      {
        "id": "pharm-sba-098-a",
        "text": "TNF-alpha is critical for the maintenance and structural integrity of granulomas; its blockade can cause catastrophic reactivation of dormant mycobacteria",
        "is_correct": true
      },
      {
        "id": "pharm-sba-098-b",
        "text": "Anti-TNF agents directly stimulate the growth of Mycobacterium tuberculosis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-098-e",
        "text": "Anti-TNF agents are chemically synthesized from live tuberculosis cultures",
        "is_correct": false
      },
      {
        "id": "pharm-sba-098-c",
        "text": "Anti-TNF agents neutralize all circulating antituberculous antibodies",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-099",
    "stem": "What is the molecular target and mechanism of Rituximab in autoimmune disorders and B-cell lymphomas?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "Rituximab targets CD20 on pre-B and mature B-cells (sparing plasma cells which lack CD20), eliminating pathogenic antibody-producing B-cell clones.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-099-b",
        "text": "Targeting the CD3 complex on T-lymphocytes causing T-cell apoptosis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-099-a",
        "text": "Chimeric monoclonal antibody targeting the CD20 antigen on mature B-lymphocytes, inducing cell lysis via complement and antibody-dependent cytotoxicity",
        "is_correct": true
      },
      {
        "id": "pharm-sba-099-c",
        "text": "Targeting the CD4 coreceptor preventing viral attachment",
        "is_correct": false
      },
      {
        "id": "pharm-sba-099-e",
        "text": "Targeting the HER2/neu epidermal growth factor receptor",
        "is_correct": false
      },
      {
        "id": "pharm-sba-099-d",
        "text": "Targeting the CD117 (c-KIT) tyrosine kinase receptor",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-100",
    "stem": "How does Colchicine relieve pain and inflammation in acute gouty arthritis?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "Colchicine arrests microtubule assembly, preventing neutrophils from migrating into joints and phagocytosing urate crystals, aborting the gout flare.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-100-e",
        "text": "Directly antagonizes peripheral opioid receptors in joints",
        "is_correct": false
      },
      {
        "id": "pharm-sba-100-d",
        "text": "Inhibits xanthine oxidase, blocking uric acid synthesis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-100-c",
        "text": "Inhibits renal tubular reabsorption of uric acid (uricosuric action)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-100-b",
        "text": "Directly dissolves monosodium urate crystals in synovial fluid",
        "is_correct": false
      },
      {
        "id": "pharm-sba-100-a",
        "text": "Binds to tubulin and prevents microtubule polymerization, inhibiting neutrophil chemotaxis, motility, and inflammasome activation (NLRP3)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-101",
    "stem": "What is the enzymatic target of Allopurinol and Febuxostat in the long-term chronic management of hyperuricaemia and tophaceous gout?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "Allopurinol (purine analog) and Febuxostat (non-purine) inhibit xanthine oxidase, lowering serum urate below the saturation threshold (<360 umol/L).",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-101-d",
        "text": "Inhibition of purine biosynthesis in bone marrow cells",
        "is_correct": false
      },
      {
        "id": "pharm-sba-101-a",
        "text": "Inhibition of Xanthine Oxidase, blocking the conversion of hypoxanthine to xanthine and xanthine to uric acid",
        "is_correct": true
      },
      {
        "id": "pharm-sba-101-e",
        "text": "Direct stimulation of intestinal uric acid excretion",
        "is_correct": false
      },
      {
        "id": "pharm-sba-101-b",
        "text": "Inhibition of renal URAT1 uric acid transporters",
        "is_correct": false
      },
      {
        "id": "pharm-sba-101-c",
        "text": "Enzymatic degradation of uric acid into allantoin (action of Rasburicase)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-102",
    "stem": "In patients of Han Chinese, Korean, or Thai descent, screening for which genetic allele is recommended before prescribing Allopurinol to prevent fatal Stevens-Johnson syndrome?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "HLA-B*58:01 strongly predisposes to Severe Cutaneous Adverse Reactions (SCAR, SJS/TEN) with allopurinol; screening is recommended in high-risk populations.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-102-e",
        "text": "HLA-DQ2/DQ8 allele",
        "is_correct": false
      },
      {
        "id": "pharm-sba-102-d",
        "text": "HLA-B*57:01 allele (screened prior to Abacavir)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-102-a",
        "text": "HLA-B*58:01 allele",
        "is_correct": true
      },
      {
        "id": "pharm-sba-102-b",
        "text": "HLA-B*27 allele",
        "is_correct": false
      },
      {
        "id": "pharm-sba-102-c",
        "text": "HLA-DR4 allele",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-103",
    "stem": "How does Probenecid lower serum uric acid in chronic gout, and why is adequate fluid intake mandatory during its use?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "Probenecid is a uricosuric drug inhibiting URAT1 in proximal tubules; increased urinary urate concentration risks nephrolithiasis unless well hydrated.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-103-b",
        "text": "Inhibits xanthine oxidase; fluids accelerate hepatic clearance",
        "is_correct": false
      },
      {
        "id": "pharm-sba-103-c",
        "text": "Stimulates renal calcium excretion; fluids prevent hypocalcaemia",
        "is_correct": false
      },
      {
        "id": "pharm-sba-103-a",
        "text": "Inhibits URAT1 transporters in the proximal tubule, blocking uric acid reabsorption and promoting uricosuria; high fluids prevent renal uric acid stone precipitation",
        "is_correct": true
      },
      {
        "id": "pharm-sba-103-e",
        "text": "Directly binds circulating uric acid molecules in the blood",
        "is_correct": false
      },
      {
        "id": "pharm-sba-103-d",
        "text": "Inhibits intestinal purine absorption; fluids improve bioavailability",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-104",
    "stem": "What is the biochemical mechanism of severe hepatocellular necrosis following toxic Paracetamol (Acetaminophen) overdose?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "Toxic paracetamol doses saturate glucuronidation; CYP2E1 forms NAPQI; when glutathione drops <30%, NAPQI binds hepatocellular proteins causing centrilobular necrosis.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-104-e",
        "text": "Direct inhibition of mitochondrial oxidative phosphorylation in skeletal muscle",
        "is_correct": false
      },
      {
        "id": "pharm-sba-104-a",
        "text": "Saturation of normal glucuronide/sulfate pathways shunts metabolism to CYP2E1, producing toxic NAPQI which depletes glutathione and binds hepatic macromolecules",
        "is_correct": true
      },
      {
        "id": "pharm-sba-104-c",
        "text": "Immediate massive inhibition of renal cyclooxygenase enzymes",
        "is_correct": false
      },
      {
        "id": "pharm-sba-104-b",
        "text": "Direct chemical acid burn to the gastric mucosa causing perforation",
        "is_correct": false
      },
      {
        "id": "pharm-sba-104-d",
        "text": "Metabolism of paracetamol into concentrated hydrochloric acid in bile",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-105",
    "stem": "What is the mechanism of N-Acetylcysteine (NAC) as the specific antidote for acute Paracetamol overdose?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "NAC replenishes intracellular glutathione stores and directly conjugates with NAPQI, preventing fatal hepatic necrosis when given within 8-10 hours.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-105-a",
        "text": "Acts as a sulfhydryl donor and precursor for the synthesis of Glutathione, detoxifying NAPQI into non-toxic mercapturic acid conjugates",
        "is_correct": true
      },
      {
        "id": "pharm-sba-105-b",
        "text": "Competitively inhibits Cytochrome P450 2E1 to stop all metabolism",
        "is_correct": false
      },
      {
        "id": "pharm-sba-105-c",
        "text": "Directly binds and neutralizes unmetabolized paracetamol in the stomach",
        "is_correct": false
      },
      {
        "id": "pharm-sba-105-d",
        "text": "Stimulates renal tubular secretion of paracetamol into urine",
        "is_correct": false
      },
      {
        "id": "pharm-sba-105-e",
        "text": "Inactivates gastric parietal cell proton pumps",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-106",
    "stem": "What mandatory annual baseline and long-term screening is required for patients taking Hydroxychloroquine for systemic lupus erythematosus or rheumatoid arthritis?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "Hydroxychloroquine binds retinal pigment epithelium; annual screening (visual fields, spectral-domain OCT) detects early toxicity before irreversible macular damage.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-106-d",
        "text": "Annual liver biopsy for toxic cirrhosis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-106-b",
        "text": "Annual bone marrow aspiration for myelofibrosis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-106-e",
        "text": "Annual cranial CT for intracranial calcifications",
        "is_correct": false
      },
      {
        "id": "pharm-sba-106-a",
        "text": "Automated Visual Field testing and Optical Coherence Tomography (OCT) to detect early Hydroxychloroquine Retinopathy ('bull's-eye maculopathy')",
        "is_correct": true
      },
      {
        "id": "pharm-sba-106-c",
        "text": "Continuous 24-hour Holter monitoring for ventricular arrhythmias",
        "is_correct": false
      }
    ]
  },
  {
    "id": "pharm-sba-107",
    "stem": "What is the biochemical target of Leflunomide, a conventional synthetic DMARD used in the treatment of active rheumatoid arthritis?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "Leflunomide inhibits mitochondrial DHODH, halting de novo pyrimidine synthesis needed for rapid T- and B-lymphocyte proliferation.",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-107-b",
        "text": "Inhibition of bacterial cell wall peptidoglycan transpeptidase",
        "is_correct": false
      },
      {
        "id": "pharm-sba-107-c",
        "text": "Blockade of inosine monophosphate dehydrogenase in purine synthesis",
        "is_correct": false
      },
      {
        "id": "pharm-sba-107-d",
        "text": "Direct inhibition of topoisomerase II in synovial macrophages",
        "is_correct": false
      },
      {
        "id": "pharm-sba-107-e",
        "text": "Irreversible inhibition of cyclooxygenase-2 in chondrocytes",
        "is_correct": false
      },
      {
        "id": "pharm-sba-107-a",
        "text": "Reversible inhibition of Dihydroorotate Dehydrogenase (DHODH), blocking de novo pyrimidine synthesis in proliferating lymphocytes",
        "is_correct": true
      }
    ]
  },
  {
    "id": "pharm-sba-108",
    "stem": "What is the intracellular target of targeted synthetic DMARDs such as Tofacitinib and Baricitinib in rheumatoid arthritis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Pharmacology",
    "section": "Anti-inflammatory Drugs",
    "programme": "both",
    "explanation": "JAK inhibitors are small-molecule oral DMARDs blocking intracellular JAK-STAT signaling pathways for multiple inflammatory cytokines (IL-2, IL-6, IFN-gamma).",
    "reference": "Katzung's Basic & Clinical Pharmacology, 15th Ed. / Rang & Dale's Pharmacology, 9th Ed.",
    "options": [
      {
        "id": "pharm-sba-108-b",
        "text": "Extracellular neutralization of circulating Interleukin-1 beta",
        "is_correct": false
      },
      {
        "id": "pharm-sba-108-a",
        "text": "Inhibition of Janus Kinases (JAK1, JAK2, JAK3, TYK2), blocking the JAK-STAT cytokine signaling cascade downstream of multiple pro-inflammatory receptors",
        "is_correct": true
      },
      {
        "id": "pharm-sba-108-d",
        "text": "Blockade of nuclear factor of activated T-cells (NFAT)",
        "is_correct": false
      },
      {
        "id": "pharm-sba-108-c",
        "text": "Direct inhibition of intracellular protein kinase C",
        "is_correct": false
      },
      {
        "id": "pharm-sba-108-e",
        "text": "Direct antagonism of platelet-derived growth factor receptors",
        "is_correct": false
      }
    ]
  }
]
