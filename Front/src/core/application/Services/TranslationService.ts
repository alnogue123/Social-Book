import type { Language } from "../../../Types/langtype";
import type { TranslationRepository } from "../Repository/TranslationRepository";
import { LibreTranslateRepository } from "../../../infrastructure/repositories/LibreTranslateRepository";

export class TranslationService {
    private readonly translationRepository: TranslationRepository;

    constructor() {
        this.translationRepository = new LibreTranslateRepository();
    }

    async changeLanguage(lang: Language) {
        const elements: NodeListOf<HTMLElement> = document.querySelectorAll('.toTranslate');
        if (elements.length === 0) return;
        const texts: string[] = this.getTextFromElements(elements);
        const res: string[] = await this.translationRepository.translate(texts,lang);
        this.updateElementsWithTranslation(elements, res);
    }

    private getTextFromElements(elements: NodeListOf<HTMLElement>): string[]{
        return Array.from(elements).map((element) => element.textContent?.trim() ?? "").filter(text => text);
    }

    private updateElementsWithTranslation(elements: NodeListOf<HTMLElement>, translations: string[]) {
        elements.forEach((element, index) => {
            element.textContent = translations[index] ?? element.textContent;
        });
    }
}
