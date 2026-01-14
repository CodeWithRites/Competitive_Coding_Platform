import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function LoginModal({ close }) {
  const { login } = useAuth();
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

      login({ email: data.email }); // save user globally
      close();
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
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
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
