const express = require("express")
const app = express()
var connection_url = "mongodb+srv://zainabkehinde15:zainab@cluster0.ncct6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const  bodyParser =require("body-parser") 
const cors = require("cors")
const authRoutes = require("./routes/userroutes")

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use("/api/auth", authRoutes)

const port = 3600
const mongoose = require("mongoose")
mongoose.connect(connection_url).then(()=>{console.log('database connected')}).catch((errro) =>{console.log(errro)})


app.get("", (req, res)=>{
    res.send("welcome to the server")
})


app.listen(port, ()=>{
    console.log("server is running at port 3600")
})