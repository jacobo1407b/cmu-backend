import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import Error401 from 'services/Error/Error401';
import Error403 from 'services/Error/Error403';
import Error404 from 'services/Error/Error404';
import InfoError from 'services/Error/ErrorInfo';

export let middlewares = {
    ensureAuthenticatedAdmin: (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            if (info) {
                return next(new Error401(info.message));
            }
            if (err) {
                return next(err);
            }
            if (user.role != 'Admin') {
                return next(new Error403("no tienes acceso."));
            }
            req.user = user;
            next();
        })(req, res, next);
    },
    ensureAuthenticated: (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            if (info) {
                return next(new Error401(info.message));
            }
            if (err) {
                return next(err);
            }
            if (!user) {
                return next(new Error403("no tienes acceso."));
            }
            req.user = user;
            next();
        })(req, res, next);
    },
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