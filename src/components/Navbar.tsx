import { useState, useEffect } from "react";

interface NavbarProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  scrollTo: (selector: string) => void;
}

const Navbar = ({
  isMenuOpen,
  onToggleMenu,
  onCloseMenu,
  scrollTo,
}: NavbarProps) => {
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
      <a
        href="#"
        className="nav-logo"
        onClick={(e) => {
          e.preventDefault();
          onCloseMenu();
          scrollTo("#hero");
        }}
      >
        Ador<span>dev</span>
      </a>
      <ul className="nav-links">
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onCloseMenu();
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
              onCloseMenu();
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
              onCloseMenu();
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
              onCloseMenu();
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
              onCloseMenu();
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
        <button
          className="btn-primary"
          onClick={() => {
            onCloseMenu();
            scrollTo("#contact");
          }}
        >
          Book a Call
        </button>
        <button
          className="hamburger"
          onClick={onToggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
