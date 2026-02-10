import { NextResponse } from "next/server";

export async function POST(req: Request) {
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
            "You are an executive analyst. Extract 4–6 high-level strategic themes.",
        },
        {
          role: "user",
          content: query,
        },
      ],
    }),
  });

  const data = await response.json();
  const text = data.choices[0].message.content;

  return NextResponse.json({ themes: text.split("\n") });
}