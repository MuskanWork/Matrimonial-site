const mongoose = require('mongoose');
const validator = require('validator');

const UserLoginSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: [true, "Email is already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    password: {
        type: String,
        required: true,
    }

})

const LogUser = new mongoose.model('LogUser', UserLoginSchema);

module.exports = LogUser;