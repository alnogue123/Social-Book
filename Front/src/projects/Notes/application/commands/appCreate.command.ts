export interface IAppCreateCommand {
    userID : number
    title: string
    body: string
    isPublic: boolean
}

export class AppCreateCommand {
    readonly userID : number
    readonly title: string
    readonly body: string
    readonly isPublic: boolean

    constructor(data: IAppCreateCommand) {
        this.userID = data.userID
        this.title = data.title
        this.body = data.body
        this.isPublic = data.isPublic
    }
}