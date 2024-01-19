const mongoose=require("mongoose")

const Course=mongoose.model("course",new mongoose.Schema({
    name:String,
    desc:String,
    price:String,
    image:String,
    LinkImage:String
}))
module.exports={Course}