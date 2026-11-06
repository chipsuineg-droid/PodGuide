import { google } from "@ai-sdk/google"
import { streamText } from "ai"
import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export const maxDuration = 60

export async function POST(req: Request) {
  try {
    // 1. Enforce authentication
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized. Please sign in to use PodGuide AI." }, { status: 401 })
    }

    const { messages } = await req.json()

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages payload" }, { status: 400 })
    }

    const result = streamText({
      model: google("gemini-1.5-flash"),
      system:
        "You are PodGuide AI, an expert medical and health-sciences tutor for healthcare students. You provide concise, highly accurate, and engaging explanations based on medical guidelines and the provided context.",
      messages,
    })

    return result.toTextStreamResponse()
  } catch (err: any) {
    console.error("Chat route error:", err)
    return NextResponse.json({ error: err?.message || "Internal server error" }, { status: 500 })
  }
}
