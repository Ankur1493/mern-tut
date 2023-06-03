require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const workoutRouters = require("./routes/workouts")
//express app created
const app = express();

//middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})

//this below middleware is used to get the body from requests
app.use(express.json());

app.use("/api/workouts",workoutRouters)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listening for requests
        const port = process.env.PORT
        app.listen(port, ()=>{
            console.log(`connected to database listening on port: ${port} `);
        })        
    })
    .catch((err)=>{console.log(err);})
