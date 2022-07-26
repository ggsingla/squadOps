import axios from "axios"
let url='http://localhost:8000';

const intialState = {}
const reducer=async (state=intialState,action)=>{
    switch(action.type){
        case 'hackthon':
            const hack=await axios.get(`${url}/hackthon/show`);
            
            return hack.data;
    }
}

export default reducer;