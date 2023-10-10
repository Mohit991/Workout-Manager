require('dotenv').config()
const express = require('express')
const workoutsRoutes = require('./Routes/workouts')
const userRoutes = require('./Routes/user')
const mongoose = require('mongoose')
const cors = require('cors')
//express app
const app = express()

//middleware
app.use(express.json())
app.use(cors(
    {
        origin: ["https://workout-manager-mp55.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
))

//using the workout routes written in workouts.js
//routes will only fire if url gas /api/workouts in the front
//eg localhost/4000/api/workouts + routes in workouts.js
app.use('/api/workouts', workoutsRoutes)
app.use('/api/user', userRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listening for requests
    app.listen(process.env.PORT, () => {
        console.log(`Connected to DB & listening on port ${process.env.PORT}`)
    })
})
.catch((error) =>{
    console.log("Some Error Occured")
    console.log(error);
})
