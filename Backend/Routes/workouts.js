const express = require('express')

const {
    getWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth') 

const router = express.Router()

//below routes are protected using this auth below. 
router.use(requireAuth)

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