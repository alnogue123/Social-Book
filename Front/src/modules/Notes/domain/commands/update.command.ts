export interface IUpdateCommand {
    id: number
    userID : number
    title: string
    body: string
    isPublic: boolean
}

export class UpdateCommand implements IUpdateCommand {
    readonly id: number
    readonly userID: number
    readonly title: string
    readonly body: string
    readonly isPublic: boolean

    constructor(data: IUpdateCommand) {
        this.id = data.id
        this.userID = data.userID
        this.title = data.title
        this.body = data.body
        this.isPublic = data.isPublic
    }
}