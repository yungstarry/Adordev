import { useState, useRef } from "react";

const Work = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [mediaType, setMediaType] = useState<"iframe" | "video" | null>(null);
  const [embedSrc, setEmbedSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const renderVideo = (url: string) => {
    setIsLoading(true);
    setIsLoaded(true);

    const ytMatch = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    );
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);

    if (ytMatch) {
      setMediaType("iframe");
      setEmbedSrc(
        `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`,
      );
    } else if (vimeoMatch) {
      setMediaType("iframe");
      setEmbedSrc(
        `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&title=0&byline=0`,
      );
    } else {
      setMediaType("video");
      setEmbedSrc(url);
    }

    setTimeout(() => setIsLoading(false), 1500);
  };

  const handleLoadVideo = () => {
    if (!videoUrl.trim()) return;
    renderVideo(videoUrl.trim());
  };

  const loadExample = (url: string) => {
    setVideoUrl(url);
    renderVideo(url);
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const resetPlayer = () => {
    setIsLoaded(false);
    setVideoUrl("");
    setMediaType(null);
    setEmbedSrc("");
  };

  return (
    <section id="work">
      <div className="container">
        <div className="work-header">
          <p className="label reveal" style={{ marginBottom: "1rem" }}>
            ★ The Star Feature
          </p>
          <h2 className="work-title reveal">
            Paste Any Video Link &amp;
            <br />
            <em>Watch My Editing Style Come Alive</em>
          </h2>
          <p className="work-subtitle reveal">
            YouTube · Vimeo · TikTok · Direct MP4 - my work plays instantly in
            this session. Clients use this to preview how their raw footage
            transforms.
          </p>
        </div>

        <div className="video-console reveal">
          <div className="console-topbar">
            <div
              className="console-dot"
              style={{ background: "#e63939" }}
            ></div>
            <div
              className="console-dot"
              style={{ background: "#c8a96e" }}
            ></div>
            <div
              className="console-dot"
              style={{ background: "#00e8ff" }}
            ></div>
            <span className="console-title">
              adordev - video preview studio
            </span>
          </div>

          <div className="url-bar-row">
            <input
              type="url"
              className="url-input"
              placeholder="Paste YouTube, Vimeo, or direct .mp4 link here..."
              aria-label="Video URL input"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLoadVideo()}
            />
            <button
              className="load-btn"
              onClick={handleLoadVideo}
              aria-label="Load and play video"
            >
              <i className="fa-solid fa-play"></i> Load &amp; Play
            </button>
          </div>

          <div className="chips-row">
            <span
              className="label"
              style={{ alignSelf: "center", marginRight: ".3rem" }}
            >
              Try:
            </span>
            <button
              className="chip"
              onClick={() =>
                loadExample("https://www.youtube.com/watch?v=3JZ4pnN7gm8")
              }
            >
              <span className="chip-icon">▶</span>YouTube Storytelling Edit
            </button>
            <button
              className="chip"
              onClick={() =>
                loadExample("https://www.youtube.com/watch?v=dQw4w9wgxcQ")
              }
            >
              <span className="chip-icon">▶</span>Short-Form Reel
            </button>
            <button
              className="chip"
              onClick={() => loadExample("https://vimeo.com/76979871")}
            >
              <span className="chip-icon">▶</span>Cinematic Brand Story
            </button>
          </div>

          <div
            className={`player-area ${isLoaded ? "loaded" : ""}`}
            id="playerArea"
          >
            {!isLoaded && (
              <div className="player-placeholder" id="playerPlaceholder">
                <div className="player-placeholder-icon">
                  <i className="fa-solid fa-film"></i>
                </div>
                <p>Your cinematic preview awaits</p>
                <span className="label" style={{ fontSize: "10px" }}>
                  paste a link above or choose an example
                </span>
              </div>
            )}

            {isLoaded && isLoading && (
              <div className="player-loading">
                <div className="spinner"></div>
              </div>
            )}

            {isLoaded && mediaType === "iframe" && (
              <iframe
                src={embedSrc}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video Preview"
              ></iframe>
            )}

            {isLoaded && mediaType === "video" && (
              <video src={embedSrc} controls autoplay></video>
            )}

            <div className="player-watermark">✦ Edited by Adordev</div>
          </div>

          {isLoaded && (
            <div className="reset-row" id="resetRow">
              <button className="reset-btn" onClick={resetPlayer}>
                <i className="fa-solid fa-rotate-left"></i> Reset Player
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
