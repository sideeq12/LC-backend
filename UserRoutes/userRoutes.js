const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
// import {registerUser} from "../controller/userController"
const myUsers = require("../models/userModel")

router.post("/signup", async (req, res) =>{
    let email = req.body.email
    // Firstly checking if User exist
    const userExist = await myUsers.findOne({email})
    if(userExist){
            console.log("User already exist" , userExist)
            res.json({ userData : userExist,
            result : "used"})
    }else{
        const signedUpUser = new myUsers({
            full_name : req.body.full_name,
            email : req.body.email,
            password : req.body.password,
            Faculty : req.body.Faculty,
            Gender : req.body.gender,
            image : req.body.image,
            tags : req.body.tags 
        })
        signedUpUser.save()
        .then(data =>{
            res.json({userData : data, result : "success"})
        })
        .catch(err => {
            res.json(error)
        })
    }
})


// Get request
router.get("/users", (req, res)=>{
    res.json({
        data : "Data not found !"
    })
})
module.exports = router;