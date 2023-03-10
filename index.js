const express = require("express");
var cors = require('cors');


const signupRoute = require("./routes/auth.route");
const loginRoute = require("./routes/login.route");
const connection = require("./config/db");
const profileRoute = require("./routes/profile");

const app = express();
app.use(cors());

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello sachin")
})
app.use("/signup",signupRoute);
app.use("/login",loginRoute);
app.use("/profile",profileRoute);


app.listen(process.env.PORT || 8080,async()=>{
    await connection;
    console.log("server started");
})