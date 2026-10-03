import { google } from "@ai-sdk/google"
import { streamText } from "ai"

export const maxDuration = 60

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: google("gemini-1.5-pro-latest"),
    system: "You are PodGuide AI, an expert medical and health-sciences tutor for MBChB students. You provide concise, highly accurate, and engaging explanations based on medical guidelines and the provided context.",
    messages,
  })

  return result.toTextStreamResponse()
}