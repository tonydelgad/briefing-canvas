export default function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.paper}>
        
        {/* Search */}
        <input
          placeholder="Type a topic to generate an executive briefing…"
          style={styles.search}
        />

        {/* Briefing Canvas */}
        <div style={styles.oval}>
          <section>
            <h3>Executive Summary</h3>
            <p>High-level synthesis of the topic will appear here.</p>
          </section>

          <section>
            <h3>Current Signals</h3>
            <ul>
              <li>News</li>
              <li>Policy</li>
              <li>Market</li>
            </ul>
          </section>

          <section>
            <h3>Cross-Domain Implications</h3>
            <ul>
              <li>Technology</li>
              <li>Health</li>
              <li>Science</li>
              <li>Sports / Culture</li>
            </ul>
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
    alignItems: "flex-start",
    paddingTop: "40px",
  },
  paper: {
    width: "816px", // 8.5in at 96dpi
    height: "1056px", // 11in at 96dpi
    background: "#ffffff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    padding: "40px",
    boxSizing: "border-box",
  },
  search: {
    width: "100%",
    padding: "14px 18px",
    fontSize: "18px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    marginBottom: "30px",
  },
  oval: {
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