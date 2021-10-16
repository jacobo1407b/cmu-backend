import express from "express";
import {getAllCarreras} from 'controllers/carrera.controller';
import {middlewares} from 'middleware'
const router = express.Router();

/**si*/router.get('/get-all',middlewares.ensureAuthenticated,getAllCarreras);

 export default router;