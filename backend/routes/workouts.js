const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

const {getAllWorkOuts,getSingleWorkout,createNewWorkout,deleteWorkout,updateWorkout} = controllers;

router.route("/")
    .get(getAllWorkOuts)
    .post(createNewWorkout)

router.route("/:id")
    .get(getSingleWorkout)
    .delete(deleteWorkout)
    .patch(updateWorkout)

module.exports = router;