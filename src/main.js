import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll'
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(infiniteScroll)

new Vue({
  router,
  store,
  template: '<App/>',
  components: { App },
  directives: { infiniteScroll },
  render: h => h(App),
}).$mount('#app');
