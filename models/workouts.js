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