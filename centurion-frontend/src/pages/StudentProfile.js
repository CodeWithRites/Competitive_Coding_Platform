import { useState, useMemo } from "react";
import "./StudentProfile.css";

export default function StudentProfile() {
  const [isEditMode, setIsEditMode] = useState(true);
  const [profileImage, setProfileImage] = useState(null);

  const [profile, setProfile] = useState({
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
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  const handleSubmit = () => setIsEditMode(false);

  /* PROFILE COMPLETION */
  const completion = useMemo(() => {
    const total = Object.keys(profile).length + 1; // + image
    const filled =
      Object.values(profile).filter((v) => v.trim() !== "").length +
      (profileImage ? 1 : 0);
    return Math.round((filled / total) * 100);
  }, [profile, profileImage]);

  return (
    <div className="profile-page">
      <div className={`profile-card ${isEditMode ? "edit" : "view"}`}>
        {/* COMPLETION */}
        <div className="completion">
          <div className="completion-bar">
            <div
              className="completion-fill"
              style={{ width: `${completion}%` }}
            />
          </div>
          <span>{completion}% Profile Completed</span>
        </div>

        {/* HEADER */}
        <div className="profile-header">
          <label className="profile-pic">
            {profileImage ? <img src={profileImage} alt="" /> : <span>+</span>}
            {isEditMode && (
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            )}
          </label>

          <div className="header-info">
            {isEditMode ? (
              <>
                <input name="name" placeholder="Name" value={profile.name} onChange={handleChange} /> <br/> <br/>
                <input name="university" placeholder="University" value={profile.university} onChange={handleChange} />
              </>
            ) : (
              <>
                <h2>{profile.name}</h2> <br/>
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

        {/* BIO */}
        <div className="bio-section">
          {isEditMode ? (
            <textarea name="bio" placeholder="Bio" value={profile.bio} onChange={handleChange} />
          ) : (
            <p>{profile.bio}</p>
          )}
        </div>

        {/* DETAILS */}
        <div className="details-grid">
          <Field label="Branch" edit={isEditMode}>
            <input name="branch" value={profile.branch} onChange={handleChange} />
          </Field>

          <Field label="Current Year" edit={isEditMode}>
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

          <Field label="Gmail" edit={isEditMode}>
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

        {isEditMode && (
          <button className="submit-btn" onClick={handleSubmit}>
            Save Profile
          </button>
        )}
      </div>
    </div>
  );
}

function Field({ label, edit, children }) {
  return (
    <div className="detail-item">
      <label>{label}</label>
      {edit ? children : <span>{children.props.value}</span>}
    </div>
  );
}
