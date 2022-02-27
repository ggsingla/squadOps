import axios from "axios";

function addProfile(profile){
    axios.post('https://hackmol3.herokuapp.com/profile/add',{profile:profile},{headers:{'Content-Type':'application/json'}});
}

function getProfile(email){
    return axios.post('https://hackmol3.herokuapp.com/profile/show',{email:email},{headers:{'Content-Type':'application/json'}});
}

export default {addProfile,getProfile};