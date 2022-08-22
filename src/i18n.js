import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './i18n/en.json';
import tw from './i18n/zh-tw.json';

const resources = {
    en: {
        translation: en,
    },
    'zh-TW': {
        translation: tw,
    },
};

const browserLng = window.navigator.language;

i18n.use(initReactI18next).init({
    resources,
    lng: browserLng,             //預設語言
    fallbackLng: 'en',     //如果當前切換的語言沒有對應的翻譯則使用這個語言，
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;