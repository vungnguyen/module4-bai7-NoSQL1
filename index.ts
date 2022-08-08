import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import { router } from './src/routes/productRouter';

const PORT = 3000;
const app = express();
app.set('view engine', 'ejs');
app.set('views','./src/views/');
mongoose.connect('mongodb://localhost:27017/product').then(()=>{
    console.log('connect success');
}).catch(()=>{
    console.log('connect error');
})
app.use(bodyParser.json());
app.use('', router);


app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
});