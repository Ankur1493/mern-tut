const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutStructure")


const getAllWorkOuts = (req,res)=>{
    res.status(200).json({
        message: "you have accessed all routes"
    })
}
const createNewWorkout = async (req,res)=>{
    const {title,load,reps} = req.body;

    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({
            error,
            status: "failed",
            message: "failure failure"
        })
    }
    
}

const getSingleWorkout  = (req,res)=>{

    const id = req.params.id*1;
    res.status(200).json({
        id,
        status: "success",
        message: "you have gotten this single workout"
    })

}
const deleteWorkout  = (req,res)=>{

    const id = req.params.id*1;
    res.status(200).json({
        id,
        status: "success",
        message: "you have deleted this workout"
    })

}
const updateWorkout  = (req,res)=>{

    const id = req.params.id*1;
    res.status(200).json({
        id,
        status: "success",
        message: "you have updated this workout"
    })

}


router.route("/")
    .get(getAllWorkOuts)
    .post(createNewWorkout)

router.route("/:id")
    .get(getSingleWorkout)
    .delete(deleteWorkout)
    .patch(updateWorkout)

module.exports = router;