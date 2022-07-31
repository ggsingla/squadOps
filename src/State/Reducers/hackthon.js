import axios from "axios"
let url='https://hackmol3.herokuapp.com/';

const intialState = {}
const reducer=async (state=intialState,action)=>{
    switch(action.type){
        case 'hackthon':
            const hack=await axios.get(`${url}/hackthon/show`);
            
            return hack.data;
    }
}

export default reducer;