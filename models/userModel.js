const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName:{
            type:String,
            required:[true, "please add the user name"]
        },
        email:{
            type:String,
            required:[true, "please add the email"],
            unique: true
        },
        password:{
            type:String,
            required:[true, "please add the password"]
        },
        passwordConfirmation:{
            type:String,
            required:true
        },
        role:{
            type : mongoose.Schema.Types.ObjectId,
            required:true,
        },
        isEmailVerified:{
            type : Boolean,
            default:false,
        }
    },
    {
        timestamps:true,
    }
)
module.exports= mongoose.model("User", userSchema)