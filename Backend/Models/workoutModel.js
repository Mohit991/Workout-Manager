//Creating schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//workoutSchema is like a table 
const workoutSchema = new Schema({
    //property 1
    title: {
        type: String,
        required: true
    },
    //property 2
    reps: {
        type: Number, 
        required: true
    },
    //property 3
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

//creating a model based on the schema
module.exports = mongoose.model('Workout', workoutSchema)