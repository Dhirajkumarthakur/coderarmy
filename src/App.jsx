
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
 import HeroSect from './components/HeroSect';
import About from './components/About';
import Tutorial from './components/Tutorial';
import Contact from './components/Contact';
import Footer from './Components/Footer';
import './App.css'

function App() {
  const aboutRef = useRef(null);
  const tutorialRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTutorial = () => {
    tutorialRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400'>
      <Navbar scrollToAbout={scrollToAbout} scrollToTutorial={scrollToTutorial} scrollToContact={scrollToContact} />
      <HeroSect />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={tutorialRef}>
        <Tutorial />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
          {/* Footer */}
          <Footer /> {/* Step 2: Add the Footer component here */}
    </div>
  );
}

export default App;