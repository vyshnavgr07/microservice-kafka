import User from '../modles/userSchema.js'
export const getAllUser=async(req,res)=>{
    try {
        const users=await User.find();
         if(users){
            return res.status(200).json({
             message:'user fetched succesfully',
             users
            })
         }
    } catch (error) {
        console.log(error,'err')
    }
}