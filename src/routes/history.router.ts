import express from "express";
import { getAllHistory, getHistoryAlumno, getHistoryHoy } from 'controllers/history.controller';

import { middlewares } from 'middleware'
const router = express.Router();


/**SI*/router.get('/all', middlewares.ensureAuthenticatedAdmin, getAllHistory);
/**SI*/router.get('/alumno', middlewares.ensureAuthenticated, getHistoryAlumno);
/**SI*/router.get('/hoy', middlewares.ensureAuthenticatedEnfer, getHistoryHoy);
export default router;