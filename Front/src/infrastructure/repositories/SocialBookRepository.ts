import axios,{ type AxiosRequestConfig, type AxiosResponse } from "axios";
import type { GalleryRepository } from "../../core/application/Repository/GalleryNotesRepository";
import type { Note } from "../../core/domain/models/Note";
import { mapNoteDTOToNote } from "../../core/application/mappers/NoteMapper";
import { ApiError } from "../../core/application/Errors/ApiError";

export class SocialBookRepository implements GalleryRepository {
    private readonly url: string = import.meta.env.VITE_APi_URL;
    private readonly config: AxiosRequestConfig = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        timeout: 5000
    };

    async getAllNotes(): Promise<Note[]> {
        try {
            const response: AxiosResponse<Note[]> = await axios.get(this.url, this.config);
            return response.data.map((noteDTO) => mapNoteDTOToNote(noteDTO));
        }catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                throw new ApiError(
                    "Error al obtener las notas",
                    error.response?.status ?? 500,
                    error
                );
            }
            throw new ApiError("Error inesperado", 500, error);
        }
    }


}
