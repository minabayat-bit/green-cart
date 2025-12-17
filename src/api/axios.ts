import axios from "axios";

const instance = axios.create({
  baseURL: "http://corsproxy.io/?https://greencart-server.greatstack.in",
});

export default instance;
