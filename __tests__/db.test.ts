import {DB} from '../src/db/connect';

describe('Conexion DB',()=>{
    test('Shoult return true if connect is successfuly', (done)=>{
        const db = new DB();
        db.testConnect().then(result=>{
            expect(result).toBeTruthy();
            done()
        })
    })
})