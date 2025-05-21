export interface IDomain {
    userID : number
    username: string
    password: string
    isActive: boolean
    CreatedAt: Date
    UpdatedAt: Date
}

export class Domain implements IDomain {
    readonly userID: number;
    readonly username: string;
    readonly password: string;
    readonly isActive: boolean;
    readonly CreatedAt: Date
    readonly UpdatedAt: Date

    constructor(data: IDomain) {
        this.userID = data.userID
        this.username = data.username
        this.password = data.password
        this.isActive = data.isActive
        this.CreatedAt = data.CreatedAt
        this.UpdatedAt = data.UpdatedAt
    }
}