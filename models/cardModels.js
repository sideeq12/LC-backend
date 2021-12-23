const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    image : String,
    description : String,
    price : String,
    uploader_email : String,
    social_link : String,
})
const myUsers = mongoose.model("cards", cardSchema)

module.exports = myUsers