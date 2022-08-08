import {Request, Response} from "express";
import {Product} from "../model/product";

 class ProductController{
    showListBook = async (req: Request, res: Response) =>{
        try {
            let limit: number ;
            let offset: number;
            //không có tham số thì set limit =3;offset =0;
            if(!req.query.limit || !req.query.offset){
                limit = 3;
                offset = 0;
            }else{
                limit = parseInt(req.query.limit as string);
                offset = parseInt(req.query.offset as string);
            }
            let product = await  Product.find().limit(limit).skip(limit*offset);
            res.render('product/list',{
                products: product
            })
        }catch (e) {
          res.render('error')
        }

    }
    showCreateBook = async (req: Request, res: Response) =>{
        res.render('product/create')
    }
    createBook = async (req: Request, res: Response) =>{
        try {
            const productNew = new Product(req.body)
            const product = await productNew.save();
            if(product){
                res.redirect('/list')
            }
        }catch (err) {
            console.log(err);
        }
    }
}
export default new ProductController();