const mongoose = require('mongoose');
const validator = require('validator');

const UserRegisterSchema = new mongoose.Schema({

        username : {
            type: String,
            required : true,
            minlength : 3
        },
            email : {
                type : String,
                required : true,
                unique : [true , "Email is already present"],
                validate(value){
                    if(!validator.isEmail(value)){
                        throw new Error("Invalid Email");
                    }
                }
            },
        password : {
            type : String,
            required : true,
        },
        dob : {
            type: Date,
            required : true,

        },
        mobile : {

            type : Number,
            required : true,
            min : 10,
            
            unique : [true , "number is already present"],
        }

})

const RegUser = new mongoose.model('RegUser' ,UserRegisterSchema );

module.exports = RegUser;