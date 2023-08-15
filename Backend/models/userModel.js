const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is requires'],
        trim: true,
        maxLength: [20, 'Name must be less then 20char']
        
    },
    email: {
        type: String,
        required: [true, 'Email is requires'],
        unique: true
    }
})

module.exports = mongoose.model("User", userSchema)