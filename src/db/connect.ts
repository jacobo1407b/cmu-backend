import { Pool } from 'pg';
import chalk from 'chalk';
import { config } from 'dotenv';

export class DB {
    public static pg: Pool;
    constructor() {
        if (process.env.NODE_ENV === "test") {
            config();
        }
        const pgConf: any = {
            user: process.env.DB_USER || "dev",
            host: process.env.DB_HOST || "localhost",
            database: process.env.DB_NAME || "cmu",
            password: process.env.DB_PASSWORD || "1986",
            port: process.env.DB_PORT || 5432
        };
        pg = new Pool(pgConf);
        DB.pg = pg;
        if (process.env.NODE_ENV != "test") {
            console.log(chalk.blue('INFO: ') + chalk.green(`Connecting to Postgres at ${pgConf.host}:${pgConf.port} as a user '${pgConf.user}'`))
        }
    }

    testConnect(): Promise<boolean> {
        let text = "SELECT * FROM df.users"
        return new Promise((resolve, reject) => {
            DB.pg.query(text, function (err, result) {
                if (err) reject(err);
                resolve(true)
            })
        })
    }
}
export let pg = DB.pg;
