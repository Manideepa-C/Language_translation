import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debugger: true,
    fallbackLng: "en",
    returnObjects: true,
    ns: ["footer", "translation", "about", "comingSoon"], 
    defaultNS: "translation", // Set a default namespace
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to load the translation files
    },
  });
