import { pg, connectDB } from './connect';
import chalk from 'chalk';
const mongoid = require('mongoid-js')
connectDB();

setTimeout(clearDb, 7000)

function clearDb() {
    const text = 'INSERT INTO df.carrera (id_carrera,carrera,abreviatura) VALUES ($1,$2,$3)'
    const values = [mongoid(), 'INGENIERIA EN PROCESOS Y OPERACIONES INDUSTRIALES', 'IPOI']
    pg
        .query(text, values)
        .then(res => {
            console.log(chalk.blue('INFO: ') + 'df.carreras has been initialize');
            process.exit()
        })
        .catch(e => {
            throw e
        })
}
