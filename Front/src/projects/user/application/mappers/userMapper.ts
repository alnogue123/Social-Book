import { Domain } from "../../domain/entities/UserEntity";

export const mapNoteDTOToNote = (noteDTO: Domain): Domain => {
    let id = 1;
    return {
        userID : id++,
        username: noteDTO.username,
        password: noteDTO.password,
        isActive: noteDTO.isActive,
        CreatedAt: noteDTO.CreatedAt,
        UpdatedAt: noteDTO.UpdatedAt,
    };
};