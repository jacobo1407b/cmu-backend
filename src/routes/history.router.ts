import express from "express";
import {getAllHistory,getHistoryAlumno} from 'controllers/history.controller';

import {middlewares} from 'middleware'
const router = express.Router();


/**SI*/router.get('/all',middlewares.ensureAuthenticatedAdmin,getAllHistory);
/**SI*/router.get('/alumno',middlewares.ensureAuthenticated,getHistoryAlumno);
 export default router;