const express = require('express');

const cros = require('cors');

const connectToDatabase = require("./config/dbConnection.js")

const {userRoute } = require("./routes/User.route.js");


require("dotenv").config();

const app = express();

app.use(cros());
app.use(express.json())    
app.use("/", userRoute)

app.listen(process.env.PORT,async() => {
    await connectToDatabase()
    console.log("servsr running on PORT NO: ",process.env.PORT);
})