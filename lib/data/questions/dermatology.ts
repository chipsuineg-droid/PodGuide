import type { MCQQuestion } from "../mcq-bank"

export const DERMATOLOGY_QUESTIONS: MCQQuestion[] = [
  {
    "id": "derm-sba-001",
    "stem": "What are the five distinct histological layers of the Epidermis in thick (glabrous) skin (palms and soles), arranged from deep to superficial?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "The five layers of thick skin (deep to superficial) are: 1) Basale (stem cells/mitosis); 2) Spinosum (desmosomal spines); 3) Granulosum (keratohyalin granules); 4) Lucidum (clear, only in thick skin); 5) Corneum (anucleate cornified squames).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-001-e",
        "text": "Stratum Spinosum, Stratum Basale, Stratum Lucidum, and Stratum Keratinum",
        "is_correct": false
      },
      {
        "id": "derm-sba-001-a",
        "text": "Stratum Basale, Stratum Spinosum, Stratum Granulosum, Stratum Lucidum, and Stratum Corneum",
        "is_correct": true
      },
      {
        "id": "derm-sba-001-b",
        "text": "Stratum Corneum, Stratum Lucidum, Stratum Granulosum, Stratum Spinosum, and Stratum Basale",
        "is_correct": false
      },
      {
        "id": "derm-sba-001-c",
        "text": "Stratum Germinativum, Stratum Reticulare, Stratum Papillare, and Stratum Corneum",
        "is_correct": false
      },
      {
        "id": "derm-sba-001-d",
        "text": "Epidermis, Papillary dermis, Reticular dermis, Hypodermis, and Subcutis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-002",
    "stem": "What is the primary function of Keratohyalin Granules present within keratinocytes of the Stratum Granulosum?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "Keratohyalin granules contain profilaggrin, loricrin, and involucrin. Filaggrin aggregates keratin filaments to form the cornified cell envelope. Mutations in filaggrin (FLG) cause ichthyosis vulgaris and predispose to atopic dermatitis.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-002-e",
        "text": "Degrade extracellular lipids via lysosomal enzymes",
        "is_correct": false
      },
      {
        "id": "derm-sba-002-d",
        "text": "Form desmosomes that anchor keratinocytes to the basement membrane",
        "is_correct": false
      },
      {
        "id": "derm-sba-002-a",
        "text": "Contain profilaggrin, which is cleaved into Filaggrin to aggregate and cross-link keratin intermediate filaments into dense macrofibrils",
        "is_correct": true
      },
      {
        "id": "derm-sba-002-b",
        "text": "Synthesize melanin pigment from tyrosine under UV radiation",
        "is_correct": false
      },
      {
        "id": "derm-sba-002-c",
        "text": "Secrete hydrochloric acid onto the skin surface to create the acid mantle",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-003",
    "stem": "Odland bodies (Lamellar Granules / Membrane-Coating Granules) extruded by keratinocytes in the upper stratum granulosum serve what vital physiological role?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "Lamellar granules (Odland bodies) contain lipids (ceramides, glycosphingolipids, cholesterol) and lipid-processing enzymes. Exocytosis into the stratum corneum intercellular space establishes the epidermal water barrier.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-003-d",
        "text": "Transport melanin granules into the nucleus of adjacent keratinocytes",
        "is_correct": false
      },
      {
        "id": "derm-sba-003-a",
        "text": "Release a lipid-rich mixture (ceramides, cholesterol, free fatty acids) into the intercellular spaces, forming the primary Epidermal Water Permeability Barrier",
        "is_correct": true
      },
      {
        "id": "derm-sba-003-c",
        "text": "Function as sensory receptors for high-frequency mechanical vibration",
        "is_correct": false
      },
      {
        "id": "derm-sba-003-b",
        "text": "Provide structural anchorage between basal keratinocytes and the dermis",
        "is_correct": false
      },
      {
        "id": "derm-sba-003-e",
        "text": "Produce sweat to regulate core body temperature",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-004",
    "stem": "Langerhans Cells, the professional antigen-presenting cells of the epidermis, are characterized ultrastructurally by which pathognomonic organelle?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "Langerhans cells (dendritic cells primarily in the stratum spinosum) express CD1a and Langerin (CD207). On electron microscopy, they feature pathognomonic Birbeck granules resembling tennis rackets.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-004-e",
        "text": "Lipofuscin wear-and-tear pigment granules",
        "is_correct": false
      },
      {
        "id": "derm-sba-004-a",
        "text": "Birbeck Granules (rod-shaped or tennis-racket-shaped pentalaminar cytoplasmic organelles containing Langerin / CD207)",
        "is_correct": true
      },
      {
        "id": "derm-sba-004-d",
        "text": "dense-core neurosecretory granules containing synaptophysin",
        "is_correct": false
      },
      {
        "id": "derm-sba-004-b",
        "text": "Weibel-Palade bodies containing von Willebrand factor",
        "is_correct": false
      },
      {
        "id": "derm-sba-004-c",
        "text": "Melanosomes containing tyrosinase enzymes",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-005",
    "stem": "Melanocytes synthesize melanin within specialized organelles called Melanosomes and transfer them to keratinocytes via which mechanism?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "Melanocytes (derived from neural crest, located in stratum basale) transfer melanosomes via dendritic processes to ~36 surrounding keratinocytes (epidermal-melanin unit), forming a supranuclear melanin cap to protect DNA from UV damage.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-005-b",
        "text": "Holocrine secretion involving the rupture of the entire melanocyte",
        "is_correct": false
      },
      {
        "id": "derm-sba-005-e",
        "text": "Transcytosis across the glomerular basement membrane",
        "is_correct": false
      },
      {
        "id": "derm-sba-005-a",
        "text": "Cytocrine secretion (apical dendrites of melanocytes inject mature melanosomes into adjacent keratinocytes to cap and shield their nuclei from UV radiation)",
        "is_correct": true
      },
      {
        "id": "derm-sba-005-d",
        "text": "Passive extracellular leakage into the sebum",
        "is_correct": false
      },
      {
        "id": "derm-sba-005-c",
        "text": "Endocrine secretion into the superficial dermal capillary plexus",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-006",
    "stem": "What is the key enzymatic step in Melanin synthesis that is congenitally defective in Oculocutaneous Albinism Type 1 (OCA1)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "OCA1 is an autosomal recessive disorder caused by mutations in the TYR gene encoding Tyrosinase, the rate-limiting copper-containing enzyme that catalyzes the hydroxylation of tyrosine to DOPA, preventing melanin production.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-006-a",
        "text": "Tyrosinase (which converts L-tyrosine to L-DOPA and dopaquinone)",
        "is_correct": true
      },
      {
        "id": "derm-sba-006-b",
        "text": "Dopachrome tautomerase",
        "is_correct": false
      },
      {
        "id": "derm-sba-006-c",
        "text": "Phenylalanine hydroxylase",
        "is_correct": false
      },
      {
        "id": "derm-sba-006-e",
        "text": "Catalase",
        "is_correct": false
      },
      {
        "id": "derm-sba-006-d",
        "text": "Homogentisate 1,2-dioxygenase",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-007",
    "stem": "Merkel Cells in the basal layer of the epidermis function as:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "Merkel cells are specialized neuroendocrine cells in the basal epidermis connected to unmyelinated sensory afferents (Merkel nerve endings), functioning as slowly adapting type I mechanoreceptors that discern fine spatial details.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-007-b",
        "text": "Thermoreceptors detecting noxious cold temperatures",
        "is_correct": false
      },
      {
        "id": "derm-sba-007-e",
        "text": "Contractile cells that pull hair follicles upright during cold exposure",
        "is_correct": false
      },
      {
        "id": "derm-sba-007-c",
        "text": "Antigen-presenting cells that initiate contact dermatitis",
        "is_correct": false
      },
      {
        "id": "derm-sba-007-d",
        "text": "Secretory cells producing the acid mantle of the stratum corneum",
        "is_correct": false
      },
      {
        "id": "derm-sba-007-a",
        "text": "Slowly adapting Type I Mechanoreceptors (Merkel discs) that mediate high-resolution tactile perception (light touch, texture, edges)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-008",
    "stem": "What are the two anatomical layers of the human Dermis, and what types of connective tissue characterize each?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "The dermis has two layers: 1) Papillary dermis (thin, superficial loose connective tissue forming dermal papillae, rich in capillaries and type III collagen); 2) Reticular dermis (thick, deep dense irregular connective tissue rich in coarse type I collagen and elastic fibres).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-008-a",
        "text": "Papillary Dermis (superficial loose connective tissue with delicate type III collagen and capillaries) and Reticular Dermis (deep dense irregular connective tissue with thick type I collagen bundles)",
        "is_correct": true
      },
      {
        "id": "derm-sba-008-b",
        "text": "Stratum basale and Stratum spinosum",
        "is_correct": false
      },
      {
        "id": "derm-sba-008-c",
        "text": "Hypodermis and Subcutis",
        "is_correct": false
      },
      {
        "id": "derm-sba-008-d",
        "text": "Endomysium and Epimysium",
        "is_correct": false
      },
      {
        "id": "derm-sba-008-e",
        "text": "Lamina lucida and Lamina densa",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-009",
    "stem": "Eccrine sweat glands differ from Apocrine sweat glands in that Eccrine glands:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "Eccrine glands cover almost the entire body (dense on palms/soles), secrete clear hypotonic sweat directly onto the skin surface, are innervated by sympathetic cholinergic fibers, and regulate body temperature. Apocrine glands are restricted to axillae/perineum, open into follicles, and become active at puberty.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-009-a",
        "text": "Are distributed over nearly the entire body surface, open directly onto the skin surface, and function primarily in Thermoregulation via cholinergic sympathetic innervation",
        "is_correct": true
      },
      {
        "id": "derm-sba-009-b",
        "text": "Are restricted to the axillae and perineum, open into hair follicles, and produce odoriferous sweat",
        "is_correct": false
      },
      {
        "id": "derm-sba-009-c",
        "text": "Are holocrine glands that secrete pure lipid sebum into the piliary canal",
        "is_correct": false
      },
      {
        "id": "derm-sba-009-e",
        "text": "Develop only after puberty under androgen stimulation",
        "is_correct": false
      },
      {
        "id": "derm-sba-009-d",
        "text": "Are innervated exclusively by sensory somatic afferent nerves",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-010",
    "stem": "What is the primary anatomical component of the Hair Follicle Bulge?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "The hair follicle bulge (located near the insertion of the arrector pili muscle) houses multipotent epithelial stem cells capable of regenerating the cyclic lower follicle, sebaceous glands, and repairing wounded surface epidermis.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-010-a",
        "text": "A reservoir of Multipotent Epithelial Stem Cells that regenerate the hair follicle, sebaceous gland, and re-epithelialize epidermis during wound healing",
        "is_correct": true
      },
      {
        "id": "derm-sba-010-b",
        "text": "A collection of mature melanocytes that provide hair color",
        "is_correct": false
      },
      {
        "id": "derm-sba-010-c",
        "text": "A cluster of pacinian corpuscles detecting hair movement",
        "is_correct": false
      },
      {
        "id": "derm-sba-010-e",
        "text": "A vascular plexus that filters arterial blood",
        "is_correct": false
      },
      {
        "id": "derm-sba-010-d",
        "text": "An accumulation of adipocytes providing mechanical cushioning",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-011",
    "stem": "The Nail Plate is produced primarily by continuous proliferation and keratinization of cells in the:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "The nail plate is a hard keratin structure synthesized continuously by the nail matrix. The distal visible portion of the matrix appears as the white crescent-shaped lunula.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-011-a",
        "text": "Nail Matrix (proximal germinative epithelium beneath the proximal nail fold)",
        "is_correct": true
      },
      {
        "id": "derm-sba-011-b",
        "text": "Nail Bed (sterile matrix beneath the nail plate)",
        "is_correct": false
      },
      {
        "id": "derm-sba-011-c",
        "text": "Hyponychium (distal seal under the free edge)",
        "is_correct": false
      },
      {
        "id": "derm-sba-011-d",
        "text": "Eponychium (cuticle)",
        "is_correct": false
      },
      {
        "id": "derm-sba-011-e",
        "text": "Lateral nail folds",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-012",
    "stem": "What is the Dermo-Epidermal Junction (Basement Membrane Zone) structural protein that is targeted by autoantibodies in Epidermolysis Bullosa Acquisita (EBA)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "Epidermolysis bullosa acquisita (EBA) is an acquired autoimmune blistering disorder caused by autoantibodies against Type VII collagen, the main component of anchoring fibrils that anchor the basement membrane to dermal collagen.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-012-c",
        "text": "Laminin-332 (in the lamina lucida)",
        "is_correct": false
      },
      {
        "id": "derm-sba-012-b",
        "text": "Type IV Collagen (in the lamina densa)",
        "is_correct": false
      },
      {
        "id": "derm-sba-012-e",
        "text": "Desmoglein-1",
        "is_correct": false
      },
      {
        "id": "derm-sba-012-d",
        "text": "BP180 (type XVII collagen in hemidesmosomes)",
        "is_correct": false
      },
      {
        "id": "derm-sba-012-a",
        "text": "Type VII Collagen (which forms Anchoring Fibrils linking the lamina densa to the papillary dermis)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-013",
    "stem": "What determines the normal turnover (transit) time of a keratinocyte from the basal layer to desquamation at the stratum corneum in healthy skin?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "In healthy skin, a keratinocyte takes ~14 days to migrate from the stratum basale to the stratum corneum, and another 14 days to transit through the stratum corneum to desquamation (total ~28 days). In psoriasis, this is accelerated to 3-5 days.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-013-a",
        "text": "Approximately 28 days (4 weeks)",
        "is_correct": true
      },
      {
        "id": "derm-sba-013-b",
        "text": "24 to 48 hours",
        "is_correct": false
      },
      {
        "id": "derm-sba-013-c",
        "text": "7 days",
        "is_correct": false
      },
      {
        "id": "derm-sba-013-d",
        "text": "60 to 90 days",
        "is_correct": false
      },
      {
        "id": "derm-sba-013-e",
        "text": "Over 6 months",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-014",
    "stem": "Which cell type in the skin is primarily responsible for the rapid synthesis of Vitamin D3 (Cholecalciferol) upon exposure to Solar Ultraviolet B (UVB) radiation?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "Keratinocytes in the lower epidermis contain 7-dehydrocholesterol. Exposure to UVB radiation (290-315 nm) photochemically cleaves the B-ring to form pre-vitamin D3, which thermally isomerizes into cholecalciferol (vitamin D3).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-014-a",
        "text": "Keratinocytes in the Stratum Basale and Stratum Spinosum (converting 7-dehydrocholesterol to pre-vitamin D3)",
        "is_correct": true
      },
      {
        "id": "derm-sba-014-d",
        "text": "Sebaceous gland epithelial cells",
        "is_correct": false
      },
      {
        "id": "derm-sba-014-e",
        "text": "Dermal fibroblasts",
        "is_correct": false
      },
      {
        "id": "derm-sba-014-c",
        "text": "Langerhans cells in the dermis",
        "is_correct": false
      },
      {
        "id": "derm-sba-014-b",
        "text": "Melanocytes in the hair bulb",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-015",
    "stem": "Arrector Pili muscles are small bands of:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "The arrector pili muscle is a bundle of smooth muscle fibers extending from the papillary dermis to the connective tissue sheath of the hair follicle. Sympathetic noradrenergic stimulation contracts the muscle, causing piloerection ('cutis anserina').",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-015-c",
        "text": "Striated muscle innervated by the parasympathetic vagus nerve",
        "is_correct": false
      },
      {
        "id": "derm-sba-015-b",
        "text": "Skeletal muscle under voluntary somatic control",
        "is_correct": false
      },
      {
        "id": "derm-sba-015-d",
        "text": "Dense fibrous connective tissue devoid of contractile proteins",
        "is_correct": false
      },
      {
        "id": "derm-sba-015-e",
        "text": "Elastic fibers that contract passively in warm environments",
        "is_correct": false
      },
      {
        "id": "derm-sba-015-a",
        "text": "Smooth muscle innervated by the sympathetic nervous system that erect hair follicles ('goosebumps') and express sebum from sebaceous glands",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-016",
    "stem": "What is the physiological pH of the normal adult human skin surface ('Acid Mantle')?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "The normal skin surface has an acidic pH (4.5-5.5) maintained by lactic acid in sweat, free fatty acids from sebum, and the sodium-hydrogen antiporter (NHE1). This acid mantle inhibits pathogenic colonization (e.g., S. aureus).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-016-b",
        "text": "pH 7.35 to 7.45 (identical to blood pH)",
        "is_correct": false
      },
      {
        "id": "derm-sba-016-e",
        "text": "pH 1.0",
        "is_correct": false
      },
      {
        "id": "derm-sba-016-c",
        "text": "pH 2.0 to 3.0",
        "is_correct": false
      },
      {
        "id": "derm-sba-016-d",
        "text": "pH 8.0 to 9.0",
        "is_correct": false
      },
      {
        "id": "derm-sba-016-a",
        "text": "pH 4.5 to 5.5",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-017",
    "stem": "Free Nerve Endings in the epidermis and dermis are primarily responsible for detecting which sensory modalities?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "Unencapsulated free nerve endings (unmyelinated C-fibers and lightly myelinated A-delta fibers) terminate in the dermis and epidermis, transmitting thermal sensations, mechanical/chemical pain, and itch.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-017-e",
        "text": "Proprioceptive joint position sense",
        "is_correct": false
      },
      {
        "id": "derm-sba-017-b",
        "text": "High-frequency vibration (Pacinian corpuscles)",
        "is_correct": false
      },
      {
        "id": "derm-sba-017-a",
        "text": "Pain (nociception), Temperature (thermoception), and Pruritus (itch)",
        "is_correct": true
      },
      {
        "id": "derm-sba-017-c",
        "text": "Light discriminative flutter and low-frequency vibration (Meissner corpuscles)",
        "is_correct": false
      },
      {
        "id": "derm-sba-017-d",
        "text": "Sustained skin stretch and torque (Ruffini endings)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-018",
    "stem": "Sebaceous Glands are classified as holocrine glands and are found everywhere on the human body EXCEPT:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "Sebaceous glands are associated with hair follicles (pilosebaceous units) or exist as free glands (Meibomian glands of eyelids, Fordyce spots). They are completely ABSENT from the hairless friction skin of the palms and soles.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-018-e",
        "text": "Eyelids (Meibomian glands)",
        "is_correct": false
      },
      {
        "id": "derm-sba-018-d",
        "text": "Axillae and groin",
        "is_correct": false
      },
      {
        "id": "derm-sba-018-c",
        "text": "Chest and upper back",
        "is_correct": false
      },
      {
        "id": "derm-sba-018-b",
        "text": "Scalp and face",
        "is_correct": false
      },
      {
        "id": "derm-sba-018-a",
        "text": "Palms of the hands and Soles of the feet",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-019",
    "stem": "Fitzpatrick Skin Phototypes range from Type I to Type VI based on:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "The Fitzpatrick classification grades skin response to 30-45 minutes of sun exposure: Type I (always burns, never tans; pale white), Type II (burns easily, tans minimally), up to Type VI (never burns, deeply pigmented dark brown/black).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-019-a",
        "text": "The skin's constitutional pigmentation and its tendency to Burn or Tan upon initial unacclimatized exposure to midday summer sunlight",
        "is_correct": true
      },
      {
        "id": "derm-sba-019-b",
        "text": "The total count of melanocytes per square millimeter of epidermis",
        "is_correct": false
      },
      {
        "id": "derm-sba-019-e",
        "text": "The concentration of filaggrin in keratohyalin granules",
        "is_correct": false
      },
      {
        "id": "derm-sba-019-d",
        "text": "The rate of sebum excretion per hour",
        "is_correct": false
      },
      {
        "id": "derm-sba-019-c",
        "text": "The thickness of the stratum corneum measured in micrometers",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-020",
    "stem": "What is the primary function of the Cuticle (Eponychium) of the nail unit?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "The eponychium (cuticle) is an outgrowth of the stratum corneum of the proximal nail fold that adheres to the dorsal nail plate, sealing the proximal nail groove against environmental irritants and micro-organisms (loss predisposes to paronychia).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-020-a",
        "text": "Creates an impermeable waterproof seal between the proximal nail fold and the nail plate, preventing entry of moisture, bacteria, and fungi into the subungual space",
        "is_correct": true
      },
      {
        "id": "derm-sba-020-e",
        "text": "Functions as a tactile receptor for fine vibration",
        "is_correct": false
      },
      {
        "id": "derm-sba-020-b",
        "text": "Produces the hard keratin of the nail plate directly",
        "is_correct": false
      },
      {
        "id": "derm-sba-020-d",
        "text": "Anchors the lateral edges of the nail plate to the periosteum",
        "is_correct": false
      },
      {
        "id": "derm-sba-020-c",
        "text": "Supplies arterial blood to the distal phalanx",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-021",
    "stem": "Elastic fibres in the papillary dermis that insert perpendicularly into the lamina densa of the basement membrane are called:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "The elastic system of the dermis consists of: 1) Oxytalan fibres (fine microfibrils devoid of elastin, running perpendicularly in papillary dermis to the basement membrane); 2) Elaunin fibres; 3) mature thick elastic fibres in the reticular dermis.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-021-e",
        "text": "Tonofilaments (keratin)",
        "is_correct": false
      },
      {
        "id": "derm-sba-021-a",
        "text": "Oxytalan fibres (which connect to intermediate Elaunin fibres and deep mature Elastic fibres)",
        "is_correct": true
      },
      {
        "id": "derm-sba-021-b",
        "text": "Anchoring fibrils (type VII collagen)",
        "is_correct": false
      },
      {
        "id": "derm-sba-021-c",
        "text": "Reticular fibres (type III collagen)",
        "is_correct": false
      },
      {
        "id": "derm-sba-021-d",
        "text": "Perforating Sharpey's fibres",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-022",
    "stem": "Dermal Papillae and Epidermal Rete Ridges interdigitate at the dermo-epidermal junction primarily to:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Structure & Function",
    "programme": "mbchb",
    "explanation": "The interdigitating 'peg-and-socket' arrangement of epidermal rete ridges and dermal papillae provides substantial mechanical adhesion against frictional shear stresses and maximizes the surface area for diffusion across the basement membrane.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-022-c",
        "text": "Facilitate rapid drainage of lymphatic fluid directly into sweat glands",
        "is_correct": false
      },
      {
        "id": "derm-sba-022-a",
        "text": "Provide mechanical resistance against shear forces and dramatically increase the surface area for metabolic and nutritive exchange between the avascular epidermis and vascular dermis",
        "is_correct": true
      },
      {
        "id": "derm-sba-022-d",
        "text": "Store large quantities of neutral triglycerides outside adipocytes",
        "is_correct": false
      },
      {
        "id": "derm-sba-022-e",
        "text": "Prevent ultraviolet light from penetrating into the hypodermis",
        "is_correct": false
      },
      {
        "id": "derm-sba-022-b",
        "text": "Allow hair follicles to migrate freely across the skin",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-023",
    "stem": "What is the characteristic clinical and histological appearance of Plaque Psoriasis (Psoriasis Vulgaris)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Psoriasis is a chronic T-cell/IL-23/IL-17-mediated inflammatory dermatosis: marked epidermal hyperplasia (acanthosis), retained nuclei in stratum corneum (parakeratosis), Munro microabscesses (neutrophils in parakeratotic scale), and Auspitz sign (pinpoint bleeding when scale is removed).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-023-c",
        "text": "Targetoid lesions with central duskiness and epidermal detachment",
        "is_correct": false
      },
      {
        "id": "derm-sba-023-b",
        "text": "Pruritic polygonal purple papules with Wickham striae and wedge-shaped hypergranulosis",
        "is_correct": false
      },
      {
        "id": "derm-sba-023-a",
        "text": "Well-demarcated erythematous plaques covered by silvery-white micaceous scales; histologically displaying regular Acanthosis, Parakeratosis, Munroe Microabscesses (neutrophils in stratum corneum), and Auspitz sign",
        "is_correct": true
      },
      {
        "id": "derm-sba-023-e",
        "text": "Deep painful subcutaneous nodules on anterior shins with septal panniculitis",
        "is_correct": false
      },
      {
        "id": "derm-sba-023-d",
        "text": "Flaccid intraepidermal blisters with acantholysis on Tzanck smear",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-024",
    "stem": "The Auspitz Sign in psoriasis refers to:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Auspitz sign is elicited by peeling away a psoriatic scale: bleeding occurs from fragile, tortuous papillary capillaries separated from the surface by only a markedly thinned suprapapillary epidermal layer.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-024-a",
        "text": "Pinpoint bleeding that occurs when overlying silvery scales are forcibly scraped off, caused by thin suprapapillary epidermal plates exposing dilated, tortuous dermal capillaries",
        "is_correct": true
      },
      {
        "id": "derm-sba-024-b",
        "text": "Development of new psoriatic lesions along lines of skin trauma or scratching (Koebner phenomenon)",
        "is_correct": false
      },
      {
        "id": "derm-sba-024-c",
        "text": "Pitting and oil-drop discoloration of the fingernails",
        "is_correct": false
      },
      {
        "id": "derm-sba-024-d",
        "text": "Severe burning pain provoked by exposure to cold temperatures",
        "is_correct": false
      },
      {
        "id": "derm-sba-024-e",
        "text": "A paradoxical worsening of psoriasis following topical corticosteroid withdrawal",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-025",
    "stem": "The Koebner Phenomenon (Isomorphic Response) is the induction of characteristic skin lesions at sites of cutaneous trauma or injury, classically observed in:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "The Koebner (isomorphic) response describes the development of typical disease lesions along lines of trauma (scratches, surgical incisions, sunburn). Characteristically seen in Psoriasis, Lichen Planus, and Vitiligo.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-025-a",
        "text": "Psoriasis, Lichen Planus, and Vitiligo",
        "is_correct": true
      },
      {
        "id": "derm-sba-025-b",
        "text": "Atopic dermatitis, Urticaria, and Scabies",
        "is_correct": false
      },
      {
        "id": "derm-sba-025-c",
        "text": "Acne vulgaris, Rosacea, and Melasma",
        "is_correct": false
      },
      {
        "id": "derm-sba-025-d",
        "text": "Basal cell carcinoma, Melanoma, and Actinic keratosis",
        "is_correct": false
      },
      {
        "id": "derm-sba-025-e",
        "text": "Impetigo, Erysipelas, and Folliculitis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-026",
    "stem": "What are the classic '6 Ps' that define the clinical presentation of Lichen Planus?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Lichen planus presents with the classic 6 Ps: Pruritic, Polygonal, Planar, Purple, Papules and Plaques, preferentially on flexor wrists, ankles, and genitalia, showing a fine reticular network of white lines (Wickham striae).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-026-e",
        "text": "Periodic, Progressive, Polymorphous, Papyraceous, Persistent, and Punctate",
        "is_correct": false
      },
      {
        "id": "derm-sba-026-d",
        "text": "Papillomatous, Pruritic, Perifollicular, Polycyclic, Purpuric, and Pitted",
        "is_correct": false
      },
      {
        "id": "derm-sba-026-c",
        "text": "Painless, Pale, Poikilodermatous, Pearly, Prurigo, and Petechiae",
        "is_correct": false
      },
      {
        "id": "derm-sba-026-b",
        "text": "Painful, Pustular, Purulent, Pigmented, Pedunculated, and Porous",
        "is_correct": false
      },
      {
        "id": "derm-sba-026-a",
        "text": "Pruritic, Polygonal, Planar (flat-topped), Purple (violaceous), Papules, and Plaques",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-027",
    "stem": "What are Wickham Striae, and with which condition are they pathognomonically associated?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Wickham striae are white lace-like streaks on the surface of lichen planus papules and buccal oral mucosa, corresponding histologically to focal thickening of the stratum granulosum (wedge-shaped hypergranulosis).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-027-b",
        "text": "Linear streaks of silvery scale along extensor surfaces in Psoriasis",
        "is_correct": false
      },
      {
        "id": "derm-sba-027-a",
        "text": "A fine network of lace-like, whitish lines on the surface of papules and on the buccal oral mucosa, pathognomonic of Lichen Planus",
        "is_correct": true
      },
      {
        "id": "derm-sba-027-e",
        "text": "Telangiectatic spider veins across the nose in Rosacea",
        "is_correct": false
      },
      {
        "id": "derm-sba-027-d",
        "text": "Target-like concentric rings on palms in Erythema Multiforme",
        "is_correct": false
      },
      {
        "id": "derm-sba-027-c",
        "text": "Erythematous radiating bands surrounding tick bites in Lyme disease",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-028",
    "stem": "What histological hallmark defines Lichen Planus on skin biopsy?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Lichen planus shows interface dermatitis: band-like T-cell infiltrate at the DEJ, destruction of the basal layer with apoptotic basal keratinocytes (Civatte / colloid / cytoid bodies), 'saw-toothed' rete ridges, and hypergranulosis.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-028-b",
        "text": "Intraepidermal neutrophilic microabscesses with regular acanthosis",
        "is_correct": false
      },
      {
        "id": "derm-sba-028-a",
        "text": "Dense, band-like (lichenoid) lymphocytic infiltrate hugging the dermo-epidermal junction, with 'saw-tooth' rete ridges, wedge-shaped hypergranulosis, and necrotic basal keratinocytes (Civatte / colloid bodies)",
        "is_correct": true
      },
      {
        "id": "derm-sba-028-d",
        "text": "Granulomatous inflammation surrounding fragmented elastic fibers",
        "is_correct": false
      },
      {
        "id": "derm-sba-028-e",
        "text": "Extensive eosinophilic spongiosis with intraepidermal acantholysis",
        "is_correct": false
      },
      {
        "id": "derm-sba-028-c",
        "text": "Subepidermal blister with neutrophilic microabscesses in dermal papillae",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-029",
    "stem": "Atopic Dermatitis (Eczema) is fundamentally driven by a combination of which two pathophysiological defects?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Atopic dermatitis is characterized by epidermal barrier breakdown (mutations in filaggrin, reduced ceramides, increased transepidermal water loss) and skewed TH2 immune responses (IL-4, IL-13, and the pruritogenic cytokine IL-31).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-029-b",
        "text": "Excessive production of sebum and colonization by Cutibacterium acnes",
        "is_correct": false
      },
      {
        "id": "derm-sba-029-a",
        "text": "Epidermal skin barrier dysfunction (often due to loss-of-function Filaggrin [FLG] mutations) and immune dysregulation with prominent TH2 cytokine activation (IL-4, IL-13, IL-31)",
        "is_correct": true
      },
      {
        "id": "derm-sba-029-e",
        "text": "Failure of melanin synthesis within follicular infundibula",
        "is_correct": false
      },
      {
        "id": "derm-sba-029-c",
        "text": "Deposition of IgA immune complexes in dermal papillae",
        "is_correct": false
      },
      {
        "id": "derm-sba-029-d",
        "text": "Autoantibodies targeting desmoglein-1 in the upper epidermis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-030",
    "stem": "What is the characteristic anatomical distribution of Atopic Dermatitis in infants compared to older children and adults?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "In infants (<2 years), eczema affects the convexities: facial cheeks, forehead, scalp, and extensor surfaces of limbs, characteristically sparing the diaper area. In older children and adults, it shifts to flexural folds (antecubital/popliteal).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-030-a",
        "text": "Infants: affects the Face (cheeks), Scalp, and Extensor surfaces of limbs (sparing diaper area); Children/Adults: classic Flexural distribution (antecubital and popliteal fossae, neck, wrists)",
        "is_correct": true
      },
      {
        "id": "derm-sba-030-b",
        "text": "Infants: restricted entirely to the palms and soles; Adults: restricted to the back",
        "is_correct": false
      },
      {
        "id": "derm-sba-030-c",
        "text": "Infants: flexural creases; Adults: extensor surfaces of knees and elbows",
        "is_correct": false
      },
      {
        "id": "derm-sba-030-e",
        "text": "There is no difference in anatomical distribution across age groups",
        "is_correct": false
      },
      {
        "id": "derm-sba-030-d",
        "text": "Infants: lower abdomen and groin; Adults: scalp and chest exclusively",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-031",
    "stem": "Pityriasis Rosea typically presents with which initial dermatological herald lesion, followed days later by what characteristic eruptive pattern?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Pityriasis rosea (linked to HHV-6 and HHV-7 reactivation) begins with a single 2-5 cm oval 'herald patch' on the trunk with an inner collarette of scale, followed days later by smaller eruptive oval lesions aligning along Langer's cleavage lines ('Christmas-tree' pattern).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-031-a",
        "text": "A single, solitary oval erythematous plaque ('Herald Patch') with peripheral collarette scale, followed 1 to 2 weeks later by smaller oval plaques along skin cleavage lines ('Christmas Tree' pattern)",
        "is_correct": true
      },
      {
        "id": "derm-sba-031-e",
        "text": "Diffuse follicular pustules on the upper back following hot tub immersion",
        "is_correct": false
      },
      {
        "id": "derm-sba-031-b",
        "text": "Multiple targetoid lesions on the palms, followed by oral mucosal ulcerations",
        "is_correct": false
      },
      {
        "id": "derm-sba-031-d",
        "text": "Grouped umbilicated vesicles on an erythematous base along a single dermatome",
        "is_correct": false
      },
      {
        "id": "derm-sba-031-c",
        "text": "A generalized morbilliform rash beginning behind the ears and spreading downward",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-032",
    "stem": "Erythema Multiforme (EM) is clinically defined by which pathognomonic cutaneous lesion?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Erythema multiforme features classic 'target' (iris) lesions: three concentric zones (dusky central purpura/blister, pale edematous zone, outer erythematous ring), classically triggered by Herpes Simplex Virus (HSV) infection.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-032-a",
        "text": "'Target' (iris) lesions: three concentric zones including a central dark/dusky disc or blister, an intermediate pale edematous ring, and an outer sharp erythematous border",
        "is_correct": true
      },
      {
        "id": "derm-sba-032-b",
        "text": "Coin-shaped discoid plaques with thick adherent scale and follicular plugging",
        "is_correct": false
      },
      {
        "id": "derm-sba-032-c",
        "text": "Annular plaques with central clearing and trailing scale (erythema annulare)",
        "is_correct": false
      },
      {
        "id": "derm-sba-032-d",
        "text": "Violaceous flat-topped polygonal papules with shiny surfaces",
        "is_correct": false
      },
      {
        "id": "derm-sba-032-e",
        "text": "Superficial flaccid pustules that dry into honey-colored crusts",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-033",
    "stem": "What is the single MOST common infectious trigger of recurrent Erythema Multiforme (EM Minor)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Over 70-80% of recurrent Erythema Multiforme cases are precipitated by an antecedent herpes simplex virus (HSV-1 or HSV-2) infection (labialis or genitalis), mediated by HSV DNA fragments in the skin triggering CD4+ T-cell responses.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-033-e",
        "text": "Cytomegalovirus (CMV)",
        "is_correct": false
      },
      {
        "id": "derm-sba-033-b",
        "text": "Mycoplasma pneumoniae",
        "is_correct": false
      },
      {
        "id": "derm-sba-033-c",
        "text": "Epstein-Barr Virus (EBV)",
        "is_correct": false
      },
      {
        "id": "derm-sba-033-a",
        "text": "Herpes Simplex Virus (HSV type 1 and type 2)",
        "is_correct": true
      },
      {
        "id": "derm-sba-033-d",
        "text": "Streptococcus pyogenes",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-034",
    "stem": "Stevens-Johnson Syndrome (SJS) and Toxic Epidermal Necrolysis (TEN) are severe adverse drug-induced cutaneous reactions distinguished from each other primarily by:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "SJS and TEN represent points on a spectrum of drug-induced, keratinocyte-apoptotic epidermal necrolysis (mediated by granulysin from CD8+ T-cells). SJS: <10% epidermal detachment; SJS/TEN overlap: 10-30%; TEN: >30% detachment.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-034-e",
        "text": "SJS affects only the oral mucosa without skin involvement",
        "is_correct": false
      },
      {
        "id": "derm-sba-034-b",
        "text": "SJS affects only children while TEN affects only adults",
        "is_correct": false
      },
      {
        "id": "derm-sba-034-c",
        "text": "SJS has 100% mortality while TEN has 0% mortality",
        "is_correct": false
      },
      {
        "id": "derm-sba-034-a",
        "text": "The percentage of Total Body Surface Area (TBSA) exhibiting Epidermal Detachment: SJS < 10% TBSA; SJS/TEN overlap 10-30% TBSA; TEN > 30% TBSA",
        "is_correct": true
      },
      {
        "id": "derm-sba-034-d",
        "text": "SJS is caused exclusively by viral infections while TEN is caused by bacteria",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-035",
    "stem": "What is the Nikolsky Sign in dermatology?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "A positive Nikolsky sign is the mechanical shearing of epidermis away from the basal layer upon light rubbing, indicating extensive intraepidermal or dermo-epidermal acantholysis/cleavage (positive in Pemphigus vulgaris, SJS/TEN, and SSSS).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-035-a",
        "text": "Dislodgement or shearing of the superficial epidermis from the dermis produced by gentle tangential lateral pressure applied to perilesional skin",
        "is_correct": true
      },
      {
        "id": "derm-sba-035-b",
        "text": "Pinpoint bleeding after scraping a scale from an erythematous plaque",
        "is_correct": false
      },
      {
        "id": "derm-sba-035-c",
        "text": "Elicitation of urticarial wheals after firmly stroking normal skin (Dermatographism)",
        "is_correct": false
      },
      {
        "id": "derm-sba-035-d",
        "text": "Blanching of an erythematous macule under glass slide compression (Diascopy)",
        "is_correct": false
      },
      {
        "id": "derm-sba-035-e",
        "text": "Darkening of hyperpigmented macules after exposure to long-wave UVA light",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-036",
    "stem": "Which classes of medications are the most notorious triggers of Stevens-Johnson Syndrome (SJS) and Toxic Epidermal Necrolysis (TEN)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "High-risk medications for SJS/TEN include the acronym SATAN: Sulfonamides (TMP-SMX), Allopurinol, Terbinafine, Anticonvulsants (carbamazepine, phenytoin, lamotrigine), and NSAIDs (oxicams).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-036-a",
        "text": "Allopurinol, Anticonvulsants (Carbamazepine, Lamotrigine, Phenytoin, Phenobarbital), Sulfonamide antibiotics (TMP-SMX), and Oxicam NSAIDs",
        "is_correct": true
      },
      {
        "id": "derm-sba-036-b",
        "text": "Beta-blockers, ACE inhibitors, and Digoxin",
        "is_correct": false
      },
      {
        "id": "derm-sba-036-c",
        "text": "Statins, Fibrates, and Niacin",
        "is_correct": false
      },
      {
        "id": "derm-sba-036-d",
        "text": "Selective serotonin reuptake inhibitors and Benzodiazepines",
        "is_correct": false
      },
      {
        "id": "derm-sba-036-e",
        "text": "Oral contraceptives and Progesterone therapy",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-037",
    "stem": "Erythema Nodosum is the most common form of Panniculitis, characterized clinically and histologically by:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Erythema nodosum is an acute septal panniculitis without vasculitis, presenting as tender, warm, erythematous nodules on the pretibial lower legs, triggered by streptococcal pharyngitis, sarcoidosis, coccidioidomycosis, IBD, and medications.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-037-a",
        "text": "Painful, tender, erythematous, non-ulcerating subcutaneous nodules on the bilateral anterior shins; histologically displaying Septal Panniculitis with Miescher's radial granulomas without vasculitis",
        "is_correct": true
      },
      {
        "id": "derm-sba-037-b",
        "text": "Painless ulcerated nodules on the posterior calves with lobular panniculitis and severe necrotizing vasculitis (Erythema Induratum)",
        "is_correct": false
      },
      {
        "id": "derm-sba-037-c",
        "text": "Superficial flaccid vesicles on the thighs that rupture easily",
        "is_correct": false
      },
      {
        "id": "derm-sba-037-e",
        "text": "Suppurative subcutaneous abscesses draining oily pus",
        "is_correct": false
      },
      {
        "id": "derm-sba-037-d",
        "text": "Hard sclerotic plaques bound down to deep muscular fascia on the arms",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-038",
    "stem": "What is the underlying pathophysiology of Urticaria (Hives)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Urticaria involves mast cell and basophil degranulation (via IgE cross-linking or non-immune triggers), releasing histamine and platelet-activating factor to cause local arteriolar vasodilation and post-capillary venule plasma leakage (dermal wheals lasting <24h).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-038-a",
        "text": "Transient degranulation of mast cells releasing histamine, leukotrienes, and prostaglandins, causing local dermal microvascular hyperpermeability and transient dermal edema (wheals)",
        "is_correct": true
      },
      {
        "id": "derm-sba-038-d",
        "text": "Intraepidermal clefting caused by anti-desmoglein antibodies",
        "is_correct": false
      },
      {
        "id": "derm-sba-038-e",
        "text": "Granulomatous destruction of sebaceous glands",
        "is_correct": false
      },
      {
        "id": "derm-sba-038-b",
        "text": "Permanent thrombosis of cutaneous deep veins with tissue infarction",
        "is_correct": false
      },
      {
        "id": "derm-sba-038-c",
        "text": "Autoimmune destruction of dermal elastic fibers",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-039",
    "stem": "What is the FIRST-LINE pharmacological therapy for both acute and chronic Urticaria?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Second-generation H1-antihistamines (cetirizine, fexofenadine, loratadine, bilastine) are the first-line therapy for urticaria due to high safety, minimal sedation, and efficacy, titrated up to 4-fold the licensed dose before escalating to omalizumab.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-039-b",
        "text": "Long-term systemic corticosteroids (e.g. daily Prednisone 40 mg for 6 months)",
        "is_correct": false
      },
      {
        "id": "derm-sba-039-d",
        "text": "Topical potent corticosteroid ointments applied to the entire body",
        "is_correct": false
      },
      {
        "id": "derm-sba-039-e",
        "text": "Oral methotrexate maintenance therapy",
        "is_correct": false
      },
      {
        "id": "derm-sba-039-a",
        "text": "Second-Generation H1-Antihistamines (e.g. Cetirizine, Loratadine, Fexofenadine), titrated up to four times standard dose if needed",
        "is_correct": true
      },
      {
        "id": "derm-sba-039-c",
        "text": "First-generation sedating antihistamines (Diphenhydramine) during daytime work hours",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-040",
    "stem": "Acne Vulgaris is driven by four primary interdependent pathogenic factors. What are they?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Acne pathogenesis involves: 1) follicular hyperkeratinization obstructing the pilosebaceous canal (microcomedone); 2) androgen-driven sebum hypersecretion; 3) proliferation of Cutibacterium acnes; 4) inflammation via TLR2 activation.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-040-b",
        "text": "Staphylococcus aureus infection, Sweating, High salt diet, and Poor face washing",
        "is_correct": false
      },
      {
        "id": "derm-sba-040-a",
        "text": "Follicular epidermal hyperkeratinization (comedogenesis), Excess sebum production under androgen control, Proliferation of Cutibacterium acnes, and Inflammatory immune responses",
        "is_correct": true
      },
      {
        "id": "derm-sba-040-e",
        "text": "Malignant transformation of melanocytes, Dry skin, Vitamin C deficiency, and Trauma",
        "is_correct": false
      },
      {
        "id": "derm-sba-040-d",
        "text": "Demodex folliculorum mites, Capillary fragility, Hot spices, and Alcoholism",
        "is_correct": false
      },
      {
        "id": "derm-sba-040-c",
        "text": "Autoantibodies against collagen, Sunburn, Thyroid deficiency, and Estrogen excess",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-041",
    "stem": "What is the defining clinical difference between a 'Closed Comedone' (whitehead) and an 'Open Comedone' (blackhead)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Open comedones (blackheads) have a patent, dilated follicular pore: exposure of impacted keratin, sebum, and melanin to air causes lipid/melanin oxidation, imparting a dark black color (not dirt). Closed comedones (whiteheads) have a constricted orifice.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-041-a",
        "text": "An open comedone has a widely dilated follicular orifice containing impacted keratin and oxidized lipids (dark melanin/lipid oxidation), whereas a closed comedone has a microscopic follicular opening",
        "is_correct": true
      },
      {
        "id": "derm-sba-041-c",
        "text": "Closed comedones contain bacterial colonies; open comedones are entirely viral",
        "is_correct": false
      },
      {
        "id": "derm-sba-041-e",
        "text": "Open comedones are malignant while closed comedones are benign",
        "is_correct": false
      },
      {
        "id": "derm-sba-041-b",
        "text": "Open comedones are filled with dirt from poor hygiene; closed comedones are filled with sterile pus",
        "is_correct": false
      },
      {
        "id": "derm-sba-041-d",
        "text": "Open comedones leave permanent hypertrophic scars; closed comedones never scar",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-042",
    "stem": "Oral Isotretinoin (13-cis-retinoic acid) is the most potent treatment for severe nodulocystic recalcitrant acne, but carries a major Black Box Warning for:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Isotretinoin is extraordinarily teratogenic: fetal exposure causes retinoic acid embryopathy in >30% of pregnancies (microtia/anotia, micrognathia, cleft palate, conotruncal cardiac defects, hydrocephalus), mandating strict pregnancy prevention programs (iPLEDGE).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-042-d",
        "text": "Sudden fatal cardiac ventricular fibrillation",
        "is_correct": false
      },
      {
        "id": "derm-sba-042-c",
        "text": "Permanent complete blindness from retinal detachment",
        "is_correct": false
      },
      {
        "id": "derm-sba-042-b",
        "text": "Irreversible acute renal cortical necrosis",
        "is_correct": false
      },
      {
        "id": "derm-sba-042-e",
        "text": "Acute fulminant aplastic anemia",
        "is_correct": false
      },
      {
        "id": "derm-sba-042-a",
        "text": "Severe Teratogenicity (high risk of severe craniofacial, cardiac, thymic, and central nervous system congenital malformations)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-043",
    "stem": "Rosacea is clinically differentiated from Acne Vulgaris by which key feature?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Rosacea features central facial erythema, telangiectasias, flushing (triggered by alcohol, hot drinks, spicy food, sun), and papules/pustules, but lacks comedones. Comedones are the prerequisite sine qua non of acne vulgaris.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-043-b",
        "text": "Acne vulgaris occurs only on the hands; rosacea occurs on the feet",
        "is_correct": false
      },
      {
        "id": "derm-sba-043-d",
        "text": "Rosacea is accompanied by severe comedone formation on the chest and back",
        "is_correct": false
      },
      {
        "id": "derm-sba-043-c",
        "text": "Rosacea affects only teenage boys under 15 years old",
        "is_correct": false
      },
      {
        "id": "derm-sba-043-e",
        "text": "Acne vulgaris never responds to topical antibiotics",
        "is_correct": false
      },
      {
        "id": "derm-sba-043-a",
        "text": "Absence of Comedones in Rosacea, accompanied by facial flushing, persistent central facial erythema, telangiectasias, and inflammatory papules/pustules",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-044",
    "stem": "Rhinophyma, a disfiguring complication of longstanding phymatous rosacea, is characterized by:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Inflammatory Dermatoses",
    "programme": "mbchb",
    "explanation": "Rhinophyma represents end-stage phymatous rosacea: marked hyperplasia of sebaceous glands and connective tissue of the nose, resulting in a bulbous, lobulated, purplish mass with dilated follicular pores, almost exclusively in men.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-044-c",
        "text": "Destruction of the nasal septal cartilage by tertiary syphilis (saddle nose)",
        "is_correct": false
      },
      {
        "id": "derm-sba-044-b",
        "text": "Malignant squamous transformation of the nasal tip",
        "is_correct": false
      },
      {
        "id": "derm-sba-044-e",
        "text": "Complete congenital absence of the nasal alae",
        "is_correct": false
      },
      {
        "id": "derm-sba-044-d",
        "text": "Fungal colonization of the nasal vestibule by Aspergillus",
        "is_correct": false
      },
      {
        "id": "derm-sba-044-a",
        "text": "Marked sebaceous gland hypertrophy, follicular plugging, and fibrous soft tissue hyperplasia of the Nose, predominantly affecting older men",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-045",
    "stem": "Non-Bullous Impetigo, the most common bacterial skin infection in children, is characterized by which pathognomonic lesion and caused by which pathogens?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Non-bullous impetigo accounts for ~70% of impetigo: transient vesicles/pustules rupture, and dried exudate produces diagnostic sticky, 'honey-colored' golden crusts on the face (perioral/perinasal), caused by S. aureus and Group A Streptococcus.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-045-c",
        "text": "Tense subepidermal blisters filled with clear serum; caused by Herpes simplex virus",
        "is_correct": false
      },
      {
        "id": "derm-sba-045-a",
        "text": "Erythematous macules and vesicles that rupture to form thick, 'Honey-Colored' (golden) adherent crusts; caused by Staphylococcus aureus and Streptococcus pyogenes (GAS)",
        "is_correct": true
      },
      {
        "id": "derm-sba-045-e",
        "text": "Violaceous verrucous plaques; caused by Mycobacterium marinum",
        "is_correct": false
      },
      {
        "id": "derm-sba-045-b",
        "text": "Deep, painful subcutaneous abscesses; caused by Pseudomonas aeruginosa",
        "is_correct": false
      },
      {
        "id": "derm-sba-045-d",
        "text": "Targetoid erythematous plaques; caused by Borrelia burgdorferi",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-046",
    "stem": "Bullous Impetigo and Staphylococcal Scalded Skin Syndrome (SSSS) are caused by the action of which specific bacterial toxins?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "S. aureus exfoliative toxins A and B are serine proteases that specifically cleave desmoglein-1 in the upper epidermis (stratum granulosum), causing subcorneal flaccid bullae and widespread superficial epidermal sloughing (SSSS in neonates/infants).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-046-c",
        "text": "Streptolysin O and Streptokinase produced by Streptococcus pyogenes",
        "is_correct": false
      },
      {
        "id": "derm-sba-046-d",
        "text": "Diphtheria toxin produced by Corynebacterium diphtheriae",
        "is_correct": false
      },
      {
        "id": "derm-sba-046-b",
        "text": "Alpha-toxin (lecithinase) produced by Clostridium perfringens",
        "is_correct": false
      },
      {
        "id": "derm-sba-046-a",
        "text": "Exfoliative Toxins A and B (ETA and ETB) produced by Staphylococcus aureus, which cleave Desmoglein-1 in the stratum granulosum",
        "is_correct": true
      },
      {
        "id": "derm-sba-046-e",
        "text": "Tetanospasmin neurotoxin produced by Clostridium tetani",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-047",
    "stem": "What is the primary anatomical and clinical distinction between Erysipelas and Cellulitis?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Erysipelas (predominantly Group A Strep) is superficial, featuring fiery-red, hot, intensely indurated erythema with sharply raised, palpable, demarcated borders (often facial/malar). Cellulitis is deeper, with diffuse, flat, poorly defined borders.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-047-d",
        "text": "Erysipelas occurs only on the hands; Cellulitis occurs only on the scalp",
        "is_correct": false
      },
      {
        "id": "derm-sba-047-b",
        "text": "Erysipelas is fungal; Cellulitis is viral",
        "is_correct": false
      },
      {
        "id": "derm-sba-047-a",
        "text": "Erysipelas involves the superficial dermis and prominent superficial lymphatics, with sharply demarcated raised borders; Cellulitis involves the deep dermis and subcutaneous fat, with diffuse, poorly demarcated margins",
        "is_correct": true
      },
      {
        "id": "derm-sba-047-e",
        "text": "Erysipelas is caused by Mycobacteria; Cellulitis is caused by Clostridium",
        "is_correct": false
      },
      {
        "id": "derm-sba-047-c",
        "text": "Erysipelas is painless; Cellulitis is agonizingly painful",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-048",
    "stem": "Ecthyma is distinguished from simple impetigo by:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Ecthyma is a deep, ulcerative form of impetigo (caused by S. pyogenes or S. aureus): vesicles erode deeply through the epidermis into the dermis, producing painful, 'punched-out' circular ulcers beneath thick crusts that heal with permanent scars.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-048-d",
        "text": "The presence of tense subepidermal bullae containing blood",
        "is_correct": false
      },
      {
        "id": "derm-sba-048-b",
        "text": "Its exclusive occurrence in newborns during the first 24 hours of life",
        "is_correct": false
      },
      {
        "id": "derm-sba-048-a",
        "text": "Deeper ulceration extending through the full thickness of the epidermis into the dermis ('punched-out' ulcers covered by thick hard crusts), healing with scar formation",
        "is_correct": true
      },
      {
        "id": "derm-sba-048-e",
        "text": "Its painless, non-inflammatory clinical course",
        "is_correct": false
      },
      {
        "id": "derm-sba-048-c",
        "text": "A total absence of bacterial colonization",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-049",
    "stem": "Folliculitis, Furuncles (boils), and Carbuncles represent a continuum of hair follicle infections typically caused by Staphylococcus aureus. A Carbuncle is defined as:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "A folliculitis affects one follicle; a furuncle is a deep necrotizing abscess of a follicle and surrounding dermis; a carbuncle is an aggregate of multiple connected furuncles draining via multiple follicular orifices, accompanied by systemic fever and malaise.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-049-a",
        "text": "A confluence of multiple adjacent furuncles coalescing into a single, deep, painful, suppurative inflammatory mass with multiple draining sinus openings through the skin",
        "is_correct": true
      },
      {
        "id": "derm-sba-049-b",
        "text": "A superficial infection confined strictly to the follicular infundibulum (folliculitis)",
        "is_correct": false
      },
      {
        "id": "derm-sba-049-e",
        "text": "A fungal infection of the hair shaft causing breakage",
        "is_correct": false
      },
      {
        "id": "derm-sba-049-c",
        "text": "A single deep necrotizing infection centered on a single hair follicle (furuncle)",
        "is_correct": false
      },
      {
        "id": "derm-sba-049-d",
        "text": "A non-infectious autoimmune destruction of hair follicles",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-050",
    "stem": "Hot Tub Folliculitis (pseudomonal folliculitis) is caused by which pathogen and typically presents:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Pseudomonas aeruginosa thrives in warm, poorly chlorinated water. Inoculation through open hair follicles causes an itchy, tender, pustular folliculitis concentrated in regions occluded by bathing suits, usually self-limiting in 7-10 days.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-050-d",
        "text": "Streptococcus pneumoniae; presenting as painful ulcers on the shins",
        "is_correct": false
      },
      {
        "id": "derm-sba-050-b",
        "text": "Staphylococcus epidermidis; presenting as non-pruritic macules on the face",
        "is_correct": false
      },
      {
        "id": "derm-sba-050-e",
        "text": "Trichophyton rubrum; presenting as annular scaling rings on the scalp",
        "is_correct": false
      },
      {
        "id": "derm-sba-050-a",
        "text": "Pseudomonas aeruginosa; presenting as pruritic follicular pustules and erythematous papules over areas covered by wet bathing suits, appearing 8 to 48 hours after using a contaminated heated pool or hot tub",
        "is_correct": true
      },
      {
        "id": "derm-sba-050-c",
        "text": "Candida albicans; presenting as white plaques in the oral cavity",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-051",
    "stem": "Necrotizing Fasciitis (the 'flesh-eating disease') is a surgical emergency. What clinical signs are characteristic 'red flags' signaling deep necrotizing infection rather than simple cellulitis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Clinical hallmarks of necrotizing soft tissue infection: severe pain out of proportion to skin findings, rapid progression beyond erythema borders, 'dishwater' fluid discharge, dusky skin necrosis, loss of sensation (cutaneous nerve necrosis), and gas crepitus.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-051-e",
        "text": "Development of silvery-white scales over extensor joints",
        "is_correct": false
      },
      {
        "id": "derm-sba-051-c",
        "text": "Mild itchy rash with normal vital signs and normal white blood cell count",
        "is_correct": false
      },
      {
        "id": "derm-sba-051-b",
        "text": "Slow, indolent progression over 6 months without pain",
        "is_correct": false
      },
      {
        "id": "derm-sba-051-a",
        "text": "Pain OUT OF PROPORTION to physical findings, rapid progression, wooden-hard subcutaneous induration, bullae containing dusky/violaceous fluid, skin anesthesia, and crepitus (gas in soft tissues)",
        "is_correct": true
      },
      {
        "id": "derm-sba-051-d",
        "text": "Well-demarcated raised bright red borders on the cheeks",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-052",
    "stem": "Type II Necrotizing Fasciitis (monomicrobial necrotizing fasciitis) is most commonly caused by:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Type I necrotizing fasciitis is polymicrobial (mixed aerobes and anaerobes, often in diabetics/post-op/perineal Fournier gangrene). Type II necrotizing fasciitis is monomicrobial, overwhelmingly caused by invasive Group A Streptococcus (S. pyogenes).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-052-a",
        "text": "Streptococcus pyogenes (Group A beta-hemolytic Streptococcus, often accompanied by Staphylococcal toxic shock)",
        "is_correct": true
      },
      {
        "id": "derm-sba-052-b",
        "text": "Polymicrobial mixture of anaerobes and Enterobacteriaceae (Type I necrotizing fasciitis, Fournier gangrene)",
        "is_correct": false
      },
      {
        "id": "derm-sba-052-e",
        "text": "Pseudomonas aeruginosa alone",
        "is_correct": false
      },
      {
        "id": "derm-sba-052-c",
        "text": "Clostridium tetani",
        "is_correct": false
      },
      {
        "id": "derm-sba-052-d",
        "text": "Mycobacterium tuberculosis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-053",
    "stem": "Herpes Zoster (Shingles) is caused by the reactivation of latent Varicella-Zoster Virus (VZV) residing within which anatomical structures?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Following primary varicella (chickenpox), VZV remains dormant in dorsal root or cranial nerve sensory ganglia for decades. Reactivation travels down the sensory axon, producing dermatomal neuralgic pain followed by clustered vesicular eruptions.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-053-c",
        "text": "Autonomic celiac ganglion",
        "is_correct": false
      },
      {
        "id": "derm-sba-053-b",
        "text": "Anterior horn motor neurons of the spinal cord",
        "is_correct": false
      },
      {
        "id": "derm-sba-053-d",
        "text": "Sympathetic paravertebral chain",
        "is_correct": false
      },
      {
        "id": "derm-sba-053-a",
        "text": "Dorsal Root Ganglia or Cranial Nerve Sensory Ganglia (especially the Gasserian ganglion of CN V)",
        "is_correct": true
      },
      {
        "id": "derm-sba-053-e",
        "text": "Cerebellar Purkinje neurons",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-054",
    "stem": "Hutchinson's Sign in Herpes Zoster Ophthalmicus refers to:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Hutchinson sign in VZV ophthalmicus denotes zoster lesions on the tip, side, or root of the nose, innervated by the external nasal branch of the nasociliary nerve (CN V1), signaling an urgent risk of corneal ulceration and visual loss.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-054-c",
        "text": "Pitted fingernails in psoriatic arthritis",
        "is_correct": false
      },
      {
        "id": "derm-sba-054-e",
        "text": "Facial nerve palsy with external auditory canal vesicles (Ramsay Hunt syndrome)",
        "is_correct": false
      },
      {
        "id": "derm-sba-054-b",
        "text": "Triad of notched incisors, eighth nerve deafness, and interstitial keratitis in congenital syphilis",
        "is_correct": false
      },
      {
        "id": "derm-sba-054-a",
        "text": "Vesicles on the side or tip of the nose (nasociliary branch of the ophthalmic nerve, CN V1), indicating a high risk of serious ocular involvement (keratitis, uveitis)",
        "is_correct": true
      },
      {
        "id": "derm-sba-054-d",
        "text": "Subungual hyperkeratosis in onychomycosis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-055",
    "stem": "Ramsay Hunt Syndrome (Herpes Zoster Oticus) is caused by VZV reactivation in the Geniculate Ganglion of which cranial nerve, and presents with which clinical features?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Ramsay Hunt syndrome (herpes zoster oticus) involves the geniculate ganglion of CN VII: severe otalgia, ipsilateral lower motor neuron facial paralysis, and vesicles in the external auditory canal, pinna, or anterior two-thirds of tongue.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-055-a",
        "text": "Cranial Nerve VII (Facial nerve); presenting with acute peripheral facial nerve palsy, ear pain, and a vesicular rash in the external auditory canal and auricle",
        "is_correct": true
      },
      {
        "id": "derm-sba-055-e",
        "text": "Cranial Nerve XII; presenting with tongue deviation",
        "is_correct": false
      },
      {
        "id": "derm-sba-055-b",
        "text": "Cranial Nerve VIII; presenting with vertigo alone without weakness",
        "is_correct": false
      },
      {
        "id": "derm-sba-055-c",
        "text": "Cranial Nerve V; presenting with trigeminal neuralgia without rash",
        "is_correct": false
      },
      {
        "id": "derm-sba-055-d",
        "text": "Cranial Nerve IX; presenting with vocal cord paralysis and dysphagia",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-056",
    "stem": "Molluscum Contagiosum is caused by which viral agent, and what is its pathognomonic clinical and microscopic appearance?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Molluscum contagiosum (Molluscipoxvirus) produces discrete, firm, smooth, dome-shaped pearly papules with central umbilication from which a curd-like core can be expressed. Biopsy reveals giant intracytoplasmic Henderson-Paterson inclusion bodies.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-056-e",
        "text": "Epstein-Barr virus; oral hairy leukoplakia on lateral tongue",
        "is_correct": false
      },
      {
        "id": "derm-sba-056-d",
        "text": "Coxsackievirus A16; painful vesicles on palms, soles, and oral mucosa",
        "is_correct": false
      },
      {
        "id": "derm-sba-056-c",
        "text": "Parvovirus B19; 'slapped-cheek' facial erythema with lace-like rash",
        "is_correct": false
      },
      {
        "id": "derm-sba-056-b",
        "text": "Human Papillomavirus type 1; hyperkeratotic verrucous papules with koilocytes",
        "is_correct": false
      },
      {
        "id": "derm-sba-056-a",
        "text": "Poxvirus (Molluscum contagiosum virus); presenting as firm, dome-shaped, pearly, Umbilicated papules; microscopically displaying large eosinophilic Henderson-Paterson (molluscum) inclusion bodies",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-057",
    "stem": "Common Warts (Verruca Vulgaris) and Plantar Warts (Verruca Plantaris) are benign epithelial proliferations caused by infection with:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Verruca vulgaris (common warts: HPV 2, 4, 7) and verruca plantaris (plantar warts: HPV 1) are hyperkeratotic papules caused by low-risk cutaneous HPVs that infect basal keratinocytes, inducing acanthosis and koilocytosis.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-057-d",
        "text": "Varicella-zoster virus",
        "is_correct": false
      },
      {
        "id": "derm-sba-057-a",
        "text": "Human Papillomaviruses (HPV types 1, 2, 4, 27, and 57)",
        "is_correct": true
      },
      {
        "id": "derm-sba-057-b",
        "text": "Herpes Simplex Virus type 1",
        "is_correct": false
      },
      {
        "id": "derm-sba-057-e",
        "text": "Cytomegalovirus",
        "is_correct": false
      },
      {
        "id": "derm-sba-057-c",
        "text": "Molluscum contagiosum virus",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-058",
    "stem": "Condylomata Acuminata (anogenital warts) are sexually transmitted benign papillomatous lesions most commonly caused by which low-risk HPV types?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Over 90% of genital warts (condylomata acuminata) are caused by non-oncogenic HPV types 6 and 11. Quadrivalent and nonavalent HPV vaccines protect against these types, dramatically reducing anogenital warts.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-058-e",
        "text": "HPV types 31 and 33",
        "is_correct": false
      },
      {
        "id": "derm-sba-058-d",
        "text": "HPV types 5 and 8 (epidermodysplasia verruciformis)",
        "is_correct": false
      },
      {
        "id": "derm-sba-058-c",
        "text": "HPV types 1 and 2",
        "is_correct": false
      },
      {
        "id": "derm-sba-058-b",
        "text": "HPV types 16 and 18 (high-risk oncogenic types causing cervical/anal cancer)",
        "is_correct": false
      },
      {
        "id": "derm-sba-058-a",
        "text": "HPV types 6 and 11",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-059",
    "stem": "Dermatophyte fungal infections (Tinea / Ringworm) of the skin, hair, and nails are caused by species belonging to which three genera of fungi?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Dermatophytes are keratinophilic molds classified into three genera: Trichophyton (infects skin, hair, and nails; T. rubrum is most common globally), Microsporum (skin and hair), and Epidermophyton (skin and nails).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-059-a",
        "text": "Trichophyton, Microsporum, and Epidermophyton",
        "is_correct": true
      },
      {
        "id": "derm-sba-059-d",
        "text": "Histoplasma, Blastomyces, and Coccidioides",
        "is_correct": false
      },
      {
        "id": "derm-sba-059-c",
        "text": "Aspergillus, Mucor, and Rhizopus",
        "is_correct": false
      },
      {
        "id": "derm-sba-059-b",
        "text": "Candida, Cryptococcus, and Malassezia",
        "is_correct": false
      },
      {
        "id": "derm-sba-059-e",
        "text": "Sporothrix, Fonsecaea, and Cladophialophora",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-060",
    "stem": "What is the primary bedside diagnostic test used to confirm a suspected Dermatophyte infection from skin scrapings?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "A 10-20% KOH preparation dissolves keratin squames while leaving the chitinous fungal cell wall intact, revealing uniform, branching, translucent septate hyphae under light microscopy.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-060-a",
        "text": "Potassium Hydroxide (10-20% KOH) preparation under light microscopy, demonstrating branching, septate hyphae and arthroconidia",
        "is_correct": true
      },
      {
        "id": "derm-sba-060-b",
        "text": "Gram stain under oil immersion, demonstrating Gram-positive cocci in clusters",
        "is_correct": false
      },
      {
        "id": "derm-sba-060-e",
        "text": "Darkfield microscopy, demonstrating motile spirochetes",
        "is_correct": false
      },
      {
        "id": "derm-sba-060-c",
        "text": "Acid-fast (Ziehl-Neelsen) stain, demonstrating red bacilli",
        "is_correct": false
      },
      {
        "id": "derm-sba-060-d",
        "text": "Tzanck smear, demonstrating multinucleated giant cells",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-061",
    "stem": "Tinea Versicolor (Pityriasis Versicolor) is a superficial fungal infection of the stratum corneum caused by Malassezia species, characterized on microscopic KOH mount by:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Malassezia globosa/furfur is a lipophilic, dimorphic commensal yeast of sebum-rich skin. In hot/humid weather, transformation from yeast to hyphal form causes hypopigmented or hyperpigmented scaling macules with 'spaghetti and meatballs' on KOH.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-061-a",
        "text": "A 'Spaghetti and Meatballs' appearance (short, blunt, curved pseudohyphae mixed with clusters of round, thick-walled yeast cells)",
        "is_correct": true
      },
      {
        "id": "derm-sba-061-b",
        "text": "Long, thin, branching, septate hyphae without any yeast forms",
        "is_correct": false
      },
      {
        "id": "derm-sba-061-c",
        "text": "Pseudohyphae with true budding blastoconidia (Candida)",
        "is_correct": false
      },
      {
        "id": "derm-sba-061-e",
        "text": "Broad, non-septate hyphae branching at 90-degree angles (Mucor)",
        "is_correct": false
      },
      {
        "id": "derm-sba-061-d",
        "text": "Encapsulated round yeast cells with narrow-based budding on India ink",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-062",
    "stem": "Why do lesions of Tinea Versicolor typically appear HYPOPIGMENTED in individuals with darker skin phototypes?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Malassezia synthesizes dicarboxylic acids (chiefly azelaic acid), which act as competitive inhibitors of tyrosinase and exert direct cytotoxic effects on hyperactive melanocytes, producing characteristic pale hypopigmented patches.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-062-e",
        "text": "The fungal cells absorb all ultraviolet light, preventing tanning",
        "is_correct": false
      },
      {
        "id": "derm-sba-062-d",
        "text": "Malassezia secretes high levels of hydroquinone into the dermis",
        "is_correct": false
      },
      {
        "id": "derm-sba-062-c",
        "text": "The fungus produces a bleaching compound that oxidizes preformed melanin to water",
        "is_correct": false
      },
      {
        "id": "derm-sba-062-b",
        "text": "The fungal mycelia physically scrape the melanocytes out of the basal layer",
        "is_correct": false
      },
      {
        "id": "derm-sba-062-a",
        "text": "Malassezia produces Azelaic Acid, which competitively inhibits Tyrosinase in melanocytes, impairing melanin synthesis",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-063",
    "stem": "Oral Thrush (Pseudomembranous Candidiasis) is distinguished from Oral Hairy Leukoplakia by which clinical physical finding?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Oral candidiasis presents as white curd-like plaques on buccal mucosa/palate that scrape off easily, exposing an underlying erythematous bleeding base. Oral hairy leukoplakia (EBV in HIV) is fixed to the lateral tongue and cannot be scraped off.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-063-a",
        "text": "The white curd-like plaques of Candida CAN BE EASILY WIPED or scraped off with a tongue blade, leaving a red, raw, bleeding erythematous base",
        "is_correct": true
      },
      {
        "id": "derm-sba-063-d",
        "text": "Oral hairy leukoplakia disappears immediately after oral nystatin swish",
        "is_correct": false
      },
      {
        "id": "derm-sba-063-b",
        "text": "Candida plaques cannot be scraped off under any circumstances",
        "is_correct": false
      },
      {
        "id": "derm-sba-063-e",
        "text": "Candida plaques fluoresce bright green under Wood's lamp",
        "is_correct": false
      },
      {
        "id": "derm-sba-063-c",
        "text": "Candida occurs exclusively on the lateral borders of the tongue",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-064",
    "stem": "Scabies is an intensely pruritic ectoparasitic infestation caused by Sarcoptes scabiei var. hominis. What is the pathognomonic clinical lesion of scabies?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "The pathognomonic lesion of scabies is the burrow: a 2-15 mm thread-like, serpiginous elevated track excavated by the fertilised female mite in the stratum corneum, typically in finger web spaces, flexor wrists, axillae, umbilicus, and genitalia.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-064-e",
        "text": "Pemphigoid tense blisters on the shins",
        "is_correct": false
      },
      {
        "id": "derm-sba-064-d",
        "text": "Large flaccid intraepidermal bullae on the torso",
        "is_correct": false
      },
      {
        "id": "derm-sba-064-c",
        "text": "Violaceous polygonal flat-topped shiny papules",
        "is_correct": false
      },
      {
        "id": "derm-sba-064-b",
        "text": "Circular target lesions with central dusky necrosis",
        "is_correct": false
      },
      {
        "id": "derm-sba-064-a",
        "text": "Burrows (short, wavy, linear or S-shaped greyish-white ridges in the stratum corneum, ending in a tiny vesicle harboring the female mite)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-065",
    "stem": "What is the FIRST-LINE topical treatment of choice for Human Scabies in adults and children over 2 months of age?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Permethrin 5% cream (neurotoxic to mites via voltage-gated Na+ channels) applied from neck to toes (including scalp in infants/elderly) for 8-14 hours and washed off, repeated after 7 days to kill newly hatched nymphs, is first-line for scabies.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-065-d",
        "text": "Oral Amoxicillin 500 mg three times daily for 10 days",
        "is_correct": false
      },
      {
        "id": "derm-sba-065-c",
        "text": "Topical Clotrimazole 1% cream applied to the web spaces",
        "is_correct": false
      },
      {
        "id": "derm-sba-065-e",
        "text": "Lindane 1% lotion applied daily for one month (neurotoxic)",
        "is_correct": false
      },
      {
        "id": "derm-sba-065-b",
        "text": "Topical 1% Hydrocortisone cream applied twice daily for 2 weeks",
        "is_correct": false
      },
      {
        "id": "derm-sba-065-a",
        "text": "Permethrin 5% dermal cream, applied from the neck down to the soles of the feet, left on for 8 to 14 hours, and repeated in 7 days",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-066",
    "stem": "Crusted (Norwegian) Scabies is a severe, highly contagious variant of scabies that occurs predominantly in:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Infections",
    "programme": "mbchb",
    "explanation": "Crusted (Norwegian) scabies occurs in impaired cell-mediated immunity (HIV, leukemia, immunosuppression) or inability to scratch: host immune failure allows millions of mites to proliferate under thick, fissured, hyperkeratotic crusts. Highly contagious.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-066-b",
        "text": "Healthy young athletes participating in contact sports",
        "is_correct": false
      },
      {
        "id": "derm-sba-066-c",
        "text": "Newborns during the first week of life delivered vaginally",
        "is_correct": false
      },
      {
        "id": "derm-sba-066-d",
        "text": "Patients with isolated allergic contact dermatitis to nickel",
        "is_correct": false
      },
      {
        "id": "derm-sba-066-e",
        "text": "Elderly individuals with isolated osteoarthritis of the knees",
        "is_correct": false
      },
      {
        "id": "derm-sba-066-a",
        "text": "Immunocompromised individuals (e.g. advanced HIV, organ transplant recipients) and institutionalized or neurologically impaired patients, presenting with millions of mites beneath thick hyperkeratotic psoriasiform crusts with minimal or absent pruritus",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-067",
    "stem": "What is the single MOST common cutaneous malignant neoplasm in humans?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "Basal cell carcinoma (BCC) is the most common cancer in humans, accounting for ~75-80% of all non-melanoma skin cancers. It arises from the basal layer of the epidermis/follicular appendages and rarely metastasizes (<0.1%).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-067-a",
        "text": "Basal Cell Carcinoma (BCC)",
        "is_correct": true
      },
      {
        "id": "derm-sba-067-e",
        "text": "Kaposi Sarcoma",
        "is_correct": false
      },
      {
        "id": "derm-sba-067-b",
        "text": "Squamous Cell Carcinoma (SCC)",
        "is_correct": false
      },
      {
        "id": "derm-sba-067-c",
        "text": "Malignant Melanoma",
        "is_correct": false
      },
      {
        "id": "derm-sba-067-d",
        "text": "Mycosis Fungoides (Cutaneous T-cell lymphoma)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-068",
    "stem": "What is the classic clinical appearance of a Nodular Basal Cell Carcinoma (the most common clinical subtype of BCC)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "Nodular BCC classically appears on sun-exposed head and neck as a translucent, waxy, pearly nodule with rolled borders, central ulceration or depression ('rodent ulcer'), and arborizing branching telangiectatic vessels.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-068-e",
        "text": "A rapidly enlarging, violaceous vascular nodule in an HIV patient",
        "is_correct": false
      },
      {
        "id": "derm-sba-068-a",
        "text": "A shiny, pearly or translucent papule or nodule with prominent overlying arborizing Telangiectasias, rolled borders, and a central ulceration ('rodent ulcer')",
        "is_correct": true
      },
      {
        "id": "derm-sba-068-c",
        "text": "A changing, asymmetrical, multi-colored macule with irregular notched borders",
        "is_correct": false
      },
      {
        "id": "derm-sba-068-b",
        "text": "A hyperkeratotic, ulcerated, crusting indurated plaque on the lower lip",
        "is_correct": false
      },
      {
        "id": "derm-sba-068-d",
        "text": "A soft, pedunculated, flesh-colored polyp in the axilla",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-069",
    "stem": "What pathognomonic histological features define Basal Cell Carcinoma on microscopic biopsy?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "BCC histology: lobules/nests of uniform basophilic cells with high N/C ratios, peripheral palisading of nuclei at the periphery of tumor nests, mucinous stroma, and characteristic retraction artifact (clefting) separating the tumor from stroma.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-069-a",
        "text": "Nests and islands of basaloid cells with hyperchromatic nuclei, prominent Peripheral Palisades (outer row of columnar nuclei aligned in parallel), and Peritumoral Clefting (retraction artifact separating nests from stroma)",
        "is_correct": true
      },
      {
        "id": "derm-sba-069-d",
        "text": "Sheets of spindle cells forming slit-like vascular channels filled with red blood cells",
        "is_correct": false
      },
      {
        "id": "derm-sba-069-e",
        "text": "Clonal proliferation of CD4+ T-lymphocytes forming Pautrier microabscesses",
        "is_correct": false
      },
      {
        "id": "derm-sba-069-b",
        "text": "Atypical squamous cells invading the dermis with keratin pearls and intercellular bridges",
        "is_correct": false
      },
      {
        "id": "derm-sba-069-c",
        "text": "Atypical melanocytes arranged in pagetoid scatter throughout the upper epidermis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-070",
    "stem": "The genetic pathogenesis of Basal Cell Carcinoma is overwhelmingly driven by dysregulation of which molecular signalling pathway?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "Over 90% of sporadic BCCs and Gorlin syndrome (nevoid BCC syndrome) harbor mutations in the Hedgehog pathway: PTCH1 normally inhibits Smoothened (SMO). Loss of PTCH1 releases SMO, constitutively activating GLI transcription factors.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-070-a",
        "text": "Hedgehog (Hh) signalling pathway, caused by loss-of-function mutations in the PTCH1 tumor suppressor gene (or activating SMO mutations)",
        "is_correct": true
      },
      {
        "id": "derm-sba-070-b",
        "text": "MAP kinase pathway driven exclusively by BRAF V600E mutations",
        "is_correct": false
      },
      {
        "id": "derm-sba-070-c",
        "text": "Wnt/beta-catenin pathway driven by APC mutations",
        "is_correct": false
      },
      {
        "id": "derm-sba-070-e",
        "text": "PI3K/Akt pathway activated by PTEN mutations",
        "is_correct": false
      },
      {
        "id": "derm-sba-070-d",
        "text": "Notch receptor signalling pathway inactivation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-071",
    "stem": "Actinic Keratosis (Solar Keratosis) is a premalignant cutaneous lesion that represents a precursor to which skin cancer?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "Actinic keratoses are UV-induced premalignant intraepithelial dysplasias of keratinocytes (sandpaper-like rough scaly macules on sun-damaged skin), carrying a continuous annual risk of transformation (~0.1-1% per lesion per year) into invasive SCC.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-071-c",
        "text": "Malignant Melanoma",
        "is_correct": false
      },
      {
        "id": "derm-sba-071-a",
        "text": "Cutaneous Squamous Cell Carcinoma (cSCC)",
        "is_correct": true
      },
      {
        "id": "derm-sba-071-d",
        "text": "Merkel Cell Carcinoma",
        "is_correct": false
      },
      {
        "id": "derm-sba-071-b",
        "text": "Basal Cell Carcinoma",
        "is_correct": false
      },
      {
        "id": "derm-sba-071-e",
        "text": "Dermatofibrosarcoma Protuberans",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-072",
    "stem": "What are the pathognomonic histological features of Invasive Squamous Cell Carcinoma of the skin?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "Invasive SCC is characterized by nests and sheets of atypical pleomorphic keratinocytes invading past the basement membrane into the dermis, featuring eosinophilic keratin pearls, squamous eddies, and visible desmosomal intercellular bridges.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-072-a",
        "text": "Invasion of atypical polygonal squamous epithelial cells into the dermis, displaying Keratin Pearls (concentric lamellae of cornified cells) and Intercellular Bridges (desmosomes)",
        "is_correct": true
      },
      {
        "id": "derm-sba-072-b",
        "text": "Palisading basaloid nests with stromal retraction clefts",
        "is_correct": false
      },
      {
        "id": "derm-sba-072-c",
        "text": "Single atypical melanocytes descending along nerve twigs",
        "is_correct": false
      },
      {
        "id": "derm-sba-072-d",
        "text": "Spindle cells with Birbeck granules",
        "is_correct": false
      },
      {
        "id": "derm-sba-072-e",
        "text": "Dilated lymphatic vessels lined by benign endothelium",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-073",
    "stem": "Keratoacanthoma is a distinctive cutaneous neoplasm characterized by:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "Keratoacanthoma (regarded as a well-differentiated variant of SCC) grows rapidly over 4-6 weeks to form a crateriform nodule with a central volcanic keratin-filled plug, followed by stabilization and potential spontaneous involution over months.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-073-c",
        "text": "An asymmetric, black macule with notched borders",
        "is_correct": false
      },
      {
        "id": "derm-sba-073-b",
        "text": "A slow, decades-long growth of a pearly nodule with telangiectasias",
        "is_correct": false
      },
      {
        "id": "derm-sba-073-e",
        "text": "A widespread eruption of itchy erythematous wheals",
        "is_correct": false
      },
      {
        "id": "derm-sba-073-d",
        "text": "A soft, compressible, subcutaneous cystic lesion",
        "is_correct": false
      },
      {
        "id": "derm-sba-073-a",
        "text": "Rapid initial growth over several weeks into a symmetrical, dome-shaped, flesh-colored crateriform nodule with a central hyperkeratotic Keratin Plug, which may spontaneously regress",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-074",
    "stem": "What does the 'ABCDE' rule for the clinical detection of Malignant Melanoma stand for?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "The clinical ABCDE rule for early melanoma detection: Asymmetry (one half does not match the other), Border (irregular, scalloped, notched), Color (variegated: brown, black, blue, red, white), Diameter (>6 mm, pencil eraser), and Evolution (enlarging/changing).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-074-a",
        "text": "Asymmetry, Border irregularity, Color variegation, Diameter > 6 mm, and Evolution (changing over time)",
        "is_correct": true
      },
      {
        "id": "derm-sba-074-b",
        "text": "Age > 60, Bleeding, Crust, Depth, and Erythema",
        "is_correct": false
      },
      {
        "id": "derm-sba-074-d",
        "text": "Arteriolar, Benign, Circular, Dermal, and Encapsulated",
        "is_correct": false
      },
      {
        "id": "derm-sba-074-c",
        "text": "Acanthosis, Basal layer, Clefting, Desmoplasia, and Edema",
        "is_correct": false
      },
      {
        "id": "derm-sba-074-e",
        "text": "Acute, Blistering, Congenital, Diffuse, and Exophytic",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-075",
    "stem": "What is the single MOST powerful histological prognostic predictor of survival and metastatic potential in localized Primary Cutaneous Melanoma?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "Breslow thickness (measured in mm using an ocular micrometer) is the single most important microstaging and prognostic factor for primary cutaneous melanoma, dictating surgical excision margins (1-2 cm) and sentinel lymph node biopsy indications (>0.8-1.0 mm).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-075-a",
        "text": "Breslow Depth (measured in millimeters from the top of the granular cell layer of the epidermis to the deepest invading melanoma cell in the dermis)",
        "is_correct": true
      },
      {
        "id": "derm-sba-075-c",
        "text": "Presence or absence of ulceration alone",
        "is_correct": false
      },
      {
        "id": "derm-sba-075-b",
        "text": "Clark Level of anatomical tissue invasion",
        "is_correct": false
      },
      {
        "id": "derm-sba-075-d",
        "text": "Total surface area of the pigment lesion in square centimeters",
        "is_correct": false
      },
      {
        "id": "derm-sba-075-e",
        "text": "The patient's age and gender exclusively",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-076",
    "stem": "Which oncogenic driver mutation is present in approximately 40 to 50% of Cutaneous Melanomas, making them susceptible to targeted kinase inhibitor therapy?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "~50% of cutaneous melanomas harbor an activating point mutation in BRAF (valine-to-glutamic acid at codon 600, V600E), causing constitutive BRAF/MEK/ERK signalling, targeted therapeutically with BRAF inhibitors (vemurafenib, dabrafenib) + MEK inhibitors.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-076-a",
        "text": "BRAF V600E (or V600K) activating mutation in the MAP kinase pathway",
        "is_correct": true
      },
      {
        "id": "derm-sba-076-b",
        "text": "EGFR exon 19 deletion",
        "is_correct": false
      },
      {
        "id": "derm-sba-076-e",
        "text": "KIT exon 11 mutation exclusively in all non-sun exposed areas",
        "is_correct": false
      },
      {
        "id": "derm-sba-076-c",
        "text": "KRAS G12D point mutation",
        "is_correct": false
      },
      {
        "id": "derm-sba-076-d",
        "text": "BCR-ABL1 fusion kinase",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-077",
    "stem": "What is the characteristic clinical presentation of Lentigo Maligna Melanoma, and in which population is it most commonly diagnosed?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "Lentigo maligna is melanoma in situ arising on chronically sun-damaged skin (head, neck, face) of elderly patients. It undergoes prolonged horizontal (radial) growth as a flat, irregular, mottled freckle-like patch before developing vertical invasion.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-077-d",
        "text": "A tender purpuric lesion on the palms that bleeds with minor trauma",
        "is_correct": false
      },
      {
        "id": "derm-sba-077-a",
        "text": "An asymmetric, slowly expanding, variegated brown-to-black macule with irregular borders on the chronically Sun-Damaged Face of an Elderly individual",
        "is_correct": true
      },
      {
        "id": "derm-sba-077-b",
        "text": "A rapidly growing blue-black nodule on the trunk of a 25-year-old female",
        "is_correct": false
      },
      {
        "id": "derm-sba-077-e",
        "text": "Multiple congenital pigmented nevi on the bathing-trunk distribution of an infant",
        "is_correct": false
      },
      {
        "id": "derm-sba-077-c",
        "text": "A subungual longitudinal black band on the hallux of a dark-skinned individual",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-078",
    "stem": "Acral Lentiginous Melanoma is distinctive because it is:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "Acral lentiginous melanoma occurs on non-hair-bearing palmar and plantar surfaces and subungually. It is NOT related to UV exposure, occurs with equal absolute incidence across all races, but constitutes up to 60-70% of melanomas in African populations.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-078-c",
        "text": "Exclusively associated with high ultraviolet B radiation exposure",
        "is_correct": false
      },
      {
        "id": "derm-sba-078-b",
        "text": "Caused by intense, intermittent blistering sunburns during childhood",
        "is_correct": false
      },
      {
        "id": "derm-sba-078-d",
        "text": "The most common melanoma in fair-skinned red-haired individuals",
        "is_correct": false
      },
      {
        "id": "derm-sba-078-e",
        "text": "Characterized by rapid spontaneous regression in over 90% of cases",
        "is_correct": false
      },
      {
        "id": "derm-sba-078-a",
        "text": "The most common subtype of melanoma in individuals with darker skin phototypes (African, Asian, and Hispanic descent), located on the Palms, Soles, and beneath the Nails (subungual)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-079",
    "stem": "Hutchinson's Sign in Malignant Melanoma (distinct from Hutchinson's sign in herpes zoster) refers to:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "In oncology, Hutchinson's sign is periungual spread of melanin pigment from a longitudinal melanonychia onto the proximal or lateral nail folds, strongly indicating malignant subungual melanoma (rather than benign nail matrix lentigo).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-079-a",
        "text": "Pigmentation extending from the subungual nail bed onto the adjacent periungual skin (proximal or lateral nail folds), indicating invasive subungual melanoma",
        "is_correct": true
      },
      {
        "id": "derm-sba-079-e",
        "text": "A dark black freckle on the iris of the eye",
        "is_correct": false
      },
      {
        "id": "derm-sba-079-b",
        "text": "Vesicles on the tip of the nose indicating nasociliary nerve involvement",
        "is_correct": false
      },
      {
        "id": "derm-sba-079-c",
        "text": "Pearly borders with central ulceration on the lower lip",
        "is_correct": false
      },
      {
        "id": "derm-sba-079-d",
        "text": "Development of vitiligo around a benign intradermal nevus (halo nevus)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-080",
    "stem": "Seborrheic Keratosis is a common, completely benign epithelial skin tumor that classically presents as:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "Seborrheic keratoses are very common, benign, clonal epidermal tumors (often with FGFR3 or PIK3CA mutations). Grossly: 'stuck-on' waxy, greasy, brownish-black papules/plaques with microscopic horn pseudocysts and invaginated keratin.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-080-a",
        "text": "A well-circumscribed, 'stuck-on', waxy, hyperkeratotic or verrucous brown plaque with visible horn pseudocysts, occurring in older adults",
        "is_correct": true
      },
      {
        "id": "derm-sba-080-b",
        "text": "A shiny translucent nodule with telangiectasias that bleeds repeatedly",
        "is_correct": false
      },
      {
        "id": "derm-sba-080-c",
        "text": "A rapidly ulcerating crateriform nodule on the lower lip",
        "is_correct": false
      },
      {
        "id": "derm-sba-080-d",
        "text": "A firm subcutaneous rubbery cyst with a central punctum",
        "is_correct": false
      },
      {
        "id": "derm-sba-080-e",
        "text": "An erythematous scaling plaque with silvery micaceous scale on the elbow",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-081",
    "stem": "The sudden eruption of hundreds of itchy Seborrheic Keratoses on the trunk (Sign of Leser-Trélat) is a well-recognized paraneoplastic cutaneous marker of:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "The sign of Leser-Trélat is the sudden explosive appearance of multiple seborrheic keratoses on the torso, often accompanied by acanthosis nigricans, representing a paraneoplastic response to tumor-secreted TGF-alpha from occult gastric adenocarcinoma.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-081-a",
        "text": "Internal Gastrointestinal Malignancy (most commonly Gastric Adenocarcinoma)",
        "is_correct": true
      },
      {
        "id": "derm-sba-081-c",
        "text": "Multiple myeloma",
        "is_correct": false
      },
      {
        "id": "derm-sba-081-b",
        "text": "Basal cell carcinoma of the face",
        "is_correct": false
      },
      {
        "id": "derm-sba-081-e",
        "text": "Chronic lymphocytic leukemia",
        "is_correct": false
      },
      {
        "id": "derm-sba-081-d",
        "text": "Benign prostatic hyperplasia",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-082",
    "stem": "Acanthosis Nigricans is characterized by hyperpigmented, velvety, papillomatous plaques in flexural folds (neck, axillae). When sudden, severe, and extensive in a non-obese older adult, it suggests:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "While benign acanthosis nigricans is common in obesity, insulin resistance, and PCOS, sudden extensive, rapidly progressive velvety hyperpigmentation (especially involving mucosal lips/palms - 'tripe palms') signifies malignant AN (paraneoplastic GI adenocarcinoma).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-082-e",
        "text": "Adverse reaction to high-dose nicotinic acid",
        "is_correct": false
      },
      {
        "id": "derm-sba-082-d",
        "text": "Polycystic ovary syndrome",
        "is_correct": false
      },
      {
        "id": "derm-sba-082-a",
        "text": "Malignant Acanthosis Nigricans (paraneoplastic manifestation of an internal malignancy, most commonly Gastric Adenocarcinoma)",
        "is_correct": true
      },
      {
        "id": "derm-sba-082-b",
        "text": "Severe underlying insulin resistance and type 2 diabetes mellitus",
        "is_correct": false
      },
      {
        "id": "derm-sba-082-c",
        "text": "Congenital adrenal hyperplasia with 21-hydroxylase deficiency",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-083",
    "stem": "Mycosis Fungoides, the most common form of Cutaneous T-Cell Lymphoma (CTCL), is characterized histologically by:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "Mycosis fungoides (cutaneous T-cell lymphoma) progresses through patch, plaque, and tumor stages: neoplastic CD4+ T-cells home to the epidermis (epidermotropism) with cerebriform nuclei, forming pathognomonic intraepidermal Pautrier microabscesses.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-083-d",
        "text": "Massive invasion of the subcutis by anaplastic spindle cells producing osteoid",
        "is_correct": false
      },
      {
        "id": "derm-sba-083-e",
        "text": "Extracellular deposition of amorphous amyloid fibrils staining with Congo red",
        "is_correct": false
      },
      {
        "id": "derm-sba-083-b",
        "text": "Dense collections of neutrophils in the stratum corneum (Munro microabscesses)",
        "is_correct": false
      },
      {
        "id": "derm-sba-083-a",
        "text": "An epidermotropic infiltrate of atypical CD4+ T-lymphocytes with hyperconvoluted, cerebriform nuclei, forming intraepidermal clusters known as Pautrier Microabscesses",
        "is_correct": true
      },
      {
        "id": "derm-sba-083-c",
        "text": "Infiltration of the dermis by atypical CD20+ B-lymphocytes in germinal centers",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-084",
    "stem": "Sézary Syndrome is the leukemic, erythrodermic variant of Cutaneous T-cell Lymphoma, defined by the triad of:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "Sézary syndrome is the leukemic form of CTCL: 1) erythroderma covering >80% body surface area; 2) generalized lymphadenopathy; 3) clonally identical malignant CD4+ T-cells with grooved, folded 'cerebriform' nuclei (Sézary cells) in peripheral blood.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-084-a",
        "text": "Generalized Erythroderma ('red man syndrome'), generalized Lymphadenopathy, and circulating malignant T-cells with cerebriform nuclei (Sézary cells) in peripheral blood",
        "is_correct": true
      },
      {
        "id": "derm-sba-084-b",
        "text": "Severe nodulocystic acne, alopecia totalis, and hypercalcemia",
        "is_correct": false
      },
      {
        "id": "derm-sba-084-e",
        "text": "Tense bullous pemphigoid, eosinophilia, and renal failure",
        "is_correct": false
      },
      {
        "id": "derm-sba-084-c",
        "text": "Psoriatic arthritis, uveitis, and urethritis",
        "is_correct": false
      },
      {
        "id": "derm-sba-084-d",
        "text": "Targetoid lesions, mucosal ulcerations, and high fever",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-085",
    "stem": "Kaposi Sarcoma is a low-grade vascular spindle cell neoplasm caused by infection with which viral pathogen?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "Kaposi sarcoma is driven by HHV-8 (KSHV). The virus infects endothelial cells, promoting aberrant angiogenesis, spindle cell proliferation, and slit-like vascular spaces through viral GPCR and LANA proteins.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-085-a",
        "text": "Human Herpesvirus 8 (HHV-8 / Kaposi Sarcoma-associated Herpesvirus, KSHV)",
        "is_correct": true
      },
      {
        "id": "derm-sba-085-d",
        "text": "Cytomegalovirus (CMV)",
        "is_correct": false
      },
      {
        "id": "derm-sba-085-b",
        "text": "Human Papillomavirus type 16",
        "is_correct": false
      },
      {
        "id": "derm-sba-085-c",
        "text": "Epstein-Barr Virus (EBV)",
        "is_correct": false
      },
      {
        "id": "derm-sba-085-e",
        "text": "Human T-cell Lymphotropic Virus 1 (HTLV-1)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-086",
    "stem": "What are the four recognized epidemiological forms of Kaposi Sarcoma?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "Kaposi sarcoma has 4 distinct clinical settings: 1) Classic (elderly Ashkenazi/Mediterranean men, indolent on lower legs); 2) Endemic (African, aggressive in children); 3) Epidemic (AIDS-defining, aggressive systemic/visceral spread); 4) Iatrogenic (organ transplant).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-086-e",
        "text": "Oral, Genital, Pulmonary, and Gastrointestinal exclusively",
        "is_correct": false
      },
      {
        "id": "derm-sba-086-d",
        "text": "Bacterial, Viral, Fungal, and Parasitic",
        "is_correct": false
      },
      {
        "id": "derm-sba-086-c",
        "text": "Superficial, Nodular, Acral, and Lentiginous",
        "is_correct": false
      },
      {
        "id": "derm-sba-086-b",
        "text": "Congenital, Perinatal, Adolescent, and Senile",
        "is_correct": false
      },
      {
        "id": "derm-sba-086-a",
        "text": "Classic (Mediterranean/Eastern European elderly men), Endemic (sub-Saharan African children/adults), Epidemic (AIDS-associated), and Iatrogenic (post-transplant immunosuppression)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-087",
    "stem": "What is the characteristic histological appearance of Kaposi Sarcoma on skin biopsy?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "Kaposi sarcoma features fascicles of spindle-shaped endothelial cells forming jagged, slit-like vascular spaces without true endothelial lining; extravasated red blood cells, hemosiderin-laden macrophages, and eosinophilic hyaline globules are characteristic.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-087-e",
        "text": "Dense granulomas with central caseation and Langhans giant cells",
        "is_correct": false
      },
      {
        "id": "derm-sba-087-a",
        "text": "Proliferating spindle-shaped endothelial cells forming irregular, jagged, slit-like vascular channels that leak Red Blood Cells, with prominent Hemosiderin deposits and hyaline globules",
        "is_correct": true
      },
      {
        "id": "derm-sba-087-b",
        "text": "Nests of squamous cells with keratin pearls invading deep reticular dermis",
        "is_correct": false
      },
      {
        "id": "derm-sba-087-c",
        "text": "Sheets of malignant round blue cells with Homer-Wright pseudorosettes",
        "is_correct": false
      },
      {
        "id": "derm-sba-087-d",
        "text": "Atypical melanocytes invading lymphatic channels in a pagetoid pattern",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-088",
    "stem": "Dermatofibroma (Benign Fibrous Histiocytoma) is a common benign cutaneous lesion that displays which classic clinical physical examination sign?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Skin Tumours",
    "programme": "mbchb",
    "explanation": "A dermatofibroma is a firm, hyperpigmented dermal papule/nodule on the extremities of adults. Pinching the margins produces a central dimple ('dimple sign' / 'buttonhole sign') because the fibrous lesion is tethered to the underlying subcutaneous tissue.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-088-a",
        "text": "The 'Dimple Sign' (Fitzpatrick's sign: lateral pinching of the lesion causes it to dimple or retract downward below the skin surface)",
        "is_correct": true
      },
      {
        "id": "derm-sba-088-b",
        "text": "The Auspitz sign (pinpoint bleeding after picking the crust)",
        "is_correct": false
      },
      {
        "id": "derm-sba-088-e",
        "text": "The Crowe sign (axillary freckling)",
        "is_correct": false
      },
      {
        "id": "derm-sba-088-d",
        "text": "The Darier sign (immediate whealing after stroking)",
        "is_correct": false
      },
      {
        "id": "derm-sba-088-c",
        "text": "The Nikolsky sign (shearing of epidermis on lateral friction)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-089",
    "stem": "What is the primary autoantigen and anatomical level of blister cleavage in Pemphigus Vulgaris?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Pemphigus vulgaris involves pathogenic IgG against desmoglein-3 (mucosal-dominant) and desmoglein-1 (mucocutaneous). Loss of desmosomal adhesion causes suprabasal acantholysis, creating flaccid intraepidermal blisters and erosions (tombstone pattern).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-089-d",
        "text": "Autoantibodies against tissue transglutaminase; producing subepidermal microabscesses",
        "is_correct": false
      },
      {
        "id": "derm-sba-089-a",
        "text": "Autoantibodies against Desmoglein-3 (and Desmoglein-1); producing INTRAEPIDERMAL suprabasal blistering with Acantholysis",
        "is_correct": true
      },
      {
        "id": "derm-sba-089-b",
        "text": "Autoantibodies against BP180 and BP230; producing SUBEPIDERMAL blistering",
        "is_correct": false
      },
      {
        "id": "derm-sba-089-c",
        "text": "Autoantibodies against type VII collagen; producing dermolytic cleavage",
        "is_correct": false
      },
      {
        "id": "derm-sba-089-e",
        "text": "Autoantibodies against laminin-332; producing mucosal scarring",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-090",
    "stem": "What is the diagnostic Direct Immunofluorescence (DIF) pattern in Pemphigus Vulgaris?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Direct immunofluorescence in pemphigus vulgaris demonstrates IgG (and often C3) bound to cell surfaces of keratinocytes throughout the epidermis in a characteristic intercellular 'fishnet' or 'chicken-wire' pattern.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-090-c",
        "text": "Granular deposition of IgA in the dermal papillae",
        "is_correct": false
      },
      {
        "id": "derm-sba-090-d",
        "text": "Linear deposition of IgA along the basement membrane zone",
        "is_correct": false
      },
      {
        "id": "derm-sba-090-b",
        "text": "Continuous, smooth, linear deposition of IgG along the dermo-epidermal junction",
        "is_correct": false
      },
      {
        "id": "derm-sba-090-e",
        "text": "Subepidermal 'lumpy-bumpy' deposition of IgM",
        "is_correct": false
      },
      {
        "id": "derm-sba-090-a",
        "text": "Intercellular 'Fishnet' (chicken-wire / reticular) deposition of IgG and C3 throughout the epidermis",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-091",
    "stem": "In Bullous Pemphigoid, the most common autoimmune blistering disease of the elderly, autoantibodies target which proteins, producing what type of blister?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Bullous pemphigoid involves autoantibodies targeting hemidesmosomal BP180/BP230. Complement activation recruits eosinophils, releasing proteases that cleave the basement membrane, forming large, tense subepidermal blisters that do not rupture easily.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-091-a",
        "text": "BP180 (type XVII collagen) and BP230 in Hemidesmosomes; producing TENSE, subepidermal bullae on normal or erythematous skin, with a NEGATIVE Nikolsky sign",
        "is_correct": true
      },
      {
        "id": "derm-sba-091-e",
        "text": "Laminin gamma-1; producing oral mucosal ulcerations exclusively",
        "is_correct": false
      },
      {
        "id": "derm-sba-091-d",
        "text": "Tissue transglutaminase-3; producing grouped excoriated vesicles on extensor elbows",
        "is_correct": false
      },
      {
        "id": "derm-sba-091-b",
        "text": "Desmoglein-1 in desmosomes; producing flaccid intraepidermal bullae with positive Nikolsky sign",
        "is_correct": false
      },
      {
        "id": "derm-sba-091-c",
        "text": "Type VII collagen; producing scarring mechanobullous fragility on trauma sites",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-092",
    "stem": "What is the Direct Immunofluorescence (DIF) finding characteristic of Bullous Pemphigoid?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Direct immunofluorescence in bullous pemphigoid reveals continuous, clean linear ribbon-like staining of IgG and C3 along the dermo-epidermal junction (BMZ), reflecting hemidesmosomal targeting.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-092-e",
        "text": "Complete absence of any immunoreactants on frozen sections",
        "is_correct": false
      },
      {
        "id": "derm-sba-092-a",
        "text": "Continuous, smooth, LINEAR deposition of IgG and C3 along the Dermo-Epidermal Junction (Basement Membrane Zone)",
        "is_correct": true
      },
      {
        "id": "derm-sba-092-b",
        "text": "Intercellular fishnet deposition of IgG throughout the epidermis",
        "is_correct": false
      },
      {
        "id": "derm-sba-092-c",
        "text": "Granular deposition of IgA clustered at the tips of dermal papillae",
        "is_correct": false
      },
      {
        "id": "derm-sba-092-d",
        "text": "Band-like deposition of IgM and C3 in the follicular infundibula",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-093",
    "stem": "Dermatitis Herpetiformis (Duhring Disease) is an intensely pruritic autoimmune blistering disorder that is pathognomonically linked to which systemic disease?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Dermatitis herpetiformis is the cutaneous manifestation of celiac disease (present in virtually 100% of patients on biopsy, though often asymptomatic GI). IgA antibodies against epidermal transglutaminase (eTG-3) cross-react with tissue transglutaminase.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-093-a",
        "text": "Celiac Disease (Gluten-Sensitive Enteropathy)",
        "is_correct": true
      },
      {
        "id": "derm-sba-093-e",
        "text": "Pernicious anemia",
        "is_correct": false
      },
      {
        "id": "derm-sba-093-b",
        "text": "Ulcerative colitis",
        "is_correct": false
      },
      {
        "id": "derm-sba-093-c",
        "text": "Crohn's disease",
        "is_correct": false
      },
      {
        "id": "derm-sba-093-d",
        "text": "Primary biliary cholangitis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-094",
    "stem": "What is the clinical distribution and pathognomonic Direct Immunofluorescence (DIF) pattern of Dermatitis Herpetiformis?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Dermatitis herpetiformis presents with intense burning pruritus, grouped vesicles, and excoriations on extensor surfaces (elbows, knees, buttocks). Biopsy of perilesional skin shows pathognomonic granular IgA deposits clustered at the tips of dermal papillae.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-094-c",
        "text": "Targetoid lesions on palms and soles; DIF shows IgM around dermal blood vessels",
        "is_correct": false
      },
      {
        "id": "derm-sba-094-e",
        "text": "Widespread erythema with fine scale; DIF shows negative staining",
        "is_correct": false
      },
      {
        "id": "derm-sba-094-b",
        "text": "Asymmetric flaccid bullae on flexor creases; DIF shows linear IgG along the basement membrane",
        "is_correct": false
      },
      {
        "id": "derm-sba-094-a",
        "text": "Symmetrically distributed, grouped ('herpetiform') excoriated papulovesicles over EXTENSOR surfaces (elbows, knees, buttocks, scalp); DIF shows GRANULAR IgA deposits in the Dermal Papillae",
        "is_correct": true
      },
      {
        "id": "derm-sba-094-d",
        "text": "Diffuse painful ulcerations on mucous membranes; DIF shows intercellular IgG",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-095",
    "stem": "What is the FIRST-LINE pharmacological treatment to rapidly control the intense pruritus and lesions of Dermatitis Herpetiformis, combined with a lifelong strict Gluten-Free Diet?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Dapsone halts neutrophil recruitment into dermal papillae, providing dramatic relief of pruritus and clearing blisters within 24-48 hours. A lifelong strict gluten-free diet is essential to treat underlying enteropathy and eventually taper off dapsone.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-095-a",
        "text": "Dapsone (diaminodiphenyl sulfone)",
        "is_correct": true
      },
      {
        "id": "derm-sba-095-b",
        "text": "High-dose oral Prednisone alone",
        "is_correct": false
      },
      {
        "id": "derm-sba-095-d",
        "text": "Intravenous immunoglobulin (IVIG)",
        "is_correct": false
      },
      {
        "id": "derm-sba-095-e",
        "text": "Oral Methotrexate",
        "is_correct": false
      },
      {
        "id": "derm-sba-095-c",
        "text": "Topical permethrin cream",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-096",
    "stem": "Before initiating Dapsone therapy, what laboratory test MUST be checked to prevent life-threatening acute hemolytic anemia?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Dapsone induces oxidative stress in erythrocytes. In patients with G6PD deficiency, dapsone causes severe, potentially fatal acute Coombs-negative hemolytic anemia and marked methemoglobinemia, mandating pre-treatment G6PD testing.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-096-a",
        "text": "Glucose-6-Phosphate Dehydrogenase (G6PD) enzyme activity",
        "is_correct": true
      },
      {
        "id": "derm-sba-096-c",
        "text": "Complete blood coagulation profile (PT/INR)",
        "is_correct": false
      },
      {
        "id": "derm-sba-096-d",
        "text": "Thyroid stimulating hormone (TSH)",
        "is_correct": false
      },
      {
        "id": "derm-sba-096-e",
        "text": "HLA-B*5701 genotype screening",
        "is_correct": false
      },
      {
        "id": "derm-sba-096-b",
        "text": "Serum ferritin level",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-097",
    "stem": "Pemphigus Foliaceus is a superficial autoimmune blistering disease that spares mucous membranes because autoantibodies selectively target:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Desmoglein-1 is expressed in the upper epidermis but is minimally expressed in oral mucosa. In pemphigus foliaceus, autoantibodies target desmoglein-1 exclusively, producing subcorneal flaccid blisters and cornflake-like scales with complete sparing of mucous membranes.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-097-d",
        "text": "Laminin-332 in the lamina lucida",
        "is_correct": false
      },
      {
        "id": "derm-sba-097-a",
        "text": "Desmoglein-1 ONLY (which is expressed predominantly in the superficial epidermis and is absent in deep mucosa)",
        "is_correct": true
      },
      {
        "id": "derm-sba-097-c",
        "text": "BP180 and BP230 in hemidesmosomes",
        "is_correct": false
      },
      {
        "id": "derm-sba-097-e",
        "text": "Type IV collagen in the lamina densa",
        "is_correct": false
      },
      {
        "id": "derm-sba-097-b",
        "text": "Desmoglein-3 only (which is expressed predominantly in mucosa)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-098",
    "stem": "What is the clinical presentation and serological hallmark of Discoid Lupus Erythematosus (DLE)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Discoid LE (chronic cutaneous lupus) features disk-like indurated plaques with adherent hyperkeratosis, carpet-tack spines on undersurface of scale, telangiectasias, follicular plugging, and central hypopigmented scarring with permanent cicatricial alopecia.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-098-e",
        "text": "Target-like concentric plaques on the palms and soles",
        "is_correct": false
      },
      {
        "id": "derm-sba-098-d",
        "text": "Tense bullous lesions over sun-exposed extensor extremities",
        "is_correct": false
      },
      {
        "id": "derm-sba-098-c",
        "text": "Transient malar butterfly rash that clears without scarring or atrophy",
        "is_correct": false
      },
      {
        "id": "derm-sba-098-b",
        "text": "Diffuse non-scarring alopecia with normal scalp skin",
        "is_correct": false
      },
      {
        "id": "derm-sba-098-a",
        "text": "Well-demarcated, disk-shaped erythematous plaques with adherent carpet-tack scale, follicular plugging, central scarring atrophy, and permanent scarring alopecia; usually positive for ANA in low titers",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-099",
    "stem": "The classic Acute Cutaneous Lupus Erythematosus (ACLE) malar 'butterfly rash' is distinguished from rosacea by which clinical feature?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "The ACLE malar butterfly rash spans across the bridge of the nose and bilateral malar cheeks, characteristically sparing the nasolabial folds (which are in the shadow of the nose, unlike rosacea which affects nasolabial folds).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-099-a",
        "text": "The malar rash of lupus characteristically SPARES the Nasolabial Folds, whereas facial erythema in rosacea typically involves the nasolabial folds and exhibits pustules without scarring",
        "is_correct": true
      },
      {
        "id": "derm-sba-099-d",
        "text": "The lupus rash permanently scars the facial cartilage within 24 hours",
        "is_correct": false
      },
      {
        "id": "derm-sba-099-b",
        "text": "Lupus rash occurs exclusively in men over 70 years old",
        "is_correct": false
      },
      {
        "id": "derm-sba-099-c",
        "text": "Lupus malar rash is accompanied by prominent comedones and sebaceous cysts",
        "is_correct": false
      },
      {
        "id": "derm-sba-099-e",
        "text": "The rosacea rash disappears immediately upon sun exposure",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-100",
    "stem": "Subacute Cutaneous Lupus Erythematosus (SCLE) presents with photosensitive annular or polycyclic scaling plaques on the upper torso and arms, strongly associated with which circulating autoantibodies?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "SCLE (frequently drug-induced by PPIs, thiazides, or terbinafine) presents with non-scarring annular or psoriasiform plaques in sun-exposed areas, and >85% of patients carry circulating anti-Ro/SSA antibodies.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-100-b",
        "text": "Anti-double-stranded DNA (anti-dsDNA) antibodies exclusively",
        "is_correct": false
      },
      {
        "id": "derm-sba-100-d",
        "text": "Anti-centromere antibodies",
        "is_correct": false
      },
      {
        "id": "derm-sba-100-a",
        "text": "Anti-Ro / SSA (and Anti-La / SSB) autoantibodies",
        "is_correct": true
      },
      {
        "id": "derm-sba-100-c",
        "text": "Anti-Sm (anti-Smith) antibodies alone",
        "is_correct": false
      },
      {
        "id": "derm-sba-100-e",
        "text": "Anti-Scl-70 (anti-topoisomerase I) antibodies",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-101",
    "stem": "Neonatal Lupus Erythematosus is caused by transplacental passage of maternal IgG antibodies (anti-Ro/SSA and anti-La/SSB), which can cause which permanent, life-threatening cardiac complication in the newborn?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Maternal anti-Ro/SSA and anti-La/SSB IgG antibodies cross the placenta and trigger autoimmune destruction and calcification of the fetal AV node and bundle of His, causing permanent congenital complete heart block requiring a permanent pacemaker.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-101-b",
        "text": "Tetralogy of Fallot",
        "is_correct": false
      },
      {
        "id": "derm-sba-101-e",
        "text": "Ventricular septal defect",
        "is_correct": false
      },
      {
        "id": "derm-sba-101-a",
        "text": "Congenital Complete (Third-Degree) Atrioventricular (AV) Heart Block",
        "is_correct": true
      },
      {
        "id": "derm-sba-101-d",
        "text": "Patent ductus arteriosus",
        "is_correct": false
      },
      {
        "id": "derm-sba-101-c",
        "text": "Coarctation of the aorta",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-102",
    "stem": "Vitiligo is an acquired autoimmune disorder characterized by:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Vitiligo is an autoimmune condition in which autoreactive cytotoxic CD8+ T-lymphocytes target and destroy epidermal melanocytes, causing complete loss of pigment (macules fluorescing chalky white under Wood's lamp).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-102-c",
        "text": "Fungal colonization of the stratum corneum by Malassezia species",
        "is_correct": false
      },
      {
        "id": "derm-sba-102-d",
        "text": "Accumulation of lipid-laden macrophages in the dermis",
        "is_correct": false
      },
      {
        "id": "derm-sba-102-b",
        "text": "A congenital absence of tyrosinase enzymes within morphologically normal melanocytes",
        "is_correct": false
      },
      {
        "id": "derm-sba-102-a",
        "text": "Autoimmune destruction of Melanocytes by autoreactive CD8+ T-cells, producing sharply demarcated, depigmented (chalky-white) macules and patches",
        "is_correct": true
      },
      {
        "id": "derm-sba-102-e",
        "text": "Excessive production of melanin causing dark hyperpigmented plaques",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-103",
    "stem": "Alopecia Areata is an autoimmune condition targeting anagen-phase hair follicles, clinically characterized by:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Alopecia areata is an autoimmune attack (breakdown of hair follicle immune privilege by CD8+ T-cells) causing smooth, non-scarring bald patches with visible follicular openings. At the periphery, short, broken 'exclamation point' hairs (tapered proximally) are diagnostic.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-103-e",
        "text": "Hair loss accompanied by thick, adherent silvery scales over the entire scalp",
        "is_correct": false
      },
      {
        "id": "derm-sba-103-d",
        "text": "Patchy hair loss with broken hairs of varying lengths caused by compulsive pulling (trichotillomania)",
        "is_correct": false
      },
      {
        "id": "derm-sba-103-b",
        "text": "Diffuse scarring alopecia with permanent destruction of follicular openings and scalp atrophy",
        "is_correct": false
      },
      {
        "id": "derm-sba-103-a",
        "text": "Well-circumscribed, round or oval patches of completely non-scarring hair loss with preserved follicular ostia, featuring pathognomonic 'Exclamation Point' hairs at the active expanding margins",
        "is_correct": true
      },
      {
        "id": "derm-sba-103-c",
        "text": "Gradual bitemporal hair thinning driven by dihydrotestosterone (androgenetic alopecia)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-104",
    "stem": "Morphea (Localized Scleroderma) is distinguished from Systemic Sclerosis (Systemic Scleroderma) by which defining feature?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Morphea is localized sclerosis of the skin (circumscribed, linear, or generalized ivory-colored sclerotic plaques with violaceous borders), lacking systemic internal organ fibrosis, Raynaud's phenomenon, or systemic sclerosis autoantibodies (anti-Scl-70/centromere).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-104-d",
        "text": "Morphea occurs exclusively in male infants during the neonatal period",
        "is_correct": false
      },
      {
        "id": "derm-sba-104-c",
        "text": "Morphea is caused by direct bacterial infection with Borrelia burgdorferi",
        "is_correct": false
      },
      {
        "id": "derm-sba-104-b",
        "text": "Morphea causes fatal pulmonary arterial hypertension within one year",
        "is_correct": false
      },
      {
        "id": "derm-sba-104-e",
        "text": "Morphea causes widespread symmetric joint destruction like rheumatoid arthritis",
        "is_correct": false
      },
      {
        "id": "derm-sba-104-a",
        "text": "Morphea is strictly CONFINED to the skin and subcutaneous tissues, with NO internal organ involvement, NO Raynaud phenomenon, and NO sclerodactyly",
        "is_correct": true
      }
    ]
  },
  {
    "id": "derm-sba-105",
    "stem": "What are the components of the 'CREST Syndrome' variant of Limited Cutaneous Systemic Sclerosis?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "CREST syndrome (limited cutaneous systemic sclerosis) features: Calcinosis cutis, Raynaud phenomenon, Esophageal dysmotility, Sclerodactyly, and Telangiectasia. Strongly associated with Anti-Centromere antibodies.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-105-c",
        "text": "Cataracts, Retinopathy, Endocarditis, Stroke, and Tremor",
        "is_correct": false
      },
      {
        "id": "derm-sba-105-d",
        "text": "Cerebritis, Renal failure, Erythema, Synovitis, and Thyroiditis",
        "is_correct": false
      },
      {
        "id": "derm-sba-105-b",
        "text": "Colitis, Rash, Eosinophilia, Splenomegaly, and Thrombocytopenia",
        "is_correct": false
      },
      {
        "id": "derm-sba-105-a",
        "text": "Calcinosis cutis, Raynaud's phenomenon, Esophageal dysmotility, Sclerodactyly, and Telangiectasias",
        "is_correct": true
      },
      {
        "id": "derm-sba-105-e",
        "text": "Cirrhosis, Rickets, Emphysema, Seizures, and Tachycardia",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-106",
    "stem": "Gottron's Papules and Gottron's Sign are pathognomonic cutaneous hallmarks of Dermatomyositis. Where are they located?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Gottron papules are violaceous, flat-topped papules and plaques over the dorsal MCP and PIP joints, pathognomonic of Dermatomyositis (associated with proximal muscle weakness, elevated CK, and an increased risk of internal adenocarcinoma in adults).",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-106-d",
        "text": "Pitted follicular macules over the palms and soles",
        "is_correct": false
      },
      {
        "id": "derm-sba-106-c",
        "text": "Tender erythematous nodules on the anterior shins",
        "is_correct": false
      },
      {
        "id": "derm-sba-106-e",
        "text": "Hyperpigmented macules in the bilateral axillae",
        "is_correct": false
      },
      {
        "id": "derm-sba-106-a",
        "text": "Violaceous, lichenoid or flat-topped papules located symmetrically over the dorsal aspect of the Metacarpophalangeal (MCP) and Interphalangeal (IP) joints of the hands",
        "is_correct": true
      },
      {
        "id": "derm-sba-106-b",
        "text": "Subcutaneous nodules on the extensor surface of the forearms",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-107",
    "stem": "The Heliotrope Rash in Dermatomyositis is characterized by:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "The heliotrope rash is a characteristic violaceous/purple discoloration of the upper eyelids (named after the heliotrope flower), frequently accompanied by periorbital swelling, pathognomonic of Dermatomyositis.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-107-a",
        "text": "A violaceous to reddish-purple erythema of the upper periorbital eyelids, frequently accompanied by periorbital Edema",
        "is_correct": true
      },
      {
        "id": "derm-sba-107-b",
        "text": "A malar rash strictly sparing the upper eyelids and nasolabial folds",
        "is_correct": false
      },
      {
        "id": "derm-sba-107-c",
        "text": "An annular scaling plaque with central clearing on the trunk",
        "is_correct": false
      },
      {
        "id": "derm-sba-107-d",
        "text": "A linear streak of hyperkeratotic scale along the forehead",
        "is_correct": false
      },
      {
        "id": "derm-sba-107-e",
        "text": "A purpuric eruption concentrated on the lower legs",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-108",
    "stem": "Epidermolysis Bullosa Simplex (EBS), the most common inherited mechanical blistering disease, is caused by dominant mutations in which structural genes?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Epidermolysis bullosa simplex (EBS) is caused by mutations in keratin 5 (KRT5) or keratin 14 (KRT14). The basal keratinocytes lack mechanical stability; mild trauma causes basal cell cytolysis and friction blisters that heal without scars.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-108-d",
        "text": "DSP and PKP1 (causing desmoplakin deficiency)",
        "is_correct": false
      },
      {
        "id": "derm-sba-108-e",
        "text": "FLG (causing ichthyosis vulgaris)",
        "is_correct": false
      },
      {
        "id": "derm-sba-108-c",
        "text": "LAMA3, LAMB3, and LAMC2 (causing junctional epidermolysis bullosa)",
        "is_correct": false
      },
      {
        "id": "derm-sba-108-a",
        "text": "KRT5 and KRT14 (Keratins 5 and 14, causing intraepidermal cytolysis of basal keratinocytes upon minor mechanical friction)",
        "is_correct": true
      },
      {
        "id": "derm-sba-108-b",
        "text": "COL7A1 (Type VII collagen, causing dystrophic epidermolysis bullosa)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-109",
    "stem": "Dystrophic Epidermolysis Bullosa (DEB) is caused by mutations in which gene, leading to subepidermal blistering, severe mutilating scarring, and pseudosyndactyly ('mitten hands')?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Dystrophic EB (dominant or recessive) is caused by COL7A1 mutations, leading to absent or defective type VII collagen anchoring fibrils. Blistering occurs beneath the lamina densa, healing with extensive fibrosis, pseudosyndactyly ('mitten deformity'), and aggressive SCC.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-109-a",
        "text": "COL7A1 (encoding Type VII Collagen, the major component of Anchoring Fibrils)",
        "is_correct": true
      },
      {
        "id": "derm-sba-109-c",
        "text": "COL4A5 (Alport syndrome)",
        "is_correct": false
      },
      {
        "id": "derm-sba-109-e",
        "text": "ELN (Cutis laxa)",
        "is_correct": false
      },
      {
        "id": "derm-sba-109-b",
        "text": "KRT1 and KRT10 (epidermolytic hyperkeratosis)",
        "is_correct": false
      },
      {
        "id": "derm-sba-109-d",
        "text": "FBN1 (Marfan syndrome)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "derm-sba-110",
    "stem": "Pyoderma Gangrenosum is a chronic, non-infectious, ulcerative neutrophilic dermatosis that is strongly associated with which underlying systemic condition?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Dermatology",
    "section": "Autoimmune Conditions",
    "programme": "mbchb",
    "explanation": "Pyoderma gangrenosum presents as a pustule or boggy nodule that rapidly breaks down into an agonizingly painful ulcer with an undermined, violaceous, purplish border and necrotic base. ~50% are associated with underlying IBD, inflammatory arthritis, or hematologic malignancy.",
    "reference": "Rook's Textbook of Dermatology, 9th Ed. / Fitzpatrick's Dermatology in General Medicine, 9th Ed.",
    "options": [
      {
        "id": "derm-sba-110-a",
        "text": "Inflammatory Bowel Disease (Ulcerative Colitis and Crohn's Disease) and Rheumatoid Arthritis",
        "is_correct": true
      },
      {
        "id": "derm-sba-110-e",
        "text": "Primary systemic amyloidosis",
        "is_correct": false
      },
      {
        "id": "derm-sba-110-d",
        "text": "Uncomplicated viral upper respiratory tract infections",
        "is_correct": false
      },
      {
        "id": "derm-sba-110-b",
        "text": "Chronic renal failure on hemodialysis",
        "is_correct": false
      },
      {
        "id": "derm-sba-110-c",
        "text": "Congenital hypoparathyroidism",
        "is_correct": false
      }
    ]
  }
]
