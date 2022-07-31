import axios from "axios"
let url='https://hackmol3.herokuapp.com/';

const intialState = {}

const reducer=async (state=intialState,action)=>{
    switch(action.type){
        case 'adduserteam':
            await axios.post(`${url}/userTeam/add`,action.payload);
            return state;
    }
}

export default reducer;