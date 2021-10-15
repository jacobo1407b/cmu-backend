import request from 'supertest';
var server = request('http://localhost:3000');
const body = {
    matricula: "20182iti011",
    password: "1234567890"
}
const bofy = {
    "matricula": "20182iti053",
    "password": "1234567890",
    "nombre": "JOse Raul",
    "a_materno": "Tamayo",
    "a_paterno": "Briones",
    "genero": "Masculino",
    "correo": "jose@gmail.com",
    "id_carrera": null
}
const bodyAlumno = {
    "matricula": "20182iti091",
    "password": "1234567890",
    "nombre": "Cesar",
    "a_paterno": "Lima",
    "a_materno": "Ipatzi",
    "genero": "Masculino",
    "correo": "cesar@gmail.com",
    "id_carrera": "6168e3e908acb90027000001"
}
const bodyEnfermero = {
    "matricula": "20192iti012",
    "password": "1234567890",
    "nombre": "Simi",
    "a_paterno": "Garcia",
    "a_materno": "Gomez",
    "genero": "Femenino",
    "correo": "enfermero@undefined.com",
    "id_carrera": null
}//cambiar id
const bodyUpdate = {
    "nombre": "Jacobo",
    "a_paterno": "Hernandez",
    "a_materno": "Mendieta",
    "genero": "Masculino",
    "correo": "jacobohernandezmendieta7@gmail.com",
    "id_carrera": null
}
const token = "BEARER eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MTY4ZTNmMDA4YWNiOTAwMjcwMDAwMDIiLCJleHAiOjE2MzQyNjY0ODc5MTgsInVzZXJuYW1lIjoiSmFjb2JvIFJvZHJpZ28gSGVybmFuZGV6IE1lbmRpZXRhIiwiZW1haWwiOiJqYWNvYm9oZXJuYW5kZXptZW5kaWV0YTdAZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwibWF0cmljdWxhIjoiMjAxODJpdGkwMTEifQ.Fe8Zg8276quH4YmKI8mXUdokKlAco1S-8g9XrH0zXzA"
const tokenALumno = "BEARER eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MTY4ZmM4NzFhMWE3ZTYxZjkwMDAwMDEiLCJleHAiOjE2MzQyNzIwNDQxNDgsInVzZXJuYW1lIjoiQ2VzYXIgTGltYSBJcGF0emkiLCJlbWFpbCI6ImNlc2FyQGdtYWlsLmNvbSIsInJvbGUiOiJBbHVtbm8iLCJtYXRyaWN1bGEiOiIyMDE4Mml0aTA5MCJ9.sKDHaQ2FLCKpAvBVNtJh70tlYQXT8ikJoaPg5xOm2to"
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
        server.get('/api/v1/auth/get')
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
        server.put('/api/v1/auth/update-user/6168e3f008acb90027000002')
            .expect('Content-Type', /json/)
            .set('Authorization', token)
            .send(bodyUpdate)
            .expect(200, done);
    });
});