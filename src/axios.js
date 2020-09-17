import axios from "axios";

const customHeaders = {
  authorization: `Bearer ${process.env.VUE_APP_API_KEY}`,
  "content-type": "application/json"
};

const instance = axios.create({
  baseURL: `${process.env.VUE_APP_SERVER_PROTOCOL}://${process.env.VUE_APP_API_URL_LOCALHOST}/v1/`,
  headers: customHeaders
});

export default instance;
