import { readFileSync } from 'fs';
import { pg, connectDB } from './connect';
import chalk from 'chalk';

const initDB = readFileSync("src/db/cmu_db.sql", 'utf-8');
const schema = readFileSync('src/db/initSchema.sql',"utf-8");

connectDB()

setTimeout(initialize, 7000)

function initialize() {
    pg.query(schema).then(res=>{
        console.log(chalk.blue('INFO:')+ "Init schema");
        pg.query(initDB).then(res => {
            console.log(chalk.blue('INFO: ') + 'Database inited');
            process.exit();
        }).catch(err => {
            throw err
        })
    }).catch(err => {
        throw err
    })
}