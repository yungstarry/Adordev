import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Different from "./components/Different";
import Tools from "./components/Tools";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer for reveal animations
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const revealElements = document.querySelectorAll(
      ".reveal, .timeline-item, .expertise-card, .service-card",
    );
    revealElements.forEach((el) => io.observe(el));

    return () => {
      revealElements.forEach((el) => io.unobserve(el));
    };
  }, []);

  const scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <CustomCursor />

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        scrollTo={scrollTo}
      />

      <Navbar onOpenMenu={() => setIsMenuOpen(true)} scrollTo={scrollTo} />

      <main>
        <Hero scrollTo={scrollTo} />
        <Marquee />
        <About />
        <Expertise />
        <Different />
        <Tools />
        <Work />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
