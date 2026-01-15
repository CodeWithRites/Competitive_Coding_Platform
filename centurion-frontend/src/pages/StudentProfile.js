import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentProfile() {
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);
  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    bio: "",
    phone: "",
    gender: "",
    branch: "",
    year: "",
    section: "",
    registration: "",
    github: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    setSubmitted(true); // 🔥 NO REDIRECT
  };

  /* ================= RENDER ================= */

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        {!submitted ? (
          /* ================= FORM ================= */
          <>
            <h2 style={styles.heading}>Student Details</h2>

            <input style={styles.input} placeholder="Student Name" name="name" onChange={handleChange} />
            <input style={styles.input} placeholder="Gmail ID" name="email" onChange={handleChange} />
            <input style={styles.input} placeholder="University Name" name="university" onChange={handleChange} />

            <label style={styles.label}>Profile Photo</label>
            <label style={styles.uploadBox}>
              Click to upload profile photo
              <input type="file" hidden accept="image/*" onChange={handlePhotoChange} />
            </label>

            {preview && <img src={preview} alt="preview" style={styles.preview} />}

            <textarea style={styles.input} placeholder="Bio" name="bio" onChange={handleChange} />
            <input style={styles.input} placeholder="Phone Number" name="phone" onChange={handleChange} />

            <select style={styles.input} name="gender" onChange={handleChange}>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <input style={styles.input} placeholder="Branch" name="branch" onChange={handleChange} />

            <select style={styles.input} name="year" onChange={handleChange}>
              <option value="">Select Year</option>
              <option>First Year</option>
              <option>Second Year</option>
              <option>Third Year</option>
              <option>Fourth Year</option>
            </select>

            <input style={styles.input} placeholder="Section" name="section" onChange={handleChange} />
            <input style={styles.input} placeholder="Registration Number" name="registration" onChange={handleChange} />
            <input style={styles.input} placeholder="GitHub URL" name="github" onChange={handleChange} />
            <input style={styles.input} placeholder="LinkedIn URL" name="linkedin" onChange={handleChange} />

            <button style={styles.button} onClick={handleSubmit}>
              Submit
            </button>
          </>
        ) : (
          /* ================= PROFILE VIEW ================= */
          <>
            <h2 style={styles.heading}>My Profile</h2>

            {preview && <img src={preview} alt="profile" style={styles.preview} />}

            <ProfileRow label="Name" value={formData.name} />
            <ProfileRow label="Email" value={formData.email} />
            <ProfileRow label="University" value={formData.university} />
            <ProfileRow label="Bio" value={formData.bio} />
            <ProfileRow label="Phone" value={formData.phone} />
            <ProfileRow label="Gender" value={formData.gender} />
            <ProfileRow label="Branch" value={formData.branch} />
            <ProfileRow label="Year" value={formData.year} />
            <ProfileRow label="Section" value={formData.section} />
            <ProfileRow label="Registration" value={formData.registration} />

            <button style={styles.button} onClick={() => navigate("/dashboard")}>
              Go to Dashboard
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ================= SMALL COMPONENT ================= */
function ProfileRow({ label, value }) {
  return (
    <p style={{ margin: "6px 0" }}>
      <b>{label}:</b> {value || "-"}
    </p>
  );
}

/* ================= STYLES ================= */
const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(120deg,#020617,#0f172a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "430px",
    padding: "30px",
    background: "#020617",
    borderRadius: "16px",
    border: "1px solid #1e293b",
    color: "white",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "10px",
  },
  label: {
    fontSize: "14px",
    opacity: 0.8,
  },
  uploadBox: {
    padding: "12px",
    border: "1px dashed #38bdf8",
    borderRadius: "8px",
    textAlign: "center",
    cursor: "pointer",
    color: "#38bdf8",
  },
  preview: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "10px auto",
    objectFit: "cover",
    display: "block",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #334155",
    background: "#020617",
    color: "white",
  },
  button: {
    marginTop: "14px",
    padding: "12px",
    background: "#22d3ee",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
