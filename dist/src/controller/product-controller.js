"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
class ProductController {
    constructor() {
        this.showListBook = async (req, res) => {
            let product = await product_1.Product.find();
            res.render('product/list', {
                products: product
            });
        };
        this.showCreateBook = async (req, res) => {
            res.render('product/create');
        };
        this.createBook = async (req, res) => {
            try {
                const productNew = new product_1.Product(req.body);
                const product = await productNew.save();
                if (product) {
                    res.redirect('/list');
                }
            }
            catch (err) {
                console.log(err);
            }
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map