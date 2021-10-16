import {Application} from 'express';
import auth from './auth.router';
import carrera from './carrera.router';

const api = '/api/v1';

function createRouter(app:Application){
    app.use(`${api}/auth`,auth);
    app.use(`${api}/carrera`,carrera);
}

export default createRouter;
