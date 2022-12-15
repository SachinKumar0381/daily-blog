const express = require("express");
const bcryptjs = require("bcryptjs");

const Authmodel = require("../models/auth.model");

const signupRoute = express.Router();

signupRoute.post("/",async(req,res)=>{
    const {name,email,password} = req.body;
    await bcryptjs.hash(password,5,function(err,hash){
        if(err)
        {
            return res.send("Invalid Details")
        }
        const pass = new Authmodel({name,email,password:hash});
        pass.save();
        return res.send("Signup Successful");
    })
});

module.exports = signupRoute;