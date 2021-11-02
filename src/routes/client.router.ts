import express from "express";
import { updateMatricula, updatePassword, getAllAlumnos, deleteUser } from 'controllers/client.controller';
import { getEnfermero } from 'controllers/client.controller';
import { middlewares } from 'middleware'
const router = express.Router();

/*SI*/router.put('/update-password/:id', middlewares.ensureAuthenticatedAdmin, updatePassword);
/*SI*/router.put('/update-matricula/:id', middlewares.ensureAuthenticatedAdmin, updateMatricula);
/*SI*/router.get('/get-alumnos', middlewares.ensureAuthenticatedAdmin, getAllAlumnos);
/*SI*/router.get('/get-enfermero', middlewares.ensureAuthenticatedAdmin, getEnfermero);
/*SI*/router.delete('/delete-user/:id', middlewares.ensureAuthenticatedAdmin, deleteUser);
export default router;