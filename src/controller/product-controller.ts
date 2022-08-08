import {Request, Response} from "express";
import {Product} from "../model/product";

 class ProductController{
    showListBook = async (req: Request, res: Response) =>{
        let product = await  Product.find();
        res.render('product/list',{
            products: product
        })
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