const express=require('express')
const cors=require('cors')
const { connect } = require('./db')
const { Data } = require('./UserModel')
require('dotenv').config()
const app=express()
app.use(express.json())
app.use(cors())
const PORT=process.env.PORT


app.get('/',async(req,res)=>{

try {
    let data= await Data.find()
    
res.status(200).send(data)
} catch (error) {
    res.status(400).json({message:error.message})
}

})

app.post('/push',async(req,res)=>{

    try {

        let data= new Data(req.body)
        await data.save()
        let data2= await Data.find()
    res.status(200).send(data2)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    
    })



app.listen(PORT||8080,()=>{
try {
    connect
    console.log(`port in runnig 8080`)
    
} catch (error) {
    console.log(error)
}

})

