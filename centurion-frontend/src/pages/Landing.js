import Navbar from "../components/Navbar";
import "../index.css";

export default function Landing() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <h1>
          Master <span>Competitive Coding</span><br />
          At College Level
        </h1>

        <p>
          AI-powered evaluation, contests, rankings & anti-cheating system.
        </p>

        <button className="primary-btn">Get Started</button>
      </section>

      {/* FEATURES */}
      <section id="features" className="features-section">
        <h2 className="section-title">Why Choose Centurion?</h2>

        <div className="feature-grid">
          <Feature title="⚔ Competitive Coding" text="Real-world problem solving" />
          <Feature title="🏆 Contests & Leaderboards" text="Compete and rank fairly" />
          <Feature title="🧠 Practice Problems" text="Beginner to advanced tracks" />
          <Feature title="🤖 AI-Based Evaluation" text="Accurate & fast judging" />
          <Feature title="🛡 Anti-Cheating System" text="Integrity-first platform" />
          <Feature title="🏫 College Rankings" text="Compare across colleges" />
        </div>
      </section>

      {/* MOTIVATION */}
      <section className="motivation">
        <h2>Code. Compete. Conquer.</h2>
        <p>
          Built for students preparing for placements,
          hackathons and real-world challenges.
        </p>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Compete Smarter?</h2>
        <button className="primary-btn">Join Centurion</button>
      </section>

      <footer>© 2026 Centurion | Competitive Coding Platform</footer>
    </>
  );
}

function Feature({ title, text }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
