exports.registerDataValidate=(req,res,next) => {
    const {name,email,password} = req.body;

    if(req.body && email && password) {
        next()
    } else {
        res.status(404).send({msg: "all input field are riquired"})
    }
}