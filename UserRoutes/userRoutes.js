const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
// import {registerUser} from "../controller/userController"
const myUsers = require("../models/userModel")

router.post("/signup", (req, res) =>{
    console.log(req.body)
    console.log(myUsers)
    const signedUpUser = new myUsers({
        full_name : req.body.full_name,
        email : req.body.email,
        password : req.body.password,
        tags : req.body.tags 
    })
    console.log(req.body)
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