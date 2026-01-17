import { useState, useMemo, useEffect } from "react";
import "./StudentProfile.css";

const initialProfile = {
  name: "",
  university: "",
  bio: "",
  branch: "",
  year: "",
  section: "",
  email: "",
  regNo: "",
  gender: "",
  phone: "",
};

export default function StudentProfile({ onClose }) {
  const [isEditMode, setIsEditMode] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [profile, setProfile] = useState(initialProfile);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= LOAD PROFILE (FIXED) ================= */
  useEffect(() => {
    // 1️⃣ Load from localStorage FIRST
    const savedProfile = localStorage.getItem("studentProfile");
    const savedImage = localStorage.getItem("studentProfileImage");

    if (savedProfile) {
      setProfile({ ...initialProfile, ...JSON.parse(savedProfile) });
      setIsEditMode(false);
    }

    if (savedImage) setProfileImage(savedImage);

    // 2️⃣ Load from backend using SAME email
    const email =
      JSON.parse(savedProfile || "{}")?.email ||
      localStorage.getItem("userEmail");

    if (!email) return;

    fetch(`http://localhost:8080/api/profile/${email}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        const merged = { ...initialProfile, ...data };

        setProfile(merged);
        setIsEditMode(false);

        localStorage.setItem("studentProfile", JSON.stringify(merged));
        localStorage.setItem("userEmail", merged.email);
      })
      .catch(() => {});
  }, []);

  /* ================= INPUT HANDLER ================= */
  const handleChange = (e) => {
    const updated = { ...profile, [e.target.name]: e.target.value };
    setProfile(updated);
    setError("");

    if (e.target.name === "email") {
      localStorage.setItem("userEmail", e.target.value);
    }
  };

  /* ================= IMAGE HANDLER ================= */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
      localStorage.setItem("studentProfileImage", reader.result);
    };
    reader.readAsDataURL(file);
  };

  /* ================= VALIDATION ================= */
  const isFormValid = () => {
    const allFilled = Object.values(profile).every(
      (v) => v && v.toString().trim() !== ""
    );
    return allFilled && profileImage;
  };

  /* ================= SAVE PROFILE ================= */
  const handleSubmit = async () => {
    if (!isFormValid()) {
      setError("⚠️ Please fill all fields and upload a profile picture.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:8080/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });

      if (!res.ok) throw new Error();

      const savedData = await res.json();
      const merged = { ...initialProfile, ...savedData };

      setProfile(merged);
      setIsEditMode(false);

      localStorage.setItem("studentProfile", JSON.stringify(merged));
      localStorage.setItem("userEmail", merged.email);
      localStorage.setItem("studentProfileCompleted", "true");

      setLoading(false);
      if (onClose) onClose();
    } catch {
      setError("❌ Failed to save profile. Backend not responding.");
      setLoading(false);
    }
  };

  /* ================= COMPLETION ================= */
  const completion = useMemo(() => {
    const total = Object.keys(profile).length + 1;
    const filled =
      Object.values(profile).filter((v) => v && v.toString().trim()).length +
      (profileImage ? 1 : 0);

    return Math.round((filled / total) * 100);
  }, [profile, profileImage]);

  return (
    <div className={onClose ? "profile-modal-overlay" : ""}>
      <div className="profile-page">
        <div className={`profile-card ${isEditMode ? "edit" : "view"}`}>
          {onClose && (
            <button className="profile-close-btn" onClick={onClose}>
              ✕
            </button>
          )}

          <div className="completion">
            <div className="completion-bar">
              <div
                className="completion-fill"
                style={{ width: `${completion}%` }}
              />
            </div>
            <span>{completion}% Profile Completed</span>
          </div>

          <div className="profile-header">
            <label className="profile-pic">
              {profileImage ? <img src={profileImage} alt="profile" /> : <span>+</span>}
              {isEditMode && (
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
              )}
            </label>

            <div className="header-info">
              {isEditMode ? (
                <>
                  <input name="name" value={profile.name} onChange={handleChange} />
                  <input
                    name="university"
                    value={profile.university}
                    onChange={handleChange}
                  />
                </>
              ) : (
                <>
                  <h2>{profile.name}</h2>
                  <h4>{profile.university}</h4>
                </>
              )}
            </div>

            {!isEditMode && (
              <button className="edit-btn" onClick={() => setIsEditMode(true)}>
                Edit Profile
              </button>
            )}
          </div>

          <div className="bio-section">
            {isEditMode ? (
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
              />
            ) : (
              <p>{profile.bio}</p>
            )}
          </div>

          <div className="details-grid">
            <Field label="Branch" edit={isEditMode}>
              <input name="branch" value={profile.branch} onChange={handleChange} />
            </Field>

            <Field label="Year" edit={isEditMode}>
              <select name="year" value={profile.year} onChange={handleChange}>
                <option value="">Select</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>
            </Field>

            <Field label="Section" edit={isEditMode}>
              <input name="section" value={profile.section} onChange={handleChange} />
            </Field>

            <Field label="Email" edit={isEditMode}>
              <input name="email" value={profile.email} onChange={handleChange} />
            </Field>

            <Field label="Registration No" edit={isEditMode}>
              <input name="regNo" value={profile.regNo} onChange={handleChange} />
            </Field>

            <Field label="Gender" edit={isEditMode}>
              <div className="radio-group">
                {["Male", "Female"].map((g) => (
                  <label key={g}>
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={profile.gender === g}
                      onChange={handleChange}
                    />
                    {g}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Mobile" edit={isEditMode}>
              <input name="phone" value={profile.phone} onChange={handleChange} />
            </Field>
          </div>

          {error && <p style={{ color: "#ff9f9f" }}>{error}</p>}

          {isEditMode && (
            <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
              {loading ? "Saving..." : "Save Profile"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, edit, children }) {
  return (
    <div className="detail-item">
      <label>{label}</label>
      {edit ? children : <span>{children.props?.value}</span>}
    </div>
  );
}
