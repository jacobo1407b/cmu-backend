import { Request, Response, NextFunction } from 'express';
import carreras from 'services/Carrera';
export async function getAllCarreras(req: Request, res: Response, next: NextFunction) {
    try {
        const allcarreras = await carreras.getCarreras();
        res.status(200).json(allcarreras);
    } catch (error) {
        res.status(500).json(error)
    }

}//si