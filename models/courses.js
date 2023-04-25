const mongoose = require('mongoose');

const Schema = mongoose.Schema

const courseSchema = new Schema({
    name:{type:String,required:true},
    institutionId:{type:String,required:true},
    level:{type:String,required:true},
    duration:{type:String,required:true},
    price:{type:String,required:true},
    status:{type:Boolean,required:true,default:true},

})

const courseModel = mongoose.model('courses',courseSchema,'courses')


module.exports = courseModel;