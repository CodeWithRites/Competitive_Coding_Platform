import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section style={{ padding: "80px" }}>
        <h1>
          Practice <span style={{ color: "#38bdf8" }}>Competitive Coding</span>
          <br />
          The Right Way
        </h1>

        <p style={{ margin: "20px 0", maxWidth: "500px" }}>
          College‑focused coding platform with contests,
          rankings and AI‑powered evaluation.
        </p>

        <button onClick={() => navigate("/login")}>
          Start Coding
        </button>

        <button onClick={() => navigate("/dashboard")}>
          Explore Problems
        </button>
      </section>
    </>
  );
}
