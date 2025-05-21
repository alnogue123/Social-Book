export interface IGetByQuery {
    username: string;
    password: string;
}

export class GetByQuery{
    readonly username: string;
    readonly password: string;
    constructor(data: IGetByQuery) {
        this.username = data.username;
        this.password = data.password;
    }
}