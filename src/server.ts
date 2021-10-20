import express from "express";
import chalk from 'chalk';
import http from 'http';
import { middlewares } from 'middleware';
//apis
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'
import { swaggerOptions } from 'docs/swagger';
//loaders y middleware
import useLoaders from "config/loaders";
import useSocket from 'config/socket';
import { config } from 'dotenv';
//import router
import createRouter from "routes";

config();
const app = express();
const server = http.createServer(app)
const port = parseInt(process.env.PORT!) || 3000

//settings
useLoaders(app, port);
app.use(express.static('public'));
const swaggerDocs = swaggerJsDoc(swaggerOptions(port));
//rutas

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
createRouter(app)

//err
app.use(middlewares.errorHandler);
app.use(middlewares.notFoundHandler);


server.listen(app.get('port'), () => {
    console.log(chalk.blue('INFO: ') + chalk.green(`Server started at http://localhost:${app.get('port')}`))
});
useSocket(app,server)