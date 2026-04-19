// src/components/Skills.jsx
import React from "react";
import { useLanguage } from "../LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const { title, categories } = t("skills");

  const StarIcon = ({ filled }) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 576 512"
      className={
        filled
          ? "text-yellow-500"
          : "text-gray-400 dark:text-gray-600"
      }
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={
          filled
            ? "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            : "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
        }
      />
    </svg>
  );

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <StarIcon key={index} filled={index < rating} />
    ));

  return (
    <section className="px-4 py-8 transition-colors duration-300">
      <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-gray-200">
        {title}
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`p-6 rounded-lg shadow-md transition ${
              category.highlight
                ? "bg-blue-50 border-l-4 border-blue-500 dark:bg-blue-900/30 dark:border-blue-400"
                : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            }`}
          >
            <div className="flex items-center space-x-3 mb-4">
              {category.logo && (
                <img
                  src={category.logo}
                  alt={category.name}
                  className="w-10 h-10 object-contain"
                />
              )}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {category.name}
              </h3>
            </div>

            <ul className="space-y-3">
              {category.items.map((item, index) => (
                <li key={`${category.name}-${index}`} className="flex flex-col">
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-1 text-sm leading-none">
                      {renderStars(item.rating)}
                    </div>
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
