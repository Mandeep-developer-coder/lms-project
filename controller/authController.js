const User=require("../model/user")
const bcrypt=require("bcrypt")
const generateToken=require("../utils/generateToken")
exports.signup=async(req,res)=>{
    const {userName,fatherName,email,address,batch,course,semester,rollNumber,number,password}=req.body
    try{
        const firstName=userName.trim().split(" ")[0].toLowerCase()
        const customId=`${rollNumber}.${firstName}`
        const exist=await User.findById(customId)
        if(exist){
            return res.status(400).json({message:"User already exist",success:false})
        }
        const hashPassword=await bcrypt.hash(password,10)
        const user=new User({_id:customId,userName,fatherName,email,address,batch,course,semester,rollNumber,number,password:hashPassword})
        await user.save()
        res.status(201).json({message:"Signup successful",token:generateToken(user),user:{ id: user._id,
    userName: user.userName,
    email: user.email,
    course: user.course,
    semester: user.semester,
    role: user.role},success:true})
    }
    catch(err){
         res.status(500).json({ message: "Server error",  error: err.message,success:false });
    }
   
}
