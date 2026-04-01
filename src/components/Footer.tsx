const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">
              Ador<span>dev</span>
            </div>
            <p className="footer-copy" style={{ marginTop: ".4rem" }}>
              © 2026 Adordev - Crafting Stories That Convert
            </p>
          </div>
          <div className="footer-links">
            <a href="#about">Story</a>
            <a href="#expertise">Expertise</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
            <a
              href="https://github.com/yungstarry"
              target="_blank"
              rel="noopener"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/azeezisrael/"
              target="_blank"
              rel="noopener"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/adordev/"
              target="_blank"
              rel="noopener"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <p className="footer-tagline">
            Built as a living portfolio that proves my editing philosophy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
