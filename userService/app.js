import express from 'express';
import mongoose from 'mongoose';
import authRouter  from './src/routes/authRoutes.js'
import morgan from 'morgan'
import env from 'dotenv';
import cors from 'cors'
import userRouter from './src/routes/userRoutes.js';
import cookie from 'cookie-parser'
const app=express();
app.use(cookie())
app.use(express.json())
env.config()
app.use(morgan('dev'))

app.use(cors({
origin: 'http://localhost:5173', 
credentials: true 
}
))
const port =process.env.PORT;
mongoose.connect('mongodb://127.0.0.1:27017/userservice')
.then(()=>console.log('db is connected'))
.catch((err)=>console.log(err,'errr'))

app.use('/api',authRouter)
app.use('/api/user',userRouter)


app.listen(port,()=>{
    console.log(`server is listening on port${port}`)
})
