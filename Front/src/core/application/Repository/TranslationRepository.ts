import type { Language } from "../../../Types/langtype";

export interface TranslationRepository{
    translate(texts: string[], lang: Language): Promise<string[]>;
}