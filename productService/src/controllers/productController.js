import Product from "../models/product.js"
import {sendTestMessage}  from '../../kafka/producer.js'
export const addProduct=async(req,res)=>{
    try {
        const data=req.body;
        
        if(!data){
            res.status(400).json({
                message:'product data is incomplete'
            })
        }
        
        const newproduct=await new Product(data);
        await newproduct.save();
    console.log(newproduct)
        if(newproduct){
            sendTestMessage()
            res.status(201).json({
                message:'product created succesfully',newproduct
            })
        }
    } catch (error) {
        console.log(error,'err')
    }
}


export const getAllProduct=async(req,res)=>{
    try {
        const allproduct=await Product.find();
    
        if(!allproduct){
            res.status(400).json({
                message:'product fetching failed'
            })}

            res.status(200).json({
                message:'data fetched succesfully',
                allproduct
            })
    } catch (error) {
        console.log(error,'err')
    }
}


export const getProductById=async(req,res)=>{
    try {
        const id=req.params.id
        const singleproduct=await Product.findById(id);
    
        if(!singleproduct){
            res.status(400).json({
                message:'product fetching failed'
            })}

            res.status(200).json({
                message:'data fetched succesfully',
                singleproduct
            })
    } catch (error) {
        console.log(error,'err')
    }
}