import axios from "axios";

const [hackthon,sethackthon] = useState([]);
axios.get('https://hackmol3.herokuapp.com/hackathon/show').then((response) => {
    sethackthon(response.data);
});

export default hackthon;