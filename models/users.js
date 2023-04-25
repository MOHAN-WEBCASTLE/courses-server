const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
   name:{type:String,required:true},
   password:{type:String,required:true},
   email:{type:String,required:true},
   phone:{type:String,required:true},
   status:{type:Boolean,required:true,default:true},
   user_type:{type:String,required:true}

})

const userModel = mongoose.model('users',userSchema,'users');

module.exports = userModel;