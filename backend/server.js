require("dotenv").config();
const express = require("express");

//express app created
const app = express();

//middleware
app.use((req,res,next)=>{

    console.log(req.path, req.method);
    next();

})


app.get("/", (req,res)=>{
    res.status(200).json({
        status: "success",
        message: "Welcome to the app"
    })
})


//listening for requests
const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`listening on port: ${port} `);
})