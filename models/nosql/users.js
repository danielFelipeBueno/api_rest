const mongoose = require('mongoose');

const UsersScheme = new mongoose.Schema(
    {
        first_name:{
            type:String
        },
        last_name:{
            type:String
        },
        age:{
            type:Number
        },
        url_profile:{
            type:String
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('Users', UsersScheme);