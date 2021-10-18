import express from "express";
import {middlewares} from 'middleware'
import multer from "config/multer";
import {addImage} from 'controllers/images.controller';
const router = express.Router();

/*SI*/router.post('/add',multer,middlewares.ensureAuthenticated,addImage);

export default router
//2000000 size