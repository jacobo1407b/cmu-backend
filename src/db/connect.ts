import { Pool } from 'pg';
import chalk from 'chalk';


export let pg: Pool;

export function connectDB() {
    const pgConf: any = {
        user: process.env.DB_USER || "dev",
        host: process.env.DB_HOST || "localhost",
        database: process.env.DB_NAME || "cmu",
        password: process.env.DB_PASSWORD || "1986",
        port: process.env.DB_PORT || 5432
    };
    pg = new Pool(pgConf);
    pg.connect()
        .then(() => {
            if (process.env.NODE_ENV != "test") {
                console.log(chalk.blue('INFO: ') + chalk.green(`Connecting to Postgres at ${pgConf.host}:${pgConf.port} as a user '${pgConf.user}'`))
            }
            return true
        })
        .catch(err => {
            throw err
        })
    return true;
}
