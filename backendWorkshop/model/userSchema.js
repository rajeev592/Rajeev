const mongoose = require('mongoose');

const {schema} = mongoose;

const JWT = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'User name is Reqyired'],
        minLength: [5, 'Name must be at lest 5 char'],
        mexLength: [50, 'Name must be less than 5 char'],

    },
    email: {
        type: String,
        required: [true,'email is Required'],
        unique: true,
        lowercase: true,
        unique: [true, 'already rigstered']


    },
    password: {
        type: String,
        select: false
    },
    forgotPasswordToken: {
        type: String
    },
    forPasswordExpiryDate: {
        type: Date
    }
}, {
    timestamps:true
});

userSchema.method  = {
    jwtToken(){
        return JWT.sign(
            {id: this._id, email: this.email},
            process.env.SECRET,
            {expiresIn: '24h'}
        )
    }
}

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;