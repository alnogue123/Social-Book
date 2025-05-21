import type { GetByIdHandler } from "../../domain/queries/getByidhandler";
import type { AppGetByIdQuery } from "./appGetbyid.query";

export class AppGetByIdHander {
    constructor(private readonly Domain: GetByIdHandler) { }
    private readonly optionName = 'user';
    private readonly optionAction = 'get_id';

    async handler(id: AppGetByIdQuery): Promise<any> {
        const response = await this.Domain.handler(id);
        if (!response) {
            return {
                code: `${this.optionName}.${this.optionAction}`,
                message: `error getting ${this.optionName}`,
                data: {},
                isSuccess: false
            }
        }
        return {
            code: `${this.optionName}.${this.optionAction}`,
            message: `success getting ${this.optionName}`,
            data: response,
            isSuccess: true
        }
    }
}