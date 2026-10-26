import { useState, useEffect } from "react";

import "./App.css";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { AnimatedBg } from "./components/AnimatedBg";
import { Main } from "./components/Main/Main";
import { useData } from "./contexts/DataContext";

function App() {
  // const [activeTimeline, setActiveTimeline] = useState(0);

  // Typing Effect Loop

  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const { setMousePosition, setTypedText, typedText } = useData();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [setMousePosition]);

  useEffect(() => {
    const phrases = [
      "Full-Stack Developer",
      "Creative Technologist",
      "Open Source Contributor",
    ];
    const currentPhrase = phrases[phraseIdx];
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setTypedText(currentPhrase.substring(0, typedText.length + 1));
          if (typedText === currentPhrase) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setTypedText(currentPhrase.substring(0, typedText.length - 1));
          if (typedText === "") {
            setIsDeleting(false);
            setPhraseIdx((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 40 : 90,
    );

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIdx, setTypedText]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* Background Animated Gradient Orbs */}
      <AnimatedBg />

      {/* Navigation Bar */}
      <NavBar />

      {/* Main */}
      <Main />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
