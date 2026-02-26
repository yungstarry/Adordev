import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="f-logo">
          Ador<em>dev</em>
        </div>
        <div className="f-copy">© 2026 Adordev · All rights reserved</div>
        <div className="f-links">
          <a
            href="https://x.com/adordev_"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01a5d9a440962d6d60"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upwork
          </a>
          <a
            href="https://github.com/yungstarry"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/azeezisrael/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
