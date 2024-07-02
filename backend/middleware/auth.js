import jwt from "jsonwebtoken"

const authMiddleware=async(req,res,next)=>{
    const {token}=req.headers;
     //const token = req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(401).json({success:false,message:"Token not found,Login again" })
    }
    try {
        const tokendecode=jwt.verify(token,`${process.env.JWT_SECRET}`)
        req.body.userId=tokendecode.id
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({success:false,message:"Token not valid" })
    }
}
export default authMiddleware;