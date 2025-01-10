import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
const detectedLanguage = navigator.language.split("-")[0]
i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: detectedLanguage,
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  }, (err) => {
    if (err) {
      console.error('i18n initialization error:', err);
    }
  });

export default i18n;
