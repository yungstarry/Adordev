const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="section-label">
              <span className="label">My Story</span>
            </div>
            <h2 className="section-title reveal">
              The Editor Who Thinks in Data and Feels in Cinema
            </h2>

            <blockquote className="about-quote reveal">
              "Before I touch your footage, I already know what the viewer
              should feel, where they'll stay hooked, and what will make this
              video convert."
            </blockquote>

            <div
              className="body-text reveal"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <p>
                Most editors ask: "Does this look good?" I ask: "Will people
                keep watching?" That distinction is everything.
              </p>
              <p>
                My background spans data analysis and web development -
                disciplines that trained me to think in systems, patterns, and
                performance. When I apply that to video editing, the result
                isn't just aesthetic. It's{" "}
                <em style={{ color: "var(--white)" }}>strategic</em>.
              </p>
              <p>
                I help creators, brands, and businesses turn raw footage into
                stories that audiences can't click away from - because every
                cut, every beat, every frame has a reason to exist.
              </p>
            </div>
          </div>

          <div>
            <div className="section-label">
              <span className="label">My Journey</span>
            </div>
            <div className="timeline">
              <div className="timeline-item reveal">
                <div className="timeline-dot">
                  <div className="timeline-dot-inner"></div>
                </div>
                <div className="timeline-content">
                  <h4>Data Analysis & Web Development</h4>
                  <p>
                    Built a foundation in pattern recognition, systems thinking,
                    and performance metrics - skills that now power every edit
                    decision.
                  </p>
                </div>
              </div>
              <div
                className="timeline-item reveal"
                style={{ transitionDelay: ".1s" }}
              >
                <div className="timeline-dot">
                  <div className="timeline-dot-inner"></div>
                </div>
                <div className="timeline-content">
                  <h4>Discovered Video as a Performance Medium</h4>
                  <p>
                    Realized that video editing done right is less art, more
                    engineering - every second either earns or loses the
                    viewer's attention.
                  </p>
                </div>
              </div>
              <div
                className="timeline-item reveal"
                style={{ transitionDelay: ".2s" }}
              >
                <div className="timeline-dot">
                  <div className="timeline-dot-inner"></div>
                </div>
                <div className="timeline-content">
                  <h4>Became a Story Architect</h4>
                  <p>
                    Developed a methodology that fuses cinematic craft with
                    retention science - cutting for feeling and for performance
                    simultaneously.
                  </p>
                </div>
              </div>
              <div
                className="timeline-item reveal"
                style={{ transitionDelay: ".3s" }}
              >
                <div className="timeline-dot">
                  <div className="timeline-dot-inner"></div>
                </div>
                <div className="timeline-content">
                  <h4>Global Clients. Abuja Base.</h4>
                  <p>
                    Delivering cinematic edits for creators and brands
                    worldwide, from a creative hub in Abuja, Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
