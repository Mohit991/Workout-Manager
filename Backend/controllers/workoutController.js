const Workout = require('../Models/workoutModel')
const mongoose = require('mongoose')
//get all workouts
const getWorkouts = async (req, res) => {
    //get all the workouts from DB
    //sort by createdAt in desc order
    //user._id was attached in the requireAuth middleware
    //requireAuth was called before these routes, so, the req object has user id etc.
    const user_id = req.user._id 
    const workouts = await Workout.find({user_id}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get a single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params // get id from url

    //check if the id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }
    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

//create new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
    //add document to DB.

    let emptyFields = []
    if(!title){
      emptyFields.push('title')
    }
    if(!load){
      emptyFields.push('load')
    }
    if(!reps){
      emptyFields.push('reps')
    }

    if(emptyFields.length > 0){
      return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }


    try{
        //user._id was attached in the requireAuth middleware
        //requireAuth was called before these routes, so, the req object has user id etc.
        const user_id = req.user._id
        console.log(user_id);
        const workout = await Workout.create({title, load, reps, user_id})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    const workout = await Workout.findOneAndDelete({_id: id})
  
    if(!workout) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
  }
  
// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body }, {new: true})

    if (!workout) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
  }

module.exports = {
    getWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}