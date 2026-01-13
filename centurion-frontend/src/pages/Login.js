import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Backend integration later
    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>

      <input
        style={styles.input}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: "350px",
    margin: "120px auto",
    padding: "30px",
    background: "#020617",
    borderRadius: "12px",
    border: "1px solid #1e293b",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    color: "white",
  },
  heading: {
    textAlign: "center",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #334155",
    background: "#020617",
    color: "white",
  },
  button: {
    padding: "10px",
    background: "#22d3ee",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Login;
