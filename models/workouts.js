const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const workouts =mongoose.model('workouts, {
//workoutName:....etc.

// })
//create new schema with the fields (object), name, type, weight, sets, reps, duration and distance if cardio
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date(new Date().setDate(new Date().getDate())),
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter the type of workout" //does it need a boolean instead?
            },
            weight: {
                type: Number,
                trim: true,
                default: 0,
                required: "Enter the type of workout" //does it need a boolean instead?
            },
            sets: {
                type: Number,
                trim: true,
                default: 0,
                required: true //does it need a boolean instead?
            },
            reps: {
                type: Number,
                trim: true,
                default: 0,
                required: true //does it need a boolean instead?
            },
            duration: {
                type: Number,
                default: 0,
                required: true //does it need a boolean instead?
            },
            distance: {
                type: Number,
                default: 0,
                required: true//does it need a boolean instead?
            }
        }
    ]

})


//workout.save().then() => {
//console.log(workout).catch (error)
// }

//view and track daily workouts, 
//view and log multiple workouts "findMany"? 'updateMany? 
//track by name, type, weight, sets, reps, and duration...distance traveled**//



//creates a variable that holds the workout schema information in the models folder titled workouts
const Workout = mongoose.model('Workout', workoutSchema)
module.exports = Workout; //exports the workouts varialbe that has the model info