import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2>Verify OTP</h2>
        <input
          maxLength="6"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
        />
        <button onClick={() => navigate("/dashboard")}>
          Verify OTP
        </button>
      </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: "380px",
    margin: "80px auto",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    background: "#020617",
    padding: "30px",
    borderRadius: "12px",
    border: "1px solid #1e293b",
  },
};

export default Otp;
