import Mock from 'mockjs';
// import the prepared data
import banner from './banner';
import floor from './floor';

// api of carousel on home page
// arguement 1: request path
// arguement 2: response data
Mock.mock("/mock/banner",{code:200,data:banner,message:'Success'});
Mock.mock("/mock/floor",{code:200,data:floor,message:'Success'});