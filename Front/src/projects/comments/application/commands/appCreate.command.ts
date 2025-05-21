export interface IAppCreateCommand {
    noteID: number
    commentID: number
    userID : number
    description: string
}

export class AppCreateCommand {
    readonly userID: number
    readonly description: string
    readonly noteID: number
    readonly commentID: number

    constructor(data: IAppCreateCommand) {
        this.userID = data.userID
        this.description = data.description
        this.noteID = data.noteID
        this.commentID = data.commentID
    }
}