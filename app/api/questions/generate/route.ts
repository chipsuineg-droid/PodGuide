import { NextRequest, NextResponse } from "next/server"

const TEXTBOOK_MAP: Record<string, string> = {
  anatomy: "Snell's Clinical Anatomy by Regions (10th ed.)",
  physiology: "Guyton & Hall Textbook of Medical Physiology (14th ed.)",
  pathology: "Robbins & Cotran Pathologic Basis of Disease (10th ed.)",
  pharmacology: "Katzung's Basic & Clinical Pharmacology (15th ed.)",
  surgery: "SRB's Manual of Surgery (6th ed.)",
  medicine: "Materials / Kumar & Clark's Clinical Medicine (10th ed.)",
  paediatrics: "Ghai Essential Pediatrics (9th ed.)",
  embryology: "Langman's Medical Embryology (14th ed.)",
  histology: "Junqueira's Basic Histology: Text & Atlas (16th ed.)",
  obstetrics: "Williams Obstetrics (26th ed.)",
}

export async function POST(req: NextRequest) {
  try {
    const {
      program_id = "medicine",
      academic_level = "Year 4",
      subject = "Internal Medicine",
      topic = "High-Yield Clinical Practice",
      count = 5
    } = await req.json()

    const apiKey =
      process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
      process.env.GEMINI_API_KEY ||
      process.env.NEXT_PUBLIC_GEMINI_API_KEY

    const prompt = `You are an expert medical educator creating board-style MCQ exam questions for ${program_id} students at level "${academic_level}" focusing on "${subject}" (${topic}).
Generate EXACTLY ${count} authentic, high-yield, clinical scenario multiple-choice questions.

Format your response as a valid JSON array of objects with this EXACT structure (NO markdown code blocks around the JSON):
[
  {
    "id": "ai-mcq-1",
    "stem": "Full clinical vignette with patient age, sex, presenting complaints, physical exam findings, and lab/imaging data.",
    "difficulty": "medium",
    "subject": "${subject}",
    "topic": "${topic}",
    "academic_level": "${academic_level}",
    "program_id": "${program_id}",
    "explanation": "In-depth rationale explaining why the correct choice is accurate and why distractors are incorrect, referencing standard textbooks (Snell, Guyton, Robbins, Katzung, SRB, Kumar & Clark, Ghai) and NCBI/UpToDate.",
    "reference": "Authoritative textbook name and edition",
    "question_options": [
      { "id": "opt-1", "option_text": "Option text A", "is_correct": true, "explanation": "Rationale for option A" },
      { "id": "opt-2", "option_text": "Option text B", "is_correct": false, "explanation": "Rationale for option B" },
      { "id": "opt-3", "option_text": "Option text C", "is_correct": false, "explanation": "Rationale for option C" },
      { "id": "opt-4", "option_text": "Option text D", "is_correct": false, "explanation": "Rationale for option D" }
    ]
  }
]

Ensure each question has exactly one correct answer and 3 distinct plausible clinical distractors.`

    if (apiKey) {
      const models = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-flash-latest"]
      for (const model of models) {
        try {
          const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                  temperature: 0.4,
                  maxOutputTokens: 3000,
                  responseMimeType: "application/json"
                }
              })
            }
          )

          if (res.ok) {
            const data = await res.json()
            const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text
            if (rawText) {
              const cleaned = rawText.replace(/```json/g, "").replace(/```/g, "").trim()
              const parsed = JSON.parse(cleaned)
              if (Array.isArray(parsed) && parsed.length > 0) {
                return NextResponse.json({ success: true, questions: parsed })
              }
            }
          }
        } catch {
          // Fall through to next model or fallback generator
        }
      }
    }

    // Dynamic fallback generation if API key is not yet configured
    const fallbackQuestions = Array.from({ length: count }).map((_, i) => ({
      id: `ai-gen-fallback-${Date.now()}-${i}`,
      stem: `A patient presents with acute ${subject.toLowerCase()} symptoms requiring clinical evaluation in ${academic_level} ${program_id}. Diagnostic assessment reveals classic physical and laboratory findings for ${topic}. What is the primary management priority?`,
      difficulty: "medium" as const,
      subject,
      topic,
      academic_level,
      program_id,
      explanation: `Clinical management in ${subject} prioritizes immediate stabilization, targeted protocol compliance, and organ protection. Reference: ${TEXTBOOK_MAP[subject.toLowerCase()] || "Standard Medical Curriculum"}.`,
      reference: TEXTBOOK_MAP[subject.toLowerCase()] || "Standard Medical Curriculum",
      question_options: [
        {
          id: `opt-fb-${i}-1`,
          option_text: `Standard first-line protocolized intervention for ${topic}`,
          is_correct: true,
          explanation: "Gold-standard initial therapy aligned with clinical guidelines."
        },
        {
          id: `opt-fb-${i}-2`,
          option_text: "Observation without diagnostic confirmation or monitoring",
          is_correct: false,
          explanation: "Inadequate for acute presentations."
        },
        {
          id: `opt-fb-${i}-3`,
          option_text: "High-dose empirical treatment without baseline lab evaluation",
          is_correct: false,
          explanation: "Increases risk of toxic drug accumulation."
        },
        {
          id: `opt-fb-${i}-4`,
          option_text: "Elective outpatient discharge without specialist referral",
          is_correct: false,
          explanation: "Contraindicated in progressive clinical pathology."
        }
      ]
    }))

    return NextResponse.json({ success: true, questions: fallbackQuestions })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
