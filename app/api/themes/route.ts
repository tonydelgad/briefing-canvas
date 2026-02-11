import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are an executive analyst. Return 4–6 concise strategic themes as bullet points. No explanations.",
          },
          {
            role: "user",
            content: query,
          },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("OpenAI error:", err);
      return NextResponse.json({ themes: [] });
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "";

    const themes = text
      .split("\n")
      .map((t: string) => t.replace(/^[-•\d.]+\s*/, "").trim())
      .filter(Boolean);

    return NextResponse.json({ themes });
  } catch (error) {
    console.error("Theme API error:", error);
    return NextResponse.json({ themes: [] });
  }
}