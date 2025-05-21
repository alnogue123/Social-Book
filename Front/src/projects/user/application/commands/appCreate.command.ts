export interface IAppCreateCommand {
    userID : number
    username: string
    password: string
    isActive: boolean
}

export class AppCreateCommand {
    readonly userID : number
    readonly username: string
    readonly password: string
    readonly isActive: boolean

    constructor(data: IAppCreateCommand) {
        this.userID = data.userID
        this.username = data.username
        this.password = data.password
        this.isActive = data.isActive
    }
}