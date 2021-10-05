export interface ErrorCustom {
    name: string
    message: string
    stack?: string
}
export class ErrorCustom implements ErrorCustom { }
