import express from "express";

const router = express.Router();


/**
 * @swagger
 * /api/v1/hola:
 *   get:
 *       summary: Get hola
 *       description: mostrar si funciona
 * 
 */
router.get('/hola', (req, res) => {
    res.send('<h1>works</h1>')
});

export default router;