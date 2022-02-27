import axios from "axios";

const addProfile = function (profile) {
  console.log(profile);
  axios.post(
    "https://hackmol3.herokuapp.com/profile/add",profile
    ,{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

const getProfile = function (email) {
  return axios.post(
    "https://hackmol3.herokuapp.com/profile/show",
    { email: email },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

export { addProfile, getProfile };
