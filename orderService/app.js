import express from 'express';
import oderRouter from './src/routes/orderRoutes.js';
import { consumeOrderMessages } from './kafka/consumer.js';
const app=express();

app.use(express.json());


app.use('/api',oderRouter)



consumeOrderMessages()










export default app