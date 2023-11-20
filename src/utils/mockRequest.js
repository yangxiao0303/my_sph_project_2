import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
// hide login spinner
nprogress.configure({ showSpinner: false });
// create methods returns axios
const request = axios.create({
  baseURL: "/mock",
  timeout: 5000,
});

// add request interceptors
request.interceptors.request.use((config)=>{
  // add the progress effect, before send the request
  nprogress.start();
  return config;
})

// add response interceptors
request.interceptors.response.use((res)=>{
  // progress effect
  nprogress.done();
  // simplify the data from the server
  return res.data;
},(err)=>{
  // handling the network errors
  const status = err.response.status;
  if(status >300 && status < 400) alert('failed');
  else if ( status === 403) alert('Unauthorized');
  else if ( status === 404) alert('Not found');
  else if ( status >= 500 ) alert('Server problem');
  // return a pending Promise obj to terminate the chain
  return new Promise ((resolve, reject) =>{});
});

// expose
export default request;