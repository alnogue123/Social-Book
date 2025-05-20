export interface IResponse<D = undefined> {
    code: string
    data: D | undefined | object
    message: string
    isSuccess: boolean
}