// src/components/Summary.jsx
import React from "react";
import { useLanguage } from "../LanguageContext";

export default function Summary() {
  const { t } = useLanguage();
  return (
    <section className="px-4 py-8 text-center transition-colors duration-300">
      <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
        {t("summary")}
      </p>
    </section>
  );
}
