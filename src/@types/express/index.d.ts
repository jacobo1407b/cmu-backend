export {};

declare global{
    namespace Express {
        interface Request {
            file?:Multer.File
        }
        interface User{
            sub: string,
            exp: number | Date,
            username: string,
            matricula: string,
            email:string,
            role?:string 
        }
    }
}