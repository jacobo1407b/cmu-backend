import { Hash } from 'utils/hash';
import { pg } from 'db/connect';
import { User } from '@types';
const mongoid = require('mongoid-js')

export default class UserQuery extends Hash {

    constructor() {
        super()
    }
//si
    getLogin(matricula: string): Promise<User> {
        const text = 'SELECT * FROM df.users WHERE matricula = $1'
        const values = [matricula]
        return new Promise((resolve, reject) => {
            pg.query(text,values,function(err, result){
                if(err) reject(err)
                resolve(result.rows[0])
            })
        })
    }
//si
    getById(id?: string): Promise<User> {
        const text = 'SELECT * FROM df.users WHERE id_usuario = $1'
        const values = [id];
        return new Promise((resolve, reject) => {
            pg.query(text,values,function(err, result){   
                if(err) reject(err)
                resolve(result.rows[0])
            })
        })
    }
    //si
    create(matricula: string, nombre: string, password: string, a_paterno: string, a_materno: string, sexo: string, correo: string, role: string, url: string, name_image: string, carrera?: string):Promise<User>{
        const text = 'INSERT INTO df.users(id_usuario,matricula,nombre,password,a_paterno,a_materno,genero,correo,role,url,name_image,id_carrera) VALUES($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *'
        const values = [mongoid(), matricula, nombre, password, a_paterno, a_materno, sexo, correo, role, url, name_image, carrera];
        return new Promise((resolve, reject)=>{
            pg.query(text,values,function(err,result){
                if(err) reject(err)
                resolve(result.rows[0])
            })
        })
    }

    update(id: string, nombre: string, a_paterno: string, a_materno: string, sexo: string, correo: string, carrera?: string):Promise<User> {
        const text = "UPDATE df.users SET nombre=$1, a_paterno=$2, a_materno=$3, genero=$4, correo=$5, id_carrera=$6 WHERE id_usuario=$7 RETURNING *"
        const values = [ nombre, a_paterno, a_materno, sexo, correo, carrera, id];
        console.log()
        return new Promise((resolve, reject)=>{
            pg.query(text,values,function(err,result){
                if(err) reject(err)
                resolve(result.rows[0])
            })
        })
    }//si

    
    delete(id: number) {
        const text = "DELETE df.users WHERE id=$1"
        const values = [id];
        return pg
            .query(text, values)
            .then(res => {
                res.rows[0]
            })
            .catch(e => e.stack)
    }
    updatePassword(id: number, hash: string) {
        const text = "UPDATE df.users SET password=$1 WHERE id=$2";
        const values = [hash, id];
        return pg
            .query(text, values)
            .then(res => {
                res.rows[0]
            })
            .catch(e => e.stack)
    }//si
}