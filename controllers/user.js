const userModel = require('../models/users')

exports.registerUser = (req,res,next)=>{
    let userData = req.body;

    let user = new userModel(userData);
    user.save().then((user_res)=>{
        res.send(user_res)
    })
    .catch((err)=>{
        res.send(err);
    })

} 


exports.loginUser = (req,res,next)=>{
    let userData =req.body;

    userModel.findOne({email:userData.email})
    .then((user_res)=>{
        if(!user_res)
        {
            res.status(401).send("Invalid User Creds");
        }
        else{
            console.log(userData.password);
            console.log(user_res );
            if(user_res.password !== userData.password)
            {
                res.status(401).send("INVALID PASSWORD");
            }
            else
            {
                res.status(200).send(user_res)
            }
        }
    })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    })


} 

exports.getUsers = (req,res,next)=>{

    userModel.find({},{__v:0})
    .then((user_res)=>{
        res.send(user_res)
    })
    .catch((err)=>{
        res.send(err)
    })

}

exports.updateUsers = (req,res,next) =>{
   
    let id = req.params.id;
    let userData = req.body;

   userModel.findByIdAndUpdate(id,userData,{new: true})
   .then((user_res)=>{
    res.send(user_res)
    })
   .catch((err)=>{
    res.send(err)
    })

}


exports.filteruser = (req,res,next) =>{
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
    userModel.find(filter)
    .then((user_res)=>{
        res.send(user_res);
    })
    .catch((error)=>{
        res.send(error);
    })

}