import request from 'supertest';
import {serverTest,token} from '../src/utils/constantes'
var server = request(serverTest);

describe('API carreras',()=>{
    test('Should return json and array',function(done){
        server.get('/api/v1/carrera/get-all')
        .expect('Content-Type', /json/)
        .set('Authorization', token)
        .expect(200,done)
    });
});