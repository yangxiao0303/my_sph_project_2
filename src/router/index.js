// import vue core code and VueRouter
import Vue from "vue";
import VueRouter from "vue-router"
// import all the router components
import Home from '@/pages/home'
import Search from '@/pages/search'
import Login from '@/pages/login'
import Register from '@/pages/register'

// install plugin
Vue.use(VueRouter);

// create instance of VueRouter and expose
export default new VueRouter({
  // config the routes
  routes: [
    {
      path: '/Home', 
      component: Home
    },
    {
      path: '/Search', 
      component: Search
    },
    {
      path: '/login', 
      component: Login
    },
    {
      path: '/register', 
      component: Register
    },
  ]
})
