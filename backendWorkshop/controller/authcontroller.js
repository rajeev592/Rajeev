const UserModel = require("../model/userSchema");
const emailValidator = require("email-validator")

const signup = async (req,res,next) => {
    const {name, email, password,conformpassword} = req.body;
    console.log(name, email, password, conformpassword);

    if (!name ||!email || !password || !conformpassword){
        return res.status(400).json({
            success:false,
            message: "Every feild are required"
        })
    };

    if (password !== conformpassword) {
        return res.status(400).json({
            success:false,
            message: "Pasword not match"
        })
    };

    const validEmail = emailValidator.validate(email);
     
    if (!validEmail){
        return res.status(400).json({
            success:false,
            message: "Plese provid valid email I_D"
        })
    }

try {
    const userInfo = UserModel(req.body);
    const result = await userInfo.save();

return res.status(200).json({
    success: true,
    data: {}
})
} catch (error) {
    if(error === 11000) {
        return res.status(400).json({
            success: false,
            message: "Account already exists with provided Email I_d"
        })
    }
    return res.status(400).json({
        success: false,
        message: error.message
    })
}

   
}


const signin = async (req,res) => {
    const {email,password} = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success:false,
            message: "Every feild is mandatory"
        })
    }

    try {
        const user = await UserModel
        .findOne({email})
        .select('+password');
    
        if (!user || user.password !== password) {
            return res.status(400).json({
                success:false,
                message: "invalid credentials"
            })
        }
    
        const token = user.jwtToken();
        user.password = undefined;
    
        const cookieOption = {
            maxAge: 24 * 60 * 60 *1000,
            httpOnly: true
        };
    
        res.cookie("token",token, cookieOption);
        res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

   
}

module.exports = {
    signup
}