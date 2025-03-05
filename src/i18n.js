import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";

i18n
  .use(LanguageDetector) // автоматически определяет язык пользователя
  .use(initReactI18next) // интеграция с React
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ru: {
        translation: translationRU,
      },
    },
    fallbackLng: "en", // если язык не найден, используется английский
    interpolation: {
      escapeValue: false, // React уже экранирует значения
    },
  });

export default i18n;
