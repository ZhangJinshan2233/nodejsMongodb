const mongoose=require('mongoose');

//define user schema
const userSchema=new mongoose.Schema({
    name:String,
    skills:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Skill'
        }
    ]
},
         {
            timestamps:true
        }   
)

//define User schema
const User=mongoose.model('User',userSchema);

module.exports=User;