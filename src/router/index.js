import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Test from '@/view/test';
import Home from '@/view/Home';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;