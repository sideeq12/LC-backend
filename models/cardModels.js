const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    image : String,
    heading : String,
    details : String,
    price : String,
    email : String,
    social_link : String,
})