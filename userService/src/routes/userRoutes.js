import express from 'express';
const userRouter=express.Router();
import verifyToken from '../middleware/verifyToken.js';
import {getAllUser} from '../controller/userController.js'
userRouter.post('/user',verifyToken,getAllUser)



export default userRouter;