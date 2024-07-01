import foodmodel from "../models/foodModel.js"
import fs from "fs"
// add food
const addFood=async(req,res)=>{



    let image_filename=`${req.file.filename}`
    const food=new foodmodel({
        name:req.body.name,
        price:req.body.price,
        image:image_filename,
        description:req.body.description,
        category:req.body.category,

    })
    try {
        await food.save()
        res.status(200).json({success:true,message:"food added successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

//all food list
const listFood=async (req,res)=>{
    try {
        const  foods=await foodmodel.find({});
        res.status(200).json({success:true,data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}
// rempove food
const removeFood=async(req,res)=>{
    try {
        const food=await foodmodel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodmodel.findByIdAndDelete(req.body.id)
        res.status(200).json({success:true,message:"food removed successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }

}
export {addFood,listFood,removeFood}