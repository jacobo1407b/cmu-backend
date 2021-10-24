import request from 'supertest';
import {serverTest,token} from '../src/utils/constantes'
var server = request(serverTest);

const updateMatricula = {
    newmatricula:"20182iti011"
}
const updatePass = {
    password:'1234567890'
}
describe('API client',()=>{
    it('Should return json and true',function(done){
        server.put('/api/v1/client/update-matricula/6168e3f008acb90027000002')
        .expect('Content-Type', /json/)
        .set('Authorization', token)
        .send(updateMatricula)
        .expect(200,done)
    });
    it('Should return json and true update password',function(done){
        server.put('/api/v1/client/update-password/6168e3f008acb90027000002')
        .expect('Content-Type', /json/)
        .set('Authorization', token)
        .send(updatePass)
        .expect(200,done)
    })
    it('Should return json and 200 status getAllAlumnos',function(done){
        server.get('/api/v1/client/get-alumnos')
        .expect('Content-Type', /json/)
        .set('Authorization', token)
        .expect(200,done)
    })
    it('Sould return Json and 200 status for getEnfermeros',function(done){
        server.get('/api/v1/client/get-enfermero')
        .expect('Content-Type', /json/)
        .set('Authorization', token)
        .expect(200,done)
    })
})