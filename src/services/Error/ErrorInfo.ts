import { ErrorCustom } from './error.service';

export default class InfoError extends ErrorCustom {
    constructor(msg: string) {
        super();
        let err = Error.apply(this, [msg]);
        this.name = err.name = "InfoError";
        this.message = err.message;
        this.stack = err.stack;
        return this;
    }
}