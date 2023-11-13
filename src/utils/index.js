// import axios
import axios from "axios";
// create new request
// setup some base config
const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// create the request interceptor
request.interceptors.request.use((config) => {
  // the config obj will be return
  // in the config, some common parameters can be taken e.g. token
  return config;
});

// create the response interceptor
request.interceptors.response.use(
  (res) => {
    // the returned data can be simplified
    return res.data
  },
  (err) => {
    const status = err.response.status
    if( status === 304) alert('no access promission ');
    else if (status === 403) alert('data not modified');
    else if (status >= 500) alert('server broken');
  }
);
