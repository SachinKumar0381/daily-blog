const express = require("express");
const Authmodel = require("../models/auth.model");

const profileRoute = express.Router();

profileRoute.get("/:userId",async(req,res)=>{
    const _id = req.params.userId;
    const data = await Authmodel.find({_id});
    res.send(data);
});

module.exports = profileRoute;