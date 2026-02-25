import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="nav" className={isStuck ? "stuck" : ""}>
      <div className="container">
        <a href="#" className="nav-logo">
          Ador<em>dev</em>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#stack">Stack</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="#contact" className="nav-btn">
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
