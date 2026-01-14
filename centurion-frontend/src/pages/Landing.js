import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";
import { useState } from "react";
import LoginModal from "../components/LoginModal";

export default function Landing() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar />

      <section className="hero-wrap">
        <div className="hero-left">
          <h1>
            Practice <span>Competitive Coding</span>
            <br />
            The Right Way
          </h1>

          <p>
            College-focused coding platform with contests,
            rankings and AI-powered evaluation.
          </p>

          <div className="hero-actions">
            <button
              className="primary-btn"
              onClick={() => setShowLogin(true)}
            >
              Start Coding
            </button>

            <button
              className="secondary-btn"
              onClick={() => setShowLogin(true)}
            >
              Explore Problems
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="code-mock">
            <pre>{`#include <iostream>
using namespace std;

int main() {
    int arr[] = {3, 1, 4, 2};
    int maxVal = arr[0];

    for (int i = 1; i < 4; i++)
        if (arr[i] > maxVal) maxVal = arr[i];

    cout << "Maximum element: " << maxVal;
    return 0;
}`}</pre>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <h2 className="section-title">Why Centurion?</h2>

        <div className="feature-grid">
          <Feature title="Competitive Coding" text="Real contest environment" />
          <Feature title="AI Evaluation" text="Fast & accurate judging" />
          <Feature title="Anti-Cheating" text="Integrity-first system" />
          <Feature title="Leaderboards" text="College & global ranks" />
          <Feature title="Practice Tracks" text="Beginner to advanced" />
          <Feature title="Placement Ready" text="Interview-oriented problems" />
        </div>
      </section>

      <section className="cta">
        <h2>Code Smarter. Rank Higher.</h2><br />
        <button
          className="primary-btn"
          onClick={() => setShowLogin(true)}
        >
          Join Now
        </button>
      </section>

      <Footer />

      {showLogin && <LoginModal close={() => setShowLogin(false)} />}
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
