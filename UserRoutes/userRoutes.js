const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
// import {registerUser} from "../controller/userController"
const myUsers = require("../models/userModel")

router.post("/signup", (req, res) =>{
    let email = req.body.email
    // Firstly checking if User exist
    const userExist = await myUsers.findOne({email}, function(error, response){
        if(error){
            consolo.log("error while checking")
        }else{
            consolo.log("no error while checking")
        }
    }) 

    const signedUpUser = new myUsers({
        full_name : req.body.full_name,
        email : req.body.email,
        password : req.body.password,
        tags : req.body.tags 
    })
    signedUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(err => {
        res.json(error)
    })
})


// Get request
router.get("/users", (req, res)=>{
    res.json({
        data : "Data not found !"
    })
})
module.exports = router;