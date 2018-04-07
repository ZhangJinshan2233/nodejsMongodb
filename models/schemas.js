const mongoose=require('mongoose');

//connect mongodb
mongoose
.connect('mongodb://localhost/TestModel')
.then(()=>{
    console.log('connect to mongodb')
})
.catch(err=>{
    console.log(err.message);
})

mongoose.set('debug',true);

mongoose.Promise=global.Promise;

// refer 'User' and 'Skill' models
var User=require('./User');
var Skill=require('./Skill');

module.exports={
    User:User,
    Skill:Skill
}