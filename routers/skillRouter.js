
const express =require("express")
const Model=require('../models/schemas')

router=express.Router();

router
.route('')
.get((req,res,next)=>{
    Model.Skill.find()
    .then(skills=>{
        res.render('skillList',{skills:skills})
    })
    .catch(err=>{
        next(err);
    })
})
.post((req,res,next)=>{
   const newSkill=new Model.Skill(req.body);
  newSkill.save()
  .then(()=>{
      res.redirect('/skills')
  })
  .catch(err=>{
      next(err);
  })
})

router
.route('/new')
.get((req,res,next)=>{
    res.render('createNewSkill')
})


module.exports=router;