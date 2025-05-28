import type { IResponse } from "../../../../../common/interfaces/response.interface";
import type { UpdateHandler } from "../../../domain/commands/update.handler";
import type { AppUpdateCommand } from "./appUpdate.command";

export class AppUpdateHandler {
    constructor(private readonly Domain: UpdateHandler) { }

    async handle(data: AppUpdateCommand): Promise<IResponse> {
        return await this.Domain.handler(data);
    }
}