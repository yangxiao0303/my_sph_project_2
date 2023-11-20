import Vue from 'vue'
import App from './App.vue'
// import all the full-scale components
import Header from '@/components/header'
import Footer from '@/components/footer'
import TypeNav from '@/components/typenav'
// import the created insetance of router
import router from '@/router'
// import the store
import store from '@/store'
// import the reset css file
import '@/assets/css/reset.css'
// import swiper related components
import { Swiper,SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
// import mockjs
import "@/mock/mockServe"

// asign full-scale components
Vue.component(Header.name,Header);
Vue.component(Footer.name,Footer);
Vue.component(TypeNav.name,TypeNav);
Vue.component("Swiper",Swiper);
Vue.component("SwiperSlide",SwiperSlide);

// 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // mount the router on the prototype of vc
  router,
  // mount the store on the prototype of vc
  store
}).$mount('#app')
