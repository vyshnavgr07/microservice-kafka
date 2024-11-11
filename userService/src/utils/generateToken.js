import jwt from 'jsonwebtoken';
const generateToken = (user,res) => {
  try {
    if (!user || !user.id) {
      throw new Error("User data is missing or invalid");
    }

    const token = jwt.sign(
      { id: user._id}, 
      process.env.SECRET,
      { expiresIn: "1h" }
    );

    if(token){
      res.cookie('token',token,{
        httpOnly:true
      })
    }
   
  } catch (error) {
    console.error("Error generating token:", error.message);
    return null; 
  }
};

export default generateToken;
