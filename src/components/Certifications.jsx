import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { motion } from "framer-motion";

export default function Certifications() {
  const { t } = useLanguage();
  const certifications = t("certifications.items");

  return (
    <section className="py-12 px-6">
      <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-gray-200">
        {t("certifications.title")}
      </h2>
      <div className="flex flex-wrap gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center space-x-3 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full shadow-sm hover:shadow-md transition cursor-default"
          >
            <img
              src={cert.logo}
              alt={cert.issuer}
              className="w-6 h-6 object-contain"
            />
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {cert.title}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({cert.year})
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
