import axios from "axios"

const intialState = {
    name: '',
    email: '',
}
const reducer=async (state=intialState,action)=>{
    switch(action.type){
        case 'login':
            const log=await axios.post('http://localhost:8000/login',action.payload);
            
            return {email:log.data.email,name:log.data.name};

        case 'register':
            const register=await axios.post('http://localhost:8000/signup',action.payload);
            
            return {email:register.data.email,name:register.data.name};
        
        case 'profile':
            const profile=await axios.post('http://localhost:8000/profile/add',action.payload);

            return profile

        default:
            return state;
    }
}

export default reducer;