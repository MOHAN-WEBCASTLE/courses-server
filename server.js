const express = require('express')
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000
const cors = require('cors');
const userRoutes = require('./routes/user');
const institutionRoutes = require('./routes/institution');
const courseRoutes = require('./routes/course');

const app = express()
mongoose.connect("mongodb://localhost:27017/course-manage")
.then((res)=>{
    console.log("mongo connected");
})
.catch((err)=>{
    console.log("cannot connect to MongoDB");
    console.log(err);
})

// mongoose.connect("mongodb+srv://mohansuriya:MOHANsuriya%4022@cluster0.ynygxca.mongodb.net/test", err =>{
//     if(err)
//     {
//         console.log("Cannot connect to db!!!!!");
//     }
//     else
//     {
//         console.log("Connected to DB");
//     }
// });

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({extended: true} ));

// ALTERNATE USER CORS
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//     );
  
//     next();
    
//   });
  app.use(cors())
  app.use("/api/users",userRoutes);
  app.use('/api/institutions',institutionRoutes);
  app.use('/api/courses',courseRoutes)

app.get('/',(req,res,next)=>{
    res.send("HELLO FROM SERVER");
})

app.listen(PORT,()=>{
    console.log("Server running on loaclhost:"+PORT);
}) 