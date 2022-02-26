require("dotenv").config();
require('./config/ds').connect();
const express=require('express');
const bodyParser=require('body-parser');
const login=require('./routes/login');
const signup=require('./routes/SignUp');
const Hackthon=require('./routes/Hackthon');
const team=require('./routes/Squad');
const profile=require('./routes/Profile');
const search=require('./routes/Search');

app=express();


bodyParser.urlencoded({extended:false});
app.use('/login',login);
app.use('/signup',signup);
app.use('/hackthon',Hackthon);
app.use('/team',team);
app.use('/profile',profile);
app.use('/search',search);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});