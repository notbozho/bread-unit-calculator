import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
const translationsEN = require('./assets/locales/en.json');
const translationsBG = require('./assets/locales/bg.json');

const i18nextOptions = {
    resources: {
        en: {
            translation: translationsEN,
        },
        bg: {
            translation: translationsBG,
        }
    },
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
};

i18next.use(initReactI18next).use(LanguageDetector).init(i18nextOptions);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
