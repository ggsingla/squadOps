import axios from "axios";
import { useState } from "react";

export const data = function () {
  axios
    .get("https://hackmol3.herokuapp.com/hackathon/show")
    .then((response) => {
      return response.data;
    });
};
