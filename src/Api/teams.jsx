import axios from "axios";
import useState from "react";

export const addTeam=function(team){
    axios.post('https://hackmol3.herokuapp.com/team/add',{team},{headers:{'Content-Type':'application/json'}});
}
