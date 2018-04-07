//refer all kinds of modules
const express=require('express');
const bodyParser=require('body-parser');
const methodOverride=require('method-override');
const routers=require('./routers/index');
//set middleware
var app=express();

app.set('view engine','ejs');
app.use('/bootstrap/css',express.static(__dirname+'/public/bootstrap/css'));
app.use('/bootstrap/js',express.static(__dirname+'/public/bootstrap/js'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
console.log("test")
app.get('/',(req,res,next)=>{
    res.redirect('/users')
})

app.use('/users',routers.userRouter);
//deal with error
app.use(function(err,req,res,next){
    res.send(err.message);
});

//listen port

app.listen(3000,()=>{
    console.log('This app is listening port 3000')
})
