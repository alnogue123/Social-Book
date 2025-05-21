export class ApiError extends Error {
    constructor(
        public message: string,
        public statusCode: number,
        public originalError?: unknown
    ) {
        super(message);
        this.name = "ApiError";
    }
}