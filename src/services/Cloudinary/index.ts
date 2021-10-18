import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { v4 as uuidv4 } from 'uuid';
import chalk from 'chalk';

type UploadImage = {
    upload: UploadApiResponse
    name?: string
}
export class Cloud {
    public static cloudStorage = cloudinary;
    constructor() {
        Cloud.cloudStorage.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET
        })
        console.log(chalk.blue('INFO: ') + 'storage ' + chalk.green(process.env.CLOUDINARY_CLOUD_NAME) + ' has been initialized')
    }
}
class Storage {
    async uploadImage(base64: string, type: string): Promise<UploadImage> {
        var nameImage = uuidv4();
        var uploadStr = `data:${type};base64,${base64}`;
        //buffer.toString('base64')
        const upload = await this.upload(uploadStr, nameImage)
        //const upload = await Cloud.cloudStorage.uploader.upload(uploadStr, { public_id: `cmu/${nameImage}` });
        return {
            upload,
            name: nameImage
        }
    }
    async updateImage(base64: string, nameImage?: string, type?: string): Promise<UploadImage> {
        var uploadStr = `data:${type};base64,${base64}`;
        const uploader = await this.upload(uploadStr, nameImage);
        return {
            upload: uploader,
            name: nameImage
        }
    }

    private async upload(base64: string, nameImage?: string): Promise<UploadApiResponse> {
        return await Cloud.cloudStorage.uploader.upload(base64, { public_id: `cmu/${nameImage}` });
    }
}

export default new Storage();//si