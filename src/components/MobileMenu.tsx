interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollTo: (selector: string) => void;
}

const MobileMenu = ({ isOpen, onClose, scrollTo }: MobileMenuProps) => {
  const handleLinkClick = (selector: string) => {
    onClose();
    scrollTo(selector);
  };

  return (
    <div
      className={`mobile-menu ${isOpen ? "open" : ""}`}
      id="mobileMenu"
      role="dialog"
      aria-label="Mobile navigation"
      onClick={onClose}
    >
      <button
        className="mobile-close"
        onClick={onClose}
        aria-label="Close menu"
      >
        ✕
      </button>
      <div className="mobile-menu-links" onClick={(e) => e.stopPropagation()}>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#about");
          }}
        >
          Story
        </a>
        <a
          href="#expertise"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#expertise");
          }}
        >
          Expertise
        </a>
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#work");
          }}
        >
          Work
        </a>
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#services");
          }}
        >
          Services
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#contact");
          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
