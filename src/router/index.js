import { createWebHistory, createRouter } from 'vue-router';

import SignInView from '@views/SignInView.vue';
import SignUpView from '@views/SignUpView.vue';
import DashboardView from '@views/DashboardView.vue';

const routes = [
  {
    path: '/',
    redirect: '/sign-in',
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignInView,
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpView,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
