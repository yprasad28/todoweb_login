const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET

async function registerUser(req,res){
    let {firstName,lastName,username,password} = req.body;
    try {
        const duplicate = await User.find({username});
        if(duplicate && duplicate.length > 0){
            return res.status(400).send("Username already exists");
        }
        let user = new User({firstName,lastName,username,password});
        const result = await user.save();
        console.log(result);
        res.status(201).send({message:"user successfully registered"})

    } catch(err){
        console.error(err);
        return res.status(500).send("Server Error");
    }
    
}

async function loginUser(req,res){
    try{
        let {username, password} = req.body;
        let user = await User.findOne({username});
        if(!user){
            return res.status(400).send("Invalid username");
        }
        const isPasswordValid = await user.comparePassword(password);
        if(!isPasswordValid){
            return res.status(400).send("Invalid password");
        }
        let token = jwt.sign({_id:user._id}, secretKey,{expiresIn:'1h'});
        let finalData = {
            userId : user?._id,
            username: user?.username,
            firstName: user?.firstName,
            lastName: user?.lastName,
            token
        }
        res.send(finalData);
    } catch(err) {
        console.error(err);
        return res.status(500).send("Server Error");
    }
}

const AuthController = {
    registerUser,
    loginUser 
}

module.exports = AuthController;