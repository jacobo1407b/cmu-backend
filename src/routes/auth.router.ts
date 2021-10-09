import express from "express";
import {auth,createAdm,createAlum,createEnferm, getUser} from 'controllers/user.controller';
import {updateUser} from 'controllers/user.controller';
const router = express.Router();



router.get('/login',auth);
router.post('/create-admin',createAdm);
router.post('/create-alum',createAlum);
router.post('/create-enf',createEnferm);
router.get('/get/:id',getUser);
router.put('/update-user:id',updateUser)


export default router