import express from 'express';
const app=express()
import productRouter from './src/routes/productRoutes.js';
import morgan from 'morgan';
import connectDb from './src/dbconfig/connectDb.js';
app.use(express.json())
app.use(morgan('dev'))
connectDb()
app.use('/api',productRouter)














export default app;