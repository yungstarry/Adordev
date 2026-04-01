const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div
          className="contact-wrapper"
          style={{
            gridTemplateColumns: "1fr",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div className="contact-center">
            <div
              className="section-label reveal"
              style={{ justifyContent: "center" }}
            >
              <span className="label">Get In Touch</span>
            </div>
            <h2
              className="reveal"
              style={{
                fontSize: "clamp(1rem, 6vw, 4rem)",
                marginBottom: "3rem",
              }}
            >
              Ready to Create Something People Won't Scroll Past?
            </h2>

            <div
              className="contact-cards reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
                marginTop: "2rem",
              }}
            >
              <a
                href="mailto:azeezisrael44@gmail.com"
                className="contact-card-link"
              >
                <div className="contact-card">
                  <i className="fa-solid fa-envelope card-icon"></i>
                  <span className="card-label">Email Me</span>
                  <span className="card-value">azeezisrael44@gmail.com</span>
                  <span className="card-hint">Click to start a draft</span>
                </div>
              </a>

              <a href="tel:+2348060264444" className="contact-card-link">
                <div className="contact-card">
                  <i className="fa-solid fa-phone card-icon"></i>
                  <span className="card-label">Call or WhatsApp</span>
                  <span className="card-value">+234 806 026 4444</span>
                  <span className="card-hint">Click to dial or message</span>
                </div>
              </a>
            </div>

            <div
              className="social-links-grid reveal"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "4rem",
              }}
            >
              <a
                href="https://www.linkedin.com/in/azeezisrael/"
                target="_blank"
                rel="noopener"
                className="social-pill"
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://github.com/yungstarry"
                target="_blank"
                rel="noopener"
                className="social-pill"
              >
                <i className="fa-brands fa-github"></i> GitHub
              </a>
              <a
                href="https://www.instagram.com/adordev/"
                target="_blank"
                rel="noopener"
                className="social-pill"
              >
                <i className="fa-brands fa-instagram"></i> Instagram
              </a>
              <a
                href="https://azeezisrael.vercel.app/contact"
                target="_blank"
                rel="noopener"
                className="social-pill"
              >
                <i className="fa-solid fa-globe"></i> Portfolio
              </a>
            </div>

            <div
              className="contact-tags reveal"
              style={{ justifyContent: "center", marginTop: "4rem" }}
            >
              <span className="contact-tag">⚡ Fast Turnaround</span>
              <span className="contact-tag">🌍 Global Delivery</span>
              <span className="contact-tag">✅ 100% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
