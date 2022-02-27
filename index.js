const express = require("express");
const bodyParser = require("body-parser");

const app = express()
const jsonParser = bodyParser.json()

app.get("/",function(req,res){
    res.send("hola")
})

app.listen(3001,()=>{
    console.log("app running on port 3001")
})