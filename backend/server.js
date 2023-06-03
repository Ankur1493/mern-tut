require("dotenv").config();
const express = require("express");
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

//listening for requests
const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`listening on port: ${port} `);
})