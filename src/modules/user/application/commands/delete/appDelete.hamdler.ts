import type { IResponse } from "../../../../../common/interfaces/response.interface";
import type { DeleteHandler } from "../../../domain/commands/delete.handler";
import type { AppDeleteCommand } from "./appDelete.command";

export class AppDeleteHandler {
    constructor(public readonly domain: DeleteHandler) { }
    public async handler( id : AppDeleteCommand): Promise<IResponse> {
        return this.domain.handler(id);
    }
}