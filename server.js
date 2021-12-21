const express = require("express");
const app = express();


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