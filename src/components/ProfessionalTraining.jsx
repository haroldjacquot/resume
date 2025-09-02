import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { motion } from "framer-motion";
import { FaChalkboardTeacher } from "react-icons/fa";

export default function ProfessionalTraining() {
  const { t } = useLanguage();
  const professionalTraining = t("professionalTraining.items");

  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold mb-8">{t("professionalTraining.title")}</h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {professionalTraining.map((train, index) => (
          <motion.a
            key={index}
            href={train.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition bg-white dark:bg-gray-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={train.logo}
              alt={train.issuer}
              className="w-16 h-16 object-contain mr-4"
            />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-gray-100">{train.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {train.issuer} • {train.year}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
