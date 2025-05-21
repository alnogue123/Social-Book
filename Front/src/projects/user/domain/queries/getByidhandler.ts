import type { Domain } from "../entities/UserEntity";
import type { ICrudPort } from "../ports/user.port";
import type { GetByIdQuery } from "./getByidquery";

export class GetByIdHandler {
    constructor(private readonly port: ICrudPort) { }

    async handler({ id }: GetByIdQuery): Promise<Domain> {
        const record = await this.port.getById(id);
        return record;
    }
}