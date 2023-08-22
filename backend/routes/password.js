const express=require("express")
const path=require("path")
const router=express.Router();
const controller=require('../controllers/password');
const auth=require('../middleware/auth');

router.route("/sendMail").post(auth.authenticate, controller.sendMail);
module.exports=router;