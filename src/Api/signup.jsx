import axios  from "axios";

export const signup= function(email,password,Name){
    console.log(email,password,Name);
    return axios.post('https://hackmol3.herokuapp.com/signup',{email:email,password:password,name:Name});

 
};

