const express=require('express');
const router=express.Router();
const User=require("../models/User");
const { body,validationResult }= require("express-validator");
const bcrypt=require('bcryptjs');
const jwt=require("jsonwebtoken");
const fetchuser=require("../middleware/fetchuser");

//create a post reuest  for with/api/auth/createuser
router.post('/createuser',[
    body('name','enter a valid name').isLength({min:3}),
    body('email','enter a valid email').isEmail(),
    body('password','enter a password with valid length').isLength({min:5}),
], async (req,res)=>{
    //if there are errors then return the bad errors
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
    //create a new user
    let user=await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error:"this email is already in exsistance"});
    }

    const salt= await bcrypt.genSalt(10);
    const secpass=await bcrypt.hash(req.body.password,salt);
    const JWT_SECRET="anandisagoodb$oy";
     user= await User.create({
        name:req.body.name,
        email: req.body.email,
        password: secpass,
    })
     const data={
        user:{
            id:user.id
        }
     }
     const authtoken=jwt.sign(data,JWT_SECRET);

    // res.json(user);
    res.json(authtoken)

   }catch(error){
    console.error(error.message);
    res.status(500).json("something is happen");
   }

})

//Route 2:-authenticate  a user with post reuest  for with /api/auth/createuser with no login
router.post('/login',[
    body('email','enter a valid email').isEmail(),
    body('password','enter a password with valid length').exists(),
], async (req,res)=>{
    //if there are errors then return the bad errors
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const{email,password}=req.body;

    try{
      const user=await User.findOne({email});
      if(!user){
        return res.status(400).json({error:"please enter a valid credentials"});
      }

      const passwordComapre=await bcrypt.compare(password,user.password);
      if(!passwordComapre){
        return res.status(400).json({error:"please enter a valid credentials"});
      }

      const JWT_SECRET="anandisagoodb$oy";
      const data={
        user:{
            id:user.id
        }
     }
     const authtoken=jwt.sign(data,JWT_SECRET);

    // res.json(user);
    res.json(authtoken)
    

    }catch(error){
        console.error(error.message);
        res.status(500).json("something is happen");
       }

})

//Route 3:-get logged in user detiails
router.post('/getuser',fetchuser , async (req,res)=>{ 
try{
  userId=req.user.id;
  const user= await User.findById(userId).select("-password")
  res.send(user)
} catch(error){
    console.error(error.message);
    res.status(500).json("something is happen");
   }
})

module.exports= router