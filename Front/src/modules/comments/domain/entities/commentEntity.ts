export interface IDomain {
    noteID: number
    commentID: number
    userID : number
    description: string
    CreatedAt: Date
    UpdatedAt: Date
}

export class Domain implements IDomain {
    readonly noteID: number
    readonly commentID: number
    readonly userID : number
    readonly description: string
    readonly CreatedAt: Date
    readonly UpdatedAt: Date

    constructor(data: IDomain) {
        this.noteID = data.noteID
        this.commentID = data.commentID
        this.userID = data.userID
        this.description = data.description
        this.CreatedAt = data.CreatedAt
        this.UpdatedAt = data.UpdatedAt
    }
}