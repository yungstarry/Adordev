import { useState, useEffect } from "react";

interface NavbarProps {
  onOpenMenu: () => void;
  scrollTo: (selector: string) => void;
}

const Navbar = ({ onOpenMenu, scrollTo }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={isScrolled ? "scrolled" : ""}
      role="navigation"
      aria-label="Main navigation"
    >
      <a href="#" className="nav-logo">
        Ador<span>dev</span>
      </a>
      <ul className="nav-links">
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#about");
            }}
          >
            Story
          </a>
        </li>
        <li>
          <a
            href="#expertise"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#expertise");
            }}
          >
            Expertise
          </a>
        </li>
        <li>
          <a
            href="#tools"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#tools");
            }}
          >
            Tools
          </a>
        </li>
        <li>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#work");
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-right">
        <a
          href="https://github.com/yungstarry"
          target="_blank"
          rel="noopener"
          className="btn-ghost"
          aria-label="Follow on GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/azeezisrael/"
          target="_blank"
          rel="noopener"
          className="btn-ghost"
          aria-label="Follow on LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <button className="btn-primary" onClick={() => scrollTo("#contact")}>
          Book a Call
        </button>
        <button
          className="hamburger"
          onClick={onOpenMenu}
          aria-label="Open menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
