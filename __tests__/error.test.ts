import Error404 from '../src/services/Error/Error404';
import Error401 from '../src/services/Error/Error401';
import Error403 from '../src/services/Error/Error403';
import InfoError from '../src/services/Error/ErrorInfo';

describe('Errors',()=>{
    it('Should resolve with 404 status code',()=>{
        const err404 = new Error404('Not found');
        expect(err404.name).toEqual('Error404')
    })
    it('Should resolve with 401 status code',()=>{
        const err404 = new Error401('');
        expect(err404.name).toEqual('Error401')
    })
    it('Should resolve with 403 status code',()=>{
        const err404 = new Error403('Desable');
        expect(err404.name).toEqual('Error403')
    })
    it('Should resolve with InfoError',()=>{
        const err404 = new InfoError('InfoError');
        expect(err404.name).toEqual('InfoError')
    })
});