"use client";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [themes, setThemes] = useState<string[]>([]);

  const generateBriefing = () => {
    // TEMP: fake AI result
    setThemes([
      "Geopolitical Risk",
      "Supply Chain Resilience",
      "Technology Acceleration",
      "Regulatory Pressure",
    ]);
  };

  return (
    <div style={styles.page}>
      <div style={styles.paper}>
        
        {/* Search */}
        <div style={{ display: "flex", gap: "12px" }}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a topic to generate an executive briefing…"
            style={styles.search}
          />
          <button onClick={generateBriefing} style={styles.button}>
            Generate
          </button>
        </div>

        {/* Briefing Canvas */}
        <div style={styles.oval}>
          <section>
            <h3>Executive Summary</h3>
            <p>
              AI-generated synthesis of <strong>{query || "your topic"}</strong>.
            </p>
          </section>

          <section>
            <h3>Detected Themes</h3>
            <ul>
              {themes.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Cross-Domain Implications</h3>
            <p>
              Each theme can now trigger a secondary search and refresh this
              canvas automatically.
            </p>
          </section>
        </div>

      </div>
    </div>
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