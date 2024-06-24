const mongoose = require("mongoose")

const contactModel = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    desc:{type:String},
})
const CM = mongoose.model("contact",contactModel)
module.exports = CM