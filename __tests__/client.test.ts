import request from 'supertest';
var server = request('http://localhost:3000');
export const token = "BEARER eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MTY4ZTNmMDA4YWNiOTAwMjcwMDAwMDIiLCJleHAiOjE2MzQyNjY0ODc5MTgsInVzZXJuYW1lIjoiSmFjb2JvIFJvZHJpZ28gSGVybmFuZGV6IE1lbmRpZXRhIiwiZW1haWwiOiJqYWNvYm9oZXJuYW5kZXptZW5kaWV0YTdAZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwibWF0cmljdWxhIjoiMjAxODJpdGkwMTEifQ.Fe8Zg8276quH4YmKI8mXUdokKlAco1S-8g9XrH0zXzA"

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
})