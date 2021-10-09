import {Application} from 'express';
import auth from './auth.router';

const api = '/api/v1';

function createRouter(app:Application){
    app.use(`${api}/auth`,auth)
}

export default createRouter;
