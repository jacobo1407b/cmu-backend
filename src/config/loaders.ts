import { Application, json, urlencoded } from 'express';
import helmet from 'helmet';
import cors from 'cors'
import morgan from 'morgan';
import passport from "passport";
import {connectDB} from 'db/connect';


export default function useLoaders(app: Application,port:number) {
    //setings
    app.set('port', port);
    app.set('json spaces', 2);
    connectDB()
    require('middleware/passport');
    //middleware
    app.use(helmet());
    app.use(cors());
    app.use(morgan('dev'));
    app.use(urlencoded({ extended: false }))
    app.use(json());
    app.use(passport.initialize());
}