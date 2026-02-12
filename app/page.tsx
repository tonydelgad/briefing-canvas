"use client";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [themes, setThemes] = useState<string[]>([]);

const generateBriefing = async () => {
  if (!query) return;

  const res = await fetch("/api/themes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();
  setThemes(data.themes || []);
};

return (
  <main className="min-h-screen flex justify-center bg-gray-100 py-10">
    <div className="bg-white shadow-xl rounded-xl p-12 w-[850px] min-h-[1100px] mt-10">

  <h1 className="text-3xl font-semibold mb-6 text-gray-900">
        Executive Briefing Canvas
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter a topic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-3"
        />
        <button
          onClick={generateBriefing}
          className="bg-black text-white px-5 py-2 rounded-lg"
        >
          Generate Briefing
        </button>
      </div>

      {query && (
        <>
          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-900">
            Executive Summary
          </h2>
          <p className="mb-6 text-gray-700">
            AI-generated synthesis of {query}.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-900">
            Detected Themes
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            {themes.map((theme, index) => (
              <li key={index} className="text-gray-800">
                {theme}
              </li>
            ))}
          </ul>
        </>
      )}

    </div>
  </main>
);
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    paddingTop: "40px",
  },
  paper: {
    width: "816px",
    height: "1056px",
    background: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    padding: "40px",
    boxSizing: "border-box",
  },
  search: {
    flex: 1,
    padding: "14px 18px",
    fontSize: "18px",
    borderRadius: "12px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "14px 20px",
    fontSize: "16px",
    borderRadius: "12px",
    border: "none",
    background: "#111",
    color: "#fff",
    cursor: "pointer",
  },
  oval: {
    marginTop: "30px",
    width: "100%",
    height: "75%",
    borderRadius: "50%",
    border: "2px solid #111",
    padding: "60px",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateRows: "auto 1fr 1fr",
    gap: "24px",
  },
};