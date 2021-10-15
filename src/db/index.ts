import { Pool } from 'pg';
import chalk from 'chalk';
import { initDB, schema } from './init';
import { queryClear } from './clear-db';
import { text, values } from './init-carreras';
import {initUser} from './init-user';
import { config } from 'dotenv';



config();

const pgConf: any = {
    user: process.env.DB_USER || "dev",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "cmu",
    password: process.env.DB_PASSWORD || "1986",
    port: process.env.DB_PORT || 5432
};
let pg = new Pool(pgConf);

pg.query(schema).then(() => {
    console.log(chalk.blue('INFO:') + "Init schema");
    pg.query(initDB).then(res => {
        console.log(chalk.blue('INFO: ') + 'Database inited');
        pg.query(queryClear).then(res => {
            console.log(chalk.blue('INFO: ') + 'The database has been cleared');
            pg
                .query(text, values)
                .then(res => {
                    console.log(chalk.blue('INFO: ') + 'df.carreras has been initialize');
                    initUser(pg)
                })
                .catch(e => {
                    throw e
                })
        }).catch(err => {
            throw err
        })
    }).catch(err => {
        throw err
    })
}).catch(err => {
    throw err
})