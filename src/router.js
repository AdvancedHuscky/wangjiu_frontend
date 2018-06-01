import Vue from 'vue';
import Router from 'vue-router';
import vueResource from 'vue-resource'
import Home from './components/home/home.vue'
import Classify from './components/classify/classify.vue'
import Cart from './components/cart/cart.vue'
import Mine from './components/mine/mine.vue'
import Detail from './components/detail/detail.vue'
import Shop from './components/detail/shop.vue'
import Evaluate from './components/detail/evaluate.vue'
import shopDetail from './components/detail/shopDetail.vue'

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
    {
      path: '/detail',
      component: Detail,
      children: [
        {
          path: '/',
          component: Shop,
        },
        {
          path: '/detail/shop',
          name: 'shop',
          component: Shop,
        },
        {
          path: '/detail/shopDetail',
          name: 'shopDetail',
          component: shopDetail,
        },
        {
          path: '/detail/evaluate',
          name: 'evaluate',
          component: Evaluate,
        }
      ]
    },
  ],
});
