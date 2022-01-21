import axios from "axios";

//@todo move baseURL to config file

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://spotify-auth-lln.herokuapp.com/"
    : "http://localhost:4040/";

const request = axios.create({
  baseURL
});

export default request;
