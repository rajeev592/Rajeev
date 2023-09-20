const express = require('express')

const app = express();
const authRoute = require('./router/authRoute.js');
const databaseconnect = require('./config/databaseConfig.js');

databaseconnect();
app.use(express.json())


app.use('/api/auth/', authRoute );





app.use("/", (req,res) => {
    res.status(200).json({data: "I LOVE YOU SinghG"})
});

module.exports = app;