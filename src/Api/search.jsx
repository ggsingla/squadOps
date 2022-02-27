import axios from "axios";

export const getLocation=function (location){
    return axios.post('https://hackmol3.herokuapp.com/search/location',{location:location},{headers:{'Content-Type':'application/json'}});
}

export const getskills=function (skills){
    return axios.post('https://hackmol3.herokuapp.com/search/skills',{skills:skills},{headers:{'Content-Type':'application/json'}});
}
