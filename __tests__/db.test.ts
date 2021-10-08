import { pg,connectDB } from '../src/db/connect';
import { config } from 'dotenv';
beforeAll(() => {
    config();
});


describe('DataBase', () => {
    test('Should connect to database', (done) => {
       const conection =  connectDB()
       expect(conection).toBeTruthy();
       done()
    });
})