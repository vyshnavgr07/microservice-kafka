import express from 'express'
import {placeOrder}  from '../controllers/orderController.js'

const oderRouter=express.Router();



oderRouter.post('/orders',placeOrder)





export default oderRouter;

