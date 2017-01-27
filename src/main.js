import Vue from 'vue'
import App from './App.vue'
import Nav from './vue/nav.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

new Vue({
      el: '#app',
      render: h => h(App)
});
new Vue({
      el: '#nav',
      render: h => h(Nav)
})
