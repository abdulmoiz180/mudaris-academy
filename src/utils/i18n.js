import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import LocalStorageBackend from 'i18next-localstorage-backend';

i18n
  .use(LocalStorageBackend) // Cache translations
  .use(HttpApi) // Load translations via HTTP
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Bind i18n to React
  .init({
    fallbackLng: 'en',
    lng: 'fa', // Default to farsi
    debug: import.meta.env.DEV, // Debug only in dev mode
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      expirationTime: 7 * 24 * 60 * 60 * 1000, // Cache for 7 days
    },
  });

export default i18n;
