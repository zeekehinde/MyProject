const express = require("express")
const app = express()
var connection_url = "mongodb+srv://zainabkehinde15:zainab@cluster0.ncct6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const port = 3600
const mongoose = require("mongoose")
mongoose.connect(connection_url).then(()=>{console.log('database connected')}).catch((errro) =>{console.log(errro)})


app.get("", (req, res)=>{
    res.send("welcome to the server")
})


app.listen(port, ()=>{
    console.log("server is running at port 3600")
})