const express = require('express');
const app = express();
require('./database/conn');
const path = require('path');
const port = process.env.PORT || 8001;


app.use(express.static("public"));


app.get("/", (req , res)=> {
    res.send("hello from home page");
})

app.get("/about", (req , res)=> {
    res.send("hello from about page");
});

app.get("/contact", (req , res)=> {
    res.send("hello from contact page");
});

app.listen(8000 , ()=>{
    console.log("8001 is working")
})