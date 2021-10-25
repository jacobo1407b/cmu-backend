import { pg } from 'db/connect';
import { Solicitud, SolicitudReq } from '@types';

class HistoryService{

    getAllHistory(fechaIn?:number,fechaFi?:number){
        const concatE = "CONCAT(e.nombre,' ',e.a_paterno,' ',e.a_materno) AS enfermero, e.url image_enfermero";
        const concatA = "(SELECT CONCAT(a.nombre,' ',a.a_paterno,' ',a.a_materno) AS alumno FROM df.users a WHERE a.id_usuario=s.id_alumno)"
        const fields = "id_solicitud,ubicacion,causa,estado,fecha"
        const conact = `${fields},${concatE},${concatA}`;
        let text = `SELECT ${conact} FROM df.solicitud_medica s JOIN df.users e ON s.id_medico=e.id_usuario`;

        if(fechaIn || fechaFi){
            text=`SELECT ${conact} FROM df.solicitud_medica s JOIN df.users e ON s.id_medico=e.id_usuario WHERE s.fecha>=$1 AND s.fecha<=$2`;
            return new Promise((resolve,reject)=>{
                pg.query(text,[fechaIn,fechaFi],function(err,result){
                    console.log(err)
                    if(err)reject(err);
                    resolve(result.rows)
                });
            });
        }else{
            return new Promise((resolve,reject)=>{
                pg.query(text,function(err,result){
                    console.log(err)
                    if(err)reject(err);
                    resolve(result.rows)
                });
            });
        }
        
    }

    getHistoryAlumno(idAlumno?:string):Promise<Solicitud[]>{
        const fields = "id_solicitud,ubicacion,causa,estado,fecha"
        const text = `SELECT ${fields} FROM df.solicitud_medica WHERE id_alumno=$1`;
        const values = [idAlumno];
        return new Promise((resolve,reject)=>{
            pg.query(text,values,function(err,result){
                if(err) reject(err);
                resolve(result.rows);
            });
        })
    }
}

export default new HistoryService();