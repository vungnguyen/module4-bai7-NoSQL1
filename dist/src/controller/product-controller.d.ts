import { Request, Response } from "express";
declare class ProductController {
    showListBook: (req: Request, res: Response) => Promise<void>;
    showCreateBook: (req: Request, res: Response) => Promise<void>;
    createBook: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
