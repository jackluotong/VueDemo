import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Tableone from '../components/tableone'
import Tabletwo from '../components/tabletwo'
Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Tableone',
      name: 'Tableone',
      component: Tableone
    },
    {
      path: '/Tabletwo',
      name: 'Tabletwo',
      component: Tabletwo
    },

  ]
})