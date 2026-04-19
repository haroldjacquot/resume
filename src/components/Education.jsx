// src/components/Education.jsx
import React from "react";
import { useLanguage } from "../LanguageContext";

export default function Education() {
  const { t } = useLanguage();
  const items = t("education.items");

  return (
    <section className="px-4 py-8 transition-colors duration-300">
      <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-gray-200">
        {t("education.title")}
      </h2>
      <div className="relative pl-6 border-l-4 border-green-500 dark:border-green-400">
        {items.map((edu, index) => (
          <div key={index} className="relative mb-10">
            <span className="absolute -left-6 -translate-x-2.5 translate-y-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full dark:bg-green-400 dark:border-gray-900"></span>
            <h3 className="text-xl text-gray-900 dark:text-gray-100">
              <strong>{edu.school}</strong> {edu.diploma}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{edu.date} • {edu.location}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
