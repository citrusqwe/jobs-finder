import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import JobView from '@/views/JobView.vue';

const routes = [
  { path: '/', component: Home },
  {
    path: '/:id',
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
