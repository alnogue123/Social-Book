import type { IResponse } from "../../../../common/interfaces/response.interface";
import type { GetAllHandler } from "../../domain/queries/getAllhandler";
import { mapCommentDTOToComment } from "../mappers/commentMapper";

export class AppGetAllHandler {
    constructor(private readonly domain: GetAllHandler) { }
    private readonly optionName = 'comment';
    private readonly optionAction = 'get_all';

    public async handler(): Promise<IResponse> {
        const results = (await this.domain.handler()).map(mapCommentDTOToComment);
        if (!results) {
            return {
                code: `${this.optionName}.${this.optionAction}`,
                message: `error getting all ${this.optionName}`,
                data: {},
                isSuccess: false
            }
        }
        
        return {
            code: `${this.optionName}.${this.optionAction}`,
            message: `getting all ${this.optionName}`,
            data: results,
            isSuccess: true
        }
    }
}