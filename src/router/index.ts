import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Category from '@/views/Category.vue';

const routes = [
  { path: '/', component: Home },
  {
    path: '/remote-jobs/:slug',
    component: Category,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
