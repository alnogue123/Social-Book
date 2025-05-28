import type { IResponse } from "../../../../common/interfaces/response.interface";
import type { GetAllHandler } from "../../domain/queries/getAllhandler";
import { mapNoteDTOToNote } from "../mappers/userMapper";

export class AppGetAllHandler {
    constructor(private readonly domain: GetAllHandler) { }
    private readonly optionName = 'user';
    private readonly optionAction = 'get_all';

    public async handler(): Promise<IResponse> {
        const results = (await this.domain.handler()).map(mapNoteDTOToNote);
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