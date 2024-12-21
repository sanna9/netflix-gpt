import { translations } from "../locale";

export const useTranslation = (langKey = "en", showGptSearch = false) => {
  const currentTranslations = showGptSearch
    ? translations[langKey] || translations.en
    : translations.en;

  return (key) => currentTranslations[key] || key;
};
