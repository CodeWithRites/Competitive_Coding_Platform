import { useState } from "react";

function VideoList({ videos }) {
  const [videoState, setVideoState] = useState(videos);

  const handleClick = index => {
    if (index > 0 && !videoState[index - 1].completed) return;

    const updated = [...videoState];
    updated[index].completed = true;
    setVideoState(updated);
  };

  return (
    <div>
      {videoState.map((video, index) => {
        const locked = index > 0 && !videoState[index - 1].completed;

        return (
          <div
            key={video.id}
            className={`video-item ${locked ? "locked" : ""}`}
            onClick={() => handleClick(index)}
          >
            <span>▶</span>
            <span>{video.title}</span>
            <span>
              {video.completed ? "✅" : locked ? "🔒" : "🔓"}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default VideoList;
