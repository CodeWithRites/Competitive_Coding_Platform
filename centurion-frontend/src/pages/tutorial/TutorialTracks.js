import { useNavigate } from "react-router-dom";
import "./Tutorial.css";

export default function TutorialTracks() {
  const navigate = useNavigate();

  return (
    <div className="tutorial-container">
      <h2>Tutorial Tracks</h2>

      {/* SINGLE BIG CLICKABLE CARD */}
      <div
        className="track-card"
        onClick={() => navigate("/tutorials/dsa")}
      >
        <h3>Data Structures & Algorithms</h3>
        <p>Basics</p>
      </div>
    </div>
  );
}
