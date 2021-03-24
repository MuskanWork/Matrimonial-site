const express = require('express');
const app = express();
require('./database/conn');
const RegUser = require("./modals/register");
const LogUser = require("./modals/loginSchema");
const path = require('path');
const port = process.env.PORT || 8003;
const regRouter = require('./router/regRoute');
const logRouter = require('./router/logRoute');
const cors = require('cors');

// app.use(express.static("public"));

app.use(express.json());
app.use(cors());
app.use(regRouter);
app.use(logRouter);
app.listen(port , ()=>{
    console.log(`connection is working ${port}`);
})