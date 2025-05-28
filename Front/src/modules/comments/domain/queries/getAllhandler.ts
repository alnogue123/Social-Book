
import type { Domain } from "../entities/commentEntity";
import type { ICrudPort } from "../ports/comment.port";

export class GetAllHandler {
    constructor(private readonly port: ICrudPort) { }

    async handler(): Promise<Domain[]> {
        const records = await this.port.getAll();
        return records;
    }
}