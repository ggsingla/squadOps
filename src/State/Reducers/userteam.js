import axios from "axios"
let url='http://localhost:8000';

const intialState = {}

const reducer=async (state=intialState,action)=>{
    switch(action.type){
        case 'adduserteam':
            await axios.post(`${url}/userTeam/add`,action.payload);
            return state;
    }
}

export default reducer;