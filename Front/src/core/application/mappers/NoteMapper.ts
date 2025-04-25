import type { NoteDTO } from "../../../infrastructure/dto/NoteDto";
import type { Note } from "../../domain/models/Note";

export const mapNoteDTOToNote = (noteDTO: NoteDTO): Note => {
    return {
        userID: noteDTO.userID,
        id: noteDTO.id,
        title: noteDTO.title,
        body: noteDTO.body
    };
};