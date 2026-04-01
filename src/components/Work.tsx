import { useState, useMemo, useEffect, useRef } from "react";
import { videos } from "../data/videos";
import type { Video } from "../data/videos";

const Work = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video>(videos[0]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [mediaType, setMediaType] = useState<"iframe" | "video" | null>(
    "iframe",
  );
  const [embedSrc, setEmbedSrc] = useState(
    `https://player.vimeo.com/video/76979871?autoplay=1&title=0&byline=0`,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isVertical, setIsVertical] = useState(false);

  // Dropdown States
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Filters
  const [styleFilter, setStyleFilter] = useState<string>("All");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [tagFilter, setTagFilter] = useState<string>("All");

  const styles = useMemo(
    () => ["All", ...Array.from(new Set(videos.map((v) => v.style)))],
    [],
  );
  const types = useMemo(
    () => ["All", ...Array.from(new Set(videos.map((v) => v.type)))],
    [],
  );
  const tags = ["All", "Editor's Favorite", "Most Viewed", "Favorite"];

  const filteredVideos = useMemo(() => {
    return videos.filter((v) => {
      const matchStyle = styleFilter === "All" || v.style === styleFilter;
      const matchType = typeFilter === "All" || v.type === typeFilter;
      const matchTag = tagFilter === "All" || v.tags.includes(tagFilter);
      return matchStyle && matchType && matchTag;
    });
  }, [styleFilter, typeFilter, tagFilter]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderVideo = (url: string) => {
    setIsLoading(true);
    setIsLoaded(true);

    const ytMatch = url.match(
      /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    );
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    const igMatch = url.match(
      /instagram\.com\/(?:p|reel|reels)\/([a-zA-Z0-9_-]+)/,
    );
    const ttMatch = url.match(/tiktok\.com\/(?:@[\w.-]+\/video\/|v\/)(\d+)/);

    // Detect if vertical
    const isShorts = url.includes("youtube.com/shorts/");
    const isIG = !!igMatch;
    const isTT = !!ttMatch;
    setIsVertical(isShorts || isIG || isTT);

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
    } else if (igMatch) {
      setMediaType("iframe");
      setEmbedSrc(`https://www.instagram.com/reel/${igMatch[1]}/embed/`);
    } else if (ttMatch) {
      setMediaType("iframe");
      setEmbedSrc(`https://www.tiktok.com/embed/v2/${ttMatch[1]}`);
    } else {
      setMediaType("video");
      setEmbedSrc(url);
    }

    setTimeout(() => setIsLoading(false), 1500);
  };

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    renderVideo(video.url);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <section id="work">
      <div className="container">
        <div className="work-header">
          <p className="label reveal" style={{ marginBottom: "1rem" }}>
            ★ The Star Feature
          </p>
          <h2 className="work-title reveal">
            Watch My Editing Style Come Alive
          </h2>
          <p className="work-subtitle reveal">
            Select a project below to experience how I transform raw footage
            into cinematic stories.
          </p>
        </div>

        <div className="video-console reveal" ref={containerRef}>
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

          <div className="selection-pane">
            <div className="filter-dropdown-grid">
              {/* Style Filter */}
              <div className="custom-dropdown">
                <span className="filter-label">Style</span>
                <button
                  className="dropdown-trigger"
                  onClick={() => toggleDropdown("style")}
                >
                  <span>{styleFilter}</span>
                  <i
                    className={`fa-solid fa-chevron-${activeDropdown === "style" ? "up" : "down"}`}
                  ></i>
                </button>
                <div
                  className={`dropdown-menu ${activeDropdown === "style" ? "show" : ""}`}
                >
                  {styles.map((s) => (
                    <div
                      key={s}
                      className={`dropdown-item ${styleFilter === s ? "active" : ""}`}
                      onClick={() => {
                        setStyleFilter(s);
                        setActiveDropdown(null);
                      }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div className="custom-dropdown">
                <span className="filter-label">Type</span>
                <button
                  className="dropdown-trigger"
                  onClick={() => toggleDropdown("type")}
                >
                  <span>{typeFilter}</span>
                  <i
                    className={`fa-solid fa-chevron-${activeDropdown === "type" ? "up" : "down"}`}
                  ></i>
                </button>
                <div
                  className={`dropdown-menu ${activeDropdown === "type" ? "show" : ""}`}
                >
                  {types.map((t) => (
                    <div
                      key={t}
                      className={`dropdown-item ${typeFilter === t ? "active" : ""}`}
                      onClick={() => {
                        setTypeFilter(t);
                        setActiveDropdown(null);
                      }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Curated Lists Filter */}
              <div className="custom-dropdown">
                <span className="filter-label">Curated</span>
                <button
                  className="dropdown-trigger"
                  onClick={() => toggleDropdown("tag")}
                >
                  <span>
                    {tagFilter === "All" ? "All Projects" : tagFilter}
                  </span>
                  <i
                    className={`fa-solid fa-chevron-${activeDropdown === "tag" ? "up" : "down"}`}
                  ></i>
                </button>
                <div
                  className={`dropdown-menu ${activeDropdown === "tag" ? "show" : ""}`}
                >
                  {tags.map((tag) => (
                    <div
                      key={tag}
                      className={`dropdown-item ${tagFilter === tag ? "active" : ""}`}
                      onClick={() => {
                        setTagFilter(tag);
                        setActiveDropdown(null);
                      }}
                    >
                      {tag === "All" ? "All Projects" : tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Selector */}
            <div className="custom-dropdown" style={{ marginTop: "1rem" }}>
              <span className="filter-label">Select Video to Watch</span>
              <button
                className="dropdown-trigger"
                onClick={() => toggleDropdown("video")}
              >
                <span>{selectedVideo.title}</span>
                <i
                  className={`fa-solid fa-chevron-${activeDropdown === "video" ? "up" : "down"}`}
                ></i>
              </button>
              <div
                className={`dropdown-menu ${activeDropdown === "video" ? "show" : ""}`}
              >
                {filteredVideos.length > 0 ? (
                  filteredVideos.map((video) => (
                    <div
                      key={video.title}
                      className={`dropdown-item ${selectedVideo.title === video.title ? "active" : ""}`}
                      style={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                      onClick={() => handleVideoSelect(video)}
                    >
                      <span className="video-option-title">{video.title}</span>
                      <span className="video-option-meta">
                        {video.style} • {video.type}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="dropdown-item" style={{ opacity: 0.5 }}>
                    No projects match filters
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className={`player-area ${isLoaded ? "loaded" : ""} ${isVertical ? "is-vertical" : ""}`}
            id="playerArea"
          >
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
              <video src={embedSrc} controls autoPlay></video>
            )}

            <div className="player-watermark">✦ Edited by Adordev</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
