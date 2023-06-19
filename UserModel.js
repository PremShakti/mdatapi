const mongoose=require('mongoose')

let Datamodel=mongoose.Schema({
    title:String,
    img:String,
    video:String,
    releaseDate:Number,
    language:String,
    movieOrigin:String
})

const Data=mongoose.model("data",Datamodel)

module.exports={
    Data
}
