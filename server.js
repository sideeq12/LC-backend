const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, ()=>{
    console.log("database connected!")
})

app.get("/", (req, res)=>{
    res.json({
        data : {
            Avater : "iamgeLink",
            Full_name : "Waheed Sodiq",
            Email : "email",
            tags : [ "writing service", "cooking", "Designing"]
        }
    })
})

app.listen(8080, ()=>{
    console.log("server running on the port 8080")
})