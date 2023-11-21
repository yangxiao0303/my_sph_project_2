// import the wrapped axios
import request from "@/utils/request";
// wrap the request to get the typeNav
export const reqTypeCategory = () => request({url:'/product/getBaseCategoryList'});

// import the wrapped mock axios
import mockRequest from "@/utils/mockRequest";
export const mockBanner = () => mockRequest({url:'/banner'});
export const mockFloor = () => mockRequest({url:'/floor'});

// search page get data api
export const reqSearch = (data)=> request({url:"/list",method:"POST",data})