"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
class ProductController {
    constructor() {
        this.showListBook = async (req, res) => {
            try {
                let limit;
                let offset;
                if (!req.query.limit || !req.query.limit) {
                    limit = 3;
                    offset = 0;
                }
                else {
                    limit = parseInt(req.query.limit);
                    offset = parseInt(req.query.offset);
                }
                const product = await product_1.Product.find().limit(limit).skip(limit * offset);
                ;
                res.render('product/list', {
                    products: product
                });
            }
            catch (e) {
                res.render('error');
            }
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