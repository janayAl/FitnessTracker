// add express middleware and connections in this file
const express = require('express');

const mongoose = require('mongoose')
//which port are you running? 
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public")); //connects to the information in the public folder

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,

});

// routes
app.use(require("./controllers/apiroutes.js")); 
app.use(require("./controllers/htmlroutes.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
