import { Hash } from 'utils/hash';

class User extends Hash {
    constructor() {
        super()
    }

    /**find user */

    getUser(matricula: string) {

    }
    /*encript password */
    async genHash(password: string): Promise<string> {
        return await this.encryptPassword(password)
    }

    async comparePassword(password: string, hash: string): Promise<boolean> {
        return await this.matchPassword(password, hash)
    }
    async createAdmin(){

    }
    async createAlumno(){

    }
    async createEnfermero(){

    }
}

const user = new User();

export default user;