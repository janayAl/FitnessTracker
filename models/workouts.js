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



//creates a variable that holds the workout schema information in the models folder titled workouts
const Workouts = mongoose.model('workouts', workoutSchema)
module.exports = Workouts; //exports the workouts varialbe that has the model info