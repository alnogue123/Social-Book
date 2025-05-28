import type { IResponse } from "../../../../../common/interfaces/response.interface";
import type { CreateHandler } from "../../../domain/commands/create.handler";
import type { AppCreateCommand } from "./appCreate.command";

export class AppCreateHandler {
    constructor(private readonly domain: CreateHandler) { }
    public async handler(data: AppCreateCommand): Promise<IResponse> {
        const result = await this.domain.handler(data);
        return result;
    }
}