import type { IResponse } from "../../../../common/interfaces/response.interface";
import type { ICrudPort } from "../ports/note.port";
import type { DeleteCommand } from "./delete.command";

export class DeleteHandler {
    private readonly optionName = 'note';
    private readonly optionAction = 'delete';

    constructor(private readonly port: ICrudPort) { }
    async handler({ id }: DeleteCommand): Promise<IResponse> {
        if (!id) {
            return {
                code: `${this.optionName}.${this.optionAction}`,
                data: {},
                message: "id is required",
                isSuccess: false,
            }
        }

        const exists = await this.port.getById(id);
        if (!exists) {
            return {
                code: `${this.optionName}.${this.optionAction}`,
                data: {},
                message: "Note not found",
                isSuccess: false,
            }
        }

        const result = await this.port.delete(id);
        if (!result) {
            return {
                code: `${this.optionName}.${this.optionAction}`,
                data: {},
                message: "Error deleting note",
                isSuccess: false,
            }
        }

        return {
            code: `${this.optionName}.${this.optionAction}`,
            data: { id: result },
            message: "Note deleted",
            isSuccess: true,
        }
    }
}