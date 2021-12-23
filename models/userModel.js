const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema

const userSchema = new Schema({
    full_name : String,
    email : String,
    image : String, 
    Gender : String,
    tags : String,
    password : String,
    user_description : String,
    Faculty : String,
    date : {
        type : Date,
        default : Date.now
    },
    isVerified :  {
        type : Boolean,
        default : false
    }
})


//  userSchema.pre("save", async function(next){
//      if(!this.isModified("password")){
//          next()
//      }
//      const salt = bcrypt.genSalt(10)
//      this.password = await bcrypt.hash(this.password, salt)
//  } )
const myUsers = mongoose.model("Users", userSchema)

module.exports = myUsers