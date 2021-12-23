const express = require("express");
const app = express();
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const routesUrl = require("./UserRoutes/userRoutes");
const req = require("express/lib/request");

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, ()=>{
    console.log("database connected!")
})
app.use(express.json())
app.use(cors())
app.use("/api", routesUrl)


app.listen(8080, ()=>{
    console.log("server running on the port 8080")
})