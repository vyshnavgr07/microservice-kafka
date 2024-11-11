import User from '../modles/userSchema.js';
import bcryptjs from "bcryptjs";
import generateToken from '../utils/generateToken.js';

export const userRegistration=async(req,res)=>{
    try {
       const {username,email,password}=req.body;
      if(!username,!email,!password){
            res.status(400).json({message:'inavlid credentials'})
        }
         const salt =bcryptjs.genSaltSync(10);
         const hash=bcryptjs.hashSync(password,salt)
         const newUser=new User({email,username,password:hash})
         await generateToken(newUser._id,res)
         await newUser.save();
          res.status(201).json({message:'login succesfull',newUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'internal server error',error})
    }
}   


export const userLogin=async(req,res)=>{
    try {
       const {email,password}=req.body;
     
       if(!email || !password){
      return res.status(400).json({message:'inavlid credentials'})
        }
        const existUser=await User.findOne({email})
         if(!existUser){
            return  res.status(400).json({message:'no user found'}) 
         }
         const hash=existUser.password;
         const isVariefied=bcryptjs.compare(password,hash)
         if(isVariefied){
            await generateToken(existUser,res)
            return   res.status(200).json({message:'login succesfull',existUser})
         }
       

    } catch (error) {
        console.log(error)
        res.status(500).json({message:'internal server error',error})
    }
} 