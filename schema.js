const mongoose = require('moongoose')

const profileSchema=new mongoose.Schema({
    firstName:{
        type:String,
        trim:true
    },
    lastName:{
        type:String,
        trim:true
    },
    age:{
        type:Number
    }
});

const userSchema=new mongoose.Schema({
    username:{
         type:String,
         required:[true, 'Username is required'],
         unique:true,
         trim:true,
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
    },
    roles:{
        type: String,
        default:['user']
    },
    profile:profileSchema,
    lastLogin:{
        type: Date
    }
},
{
    timestamps:true
});

module.exports=mongoose.model('User', userSchema);