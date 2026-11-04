import { NextRequest, NextResponse } from "next/server"

// Allow up to 60 seconds for Gemini to respond (Vercel defaults to 10s which is too short)
export const maxDuration = 60

// ── Standard Textbook Catalog ──
const TEXTBOOK_CATALOG: Record<string, string> = {
  anatomy: "Snell's Clinical Anatomy by Regions (10th ed.)",
  physiology: "Guyton & Hall Textbook of Medical Physiology (14th ed.)",
  histology: "Junqueira's Basic Histology: Text & Atlas (16th ed.)",
  embryology: "Langman's Medical Embryology (14th ed.)",
  surgery: "SRB's Manual of Surgery (6th ed.)",
  internal_medicine: "Kumar & Clark's Clinical Medicine (10th ed.) / Harrison's Principles",
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

  if (!books.includes(TEXTBOOK_CATALOG.internal_medicine)) books.push(TEXTBOOK_CATALOG.internal_medicine)
  if (!books.includes(TEXTBOOK_CATALOG.physiology)) books.push(TEXTBOOK_CATALOG.physiology)

  return books
}

export async function POST(req: NextRequest) {
  try {
    const { messages, context, mode } = await req.json()
    const lastUserMessage = messages?.[messages.length - 1]?.content || ""
    const textbooks = getRelevantTextbooks(context || "", lastUserMessage)

    const baseSystemPrompt = `You are PodGuide AI — an expert medical tutor, clinical academic mentor, and study co-pilot for healthcare students.

STUDENT'S UPLOADED SOURCES & NOTEBOOK CONTEXT:
===================================================
${context || "No specific sources attached yet. Rely on authoritative medical knowledge."}
===================================================

CORE MENTOR GUIDELINES:
1. UPLOADED SOURCES PRIORITY:
   - When the student has uploaded sources (PDFs, lecture slides, documents, notes, links), you MUST directly analyze, reference, and synthesize information from those materials.
   - Summarize, explain, answer questions, compare findings, or extract clinical pearls directly from what the student provided.
   - If the student asks a question about their uploaded notes or materials, give direct, accurate answers grounded in their materials.
   - When the material leaves gaps, augment seamlessly with evidence-based medical consensus.

2. VERSATILE & NON-RIGID ASSISTANCE:
   - You are NOT limited to any predefined topics or scripts.
   - Whether the student asks about Cardiology, Surgery, Pharmacology, Anatomy, Pathology, Pediatrics, Obstetrics, or any specific clinical case or lecture slide, provide detailed, expert academic guidance.
   - You can summarize long documents, create mnemonic devices, compare differential diagnoses in clean tables, explain biochemical or physiological mechanisms, and formulate management algorithms.

3. GOLD-STANDARD CITATIONS & REFERENCES:
   - When appropriate, reference authoritative guidelines: WHO, NICE, NCBI / PubMed, UpToDate, and standard textbooks:
${textbooks.map(b => `     * ${b}`).join("\n")}

4. PRESENTATION RULES:
   - Use clean, structured Markdown headings (## and ###).
   - Use comparison tables (| Parameter | Finding | Clinical Significance |) for differentials, investigations, pharmacology, or criteria.
   - Use bold font for critical diagnostic criteria, drug names, and thresholds.
   - Highlight high-yield takeaways in blockquotes (> **Clinical Pearl:** ...).
   - Use numbered lists for management steps or diagnostic sequences.
   - Conclude comprehensive explanations with a concise "## 📚 Evidence-Based References" section.`

    let taskPrompt = baseSystemPrompt

    if (mode === "mindmap") {
      taskPrompt += `\n\nTASK: Generate an extensive, multi-level Mind Map outline based directly on the student's uploaded materials and notes. Format EXACTLY:

# [Central Topic]

## [Main Branch 1: Anatomy / Definition / Overview]
### [Sub-branch 1.1]
- Key concept from the sources
### [Sub-branch 1.2]
- Detailed mechanism or criterion

## [Main Branch 2: Pathophysiology & Aetiology]
### [Sub-branch 2.1: Causes]
- Specific trigger or factor
### [Sub-branch 2.2: Cellular / Molecular Mechanism]
- Key pathway

## [Main Branch 3: Clinical Presentation]
### [Sub-branch 3.1: Symptoms]
- Hallmark symptoms
### [Sub-branch 3.2: Physical Signs]
- Clinical examination findings

## [Main Branch 4: Diagnostic Workup]
### [Sub-branch 4.1: First-Line Investigations]
- Laboratory or bedside test
### [Sub-branch 4.2: Confirmatory / Imaging]
- Gold standard investigation

## [Main Branch 5: Management & Protocol]
### [Sub-branch 5.1: Acute Management]
- First-line intervention and drug dosing
### [Sub-branch 5.2: Maintenance / Long-Term]
- Guideline-directed treatment

## 📚 Evidence-Based References
- Sources from student notes & standard textbooks: ${textbooks.slice(0, 2).join(", ")}`
    } else if (mode === "flashcards") {
      taskPrompt += `\n\nTASK: Generate 10 high-yield clinical flashcards directly testing the contents of the student's uploaded materials and notebook context. Format EXACTLY:

🃏 Card 1
Q: [High-yield clinical vignette or recall question based on the sources]
A: [Precise answer with mechanism, normal values, diagnostic criteria, and clinical rationale]

🃏 Card 2
Q: [Question]
A: [Answer]

... continue through 🃏 Card 10.`
    } else if (mode === "quiz") {
      taskPrompt += `\n\nTASK: Generate 5 high-yield clinical MCQ exam questions based directly on the student's uploaded materials and notes. Format EXACTLY:

---
**Question 1**
[Clinical scenario with patient presentation, vital signs, physical exam, and pertinent investigations]

**A.** [Option A]
**B.** [Option B]
**C.** [Option C]
**D.** [Option D]

✅ **Correct Answer: [Letter]** — [Detailed explanation breaking down why the correct choice is right, why the distractors are incorrect, referencing the uploaded materials and authoritative guidelines]

---
**Question 2**
... continue through Question 5.`
    }

    // ── 1. Try Gemini API ──
    const GEMINI_KEY =
      process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY ||
      process.env.NEXT_PUBLIC_GEMINI_API_KEY
    if (GEMINI_KEY) {
      // Models ordered by reliability — gemini-3.5-flash is confirmed working
      const candidateModels = [
        "gemini-3.5-flash",
        "gemini-3.5-flash-lite",
        "gemini-3.8-flash",
        "gemini-3.7-flash",
      ]

      for (const model of candidateModels) {
        // Retry up to 2 times on 503 (overloaded) errors
        for (let attempt = 0; attempt < 2; attempt++) {
          try {
            // Build conversation contents (user messages only — system goes in systemInstruction)
            const contents: { role: string; parts: { text: string }[] }[] = []

            if (messages && messages.length > 1) {
              // Multi-turn: include recent conversation history
              const history = messages.slice(-8, -1).map((m: any) => ({
                role: m.role === "user" ? "user" : "model",
                parts: [{ text: m.content }]
              }))
              contents.push(...history)
              contents.push({ role: "user", parts: [{ text: lastUserMessage }] })
            } else {
              // Single turn
              contents.push({
                role: "user",
                parts: [{ text: lastUserMessage || "Please analyze my uploaded notes and provide high-yield guidance." }]
              })
            }

            const payload = {
              systemInstruction: {
                parts: [{ text: taskPrompt }]
              },
              contents,
              generationConfig: {
                temperature: mode === "mindmap" || mode === "flashcards" ? 0.3 : 0.6,
                maxOutputTokens: 4096,
              }
            }

            const res = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEY}`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
              }
            )

            if (res.ok) {
              const data = await res.json()
              const text = data.candidates?.[0]?.content?.parts?.[0]?.text
              if (text) return NextResponse.json({ text })
              // If no text in response (e.g. safety block), try next model
              console.warn(`Gemini model ${model} returned empty text (safety filter or empty candidates)`)
              break
            } else {
              const errData = await res.json().catch(() => ({}))
              const status = res.status
              const errMsg = errData?.error?.message || `HTTP ${status}`
              console.warn(`Gemini model ${model} attempt ${attempt + 1}: ${errMsg}`)

              if (status === 503 && attempt === 0) {
                // Model overloaded — wait briefly and retry once
                await new Promise(r => setTimeout(r, 1500))
                continue
              }
              // 404 = model not available, 429 = quota — skip to next model
              break
            }
          } catch (e) {
            console.warn(`Gemini model ${model} fetch exception (attempt ${attempt + 1}):`, e)
            break
          }
        }
      }

      // If all Gemini models failed, log it clearly
      console.error("All Gemini candidate models failed. Falling through to OpenAI or static fallback.")
    } else {
      console.warn("No Gemini API key found in environment variables (checked GOOGLE_GENERATIVE_AI_API_KEY, GEMINI_API_KEY, GOOGLE_API_KEY, NEXT_PUBLIC_GEMINI_API_KEY)")
    }

    // ── 2. Try OpenAI Fallback ──
    const OPENAI_KEY = process.env.OPENAI_API_KEY
    if (OPENAI_KEY && OPENAI_KEY.startsWith("sk-")) {
      try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${OPENAI_KEY}` },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "system", content: taskPrompt }, ...messages.slice(-8)],
            max_tokens: 3500,
            temperature: 0.6
          })
        })
        if (res.ok) {
          const data = await res.json()
          const text = data.choices?.[0]?.message?.content
          if (text) return NextResponse.json({ text })
        }
      } catch (err) {
        console.warn("OpenAI fallback failed:", err)
      }
    }

    // ── 3. Intelligent Fallback — tell the user what went wrong ──
    // If we reach here, BOTH Gemini and OpenAI failed. Provide diagnostic info.
    const hasGeminiKey = !!(
      process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY ||
      process.env.NEXT_PUBLIC_GEMINI_API_KEY
    )
    const hasOpenAIKey = !!(process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.startsWith("sk-"))

    let diagnosticNote = ""
    if (!hasGeminiKey && !hasOpenAIKey) {
      diagnosticNote = "\n\n> ⚠️ **Configuration Issue:** No AI API key was found in the server environment. Please add `GOOGLE_GENERATIVE_AI_API_KEY` to your Vercel Environment Variables (Settings → Environment Variables) and redeploy."
    } else if (hasGeminiKey) {
      diagnosticNote = "\n\n> ⚠️ **Service Issue:** The Gemini API key is configured but all model requests failed (likely due to high demand or timeout). Please try again in a moment."
    }

    const topicHeading = lastUserMessage.length > 5 && lastUserMessage.length < 60
      ? lastUserMessage.replace(/[^\w\s-]/g, "")
      : "Clinical Topic Synthesis"

    // Return a helpful response that acknowledges the issue
    return NextResponse.json({
      text: `## ⚠️ AI Service Temporarily Unavailable

**Your question:** "${lastUserMessage}"

The PodGuide AI tutor could not connect to the Gemini AI service to analyze your uploaded materials and answer your question.
${diagnosticNote}

### While you wait, here's a study framework for: **${topicHeading}**

| Step | Action | Purpose |
|---|---|---|
| **1** | Review your uploaded source materials | Ground your understanding in primary sources |
| **2** | Identify key definitions & diagnostic criteria | Build foundational clinical knowledge |
| **3** | Map pathophysiology to clinical presentation | Connect mechanisms to symptoms |
| **4** | Outline the evidence-based management protocol | Prepare for clinical decision-making |

> **Tip:** Try asking your question again — the AI service may recover shortly.

---
📚 Referenced textbooks: ${textbooks.slice(0, 3).join(", ")}`
    })
  } catch (error) {
    console.error("notebook-ai error:", error)
    return NextResponse.json({ text: "Unable to process the request at this time. Please check your network connection and retry." }, { status: 500 })
  }
}
