import express from "express";
import {updateMatricula,updatePassword} from 'controllers/client.controller';
import {middlewares} from 'middleware'
const router = express.Router();

/*SI*/router.put('/update-password/:id',middlewares.ensureAuthenticatedAdmin,updatePassword);
/*SI*/router.put('/update-matricula/:id',middlewares.ensureAuthenticatedAdmin,updateMatricula);

export default router;