const Expertise = () => {
  return (
    <section id="expertise">
      <div className="container">
        <div className="section-label reveal">
          <span className="label">What I Do</span>
        </div>
        <h2 className="section-title reveal" style={{ maxWidth: "600px" }}>
          Every format, engineered
          <br />
          for maximum impact.
        </h2>

        <div className="expertise-grid">
          <div className="expertise-card reveal">
            <span className="expertise-icon">🎬</span>
            <h3>YouTube Video Editing</h3>
            <p>
              Talking-head, storytelling, and documentary-style content built
              for watch time and subscriber growth.
            </p>
            <span className="expertise-card-arrow">→</span>
          </div>
          <div
            className="expertise-card reveal"
            style={{ transitionDelay: ".08s" }}
          >
            <span className="expertise-icon">⚡</span>
            <h3>Short-Form Content</h3>
            <p>
              Reels, TikTok, and YouTube Shorts cut for the algorithm - fast,
              punchy, and impossible to skip.
            </p>
            <span className="expertise-card-arrow">→</span>
          </div>
          <div
            className="expertise-card reveal"
            style={{ transitionDelay: ".16s" }}
          >
            <span className="expertise-icon">🎞️</span>
            <h3>Cinematic Edits</h3>
            <p>
              Mood-driven, music-synced, emotionally precise storytelling that
              makes viewers feel something real.
            </p>
            <span className="expertise-card-arrow">→</span>
          </div>
          <div
            className="expertise-card reveal"
            style={{ transitionDelay: ".24s" }}
          >
            <span className="expertise-icon">📱</span>
            <h3>Social Media Content</h3>
            <p>
              Scroll-stopping content engineered for attention economics -
              designed to be watched, saved, and shared.
            </p>
            <span className="expertise-card-arrow">→</span>
          </div>
          <div
            className="expertise-card reveal"
            style={{ transitionDelay: ".32s" }}
          >
            <span className="expertise-icon">🎙️</span>
            <h3>Podcast Editing</h3>
            <p>
              Audio + video podcast production that sounds as good as it looks -
              clean, engaging, professional.
            </p>
            <span className="expertise-card-arrow">→</span>
          </div>
          <div
            className="expertise-card reveal"
            style={{ transitionDelay: ".4s" }}
          >
            <span className="expertise-icon">🤖</span>
            <h3>AI-Assisted Workflows</h3>
            <p>
              Leveraging cutting-edge AI tools to accelerate production without
              sacrificing creative quality.
            </p>
            <span className="expertise-card-arrow">→</span>
          </div>
          <div
            className="expertise-card reveal"
            style={{ transitionDelay: ".48s" }}
          >
            <span className="expertise-icon">🖼️</span>
            <h3>Thumbnails & Visual Branding</h3>
            <p>
              Click-worthy thumbnails and cohesive visual identity that makes
              your channel look like a premium brand.
            </p>
            <span className="expertise-card-arrow">→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
