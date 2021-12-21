const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema({
    full_name : {
        type : String,
        required : true,
    }, 
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    }, 
    tags : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
}, {
    timestamps : true
})
 userSchema.pre("save", async function(next){
     if(!this.isModified("password")){
         next()
     }
     const salt = bcrypt.genSalt(10)
     this.password = await bcrypt.hash(this.password, salt)
 } )
const User = mongoose.model("Users", userSchema)

module.exports = {User}