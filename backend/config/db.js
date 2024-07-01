import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sahillawaniya4:sahilrao313@cluster0.owy7ngm.mongodb.net/food-del').then(()=>console.log("db connected"))
}