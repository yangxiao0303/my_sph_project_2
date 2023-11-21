// import all the global components
import Header from "@/components/header";
import Footer from "@/components/footer";
import TypeNav from "@/components/typenav";

// define a obj to put global components
const globalObj = {
  Header,
  Footer,
  TypeNav,
};

// custom plugin object (install method)
export default {
  install(Vue) {
    Object.keys(globalObj).forEach(key =>{
      Vue.component(key,globalObj[key]);
    })
  },
};

