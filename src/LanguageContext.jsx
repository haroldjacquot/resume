// src/LanguageContext.jsx
import React, { createContext, useContext, useState } from "react";
import cvData from "../../cv-data.json";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");

  const t = (path) => {
    return path.split('.').reduce((obj, key) => obj[key], cvData[lang]);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
