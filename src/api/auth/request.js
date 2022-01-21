import axios from "axios";

//@todo move baseURL to config file

const baseURL ="https://spotify-lln-auth.herokuapp.com/";

const request = axios.create({
  baseURL
});

export default request;
