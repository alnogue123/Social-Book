export interface ICreateCommand {
    userID : number
    username: string
    password: string
    isActive: boolean
}

export class CreateCommand {
    readonly userID: number;
    readonly username: string;
    readonly password: string;
    readonly isActive: boolean;

    constructor(data: ICreateCommand) {
        this.userID = data.userID
        this.username = data.username
        this.password = data.password
        this.isActive = data.isActive
    }
}