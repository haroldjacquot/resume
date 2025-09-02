import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import haroldPhoto from "../assets/harold_jacquot_square3.jpg"

function calculateExperience(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const m = now.getMonth() - start.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < start.getDate())) {
    years--;
  }
  return years;
}

export default function Header() {
  const { t } = useLanguage();
  const header = t("header.qualities");  
  const experienceYears = calculateExperience(t("header.experienceStart"));

  return (
    <header className="flex flex-col items-center text-center py-8">
      <img
        src={haroldPhoto}
        alt="Harold Jacquot"
        className="rounded-full w-32 h-32 border-4 border-blue-500 shadow-lg"
      />
      <h1 className="text-3xl font-bold">{t("header.title")}</h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
        {experienceYears} {t("header.subtitle")}
      </p>
      <ul className="mt-4 flex justify-center space-x-4">
        {header.map((q, i) => (
          <li key={i} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">
            {q}
          </li>
        ))}
      </ul>
    </header>
  );
}
