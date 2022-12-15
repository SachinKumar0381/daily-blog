const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
});

const Authmodel = new mongoose.model("auth",authSchema);

module.exports = Authmodel;