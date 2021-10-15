import { readFileSync } from 'fs';

var pathp = process.env.NODE_ENV==='production'? "build/db/cmu_db.sql" : 'src/db/cmu_db.sql'
var paths = process.env.NODE_ENV==='production'? "build/db/initSchema.sql" : 'src/db/initSchema.sql'

export const initDB = readFileSync(pathp, 'utf-8');
export const schema = readFileSync(paths,"utf-8");
