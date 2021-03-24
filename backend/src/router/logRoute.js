const express = require('express');
const router = new express.Router();
const LogUser = require("../modals/loginSchema");
const bcrypt = require('bcrypt');

router.post("/login", async (req, res) => {
    
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)
    
    try {
        const user = new LogUser({
            email : req.body.email,
            password : securePassword
        })

        const userLog = await user.save();
        res.status(201).send(userLog);
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