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
    getCarreraId(id?:string):Promise<Carrera>{
        const text:string = 'SELECT * FROM df.carrera WHERE id_carrera=$1';
        const values = [id];
        return new Promise((resolve,reject)=>{
            pg.query(text,values,function(err,result){
                if(err)reject(err);
                resolve(result.rows[0]);
            });
        });
    }
}

export default new Carreras();