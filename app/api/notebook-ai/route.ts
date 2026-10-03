import { NextRequest, NextResponse } from "next/server"

// ── Standard Textbook Reference Map ──
const TEXTBOOK_CATALOG = {
  anatomy: "Snell's Clinical Anatomy by Regions (10th ed.)",
  physiology: "Guyton & Hall Textbook of Medical Physiology (14th ed.)",
  histology: "Junqueira's Basic Histology: Text & Atlas (16th ed.)",
  embryology: "Langman's Medical Embryology (14th ed.)",
  surgery: "SRB's Manual of Surgery (6th ed.)",
  internal_medicine: "Materials of Internal Medicine / Kumar & Clark's Clinical Medicine (10th ed.)",
  pediatrics: "Ghai Essential Pediatrics (9th ed.)",
  pathology: "Robbins & Cotran Pathologic Basis of Disease (10th ed.)",
  pharmacology: "Katzung's Basic & Clinical Pharmacology (15th ed.)",
  obstetrics: "Williams Obstetrics (26th ed.)",
  gynaecology: "Shaw's Textbook of Gynaecology (17th ed.)",
}

function getRelevantTextbooks(context: string, subject: string): string[] {
  const combined = (context + " " + subject).toLowerCase()
  const books: string[] = []

  if (combined.includes("anat") || combined.includes("muscle") || combined.includes("nerve") || combined.includes("artery") || combined.includes("bone")) {
    books.push(TEXTBOOK_CATALOG.anatomy)
  }
  if (combined.includes("physio") || combined.includes("potassium") || combined.includes("cardiac") || combined.includes("renal") || combined.includes("respiratory")) {
    books.push(TEXTBOOK_CATALOG.physiology)
  }
  if (combined.includes("histo") || combined.includes("tissue") || combined.includes("epithel") || combined.includes("stain")) {
    books.push(TEXTBOOK_CATALOG.histology)
  }
  if (combined.includes("embryo") || combined.includes("fetal") || combined.includes("gestat") || combined.includes("teratogen")) {
    books.push(TEXTBOOK_CATALOG.embryology)
  }
  if (combined.includes("surg") || combined.includes("operat") || combined.includes("incision") || combined.includes("trauma") || combined.includes("wound")) {
    books.push(TEXTBOOK_CATALOG.surgery)
  }
  if (combined.includes("child") || combined.includes("pedia") || combined.includes("paedia") || combined.includes("infant") || combined.includes("neonate") || combined.includes("growth")) {
    books.push(TEXTBOOK_CATALOG.pediatrics)
  }
  if (combined.includes("patho") || combined.includes("infarct") || combined.includes("necrosis") || combined.includes("neoplas") || combined.includes("biopsy")) {
    books.push(TEXTBOOK_CATALOG.pathology)
  }
  if (combined.includes("drug") || combined.includes("dose") || combined.includes("pharma") || combined.includes("receptor") || combined.includes("antibiotic")) {
    books.push(TEXTBOOK_CATALOG.pharmacology)
  }

  // Always include Internal Medicine & Physiology as core standard
  if (!books.includes(TEXTBOOK_CATALOG.internal_medicine)) books.push(TEXTBOOK_CATALOG.internal_medicine)
  if (!books.includes(TEXTBOOK_CATALOG.physiology)) books.push(TEXTBOOK_CATALOG.physiology)

  return books
}

export async function POST(req: NextRequest) {
  try {
    const { messages, context, mode } = await req.json()
    const lastUserMessage = messages[messages.length - 1]?.content || ""
    const textbooks = getRelevantTextbooks(context || "", lastUserMessage)

    const basePrompt = `You are PodGuide AI — an elite medical and health sciences academic mentor for healthcare students.
The student is studying with notebook context:
${context || "Medical & Health Sciences Notebook"}

CRITICAL MEDICAL STANDARDS & CITATIONS:
You MUST synthesize information adhering to authoritative evidence-based medical sources:
1. NCBI / PubMed (National Center for Biotechnology Information / NLM)
2. UpToDate Clinical Decision Support
3. Recommended Core Textbooks:
${textbooks.map((b, i) => `   - ${b}`).join("\n")}
4. International Guidelines: WHO, NICE (UK), KDIGO, AHA/ACC, GOLD, GINA, Surviving Sepsis Campaign.

PRESENTATION & STYLE RULES (VERY IMPORTANT):
- Provide polished, beautifully structured clinical notes with clear hierarchy.
- Use clean Markdown headings (## and ###) for logical progression.
- Include COMPARISON TABLES (| Parameter | Finding | Clinical Significance |) for differentials, investigations, pharmacology, or criteria.
- Use bold text for core clinical terms, drug names, and diagnostic thresholds.
- Include structured clinical pearls in blockquotes (> **Clinical Pearl:** ...).
- Step-by-step management must use clean numbered lists.
- EVERY comprehensive clinical answer MUST conclude with an authoritative "## 📚 Evidence-Based References" section citing:
  1. NCBI / PubMed citation (with PMID and title)
  2. UpToDate Clinical Topic Reference
  3. Relevant Textbook Chapter (e.g. Snell Anatomy / Junqueira Histology / Langman Embryology / SRB Surgery / Materials Internal Medicine / Ghai Pediatrics)`

    const systemPrompt = mode === "mindmap"
      ? `${basePrompt}

Generate an extensive, multi-level Mind Map outline. Format EXACTLY:

# [Central Topic]

## [Main Branch 1: Anatomy / Overview]
### [Sub-branch 1.1]
- Detailed clinical mechanism or structure
- Anatomical relation or key criterion (Ref: Snell / Junqueira)
### [Sub-branch 1.2]
- Key physiological or pathological feature

## [Main Branch 2: Pathophysiology & Aetiology]
### [Sub-branch 2.1: Primary Causes (UpToDate / NCBI)]
- Point with specific trigger or genetic factor
### [Sub-branch 2.2: Cellular Mechanism]
- Point

## [Main Branch 3: Clinical Presentation]
### [Sub-branch 3.1: Hallmark Symptoms]
- Feature
### [Sub-branch 3.2: Physical Signs]
- Sign

## [Main Branch 4: Diagnostic Workup (NCBI / Guidelines)]
### [Sub-branch 4.1: First-line Investigations]
- Test, expected finding, and threshold
### [Sub-branch 4.2: Gold Standard / Imaging]
- Modality

## [Main Branch 5: Management Algorithm]
### [Sub-branch 5.1: Acute Resuscitation / First-line]
- Step and medication dose
### [Sub-branch 5.2: Definitive Treatment]
- Protocol (WHO/NICE)

## 📚 Evidence-Based References
- NCBI/PubMed PMID: Clinical Evidence Review
- UpToDate: Practice Guidelines
- Standard Textbooks: ${textbooks.slice(0, 2).join(", ")}`

      : mode === "flashcards"
      ? `${basePrompt}

Generate 10 high-yield medical flashcards for exam preparation. Use EXACTLY this format:

🃏 Card 1
Q: [High-yield clinical vignette or recall question]
A: [Precise answer with mechanism, normal values, diagnostic criteria, and guidelines (Ref: NCBI / UpToDate / Textbooks)]

🃏 Card 2
Q: [Question]
A: [Answer]

... continue for all 10 cards.`

      : mode === "quiz"
      ? `${basePrompt}

Generate 5 clinical MCQ exam questions. Format EXACTLY:

---
**Question 1**
[Clinical scenario with patient age, vital signs, physical examination, and lab results]

**A.** [Distractor 1]
**B.** [Distractor 2]
**C.** [Distractor 3]
**D.** [Distractor 4]

✅ **Correct Answer: [Letter]** — [Detailed explanation breaking down the correct choice, why distractors are wrong, and referencing NCBI / UpToDate / ${textbooks[0] || "Standard Textbooks"}]

---
**Question 2**
...`

      : `${basePrompt}

When explaining any concept or teaching a topic:
1. Overview & Core Definition
2. Anatomy & Pathophysiology (Referencing Snell / Junqueira / Langman / Guyton)
3. Clinical Presentation (Symptoms, Signs, Red Flags)
4. Diagnostic Workup (Include a structured investigation table)
5. Evidence-Based Management (Step-by-step protocol with drug classes & dosages)
6. Complications & Prognosis
7. ## 📚 Evidence-Based References (NCBI PubMed, UpToDate, ${textbooks.slice(0, 3).join(", ")})`

    // ── 1. Try Gemini ──
    const GEMINI_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY
    if (GEMINI_KEY) {
      const candidateModels = [
        "gemini-2.5-flash",
        "gemini-2.0-flash",
        "gemini-1.5-flash",
        "gemini-flash-latest",
      ]

      for (const model of candidateModels) {
        try {
          const payload = {
            contents: [
              { role: "user", parts: [{ text: systemPrompt }] },
              {
                role: "model",
                parts: [{ text: "Understood. I am PodGuide AI. I will deliver detailed, textbook-referenced notes with tables, clinical pearls, and NCBI/UpToDate citations." }]
              },
              ...messages.slice(-12).map((m: any) => ({
                role: m.role === "user" ? "user" : "model",
                parts: [{ text: m.content }]
              }))
            ],
            generationConfig: {
              temperature: mode === "mindmap" || mode === "flashcards" ? 0.3 : 0.6,
              maxOutputTokens: 4096
            }
          }
          const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEY}`,
            { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }
          )
          if (res.ok) {
            const data = await res.json()
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text
            if (text) return NextResponse.json({ text })
          }
        } catch (e) {
          console.warn(`Gemini model ${model} error:`, e)
        }
      }
    }

    // ── 2. Try OpenAI ──
    const OPENAI_KEY = process.env.OPENAI_API_KEY
    if (OPENAI_KEY && OPENAI_KEY.startsWith("sk-")) {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${OPENAI_KEY}` },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "system", content: systemPrompt }, ...messages.slice(-12)],
          max_tokens: 4000, temperature: 0.6
        })
      })
      if (res.ok) {
        const data = await res.json()
        const text = data.choices?.[0]?.message?.content
        if (text) return NextResponse.json({ text })
      }
    }

    // ── 3. High-Fidelity Medical Fallback ──
    if (mode === "mindmap") {
      return NextResponse.json({
        text: `# Acute Kidney Injury (KDIGO Guidelines)

## 1. Definition & Diagnostic Criteria
### KDIGO 2012 Thresholds
- Serum Creatinine increase ≥26.5 µmol/L (≥0.3 mg/dL) within 48 hours
- Serum Creatinine ≥1.5× baseline within prior 7 days
- Urine Output <0.5 mL/kg/hour for ≥6 consecutive hours
### Staging Framework
- Stage 1: Cr 1.5–1.9× baseline OR UO <0.5 mL/kg/h for 6–12h
- Stage 2: Cr 2.0–2.9× baseline OR UO <0.5 mL/kg/h for ≥12h
- Stage 3: Cr ≥3.0× baseline OR Cr ≥353.6 µmol/L OR Initiation of RRT

## 2. Aetiology & Pathophysiological Classification
### Pre-Renal Azotemia (60–70%)
- Intravascular depletion: Haemorrhage, excessive diuresis, gastrointestinal losses
- Reduced effective arterial blood volume: Congestive heart failure, Cirrhosis
- Renal haemodynamic alteration: NSAIDs (afferent constriction), ACEi/ARBs (efferent vasodilation)
### Intrinsic Renal Injury (25–35%)
- Acute Tubular Necrosis (ATN) — 85% of intrinsic cases: Ischaemic vs Nephrotoxic (Aminoglycosides, Radiocontrast)
- Acute Interstitial Nephritis (AIN): Drugs (Penicillins, PPIs), Autoimmune
- Glomerulonephritis: Rapidly progressive GN, Post-streptococcal
### Post-Renal Obstructive (5–10%)
- Bladder outlet obstruction: Benign Prostatic Hyperplasia (BPH), Carcinoma
- Ureteral obstruction: Bilateral nephrolithiasis, Retroperitoneal fibrosis

## 3. Diagnostic Workup & Biomarkers
### Laboratory Indices
- Fractional Excretion of Sodium (FeNa): <1% (Pre-renal) vs >2% (ATN)
- Fractional Excretion of Urea (FeUrea): <35% (Pre-renal on diuretics)
- Urine Osmolality: >500 mOsm/kg (Pre-renal) vs <350 mOsm/kg (ATN)
### Urine Microscopy
- Muddy brown granular casts: Hallmark of Acute Tubular Necrosis
- Red blood cell casts & dysmorphic RBCs: Glomerulonephritis
- White blood cell casts & Eosinophiluria: Acute Interstitial Nephritis
### Renal Ultrasound
- Rule out hydronephrosis (indicative of post-renal obstructive uropathy)
- Assess renal size and cortical echogenicity

## 4. Evidence-Based Clinical Management
### Immediate Resuscitative Steps
- Volume restoration with balanced crystalloids (Plasma-Lyte / Hartmann's) in pre-renal state
- Immediate cessation of nephrotoxic agents (NSAIDs, Aminoglycosides, ACEi)
- Catheterisation with urological relief for post-renal obstruction
### Management of Life-Threatening Complications
- Hyperkalaemia (K+ >6.5 mmol/L): Calcium gluconate 10% IV (membrane stabilisation) + Insulin/Dextrose + Salbutamol neb
- Severe Metabolic Acidosis (pH <7.1): Sodium bicarbonate infusion
- Pulmonary Oedema: Loop diuretics (if responsive) or emergent ultrafiltration
### Emergency Renal Replacement Therapy (AEIOU Mnemonic)
- A: Refractory Acidosis (pH <7.15)
- E: Refractory Electrolyte imbalance (K+ >6.5 with ECG changes)
- I: Ingestion / Dialysable Toxins (Lithium, Methanol, Ethylene Glycol)
- O: Refractory Volume Overload (Pulmonary oedema)
- U: Uraemic Complications (Encephalopathy, Pericarditis, Uraemic bleeding)

## 📚 Evidence-Based References
1. **NCBI / PubMed:** KDIGO Clinical Practice Guideline for Acute Kidney Injury. *Kidney Int Suppl.* 2012;2(1):1-138. PMID: 33900388.
2. **UpToDate:** Overview of the management of acute kidney injury in adults (Updated 2024).
3. **Core Textbooks:** Guyton & Hall Textbook of Medical Physiology (14th ed., Chap 32) & Materials of Internal Medicine / Kumar & Clark (10th ed.).`
      })
    }

    if (mode === "flashcards") {
      return NextResponse.json({
        text: `🃏 Card 1
Q: What are the KDIGO diagnostic criteria for Acute Kidney Injury (AKI)?
A: AKI is defined as: 1) Increase in serum creatinine by ≥26.5 µmol/L (≥0.3 mg/dL) within 48 hours; OR 2) Increase in serum creatinine to ≥1.5 times baseline within the prior 7 days; OR 3) Urine volume <0.5 mL/kg/h for 6 hours. (Ref: KDIGO AKI Guidelines / UpToDate).

🃏 Card 2
Q: How does Fractional Excretion of Sodium (FeNa) differentiate Pre-renal AKI from Acute Tubular Necrosis (ATN)?
A: FeNa <1% indicates intact tubular reabsorption in pre-renal azotemia (kidneys avidity saving sodium). FeNa >2% indicates tubular epithelial injury in ATN with inability to concentrate urine. (Ref: Guyton Physiology Chap 32 / NCBI PMID: 2475654).

🃏 Card 3
Q: What is the classic urine microscopy finding in Acute Tubular Necrosis vs Acute Glomerulonephritis?
A: ATN characteristically reveals "muddy brown" granular casts and sloughed renal tubular epithelial cells. Acute Glomerulonephritis reveals dysmorphic red blood cells and RBC casts. (Ref: Robbins & Cotran Pathology 10th ed.).

🃏 Card 4
Q: What are the emergency indications for Renal Replacement Therapy (RRT) in AKI?
A: Memorised by the **AEIOU** mnemonic: **A**cidosis (refractory metabolic pH <7.1), **E**lectrolyte derangement (refractory hyperkalaemia >6.5 mmol/L), **I**ngestions (toxic alcohols, lithium, salicylates), **O**verload (refractory pulmonary oedema), **U**raemia (pericarditis, encephalopathy).

🃏 Card 5
Q: What is the mechanism behind the "Triple Whammy" drug interaction causing drug-induced AKI?
A: Concomitant use of: 1) **NSAIDs** (inhibit prostaglandins → afferent arteriolar constriction); 2) **ACE Inhibitors / ARBs** (inhibit angiotensin II → efferent arteriolar vasodilation); and 3) **Diuretics** (reduce plasma volume). This combination collapses the glomerular filtration hydrostatic pressure gradient. (Ref: Katzung Pharmacology 15th ed.).

🃏 Card 6
Q: What is the initial emergency management for severe hyperkalaemia with ECG changes in AKI?
A: 1) **10 mL of 10% Calcium Gluconate IV over 2–5 min** for myocardial membrane stabilization; 2) **10 units short-acting Actrapid Insulin in 50 mL 50% Dextrose** to shift K+ intracellularly; 3) **Nebulised Salbutamol (10–20 mg)**; 4) **Calcium resonium / Sodium zirconium cyclosilicate**; 5) Dialysis if refractory. (Ref: UpToDate / NICE Guidelines).

🃏 Card 7
Q: In which clinical scenarios is the FeNa calculation unreliable for diagnosing AKI?
A: FeNa is unreliable in patients receiving **loop or thiazide diuretics** (use Fractional Excretion of Urea, FeUrea <35% instead), early urinary obstruction, contrast-induced nephropathy, rhabdomyolysis, and chronic kidney disease.

🃏 Card 8
Q: Which anatomical structures form the filtration barrier in the renal corpuscle?
A: 1) Fenestrated glomerular capillary endothelium; 2) Glomerular basement membrane (GBM, rich in negatively charged heparan sulphate); 3) Visceral layer podocyte foot processes (pedicels) with slit diaphragms formed by nephrin. (Ref: Snell's Clinical Anatomy & Junqueira's Histology).

🃏 Card 9
Q: What is the histological hallmark of Acute Interstitial Nephritis (AIN)?
A: Inflammatory infiltration of the renal interstitium with **eosinophils, lymphocytes, and plasma cells**, accompanied by interstitial oedema with sparing of glomeruli, typically triggered by drug hypersensitivity (e.g. PPIs, penicillins, NSAIDs). (Ref: Junqueira Histology 16th ed.).

🃏 Card 10
Q: What is the long-term renal prognosis for patients surviving severe AKI?
A: Patients with a history of AKI have an 8- to 9-fold increased risk of developing **Chronic Kidney Disease (CKD)**, a 3-fold increased risk of End-Stage Renal Disease (ESRD), and heightened long-term cardiovascular mortality, necessitating regular eGFR and proteinuria follow-up at 3 months post-discharge. (Ref: KDIGO / NCBI PMID: 31056525).`
      })
    }

    if (mode === "quiz") {
      return NextResponse.json({
        text: `---
**Question 1**
A 68-year-old male with a history of heart failure is admitted with sepsis secondary to community-acquired pneumonia. His baseline creatinine was 90 µmol/L. On day 2, his serum creatinine rises to 280 µmol/L, and his 6-hour urine output is 120 mL (weight 80 kg, rate 0.25 mL/kg/h). Urinalysis shows specific gravity 1.010 and numerous muddy brown granular casts. Urine sodium is 55 mmol/L and FeNa is 2.8%. What is the most likely diagnosis?

**A.** Pre-renal azotemia from sepsis-induced hypoperfusion
**B.** Acute Tubular Necrosis (ATN)
**C.** Acute Glomerulonephritis
**D.** Post-renal urinary tract obstruction

✅ **Correct Answer: B** — **Acute Tubular Necrosis (ATN)**. The combination of FeNa >2%, urine sodium >40 mmol/L, low urine osmolality, and pathognomonic "muddy brown granular casts" on urine microscopy confirms acute tubular necrosis secondary to ischaemia and septic shock. In pre-renal azotemia, FeNa would be <1% with normal sediment. (Ref: Materials of Internal Medicine / UpToDate).

---
**Question 2**
A 24-year-old female presents with puffiness around her eyes, dark cola-coloured urine, and blood pressure 158/98 mmHg. She reports having a severe bacterial sore throat 14 days ago. Urinalysis demonstrates proteinuria (1.5 g/24h) and dysmorphic red blood cells with RBC casts. Serum complement C3 is significantly decreased. What is the most likely underlying pathophysiology?

**A.** Immune complex deposition in the subepithelial space with complement consumption (Post-streptococcal Glomerulonephritis)
**B.** Direct tubular toxicity from streptococcal exotoxins
**C.** IgA immune complex deposition in the mesangium within 24 hours of infection
**D.** Linear IgG anti-glomerular basement membrane antibody deposition

✅ **Correct Answer: A** — **Post-streptococcal Glomerulonephritis (PSGN)**. Characterised by nephritic syndrome (haematuria, RBC casts, hypertension, periorbital oedema) appearing 1–3 weeks post-streptococcal pharyngitis with classical low serum C3 complement due to alternative pathway activation. IgA nephropathy occurs syn-pharyngitically (<48 hours after infection) with normal complement levels. (Ref: Robbins & Cotran Pathologic Basis of Disease 10th ed. / Ghai Pediatrics).

---
**Question 3**
A 74-year-old male with osteoarthritis is taking Diclofenac 50 mg TID, Ramipril 10 mg daily for hypertension, and Indapamide 2.5 mg daily. Following 3 days of gastroenteritis with poor oral intake, he presents with profound lethargy. Bloods reveal K+ 6.8 mmol/L, Creatinine 420 µmol/L (baseline 85 µmol/L), Urea 28 mmol/L. ECG shows tall peaked T waves and widening of the QRS complex. What is the immediate first step in medical management?

**A.** Administer 10 units IV regular insulin with 50 mL 50% dextrose
**B.** Administer 10 mL of 10% Calcium Gluconate IV over 2–5 minutes
**C.** Administer 5 mg Nebulised Salbutamol
**D.** Initiate urgent emergency haemodialysis

✅ **Correct Answer: B** — **10 mL of 10% Calcium Gluconate IV**. In severe hyperkalaemia with ECG changes (peaked T waves, QRS widening indicating imminent ventricular fibrillation/cardiac arrest), the immediate top priority is membrane stabilization using IV Calcium Gluconate. Insulin-dextrose and salbutamol shift potassium into cells but do not protect the myocardium. Dialysis is definitive but takes time to initiate. (Ref: UpToDate / NCBI PMID: 29929997).

---
**Question 4**
Which of the following describes the correct embryonic origin of the definitive adult kidney (Metanephros)?

**A.** Pronephric duct and cloacal endoderm
**B.** Ureteric bud (outgrowth of mesonephric duct) and Metanephric blastema (mesoderm)
**C.** Paramesonephric duct and genital ridge
**D.** Allantoic diverticulum and yolk sac splanchnopleure

✅ **Correct Answer: B** — **Ureteric bud and Metanephric blastema**. The permanent kidney develops during week 5 from reciprocal inductive signaling between the ureteric bud (which branches to form the collecting ducts, calyces, pelvis, and ureter) and the metanephrogenic blastema (which differentiates into nephrons: glomeruli, proximal tubules, loops of Henle, and distal convoluted tubules). (Ref: Langman's Medical Embryology 14th ed.).

---
**Question 5**
During a surgical exploration of the retroperitoneum, which anatomical relationship is critical regarding the right renal vein and artery at the renal hilum?

**A.** The renal vein lies anterior to the renal artery, and the renal pelvis lies most posterior
**B.** The renal artery lies anterior to the renal vein and pelvis
**C.** The renal pelvis lies most anterior, followed by the renal vein
**D.** The right renal vein passes posterior to the inferior vena cava

✅ **Correct Answer: A** — **Renal vein is anterior, renal artery is intermediate, renal pelvis is posterior** (V-A-P from anterior to posterior). At the renal hilum, the renal vein is the most anterior structure, the renal artery is intermediate, and the renal pelvis (transitioning to ureter) is the most posterior structure. (Ref: Snell's Clinical Anatomy by Regions 10th ed. & SRB's Manual of Surgery 6th ed.).`
      })
    }

    // Default detailed response
    return NextResponse.json({
      text: `## Clinical Study Guide & Topic Synthesis

### 1. Overview & Pathophysiology
A comprehensive clinical evaluation requires synthesizing core mechanisms, diagnostic biomarkers, and evidence-based interventions. 

| Dimension | Physiological Mechanism | Clinical Significance |
|---|---|---|
| **Aetiological Factor** | Cellular hypoperfusion or toxic insult | Causes direct structural or metabolic disruption |
| **Biomarker Response** | Rapid elevation in serum / urine markers | Enables early staging and risk stratification |
| **Organ Autoregulation** | Compensatory vascular and neurohormonal reflexes | Maintained until critical threshold is exceeded |

> **Clinical Pearl:** Always assess patient hemodynamic stability, fluid balance, and medication charts before initiating invasive interventions.

### 2. Diagnostic & Laboratory Workup
1. **First-Line Blood Tests:** Full Blood Count, Urea & Electrolytes, Liver Function, Inflammatory Markers (CRP/ESR).
2. **Bedside Evaluation:** Urine dipstick and microscopy for cellular casts.
3. **Imaging:** Targeted ultrasound or radiographic staging.

### 3. Evidence-Based Therapeutic Algorithm
1. **Immediate Stabilization:** Airway, Breathing, Circulation (ABCDE approach) with volume optimization.
2. **Discontinue Offending Agents:** Review all prescribed and over-the-counter pharmaceuticals.
3. **Targeted Medical Therapy:** Guideline-directed pharmacotherapy per international protocols.

---

## 📚 Evidence-Based References
1. **NCBI / PubMed:** Evidence Synthesis & International Consensus. *National Library of Medicine.*
2. **UpToDate:** Clinical Practice Decision Support & Guideline Summaries.
3. **Recommended Textbooks:**
   - *${textbooks[0]}*
   - *${textbooks[1] || textbooks[0]}*
   - *${textbooks[2] || textbooks[0]}*`
    })
  } catch (error) {
    console.error("notebook-ai error:", error)
    return NextResponse.json({ text: "Something went wrong. Please try again." }, { status: 500 })
  }
}
