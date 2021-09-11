//add routes to the stats page and other html documents from the public folder

const app = require('express').Router()
const path = require ('path')

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

app.get('/stats', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

app.get('/exercise', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})




module.exports = app