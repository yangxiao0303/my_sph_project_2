// import the core code of Vue
import Vue from "vue";
// import vuex
import vuex from "vuex";
// install the plugins
Vue.use(vuex);
// import all the child modules
import home from "./modules/home";
import detail from "./modules/detail";
import search from "./modules/search";
import users from "./modules/users";
import shoppingCart from "./modules/shoppingCart";
// create the new store and expose
export default new vuex.Store({
  actions:{},
  mutations:{},
  state:{},
  getters:{},
  modules:{
    home,
    search,
    shoppingCart,
    users,
    detail
  },
})