import { pg, connectDB } from './connect';
import {encryptPassword} from '../utils/hash';
import chalk from 'chalk';
const mongoid = require('mongoid-js')
connectDB();
const text = `
INSERT INTO df.users (
    id_usuario,
    matricula,
    password,
    name_image,
    url,
    nombre,
    a_paterno,
    a_materno,
    correo,
    genero,
    role
) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
`
setTimeout(initUser, 7000);

async function initUser() {
    const has = await encryptPassword('1234567890')
    const values = [mongoid(),
        '20182iti011',
        `${has}`,
        '',
        '',
        'Jacobo Rodrigo',
        'Hernandez',
        'Mendieta',
        'jacobohernandezmendieta7@gmail.com',
        'Masculino',
        'Admin'
    ]
    pg
        .query(text, values)
        .then(res => {
            console.log(chalk.blue('INFO: ')+chalk.blue('20182iti011 has been initialize'));
            process.exit()
        })
        .catch(e => {
            throw e
        })
}