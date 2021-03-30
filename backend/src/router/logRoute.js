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
        const passSearch = await LogUser.findOne({password})
        const emailSearch = await LogUser.findOne({email})
        // console.log(emailSearch.email);
        // console.log(email);
        // console.log(passSearch.password);
        // console.log(password);

        if(emailSearch){
            if(password === passSearch.password)
            {
                console.log("success");
                res.status(200).send("Login succesfull").redirect("/profile");
                
            }else{
                console.log("wrong pass")
                res.send("incorrect password");
            }
        }else{
            console.log("user not found");
            res.send("user not found");
        }
          console.log("finished");
        } catch (e) {
            res.status(400).send(e);
        }
    })
        //  const useremail = await LogUser.find(email);
        // res.send(useremail);
        //  console.log(useremail);
        
        //  console.log(email);
        // const e = emailSearch
        // console.log(e);
        // if(e ===  email){
           
        //     res.staus(201).send("login successful");
        //     console.log("login Successfull"); 
        // }
        // else{
        //     res.send("invalid");
        // }
        // res.status(201).send(userLog);             
   



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