const express=require("express")
const router=express.Router()
const authController=require("../controller/authController")
// const verifyToken=require("../middleware/authMiddleware")
router.post("/signup",authController.signup)

module.exports=router