import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home/home.vue'
import Classify from './components/classify/classify.vue'
import Mine from './components/mine/mine.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify,
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine,
    },
  ],
});
