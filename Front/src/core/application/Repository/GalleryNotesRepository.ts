import type { Note } from "../../domain/models/Note"

export interface GalleryRepository{
    getAllNotes() : Promise<Note[]>
}