import request from 'supertest';
var server = request('http://localhost:3003');
const body ={
    matricula:"20182iti011",
    password:"1234567890"
}

describe('API Auth', function () {
        it('Should return json as default data format', function (done) {
            server.post('/api/v1/auth/login')
                .expect('Content-Type', /json/)
                .send(body)
                .expect(200, done);
        });
});