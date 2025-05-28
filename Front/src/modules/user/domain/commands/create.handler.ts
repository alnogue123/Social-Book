import type { IResponse } from "../../../../common/interfaces/response.interface";
import type { Domain } from "../entities/UserEntity";
import type { ICrudPort } from "../ports/user.port";
import type { CreateCommand } from "./create.command";

export class CreateHandler {
    private readonly optionName = 'user';
    private readonly optionAction = 'create';

    constructor(private readonly port : ICrudPort){}
    
    public async handler(data: CreateCommand): Promise<IResponse> {
        const restult = await this.port.create({...data} as Domain);
        if(!restult) {
            return {
                code: `${this.optionName}.${this.optionAction}`,
                data: {},
                message: "Error creating note",
                isSuccess: false,
            }
        }
        
        return {
            code: `${this.optionName}.${this.optionAction}`,
            data: restult,
            message: "Note created",
            isSuccess: true,
        }
    }
}