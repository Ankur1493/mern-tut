const { default: mongoose } = require("mongoose");
const Workout = require("../models/workoutStructure")

//get all workouts
exports.getAllWorkOuts = async (req,res)=>{

    const workouts = await Workout.find({}).sort({createdAt: -1});

    res.status(200).json(workouts)
}

//get single workout
exports.getSingleWorkout = async (req,res)=>{

    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: "wrong id, no such workout"
        })
    }

    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error: "No such workout"});
    }
    res.status(200).json({
        status: "success",
        data:{
            workout
        }
    })

}

//create a workout
exports.createNewWorkout = async (req,res)=>{
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

//delete workout

exports.deleteWorkout  = async (req,res)=>{

    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: "wrong id, no such workout"
        })
    }
    
    const workout = await Workout.findOneAndDelete({_id: id});
    
    if(!workout){
        return res.status(404).json({
            status: "fail",
            message: "no such workout"
        })
    }
    res.status(200).json({
        status: "success",
        message: "you have deleted this workout",
        data: {
            workout
        }
    })

}

//update workout
exports.updateWorkout  = async (req,res)=>{

    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: "wrong id, no such workout"
        })
    }
    const workout = await Workout.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout){
        return res.status(404).json({
            status: "fail",
            message: "no such workout"
        })
    }

    res.status(200).json({
        status: "success",
        message: "you have updated this workout",
        data: {
            workout
        }
    })

}



