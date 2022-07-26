import axios from "axios";
const intialState = {}

let url='http://localhost:8000';

const reducer=async (state=intialState,action)=>{
    switch(action.type){
        case 'getId':
            let st;
            
            await axios.post(url+'/hackthon/showHack',{id:action.payload}).then(function(response){
                st={name:response.data[0].name,id:action.payload};
                }).catch(function(error){
                    console.log(error);
                    alert('Something went Wrong ');
                    window.location.reload();
                });
            return st;
        
        case 'addTeam':
            console.log(action.payload);
            await axios.post(`${url}/team/add`,action.payload);
            return state;
        
        case 'getTeam':
            let teams;
            await axios.post(`${url}/team/show`,action.payload).then(function(response){
                teams=response.data;
            }).catch(function(error){
                console.log(error);
                alert('Something went Wrong ');
            });

            return teams;
    }
}

export default reducer;