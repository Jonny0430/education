import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  uz: { layout: { sidebar: {
    sections: { general: "Asosiy", pages: "Ma’lumotlar" },
    items: {
      home: "Bosh Sahifa",
      soulte: "Soulte Kitoblar",
      grammar: "Korean Grammar",
      dict: "Lo'g'at",
      tests: "Testlar",
      dictant: "Diktant Testlar",
      news: "Xabarlar",
      pricing: "Narxlar",
      faq: "Ko‘p so‘raladigan savollar"
    }
  }}},
  ko: { layout: { sidebar: {
    sections: { general: "기본", pages: "정보" },
    items: {
      home: "홈",
      soulte: "서울테 교재",
      grammar: "한국어 문법",
      dict: "어휘",
      tests: "시험",
      dictant: "받아쓰기",
      news: "뉴스",
      pricing: "가격",
      faq: "자주 묻는 질문"
    }
  }}},
  ru: { layout: { sidebar: {
    sections: { general: "Основное", pages: "Инфо" },
    items: {
      home: "Главная",
      soulte: "Книги Soulte",
      grammar: "Грамматика корейского",
      dict: "Словарь",
      tests: "Тесты",
      dictant: "Диктанты",
      news: "Новости",
      pricing: "Цены",
      faq: "ЧаВо"
    }
  }}},
  en: { layout: { sidebar: {
    sections: { general: "General", pages: "Pages" },
    items: {
      home: "Home",
      soulte: "Soulte Books",
      grammar: "Korean Grammar",
      dict: "Dictionary",
      tests: "Tests",
      dictant: "Dictation",
      news: "News",
      pricing: "Pricing",
      faq: "FAQ"
    }
  }}},
};

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    ns: ["layout"],
    defaultNS: "layout",
    fallbackLng: "uz",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
