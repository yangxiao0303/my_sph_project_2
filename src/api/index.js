// import the wrapped axios
import request from "@/utils/request";
// wrap the request to get the typeNav
export const reqTypeCategory = () => request({url:'/product/getBaseCategoryList'});