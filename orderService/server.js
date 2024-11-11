import app from "./app.js";
import env from 'dotenv';
import connectDb from "./dbConnect/dbConnect.js";
env.config()
const port=process.env.PORT

connectDb()



app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})