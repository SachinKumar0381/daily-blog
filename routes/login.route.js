const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Authmodel = require("../models/auth.model");

const loginRoute = express.Router();

loginRoute.post("/",async(req,res)=>{
    const {email,password} = req.body;
    const data = await Authmodel.findOne({email});
    if(!data)
    {
       return res.send("Invalid Details");
    }
    const hpass = data.password;
    await bcryptjs.compare(password,hpass,function(err,resl){
        if(err)
        {
            return res.send("Invalid Details");
        }
        if(resl)
        {
            const id = data.id;
            return res.send(id);
        }
        else
        {
            return res.send("Invalid Details");
        }
    })
})


module.exports = loginRoute;