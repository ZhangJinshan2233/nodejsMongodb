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

module.exports=router;