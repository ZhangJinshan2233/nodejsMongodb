const mongoose=require('mongoose');

//design skill schema
const skillSchema=new mongoose.Schema(
    {
        name:String
    },
    {
        timestamps:true
    }
);

//define Skill model
const Skill=mongoose.model('Skill',skillSchema);

module.exports=Skill;