// src/components/Experience.jsx
import React from "react";
import { useLanguage } from "../LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const experiences = t("experience.items");

  return (
    <section className="px-4 py-8 transition-colors duration-300">
      <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-gray-200">
        {t("experience.title")}
      </h2>
      <div className="relative pl-6 border-l-4 border-blue-500 dark:border-blue-400">
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-10">
            {/* Point sur la timeline */}
            <span className="absolute -left-6 -translate-x-2.5 translate-y-2 w-4 h-4 bg-blue-500 border-2 border-white rounded-full dark:bg-blue-400 dark:border-gray-900"></span>

            {/* Titre */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {exp.role} - {exp.company}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period} • {exp.location}</p>

            {/* Description principale */}
            <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>

            {/* Liste des détails */}
            {exp.items && exp.items.length > 0 && (
              <ul className="mt-4 space-y-2">
                {exp.items.map((detail, i) => (
                  detail.title ? (
                    <li key={i} className="flex">
                      <span className="mr-2 text-blue-500 dark:text-blue-400">
                        •
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>{detail.title}</strong> {detail.description}
                      </span>
                    </li>
                  ) : (
                    <li key={i} className="ml-6 flex">
                      <span className="mr-2 text-gray-400 dark:text-gray-500">
                        ◦
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {detail.description}
                      </span>
                    </li>
                  )
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
