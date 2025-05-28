import { Domain } from "../../domain/entities/NoteEntity";

export const mapNoteDTOToNote = (noteDTO: Domain): Domain => {
    let id = 1;
    return {
        id: id++,
        userID : noteDTO.userID,
        title: noteDTO.title,
        body: noteDTO.body,
        CreatedAt: noteDTO.CreatedAt,
        UpdatedAt: noteDTO.UpdatedAt,
        isPublic: !!(noteDTO.id % 2),
    };
};