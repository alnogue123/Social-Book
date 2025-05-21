import type { IResponse } from "../../../../common/interfaces/response.interface";
import { mapCommentDTOToComment } from "../../../comments/application/mappers/commentMapper";
import type { GetByQueryHandler } from "../../domain/queries/getbyqueryhandler";
import type { AppGetByQuery } from "./app.getbyquery";

export class AppGetByQueryHandler {
    constructor(private readonly domain: GetByQueryHandler) { }

    public async handler(query: AppGetByQuery): Promise<IResponse> {
        const results = (await this.domain.handler(query)).map(mapCommentDTOToComment);
        return results;
    }
}