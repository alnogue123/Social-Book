import { SocialBookRepository } from "../../../infrastructure/repositories/SocialBookRepository";
import type { NoteDTO } from "../../../infrastructure/dto/NoteDto";

interface ISocialBookService {
    getNotes(): Promise<NoteDTO[]>;
    getNotesByUser(userID: number): Promise<NoteDTO[]>;
}

class SocialBookService implements ISocialBookService{
    constructor(private readonly socialBookRepository: SocialBookRepository){}
    async getNotes() : Promise<NoteDTO[]> {
        const notes : NoteDTO[] = await this.socialBookRepository.getAllNotes();
        return notes;
    }
    async getNotesByUser(userID: number) : Promise<NoteDTO[]> {
        const notes : NoteDTO[] = await this.socialBookRepository.getAllNotes();
        return notes.filter((note) => note.userID === userID);
    }
}

const repository = new SocialBookRepository();
export const socialBookService = new SocialBookService(repository);