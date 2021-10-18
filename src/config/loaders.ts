import { Application, json, urlencoded } from 'express';
import { Cloud } from 'services/Cloudinary';
import helmet from 'helmet';
import cors from 'cors'
import morgan from 'morgan';
import passport from "passport";
import {DB} from 'db/connect';


export default function useLoaders(app: Application,port:number) {
    //setings
    app.set('port', port);
    app.set('json spaces', 2);
    new DB()
    require('middleware/passport');
    new Cloud();
    //middleware
    app.use(helmet());
    app.use(cors());
    app.use(morgan('dev'));
    app.use(urlencoded({ extended: true }))
    app.use(json());
    app.use(passport.initialize());
}