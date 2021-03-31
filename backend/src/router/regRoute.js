const express = require('express');
const router = new express.Router();
const RegUser = require("../modals/register")
const uploadImg = require("../modals/uploadData")
const bcrypt = require('bcrypt');
const emailMsg = require('./mail');
const multer = require('multer');

router.use('/public', express.static(__dirname+'/public'));

const storage = multer.diskStorage({
    destination : function(req, file , cb){
        cb(null , './public/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
});

const upload = multer({storage : storage});

router.post("/register", async (req, res) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)

    try {
        const user = new RegUser({
            username : req.body.username,
            email : req.body.email,
            password : securePassword,
            dob : req.body.dob,
            height : req.body.height,
            weight : req.body.weight,
            matrialStatus : req.body.matrialStatus,
            motherToungue : req.body.motherToungue,
            religion : req.body.religion,
            gender : req.body.gender,
            city : req.body.city,
            pincode : req.body.pincode,
            mobile : req.body.mobile
        })

        const createuser = await user.save();
        emailMsg(req.body.email);

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


router.post("/upload", upload.single("file"), async (req, res)=>{
    try{
        const url = req.protocol + '://' + req.get('host')
        console.log(req.file);
        const picture = new uploadImg({
            image : '/public/' +req.file.filename
        })
         const pic= await picture.save();
        res.status(200).send(pic);
        const recentPic = await uploadImg.find();
        recentPic.exec(function(err,data){
            if(err) throw err;

            res.render({records : data});
        })
        console.log("succesfull upload")
    }catch(e){
        res.status(400).send(e);
    }
})

router.get("/upload", async (req, res) => {
    try {

        const picData = await uploadImg.find();
        res.status(200).send(picData);
        picData.exec(function(err,data){
            if(err) throw err;

            res.render({records : data})
        })
        
    } catch (e) {
        res.status(400).send(e);
    }
})

router.route('/register/_id').get((req, res) => {
    RegUser.find(_id,(error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
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