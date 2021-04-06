const express = require('express');
const router = new express.Router();
const LogUser = require("../modals/loginSchema");
const RegUser = require("../modals/register");
const bcrypt = require('bcrypt');
 const axios = require('axios');

router.post("/login", async (req, res) => {
    
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)
   
    try {
        const user = new LogUser({
            email : req.body.email,
            password : securePassword
        })
       
        const email = req.body.email;
        const password = req.body.password;
        //  const userLog = await user.save();
        // const passSearch = await RegUser.findOne({password})
        const emailSearch = await RegUser.findOne({email})
         console.log(emailSearch.email);
         console.log(email);
         console.log(password);
        console.log(emailSearch.password)
        if(emailSearch){
            const pass = await bcrypt.compare(password, emailSearch.password);
            console.log(pass)
            if(pass)
            {
                console.log("success");
                res.status(200).send("Login succesfull");
                res.json({message:'Login Successfull'})
                
            }else{
                console.log("wrong pass")
                res.status(400).send("incorrect password");
                res.json({message:'incorrect password'})
            }
        }else{
            console.log("user not found");
            res.status(400).send("user not found");
            res.json({message:'incorrect email id'})
        }
          console.log("finished");
        } catch (e) {
            res.status(400).send(e);
        }
    })



router.get("/login", async (req, res) => {
    try {

        const usersLog = await LogUser.find();
        res.status(200).send(usersLog);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get("/login/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const userLog = await LogUser.findById(_id);

        if (!userLog) {
            return res.status(404).send();
        } else {
            res.status(200).send(usersLog);
        }

    } catch (e) {
        res.status(400).send(e);
    }
})

router.patch("/login/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const userLogUpdate = await LogUser.findByIdAndUpdate(_id, req.body, {
            new: true
        });

        if (!userLogUpdate) {
            return res.status(404).send();
        } else {
            res.status(200).send(userLogUpdate);
        }

    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;