import express from 'express';
import {addProduct,getAllProduct,getProductById}   from '../controllers/productController.js'

const productRouter=express.Router();


productRouter.post('/product',addProduct)
.get('/product',getAllProduct)
.get('/product/:id',getProductById)


export default productRouter;