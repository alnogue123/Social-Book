import type { Domain } from "../entities/NoteEntity";
import type { ICrudPort } from "../ports/note.port";
import type { GetByIdQuery } from "./getByidquery";

export class GetByIdHandler {
    constructor(private readonly port: ICrudPort) { }

    async handler({ id }: GetByIdQuery): Promise<Domain> {
        const record = await this.port.getById(id);
        return record;
    }
}