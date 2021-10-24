import {Application} from 'express';
import auth from './auth.router';
import carrera from './carrera.router';
import client from './client.router';
import image from './images.router';
import history from './history.router';

const api = '/api/v1';

function createRouter(app:Application){
    app.use(`${api}/auth`,auth);
    app.use(`${api}/carrera`,carrera);
    app.use(`${api}/client`,client);
    app.use(`${api}/image`,image);
    app.use(`${api}/history`,history)
}

export default createRouter;
