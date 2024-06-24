
const mongoose = require("mongoose")
const connect = mongoose.connect(process.env.DB)
connect.then(r=>{return r }).then(e=>console.log("connected with database")).catch((e)=>console.log("not connected with database"))
