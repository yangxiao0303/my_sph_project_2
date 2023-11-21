// import vue core code and VueRouter
import Vue from "vue";
import VueRouter from "vue-router";
// import all the router components
import Home from "@/pages/home";
import Search from "@/pages/search";
import Login from "@/pages/login";
import Register from "@/pages/register";

// install plugin
Vue.use(VueRouter);

// wraper of push/replace method
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

// redefine the push method
VueRouter.prototype.push = function (location) {
  // this has to point to the instance of VueRouter
  // call method the first argument points to the new direction
  push.call(this, location, () => {},()=>{})
}

// redefine the replace method
VueRouter.prototype.REPLACE = function (location) {
  // apply
  replace.apply(this,[location,()=>{},()=>{}])
}

// create instance of VueRouter and expose
export default new VueRouter({
  // config the routes
  routes: [
    {
      path: "/Home",
      component: Home,
      meta: {
        isActive: true,
      },
    },
    {
      name: "search",
      // may or maynot pass the variable
      path: "/search/:keyword?",
      component: Search,
      meta: {
        isActive: true,
      },
    },
    {
      path: "/login",
      component: Login,
      meta: {
        isActive: false,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isActive: false,
      },
    },
    { 
      path: "/", 
      redirect: "/home" 
    },
  ],
});
