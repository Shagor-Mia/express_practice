const express = require('express');
const {Student} = require("../models/students")
const router  = express.Router()
const authorize = require('../middlewares/authorize')
const admin = require('../middlewares/admin')


const  studentLIST = async(req,res)=>{
   try{ 
   
    const students = await Student.find()
        .sort({name: 1});
      res.send(students);  
   } 
   catch(err) {
    const errMsg = [];
    for(Arr in err.errors){
        errMsg.push(err.errors[Arr].message)
    }
   return res.status(400).send(errMsg);
   }
};

const addstudentLIST = async(req,res)=>{
    
    const student2 = new Student(req.body)
    try {
        const result = await student2.save();
        res.send(result);
    }
    catch(err) {
        const errMsg = [];
        for(field in err.errors){
            errMsg.push(err.errors[field].message)
        }
       return res.status(400).send(errMsg);
    }  
}

const detailStudentList = async(req,res)=>{
    const id = req.params.id
   try {
       const student = await Student.findById(id);
       res.send(student);
   }
    catch (error) {
       return res.status(400).send("Id not found!");
   }
}

const updateDstudentLIST = async(req,res)=>{
    const id = req.params.id
   const updated = req.body;
   try {
    const student = await Student.findByIdAndUpdate(id,updated,{new:true,useFindAndModify:false});
    if(!student) return res.status(400).send("Id not found!");
    res.send(student);
}
 catch (error) {
    return res.status(400).send("Id not found!");
}
  
}

const deletestudentLIST = async(req,res)=>{
    const id = req.params.id
    try {
        const student = await Student.findByIdAndDelete(id);
        if(!student) return res.status(400).send("Id not found!");
        res.send(student);
    }
     catch (error) {
        return res.status(400).send("Id not found!");
    }
}

router.route('/')
   .get(studentLIST)
   .post(addstudentLIST)
    
router.route('/:id') 
   .get(detailStudentList)
   .put(updateDstudentLIST)
   .delete([authorize,admin],deletestudentLIST)

module.exports = router;   