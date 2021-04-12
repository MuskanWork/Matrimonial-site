const mongoose = require('mongoose');
const validator = require('validator');


const uploadProfile = new mongoose.Schema({
    image: {
        type: String
    }
})

const uploadImg = new mongoose.model('uploadImg', uploadProfile);
module.exports = uploadImg;