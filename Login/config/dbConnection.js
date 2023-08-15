const mongoose = require('mongoose');

const connectToDatabase = async() => {
    mongoose.connect(process.env.DB_URL)
    .then ((con) => {
        console.log("Data base connect successfully");
    })  .catch((err) => {
        console.log("Eroor", err.message);
        process.exit(1)
    })
}
module.exports = connectToDatabase;