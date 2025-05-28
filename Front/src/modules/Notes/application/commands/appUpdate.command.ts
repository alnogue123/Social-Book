export interface IAppUpdateCommand {
    id: number
    userID : number
    title: string
    body: string
    isPublic: boolean
}

export class AppUpdateCommand implements IAppUpdateCommand {
    readonly id: number
    readonly userID: number
    readonly title: string
    readonly body: string
    readonly isPublic: boolean

    constructor(data: IAppUpdateCommand) {
        this.id = data.id
        this.userID = data.userID
        this.title = data.title
        this.body = data.body
        this.isPublic = data.isPublic
    }
}