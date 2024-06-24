const mongoose = require("mongoose")

const projectModel = mongoose.model({
    title:{type:String},
    desc:{type:String},
    link:{type:String},
    img:{type:String},
})

module.exports = mongoose.schema("projects",projectModel)