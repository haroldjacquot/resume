// src/components/Experience.jsx
import React from "react";
import { useLanguage } from "../LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const items = t("experience.items");

  return (
    <section className="px-4 py-8 transition-colors duration-300">
      <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-gray-200">
        {t("experience.title")}
      </h2>
      <div className="relative pl-6 border-l-4 border-blue-500 dark:border-blue-400">
        {items.map((exp, index) => (
          <div key={index} className="relative mb-10">
            <span className="absolute w-6 h-6 bg-blue-500 border-2 border-white rounded-full -left-3 dark:bg-blue-400 dark:border-gray-900"></span>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {exp.role} - {exp.company}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{exp.date}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
