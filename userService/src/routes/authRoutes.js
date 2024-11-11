import express from 'express';
const authRouter=express.Router();
import  {userRegistration,userLogin} from "../controller/authController.js"
authRouter.post("/signup",userRegistration)
.post('/login',userLogin)




export default authRouter;