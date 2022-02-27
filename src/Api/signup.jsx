import axios  from "axios";

export default function SignUp(email,password,Name){
    return axios.post('https://hackmol3.herokuapp.com/signup',{email:email,password:password,name:Name},{headers:{'Content-Type':'application/json'}});
};

