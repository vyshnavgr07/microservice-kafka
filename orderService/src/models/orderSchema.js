import mongoose from "mongoose";

export const orderSchema=mongoose.Schema({
    username:{
        type:String,                                      
        required:true
    },
    products:[{
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Products'
        },
          qty:{
        type:String,
        required:true
        },
        price:{
            type:Number,
            required:true
        }
}]
})


const Order=mongoose.model('Order',orderSchema)

export default Order