import {Application} from 'express';
import hola from './auth.router';

const api = '/api/v1';

function createRouter(app:Application){
    app.use(`${api}/auth`,hola)
}

export default createRouter;
