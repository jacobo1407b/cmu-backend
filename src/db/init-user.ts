import {Pool} from 'pg'
import {encryptPassword} from '../utils/hash';
import chalk from 'chalk';
const mongoid = require('mongoid-js')

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


export async function initUser(pg:Pool) {
    const has = await encryptPassword('1234567890');
    const id = mongoid()
    const values = [id,
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
    await pg.query(text, values);
    console.log(chalk.blue('INFO: ')+chalk.blue('20182iti011 has been initialize with id: '+id));
}