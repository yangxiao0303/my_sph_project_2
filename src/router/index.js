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
      component: Home,
      meta: {
        isActive: true
      }
    },
    {
      name: 'search',
      // may or maynot pass the variable
      path: '/search/:keyword?',
      component: Search,
      meta: {
        isActive: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        isActive: false
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        isActive: false
      }
    },
  ]
})
