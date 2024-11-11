
export const adminLogin=(req,res)=>{
try {
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({
            message:'email or password is incorrect'
        })
    }

if(process.env.ADMIN_EMAIL==email && process.env.ADMIN_PASSWORD==password){
    
}
} catch (error) {
    
}
}