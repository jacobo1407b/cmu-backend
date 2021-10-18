import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import user from 'services/User/user.service';
import carr from 'services/Carrera';
import Error404 from 'services/Error/Error404';
import { Payload, User } from '@types';

export function auth(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('local', { session: false }, async function (err, user: User, inf) {
        if (err || !user) {
            next(new Error404('username or password not correct.'))
        } else {
            const payload: Payload = {
                sub: user.id_usuario!,
                exp: Date.now() + 400000,
                username: `${user.nombre} ${user.a_paterno} ${user.a_materno}`,
                email: user.correo,
                role: user.role,
                matricula: user.matricula
            }
            delete user.password
            if(user.id_carrera){
                const carresponse = await carr.getCarreraId(user.id_carrera);
                user.carrera=carresponse;
            }
            const token = jwt.sign(JSON.stringify(payload), process.env.SECRET_TOKEN!, { algorithm: 'HS256' });
            res.status(200).json({
                error: false,
                msg: "Login success",
                user,
                token
            })
        }
    })(req, res, next)
}//si

export async function createAdm(req: Request, res: Response, next: NextFunction) {
    try {
        const resp = await user.createAdmin(req.body);
        delete resp.data?.password;
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).json(err)
    }
}//si

export async function createAlum(req: Request, res: Response, next: NextFunction) {
    try {
        var resp = await user.createAlumno(req.body);
        delete resp.data?.password;
        if (resp.error) {
            res.status(200).json(resp)
        } else {
            let userdata = resp.data
            const carresponse = await carr.getCarreraId(resp.data?.id_carrera);
            var sprit = {
                ...userdata,
                carrera: carresponse
            }
            res.status(200).json(sprit)
        }

    } catch (error) {
        res.status(500).json(error)
    }
}//si

export async function createEnferm(req: Request, res: Response, next: NextFunction) {
    try {
        const resp = await user.createEnfermero(req.body);
        delete resp.data?.password
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
}//si

export async function getUser(req: any, res: Response, next: NextFunction) {
    const userid = req.user.sub
    try {
        let resp = await user.getById(userid);
        delete resp.password;
        if (!resp.id_carrera) {
            res.status(200).json(resp)
        } else {
            const carresponse = await carr.getCarreraId(resp.id_carrera);
            resp.carrera = carresponse;
            res.status(200).json(resp)
        }

    } catch (error) {
        res.status(500).json(error)
    }
}//si

export async function updateUser(req: Request, res: Response, next: NextFunction) {
    try {
        var id = req.params.id
        let resp = await user.updateUser(id, req.body);
        delete resp.data.password
        if(!resp.data.id_carrera){
            res.status(200).json(resp)
        }else{
            const carresponse = await carr.getCarreraId(resp.data.id_carrera);
            delete resp.data.id_carrera;
            resp.data.carrera = carresponse;
            res.status(200).json(resp)
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}//si
