const {UserModel} = require('../models/User.modal.js')

// Register user

exports.registerUser = async(req,res) => {
    const {name,email,oassword} = req.body;

    try {
        // creating a doc in dbms
        await UserModel.create({...req.body})
        res.status (200).send({msg:"user registered successfully"})
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}

// user login

exports.loginUser = async(req,res) => {
    const {email,password} = req.body;

    try {
        const userData = await UserModel.findOne({email});
        if(userData) {
            // checking Password
            if(userData.password == password) {
                res.status(200).send({msg:"User Login successfully"})
            } else{
                res.status(401).send({msg: "Enter worng password"})
            }
        } else{
            res.status(404).send({msg: "No Account Find"})
        }
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}