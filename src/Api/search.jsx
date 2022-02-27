import axios from "axios";

function getLocation(location){
    return axios.post('https://hackmol3.herokuapp.com/search/location',{location:location},{headers:{'Content-Type':'application/json'}});
}

function getskills(skills){
    return axios.post('https://hackmol3.herokuapp.com/search/skills',{skills:skills},{headers:{'Content-Type':'application/json'}});
}

module.exports={getLocation,getskills};