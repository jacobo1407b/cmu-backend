import {Carrera} from '@types';
import { pg } from 'db/connect';

class Carreras{
    getCarreras():Promise<Carrera[]>{
        const text:string ='SELECT * FROM df.carrera';
        return new Promise((resolve,reject)=>{
            pg.query(text,function(err,result){
                if(err) reject(err);
                resolve(result.rows)
            });
        });
    }
}

export default new Carreras();