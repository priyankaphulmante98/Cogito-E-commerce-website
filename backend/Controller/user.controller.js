const { json } = require('express')
const bcrypt = require("bcrypt");
const user = require('../model/user.model')

exports.getUsers = async(req, res) => {
try {
    const users = await user.find()
    res.status(200).json(users)

} catch (error) {
    console.log(error)
}
}

exports.signupUsers = async(req, res) => {
    const {image, name, email, password} = req.body
    try {

        bcrypt.hash(password, 4 , async function(err, hash) {
            // Store hash in your password DB.
            const users =  await user.create({image, name, email, password:hash});
            console.log(hash);
            res.status(200).json(users)
        });
        
    } catch (error) {
        console.log(error)
        
    }
}

exports.loginUsers = async(req,res) => {

    try {
       
        
    } catch (error) {
        cnonsole.log(error)

    }

}







