import { ErrorCustom } from './error.service';

export default class Error401 extends ErrorCustom {
    constructor(msg: string) {
        super();
        let err = Error.apply(this, [msg]);
        this.name = err.name = "Error401";
        this.message = err.message,
            this.stack = err.stack
        return this
    }
}