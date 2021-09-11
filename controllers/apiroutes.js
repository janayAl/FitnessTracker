const express = require('express')
const { db } = require('../models/workouts')
const app = express()
const port = process.env.PORT || 3000


//add routes for the workout database in this file and the other js files in the public folder

//CRUD Methods  Create, Read, Update, Delete
//CREATE WORKOUT, post
//Update/add workout, put
//read/view workouts, get

app.get('/api/workouts', req, res) => {
    db.workout.find({}).then(dbworkout => {

    })
}

app.post('/workouts, (req, res) => {
    res.send()
})
app.listen(port, () => {

})
