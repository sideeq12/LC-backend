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
    Faculty : String,
    isVerified :  {
        type : Boolean,
        default : false
    }
})
//     full_name : {
//         type : String,
//         required : true,
//     }, 
//     email : {
//         type : String,
//         required : true,
//         unique : true
//     },
//     password : {
//         type : String,
//         required : true,
//     }, 
//     tags : {
//         type : String,
//         required : true,
//     },
//     description : {
//         type : String,
//         required : true
//     },
//     date : {
//         type : Date,
//         default : Date.now
//     }
// }, {
//     timestamps : true
// })
//  userSchema.pre("save", async function(next){
//      if(!this.isModified("password")){
//          next()
//      }
//      const salt = bcrypt.genSalt(10)
//      this.password = await bcrypt.hash(this.password, salt)
//  } )
const myUsers = mongoose.model("Users", userSchema)

module.exports = myUsers