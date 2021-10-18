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
}

export default new Client();