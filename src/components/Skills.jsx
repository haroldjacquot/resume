// src/components/Skills.jsx
import React from "react";
import { useLanguage } from "../LanguageContext";
import {
  LuCloudCog,
  LuHeadset,
  LuLanguages,
  LuNetwork,
  LuSparkles,
} from "react-icons/lu";

const skillIconStyles = {
  network: {
    Icon: LuNetwork,
    icon: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    leadTag:
      "bg-blue-50 text-blue-800 ring-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:ring-blue-800",
  },
  cloudCog: {
    Icon: LuCloudCog,
    icon: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    leadTag:
      "bg-teal-50 text-teal-800 ring-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:ring-teal-800",
  },
  headset: {
    Icon: LuHeadset,
    icon: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    leadTag:
      "bg-violet-50 text-violet-800 ring-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:ring-violet-800",
  },
  sparkles: {
    Icon: LuSparkles,
    icon: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    leadTag:
      "bg-orange-50 text-orange-800 ring-orange-200 dark:bg-orange-950/60 dark:text-orange-200 dark:ring-orange-800",
  },
  languages: {
    Icon: LuLanguages,
    icon: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    leadTag:
      "bg-emerald-50 text-emerald-800 ring-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:ring-emerald-800",
  },
};

export default function Skills() {
  const { t } = useLanguage();
  const { title, categories } = t("skills");

  return (
    <section className="px-4 py-8 transition-colors duration-300">
      <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-gray-200">
        {title}
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const { Icon, icon: iconClass, leadTag } =
            skillIconStyles[category.icon];

          return (
          <div
            key={category.name}
            className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-5 flex items-center gap-4">
              <div
                aria-hidden="true"
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${iconClass}`}
              >
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {category.name}
              </h3>
            </div>

            {category.tags?.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {category.tags.map((tag, index) => (
                  <li
                    key={`${category.name}-${index}`}
                    className={`rounded-full px-3 py-1 text-sm ${
                      tag.lead
                        ? `font-semibold ring-1 ${leadTag}`
                        : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {tag.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
          );
        })}
      </div>
    </section>
  );
}
