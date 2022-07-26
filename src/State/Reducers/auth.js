import axios from "axios"
let url='http://localhost:8000';

const intialState = {}
const reducer=async (state=intialState,action)=>{
    switch(action.type){
        case 'login':
            let log;
            await axios.post(`${url}/login`,
            action.payload).then(function(response){
                log=response;
            }).catch(function(error){
                console.log(error);
                alert('Something went Wrong ');
                window.location.reload();
            });

            return log.data;
            
        case 'register':
            let register;
            await axios.post(`${url}/signup`,action.payload).then
            (function(response){
                register=response;
            }).catch(function(error){
                console.log(error);
                alert('Something went Wrong ');
                window.location.reload();
            });
            
            return register.data;
        
        case 'profile':
            let profile;
            await axios.post(`${url}/profile/add`,action.payload).then
            (function(response){
                profile=response;
            }).catch(function(error){
                console.log(error);
                alert('Something went Wrong ');
                window.location.reload();
            });

            return profile.data;

        default:
            return state;
    }
}

export default reducer;