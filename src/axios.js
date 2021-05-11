import axios from "axios";

const instance = axios.create({
  baseURL: "https://testa2.aisle.co/V1/users/",
});

export default instance;
