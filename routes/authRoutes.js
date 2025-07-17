const express=require("express")
const router=express.Router()
const authController=require("../controller/authController")
// const verifyToken=require("../middleware/authM;iddleware")
router.post("/signup",authController.signup);
router.post ("/login",authController.login);

module.exports=router