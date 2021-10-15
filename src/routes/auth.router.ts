import express from "express";
import {auth,createAdm,createAlum,createEnferm, getUser} from 'controllers/user.controller';
import {updateUser} from 'controllers/user.controller';
import {middlewares} from 'middleware'
const router = express.Router();



/*si*/router.post('/login',auth);
/*si*/router.post('/create-admin',middlewares.ensureAuthenticatedAdmin,createAdm);
/*si*/router.post('/create-alum',middlewares.ensureAuthenticatedAdmin,createAlum);
/*si*/router.post('/create-enf',middlewares.ensureAuthenticatedAdmin,createEnferm);
/*si*/router.get('/get',middlewares.ensureAuthenticated,getUser);
/*si*/router.put('/update-user/:id',middlewares.ensureAuthenticatedAdmin,updateUser)


export default router