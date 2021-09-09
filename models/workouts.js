const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for the workout"
    },
    value: {
        type: 
}
})

//view and track daily workouts, 
//view and log multiple workouts "findMany"? 'updateMany? 
//track by name, type, weight, sets, reps, and duration...distance traveled**//



//creates a variable that holds the workout schema information in the models folder titled workouts
const Workouts = mongoose.model('workouts', workoutSchema)
module.exports = Workouts; //exports the workouts varialbe that has the model info