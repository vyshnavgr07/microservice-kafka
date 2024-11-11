import Order from "../models/orderSchema.js";


export const placeOrder=async(req,res)=>{
    try {
        const data=req.body;
        console.log(data,'datttattaa')
        if(!data){
            res.status(400).json({
                message:"credentials missing"
            })
        }
   const order=await new Order(data);
   await order.save()

    if(order){
        res.status(200).json({
            message:"order created succesfully",
            order
        })
    }


      } catch (error) {
        console.log(error)
    }
}