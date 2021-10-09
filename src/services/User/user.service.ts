import {User as UserTypes} from '@types';
import UserQuery from './User';

class User extends UserQuery{

    constructor() {
        super()
    }
    
    /**find user */

    async getUser(matricula: string):Promise<UserTypes> {
        return await this.getLogin(matricula);
    }
    /*encript password */
    async genHash(password: string): Promise<string> {
        return await this.encryptPassword(password)
    }

    async comparePassword(password: string, hash: string): Promise<boolean> {
        return await this.matchPassword(password, hash)
    }
    async createAdmin(data:UserTypes){
        const {matricula,password,nombre,a_materno} = data;
        const {a_paterno,sexo,correo} = data;
        
        if(await this.getUser(matricula)){
            return {
                error:true,
                msg:"Este usuario ya esta registrado",
                data:null
            }
        }else{
            const has = await this.genHash(password);
            const data = await this.create(matricula,nombre,has,a_paterno,a_materno,sexo,correo,'admin',"","",1)
            return {
                error:false,
                msg:"Registro exitoso",
                data:data
            }
        }
    }
    async createAlumno(data:UserTypes){
        const {matricula,password,nombre,a_materno} = data;
        const {a_paterno,sexo,correo} = data;
        
        if(await this.getUser(matricula)){
            return {
                error:true,
                msg:"Este usuario ya esta registrado",
                data:null
            }
        }else{
            const has = await this.genHash(password);
            const data = await this.create(matricula,nombre,has,a_paterno,a_materno,sexo,correo,'alumno',"","",1)
            return {
                error:false,
                msg:"Registro exitoso",
                //cambiar por la data
                data:data
            }
        }
    }
    async createEnfermero(data:UserTypes){
        const {matricula,password,nombre,a_materno} = data;
        const {a_paterno,sexo,correo} = data;
        
        if(await this.getUser(matricula)){
            return {
                error:true,
                msg:"Este usuario ya esta registrado",
                data:null
            }
        }else{
            const has = await this.genHash(password);
            const data = await this.create(matricula,nombre,has,a_paterno,a_materno,sexo,correo,'enfermero',"","",1)
            return {
                error:false,
                msg:"Registro exitoso",
                //cambiar por la data
                data:data
            }
        }
    }
}

const user = new User();

export default user;