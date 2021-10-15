
const mongoid = require('mongoid-js')
export const text = 'INSERT INTO df.carrera (id_carrera,carrera,abreviatura) VALUES ($1,$2,$3)'
export const values = [mongoid(), 'INGENIERIA EN PROCESOS Y OPERACIONES INDUSTRIALES', 'IPOI']
