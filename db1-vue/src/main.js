import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './Router'

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
