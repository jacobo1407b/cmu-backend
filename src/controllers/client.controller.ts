import { Request, Response, NextFunction } from 'express';
import client from 'services/Client';
import user from 'services/User/user.service';

export async function updateMatricula(req: Request, res: Response, next: NextFunction) {
    try {
        var id: string = req.params.id;
        var newmatricula: string = req.body.newmatricula;
        var validar = await user.getUser(newmatricula);
        
        if (!validar) {
            const upda = await client.updateMatricula(newmatricula, id);
            delete upda.password
            res.status(200).json({
                error: false,
                msg: "Matricula actualizada",
                data: upda
            })
        } else {
            res.status(200).json({
                error: false,
                msg: "Esta matricula ya existe",
                data: null
            })
        }
    } catch (error) {
        res.status(500).json(error);
    }
}//si

export async function updatePassword(req: Request, res: Response, next: NextFunction) {
    try {
        var id:string = req.params.id;
        var password:string = req.body.password;
        var result = await client.updatePassword(password,id);
        if(result === true){
            res.status(200).json({
                error:!result,
                msg:"Password actualizado"
            })
        }else{
            res.status(200).json({
                error:result,
                msg:"Error en la actualización"
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}//si

export async function getAllAlumnos(req: Request, res: Response, next: NextFunction) {
    try {
        var result = await client.getAllAlumnos();
        res.status(200).json({
            error: false,
            msg: "Lista de alumnos",
            data: result
        })
    } catch (error) {
        res.status(500).json(error);
    }
}//si

export async function getEnfermero(req: Request, res: Response, next: NextFunction) {
    try {
        var result = await client.gerAllEnfermeros();
        res.status(200).json({
            error: false,
            msg: "Lista de enfermeros",
            data: result
        })
    } catch (error) {
        res.status(500).json(error);
    }
}//si