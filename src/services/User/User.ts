import { Hash } from 'utils/hash';
import { pg } from 'db/connect';
import { User } from '@types';

export default class UserQuery extends Hash {

    constructor() {
        super()
    }

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

    getById(id: string): Promise<User> {
        const text = 'SELECT * FROM df.users WHERE id = $1'
        const values = [id]
        return pg
            .query(text, values)
            .then(res => {
                res.rows[0]
            })
            .catch(e => e.stack)
    }
    create(matricula: string, nombre: string, password: string, a_paterno: string, a_materno: string, sexo: string, correo: string, role: string, url: string, name_image: string, carrera?: number):Promise<User>{
        const text = 'INSERT INTO df.users(id,matricula,nombre,password,a_paterno,a_materno,sexo,correo,role,url,name_image,carrera) VALUES($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *'
        const values = [null, matricula, nombre, password, a_paterno, a_materno, sexo, correo, role, url, name_image, carrera];
        return pg
            .query(text, values)
            .then(res => {
                res.rows[0]
            })
            .catch(e => e.stack)
    }
    update(id: number, matricula: string, nombre: string, a_paterno: string, a_materno: string, sexo: string, correo: string, carrera?: number):Promise<User> {
        const text = "UPDATE df.users SET matricula=$1, nombre=$2, a_paterno=$3, a_materno=$4, sexo=$5, correo=$6, carrera=$7, WHERE id = $8"
        const values = [matricula, nombre, a_paterno, a_materno, sexo, correo, carrera, id]
        return pg
            .query(text, values)
            .then(res => {
                res.rows[0]
            })
            .catch(e => e.stack)
    }

    updateImage(id: number, url: string, nameImg: string) {
        const text = "UPDATE df.users SET url=$1,name_image=$2 WHERE id=$3"
        const values = [url, nameImg, id];
        return pg
            .query(text, values)
            .then(res => {
                res.rows[0]
            })
            .catch(e => e.stack)
    }
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
    }
}