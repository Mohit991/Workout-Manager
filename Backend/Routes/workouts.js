const express = require('express')
const router = express.Router()
const {
    getWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

//get all workouts
router.get('/', getWorkouts)

//get a single workout
router.get('/:id', getSingleWorkout)

//post a new workout
router.post('/', createWorkout)

//post a new workout
router.delete('/:id', deleteWorkout)

//update a workout
router.patch('/:id', updateWorkout)

//export the router 
module.exports = router