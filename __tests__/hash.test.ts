import {encryptPassword,matchPassword} from '../src/utils/hash';
var cryp:string =""
const password:string = "1234567890"
describe('Hash password', () => {
    it('Should create a hash password', async () => {
       const hash = await encryptPassword(password);
       cryp = hash;
       expect(hash).toMatch(cryp)
    })

    it('Should compare password and hash', async ()=>{
        const compare = await matchPassword(password,cryp);
        expect(compare).toBeTruthy();
    })
});