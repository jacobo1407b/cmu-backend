import { User as UserTypes, Re } from '@types';
import UserQuery from './User';

class User extends UserQuery {

    constructor() {
        super()
    }

    /**find user */

    async getUser(matricula: string): Promise<UserTypes> {
        return await this.getLogin(matricula);
    }//si
    /*encript password */
    async genHash(password: string): Promise<string> {
        return await this.encryptPassword(password)
    }
    //si
    async comparePassword(password: string, hash: string): Promise<boolean> {
        return await this.matchPassword(password, hash)
    }//si
    async createAdmin(data: UserTypes): Promise<Re> {
        const { matricula, password, nombre, a_materno } = data;
        const { a_paterno, genero, correo,id_carrera } = data;

        if (await this.getUser(matricula)) {
            return {
                error: true,
                msg: "Este usuario ya esta registrado",
                data: null
            }
        } else {
            const has = await this.genHash(password);
            const data = await this.create(matricula, nombre, has, a_paterno, a_materno, genero, correo, 'Admin', "", "", id_carrera)
            data.password =""
            return {
                error: false,
                msg: "Registro exitoso",
                data: data
            }
        }
    }//si
    async createAlumno(data: UserTypes): Promise<Re> {
        const { matricula, password, nombre, a_materno } = data;
        const { a_paterno, genero, correo, id_carrera} = data;

        if (await this.getUser(matricula)) {
            return {
                error: true,
                msg: "Este usuario ya esta registrado",
                data: null
            }
        } else {
            const has = await this.genHash(password);
            const data = await this.create(matricula, nombre, has, a_paterno, a_materno, genero, correo, 'Alumno', "", "", id_carrera)
            data.password =""
            return {
                error: false,
                msg: "Registro exitoso",
                //cambiar por la data
                data: data
            }
        }
    }//si
    async createEnfermero(data: UserTypes): Promise<Re> {
        const { matricula, password, nombre, a_materno } = data;
        const { a_paterno, genero, correo, id_carrera} = data;

        if (await this.getUser(matricula)) {
            return {
                error: true,
                msg: "Este usuario ya esta registrado",
                data: null
            }
        } else {
            const has = await this.genHash(password);
            const data = await this.create(matricula, nombre, has, a_paterno, a_materno, genero, correo, 'Enfermero', "", "", id_carrera)
            data.password=""
            return {
                error: false,
                msg: "Registro exitoso",
                //cambiar por la data
                data: data
            }
        }
    }//si

    async updateUser (id:string,data: UserTypes){
        const { matricula, nombre, a_materno } = data;
        const { a_paterno, genero, correo,id_carrera} = data;
            const dataResp = await this.update(id,nombre,a_paterno,a_materno,genero,correo,id_carrera);
            dataResp.password=""
            return {
                error: false,
                msg: "Registro exitoso",
                //cambiar por la data
                data: dataResp
            }

    }
}

const user = new User();

export default user;