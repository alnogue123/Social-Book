export interface IAppUpdateCommand {
    commentID: number
    userID : number
    description: string
}

export class AppUpdateCommand implements IAppUpdateCommand {
    readonly commentID: number
    readonly userID : number
    readonly description: string

    constructor(data: IAppUpdateCommand) {
        this.commentID = data.commentID
        this.userID = data.userID
        this.description = data.description
    }
}