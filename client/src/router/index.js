import Vue from 'vue';
import Router from 'vue-router';
import MyBooks from '../components/MyBooks.vue';
import MyPing from '../components/MyPing.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'MyBooks',
      component: MyBooks,
    },
    {
      path: '/',
      name: 'MyPing',
      component: MyPing,
    },
  ],
});
