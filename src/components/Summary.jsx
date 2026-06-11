// src/components/Summary.jsx
import React from "react";
import { useLanguage } from "../LanguageContext";

function resolveAssetPath(path) {
  const baseUrl = import.meta.env.BASE_URL;
  if (!path) return path;
  return path.startsWith("/") ? `${baseUrl}${path.slice(1)}` : `${baseUrl}${path}`;
}

export default function Summary() {
  const { t } = useLanguage();
  const certifications = t("highlightedCertifications");

  return (
    <section className="px-4 py-8 transition-colors duration-300">
      {/* Summary text */}
      <p className="max-w mx-auto mb-12 text-center text-lg text-gray-700 dark:text-gray-300">
        {t("summary")}
      </p>

      {/* Highlighted certifications */}
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1"
            >
              {/* Gradient overlay - visible on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Image container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600">
                <img
                  src={resolveAssetPath(cert.image)}
                  alt={cert.title}
                  className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Badge/Info section */}
              <div className="p-4 text-center">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
                  {cert.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {cert.year}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
