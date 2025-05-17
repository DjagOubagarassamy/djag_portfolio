import React, { useEffect, useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
      const words = ['Ingénieur Logiciel', 'Développeur Web', 'Full_Stack Developer'];
    const timer = setTimeout(() => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      // Set typing speed based on action
      if (isDeleting) {
        setTypingSpeed(50);
      } else {
        setTypingSpeed(150);
      }

      // Transition between words
      if (!isDeleting && text === fullText) {
        // Pause at end of word
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-black opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Bonjour, je suis <span className="text-purple-500">Djag.</span>
          </h1>
          
          <div className="h-16 sm:h-20 mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Je suis <span ref={typingRef} className="text-purple-400">{text}</span>
              <span className="animate-blink">|</span>
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Développeur français passionné par la technologie et l'innovation. <br />
              Depuis 2021, Auto-entrepreneur et Etudiant en Master Génie-Bio Informatique à l'Université de Poitiers
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <button className="cssbuttons-io"
                     onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <span
              ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                  fill="currentColor"
                ></path>
              </svg>
              Contactez-moi</span>
          </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-white/50 hover:text-white transition-colors duration-300"
          aria-label="Scroll down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;