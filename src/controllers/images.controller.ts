import { Request, Response, NextFunction } from 'express';
import strorage from 'services/Cloudinary';
import client from 'services/Client';
import user from 'services/User/user.service';

export async function addImage(req: any ,res: Response, next: NextFunction) {
    try {
        if (req.file?.size! < 2000000) {
            const id:any = req.user?.sub!
            const userData = await user.getById(id);
            const file: any = req.file?.buffer.toString('base64');
            const typeImg: any = req.file?.mimetype;
            if (userData.url === "") {
                const add = await strorage.uploadImage(file, typeImg);
                const resolve = await client.updateImage(id, add.upload.secure_url, add.name);
                delete resolve.password;
                res.status(200).json({ resolve, msg: "Imagen agregada con exito", error: false })
            } else {
                const update = await strorage.updateImage(file, userData.name_image, typeImg);
                const resolve = await client.updateImage(id, update.upload.secure_url, update.name);
                delete resolve.password
                res.status(200).json({ resolve, msg: "Imagen actualizada con exito", error: false });
            }
        } else {
            res.status(200).json({ msg: "La Imagen debe tener un tamaño menor a 2 MB", error: true,resolve:null});
        }
    } catch (error) {
        res.status(500).json(error)
    }

}//si