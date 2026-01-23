import { useParams } from "react-router-dom";
import { tutorialTracks } from "./tutorialData";
import { useEffect, useState } from "react";
import "./Tutorial.css";

export default function TrackDetail() {
  const { trackId } = useParams();
  const track = tutorialTracks.find(t => t.id === trackId);

  const storageKey = `progress-${trackId}`;

  const [activeTab, setActiveTab] = useState("video");
  const [completed, setCompleted] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  // Load progress
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(storageKey)) || [];
    setCompleted(saved);
  }, [storageKey]);

  // Save progress
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(completed));
  }, [completed, storageKey]);

  // AUTO MARK COMPLETE WHEN VIDEO ENDS
  useEffect(() => {
    if (!currentVideo) return;

    let player;

    const createPlayer = () => {
      player = new window.YT.Player("yt-player", {
        videoId: currentVideo.videoId,
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              setCompleted(prev =>
                prev.includes(currentVideo.id)
                  ? prev
                  : [...prev, currentVideo.id]
              );
            }
          }
        }
      });
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      if (player) player.destroy();
    };
  }, [currentVideo]);

  if (!track) return <h2>Track not found</h2>;

  const progress = Math.round(
    (completed.length / track.videos.length) * 100
  );

  return (
    <div className="tutorial-container">

      {/* ===== HEADER ===== */}
      <h2>{track.title}</h2>

      {/* ===== PROGRESS ===== */}
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }} />
      </div>
      <p>{progress}% Complete</p>

      {/* ===== TABS ===== */}
      <div className="tabs">
        {["video", "article","quiz"].map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* ===== VIDEO TAB ===== */}
      {activeTab === "video" && (
        <>
          {/* VIDEO PLAYER */}
          {currentVideo && (
            <div className="video-player">
              <div id="yt-player"></div>
            </div>
          )}

          {/* VIDEO LIST */}
          {track.videos.map((video, index) => {
            const isCompleted = completed.includes(video.id);
            const isUnlocked =
              index === 0 ||
              completed.includes(track.videos[index - 1].id);

            return (
              <div
                key={video.id}
                className={`video-item ${isCompleted ? "done" : ""} ${
                  !isUnlocked ? "locked" : ""
                }`}
                onClick={() => isUnlocked && setCurrentVideo(video)}
              >
                ▶ {video.title}
                <span>
                  {isCompleted ? "✅" : isUnlocked ? "" : "🔒"}
                </span>
              </div>
            );
          })}
        </>
      )}

      {/* ===== OTHER TABS (EMPTY FOR NOW) ===== */}
      {activeTab !== "video" && (
        <div className="empty-tab">Coming Soon</div>
      )}
    </div>
  );
}
