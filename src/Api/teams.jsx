import axios from "axios";
import useState from "react";
const [Team, setTeam] = useState([]);
axios.get('https://hackmol3.herokuapp.com/team/show').then(
    (response) => {
        console.log(response.data);
        setTeam(response.data);
    }
)
function TeamDetails(id){
    const details=await axios.post('https://hackmol3.herokuapp.com/team/show',{id:id},{headers:{'Content-Type':'application/json'}});

    return details.data.headers['Content-Type'];
}
function addTeam(team){
    axios.post('https://hackmol3.herokuapp.com/team/add',{team:team},{headers:{'Content-Type':'application/json'}});
}
module.exports={Team,TeamDetails,addTeam};