import userModel from '../models/usermodel.js'

//add in user cart 
const addToCart=async(req,res)=>{
    try{
        let useData=await userModel.findOne({_id:req.body.userId});
        let cartData=await useData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1;
        }
        else{
            cartData[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"added to cart!"});
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"});
    }
}

//remove from user cart
const removeFromCart=async()=>{

}

//fetch user cart data
const getCart=async()=>{

}

export {addToCart,removeFromCart,getCart}