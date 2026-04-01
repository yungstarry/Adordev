import { useEffect, useState } from "react";
import myImage from "../assets/myImage.jpeg";

interface HeroProps {
  scrollTo: (selector: string) => void;
}

const Hero = ({ scrollTo }: HeroProps) => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      // Format: Apr 02, 2026 · 12:00:00 PM
      const formatted = now.toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).replace(',', '');
      setDateTime(formatted);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">
          <div className="eyebrow-dot"></div>
          <span className="label">
            Abuja, Nigeria · Available Worldwide 
            <span style={{ 
              opacity: 0.4, 
              marginLeft: "1rem", 
              fontSize: "9px", 
              letterSpacing: "0.05em",
              fontFamily: "var(--mono)"
              
            }}>
              {dateTime}
            </span>
          </span>
        </div>

        <h1 className="hero-name">
          Ador<span className="accent">dev</span>
        </h1>

        <p className="hero-sub">
          I don't just edit videos - I craft stories people&nbsp;remember.
        </p>

        <div className="hero-bio body-text reveal">
          <p>
            I help creators, brands, and businesses turn raw footage into
            cinematic, emotionally engaging content that keeps viewers watching
            and drives real results. With a unique background in{" "}
            <strong style={{ color: "var(--white)" }}>
              data analysis and web development
            </strong>
            , I approach video editing differently - not just for aesthetics, but
            for performance, retention, and impact.
          </p>
          <ul className="think-list">
            <li>What should the viewer feel?</li>
            <li>Where should they stay hooked?</li>
            <li>What makes this video convert?</li>
          </ul>
          <p style={{ marginTop: ".8rem" }}>
            Then I execute - clean, sharp, and intentional.
          </p>
        </div>

        <div className="hero-ctas reveal">
          <button
            className="btn-cta-primary"
            onClick={() => scrollTo("#work")}
            aria-label="See my work live"
          >
            <i className="fa-solid fa-play"></i> See My Work Live
          </button>
          <button
            className="btn-cta-outline"
            onClick={() => scrollTo("#contact")}
            aria-label="Get in touch"
          >
            Let's Build Something Powerful
          </button>
        </div>
      </div>

      <div className="hero-right" aria-hidden="true">
        <img
          src={myImage}
          alt="Adordev - Cinematic Video Editor"
          className="hero-image"
          loading="eager"
        />
        <div className="hero-image-overlay"></div>
        <div className="hero-frame-badge reveal">
          <span className="label">Editor & Story Architect</span>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number" style={{ color: "var(--cyan)" }}>
                3+
              </span>
              <span className="stat-label">Years Editing</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" style={{ color: "var(--red)" }}>
                ∞
              </span>
              <span className="stat-label">Story First</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-line"></div>
        <span className="label" style={{ fontSize: "10px" }}>
          scroll
        </span>
      </div>
    </section>
  );
};

export default Hero;
