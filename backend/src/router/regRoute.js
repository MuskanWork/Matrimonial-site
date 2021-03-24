const express = require('express');
const router = new express.Router();
const RegUser = require("../modals/register")


router.post("/register", async (req, res) => {
    try {
        const user = new RegUser(req.body)

        const createuser = await user.save();
        res.status(201).send(createuser);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get("/register", async (req, res) => {
    try {

        const usersData = await RegUser.find();
        res.status(200).send(usersData);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get("/register/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const userData = await RegUser.findById(_id);

        if (!userData) {
            return res.status(404).send();
        } else {
            res.status(200).send(userData);
        }

    } catch (e) {
        res.status(400).send(e);
    }
})

router.patch("/register/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const userDataUpdate = await RegUser.findByIdAndUpdate(_id, req.body, {
            new: true
        });

        if (!userDataUpdate) {
            return res.status(404).send();
        } else {
            res.status(200).send(userDataUpdate);
        }

    } catch (e) {
        res.status(400).send(e);
    }
})

router.delete("/register/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const userDataDelete = await RegUser.findByIdAndDelete(_id);

        if (!userDataDelete) {
            return res.status(404).send();
        } else {
            res.status(200).send(userDataDelete);
        }

    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;