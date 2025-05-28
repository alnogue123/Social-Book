import type { IResponse } from "../../../../common/interfaces/response.interface";
import type { Domain } from "../entities/NoteEntity";
import type { ICrudPort } from "../ports/note.port";
import type { IUpdateCommand } from "./update.command";

export class UpdateHandler {
    private readonly optionName = 'note';
    private readonly optionAction = 'update';

    constructor(private readonly port : ICrudPort) {}

    async handler(command: IUpdateCommand): Promise<IResponse>{
        const note = await this.port.update({...command} as Domain);
        if(!note) {
            return {
                code: `${this.optionName}.${this.optionAction}`,
                message: `error updating ${this.optionName}`,
                data: {},
                isSuccess: false
            }
        }
        
        return {
            code: `${this.optionName}.${this.optionAction}`,
            message: `${this.optionName} updated successfully`,
            data: note,
            isSuccess: true
        }
    }
}