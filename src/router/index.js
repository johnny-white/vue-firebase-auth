import { createWebHistory, createRouter } from 'vue-router';

import SignInView from '@views/SignInView.vue';
import SignUpView from '@views/SignUpView.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
