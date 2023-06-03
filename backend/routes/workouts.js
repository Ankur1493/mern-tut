const express = require("express");
const router = express.Router();


const getAllWorkOuts = (req,res)=>{
    res.status(200).json({
        message: "you have accessed all routes"
    })
}
const createNewWorkout = (req,res)=>{
    const workout = req.body;
    res.status(200).json({
        workout,
        message: "you have created a new workout"
    })
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