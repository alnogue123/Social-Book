export interface IDomain {
    userID : number
    id: number
    title: string
    body: string
    isPublic: boolean
    CreatedAt: Date
    UpdatedAt: Date
}

export class Domain implements IDomain {
    readonly userID : number
    readonly id: number
    readonly title: string
    readonly body: string
    readonly isPublic: boolean
    readonly CreatedAt: Date
    readonly UpdatedAt: Date

    constructor(data: IDomain) {
        this.userID = data.userID
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.isPublic = data.isPublic
        this.CreatedAt = data.CreatedAt
        this.UpdatedAt = data.UpdatedAt
    }
}