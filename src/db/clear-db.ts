import { pg, connectDB } from './connect';
import chalk from 'chalk';

connectDB();

setTimeout(clearDb, 7000)
const query = `
  TRUNCATE
  df.carrera,
  df.users,
  df.solicitud_medica,
  df.peticion`;

function clearDb() {
    pg.query(query, (err) => {
        if (err) throw err;
        console.log(chalk.blue('INFO: ')+'The database has been cleared');
        process.exit()
      });
}