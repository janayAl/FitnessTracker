const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create new schema with the fields (object), name, type, weight, sets, reps, duration and distance if cardio
const workoutSchema = new mongoose.Schema({
    workoutName: {
        type: String,
        trim: true,
        required: "Enter a name for the workout"//does it need a boolean instead?
    },
    type: {
        type: String,
        trim: true,
        required: "Enter the type of workout" //does it need a boolean instead?
    },
    weight: {
        type: Number,
        trim: true,
        required: "Enter the type of workout" //does it need a boolean instead?
    },
    sets: {
        type: Number,
        trim: true,
        required: true //does it need a boolean instead?
    },
    reps: {
        type: Number,
        trim: true,
        required: true //does it need a boolean instead?
    },
    duration: {
        type: Number,
        trim: true,
        required: true //does it need a boolean instead?
    },
    distance: {
        type: Number,
        trim: true,
        required: true//does it need a boolean instead?
    },


})

//view and track daily workouts, 
//view and log multiple workouts "findMany"? 'updateMany? 
//track by name, type, weight, sets, reps, and duration...distance traveled**//



//creates a variable that holds the workout schema information in the models folder titled workouts
const Workouts = mongoose.model('workouts', workoutSchema)
module.exports = Workouts; //exports the workouts varialbe that has the model info