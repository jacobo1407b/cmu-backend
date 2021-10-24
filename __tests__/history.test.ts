import request from 'supertest';
import {serverTest,tokenALumno,token} from '../src/utils/constantes'
var server = request(serverTest);

describe('API Historial',()=>{
    test('Should return json an 200 status when get all history',(done)=>{
        server.get('/api/v1/history/all')
        .expect('Content-Type', /json/)
        .set('Authorization', token)
        .expect(200,done)
    });

    test('Should return json an 200 status when get all history alumno',(done)=>{
        server.get('/api/v1/history/alumno')
        .expect('Content-Type', /json/)
        .set('Authorization', tokenALumno)
        .expect(200,done)
    });
});