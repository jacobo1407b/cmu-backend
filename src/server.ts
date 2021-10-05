import express from "express";
import chalk from 'chalk';
import { middlewares } from 'middleware';
//apis
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'
import {swaggerOptions} from 'docs/swagger';
//import router
import hola from 'routes/index';

const app = express();
const port = parseInt(process.env.PORT!) || 3000

//settings
app.set('port', port);
app.set('json spaces', 2);
const swaggerDocs = swaggerJsDoc(swaggerOptions(port));
//middlewares

//rutas

app.use('/docs', swaggerUi.serve,swaggerUi.setup(swaggerDocs))
app.use('/api/v1',hola)
//err
app.use(middlewares.errorHandler);
app.use(middlewares.notFoundHandler);


app.listen(app.get('port'), () => {
    console.log(chalk.blue('INFO: ')+chalk.green(`Server started at http://localhost:${app.get('port')}`))
});