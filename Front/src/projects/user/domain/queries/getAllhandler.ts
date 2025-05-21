
import type { Domain } from "../entities/UserEntity";
import type { ICrudPort } from "../ports/user.port";

export class GetAllHandler {
    constructor(private readonly port: ICrudPort) { }

    async handler(): Promise<Domain[]> {
        const records = await this.port.getAll();
        return records;
    }
}