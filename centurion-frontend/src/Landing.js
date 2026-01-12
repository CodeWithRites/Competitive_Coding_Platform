import React from "react";

const Landing = () => {
  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.nav}>
        <h2 style={{ color: "#22d3ee" }}>⚡ Centurion</h2>
        <div>
          <button style={styles.navBtn}>Login</button>
          <button style={styles.navBtn}>Signup</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heading}>Code. Compete. Conquer.</h1>
        <p style={styles.subtext}>
          A secure competitive coding platform with OTP authentication and real
          skill evaluation.
        </p>
        <button style={styles.mainBtn}>Start Coding</button>
      </section>

      {/* Features */}
      <section style={styles.features}>
        {[
          "🧠 Online Compiler (Judge0)",
          "🔐 OTP Secure Login",
          "🏆 Leaderboard & Points",
          "🛡️ Anti-Cheating System",
        ].map((item, index) => (
          <div key={index} style={styles.card}>
            {item}
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © 2026 Centurion Competitive Coding Platform
      </footer>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#0f172a",
    color: "#e5e7eb",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  },
  navBtn: {
    marginLeft: "10px",
    padding: "8px 16px",
    backgroundColor: "#22d3ee",
    border: "none",
    cursor: "pointer",
  },
  hero: {
    textAlign: "center",
    padding: "60px 20px",
  },
  heading: {
    color: "#22d3ee",
    fontSize: "48px",
  },
  subtext: {
    maxWidth: "600px",
    margin: "20px auto",
  },
  mainBtn: {
    padding: "12px 24px",
    backgroundColor: "#06b6d4",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    padding: "40px",
  },
  card: {
    backgroundColor: "#111827",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    opacity: 0.7,
  },
};

export default Landing;
