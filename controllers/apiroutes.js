const app = require("express").Router()

const db = require('../models')
//add routes for the workout database in this file and the other js files in the public folder

//CRUD Methods  Create, Read, Update, Delete
//CREATE WORKOUT, post
 
//Update/add workout, put
//read/view workouts, get

app.get('/api/workouts', (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout)
    })
})

app.post('/api/workouts', (req, res) => {
    db.Workout.create(req.body).then(
        workoutdb => {
            res.json(workoutdb)
        }
    )
})


app.put('/api/workouts/:id', (req, res) => {
    db.Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } }).then(workoutdb => {
        res.json(workoutdb)
    })
})
module.exports = app


