export interface IAppUpdateCommand {
    userID : number
    username: string
    password: string
    isActive: boolean
}

export class AppUpdateCommand implements IAppUpdateCommand {
    readonly userID: number;
    readonly username: string;
    readonly password: string;
    readonly isActive: boolean;

    constructor(data: IAppUpdateCommand) {
        this.userID = data.userID
        this.username = data.username
        this.password = data.password
        this.isActive = data.isActive
    }
}