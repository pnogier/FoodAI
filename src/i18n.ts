import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n, {LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './assets/locales/en/translations.json';
import fr from './assets/locales/fr/translations.json';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

const defaultLanguage = 'en';
export const LOCALE_KEY = '@pnogier/LOCALE_KEY';

const getDefaultDeviceLanguage = (callback: (lng: string) => void) => {
  const bestLanguage = RNLocalize.findBestAvailableLanguage(
    Object.keys(resources),
  );

  callback(bestLanguage ? bestLanguage.languageTag : defaultLanguage);
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  init() {},
  async detect(callback: (lng: string) => void) {
    try {
      const result = await AsyncStorage.getItem(LOCALE_KEY);
      if (result) {
        callback(result);
      }
      getDefaultDeviceLanguage(current => {
        if (current !== result) {
          callback(current);
        }
      });
    } catch {
      getDefaultDeviceLanguage(callback);
    }
  },
  async cacheUserLanguage(lng: string) {
    try {
      await AsyncStorage.setItem(LOCALE_KEY, lng);
    } catch {}
  },
};

i18n
  .use(languageDetector as LanguageDetectorAsyncModule)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: defaultLanguage,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources,
    react: {
      useSuspense: true,
    },
  });

export default i18n;
