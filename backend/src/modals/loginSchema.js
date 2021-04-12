const mongoose = require('mongoose');
const validator = require('validator');

const UserLoginSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    }

})

const LogUser = new mongoose.model('LogUser', UserLoginSchema);

module.exports = LogUser;