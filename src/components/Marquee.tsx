const Marquee = () => {
  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track" id="marqueeTrack">
        <span className="marquee-item">YouTube Content <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">Short-Form Reels <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">Cinematic Edits <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">Brand Storytelling <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">DaVinci Resolve <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">Data-Driven Editing <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">Podcast Video <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">AI Workflows <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">Retention Optimized <span className="marquee-dot">◆</span></span>
        {/* duplicate for seamless loop */}
        <span className="marquee-item">YouTube Content <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">Short-Form Reels <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">Cinematic Edits <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">Brand Storytelling <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">DaVinci Resolve <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">Data-Driven Editing <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">Podcast Video <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">AI Workflows <span className="marquee-dot">◆</span></span>
        <span className="marquee-item">Retention Optimized <span className="marquee-dot">◆</span></span>
      </div>
    </div>
  );
};

export default Marquee;
