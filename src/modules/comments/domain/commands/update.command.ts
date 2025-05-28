export interface IUpdateCommand {
    commentID: number
    userID : number
    description: string
}

export class UpdateCommand implements IUpdateCommand {
    readonly userID: number;
    readonly description: string;
    readonly commentID: number;

    constructor(data: IUpdateCommand) {
        this.userID = data.userID
        this.description = data.description
        this.commentID = data.commentID
    }
}