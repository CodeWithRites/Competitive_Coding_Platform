import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <div className="logo">⚡ Centurion</div>

      <div className="nav-actions">
        <button className="nav-link" onClick={scrollToFeatures}>
          Features
        </button>

        <button
          className="icon-btn"
          onClick={() => setDark(!dark)}
          title="Toggle Theme"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <button className="icon-btn" title="Notifications">
          🔔
        </button>

        <button
          className="signin-btn"
          onClick={() => navigate("/login")}
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}
