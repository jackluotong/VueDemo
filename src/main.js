import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueRouter from 'vue-Router'
import router from './router/router'
Vue.use(Antd)
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')
