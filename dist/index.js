"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const productRouter_1 = require("./src/routes/productRouter");
const PORT = 3000;
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views/');
mongoose_1.default.connect('mongodb://localhost:27017/product').then(() => {
    console.log('connect success');
}).catch(() => {
    console.log('connect errors');
});
app.use(body_parser_1.default.json());
app.use('', productRouter_1.router);
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map