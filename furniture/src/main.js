import Vue from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'
import Top from './components/Top.vue'

import Footer from './components/Footer.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import axios from 'axios'
axios.defaults.baseURL='http://127.0.0.1:3000'
Vue.prototype.axios = axios;

Vue.use(ElementUI);

Vue.component("top",Top)
Vue.component("foot",Footer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
