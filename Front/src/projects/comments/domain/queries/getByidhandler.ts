import type { Domain } from "../entities/commentEntity";
import type { ICrudPort } from "../ports/comment.port";
import type { GetByIdQuery } from "./getByidquery";

export class GetByIdHandler {
    constructor(private readonly port: ICrudPort) { }

    async handler({ id }: GetByIdQuery): Promise<Domain> {
        const record = await this.port.getById(id);
        return record;
    }
}