import {Router} from "express";
import productController from "../controller/product-controller";
import multer from  'multer';
const upload = multer();

export const router = Router();
router.get('/list',productController.showListBook)
router.get('/create',productController.showCreateBook);
router.post('/create',upload.none(),productController.createBook);