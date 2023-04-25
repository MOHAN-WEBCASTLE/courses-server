const courseModel = require('../models/courses')
const institutionModel = require ('../models/institution')
exports.createCourse = (req,res,next)=>{
    let courseData = req.body;

    let course = new courseModel(courseData);
    course.save().then((course_res)=>{
      institutionModel.findByIdAndUpdate({_id:courseData.institutionId},{$inc:{courseCount:1}})
      .then(()=>{
        res.send(course_res)
      })
      
    })
    .catch((err)=>{
        res.send(err);
    })

} 

exports.getcourses = (req,res,next)=>{
   let institutionId = req.query.institutionId;
//    console.log(institutionId);
    courseModel.find({institutionId:institutionId},{__v:0})
    .then((course_res)=>{
        res.send(course_res)
    })
    .catch((err)=>{
        res.send(err)
    })

}

exports.updateCourse = (req,res,next) =>{
   
    let id = req.params.id;
    let course_Data = req.body;
    
    courseModel.findByIdAndUpdate(id,course_Data,{new: true})
   .then((course_res)=>{
    res.send(course_res)
    })
   .catch((err)=>{
    res.send(err)
    })

}

exports.filterCourse = (req,res,next) =>{
    let institutionId = req.query.institutionId;
    var filter ={
        institutionId:institutionId
    };

    if(req.query.status)
    {
       filter.status = req.query.status;
    }
    if(req.query.name)
    {
    //    filter.name = {$regex: `/^${req.query.name}/i`};
    filter.name = {$regex: req.query.name, '$options' : 'i'};
    }
    // console.log(filter);
    courseModel.find(filter)
    .then((course_res)=>{
        res.send(course_res);
    })
    .catch((error)=>{
        res.send(error);
    })

}