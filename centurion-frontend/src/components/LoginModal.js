import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginModal({ close }) {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error();

      const data = await res.json();

      // ✅ save user
      login({ email: data.email });

      close();

      // ✅ THIS IS THE LINE YOU ASKED ABOUT
      if (localStorage.getItem("studentProfileCompleted") !== "true") {
        navigate("/student-profile");
      }
      // else → no redirect (stay on landing)

    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <h3>Login</h3>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button className="primary-btn" onClick={handleLogin}>
          Login
        </button>

        <span className="close" onClick={close}>✕</span>
      </div>
    </div>
  );
}
