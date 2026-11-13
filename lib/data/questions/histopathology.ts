import type { MCQQuestion } from "../mcq-bank"

export const HISTOPATHOLOGY_QUESTIONS: MCQQuestion[] = [
  {
    "id": "path-sba-001",
    "stem": "Which cellular feature is the DEFINITIVE hallmark distinguishing irreversible cell injury from reversible cell injury under electron microscopy?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Cell Injury & Death",
    "programme": "mbchb",
    "explanation": "The two consistent hallmarks of irreversibility are severe mitochondrial dysfunction (inability to restore ATP generation) and profound membrane damage (rupture of plasma and lysosomal membranes with enzyme leakage).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-001-a",
        "text": "Severe mitochondrial damage with large flocculent amorphous densities and disruption of plasma and lysosomal membranes",
        "is_correct": true
      },
      {
        "id": "path-sba-001-b",
        "text": "Cellular swelling (hydropic change) with blebbing of the plasma membrane",
        "is_correct": false
      },
      {
        "id": "path-sba-001-c",
        "text": "Detachment of ribosomes from the rough endoplasmic reticulum",
        "is_correct": false
      },
      {
        "id": "path-sba-001-e",
        "text": "Aggregation of intramembranous particles without membrane rupture",
        "is_correct": false
      },
      {
        "id": "path-sba-001-d",
        "text": "Dilatation of the endoplasmic reticulum with myelin figures",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-002",
    "stem": "Coagulative Necrosis is characteristically seen in ischemic infarction of which solid organ, EXCEPT:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Cell Injury & Death",
    "programme": "mbchb",
    "explanation": "Hypoxic death of cells in all solid tissues (heart, kidney, spleen) leads to coagulative necrosis, EXCEPT in the central nervous system, where ischemic injury results in liquefactive necrosis due to rich lipid and hydrolytic enzyme content.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-002-e",
        "text": "Liver",
        "is_correct": false
      },
      {
        "id": "path-sba-002-d",
        "text": "Spleen",
        "is_correct": false
      },
      {
        "id": "path-sba-002-c",
        "text": "Kidney",
        "is_correct": false
      },
      {
        "id": "path-sba-002-b",
        "text": "Myocardium",
        "is_correct": false
      },
      {
        "id": "path-sba-002-a",
        "text": "Brain (cerebral cortex, which undergoes Liquefactive Necrosis)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-003",
    "stem": "What histological pattern defines Caseous Necrosis, classically encountered in Mycobacterium tuberculosis infection?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Cell Injury & Death",
    "programme": "mbchb",
    "explanation": "Caseous ('cheese-like') necrosis is distinctive of tuberculous granulomas: tissue architecture is completely effaced into structureless, amorphous, eosinophilic granular debris surrounded by a rim of epithelioid macrophages and giant cells.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-003-a",
        "text": "Friable yellow-white 'cheese-like' gross appearance, with amorphous granular eosinophilic debris enclosed within a granulomatous rim of epithelioid histiocytes and Langhans giant cells",
        "is_correct": true
      },
      {
        "id": "path-sba-003-c",
        "text": "Complete enzymatic digestion of dead cells into a liquid viscous cyst",
        "is_correct": false
      },
      {
        "id": "path-sba-003-b",
        "text": "Preservation of cellular outlines ('tombstone' appearance) with loss of nuclei",
        "is_correct": false
      },
      {
        "id": "path-sba-003-d",
        "text": "Focal chalky white calcium deposits from saponification",
        "is_correct": false
      },
      {
        "id": "path-sba-003-e",
        "text": "Fibrinoid degeneration with intense deposition of immune complexes in vessel walls",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-004",
    "stem": "Enzymatic Fat Necrosis, typically seen in acute pancreatitis, results from:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Cell Injury & Death",
    "programme": "mbchb",
    "explanation": "In acute pancreatitis, activated lipases split triglyceride esters in fat cells. Released fatty acids combine with calcium, forming grossly visible chalky-white calcium soaps (fat saponification) that stain basophilic on H&E.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-004-a",
        "text": "Release of pancreatic lipases that liquefy adipocyte membranes, releasing free fatty acids that combine with calcium to form chalky white soaps (saponification)",
        "is_correct": true
      },
      {
        "id": "path-sba-004-b",
        "text": "Immune complex-mediated destruction of vascular endothelial walls",
        "is_correct": false
      },
      {
        "id": "path-sba-004-e",
        "text": "Apoptotic cleavage of nuclear lamins by caspase-8",
        "is_correct": false
      },
      {
        "id": "path-sba-004-c",
        "text": "Infiltration of adipose tissue by large numbers of eosinophils",
        "is_correct": false
      },
      {
        "id": "path-sba-004-d",
        "text": "Hyaline accumulation inside retroperitoneal macrophages",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-005",
    "stem": "The intrinsic (mitochondrial) pathway of Apoptosis is triggered by the release of which protein from the mitochondrial intermembrane space into the cytosol?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Cell Injury & Death",
    "programme": "mbchb",
    "explanation": "Cellular stress/DNA damage inactivates Bcl-2/Bcl-xL and activates Bax/Bak, permeabilizing the outer mitochondrial membrane. Cytochrome c leaks into the cytosol, binding Apaf-1 and procaspase-9 to assemble the apoptosome.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-005-c",
        "text": "Bcl-2 anti-apoptotic protein",
        "is_correct": false
      },
      {
        "id": "path-sba-005-d",
        "text": "Tumor Necrosis Factor receptor 1 (TNFR1)",
        "is_correct": false
      },
      {
        "id": "path-sba-005-b",
        "text": "Fas ligand (FasL)",
        "is_correct": false
      },
      {
        "id": "path-sba-005-e",
        "text": "Granzyme B",
        "is_correct": false
      },
      {
        "id": "path-sba-005-a",
        "text": "Cytochrome c (which binds Apaf-1 to form the apoptosome)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-006",
    "stem": "Which executioner caspases are responsible for cleaving vital cellular substrates to execute apoptosis in both intrinsic and extrinsic pathways?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Cell Injury & Death",
    "programme": "mbchb",
    "explanation": "Initiator caspases (caspase-8, 9, 10) cleave and activate executioner caspases (caspase-3, 6, 7), which then degrade structural proteins and activate endonucleases (CAD) to fragment DNA.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-006-a",
        "text": "Caspase-3, Caspase-6, and Caspase-7",
        "is_correct": true
      },
      {
        "id": "path-sba-006-d",
        "text": "Caspase-1 (inflammasome activator, converts pro-IL-1beta)",
        "is_correct": false
      },
      {
        "id": "path-sba-006-b",
        "text": "Caspase-8 and Caspase-10 (initiator caspases of extrinsic pathway)",
        "is_correct": false
      },
      {
        "id": "path-sba-006-c",
        "text": "Caspase-9 (initiator caspase of intrinsic pathway)",
        "is_correct": false
      },
      {
        "id": "path-sba-006-e",
        "text": "Caspase-14 (epidermal cornification)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-007",
    "stem": "Dystrophic Calcification occurs in which clinical setting, in contrast to Metastatic Calcification?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Cell Injury & Death",
    "programme": "mbchb",
    "explanation": "Dystrophic calcification occurs locally in necrotic tissues (e.g., atherosclerotic plaques, damaged heart valves, caseous granulomas) despite normal serum calcium. Metastatic calcification occurs in normal tissues due to hypercalcaemia.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-007-a",
        "text": "Deposition of calcium phosphate salts in dying, necrotic, or damaged tissues in the presence of NORMAL serum calcium levels",
        "is_correct": true
      },
      {
        "id": "path-sba-007-b",
        "text": "Deposition of calcium in normal tissues secondary to hypercalcaemia",
        "is_correct": false
      },
      {
        "id": "path-sba-007-c",
        "text": "Massive precipitation of urate crystals in synovial joints",
        "is_correct": false
      },
      {
        "id": "path-sba-007-d",
        "text": "Calcification of the cornea in vitamin D deficiency",
        "is_correct": false
      },
      {
        "id": "path-sba-007-e",
        "text": "Calcium oxalate deposition caused by renal failure alone",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-008",
    "stem": "What intracellular accumulation produces Mallory-Denk bodies in alcoholic hepatitis?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Cell Injury & Death",
    "programme": "mbchb",
    "explanation": "Mallory-Denk bodies are rope-like, irregular eosinophilic cytoplasmic inclusions within ballooned hepatocytes in alcoholic liver disease, composed of ubiquitinated damaged cytokeratin intermediate filaments.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-008-c",
        "text": "Excessive alpha-1-antitrypsin glycoprotein polymers",
        "is_correct": false
      },
      {
        "id": "path-sba-008-a",
        "text": "Tangled aggregates of Cytokeratin intermediate filaments (CK8/18) and ubiquitin",
        "is_correct": true
      },
      {
        "id": "path-sba-008-b",
        "text": "Lipofuscin wear-and-tear pigment granules",
        "is_correct": false
      },
      {
        "id": "path-sba-008-d",
        "text": "Abnormal accumulations of glycogen in hepatocyte nuclei",
        "is_correct": false
      },
      {
        "id": "path-sba-008-e",
        "text": "Hemosiderin iron complexes within lysosomes",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-009",
    "stem": "Russell Bodies, seen in chronic inflammatory states and multiple myeloma, represent intracellular accumulations of:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Cell Injury & Death",
    "programme": "mbchb",
    "explanation": "Russell bodies are round, homogeneous, brightly eosinophilic inclusions representing massive accumulations of newly synthesized immunoglobulins stalled within the rough ER of active plasma cells.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-009-a",
        "text": "Excessive, newly synthesized Immunoglobulins distending the Rough Endoplasmic Reticulum of plasma cells",
        "is_correct": true
      },
      {
        "id": "path-sba-009-b",
        "text": "Degraded nuclear DNA fragments inside apoptotic macrophages",
        "is_correct": false
      },
      {
        "id": "path-sba-009-c",
        "text": "Lipid droplets accumulating inside Kupffer cells",
        "is_correct": false
      },
      {
        "id": "path-sba-009-d",
        "text": "Denatured mitochondrial cristae in exhausted lymphocytes",
        "is_correct": false
      },
      {
        "id": "path-sba-009-e",
        "text": "Hyaline droplets of reabsorbed albumin in proximal tubule cells",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-010",
    "stem": "Which cellular adaptation is defined as the transformation of one adult differentiated cell type into another adult cell type in response to chronic irritation?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Cell Injury & Death",
    "programme": "mbchb",
    "explanation": "Metaplasia is a reversible change in which one differentiated adult cell type (epithelial or mesenchymal) is replaced by another adult cell type better able to withstand chronic harsh environmental stress (e.g., squamous metaplasia in smoker's bronchus).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-010-a",
        "text": "Metaplasia",
        "is_correct": true
      },
      {
        "id": "path-sba-010-b",
        "text": "Hyperplasia",
        "is_correct": false
      },
      {
        "id": "path-sba-010-c",
        "text": "Hypertrophy",
        "is_correct": false
      },
      {
        "id": "path-sba-010-d",
        "text": "Dysplasia",
        "is_correct": false
      },
      {
        "id": "path-sba-010-e",
        "text": "Anaplasia",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-011",
    "stem": "What is the primary driving mechanism of Myocardial Hypertrophy in response to systemic arterial hypertension?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Cell Injury & Death",
    "programme": "mbchb",
    "explanation": "Adult cardiac myocytes have limited capacity for cell division. Mechanical stretch activates signal transduction pathways that induce protein synthesis, enlarging existing myocytes (hypertrophy) to increase muscle mass.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-011-b",
        "text": "Rapid mitotic division and clonal expansion of adult cardiac myocytes",
        "is_correct": false
      },
      {
        "id": "path-sba-011-d",
        "text": "Infiltration of the ventricular wall by mesenchymal stem cells",
        "is_correct": false
      },
      {
        "id": "path-sba-011-a",
        "text": "Increased mechanical work and wall stress stimulating transcription factors (GATA4, NFAT) to synthesize more sarcomeres, increasing cell size without division",
        "is_correct": true
      },
      {
        "id": "path-sba-011-c",
        "text": "Accumulation of neutral triglycerides within myocardial lysosomes",
        "is_correct": false
      },
      {
        "id": "path-sba-011-e",
        "text": "Edema of the interstitial extracellular matrix with myofiber atrophy",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-012",
    "stem": "Autophagy is a conserved cellular survival mechanism in which:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Cell Injury & Death",
    "programme": "mbchb",
    "explanation": "Autophagy ('self-eating') involves packaging cytoplasmic components into double-membrane autophagosomes that fuse with lysosomes, recycling amino acids and fatty acids during nutrient starvation and clearing aggregate-prone proteins.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-012-e",
        "text": "Cells undergo explosive lysis to alert the adaptive immune system",
        "is_correct": false
      },
      {
        "id": "path-sba-012-a",
        "text": "Cells sequester and deliver their own senescent organelles and misfolded proteins to lysosomes for degradation and nutrient recycling",
        "is_correct": true
      },
      {
        "id": "path-sba-012-d",
        "text": "Free radicals cause lipid peroxidation of the nuclear envelope",
        "is_correct": false
      },
      {
        "id": "path-sba-012-b",
        "text": "Infiltrating neutrophils engulf apoptotic cellular remnants",
        "is_correct": false
      },
      {
        "id": "path-sba-012-c",
        "text": "Phagosomes fuse with the plasma membrane to export toxic metals",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-013",
    "stem": "The generation of the Hydroxyl Radical (.OH), the most reactive and damaging reactive oxygen species (ROS) in biological systems, is catalyzed by iron via which reaction?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Cell Injury & Death",
    "programme": "mbchb",
    "explanation": "The Fenton reaction uses ferrous iron (Fe2+) to reduce hydrogen peroxide (H2O2) to the extremely reactive and toxic hydroxyl free radical (.OH), which causes extensive lipid peroxidation, protein cross-linking, and DNA strand breaks.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-013-e",
        "text": "Glutathione peroxidase reduction of oxidized lipid hydroperoxides",
        "is_correct": false
      },
      {
        "id": "path-sba-013-d",
        "text": "Catalase-mediated hydrogen peroxide reduction",
        "is_correct": false
      },
      {
        "id": "path-sba-013-c",
        "text": "Warburg aerobic glycolysis pathway",
        "is_correct": false
      },
      {
        "id": "path-sba-013-b",
        "text": "Haber-Weiss reaction involving superoxide dismutase alone",
        "is_correct": false
      },
      {
        "id": "path-sba-013-a",
        "text": "Fenton Reaction (Fe2+ + H2O2 -> Fe3+ + .OH + OH-)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-014",
    "stem": "Fatty change (Steatosis) in hepatocytes is most commonly initiated by:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Cell Injury & Death",
    "programme": "mbchb",
    "explanation": "Hepatic steatosis (fatty change) represents abnormal intracellular accumulation of triglycerides within parenchymal hepatocytes, caused by excess delivery, increased de novo synthesis, reduced fatty acid oxidation, or impaired VLDL secretion (alcoholism, NAFLD).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-014-b",
        "text": "Excessive accumulation of glycogen in mitochondrial matrices",
        "is_correct": false
      },
      {
        "id": "path-sba-014-d",
        "text": "Direct viral destruction of cellular rough endoplasmic reticulum",
        "is_correct": false
      },
      {
        "id": "path-sba-014-e",
        "text": "Extracellular transudation of plasma lipids across sinusoids",
        "is_correct": false
      },
      {
        "id": "path-sba-014-c",
        "text": "Defective lysosomal transport of cholesterol esters (Niemann-Pick)",
        "is_correct": false
      },
      {
        "id": "path-sba-014-a",
        "text": "Impaired oxidation of fatty acids, increased peripheral mobilization, or impaired export of lipoproteins (as seen in alcoholism, obesity, and diabetes)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-015",
    "stem": "Which cellular adhesion molecule mediates the initial loose ROLLING of leukocytes along activated post-capillary venule endothelial cells?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Inflammation",
    "programme": "mbchb",
    "explanation": "Leukocyte recruitment begins with rolling, mediated by low-affinity interactions between selectins (E-selectin on endothelium, P-selectin from Weibel-Palade bodies, L-selectin on leukocytes) and sialylated carbohydrate ligands.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-015-a",
        "text": "Selectins (E-selectin, P-selectin, and L-selectin binding Sialyl-Lewis X modified glycoproteins)",
        "is_correct": true
      },
      {
        "id": "path-sba-015-b",
        "text": "Integrins (LFA-1, Mac-1, VLA-4)",
        "is_correct": false
      },
      {
        "id": "path-sba-015-c",
        "text": "Immunoglobulin superfamily (ICAM-1, VCAM-1)",
        "is_correct": false
      },
      {
        "id": "path-sba-015-d",
        "text": "Cadherins (E-cadherin, N-cadherin)",
        "is_correct": false
      },
      {
        "id": "path-sba-015-e",
        "text": "Platelet-Endothelial Cell Adhesion Molecule-1 (PECAM-1 / CD31)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-016",
    "stem": "FIRM adhesion of leukocytes to the endothelium during acute inflammation requires the activation of:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Inflammation",
    "programme": "mbchb",
    "explanation": "Chemokines display on endothelial surfaces bind leukocyte GPCRs, converting integrins (LFA-1, VLA-4) from low- to high-affinity conformations that lock onto endothelial ICAM-1 and VCAM-1, arresting rolling.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-016-d",
        "text": "Connexin-43 gap junctions connecting neutrophils directly to smooth muscle",
        "is_correct": false
      },
      {
        "id": "path-sba-016-b",
        "text": "Selectins binding to hyaluronic acid in the extracellular matrix",
        "is_correct": false
      },
      {
        "id": "path-sba-016-c",
        "text": "PECAM-1 (CD31) homophilic interactions across basement membranes",
        "is_correct": false
      },
      {
        "id": "path-sba-016-a",
        "text": "Integrins (such as LFA-1 and VLA-4) by chemokines to high-affinity states, binding to endothelial ICAM-1 and VCAM-1",
        "is_correct": true
      },
      {
        "id": "path-sba-016-e",
        "text": "Complement receptor 1 (CR1) binding factor H",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-017",
    "stem": "Which adhesion molecule located at intercellular endothelial junctions mediates leukocyte TRANSMIGRATION (diapedesis)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Inflammation",
    "programme": "mbchb",
    "explanation": "PECAM-1 (CD31), an Ig-superfamily member present on both leukocyte and endothelial surfaces, mediates homophilic adhesion that guides the transmigration (diapedesis) of leukocytes through intercellular junctions.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-017-a",
        "text": "PECAM-1 (CD31)",
        "is_correct": true
      },
      {
        "id": "path-sba-017-e",
        "text": "P-selectin",
        "is_correct": false
      },
      {
        "id": "path-sba-017-b",
        "text": "E-selectin",
        "is_correct": false
      },
      {
        "id": "path-sba-017-c",
        "text": "ICAM-1",
        "is_correct": false
      },
      {
        "id": "path-sba-017-d",
        "text": "Sialyl-Lewis X",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-018",
    "stem": "In Leukocyte Adhesion Deficiency Type 1 (LAD-1), recurrent bacterial infections and delayed umbilical cord separation are caused by:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Inflammation",
    "programme": "mbchb",
    "explanation": "LAD-1 is an autosomal recessive disorder caused by mutations in the ITGB2 gene encoding the CD18 (beta-2 integrin) chain, impairing LFA-1 and Mac-1 assembly; neutrophils cannot firmly adhere or emigrate from vessels.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-018-d",
        "text": "Defective assembly of NADPH oxidase complex (CGD)",
        "is_correct": false
      },
      {
        "id": "path-sba-018-b",
        "text": "Defective synthesis of Sialyl-Lewis X (fucosyl transferase deficiency, LAD-2)",
        "is_correct": false
      },
      {
        "id": "path-sba-018-e",
        "text": "Absence of endothelial Weibel-Palade bodies",
        "is_correct": false
      },
      {
        "id": "path-sba-018-a",
        "text": "Defective beta-2 integrin (CD18) subunit synthesis, preventing leukocyte firm adhesion and transmigration",
        "is_correct": true
      },
      {
        "id": "path-sba-018-c",
        "text": "Mutation in neutrophil myeloperoxidase (MPO)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-019",
    "stem": "Which powerful chemotactic factor recruits neutrophils to the site of acute inflammation?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Inflammation",
    "programme": "mbchb",
    "explanation": "The primary endogenous chemotactic factors that draw neutrophils into inflamed tissues are IL-8 (CXCL8), C5a, leukotriene B4 (LTB4), and bacterial N-formylmethionine peptides.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-019-d",
        "text": "Platelet-derived Growth Factor and VEGF",
        "is_correct": false
      },
      {
        "id": "path-sba-019-c",
        "text": "Bradykinin, Histamine, and Prostaglandin D2",
        "is_correct": false
      },
      {
        "id": "path-sba-019-b",
        "text": "Interleukin-10, TGF-beta, and Lipoxin A4",
        "is_correct": false
      },
      {
        "id": "path-sba-019-a",
        "text": "Interleukin-8 (CXCL8), Complement component C5a, and Leukotriene B4 (LTB4)",
        "is_correct": true
      },
      {
        "id": "path-sba-019-e",
        "text": "Interferon-alpha and Interleukin-2",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-020",
    "stem": "What is the primary enzymatic defect in Chronic Granulomatous Disease (CGD)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Inflammation",
    "programme": "mbchb",
    "explanation": "CGD results from mutations in NADPH oxidase subunits (catalyzing conversion of O2 to superoxide O2.-). Phagocytes fail to generate reactive oxygen species, leading to recurrent granulomas and infections with catalase-positive organisms (S. aureus, Aspergillus, Burkholderia).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-020-c",
        "text": "Deficiency of Glucose-6-phosphate dehydrogenase (G6PD)",
        "is_correct": false
      },
      {
        "id": "path-sba-020-b",
        "text": "Complete absence of lysosomal Myeloperoxidase (MPO)",
        "is_correct": false
      },
      {
        "id": "path-sba-020-e",
        "text": "Mutation in Bruton tyrosine kinase (BTK)",
        "is_correct": false
      },
      {
        "id": "path-sba-020-d",
        "text": "Defect in lysosomal trafficking regulator gene (LYST, Chédiak-Higashi)",
        "is_correct": false
      },
      {
        "id": "path-sba-020-a",
        "text": "Deficiency of phagocyte NADPH Oxidase (most commonly X-linked gp91phox), causing failure of the respiratory burst and inability to kill catalase-positive microbes",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-021",
    "stem": "The diagnostic finding of giant granules in neutrophils and defective phagolysosome fusion in Chédiak-Higashi Syndrome is caused by a mutation in:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Inflammation",
    "programme": "mbchb",
    "explanation": "Chédiak-Higashi syndrome is an autosomal recessive disorder caused by mutations in the LYST gene, causing defective vesicular sorting, impaired phagolysosome fusion, giant lysosomal granules, and oculocutaneous albinism.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-021-d",
        "text": "ITGB2 (CD18 integrin)",
        "is_correct": false
      },
      {
        "id": "path-sba-021-b",
        "text": "CYBB (gp91phox of NADPH oxidase)",
        "is_correct": false
      },
      {
        "id": "path-sba-021-e",
        "text": "CASP3 (Caspase-3)",
        "is_correct": false
      },
      {
        "id": "path-sba-021-a",
        "text": "LYST (Lysosomal Trafficking Regulator gene)",
        "is_correct": true
      },
      {
        "id": "path-sba-021-c",
        "text": "MPO (Myeloperoxidase)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-022",
    "stem": "Which chemical mediator of acute inflammation is preformed and stored in mast cell granules, producing immediate arteriolar vasodilation and increased venular permeability?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Inflammation",
    "programme": "mbchb",
    "explanation": "Histamine is preformed and stored in mast cell, basophil, and platelet granules. Released immediately upon IgE cross-linking or C3a/C5a, it causes rapid arteriolar dilation and post-capillary venular endothelial gap formation (permeability).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-022-d",
        "text": "Platelet-Activating Factor (PAF)",
        "is_correct": false
      },
      {
        "id": "path-sba-022-a",
        "text": "Histamine",
        "is_correct": true
      },
      {
        "id": "path-sba-022-b",
        "text": "Prostaglandin E2",
        "is_correct": false
      },
      {
        "id": "path-sba-022-c",
        "text": "Leukotriene C4",
        "is_correct": false
      },
      {
        "id": "path-sba-022-e",
        "text": "Tumor Necrosis Factor (TNF)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-023",
    "stem": "Which complement split products act as potent Anaphylatoxins, causing mast cell degranulation and vascular permeability independently of IgE?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Inflammation",
    "programme": "mbchb",
    "explanation": "C3a and C5a are anaphylatoxins: they bind receptors on mast cells and basophils to induce histamine release, vasodilation, and bronchospasm without requiring antibody cross-linking.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-023-b",
        "text": "C3b and iC3b (opsonins)",
        "is_correct": false
      },
      {
        "id": "path-sba-023-c",
        "text": "C5b-9 (membrane attack complex)",
        "is_correct": false
      },
      {
        "id": "path-sba-023-a",
        "text": "C3a and C5a",
        "is_correct": true
      },
      {
        "id": "path-sba-023-d",
        "text": "C1q and C1r",
        "is_correct": false
      },
      {
        "id": "path-sba-023-e",
        "text": "Factor B and Factor D",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-024",
    "stem": "What are the quintessential histological constituents of a Granuloma (Granulomatous Inflammation)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Inflammation",
    "programme": "mbchb",
    "explanation": "A granuloma is a focus of chronic inflammation consisting of aggregates of epithelioid macrophages (induced by IFN-gamma from TH1 cells), multinucleated giant cells (fused macrophages), and a cuff of lymphocytes and fibroblasts.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-024-d",
        "text": "Extensive capillary proliferation with abundant extracellular mucin and myofibroblasts",
        "is_correct": false
      },
      {
        "id": "path-sba-024-a",
        "text": "Aggregates of activated modified macrophages (Epithelioid cells) with abundant eosinophilic cytoplasm, collar of lymphocytes and plasma cells, and Langhans or foreign-body multinucleated Giant Cells",
        "is_correct": true
      },
      {
        "id": "path-sba-024-b",
        "text": "Sheets of viable and necrotic neutrophils surrounded by granulation tissue and purulent exudate",
        "is_correct": false
      },
      {
        "id": "path-sba-024-c",
        "text": "Clonal proliferation of CD20+ B lymphocytes with germinal center formation",
        "is_correct": false
      },
      {
        "id": "path-sba-024-e",
        "text": "Bands of dense acellular type I collagen without inflammatory cells",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-025",
    "stem": "Which cytokine secreted by macrophages is the master upstream inducer of hepatic acute-phase protein synthesis (CRP, fibrinogen, serum amyloid A)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Inflammation",
    "programme": "mbchb",
    "explanation": "IL-6 (released by macrophages stimulated by IL-1 and TNF) travels to the liver and stimulates hepatocytes to rapidly synthesize acute-phase reactant proteins: C-reactive protein (CRP), fibrinogen, haptoglobin, and serum amyloid A (SAA).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-025-e",
        "text": "Interferon-gamma (IFN-gamma)",
        "is_correct": false
      },
      {
        "id": "path-sba-025-b",
        "text": "Interleukin-12 (IL-12)",
        "is_correct": false
      },
      {
        "id": "path-sba-025-d",
        "text": "Transforming Growth Factor-beta (TGF-beta)",
        "is_correct": false
      },
      {
        "id": "path-sba-025-a",
        "text": "Interleukin-6 (IL-6)",
        "is_correct": true
      },
      {
        "id": "path-sba-025-c",
        "text": "Interleukin-4 (IL-4)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-026",
    "stem": "Granulation Tissue, the histological hallmark of tissue repair, is composed of:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Inflammation",
    "programme": "mbchb",
    "explanation": "Granulation tissue (seen 3-5 days after injury) consists of exuberant sprouting capillaries (angiogenesis mediated by VEGF and bFGF), proliferating myofibroblasts synthesizing fibronectin/collagen, and loose ground substance.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-026-d",
        "text": "A collection of liquefactive pus surrounded by a pyogenic membrane",
        "is_correct": false
      },
      {
        "id": "path-sba-026-a",
        "text": "Proliferating delicate new capillary loops (neovascularization/angiogenesis), active loose myofibroblasts, and an edematous ECM with scattered inflammatory cells",
        "is_correct": true
      },
      {
        "id": "path-sba-026-b",
        "text": "Epithelioid histiocytes and caseous necrotic debris",
        "is_correct": false
      },
      {
        "id": "path-sba-026-c",
        "text": "Dense parallel sheets of hypocellular Type I collagen fibers",
        "is_correct": false
      },
      {
        "id": "path-sba-026-e",
        "text": "Hyperplastic squamous epithelial cells forming keratin pearls",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-027",
    "stem": "What distinguishes a Hypertrophic Scar from a Keloid histologically and clinically?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Inflammation",
    "programme": "mbchb",
    "explanation": "Hypertrophic scars stay within original incision lines and usually subside over time. Keloids grow far beyond wound boundaries, contain thick, eosinophilic 'keloidal' collagen bundles, frequently recur after excision, and have high genetic predisposition in African populations.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-027-a",
        "text": "Hypertrophic scars remain confined to the original wound borders with mostly type III collagen; Keloids extend beyond the borders with broad, thick, hyalinized 'keloidal' Type I collagen bundles and do not regress",
        "is_correct": true
      },
      {
        "id": "path-sba-027-d",
        "text": "Hypertrophic scars contain foreign-body giant cells; keloids lack all cells",
        "is_correct": false
      },
      {
        "id": "path-sba-027-b",
        "text": "Hypertrophic scars occur only in dark skin; keloids occur only in elderly patients",
        "is_correct": false
      },
      {
        "id": "path-sba-027-c",
        "text": "Keloids regress spontaneously within 6 months; hypertrophic scars never regress",
        "is_correct": false
      },
      {
        "id": "path-sba-027-e",
        "text": "Keloids are caused by bacterial infection; hypertrophic scars are sterile",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-028",
    "stem": "Which anti-inflammatory cytokines are responsible for terminating the acute inflammatory response and promoting tissue repair?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Inflammation",
    "programme": "mbchb",
    "explanation": "Resolution of inflammation requires suppression of pro-inflammatory signals: TGF-beta and IL-10 (from M2 macrophages and Tregs) inhibit macrophage activation, suppress pro-inflammatory cytokine production, and stimulate tissue fibrosis.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-028-d",
        "text": "Interferon-gamma and Interleukin-12",
        "is_correct": false
      },
      {
        "id": "path-sba-028-c",
        "text": "Interleukin-8 and Leukotriene B4",
        "is_correct": false
      },
      {
        "id": "path-sba-028-e",
        "text": "Prostaglandin E2 and Bradykinin",
        "is_correct": false
      },
      {
        "id": "path-sba-028-b",
        "text": "Interleukin-1 (IL-1) and Tumor Necrosis Factor (TNF)",
        "is_correct": false
      },
      {
        "id": "path-sba-028-a",
        "text": "Transforming Growth Factor-beta (TGF-beta) and Interleukin-10 (IL-10)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-029",
    "stem": "What is the single absolute definitive histological criterion that distinguishes a Malignant neoplasm from a Benign neoplasm?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Neoplasia",
    "programme": "mbchb",
    "explanation": "Invasiveness (infiltrating normal architecture) and metastasis (spreading to distant discontinuous anatomical sites) unequivocally define a neoplasm as malignant. Benign tumors remain localized and encapsulated.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-029-e",
        "text": "Rapid gross enlargement of the mass",
        "is_correct": false
      },
      {
        "id": "path-sba-029-c",
        "text": "Focal areas of ischemic coagulative necrosis",
        "is_correct": false
      },
      {
        "id": "path-sba-029-a",
        "text": "Invasion across basement membranes into surrounding tissues and Metastasis to distant sites",
        "is_correct": true
      },
      {
        "id": "path-sba-029-d",
        "text": "Nuclear pleomorphism and prominent nucleoli",
        "is_correct": false
      },
      {
        "id": "path-sba-029-b",
        "text": "Presence of frequent normal mitotic figures",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-030",
    "stem": "What histological term denotes the complete lack of differentiation in a malignant tumor, where cells lose all morphological and functional resemblances to normal tissue?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Neoplasia",
    "programme": "mbchb",
    "explanation": "Anaplasia is dedifferentiation: the loss of structural and functional differentiation of cells, characterized by pleomorphism, hyperchromasia, high N/C ratio, giant tumor cells, and atypical tripolar/quadripolar mitoses.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-030-d",
        "text": "Hyperplasia",
        "is_correct": false
      },
      {
        "id": "path-sba-030-a",
        "text": "Anaplasia",
        "is_correct": true
      },
      {
        "id": "path-sba-030-e",
        "text": "Desmoplasia",
        "is_correct": false
      },
      {
        "id": "path-sba-030-c",
        "text": "Metaplasia",
        "is_correct": false
      },
      {
        "id": "path-sba-030-b",
        "text": "Dysplasia",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-031",
    "stem": "A benign neoplasm composed of mature architectural tissues that are abnormally organized but NATIVE to that specific anatomical site is a:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Neoplasia",
    "programme": "mbchb",
    "explanation": "A hamartoma is a benign mass of disorganized but mature specialized cells indigenous to that site (e.g., pulmonary hamartoma containing mature cartilage, fat, and epithelium). A choristoma is mature normal tissue in an abnormal ectopic site (e.g., pancreatic tissue in gastric wall).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-031-e",
        "text": "Carcinosarcoma",
        "is_correct": false
      },
      {
        "id": "path-sba-031-a",
        "text": "Hamartoma",
        "is_correct": true
      },
      {
        "id": "path-sba-031-b",
        "text": "Choristoma (heterotopia, normal mature tissue in an abnormal location)",
        "is_correct": false
      },
      {
        "id": "path-sba-031-c",
        "text": "Teratoma (derives from all three germ layers)",
        "is_correct": false
      },
      {
        "id": "path-sba-031-d",
        "text": "Adenoma",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-032",
    "stem": "Which cellular oncogene is activated by the t(8;14) reciprocal chromosomal translocation in Burkitt Lymphoma?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Neoplasia",
    "programme": "mbchb",
    "explanation": "Burkitt lymphoma is driven by the t(8;14)(q24;q32) translocation, placing the c-MYC proto-oncogene under the control of the highly active immunoglobulin heavy chain (IgH) enhancer, leading to continuous overexpression of MYC.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-032-e",
        "text": "PML-RARA (acute promyelocytic leukemia, t(15;17))",
        "is_correct": false
      },
      {
        "id": "path-sba-032-a",
        "text": "c-MYC (translocated to the Immunoglobulin Heavy Chain locus on chromosome 14)",
        "is_correct": true
      },
      {
        "id": "path-sba-032-b",
        "text": "BCL-2 (translocated in follicular lymphoma, t(14;18))",
        "is_correct": false
      },
      {
        "id": "path-sba-032-c",
        "text": "CCND1 / Cyclin D1 (translocated in mantle cell lymphoma, t(11;14))",
        "is_correct": false
      },
      {
        "id": "path-sba-032-d",
        "text": "BCR-ABL1 (Philadelphia chromosome, t(9;22))",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-033",
    "stem": "In chronic myeloid leukemia (CML), what fusion protein is generated by the Philadelphia chromosome t(9;22)(q34;q11)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Neoplasia",
    "programme": "mbchb",
    "explanation": "The Philadelphia chromosome creates the BCR-ABL1 chimeric gene, producing a constitutively active tyrosine kinase that phosphorylates downstream targets to drive uncontrolled granulocytic proliferation.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-033-d",
        "text": "EWSR1-FLI1 transcription factor",
        "is_correct": false
      },
      {
        "id": "path-sba-033-c",
        "text": "PML-RARA hybrid retinoic acid receptor",
        "is_correct": false
      },
      {
        "id": "path-sba-033-a",
        "text": "BCR-ABL1 constitutively active non-receptor tyrosine kinase",
        "is_correct": true
      },
      {
        "id": "path-sba-033-b",
        "text": "ALK-EML4 fusion kinase",
        "is_correct": false
      },
      {
        "id": "path-sba-033-e",
        "text": "TMPRSS2-ERG fusion transcript",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-034",
    "stem": "TP53, the 'guardian of the genome', prevents neoplastic transformation in response to DNA damage primarily by:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Neoplasia",
    "programme": "mbchb",
    "explanation": "DNA damage activates ATM/ATR kinases that stabilize p53. p53 binds DNA to transcribe p21 (CDK inhibitor) which halts cells in G1/S for repair; if repair fails, p53 upregulates pro-apoptotic Bax and Puma to eliminate the cell.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-034-b",
        "text": "Directly methylating oncogene promoter regions to silence transcription",
        "is_correct": false
      },
      {
        "id": "path-sba-034-e",
        "text": "Promoting angiogenesis through hypoxia-inducible factor degradation",
        "is_correct": false
      },
      {
        "id": "path-sba-034-d",
        "text": "Cleaving extracellular growth factor receptors via matrix metalloproteinases",
        "is_correct": false
      },
      {
        "id": "path-sba-034-a",
        "text": "Upregulating p21 (CDKN1A) to arrest the cell cycle in G1/S, facilitating DNA repair, or inducing apoptosis via BAX if damage is irreparable",
        "is_correct": true
      },
      {
        "id": "path-sba-034-c",
        "text": "Inactivating the Retinoblastoma (Rb) protein by hyperphosphorylation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-035",
    "stem": "According to Knudson's 'Two-Hit' Hypothesis of Retinoblastoma tumorigenesis, hereditary cases inherit:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Neoplasia",
    "programme": "mbchb",
    "explanation": "In hereditary retinoblastoma, infants inherit one defective germline RB1 copy (hit 1); a subsequent sporadic somatic mutation inactivating the remaining normal allele (hit 2) in any retinoblast initiates bilateral/multifocal retinoblastoma.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-035-c",
        "text": "A dominant gain-of-function mutation in the RET proto-oncogene",
        "is_correct": false
      },
      {
        "id": "path-sba-035-e",
        "text": "A mitochondrial DNA deletion from the mother",
        "is_correct": false
      },
      {
        "id": "path-sba-035-d",
        "text": "A chromosome translocation that activates E2F directly",
        "is_correct": false
      },
      {
        "id": "path-sba-035-b",
        "text": "Two mutated alleles simultaneously at the time of fertilization",
        "is_correct": false
      },
      {
        "id": "path-sba-035-a",
        "text": "One mutated germline RB1 allele ('first hit') in all somatic cells, requiring an acquired somatic mutation ('second hit') in a retinal cell for tumor formation",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-036",
    "stem": "What is the biochemical function of the active Retinoblastoma (Rb) protein when it is HYPOPHOSPHORYLATED?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Neoplasia",
    "programme": "mbchb",
    "explanation": "In its active, hypophosphorylated state, Rb binds and locks E2F transcription factors. Mitogenic signals cause Cyclin D-CDK4/6 complexes to hyperphosphorylate Rb, releasing E2F to transcribe genes required for S-phase entry.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-036-d",
        "text": "Degrades cyclin-dependent kinase 4 (CDK4)",
        "is_correct": false
      },
      {
        "id": "path-sba-036-c",
        "text": "Triggers immediate mitochondrial release of cytochrome c",
        "is_correct": false
      },
      {
        "id": "path-sba-036-b",
        "text": "Directly phosphorylates DNA polymerase alpha to start replication",
        "is_correct": false
      },
      {
        "id": "path-sba-036-e",
        "text": "Translocates to the cell membrane to activate cadherins",
        "is_correct": false
      },
      {
        "id": "path-sba-036-a",
        "text": "Binds and sequesters E2F transcription factors, preventing the cell from transitioning from G1 into the S-phase of the cell cycle",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-037",
    "stem": "The 'Warburg Effect' (aerobic glycolysis) in malignant tumor cells is characterized by:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Neoplasia",
    "programme": "mbchb",
    "explanation": "The Warburg effect describes the preference of cancer cells for aerobic glycolysis over oxidative phosphorylation, which produces less ATP per glucose but diverts carbon skeletons into nucleotide, lipid, and amino acid synthesis.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-037-a",
        "text": "High rates of glucose uptake and conversion to lactate via glycolysis even in the presence of abundant oxygen, providing metabolic intermediates for rapid cellular biomass accumulation",
        "is_correct": true
      },
      {
        "id": "path-sba-037-b",
        "text": "Complete shutdown of all glucose utilization with reliance on fatty acid beta-oxidation",
        "is_correct": false
      },
      {
        "id": "path-sba-037-c",
        "text": "Exclusive utilization of mitochondrial oxidative phosphorylation to maximize ATP yield per mole",
        "is_correct": false
      },
      {
        "id": "path-sba-037-d",
        "text": "Conversion of glucose into storage glycogen inside lysosomes",
        "is_correct": false
      },
      {
        "id": "path-sba-037-e",
        "text": "Inability to uptake 18F-fluorodeoxyglucose on PET imaging",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-038",
    "stem": "Which cellular mechanism allows cancer cells to attain 'Replicative Immortality' (escaping senescence and crisis)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Neoplasia",
    "programme": "mbchb",
    "explanation": "Normal cells undergo replicative senescence after ~50-70 divisions due to progressive telomere erosion (Hayflick limit). ~85-90% of human cancers upregulate telomerase reverse transcriptase (TERT) to preserve telomeres and achieve immortality.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-038-e",
        "text": "Hypermethylation of ribosomal RNA genes",
        "is_correct": false
      },
      {
        "id": "path-sba-038-c",
        "text": "Accelerated shortening of hexameric TTAGGG repeats at chromosome ends",
        "is_correct": false
      },
      {
        "id": "path-sba-038-d",
        "text": "Downregulation of vascular endothelial growth factor (VEGF)",
        "is_correct": false
      },
      {
        "id": "path-sba-038-b",
        "text": "Constitutive activation of Caspase-8",
        "is_correct": false
      },
      {
        "id": "path-sba-038-a",
        "text": "Upregulation of Telomerase (TERT) activity or alternative lengthening of telomeres (ALT), maintaining telomere length indefinitely",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-039",
    "stem": "Tumor invasion of the extracellular matrix requires cancer cells to detach from one another, which is typically mediated by down-regulation or loss of which cell-cell adhesion molecule?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Neoplasia",
    "programme": "mbchb",
    "explanation": "A crucial initial step in epithelial cancer invasion and metastasis is the disruption of homotypic cell adhesion, caused by the loss, mutational inactivation, or transcriptional repression (via Snail/Twist) of E-cadherin.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-039-a",
        "text": "E-Cadherin (epithelial-mesenchymal transition)",
        "is_correct": true
      },
      {
        "id": "path-sba-039-b",
        "text": "CD44",
        "is_correct": false
      },
      {
        "id": "path-sba-039-c",
        "text": "Type IV collagenase",
        "is_correct": false
      },
      {
        "id": "path-sba-039-e",
        "text": "Integrin alpha-v beta-3",
        "is_correct": false
      },
      {
        "id": "path-sba-039-d",
        "text": "Laminin receptor",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-040",
    "stem": "Carcinomas typically metastasize primarily via which route, in contrast to Sarcomas?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Neoplasia",
    "programme": "mbchb",
    "explanation": "Epithelial malignancies (carcinomas) follow lymphatic drainage pathways to regional sentinel lymph nodes before systemic dissemination (with exceptions: RCC, HCC, follicular thyroid carcinoma, and choriocarcinoma spread hematogenously). Mesenchymal sarcomas disseminate hematogenously.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-040-c",
        "text": "Carcinomas spread only by direct extension; Sarcomas spread exclusively via lymphatics",
        "is_correct": false
      },
      {
        "id": "path-sba-040-b",
        "text": "Carcinomas metastasize via arteries; Sarcomas metastasize via CSF",
        "is_correct": false
      },
      {
        "id": "path-sba-040-d",
        "text": "Carcinomas spread via peritoneal seeding only; Sarcomas spread by perineural invasion",
        "is_correct": false
      },
      {
        "id": "path-sba-040-e",
        "text": "Both spread through identical pathways with equal predilection for the bone marrow",
        "is_correct": false
      },
      {
        "id": "path-sba-040-a",
        "text": "Carcinomas metastasize primarily via Lymphatic vessels to regional lymph nodes; Sarcomas metastasize primarily Hematogenously (via blood) to the lungs",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-041",
    "stem": "Which tumor marker is widely utilized clinically in monitoring recurrence and therapy response in Epithelial Ovarian Carcinoma?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Neoplasia",
    "programme": "mbchb",
    "explanation": "CA-125 is an ovarian epithelial glycoprotein marker used to monitor disease progression, recurrence, and response to chemotherapy in serous epithelial ovarian carcinomas.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-041-b",
        "text": "CA 19-9 (Pancreatic and cholangiocarcinoma)",
        "is_correct": false
      },
      {
        "id": "path-sba-041-a",
        "text": "CA-125 (Cancer Antigen 125)",
        "is_correct": true
      },
      {
        "id": "path-sba-041-c",
        "text": "Alpha-fetoprotein (AFP, HCC and yolk sac tumors)",
        "is_correct": false
      },
      {
        "id": "path-sba-041-d",
        "text": "Carcinoembryonic Antigen (CEA, colorectal carcinoma)",
        "is_correct": false
      },
      {
        "id": "path-sba-041-e",
        "text": "Human Chorionic Gonadotropin (beta-hCG, choriocarcinoma)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-042",
    "stem": "Desmoplasia, frequently observed in invasive ductal breast cancer and pancreatic adenocarcinoma, refers to:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Neoplasia",
    "programme": "mbchb",
    "explanation": "Desmoplasia ('scirrhous' response) is the reactive formation of an abundant, dense fibrous or collagenous stroma by host fibroblasts in response to invading carcinoma cells, imparting a hard, stony consistency to tumors.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-042-c",
        "text": "Formation of extensive osteoid and cartilaginous matrices by the tumor",
        "is_correct": false
      },
      {
        "id": "path-sba-042-a",
        "text": "Extensive proliferation of dense, collagenous, fibrous stroma induced by tumor-derived growth factors (such as TGF-beta and PDGF)",
        "is_correct": true
      },
      {
        "id": "path-sba-042-b",
        "text": "Atypical nuclear changes within the malignant parenchymal cells",
        "is_correct": false
      },
      {
        "id": "path-sba-042-d",
        "text": "Spontaneous infarction of tumor center due to outgrowing blood supply",
        "is_correct": false
      },
      {
        "id": "path-sba-042-e",
        "text": "Loss of all cell surface antigens to escape cytotoxic T cells",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-043",
    "stem": "According to the 'Response to Injury' hypothesis, the initial inciting event in Atherogenesis is:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Vascular Pathology",
    "programme": "mbchb",
    "explanation": "Atherogenesis begins with endothelial dysfunction, which increases permeability, promotes leukocyte adhesion (VCAM-1), induces LDL entry and oxidation in the intima, and attracts monocytes that form foam cells.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-043-a",
        "text": "Chronic endothelial cell injury and dysfunction caused by hyperlipidemia, cigarette smoking, hypertension, or turbulent hemodynamic flow",
        "is_correct": true
      },
      {
        "id": "path-sba-043-b",
        "text": "Smooth muscle cell proliferation in the tunica media",
        "is_correct": false
      },
      {
        "id": "path-sba-043-c",
        "text": "Direct infection of the aortic adventitia by Chlamydia pneumoniae",
        "is_correct": false
      },
      {
        "id": "path-sba-043-d",
        "text": "Precipitation of calcium hydroxyapatite within the internal elastic lamina",
        "is_correct": false
      },
      {
        "id": "path-sba-043-e",
        "text": "Spontaneous rupture of the vasa vasorum in young healthy individuals",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-044",
    "stem": "What is the key cellular constituent of the Atherosclerotic Fatty Streak seen in early atherogenesis?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Vascular Pathology",
    "programme": "mbchb",
    "explanation": "Fatty streaks (visible in children <10 years) are flat, yellow intimal lesions composed of foam cells: monocyte-derived macrophages that have engulfed oxidized LDL via scavenger receptors (CD36, SR-A).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-044-a",
        "text": "Foam cells (lipid-laden macrophages and smooth muscle cells that have ingested oxidized LDL particles)",
        "is_correct": true
      },
      {
        "id": "path-sba-044-b",
        "text": "Aggregates of dense multinucleated foreign-body giant cells",
        "is_correct": false
      },
      {
        "id": "path-sba-044-d",
        "text": "Clusters of proliferating endothelial cells forming new vascular beds",
        "is_correct": false
      },
      {
        "id": "path-sba-044-e",
        "text": "Fibrinoid thrombi with extensive neutrophilic infiltration",
        "is_correct": false
      },
      {
        "id": "path-sba-044-c",
        "text": "Thick layers of acellular hyalinized type I collagen",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-045",
    "stem": "A 'Vulnerable' (unstable) atherosclerotic plaque, prone to acute rupture and thrombosis, is characterized histologically by:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Vascular Pathology",
    "programme": "mbchb",
    "explanation": "Vulnerable plaques possess a thin fibrous cap weakened by macrophage-derived matrix metalloproteinases (MMPs), a large necrotic core (>40% of plaque volume), and prominent inflammation, making them highly susceptible to rupture.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-045-d",
        "text": "Absence of any intraplaque neovascularization",
        "is_correct": false
      },
      {
        "id": "path-sba-045-b",
        "text": "A thick, densely collagenized fibrous cap with minimal lipid and zero inflammation",
        "is_correct": false
      },
      {
        "id": "path-sba-045-a",
        "text": "A thin fibrous cap, a large soft lipid-rich necrotic core, and abundant active inflammatory cells (macrophages and T-cells)",
        "is_correct": true
      },
      {
        "id": "path-sba-045-c",
        "text": "Extensive calcification throughout the entire media with intact endothelium",
        "is_correct": false
      },
      {
        "id": "path-sba-045-e",
        "text": "Concentric smooth muscle hypertrophy without lipid accumulation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-046",
    "stem": "Hyaline Arteriolosclerosis is characteristically associated with which two systemic medical conditions?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Vascular Pathology",
    "programme": "mbchb",
    "explanation": "Hyaline arteriolosclerosis features homogeneous, pink, eosinophilic thickening of arteriolar walls with luminal narrowing due to extravasated plasma proteins and increased ECM synthesis, classically seen in benign hypertension and diabetes (nephrosclerosis).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-046-a",
        "text": "Benign Essential Hypertension and Longstanding Diabetes Mellitus",
        "is_correct": true
      },
      {
        "id": "path-sba-046-b",
        "text": "Malignant (accelerated) hypertension and systemic scleroderma",
        "is_correct": false
      },
      {
        "id": "path-sba-046-c",
        "text": "Tertiary syphilis and polyarteritis nodosa",
        "is_correct": false
      },
      {
        "id": "path-sba-046-d",
        "text": "Giant cell arteritis and Takayasu arteritis",
        "is_correct": false
      },
      {
        "id": "path-sba-046-e",
        "text": "Kawasaki disease and Henoch-Schönlein purpura",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-047",
    "stem": "Hyperplastic Arteriolosclerosis, displaying the pathognomonic 'onion-skin' concentric laminate thickening of arteriolar walls, is characteristic of:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Vascular Pathology",
    "programme": "mbchb",
    "explanation": "Hyperplastic arteriolosclerosis is a hallmark of severe, acute malignant hypertension. Arteriolar walls show concentric, laminated 'onion-skin' thickening composed of duplicated basement membranes and smooth muscle cells, often accompanied by necrotizing arteriolitis.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-047-a",
        "text": "Malignant (accelerated) Hypertension with diastolic blood pressure > 120 mmHg",
        "is_correct": true
      },
      {
        "id": "path-sba-047-e",
        "text": "Fibromuscular dysplasia",
        "is_correct": false
      },
      {
        "id": "path-sba-047-d",
        "text": "Monckeberg medial calcific sclerosis",
        "is_correct": false
      },
      {
        "id": "path-sba-047-b",
        "text": "Benign essential hypertension of 20 years duration",
        "is_correct": false
      },
      {
        "id": "path-sba-047-c",
        "text": "Atherosclerosis of large elastic conducting arteries",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-048",
    "stem": "Mönckeberg Medial Sclerosis is distinguished from atherosclerosis because Mönckeberg sclerosis:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Vascular Pathology",
    "programme": "mbchb",
    "explanation": "Mönckeberg sclerosis involves dystrophic calcification within the tunica media of medium-sized muscular arteries (radial, tibial) in elderly individuals. It does not involve the intima, preserves the vessel lumen, and is clinically benign (though causes rigid 'pipe-stem' vessels).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-048-c",
        "text": "Is caused by immune complex deposition in small post-capillary venules",
        "is_correct": false
      },
      {
        "id": "path-sba-048-d",
        "text": "Produces large aneurysms in the ascending thoracic aorta",
        "is_correct": false
      },
      {
        "id": "path-sba-048-e",
        "text": "Is accompanied by dense granulomatous inflammation and giant cells",
        "is_correct": false
      },
      {
        "id": "path-sba-048-b",
        "text": "Causes total thrombotic occlusion of coronary arteries in young athletes",
        "is_correct": false
      },
      {
        "id": "path-sba-048-a",
        "text": "Involves dystrophic ring-like calcification of the tunica media in muscular arteries of the elderly without luminal narrowing or clinical ischemia",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-049",
    "stem": "Aortic Dissection (aortic hematoma) is initiated by which primary pathological lesion in the aortic wall?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Vascular Pathology",
    "programme": "mbchb",
    "explanation": "Aortic dissection occurs when a tear in the intima allows blood to enter the media at high pressure, cleaving the laminar planes of the degenerate aortic media (cystic medial necrosis, common in hypertension and Marfan syndrome).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-049-e",
        "text": "Autoimmune destruction of the internal elastic lamina exclusively",
        "is_correct": false
      },
      {
        "id": "path-sba-049-a",
        "text": "An intimal tear leading to blood dissecting through a degenerate tunica media (Cystic Medial Degeneration)",
        "is_correct": true
      },
      {
        "id": "path-sba-049-b",
        "text": "Rupture of an atherosclerotic plaque in the abdominal aorta",
        "is_correct": false
      },
      {
        "id": "path-sba-049-c",
        "text": "Septic embolization to the vasa vasorum producing transmural infarction",
        "is_correct": false
      },
      {
        "id": "path-sba-049-d",
        "text": "Direct invasion of the aortic wall by malignant squamous cells",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-050",
    "stem": "Which anatomical location is the MOST common site for an Atherosclerotic Aortic Aneurysm?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Vascular Pathology",
    "programme": "mbchb",
    "explanation": "Abdominal aortic aneurysms (AAAs) typically occur in the infrarenal abdominal aorta (between renal arteries and iliac bifurcation), where the aortic media is thin and lacks significant vasa vasorum, making it vulnerable to ischemic damage beneath atherosclerotic plaques.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-050-e",
        "text": "Right coronary sinus of Valsalva",
        "is_correct": false
      },
      {
        "id": "path-sba-050-d",
        "text": "Descending thoracic aorta between T4 and T8",
        "is_correct": false
      },
      {
        "id": "path-sba-050-c",
        "text": "Aortic arch across the carotid origins",
        "is_correct": false
      },
      {
        "id": "path-sba-050-b",
        "text": "Ascending thoracic aorta (classically tertiary syphilis)",
        "is_correct": false
      },
      {
        "id": "path-sba-050-a",
        "text": "Abdominal aorta below the level of the renal arteries and above the aortic bifurcation",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-051",
    "stem": "Giant Cell (Temporal) Arteritis typically involves which vessels, and what is its pathognomonic biopsy finding?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Vascular Pathology",
    "programme": "mbchb",
    "explanation": "Giant cell arteritis is a chronic granulomatous vasculitis of large to medium arteries in patients >50 years, preferentially affecting branches of the external carotid. Biopsy reveals granulomas, fragmentation of the internal elastic lamina, and giant cells.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-051-e",
        "text": "Aorta and pulmonary artery branches in young Asian females under age 40",
        "is_correct": false
      },
      {
        "id": "path-sba-051-d",
        "text": "Pulmonary capillaries; characterized by neutrophilic capillaritis",
        "is_correct": false
      },
      {
        "id": "path-sba-051-c",
        "text": "Coronary arteries of infants; characterized by coronary aneurysms",
        "is_correct": false
      },
      {
        "id": "path-sba-051-b",
        "text": "Renal and visceral arterioles; characterized by fibrinoid necrosis without giant cells",
        "is_correct": false
      },
      {
        "id": "path-sba-051-a",
        "text": "Medium and large branches of the carotid artery (especially temporal, ophthalmic, and vertebral arteries); characterized by transmural granulomatous inflammation, fragmented internal elastic lamina, and multinucleated giant cells",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-052",
    "stem": "Takayasu Arteritis ('Pulseless Disease') is distinguished from Giant Cell Arteritis by which demographic and anatomical features?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Vascular Pathology",
    "programme": "mbchb",
    "explanation": "Takayasu arteritis is a granulomatous vasculitis of the aortic arch and its main branches, causing marked fibrous thickening of the aortic wall, stenosis of brachiocephalic origins, and weak/absent upper extremity pulses in young women (<40 years).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-052-e",
        "text": "Is associated with positive c-ANCA (PR3-ANCA) in 95% of cases",
        "is_correct": false
      },
      {
        "id": "path-sba-052-d",
        "text": "Affects small muscular arterioles in the lower extremities of heavy smokers",
        "is_correct": false
      },
      {
        "id": "path-sba-052-c",
        "text": "Occurs in newborns and causes immediate aortic valve stenosis",
        "is_correct": false
      },
      {
        "id": "path-sba-052-b",
        "text": "Affects exclusively men >70 years old and involves solely intracranial cerebral capillaries",
        "is_correct": false
      },
      {
        "id": "path-sba-052-a",
        "text": "Affects young females (<40 years old, often of Asian descent) and involves the aortic arch and its major branch vessels",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-053",
    "stem": "Polyarteritis Nodosa (PAN) is characterized histologically by which vascular lesion and spares which major vascular bed?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Vascular Pathology",
    "programme": "mbchb",
    "explanation": "PAN is a systemic necrotizing vasculitis of medium-sized muscular arteries (renal, mesenteric, coronary) displaying lesions of varying ages (fibrinoid necrosis to fibrous scarring, producing 'string of pearls' aneurysms) that strictly spares pulmonary vessels.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-053-e",
        "text": "Obliterative endarteritis of the aortic root with tree-barking",
        "is_correct": false
      },
      {
        "id": "path-sba-053-a",
        "text": "Transmural necrotizing inflammation of medium-sized muscular arteries with fibrinoid necrosis, characteristically SPARING the pulmonary circulation",
        "is_correct": true
      },
      {
        "id": "path-sba-053-b",
        "text": "Granulomatous inflammation of large elastic arteries including the pulmonary trunk",
        "is_correct": false
      },
      {
        "id": "path-sba-053-d",
        "text": "Leukocytoclastic vasculitis restricted exclusively to the lung parenchyma",
        "is_correct": false
      },
      {
        "id": "path-sba-053-c",
        "text": "Non-inflammatory intimal hyperplasia of large thoracic veins",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-054",
    "stem": "Kawasaki Disease (Mucocutaneous Lymph Node Syndrome) in children is associated with a catastrophic risk of which cardiovascular complication if untreated with IVIG?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Vascular Pathology",
    "programme": "mbchb",
    "explanation": "Kawasaki disease is an acute febrile vasculitis in infants and young children (<5 years). Without prompt intravenous immunoglobulin (IVIG) and aspirin, ~20-25% develop coronary artery aneurysms that can thrombose or rupture.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-054-d",
        "text": "Mitral valve chordal rupture and prolapse",
        "is_correct": false
      },
      {
        "id": "path-sba-054-c",
        "text": "Severe coarctation of the abdominal aorta",
        "is_correct": false
      },
      {
        "id": "path-sba-054-a",
        "text": "Coronary artery aneurysms and thrombosis, leading to myocardial infarction",
        "is_correct": true
      },
      {
        "id": "path-sba-054-e",
        "text": "Complete heart block from SA node calcification",
        "is_correct": false
      },
      {
        "id": "path-sba-054-b",
        "text": "Thoracic aortic dissection type A",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-055",
    "stem": "Granulomatosis with Polyangiitis (GPA / Wegener's) is classically associated with which serological antibody and which clinicopathological triad?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Vascular Pathology",
    "programme": "mbchb",
    "explanation": "GPA presents with a triad: 1) necrotizing granulomas of respiratory tract (sinusitis, cavitary lung lesions); 2) necrotizing vasculitis of small vessels; 3) focal necrotizing/crescentic glomerulonephritis. Strongly associated with c-ANCA (anti-PR3).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-055-a",
        "text": "PR3-ANCA (c-ANCA); necrotizing granulomas of upper/lower respiratory tracts, systemic necrotizing vasculitis, and crescentic glomerulonephritis",
        "is_correct": true
      },
      {
        "id": "path-sba-055-b",
        "text": "MPO-ANCA (p-ANCA); asthma, peripheral eosinophilia, and extravascular granulomas",
        "is_correct": false
      },
      {
        "id": "path-sba-055-e",
        "text": "Anti-centromere antibodies; CREST syndrome and telangiectasias",
        "is_correct": false
      },
      {
        "id": "path-sba-055-c",
        "text": "Anti-GBM antibodies; pulmonary alveolar hemorrhage and linear IgG deposition",
        "is_correct": false
      },
      {
        "id": "path-sba-055-d",
        "text": "Anti-cardiolipin antibodies; recurrent venous thrombosis and thrombocytopenia",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-056",
    "stem": "Thromboangiitis Obliterans (Buerger Disease) is an inflammatory, thrombosing vasculitis of medium and small arteries and veins that characteristically occurs in:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Vascular Pathology",
    "programme": "mbchb",
    "explanation": "Buerger disease is a segmental, sharply demarcated, acute and chronic transmural vasculitis of small- and medium-sized arteries (tibial, radial) with cellular thrombi and microabscesses, exclusively seen in heavy tobacco smokers.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-056-c",
        "text": "Infants with congenital syphilis",
        "is_correct": false
      },
      {
        "id": "path-sba-056-d",
        "text": "Patients undergoing chronic renal hemodialysis",
        "is_correct": false
      },
      {
        "id": "path-sba-056-b",
        "text": "Elderly diabetic females with hyperlipidemia",
        "is_correct": false
      },
      {
        "id": "path-sba-056-a",
        "text": "Heavy cigarette smokers under 45 years of age, causing severe claudication, Raynaud phenomenon, and gangrene of digits",
        "is_correct": true
      },
      {
        "id": "path-sba-056-e",
        "text": "Patients with systemic lupus erythematosus receiving high-dose steroids",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-057",
    "stem": "What is the earliest histological change identifiable in the myocardium by light microscopy following acute myocardial infarction (MI)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Cardiac Pathology",
    "programme": "mbchb",
    "explanation": "The earliest histologic finding of acute ischemia (1-3 hours) is wavy fibers (stretching of non-contractile dead myocytes by neighboring contracting myocardium). Contraction band necrosis appears if reperfusion occurs.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-057-b",
        "text": "Extensive infiltration of neutrophils with liquefactive necrosis",
        "is_correct": false
      },
      {
        "id": "path-sba-057-e",
        "text": "Myocyte vacuolation with prominent nuclear enlargement",
        "is_correct": false
      },
      {
        "id": "path-sba-057-a",
        "text": "Wavy myocardial fibers at the border of the ischemic zone (appearing at 1 to 3 hours post-occlusion)",
        "is_correct": true
      },
      {
        "id": "path-sba-057-d",
        "text": "Dense collagenous scar replacement",
        "is_correct": false
      },
      {
        "id": "path-sba-057-c",
        "text": "Disintegration of dead myofibers by macrophages",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-058",
    "stem": "At what time window following an acute transmural myocardial infarction does dense Neutrophilic infiltration peak?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Cardiac Pathology",
    "programme": "mbchb",
    "explanation": "Coagulative necrosis with loss of nuclei and cross-striations begins at 4-12 hours; dense neutrophilic infiltration with interstitial edema peaks between 1 and 3 days post-MI.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-058-e",
        "text": "2 months later",
        "is_correct": false
      },
      {
        "id": "path-sba-058-d",
        "text": "3 to 6 weeks post-infarction",
        "is_correct": false
      },
      {
        "id": "path-sba-058-c",
        "text": "7 to 10 days post-infarction",
        "is_correct": false
      },
      {
        "id": "path-sba-058-b",
        "text": "Within the first 30 minutes",
        "is_correct": false
      },
      {
        "id": "path-sba-058-a",
        "text": "1 to 3 days post-infarction",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-059",
    "stem": "At what time frame post-MI is the risk of Myocardial Rupture (free wall, ventricular septum, or papillary muscle) at its absolute MAXIMUM?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Cardiac Pathology",
    "programme": "mbchb",
    "explanation": "Days 3-7 post-MI feature maximal softening of the infarct zone ('myomalacia cordis'): abundant macrophages have degraded dead myofilaments while new granulation tissue collagen has not yet formed strong tensile strength.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-059-c",
        "text": "12 to 24 hours post-infarction",
        "is_correct": false
      },
      {
        "id": "path-sba-059-a",
        "text": "3 to 7 days post-infarction (when macrophage phagocytosis has softened the necrotic myocardium while collagen synthesis is minimal)",
        "is_correct": true
      },
      {
        "id": "path-sba-059-e",
        "text": "6 months post-infarction",
        "is_correct": false
      },
      {
        "id": "path-sba-059-b",
        "text": "Within the first 6 hours post-infarction",
        "is_correct": false
      },
      {
        "id": "path-sba-059-d",
        "text": "2 to 3 weeks post-infarction",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-060",
    "stem": "What are the pathognomonic histological lesions of Acute Rheumatic Heart Disease found within the myocardium?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Cardiac Pathology",
    "programme": "mbchb",
    "explanation": "Aschoff bodies are pathognomonic of rheumatic myocarditis: perivascular inflammatory foci of fibrinoid necrosis surrounded by lymphocytes, plasma cells, and Anitschkow cells ('caterpillar cells' with wavy ribbons of chromatin).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-060-a",
        "text": "Aschoff Bodies (foci of fibrinoid necrosis surrounded by Anitschkow cells and multinucleated Aschoff giant cells)",
        "is_correct": true
      },
      {
        "id": "path-sba-060-d",
        "text": "Large gelatinous myxoma cells embedded in abundant acid mucopolysaccharide",
        "is_correct": false
      },
      {
        "id": "path-sba-060-e",
        "text": "Non-bacterial verrucous vegetations along lines of valve closure without inflammation",
        "is_correct": false
      },
      {
        "id": "path-sba-060-c",
        "text": "Diffuse neutrophilic microabscesses with bacterial colonies",
        "is_correct": false
      },
      {
        "id": "path-sba-060-b",
        "text": "Granulomas with central caseation surrounded by epithelioid histiocytes",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-061",
    "stem": "Which cardiac valve is most frequently and severely deformed by Chronic Rheumatic Heart Disease, and what is the classic gross appearance?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Cardiac Pathology",
    "programme": "mbchb",
    "explanation": "Chronic rheumatic heart disease affects the mitral valve in >95% of cases (isolated or with aortic valve), producing classic fibrous thickening of leaflets, fusion of commissures, and thick, shortened chordae tendineae ('fish-mouth' stenosis).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-061-e",
        "text": "Mitral valve; displaying floppy redundant ballooning leaflets",
        "is_correct": false
      },
      {
        "id": "path-sba-061-d",
        "text": "Pulmonary valve; displaying subvalvular infundibular stenosis",
        "is_correct": false
      },
      {
        "id": "path-sba-061-c",
        "text": "Tricuspid valve; displaying complete leaflet agenesis",
        "is_correct": false
      },
      {
        "id": "path-sba-061-b",
        "text": "Aortic valve; displaying bicuspid calcification without commissural fusion",
        "is_correct": false
      },
      {
        "id": "path-sba-061-a",
        "text": "Mitral valve; displaying 'fish-mouth' or 'buttonhole' stenosis due to fibrous commissural fusion and chordal shortening",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-062",
    "stem": "In Infective Endocarditis, the characteristic friable, bulky, destructive valvular Vegetations consist histologically of:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Cardiac Pathology",
    "programme": "mbchb",
    "explanation": "Infective endocarditis vegetations are large, bulky, friable masses on valve leaflets composed of platelets, fibrin meshwork, abundant neutrophils, and embedded colonies of viable microorganisms that destroy underlying leaflet tissue.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-062-d",
        "text": "Sheets of malignant endothelial cells forming vascular channels",
        "is_correct": false
      },
      {
        "id": "path-sba-062-c",
        "text": "Sterile immune complex aggregates with extensive calcification",
        "is_correct": false
      },
      {
        "id": "path-sba-062-e",
        "text": "Proliferating fibroblasts and dense type I collagen bundles",
        "is_correct": false
      },
      {
        "id": "path-sba-062-b",
        "text": "Acellular platelet-fibrin thrombi devoid of any microorganisms (NBTE)",
        "is_correct": false
      },
      {
        "id": "path-sba-062-a",
        "text": "Fibrin, inflammatory cells (predominantly neutrophils), and large bacterial or fungal colonies",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-063",
    "stem": "Non-Bacterial Thrombotic Endocarditis (NBTE / Marantic Endocarditis) is classically associated with which systemic disorders?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Cardiac Pathology",
    "programme": "mbchb",
    "explanation": "NBTE (marantic endocarditis) features small, non-destructive, sterile platelet-fibrin thrombi along valve closure lines in patients with advanced malignancies (Trousseau syndrome/mucin-producing adenocarcinomas) or severe sepsis/DIC.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-063-a",
        "text": "Mucin-secreting Adenocarcinomas (e.g. pancreatic, gastric) and other hypercoagulable wasting states",
        "is_correct": true
      },
      {
        "id": "path-sba-063-b",
        "text": "Severe bacterial sepsis with Staphylococcus aureus",
        "is_correct": false
      },
      {
        "id": "path-sba-063-e",
        "text": "Primary hyperparathyroidism with severe hypercalcemia",
        "is_correct": false
      },
      {
        "id": "path-sba-063-c",
        "text": "Acute rheumatic fever in children",
        "is_correct": false
      },
      {
        "id": "path-sba-063-d",
        "text": "Congenital heart disease with left-to-right shunts",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-064",
    "stem": "Libman-Sacks Endocarditis is a non-bacterial verrucous endocarditis characterized by vegetations located on:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Cardiac Pathology",
    "programme": "mbchb",
    "explanation": "Libman-Sacks endocarditis occurs in SLE and antiphospholipid syndrome: small, sterile, bead-like verrucous vegetations develop on either surface of valve leaflets (classically mitral/aortic), including the undersurface.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-064-a",
        "text": "Both the flow and non-flow (underside) surfaces of valve leaflets and chordae tendineae, seen in Systemic Lupus Erythematosus (SLE)",
        "is_correct": true
      },
      {
        "id": "path-sba-064-b",
        "text": "Exclusively the ventricular side of the aortic semilunar valve",
        "is_correct": false
      },
      {
        "id": "path-sba-064-c",
        "text": "Exclusively the atrial side of the tricuspid valve in IV drug users",
        "is_correct": false
      },
      {
        "id": "path-sba-064-e",
        "text": "The epicardium overlying transmural myocardial infarctions",
        "is_correct": false
      },
      {
        "id": "path-sba-064-d",
        "text": "The coronary sinus ostium in acute pericarditis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-065",
    "stem": "What histological hallmark defines Hypertrophic Cardiomyopathy (HCM) in the interventricular septum?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Cardiac Pathology",
    "programme": "mbchb",
    "explanation": "HCM (caused by autosomal dominant mutations in sarcomeric proteins such as MYH7 and MYBPC3) shows disproportionate asymmetric septal hypertrophy with haphazard, criss-cross 'myofiber disarray' and interstitial collagenous fibrosis.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-065-c",
        "text": "Diffuse lymphocytic infiltration with myocyte necrosis (viral myocarditis)",
        "is_correct": false
      },
      {
        "id": "path-sba-065-e",
        "text": "Massive intracellular accumulation of iron in perinuclear zones",
        "is_correct": false
      },
      {
        "id": "path-sba-065-a",
        "text": "Marked myofiber hypertrophy, extreme disorganized branching ('myofiber disarray'), and prominent interstitial fibrosis",
        "is_correct": true
      },
      {
        "id": "path-sba-065-b",
        "text": "Extensive replacement of right ventricular myocardium by adipose tissue and fibrosis",
        "is_correct": false
      },
      {
        "id": "path-sba-065-d",
        "text": "Extracellular deposition of amorphous Congo red-positive amyloid fibrils",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-066",
    "stem": "Arrhythmogenic Right Ventricular Cardiomyopathy (ARVC) is characterized histologically by:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Cardiac Pathology",
    "programme": "mbchb",
    "explanation": "ARVC (associated with desmosomal gene mutations such as plakoglobin and desmoplakin) features progressive loss of RV myocardium and transmural fatty and fibrofatty replacement, predisposing to fatal ventricular arrhythmias.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-066-c",
        "text": "Massive deposition of glycogen within giant lysosomes (Pompe disease)",
        "is_correct": false
      },
      {
        "id": "path-sba-066-a",
        "text": "Progressive loss of right ventricular myocytes with extensive replacement by Adipose and Fibrous tissue",
        "is_correct": true
      },
      {
        "id": "path-sba-066-d",
        "text": "Multiple caseating granulomas in the interventricular conduction bundle",
        "is_correct": false
      },
      {
        "id": "path-sba-066-e",
        "text": "Extensive neutrophilic microabscesses in the free ventricular wall",
        "is_correct": false
      },
      {
        "id": "path-sba-066-b",
        "text": "Concentric left ventricular hypertrophy with endocardial fibroelastosis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-067",
    "stem": "Which viral pathogen is the MOST common cause of infectious Myocarditis in North America and Europe?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Cardiac Pathology",
    "programme": "mbchb",
    "explanation": "Coxsackieviruses A and B and other enteroviruses are the most common cause of acute viral myocarditis, showing interstitial edema, lymphocytic infiltrates, and patchy myocyte necrosis.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-067-a",
        "text": "Coxsackievirus B (and other Enteroviruses)",
        "is_correct": true
      },
      {
        "id": "path-sba-067-d",
        "text": "Respiratory syncytial virus",
        "is_correct": false
      },
      {
        "id": "path-sba-067-b",
        "text": "Herpes simplex virus type 1",
        "is_correct": false
      },
      {
        "id": "path-sba-067-e",
        "text": "Rabies virus",
        "is_correct": false
      },
      {
        "id": "path-sba-067-c",
        "text": "Hepatitis A virus",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-068",
    "stem": "Cardiac Amyloidosis produces which physiological type of cardiomyopathy?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Cardiac Pathology",
    "programme": "mbchb",
    "explanation": "Amyloid fibril deposition (AL from plasma cell myeloma or ATTR from transthyretin) in the myocardial interstitium stiffens the ventricular walls, producing a restrictive cardiomyopathy with impaired diastolic filling.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-068-c",
        "text": "Hypertrophic obstructive cardiomyopathy with asymmetric septal bulge",
        "is_correct": false
      },
      {
        "id": "path-sba-068-a",
        "text": "Restrictive Cardiomyopathy (rigid myocardium with impaired ventricular diastolic relaxation and filling)",
        "is_correct": true
      },
      {
        "id": "path-sba-068-e",
        "text": "Ischemic cardiomyopathy secondary to epicardial coronary occlusion",
        "is_correct": false
      },
      {
        "id": "path-sba-068-d",
        "text": "High-output cardiomyopathy with low peripheral resistance",
        "is_correct": false
      },
      {
        "id": "path-sba-068-b",
        "text": "Dilated cardiomyopathy with ejection fraction < 20%",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-069",
    "stem": "What is the MOST common primary tumor of the adult human heart?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Cardiac Pathology",
    "programme": "mbchb",
    "explanation": "Cardiac myxomas account for ~50% of adult primary benign cardiac neoplasms: ~90% arise in the atria (left atrium > right atrium), presenting as a gelatinous pedunculated mass attached to the fossa ovalis that can obstruct the mitral valve.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-069-a",
        "text": "Myxoma (typically located in the Left Atrium near the fossa ovalis)",
        "is_correct": true
      },
      {
        "id": "path-sba-069-b",
        "text": "Rhabdomyoma (most common in infants, linked to tuberous sclerosis)",
        "is_correct": false
      },
      {
        "id": "path-sba-069-c",
        "text": "Lipoma of the interatrial septum",
        "is_correct": false
      },
      {
        "id": "path-sba-069-d",
        "text": "Angiosarcoma of the right atrium",
        "is_correct": false
      },
      {
        "id": "path-sba-069-e",
        "text": "Papillary fibroelastoma of the aortic valve",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-070",
    "stem": "Cardiac Rhabdomyomas in pediatric patients are strongly associated with which neurocutaneous genetic disorder?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Cardiac Pathology",
    "programme": "mbchb",
    "explanation": "Cardiac rhabdomyoma is the most common primary cardiac tumor of infancy/childhood; >50% are associated with tuberous sclerosis (TSC1/TSC2). Histologically, they contain characteristic clear, glycogen-rich 'spider cells'.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-070-a",
        "text": "Tuberous Sclerosis Complex (mutations in TSC1/hamartin or TSC2/tuberin)",
        "is_correct": true
      },
      {
        "id": "path-sba-070-e",
        "text": "Ataxia-telangiectasia",
        "is_correct": false
      },
      {
        "id": "path-sba-070-b",
        "text": "Neurofibromatosis type 1 (NF1)",
        "is_correct": false
      },
      {
        "id": "path-sba-070-c",
        "text": "Von Hippel-Lindau disease (VHL)",
        "is_correct": false
      },
      {
        "id": "path-sba-070-d",
        "text": "Sturge-Weber syndrome",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-071",
    "stem": "What is the primary histological defining feature of Barrett's Oesophagus on mucosal biopsy?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "GI Pathology",
    "programme": "mbchb",
    "explanation": "Barrett's oesophagus is a complication of chronic GERD: normal non-keratinized stratified squamous epithelium is replaced by metaplastic columnar epithelium containing intestinal-type goblet cells (Alcian blue positive), which carries risk of adenocarcinoma.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-071-c",
        "text": "Hypertrophy of submucosal Brunner's glands",
        "is_correct": false
      },
      {
        "id": "path-sba-071-d",
        "text": "Extensive mucosal erosion with dense eosinophilic microabscesses",
        "is_correct": false
      },
      {
        "id": "path-sba-071-b",
        "text": "Complete squamous dysplasia with keratin pearl formation",
        "is_correct": false
      },
      {
        "id": "path-sba-071-e",
        "text": "Replacement of epithelium by transitional umbrella cells",
        "is_correct": false
      },
      {
        "id": "path-sba-071-a",
        "text": "Specialized Intestinal Metaplasia: replacement of esophageal stratified squamous epithelium by columnar epithelium with distinct Intestinal Goblet Cells",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-072",
    "stem": "Which morphological type of Esophageal Carcinoma is most strongly associated with chronic gastro-oesophageal reflux disease (GERD) and obesity, typically located in the distal third?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "GI Pathology",
    "programme": "mbchb",
    "explanation": "Adenocarcinoma arises in the distal third of the oesophagus on a background of Barrett's metaplasia driven by GERD and obesity. Squamous cell carcinoma predominates in the upper and middle thirds and is linked to tobacco and alcohol.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-072-d",
        "text": "Gastrointestinal stromal tumor (GIST)",
        "is_correct": false
      },
      {
        "id": "path-sba-072-e",
        "text": "Leiomyosarcoma",
        "is_correct": false
      },
      {
        "id": "path-sba-072-c",
        "text": "Small cell neuroendocrine carcinoma",
        "is_correct": false
      },
      {
        "id": "path-sba-072-b",
        "text": "Squamous Cell Carcinoma (linked to smoking, alcohol, hot tea; upper/middle third)",
        "is_correct": false
      },
      {
        "id": "path-sba-072-a",
        "text": "Adenocarcinoma",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-073",
    "stem": "Chronic Gastritis caused by Helicobacter pylori is characteristically located in which anatomical stomach region and shows which inflammatory infiltrate?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "GI Pathology",
    "programme": "mbchb",
    "explanation": "H. pylori gastritis predominantly affects the gastric antrum: biopsy reveals spiral curved rods in mucosal mucus, neutrophils in the glandular epithelium ('active' inflammation), and dense mononuclear lamina propria infiltrates with germinal centers.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-073-a",
        "text": "Antrum-predominant; characterized by intraepithelial neutrophils (activity) and lamina propria plasma cells, lymphocytes, and lymphoid follicles",
        "is_correct": true
      },
      {
        "id": "path-sba-073-b",
        "text": "Fundus and body; characterized by complete parietal cell destruction and anti-IF antibodies (Autoimmune gastritis)",
        "is_correct": false
      },
      {
        "id": "path-sba-073-e",
        "text": "Parietal cell hyperplasia with non-cleaved blast cells",
        "is_correct": false
      },
      {
        "id": "path-sba-073-d",
        "text": "Diffuse pyloric hypertrophy without any cellular inflammation",
        "is_correct": false
      },
      {
        "id": "path-sba-073-c",
        "text": "Cardia exclusively; characterized by multinucleated giant cells",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-074",
    "stem": "What histological changes characterize Autoimmune Metaplastic Atrophic Gastritis (AMAG)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "GI Pathology",
    "programme": "mbchb",
    "explanation": "Autoimmune gastritis involves CD4+ T-cell and autoantibody-mediated destruction of parietal cells in the gastric body and fundus (sparing the antrum), leading to achlorhydria, high gastrin, ECL hyperplasia, and pernicious anemia.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-074-e",
        "text": "Hypertrophy of fundic folds with excessive mucus secretion (Ménétrier disease)",
        "is_correct": false
      },
      {
        "id": "path-sba-074-c",
        "text": "Massive transmural granulomas with cobblestone appearance",
        "is_correct": false
      },
      {
        "id": "path-sba-074-a",
        "text": "Destruction of parietal and chief cells in the body and fundus, sparing the antrum, with intestinal metaplasia and linear enterochromaffin-like (ECL) cell hyperplasia",
        "is_correct": true
      },
      {
        "id": "path-sba-074-d",
        "text": "Fibrinoid necrosis of muscularis propria without mucosal loss",
        "is_correct": false
      },
      {
        "id": "path-sba-074-b",
        "text": "Extensive erosion of the antral mucosa with abundant H. pylori on the surface",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-075",
    "stem": "Signet Ring Cell Carcinoma of the stomach (Diffuse type, linitis plastica) is characterized histologically and genetically by:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "GI Pathology",
    "programme": "mbchb",
    "explanation": "Diffuse gastric carcinoma (Lauren classification) features discohesive malignant cells caused by CDH1/E-cadherin loss; intracellular mucin displaces the nucleus eccentrically ('signet-ring' cell). Infiltration stiffens the wall ('linitis plastica').",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-075-c",
        "text": "Overexpression of beta-catenin in polypoid exophytic masses",
        "is_correct": false
      },
      {
        "id": "path-sba-075-e",
        "text": "Absence of all mucin with neurosecretory dense-core granules",
        "is_correct": false
      },
      {
        "id": "path-sba-075-b",
        "text": "Amplification of HER2/neu forming well-formed glandular acini with apical microvilli",
        "is_correct": false
      },
      {
        "id": "path-sba-075-a",
        "text": "Loss of E-cadherin (CDH1 mutations), with discohesive cells containing large intracytoplasmic mucin vacuoles that displace the nucleus to the periphery",
        "is_correct": true
      },
      {
        "id": "path-sba-075-d",
        "text": "Infiltration of the muscular wall by clonal plasma cells producing kappa light chains",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-076",
    "stem": "Gastrointestinal Stromal Tumors (GIST) arise from which specialized cells of the bowel wall and harbor gain-of-function mutations in:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "GI Pathology",
    "programme": "mbchb",
    "explanation": "GISTs are mesenchymal neoplasms arising from the interstitial cells of Cajal. ~85% harbor oncogenic activating mutations in KIT (CD117, a receptor tyrosine kinase) and ~10% in PDGFRA, making them responsive to imatinib.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-076-d",
        "text": "Smooth muscle myocytes of muscularis externa; desmin gene",
        "is_correct": false
      },
      {
        "id": "path-sba-076-a",
        "text": "Interstitial Cells of Cajal (pacemaker cells); KIT (CD117) or PDGFRA receptor tyrosine kinase genes",
        "is_correct": true
      },
      {
        "id": "path-sba-076-b",
        "text": "Mucosal goblet cells; APC tumor suppressor gene",
        "is_correct": false
      },
      {
        "id": "path-sba-076-c",
        "text": "Submucosal ganglion cells; RET proto-oncogene",
        "is_correct": false
      },
      {
        "id": "path-sba-076-e",
        "text": "Vascular endothelial cells; FLT1 (VEGFR1) gene",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-077",
    "stem": "Celiac Disease is diagnosed on duodenal endoscopic biopsy by which classic histological triad (Marsh criteria)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "GI Pathology",
    "programme": "mbchb",
    "explanation": "Celiac disease shows immune-mediated mucosal damage in the duodenum/jejunum triggered by dietary gluten: increased intraepithelial CD8+ lymphocytes, regenerative crypt hyperplasia, and loss of villi (blunting/atrophy).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-077-d",
        "text": "Periodic Acid-Schiff (PAS)-positive diastase-resistant foamy macrophages in lamina propria",
        "is_correct": false
      },
      {
        "id": "path-sba-077-a",
        "text": "Intraepithelial lymphocytosis (>25 lymphocytes per 100 enterocytes), crypt hyperplasia, and villous blunting/atrophy",
        "is_correct": true
      },
      {
        "id": "path-sba-077-c",
        "text": "Mucosal pseudomembranes composed of fibrin and necrotic neutrophils",
        "is_correct": false
      },
      {
        "id": "path-sba-077-b",
        "text": "Transmural non-caseating granulomas, fissure ulcers, and submucosal edema",
        "is_correct": false
      },
      {
        "id": "path-sba-077-e",
        "text": "Thick subepithelial collagen band > 10 micrometers with surface epithelial sloughing",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-078",
    "stem": "Whipple Disease is diagnosed histologically by which distinctive finding on small bowel biopsy?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "GI Pathology",
    "programme": "mbchb",
    "explanation": "Whipple disease (caused by the actinomycete Tropheryma whipplei) features small intestinal lamina propria distended by foamy macrophages filled with PAS-positive, diastase-resistant bacterial glycoprotein remnants.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-078-d",
        "text": "Multiple superficial erosions covered by eosinophilic fibrinous exudates",
        "is_correct": false
      },
      {
        "id": "path-sba-078-c",
        "text": "Dense aggregates of acid-fast bacilli inside Langhans giant cells",
        "is_correct": false
      },
      {
        "id": "path-sba-078-e",
        "text": "Transmural inflammation with skip lesions and lymphoid aggregates",
        "is_correct": false
      },
      {
        "id": "path-sba-078-b",
        "text": "Marked atrophy of villi with normal lamina propria macrophages",
        "is_correct": false
      },
      {
        "id": "path-sba-078-a",
        "text": "Lamina propria packed with foamy macrophages containing abundant Periodic Acid-Schiff (PAS)-positive, diastase-resistant bacillary inclusions (Tropheryma whipplei)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-079",
    "stem": "What are the pathognomonic histological features distinguishing Crohn's Disease from Ulcerative Colitis?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "GI Pathology",
    "programme": "mbchb",
    "explanation": "Crohn's disease features transmural inflammation (all layers), discontinuous skip lesions anywhere in GI tract (terminal ileum most common), non-caseating granulomas (in 35%), deep fissures, and 'creeping fat'. UC is continuous and mucosal.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-079-e",
        "text": "Concentric submucosal calcification with absence of lymphocytes",
        "is_correct": false
      },
      {
        "id": "path-sba-079-d",
        "text": "Caseating necrosis with extensive granulomatous destruction of the muscularis externa",
        "is_correct": false
      },
      {
        "id": "path-sba-079-c",
        "text": "Complete mucosal atrophy with pseudomembranes and spared muscularis",
        "is_correct": false
      },
      {
        "id": "path-sba-079-b",
        "text": "Inflammation strictly limited to mucosa and submucosa, continuous disease from rectum, and crypt abscesses",
        "is_correct": false
      },
      {
        "id": "path-sba-079-a",
        "text": "Transmural inflammation, Skip lesions, non-caseating granulomas, deep knife-like fissure ulcers, and submucosal fibrosis",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-080",
    "stem": "Which histological features characterize active Ulcerative Colitis on mucosal biopsy?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "GI Pathology",
    "programme": "mbchb",
    "explanation": "Ulcerative colitis is characterized by diffuse, continuous inflammation limited to the mucosa and submucosa starting at the rectum and extending proximally, featuring crypt architectural distortion, cryptitis, crypt abscesses, and inflammatory pseudopolyps.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-080-d",
        "text": "Skip areas of normal mucosa interspersed with affected segments",
        "is_correct": false
      },
      {
        "id": "path-sba-080-c",
        "text": "Non-caseating granulomas located within the deep muscularis externa",
        "is_correct": false
      },
      {
        "id": "path-sba-080-a",
        "text": "Continuous mucosal and submucosal inflammation beginning in the rectum, Crypt Abscesses (neutrophils in crypt lumens), crypt architectural distortion, and Pseudopolyps",
        "is_correct": true
      },
      {
        "id": "path-sba-080-e",
        "text": "Obliteration of the mesenteric fat by fibroblastic hyperplasia",
        "is_correct": false
      },
      {
        "id": "path-sba-080-b",
        "text": "Transmural inflammation with deep linear knife-like fissures",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-081",
    "stem": "In the Adenoma-Carcinoma Sequence of colorectal carcinogenesis, what is the initial 'gatekeeper' genetic mutation?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "GI Pathology",
    "programme": "mbchb",
    "explanation": "The classic chromosomal instability pathway of CRC begins with loss of the APC tumor suppressor gene (first hit germline in FAP, sporadic in 80% of CRC), leading to beta-catenin accumulation and nuclear transcription of proliferation genes.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-081-a",
        "text": "Inactivation or loss of both alleles of the APC (Adenomatous Polyposis Coli) tumor suppressor gene on chromosome 5q21",
        "is_correct": true
      },
      {
        "id": "path-sba-081-c",
        "text": "Loss of p53 (TP53) on chromosome 17p",
        "is_correct": false
      },
      {
        "id": "path-sba-081-d",
        "text": "Loss of SMAD4 (18q deletion)",
        "is_correct": false
      },
      {
        "id": "path-sba-081-e",
        "text": "Epigenetic silencing of the MLH1 DNA mismatch repair gene",
        "is_correct": false
      },
      {
        "id": "path-sba-081-b",
        "text": "Activating mutation in KRAS oncogene on chromosome 12p",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-082",
    "stem": "Familial Adenomatous Polyposis (FAP) is an autosomal dominant disorder caused by germline mutations in APC that leads to:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "GI Pathology",
    "programme": "mbchb",
    "explanation": "Classic FAP requires at least 100 colorectal adenomatous polyps for diagnosis (often thousands). Malignant transformation to colorectal adenocarcinoma is virtually 100% without prophylactic total colectomy.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-082-a",
        "text": "Hundreds to thousands of colorectal adenomatous polyps developing by adolescence, with a 100% risk of colorectal carcinoma by age 40 to 50 if left untreated",
        "is_correct": true
      },
      {
        "id": "path-sba-082-e",
        "text": "Mucocutaneous melanotic pigmentation with benign small bowel hamartomas",
        "is_correct": false
      },
      {
        "id": "path-sba-082-b",
        "text": "Development of 1 to 5 hamartomatous polyps with zero cancer risk",
        "is_correct": false
      },
      {
        "id": "path-sba-082-c",
        "text": "Multiple juvenile polyps in the stomach with pulmonary arteriovenous malformations",
        "is_correct": false
      },
      {
        "id": "path-sba-082-d",
        "text": "Diffuse ganglioneuromatosis of the entire gastrointestinal tract",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-083",
    "stem": "Lynch Syndrome (Hereditary Non-Polyposis Colorectal Cancer, HNPCC) is caused by germline mutations in which DNA repair pathway?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "GI Pathology",
    "programme": "mbchb",
    "explanation": "Lynch syndrome is caused by germline defects in DNA mismatch repair (MMR) genes (MLH1, MSH2 most common). Failure to correct replication errors in repetitive microsatellite sequences produces microsatellite instability (MSI-H).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-083-e",
        "text": "Non-Homologous End Joining (NHEJ) genes (Ku70, Ku80)",
        "is_correct": false
      },
      {
        "id": "path-sba-083-d",
        "text": "Homologous Recombination Repair genes (BRCA1, BRCA2)",
        "is_correct": false
      },
      {
        "id": "path-sba-083-c",
        "text": "Base Excision Repair (BER) genes (MUTYH)",
        "is_correct": false
      },
      {
        "id": "path-sba-083-b",
        "text": "Nucleotide Excision Repair (NER) genes (XPA-XPG)",
        "is_correct": false
      },
      {
        "id": "path-sba-083-a",
        "text": "DNA Mismatch Repair (MMR) genes (MLH1, MSH2, MSH6, PMS2), leading to Microsatellite Instability (MSI)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-084",
    "stem": "Pseudomembranous Colitis, commonly triggered by clindamycin or broad-spectrum antibiotic therapy, is caused by Clostridioides difficile toxins and characterized histologically by:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "GI Pathology",
    "programme": "mbchb",
    "explanation": "C. difficile toxins A and B cause mucosal necrosis: punctate epithelial erosions erupt neutrophils, mucin, and fibrin ('volcano lesions') that coalesce into adherent, yellow-green inflammatory pseudomembranes.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-084-c",
        "text": "Extensive caseating granulomas with Langhans giant cells",
        "is_correct": false
      },
      {
        "id": "path-sba-084-d",
        "text": "Submucosal infiltration of thousands of eosinophils",
        "is_correct": false
      },
      {
        "id": "path-sba-084-a",
        "text": "Volcano-like' eruptions of neutrophils, dead epithelial cells, and fibrin from damaged colonic crypts, forming a plaque-like pseudomembrane over the mucosal surface",
        "is_correct": true
      },
      {
        "id": "path-sba-084-b",
        "text": "Transmural coagulative necrosis of the muscular wall with gas cysts",
        "is_correct": false
      },
      {
        "id": "path-sba-084-e",
        "text": "Thick subepithelial band of hyalinized collagen",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-085",
    "stem": "What are the three cardinal histological components defining Cirrhosis of the liver?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Liver Pathology",
    "programme": "mbchb",
    "explanation": "Cirrhosis is a diffuse process characterized by: 1) bridging fibrous septa (bands linking portal tracts to each other and central veins); 2) parenchymal regenerative nodules created by hepatocyte replication; 3) architectural disruption of the entire liver.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-085-e",
        "text": "Massive portal venous thrombosis with normal hepatic parenchyma",
        "is_correct": false
      },
      {
        "id": "path-sba-085-c",
        "text": "Macrovesicular steatosis affecting > 50% of hepatocytes with intact lobules",
        "is_correct": false
      },
      {
        "id": "path-sba-085-b",
        "text": "Focal fibrous scarring confined to the capsule without regenerative nodules",
        "is_correct": false
      },
      {
        "id": "path-sba-085-d",
        "text": "Extensive bile duct proliferation without any fibrous tissue deposition",
        "is_correct": false
      },
      {
        "id": "path-sba-085-a",
        "text": "Diffuse bridging fibrous septa, parenchymal Regenerative Nodules of hepatocytes, and disruption of normal vascular and lobular architecture throughout the entire liver",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-086",
    "stem": "What is the primary cellular source of excess collagen (Types I and III) deposition in hepatic fibrosis and cirrhosis?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Liver Pathology",
    "programme": "mbchb",
    "explanation": "Following chronic injury, quiescent vitamin A-storing stellate cells in the space of Disse are activated by cytokines (TGF-beta, PDGF) released by Kupffer cells and hepatocytes, transforming into proliferative, fibrogenic myofibroblasts.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-086-b",
        "text": "Kupffer cells residing inside the sinusoidal lumens",
        "is_correct": false
      },
      {
        "id": "path-sba-086-e",
        "text": "Hepatocytes undergoing ballooning degeneration",
        "is_correct": false
      },
      {
        "id": "path-sba-086-c",
        "text": "Endothelial cells of the central vein",
        "is_correct": false
      },
      {
        "id": "path-sba-086-d",
        "text": "Bile duct cholangiocytes in portal triads",
        "is_correct": false
      },
      {
        "id": "path-sba-086-a",
        "text": "Activated Hepatic Stellate Cells (Ito cells) in the Space of Disse, which transdifferentiate into myofibroblasts under TGF-beta stimulation",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-087",
    "stem": "What histological triad characterizes Alcoholic Steatohepatitis on liver biopsy?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Liver Pathology",
    "programme": "mbchb",
    "explanation": "Alcoholic hepatitis features: 1) hepatocyte ballooning and necrosis; 2) Mallory-Denk bodies (ubiquitinated cytokeratins); 3) neutrophilic infiltrates surrounding injured hepatocytes; 4) perisinusoidal/pericellular 'chicken-wire' fibrosis.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-087-e",
        "text": "Massive intracellular iron accumulation within Kupffer cells only",
        "is_correct": false
      },
      {
        "id": "path-sba-087-a",
        "text": "Hepatocyte ballooning degeneration, Mallory-Denk bodies, and Neutrophilic infiltration surrounding ballooned hepatocytes, often with perisinusoidal 'chicken-wire' fibrosis",
        "is_correct": true
      },
      {
        "id": "path-sba-087-d",
        "text": "Extensive plasma cell infiltrates forming interface hepatitis with piecemeal necrosis",
        "is_correct": false
      },
      {
        "id": "path-sba-087-b",
        "text": "Diffuse portal granulomas, bile duct loss, and dense lymphocytic infiltrates",
        "is_correct": false
      },
      {
        "id": "path-sba-087-c",
        "text": "Pure macrovesicular steatosis without any necrosis or inflammation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-088",
    "stem": "Hereditary Haemochromatosis is an autosomal recessive disorder caused by mutations in which gene, leading to systemic iron overload?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Liver Pathology",
    "programme": "mbchb",
    "explanation": "Hereditary haemochromatosis is most often caused by the C282Y mutation in HFE, which impairs hepcidin synthesis, resulting in unrestricted intestinal iron absorption and excessive parenchymal iron deposition (liver, pancreas, heart, joints).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-088-d",
        "text": "HAMP gene encoding hepcidin exclusively",
        "is_correct": false
      },
      {
        "id": "path-sba-088-a",
        "text": "HFE gene (most commonly the C282Y mutation on chromosome 6p)",
        "is_correct": true
      },
      {
        "id": "path-sba-088-b",
        "text": "ATP7B gene on chromosome 13q (Wilson disease)",
        "is_correct": false
      },
      {
        "id": "path-sba-088-e",
        "text": "SLC40A1 gene encoding ferroportin",
        "is_correct": false
      },
      {
        "id": "path-sba-088-c",
        "text": "SERPINA1 gene on chromosome 14q (Alpha-1-antitrypsin deficiency)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-089",
    "stem": "In liver biopsy sections, which special histochemical stain confirms the presence of excessive Ferric Iron (hemosiderin) deposits by turning them bright blue?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Liver Pathology",
    "programme": "mbchb",
    "explanation": "Prussian blue (Perls' acid ferrocyanide) reaction binds ferric ions (Fe3+) in hemosiderin, producing an insoluble bright blue pigment (potassium ferric ferrocyanide), distinguishing iron from lipofuscin or bile.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-089-d",
        "text": "Masson's Trichrome (collagen fibrosis)",
        "is_correct": false
      },
      {
        "id": "path-sba-089-c",
        "text": "Periodic Acid-Schiff (PAS) with diastase (alpha-1-antitrypsin globules)",
        "is_correct": false
      },
      {
        "id": "path-sba-089-e",
        "text": "Congo Red under polarized light (amyloid)",
        "is_correct": false
      },
      {
        "id": "path-sba-089-b",
        "text": "Rhodanine or Orcein stain (copper deposits)",
        "is_correct": false
      },
      {
        "id": "path-sba-089-a",
        "text": "Prussian Blue (Perls' stain)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-090",
    "stem": "Wilson Disease (Hepatolenticular Degeneration) is caused by mutations in which gene, and what is its primary pathophysiology?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Liver Pathology",
    "programme": "mbchb",
    "explanation": "Wilson disease is an autosomal recessive defect in the ATP7B copper-transporting P-type ATPase, impairing hepatic biliary copper excretion. Toxic free copper accumulates in liver, brain (basal ganglia), and cornea (Kayser-Fleischer rings).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-090-b",
        "text": "ATP7A gene; failure of copper absorption from the intestine (Menkes disease)",
        "is_correct": false
      },
      {
        "id": "path-sba-090-a",
        "text": "ATP7B gene (copper-transporting ATPase); failure of copper excretion into bile and failure of incorporation into ceruloplasmin, leading to toxic copper accumulation",
        "is_correct": true
      },
      {
        "id": "path-sba-090-c",
        "text": "HFE gene; unregulated intestinal iron absorption",
        "is_correct": false
      },
      {
        "id": "path-sba-090-d",
        "text": "CFTR gene; abnormal chloride conductance in bile ductules",
        "is_correct": false
      },
      {
        "id": "path-sba-090-e",
        "text": "ALDOB gene; toxic accumulation of fructose-1-phosphate",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-091",
    "stem": "On liver biopsy, Alpha-1-Antitrypsin (AAT) Deficiency is diagnosed by identifying which characteristic cytoplasmic inclusions in periportal hepatocytes?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Liver Pathology",
    "programme": "mbchb",
    "explanation": "In PiZZ AAT deficiency, mutant misfolded alpha-1-antitrypsin protein forms polymers that become trapped in the rough ER of periportal hepatocytes, visible as characteristic PAS-positive, diastase-resistant globules.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-091-b",
        "text": "Mallory-Denk cytokeratin bodies that dissolve with diastase",
        "is_correct": false
      },
      {
        "id": "path-sba-091-a",
        "text": "Round-to-oval cytoplasmic globules that are Periodic Acid-Schiff (PAS) POSITIVE and DIASTASE-RESISTANT",
        "is_correct": true
      },
      {
        "id": "path-sba-091-d",
        "text": "Rhodanine-positive copper granules in the perivenular zones",
        "is_correct": false
      },
      {
        "id": "path-sba-091-e",
        "text": "Clear lipid vacuoles that dissolve in routine paraffin processing",
        "is_correct": false
      },
      {
        "id": "path-sba-091-c",
        "text": "Prussian blue-positive granular iron deposits",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-092",
    "stem": "Autoimmune Hepatitis is characterized histologically by which prominent inflammatory pattern?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Liver Pathology",
    "programme": "mbchb",
    "explanation": "Autoimmune hepatitis shows intense portal and periportal mononuclear infiltrates rich in plasma cells that breach the limiting plate to destroy surrounding hepatocytes (interface hepatitis / piecemeal necrosis).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-092-e",
        "text": "Massive infiltration of eosinophils around the portal vein branches",
        "is_correct": false
      },
      {
        "id": "path-sba-092-d",
        "text": "Concentric 'onion-skin' fibrosis surrounding interlobular bile ducts",
        "is_correct": false
      },
      {
        "id": "path-sba-092-c",
        "text": "Non-suppurative granulomatous destruction of medium-sized intrahepatic bile ducts",
        "is_correct": false
      },
      {
        "id": "path-sba-092-b",
        "text": "Neutrophils concentrated around central veins with perivenular fibrosis",
        "is_correct": false
      },
      {
        "id": "path-sba-092-a",
        "text": "Dense portal and periportal infiltrates composed predominantly of Plasma Cells, with Interface Hepatitis (piecemeal necrosis)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-093",
    "stem": "Primary Biliary Cholangitis (PBC) is characterized serologically and histologically by:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Liver Pathology",
    "programme": "mbchb",
    "explanation": "PBC is an autoimmune disease typically affecting middle-aged women, characterized by circulating anti-mitochondrial antibodies (AMA) targeting pyruvate dehydrogenase and T-cell-mediated granulomatous destruction of intrahepatic interlobular bile ducts.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-093-e",
        "text": "Anti-LKM1 antibodies; selective centrilobular hepatocyte necrosis",
        "is_correct": false
      },
      {
        "id": "path-sba-093-c",
        "text": "Anti-smooth muscle antibodies (ASMA); diffuse interface hepatitis with plasma cells",
        "is_correct": false
      },
      {
        "id": "path-sba-093-b",
        "text": "Positive p-ANCA; 'onion-skin' concentric periductal fibrosis affecting large and extrahepatic bile ducts",
        "is_correct": false
      },
      {
        "id": "path-sba-093-a",
        "text": "Anti-Mitochondrial Antibodies (AMA in >95% of patients); chronic granulomatous destruction of medium-sized interlobular bile ducts ('florid duct lesion')",
        "is_correct": true
      },
      {
        "id": "path-sba-093-d",
        "text": "High serum IgG4 levels; lymphoplasmacytic sclerosing cholangitis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-094",
    "stem": "Primary Sclerosing Cholangitis (PSC) is strongly associated with which chronic inflammatory disease and displays which distinctive histological feature?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Liver Pathology",
    "programme": "mbchb",
    "explanation": "PSC is an obliterative fibro-inflammatory disease of both intra- and extrahepatic bile ducts, strongly associated with ulcerative colitis (~70%). It features concentric periductal 'onion-skin' fibrosis, segmental stenosis, and beaded appearance on MRCP.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-094-a",
        "text": "Ulcerative Colitis (seen in ~70-80% of patients); concentric 'onion-skin' periductal fibrosis leading to obliterative cholangitis and 'beaded' biliary strictures",
        "is_correct": true
      },
      {
        "id": "path-sba-094-b",
        "text": "Crohn's disease; caseating granulomas within portal veins",
        "is_correct": false
      },
      {
        "id": "path-sba-094-d",
        "text": "Rheumatoid arthritis; necrotizing vasculitis of the hepatic artery",
        "is_correct": false
      },
      {
        "id": "path-sba-094-e",
        "text": "Systemic lupus erythematosus; non-bacterial verrucous biliary vegetations",
        "is_correct": false
      },
      {
        "id": "path-sba-094-c",
        "text": "Celiac disease; intraepithelial duodenal lymphocytosis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-095",
    "stem": "Hepatocellular Carcinoma (HCC) is most commonly driven globally by which major risk factors?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Liver Pathology",
    "programme": "mbchb",
    "explanation": "Over 80% of HCCs occur on a background of cirrhosis. The leading global risk factors are chronic viral hepatitis (HBV integrates directly into host genome; HCV causes chronic necroinflammation), alcohol, NAFLD/NASH, and aflatoxin B1 (causes TP53 codon 249 mutation).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-095-d",
        "text": "Infection with Epstein-Barr virus (EBV)",
        "is_correct": false
      },
      {
        "id": "path-sba-095-c",
        "text": "Excessive dietary intake of vitamin A",
        "is_correct": false
      },
      {
        "id": "path-sba-095-e",
        "text": "Chronic cytomegalovirus (CMV) infection",
        "is_correct": false
      },
      {
        "id": "path-sba-095-a",
        "text": "Chronic Hepatitis B (HBV) infection, Chronic Hepatitis C (HCV) infection, Cirrhosis of any etiology, and exposure to Aflatoxin B1",
        "is_correct": true
      },
      {
        "id": "path-sba-095-b",
        "text": "Oral contraceptive use alone in young healthy females",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-096",
    "stem": "Fibrolamellar Carcinoma is a distinctive subtype of Hepatocellular Carcinoma that differs from conventional HCC because it:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Liver Pathology",
    "programme": "mbchb",
    "explanation": "Fibrolamellar carcinoma arises in young patients without cirrhosis or traditional risk factors (normal AFP), driven by a DNAJB1-PRKACA fusion. Histology shows large polygonal oncocytic hepatocytes surrounded by dense lamellar fibrous bands.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-096-a",
        "text": "Occurs in young adults (20-40 years) with NO underlying cirrhosis or HBV/HCV, presenting as a single scirrhous mass containing oncocytic hepatocytes embedded in dense parallel lamellar collagen bands",
        "is_correct": true
      },
      {
        "id": "path-sba-096-d",
        "text": "Rapidly metastasizes to the skin with 100% mortality in 3 months",
        "is_correct": false
      },
      {
        "id": "path-sba-096-e",
        "text": "Is caused by Epstein-Barr virus infection",
        "is_correct": false
      },
      {
        "id": "path-sba-096-b",
        "text": "Occurs exclusively in elderly cirrhotic males with elevated serum AFP",
        "is_correct": false
      },
      {
        "id": "path-sba-096-c",
        "text": "Is composed of small neuroendocrine cells with salt-and-pepper chromatin",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-097",
    "stem": "Hepatic Adenoma in a young woman with a history of oral contraceptive use carries a significant risk of which life-threatening acute complication?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Liver Pathology",
    "programme": "mbchb",
    "explanation": "Hepatic adenomas are benign hepatocyte neoplasms strongly associated with oral contraceptive steroids. Subcapsular adenomas can rupture during pregnancy or menses, causing life-threatening intraperitoneal hemorrhage.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-097-a",
        "text": "Spontaneous rupture and massive intra-abdominal hemorrhage (hemoperitoneum), as well as potential malignant transformation into HCC (especially beta-catenin mutated subtype)",
        "is_correct": true
      },
      {
        "id": "path-sba-097-b",
        "text": "Acute fulminant hepatic failure from widespread parenchymal infarction",
        "is_correct": false
      },
      {
        "id": "path-sba-097-c",
        "text": "Direct compression of the common bile duct causing biliary cirrhosis",
        "is_correct": false
      },
      {
        "id": "path-sba-097-d",
        "text": "Invasion into the inferior vena cava with Budd-Chiari syndrome",
        "is_correct": false
      },
      {
        "id": "path-sba-097-e",
        "text": "Thrombosis of the main portal trunk with esophageal variceal rupture",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-098",
    "stem": "In Budd-Chiari Syndrome (Hepatic Venous Outflow Obstruction), what is the characteristic histological finding in the liver?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Liver Pathology",
    "programme": "mbchb",
    "explanation": "Budd-Chiari syndrome is caused by thrombosis of two or more major hepatic veins. Obstruction causes intense passive congestion, hemorrhage, and atrophy/necrosis of hepatocytes in the centrilobular zones (Zone 3), where venous drainage is impaired.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-098-a",
        "text": "Severe centrilobular (Zone 3) sinusoidal congestion, hemorrhage, and necrosis with sparing of periportal (Zone 1) parenchyma",
        "is_correct": true
      },
      {
        "id": "path-sba-098-b",
        "text": "Massive ischemic coagulative necrosis restricted entirely to Zone 1",
        "is_correct": false
      },
      {
        "id": "path-sba-098-e",
        "text": "Diffuse subcapsular calcification with normal central veins",
        "is_correct": false
      },
      {
        "id": "path-sba-098-c",
        "text": "Extensive bile duct proliferation in portal tracts with microabscesses",
        "is_correct": false
      },
      {
        "id": "path-sba-098-d",
        "text": "Complete loss of all Kupffer cells with intact hepatocytes",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-099",
    "stem": "Post-Streptococcal Glomerulonephritis (PSGN) is characterized by which light microscopy, immunofluorescence, and electron microscopy findings?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Renal Pathology",
    "programme": "mbchb",
    "explanation": "PSGN (occurring 1-4 weeks after streptococcal pharyngitis/impetigo) shows: 1) diffuse endocapillary hypercellularity with neutrophils; 2) granular 'starry sky' IgG and C3 along capillary walls and mesangium; 3) large subepithelial electron-dense 'humps' on EM.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-099-a",
        "text": "Diffuse proliferative/endocapillary hypercellularity on LM; coarse granular 'starry-sky' deposits of IgG and C3 on IF; subepithelial 'humps' on EM",
        "is_correct": true
      },
      {
        "id": "path-sba-099-b",
        "text": "Normal glomeruli on LM; negative IF; diffuse podocyte foot process effacement on EM",
        "is_correct": false
      },
      {
        "id": "path-sba-099-e",
        "text": "Mesangial IgA deposits on IF; focal segmental glomerulosclerosis on LM",
        "is_correct": false
      },
      {
        "id": "path-sba-099-c",
        "text": "Linear IgG along GBM on IF; extensive crescents on LM; no deposits on EM",
        "is_correct": false
      },
      {
        "id": "path-sba-099-d",
        "text": "Subendothelial deposits with 'wire-loop' lesions on LM; full-house IF",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-100",
    "stem": "Rapidly Progressive Glomerulonephritis (RPGN / Crescentic GN) is characterized by Crescents in Bowman's space composed of:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Renal Pathology",
    "programme": "mbchb",
    "explanation": "Crescents form when rupture of the glomerular capillary wall releases plasma proteins (fibrin) and inflammatory mediators into Bowman's space, stimulating proliferation of parietal epithelial cells and recruitment of monocytes/macrophages.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-100-d",
        "text": "Calcified amyloid fibrils and immune complex complexes",
        "is_correct": false
      },
      {
        "id": "path-sba-100-c",
        "text": "Dense sheets of proliferating endothelial cells and neutrophils",
        "is_correct": false
      },
      {
        "id": "path-sba-100-b",
        "text": "Aggregates of detached necrotic podocytes and Tamm-Horsfall proteins",
        "is_correct": false
      },
      {
        "id": "path-sba-100-e",
        "text": "Infiltrating plasma cells producing light chains",
        "is_correct": false
      },
      {
        "id": "path-sba-100-a",
        "text": "Proliferating parietal epithelial cells, infiltrating monocytes/macrophages, and fibrin strands",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-101",
    "stem": "Goodpasture Syndrome (Anti-GBM Disease) is characterized by which immunofluorescence pattern along the glomerular capillary basement membrane?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Renal Pathology",
    "programme": "mbchb",
    "explanation": "Goodpasture syndrome involves pathogenic autoantibodies against the non-collagenous domain (NC1) of the alpha-3 chain of Type IV collagen, producing a diagnostic smooth, ribbon-like linear pattern of IgG on immunofluorescence.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-101-c",
        "text": "Coarse mesangial granular deposition of IgA",
        "is_correct": false
      },
      {
        "id": "path-sba-101-b",
        "text": "Granular 'lumpy-bumpy' deposition of IgG and C3",
        "is_correct": false
      },
      {
        "id": "path-sba-101-d",
        "text": "Subepithelial granular deposits of IgG4",
        "is_correct": false
      },
      {
        "id": "path-sba-101-e",
        "text": "Complete absence of any immune deposits ('pauci-immune')",
        "is_correct": false
      },
      {
        "id": "path-sba-101-a",
        "text": "Smooth, continuous, LINEAR deposition of IgG and C3",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-102",
    "stem": "Membranous Nephropathy is the most common cause of primary nephrotic syndrome in Caucasian adults and is characterized on renal biopsy by:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Renal Pathology",
    "programme": "mbchb",
    "explanation": "Primary membranous nephropathy (often caused by autoantibodies against the M-type phospholipase A2 receptor, PLA2R) shows subepithelial immune deposits separated by basement membrane projections ('spikes') on silver stain.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-102-a",
        "text": "Diffuse thickening of the glomerular capillary wall on LM; granular subepithelial IgG and C3 on IF; subepithelial electron-dense deposits with 'Spike and Dome' appearance on silver stain",
        "is_correct": true
      },
      {
        "id": "path-sba-102-d",
        "text": "Splitting of the basement membrane into a 'tram-track' pattern on silver stain",
        "is_correct": false
      },
      {
        "id": "path-sba-102-e",
        "text": "Segmental sclerosis of glomeruli with hyalinosis in the corticomedullary junction",
        "is_correct": false
      },
      {
        "id": "path-sba-102-b",
        "text": "Effacement of foot processes with completely normal basement membranes",
        "is_correct": false
      },
      {
        "id": "path-sba-102-c",
        "text": "Mesangial expansion with nodular Kimmelstiel-Wilson lesions",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-103",
    "stem": "Membranoproliferative Glomerulonephritis (MPGN Type I) displays which pathognomonic basement membrane abnormality on silver stain?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Renal Pathology",
    "programme": "mbchb",
    "explanation": "MPGN Type I features subendothelial immune complex deposits and mesangial cell proliferation; mesangial cellular processes extend into capillary walls, splitting the basement membrane to produce a 'tram-track' or double-contour appearance.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-103-a",
        "text": "Double-contour ('tram-track') appearance caused by mesangial cell interposition into the subendothelial space",
        "is_correct": true
      },
      {
        "id": "path-sba-103-d",
        "text": "Basket-weave lamellation and fragmentation of the lamina densa",
        "is_correct": false
      },
      {
        "id": "path-sba-103-e",
        "text": "Complete disintegration of the basement membrane with no matrix",
        "is_correct": false
      },
      {
        "id": "path-sba-103-c",
        "text": "Smooth continuous linear thickening without splitting",
        "is_correct": false
      },
      {
        "id": "path-sba-103-b",
        "text": "Spike-and-dome projections along the epithelial surface",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-104",
    "stem": "Dense Deposit Disease (formerly MPGN Type II) is caused by which autoimmune antibody that leads to dysregulation of the alternative complement pathway?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Renal Pathology",
    "programme": "mbchb",
    "explanation": "Dense deposit disease is characterized by dense, ribbon-like intramembranous electron-dense deposits in the lamina densa. Driven by C3NeF autoantibodies that stabilize C3 convertase, leading to unchecked alternative pathway activation and hypocomplementemia.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-104-b",
        "text": "Anti-PLA2R antibodies",
        "is_correct": false
      },
      {
        "id": "path-sba-104-c",
        "text": "Anti-proteinase 3 antibodies (c-ANCA)",
        "is_correct": false
      },
      {
        "id": "path-sba-104-d",
        "text": "Anti-nuclear antibodies (ANA)",
        "is_correct": false
      },
      {
        "id": "path-sba-104-e",
        "text": "Anti-streptolysin O (ASO)",
        "is_correct": false
      },
      {
        "id": "path-sba-104-a",
        "text": "C3 Nephritic Factor (C3NeF, an autoantibody that stabilizes C3 convertase C3bBb, causing continuous complement activation)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-105",
    "stem": "IgA Nephropathy (Berger Disease), the most common primary glomerulonephritis worldwide, typically presents with:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Renal Pathology",
    "programme": "mbchb",
    "explanation": "IgA nephropathy classically presents in young adults with macroscopic hematuria occurring during or within 1-2 days of a mucosal infection (synpharyngitic, unlike PSGN which occurs weeks later). Biopsy shows mesangial IgA and C3 deposits.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-105-a",
        "text": "Recurrent episodes of gross or microscopic hematuria following an upper respiratory or gastrointestinal infection (synpharyngitic hematuria), with prominent mesangial IgA deposits",
        "is_correct": true
      },
      {
        "id": "path-sba-105-b",
        "text": "Massive proteinuria developing 3 weeks after an impetigo skin infection",
        "is_correct": false
      },
      {
        "id": "path-sba-105-c",
        "text": "Painless gross hematuria in a 65-year-old smoker with a pelvic mass",
        "is_correct": false
      },
      {
        "id": "path-sba-105-e",
        "text": "Nephrotic syndrome with sudden onset after bee sting in a child",
        "is_correct": false
      },
      {
        "id": "path-sba-105-d",
        "text": "Acute oliguric renal failure with hemoptysis and linear IgG",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-106",
    "stem": "What is the pathognomonic renal histological lesion of advanced Diabetic Nephropathy (Diabetic Glomerulosclerosis)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Renal Pathology",
    "programme": "mbchb",
    "explanation": "Diabetic nephropathy features diffuse mesangial matrix expansion, basement membrane thickening, and nodular glomerulosclerosis (Kimmelstiel-Wilson lesions: acellular, PAS-positive nodular masses within the mesangial core).",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-106-e",
        "text": "Granulomas with Langhans giant cells in the renal medulla",
        "is_correct": false
      },
      {
        "id": "path-sba-106-d",
        "text": "Linear IgG deposition along the tubular basement membranes",
        "is_correct": false
      },
      {
        "id": "path-sba-106-c",
        "text": "Crescentic proliferation filling Bowman's space",
        "is_correct": false
      },
      {
        "id": "path-sba-106-b",
        "text": "Subepithelial humps with starry-sky immunofluorescence",
        "is_correct": false
      },
      {
        "id": "path-sba-106-a",
        "text": "Kimmelstiel-Wilson nodules (nodular glomerulosclerosis: round, laminated, eosinophilic, PAS-positive mesangial matrix expansions)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "path-sba-107",
    "stem": "In Renal Amyloidosis, what are the characteristic tinctorial and optical properties of the amyloid deposits?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Renal Pathology",
    "programme": "mbchb",
    "explanation": "Amyloid deposits (beta-pleated sheets) accumulate in glomeruli, vessels, and interstitium. Congo red dye intercalates between the beta-pleated sheets, producing characteristic apple-green birefringence under cross-polarized light.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-107-d",
        "text": "Bright blue staining with Prussian blue under brightfield microscopy",
        "is_correct": false
      },
      {
        "id": "path-sba-107-c",
        "text": "Black staining with Gomori methenamine silver that lacks birefringence",
        "is_correct": false
      },
      {
        "id": "path-sba-107-a",
        "text": "Amorphous pink deposits on H&E that stain orange-red with Congo Red and exhibit Apple-Green Birefringence under polarized light",
        "is_correct": true
      },
      {
        "id": "path-sba-107-b",
        "text": "Deep purple staining with Alcian Blue that exhibits yellow fluorescence",
        "is_correct": false
      },
      {
        "id": "path-sba-107-e",
        "text": "PAS-negative granular deposits that dissolve in potassium hydroxide",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-108",
    "stem": "Focal Segmental Glomerulosclerosis (FSGS) is distinguished histologically from Minimal Change Disease by:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Renal Pathology",
    "programme": "mbchb",
    "explanation": "FSGS involves sclerosis (fibrous obliteration) of some (<50%) glomeruli (focal) and part of the tuft (segmental), often starting in the juxtamedullary cortex, with entrapment of plasma proteins (hyalinosis) and lipid droplets.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-108-a",
        "text": "Sclerosis and obliteration of capillary lumens affecting only SOME glomeruli (focal) and only PORTIONS of the affected glomeruli (segmental), often with hyalinosis",
        "is_correct": true
      },
      {
        "id": "path-sba-108-d",
        "text": "Massive linear IgG deposition along the entire capillary wall",
        "is_correct": false
      },
      {
        "id": "path-sba-108-e",
        "text": "Extensive caseous necrosis of the renal pyramids",
        "is_correct": false
      },
      {
        "id": "path-sba-108-b",
        "text": "Diffuse involvement of every single glomerulus with subepithelial deposits",
        "is_correct": false
      },
      {
        "id": "path-sba-108-c",
        "text": "Complete absence of foot process effacement on electron microscopy",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-109",
    "stem": "Acute Tubular Necrosis (ATN) is the most common cause of acute kidney injury in hospitalized patients. Ischemic ATN characteristically produces which microscopic urinary sediment finding?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Renal Pathology",
    "programme": "mbchb",
    "explanation": "Ischemic and toxic ATN cause necrosis and detachment of tubular epithelial cells into the lumen, where they combine with Tamm-Horsfall protein to form diagnostic 'muddy-brown' granular casts in the urine.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-109-d",
        "text": "Waxy casts with broad diameter (indicates chronic end-stage kidney disease)",
        "is_correct": false
      },
      {
        "id": "path-sba-109-c",
        "text": "Abundant white blood cell casts and eosinophils (indicates acute interstitial nephritis)",
        "is_correct": false
      },
      {
        "id": "path-sba-109-b",
        "text": "Dysmorphic red blood cells and red blood cell casts (indicates glomerulonephritis)",
        "is_correct": false
      },
      {
        "id": "path-sba-109-a",
        "text": "'Muddy-brown' granular casts and sloughed renal tubular epithelial cells",
        "is_correct": true
      },
      {
        "id": "path-sba-109-e",
        "text": "Triple phosphate (struvite) 'coffin-lid' crystals",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-110",
    "stem": "Drug-Induced Acute Interstitial Nephritis (AIN), commonly triggered by NSAIDs, penicillins, or proton pump inhibitors, is characterized histologically by:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Histopathology",
    "section": "Renal Pathology",
    "programme": "mbchb",
    "explanation": "Drug-induced AIN is a hypersensitivity reaction (type I / IV) in the renal interstitium: biopsy shows interstitial edema, tubulitis, and an inflammatory infiltrate containing T-lymphocytes, plasma cells, and characteristically Eosinophils.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-110-a",
        "text": "Interstitial edema with an inflammatory infiltrate rich in Lymphocytes, Macrophages, and prominent Eosinophils, often with tubulitis",
        "is_correct": true
      },
      {
        "id": "path-sba-110-e",
        "text": "Extensive cortical coagulative necrosis with thrombosed arcuate arteries",
        "is_correct": false
      },
      {
        "id": "path-sba-110-b",
        "text": "Diffuse necrosis of the glomerular capillary tufts with crescents",
        "is_correct": false
      },
      {
        "id": "path-sba-110-c",
        "text": "Heavy mesangial deposition of IgA and C3 with wire loops",
        "is_correct": false
      },
      {
        "id": "path-sba-110-d",
        "text": "Accumulation of calcium oxalate crystals in collecting ducts",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-111",
    "stem": "Clear Cell Renal Cell Carcinoma (RCC), the most common primary renal malignancy, is driven by loss of which tumor suppressor gene on chromosome 3p?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Histopathology",
    "section": "Renal Pathology",
    "programme": "mbchb",
    "explanation": "Clear cell RCC (~70-80% of RCC) is driven by deletion, mutation, or hypermethylation of the VHL gene on 3p25. Loss of VHL prevents ubiquitin-mediated degradation of HIF-1alpha, leading to constitutive overexpression of VEGF and PDGF.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-111-a",
        "text": "VHL (Von Hippel-Lindau) tumor suppressor gene",
        "is_correct": true
      },
      {
        "id": "path-sba-111-c",
        "text": "MET proto-oncogene on chromosome 7q",
        "is_correct": false
      },
      {
        "id": "path-sba-111-e",
        "text": "RB1 on chromosome 13q",
        "is_correct": false
      },
      {
        "id": "path-sba-111-b",
        "text": "WT1 on chromosome 11p",
        "is_correct": false
      },
      {
        "id": "path-sba-111-d",
        "text": "TP53 on chromosome 17p",
        "is_correct": false
      }
    ]
  },
  {
    "id": "path-sba-112",
    "stem": "Why do Clear Cell Renal Cell Carcinomas appear strikingly 'clear' on routine H&E histological sections?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Histopathology",
    "section": "Renal Pathology",
    "programme": "mbchb",
    "explanation": "Clear cell RCC cells are rounded or polygonal with distinct borders and optically clear cytoplasm because high intracellular stores of neutral lipids and glycogen are dissolved and washed out during standard alcohol/xylene tissue preparation.",
    "reference": "Robbins Basic Pathology, 10th Ed. / Robbins and Cotran Pathologic Basis of Disease, 10th Ed.",
    "options": [
      {
        "id": "path-sba-112-c",
        "text": "The cytoplasm is filled entirely with gas produced by anaerobic metabolism",
        "is_correct": false
      },
      {
        "id": "path-sba-112-e",
        "text": "The nuclei have extruded all their chromatin material",
        "is_correct": false
      },
      {
        "id": "path-sba-112-b",
        "text": "The cells contain huge fluid-filled cysts with zero cytoplasmic organelles",
        "is_correct": false
      },
      {
        "id": "path-sba-112-d",
        "text": "The cells are composed of pure acellular hyaluronic acid matrix",
        "is_correct": false
      },
      {
        "id": "path-sba-112-a",
        "text": "The tumor cells are packed with abundant intracellular Glycogen and Lipids that dissolve during routine histologic paraffin processing",
        "is_correct": true
      }
    ]
  }
]
