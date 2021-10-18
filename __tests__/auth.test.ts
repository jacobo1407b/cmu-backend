import request from 'supertest';
import {body,bofy,bodyAlumno,bodyEnfermero} from '../src/utils/constantes';
import {serverTest,bodyUpdate} from '../src/utils/constantes';
import {token,tokenALumno} from '../src/utils/constantes';
var server = request(serverTest);

describe('API Auth', function () {
    it('Should return json as default data format Login', function (done) {
        server.post('/api/v1/auth/login')
            .expect('Content-Type', /json/)
            .send(body)
            .expect(200, done);
    });
    it('Should return 40.', function (done) {
        server.post('/api/v1/auth/create-admin')
            .expect('Content-Type', /json/)
            .set('Authorization', tokenALumno)
            .send(bofy)
            .expect(403, done);
    });


    it('Should return json as default data format create-admin', function (done) {
        server.post('/api/v1/auth/create-admin')
            .expect('Content-Type', /json/)
            .set('Authorization', token)
            .send(bofy)
            .expect(200, done);
    });

    it('Should return json as default data user', function (done) {
        server.get('/api/v1/auth/get')
            .expect('Content-Type', /json/)
            .set('Authorization', token)
            .send(bofy)
            .expect(200, done);
    });

    it('Should return json as default create alumno', function (done) {
        server.post('/api/v1/auth/create-alum')
            .expect('Content-Type', /json/)
            .set('Authorization', token)
            .send(bodyAlumno)
            .expect(200, done);
    });

    it('Should return json as default create enfermero', function (done) {
        server.post('/api/v1/auth/create-enf')
            .expect('Content-Type', /json/)
            .set('Authorization', token)
            .send(bodyEnfermero)
            .expect(200, done);
    });

    it('Should return json as default update user', function (done) {
        server.put('/api/v1/auth/update-user/616cc5ccdcc8b135ad000001')
            .expect('Content-Type', /json/)
            .set('Authorization', token)
            .send(bodyUpdate)
            .expect(200, done);
    });
});