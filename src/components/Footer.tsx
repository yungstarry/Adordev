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
          <a href="#">Fiverr</a>
          <a href="#">Upwork</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
