import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginModal from "./LoginModal";
import "../index.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [showLogin, setShowLogin] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const handleProtectedNavigation = (path) => {
    const completed = localStorage.getItem("studentProfileCompleted");

    if (completed !== "true") {
      navigate("/student-profile");
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <nav className="navbar">
        {/* LEFT */}
        <div className="nav-left" onClick={() => navigate("/")}>
          <span className="logo">⚡</span>
          <span className="brand">Centurion</span>
        </div>

        {/* MIDDLE */}
        <div className="nav-center">
          {user && (
            <span className="nav-link" onClick={() => handleProtectedNavigation("/tutorials")}>Tutorials</span>
          )}
          <span className="nav-link" onClick={() => navigate("/about")}>About</span>
          <span className="nav-link" onClick={() => navigate("/features")}>Features</span>
          <span className="nav-link" onClick={() => navigate("/contact")}>Contact</span>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <button className="icon-btn" onClick={toggleDarkMode}>
            {darkMode ? "☀️" : "🌙"}
          </button>

          {!user ? (
            <button className="login-btn" onClick={() => setShowLogin(true)}>
              Login
            </button>
          ) : (
            <>
              <button className="icon-btn">🔔</button>

              <div className="profile">
                <span
                  className="profile-icon"
                  onClick={() => setProfileOpen(!profileOpen)}
                >
                  👤
                </span>

                {profileOpen && (
                  <div className="profile-menu">
                    <p onClick={() => handleProtectedNavigation("/leaderboard")}>
                      My Leaderboard
                    </p>
                    <p onClick={() => navigate("/student-profile")}>
                      My Profile
                    </p>
                    <p onClick={() => handleProtectedNavigation("/courses")}>
                      My Courses
                    </p>
                    <p onClick={() => handleProtectedNavigation("/competitive-coding")}>
                      Competitive Coding
                    </p>
                    <p onClick={logout}>Logout</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </nav>

      {showLogin && <LoginModal close={() => setShowLogin(false)} />}
    </>
  );
}
