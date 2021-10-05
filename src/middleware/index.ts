import { Request, Response, NextFunction } from 'express';
import Error401 from 'services/Error/Error401';
import Error403 from 'services/Error/Error403';
import Error404 from 'services/Error/Error404';
import InfoError from 'services/Error/ErrorInfo';

export let middlewares = {
    errorHandler: (error: any, req: Request, res: Response, next: NextFunction) => {
        if (error instanceof InfoError)
            res.status(200).json({ error: error.message });
        else if (error instanceof Error404)
            res.status(404).json({ error: error.message });
        else if (error instanceof Error403)
            res.status(403).json({ error: error.message });
        else if (error instanceof Error401)
            res.status(401).json({ error: error.message });
        else if (error.name == "ValidationError")
            res.status(200).json({ error: error.message });
        else if (error.message) res.status(500).json({ error: error.message });
        else next();
    },
    notFoundHandler: (req: Request, res: Response, next: NextFunction) => {
        res.status(404).json({ error: 'Not found' })
    },
};