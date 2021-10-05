import express from "express";
import chalk from 'chalk';

const app = express();


//settings
app.set('port', 3000);
app.set('json spaces', 2);
//middlewares

//rutas

//err


app.listen(app.get('port'), () => {
    console.log(chalk.blue('INFO: ')+chalk.green(`Server started at http://localhost:${app.get('port')}`))
});