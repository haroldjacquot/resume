// src/components/Skills.jsx
import React from "react";
import { useLanguage } from "../LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const skills = t("skills.list");

  return (
    <section className="px-4 py-8 transition-colors duration-300">
      <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-gray-200">
        {t("skills.title")}
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-4 py-3 transition-transform duration-200 bg-gray-200 rounded-lg shadow dark:bg-gray-800 hover:scale-105"
          >
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
