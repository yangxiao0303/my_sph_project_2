// import axios
import axios from "axios";
// import nprogress
import nProgress from "nprogress";
// import nprogress css file
import "nprogress/nprogress.css";
nProgress.configure({showSpinner: false});
// create new request
// setup some base config
const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// create the request interceptor
request.interceptors.request.use((config) => {
  // before sending the request, start the progress
  nProgress.start();
  // the config obj will be return
  // in the config, some common parameters can be taken e.g. token
  return config;
});

// create the response interceptor
request.interceptors.response.use(
  (res) => {
    // get the result turn off the progress bar
    nProgress.done();
    // the returned data can be simplified
    return res.data;
  },
  (err) => {
    const status = err.response.status;
    if (status === 304) alert("no access promission ");
    else if (status === 403) alert("data not modified");
    else if (status >= 500) alert("server broken");
  }
);

// expose at the last -> need wait for the request/response interceptor
export default request;
