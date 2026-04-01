const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="section-label reveal">
          <span className="label">Let's Work Together</span>
        </div>
        <h2 className="section-title reveal" style={{ maxWidth: '500px' }}>Choose your cinematic journey.</h2>

        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-number">01 / LONG-FORM</div>
            <h3>YouTube Content</h3>
            <p>Talking-head, storytelling, and documentary-style videos designed for maximum watch time, subscriber loyalty, and genuine connection.</p>
            <span className="service-tag">→ Retention First</span>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '.12s' }}>
            <div className="service-number">02 / SHORT-FORM</div>
            <h3>Viral Short-Form Videos</h3>
            <p>Reels, Shorts, and TikToks engineered to stop the scroll, trigger shares, and grow your audience faster than anything else.</p>
            <span className="service-tag">→ Algorithm Ready</span>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '.24s' }}>
            <div className="service-number">03 / BRAND</div>
            <h3>Cinematic Brand Storytelling</h3>
            <p>Premium mood-driven edits that make your brand feel like a blockbuster. Emotionally resonant. Strategically built. Unforgettable.</p>
            <span className="service-tag">→ Premium Impact</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
