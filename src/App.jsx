import { useState, useEffect } from 'react'
import './App.css'
import React from "react";
import { LanguageProvider } from "./LanguageContext";
import LanguageToggle from "./components/LanguageToggle";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <LanguageProvider>
      <div className="text-gray-900 transition-colors duration-300 bg-gray-100 mi-h-screen bg- dark:bg-gray-900 dark:text-gray-100">
        <div className="fixed flex gap-2 top-4 right-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 text-gray-900 bg-gray-300 rounded dark:bg-gray-700 dark:text-gray-100 hover:opacity-80"
          >
            {darkMode ? "☀" : "🌙"}
          </button>
          <LanguageToggle />
        </div>

        {/* Contenu */}
        <Header />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </div>
    </LanguageProvider>
  );
}