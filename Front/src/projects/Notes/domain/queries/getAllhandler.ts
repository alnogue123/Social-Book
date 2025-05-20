
import type { Domain } from "../entities/NoteEntity";
import type { ICrudPort } from "../ports/note.port";

export class GetAllHandler {
    constructor(private readonly port: ICrudPort) { }

    async handler(): Promise<Domain[]> {
        const records = await this.port.getAll();
        return records;
    }
}