import jwt from 'jsonwebtoken';
const verifyToken = async (req,res,next) => {
const {token}=req.cookies;
if(!token)
return res.status(401).json({
    message:'no token provides'
})

try {
    const decoded=await jwt.verify(token,process.env.SECRET);
    if (Buffer.isBuffer(decoded.id)) {
        decoded.id = decoded.id.toString('hex'); // Or use 'base64' if preferred
      }
 req.user = decoded;
    
next()
} catch (error) {
    console.log(error,'err')
}
}

export default verifyToken