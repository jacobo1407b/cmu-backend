import request from 'supertest';
var server = request('http://localhost:3000');
export const token = "BEARER eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MTY4ZTNmMDA4YWNiOTAwMjcwMDAwMDIiLCJleHAiOjE2MzQyNjY0ODc5MTgsInVzZXJuYW1lIjoiSmFjb2JvIFJvZHJpZ28gSGVybmFuZGV6IE1lbmRpZXRhIiwiZW1haWwiOiJqYWNvYm9oZXJuYW5kZXptZW5kaWV0YTdAZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwibWF0cmljdWxhIjoiMjAxODJpdGkwMTEifQ.Fe8Zg8276quH4YmKI8mXUdokKlAco1S-8g9XrH0zXzA"

describe('API carreras',()=>{
    test('Should return json and array',function(done){
        server.get('/api/v1/carrera/get-all')
        .expect('Content-Type', /json/)
        .set('Authorization', token)
        .expect(200,done)
    });
});