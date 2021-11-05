import { readFileSync } from 'fs';


var path = "src/db/carreras.sql"
export let text =  readFileSync(path, 'utf8')
