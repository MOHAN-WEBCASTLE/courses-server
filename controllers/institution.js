const institutionModel = require('../models/institution')

exports.createInstitution = (req,res,next)=>{
    let insData = req.body;

    let institution = new institutionModel(insData);
    institution.save().then((ins_res)=>{
        res.send(ins_res)
    })
    .catch((err)=>{
        res.send(err);
    })

} 

exports.getinstitutions = (req,res,next)=>{

    institutionModel.find({},{__v:0})
    .then((ins_res)=>{
        res.send(ins_res)
    })
    .catch((err)=>{
        res.send(err)
    })

}

exports.updateInstitution = (req,res,next) =>{
   
    let id = req.params.id;
    let ins_Data = req.body;
    
    institutionModel.findByIdAndUpdate(id,ins_Data,{new: true})
   .then((ins_res)=>{
    res.send(ins_res)
    })
   .catch((err)=>{
    res.send(err)
    })

}


exports.filterInstitution = (req,res,next) =>{
    var filter ={
    };
    if(req.query.status)
    {
       filter.status = req.query.status;
    }
    if(req.query.name)
    {
    filter.name = {$regex: req.query.name, '$options' : 'i'};
    }
    // console.log(filter);
    institutionModel.find(filter)
    .then((course_res)=>{
        res.send(course_res);
    })
    .catch((error)=>{
        res.send(error);
    })

}