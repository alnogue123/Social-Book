import { defineStore } from "pinia";
import { TranslationService } from "../Services/TranslationService";
import type { Language } from "../../../Types/langtype";
import { ref } from "vue";

const translate = new TranslationService();

export const useLanguageStore = defineStore('lang', () => {
    const currentLanguage = ref<Language>('es');
    async function changeLanguage(lang: Language) {
        currentLanguage.value = lang;
        translate.changeLanguage(lang);
    }

    return { changeLanguage, currentLanguage };
}, { persist: true });

