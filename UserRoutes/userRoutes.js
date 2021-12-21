const express = require("express");
const router = express.Router();
// import {registerUser} from "../controller/userController"
import {User } from "./models/userModel"

router.post("/signup", (req, res) =>{
    const signedUpUser = new User({
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