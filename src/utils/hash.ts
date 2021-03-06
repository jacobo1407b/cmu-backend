import * as bcrypt from 'bcryptjs';
export class Hash {
    encryptPassword = async (password: string): Promise<string> => {
        const salt = await bcrypt.genSalt(10);
        const hash = bcrypt.hash(password, salt);
        return hash;
    }
    matchPassword = async (password: string, hash: string): Promise<boolean> => {
        return await bcrypt.compare(password, hash);
    }
}
const {encryptPassword,matchPassword} = new Hash()
export {
    encryptPassword,
    matchPassword
}