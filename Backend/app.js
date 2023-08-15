require('dotenv').config();
const express = require('express');

const cors = require("cors")

const connectTODb = require('./config/db.js')

const app = express();

// express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use(cors())


//init connect to DB

connectTODb()

const userRoutes = require('./routes/userRouts.js')

app.use('/', userRoutes);

module.exports = app;