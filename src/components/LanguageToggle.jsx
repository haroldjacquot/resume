// src/components/LanguageToggle.jsx
import React from "react";
import { useLanguage } from "../LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "fr" ? "en" : "fr")}
      className="fixed px-3 py-1 text-white transition bg-blue-500 rounded top-4 left-4 hover:bg-blue-600"
    >
      {lang === "fr" ? "EN" : "FR"}
    </button>
  );
}
