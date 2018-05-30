import Vue from 'vue';
import Router from 'vue-router';
import vueResource from 'vue-resource'
import Home from './components/home/home.vue'
import Classify from './components/classify/classify.vue'
import Cart from './components/cart/cart.vue'
import Mine from './components/mine/mine.vue'

Vue.use(Router);
Vue.use(vueResource);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify,
    },
    {
      path: '/Cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine,
    },
  ],
});
