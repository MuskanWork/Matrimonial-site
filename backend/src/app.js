const express = require('express');
const app = express();
require('./database/conn');
const path = require('path');
const port = process.env.PORT || 8003;


// app.use(express.static("public"));

app.get("/", (req , res)=> {
    res.send("hello from home page");
})

app.post("/register" , (req,res) =>{
    res.send("hello from register")
})


app.listen(port , ()=>{
    console.log(`connection is working ${port}`);
})