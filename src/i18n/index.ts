import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

void i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ["layout"],
    defaultNS: "layout",
    supportedLngs: ["en", "uz", "ru", "ko"],
    fallbackLng: "en",
    backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
    detection: {
      order: ["cookie", "localStorage", "navigator"],
      lookupCookie: "app_lang",
      lookupLocalStorage: "app_lang",
      caches: ["cookie", "localStorage"],
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: true },
    load: "languageOnly", // en-US bo‘lsa ham en ni oladi
    // debug: process.env.NODE_ENV === "development",
  });

export default i18n;
