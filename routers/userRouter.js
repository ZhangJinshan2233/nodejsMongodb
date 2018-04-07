//refer express

const express=require('express');
const router=express.Router();
const Model=require('../models/schemas');

router
    .route('')
    .get((req,res,next)=>{
         Model.User.find()
         .then(users=>{
             res.render('users',{users});
         })
         .catch(err=>{
             return next(err);
         })
    })
    .post((req,res,next)=>{
        var newUser=new Model.User(req.body);
            newUser.save()
        .then(function(){
             res.redirect('/users')
        })
        .catch(err=>{
              next(err)
         })
    })

router
    .route('/new')
    .get((req,res,next)=>{
            res.render('createNewUser')
    })

router
    .route('/:id')
    .get((req,res,next)=>{
         Model.User.findById(req.params.id)
        .populate('skills')
        .exec()
        .then(user=>{
             res.render('userProfile',{user});
    })
        .catch(err=>{
            next(err);
         })
    })

    .patch((req,res,next)=>{
         Model.User.findByIdAndUpdate(req.params.id,{$set :{name:req.body.name}})
        .then(()=>{
            res.redirect('/users')
        })
    })

    .delete((req,res,next)=>{
         Model.User.findByIdAndRemove(req.params.id).then(()=>{
            res.redirect('/users')
         })
    })

router
    .route('/:id/edit')
    .get((req,res,next)=>{
         Model.User.findById(req.params.id)
        .then(user=>{
            res.render('editUser',{user});
         })
        .catch(err=>{
            next(err);
        })
    })

router
    .route('/:id/skills/new')
    .get((req,res,next)=>{
        Model.User.findById(req.params.id).then(user=>{
            Model.Skill.find().then(skills=>{
                res.render('newUserSkill',{user,skills});
            })
        })
    })

router
    .route('/:id/skills')
    .post((req,res,next)=>{
        Model.User.findByIdAndUpdate(req.params.id,{
            $addToSet:{skills:req.body.skill_id}
        })
        .then(()=>{
            res.redirect(`/users/${req.params.id}`)
        })
    })
module.exports=router;