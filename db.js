const mongoose=require('mongoose')

const connect=mongoose.connect('mongodb+srv://prem:shakti@cluster0.79txyol.mongodb.net/mdatas?retryWrites=true&w=majority')

module.exports={
    connect
}