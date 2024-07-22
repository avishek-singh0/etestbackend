const express = require("express");
const cors = require('cors');
const userRoute = require('./routes/userRoute')
const app = express();


// Middleware

app.use(cors());
app.use(express.json());



//Mounting routes
app.use('/user',userRoute);

app.use((req, res, next) => {
    console.log('Hello from Middleware ');
    next();
});


module.exports = app; 