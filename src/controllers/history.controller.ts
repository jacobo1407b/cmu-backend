import { Request, Response, NextFunction } from 'express';
import history from 'services/History';

export async function getAllHistory(req: Request, res: Response, next: NextFunction){
    try {
        const {fechai,fechaf} = req.body;
        const allHistory = await history.getAllHistory(fechai,fechaf);
        res.status(200).json({
            error:false,
            data:allHistory
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

export async function getHistoryAlumno(req: any, res: Response, next: NextFunction) {
    try {
        const historyAlumno = await history.getHistoryAlumno(req.user?.sub);
        res.status(200).json({
            error:false,
            data:historyAlumno
        })
    } catch (error) {
        res.status(500).json(error);
    }
}