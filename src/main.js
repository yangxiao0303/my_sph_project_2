import Vue from 'vue'
import App from './App.vue'
// import all the full-scale components
import Header from '@/components/header'
import Footer from '@/components/footer'

// import the reset css file
import '@/assets/css/reset.css'

// asign full-scale components
Vue.component(Header.name,Header);
Vue.component(Footer.name,Footer);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
