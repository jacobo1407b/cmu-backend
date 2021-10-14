import { Request, Response, NextFunction } from 'express';
import jwt,{JwtPayload} from 'jsonwebtoken';
import passport from 'passport';
import user from 'services/User/user.service';
import Error404 from 'services/Error/Error404';
import {Payload,User} from '@types';

export function auth(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('local',{session:false},function(err,user:User,inf){
        if(err || !user){
            next(new Error404('username or password not correct.'))
        }else{
            const payload:Payload ={
                sub:user.id,
                exp: Date.now()+400000,
                username:`${user.nombre} ${user.a_paterno} ${user.a_materno}`,
                email:user.correo,
                role:user.role,
                matricula:user.matricula
            }
            user.password="hahaha te creas pana"
            const token = jwt.sign(JSON.stringify(payload), process.env.SECRET_TOKEN!, { algorithm: 'HS256' });
            res.status(200).json({
                error:false,
                msg:"Login success",
                user,
                token
            })
        }
    })(req, res, next)
}

export async function createAdm(req: Request, res: Response, next: NextFunction) {
    try {
        const resp = await user.createAdmin(req.body);
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).json(err)
    }
}

export async function createAlum(req: Request, res: Response, next: NextFunction) {
    try {
        const resp = await user.createAlumno(req.body);
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
}

export async function createEnferm(req: Request, res: Response, next: NextFunction) {
    try {
        const resp = await user.createEnfermero(req.body);
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
}

export async function getUser(req: Request, res: Response, next: NextFunction) {
    try {
        const resp = await user.getById(req.params.id)
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
}

export async function updateUser(req: Request, res: Response, next: NextFunction) {
    try {
        var id = parseInt(req.params.id)
        const resp = await user.updateUser(id, req.body)
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
}
