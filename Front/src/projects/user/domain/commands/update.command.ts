export interface IUpdateCommand {
    userID : number
    username: string
    password: string
    isActive: boolean
}

export class UpdateCommand implements IUpdateCommand {
    readonly userID: number;
    readonly username: string;
    readonly password: string;
    readonly isActive: boolean;

    constructor(data: IUpdateCommand) {
        this.userID = data.userID
        this.username = data.username
        this.password = data.password
        this.isActive = data.isActive
    }
}