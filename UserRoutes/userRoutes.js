const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const bcrypt = require("bcryptjs")
const myUsers = require("../models/userModel")
const cardLayer = require("../models/cardModels")
const generateToken = require("../utils/generateToken");
const { response } = require("express");

router.post("/signup", async (req, res) =>{
    let email = req.body.email

    // Firstly checking if User exist
    const userExist = await myUsers.findOne({email})
    if(userExist){

            res.json({ userData : userExist,
            result : "used"})
    }else{
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

router.post("/cards", (req, res)=>{
    console.log(req.body)
    const card = new cardLayer({
        uploader_email : req.body.uploader_email,
        description : req.body.description,
        image : req.body.image,
        social_link : req.body.social_link,
        price : req.body.price
    })
    card.save()
    .then((data)=>{
        console.log("added succssfully")
        res.json({data : data})})
    .catch(err => console.log("not added"))
})


router.post("/dashboard", (req, res)=>{
    let email = req.body.email
    myUsers.findOne({ email}, function(err, response){
        if(!err){
            res.json({
                data : response,
                message : "success"
            })
        }else{
            res.json({
                message : "not found"
            })
        }
    })

})

router.post("/cardList", (req, res)=>{
    let email = req.body.email
    cardLayer.find({email}, function(err, response){
        if(!err){
            res.json({
                message : "success",
                data : response
            })
            console.log(response)
        }else{
            console.log(err)
            res.json({
                message : "error"
            })
        }
    })
})
router.get("/allCard", (req, res)=>{
    console.log("this connection  is initiated !")
    cardLayer.find({}, function(err, response){
        if(!err){
            res.json({
                data : response,
                message : "success"
            })
        }else{
            res.json({
                message : "error"
            })
        }
    })
})
module.exports = router;