import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './vue/zip.vue'
import App2 from './vue/zip2.vue'
Vue.use(VueRouter);


new Vue({
      el: '#app2',
      render: h => h(App)
});

new Vue({
      el: '#userserch',
      render: h => h(App2)
});
