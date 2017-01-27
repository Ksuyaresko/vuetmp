import Vue from 'vue'
import routs from './vue/routs.vue'
import _ from 'underscore'
import VueRouter from 'vue-router'
import Contacts from './vue/contacts.vue'
import Main from './vue/main.vue'
import mainHeader from './vue/mainheader.vue'
import Home from './vue/home.vue'
Vue.use(VueRouter);

// const Home = { template: '<div>Home</div>' };
// const Main = { template: '<div>Main</div>' };
// var mainHeader = {
//       template: '<div class="header">компонент header</div>'
// };

const routes = [
      { path: '/', component: Home },
      { path: '/home', component: Home },
      { path: '/main', component: Main },
      { path: '/contacts', component: Contacts }
];
const router = new VueRouter({
      routes // сокращение от routes: routes
});
const app = new Vue({
      router,
      el: "#app",
      components: {
            'mainheader': mainHeader
      }
});