const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const User = require("../models/user");

exports.signup = (req,res) => {
    console.log(req.body);
    const user = new User(req.body);
    user.save((err,user) => {
        if(err){
            return res.status(400).json({
                err : 'bad request'
            })
        }else{
            return res.status(200).json({
                message : 'user created',
                email : user.email,
                name : user.name,
                id : user._id
            })
        }
    })
}

exports.signin = (req,res) => {
    // console.log(req.body);
    let {email,password} = req.body;
    User.findOne({email},(err,user)=>{
        if(err || !user){
            return res.status(400).json({
                error : 'user not exist'
            })
        }
        if(!user.authenticate(password)){
            return res.status(401).json({
                error : "invalid credentials"
            })
        }
        // create token
        const token = jwt.sign({_id : user._id},process.env.SECRET);
        // put token in cookie
        res.cookie("token",token,{expire : new Date() + 99999 });
        const {_id,email,name,role} = user;
        return res.status(200).json({
            token,
            user : {
                _id,name,role,email
            }
        });
    })
}

exports.signout = (req,res) => {
    res.clearCookie("token");
    res.status(200).json({
        message : "user signout successfully"
    });
}


