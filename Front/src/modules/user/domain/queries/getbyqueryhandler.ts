import type { Domain } from "../entities/UserEntity";
import type { ICrudPort } from "../ports/user.port";
import type { GetByQuery } from "./getbyquery";

export class GetByQueryHandler {
    constructor(private readonly port: ICrudPort) { }

    private readonly optionName = 'comment';
    private readonly optionAction = 'get_by_query';

    async handler(data: GetByQuery): Promise<any> {
        const response = await this.port.getByQuery(data as Domain);
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