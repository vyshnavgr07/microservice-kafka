import app from "./app.js";
import env from 'dotenv';
env.config();
const port=process.env.PORT;




app.listen(port,()=>{
    console.log(`server is listening on ${port}`)
})
