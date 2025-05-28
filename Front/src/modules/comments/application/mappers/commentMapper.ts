import { Domain } from "../../domain/entities/commentEntity";

export const mapCommentDTOToComment = (commentDTO: Domain): Domain => {
    let id = 1;
    return {
        commentID: id++,
        noteID: commentDTO.noteID,
        userID : commentDTO.userID,
        description: commentDTO.description,
        CreatedAt: commentDTO.CreatedAt,
        UpdatedAt: commentDTO.UpdatedAt,
    };
};