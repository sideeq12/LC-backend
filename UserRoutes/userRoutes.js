const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const bcrypt = require("bcryptjs")
const myUsers = require("../models/userModel")
const generateToken = require("../utils/generateToken")

router.post("/signup", async (req, res) =>{
    let email = req.body.email

    // Firstly checking if User exist
    const userExist = await myUsers.findOne({email})
    if(userExist){
            console.log("User already exist" , userExist)
            res.json({ userData : userExist,
            result : "used"})
    }else{
        console.log("Hasing initiated")
        bcrypt.hash(req.body.password, 10, function(err, hash) {
            // Store hash in your password DB.

            if(!err){
                const signedUpUser = new myUsers({
                    full_name : req.body.full_name,
                    email : req.body.email,
                    password : hash,
                    Faculty : req.body.Faculty,
                    Gender : req.body.gender,
                    image : req.body.image,
                    tags : req.body.tags ,
                    user_description  : "",
                    token : generateToken(email)
                })
                signedUpUser.save()
                .then(data =>{
                    console.log("added successfully")
                    res.json({userData : data, result : "success"})
                })
                .catch(err => {
                    res.json(err)
                })
            }else{
                console.log(err)
            }
        });
    }
})


// Get request
router.post("/user", async(req, res)=>{
    const email = req.body.email
    const password = req.body.password
    const userExist = await myUsers.findOne({email})
    if(userExist){
        checkUser(email, password)
        async function checkUser(email, password) {
            const match = await bcrypt.compare(password, userExist.password);
        
            if(match) {
                res.json({ userData : userExist,
                message : "correct"})
            }else{
                res.json({
                    message : "incorrect"
                })
            }
        }
    }else {
        res.json({
            message : "user_not_found"
        })
    }
})
module.exports = router;