export interface ICreateCommand {
    userID : number
    title: string
    body: string
    isPublic: boolean
}

export class CreateCommand {
    readonly userID : number
    readonly title: string
    readonly body: string
    readonly isPublic: boolean

    constructor(data: ICreateCommand) {
        this.userID = data.userID
        this.title = data.title
        this.body = data.body
        this.isPublic = data.isPublic
    }
}