const mongoose=require('mongoose')

let Datamodel=mongoose.Schema({
    title:String,
    img:String,
    video:String
})

const Data=mongoose.model("data",Datamodel)

module.exports={
    Data
}
