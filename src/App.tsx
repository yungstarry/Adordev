import React, { useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.r').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Cursor />
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Projects />
      <Services />
      <Process />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
