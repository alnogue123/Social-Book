import axios from "axios";
import type { Language } from "../../Types/langtype";
import type { TranslationRepository } from "../../core/application/Repository/TranslationRepository";

export class LibreTranslateRepository implements TranslationRepository {

    async translate(texts: string[], lang: Language) {
        if (texts.length === 0) return texts;

        const joinedText = texts.join(" ~|~|~ ");

        try {
            const res = await axios.post("/translate", {
                q: joinedText,
                source: "auto",
                target: lang,
                format: "text",
            }, {
                headers: { "Content-Type": "application/json" }
            });
                     
            return res.data.translatedText.split(" ~|~|~ ");
        } catch (error) {
            console.error("Error translating:", error);
            return texts;
        }
    }
}
