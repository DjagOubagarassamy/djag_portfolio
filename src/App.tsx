import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import TracingRoadmap from './components/TracingRoadmap';
import 'aos/dist/aos.css'; // Import AOS CSS

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Djag | Developpeur";
    
    // Add a custom class to the body for global styling
    document.body.classList.add('bg-black', 'font-sans');
    
    return () => {
      // Cleanup
      document.body.classList.remove('bg-black', 'font-sans');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      {/* Header */}
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      < TracingRoadmap
        x="100%"
        thickness={7}
        color="#9333ea"
      />
    </div>
  );
}

export default App;