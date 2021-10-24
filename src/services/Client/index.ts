import { pg } from 'db/connect';
import { Hash } from 'utils/hash';
import { User } from '@types';
/**si */
class Client extends Hash {
    constructor() {
        super();
    }
    updateMatricula(matricula: string, id: string): Promise<User> {
        const text: string = 'UPDATE df.users SET matricula=$1 WHERE id_usuario=$2 RETURNING *';
        const values = [matricula, id];
        return new Promise((resolve, reject) => {
            pg.query(text, values, function (err, result) {
                if (err) reject(err)
                resolve(result.rows[0]);
            });
        });
    }

    async updatePassword(password: string, id: string): Promise<boolean> {
        const hash = await this.encryptPassword(password);
        const text: string = 'UPDATE df.users SET password=$1 WHERE id_usuario=$2 RETURNING *';
        const values = [hash, id];
        return new Promise((resolve, reject) => {
            pg.query(text, values, function (err, result) {
                if (err) reject(err)
                resolve(true)
            });
        })
    }//si
    updateImage(id: string, url: string, nameImg?: string): Promise<User> {
        const text = "UPDATE df.users SET url=$1,name_image=$2 WHERE id_usuario=$3 RETURNING *"
        const values = [url, nameImg, id];
        return new Promise((resolve,reject)=>{
            pg.query(text,values,function(err,result){
                if(err) reject(err)
                resolve(result.rows[0])
            })
        });
    }

    getAllAlumnos(): Promise<User[]> {
       const text = "SELECT matricula,id_usuario,url,nombre,a_paterno,a_materno,correo,genero,carrera,abreviatura,c.id_carrera FROM df.users u JOIN df.carrera c ON u.id_carrera=c.id_carrera WHERE u.role='Alumno'";
        return new Promise((resolve, reject) => {
            pg.query(text, function (err, result) {
                if (err) reject(err)
                resolve(result.rows);
            });
        });
    }//si

    gerAllEnfermeros(): Promise<User[]> {
        const text = "SELECT matricula,id_usuario,url,nombre,a_paterno,a_materno,correo,genero FROM df.users WHERE role='Enfermero'";
        return new Promise((resolve, reject) => {
            pg.query(text, function (err, result) {
                if (err) reject(err)
                resolve(result.rows);
            });
        });
    }//si
    
}

export default new Client();