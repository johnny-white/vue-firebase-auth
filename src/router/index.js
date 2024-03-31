import { createWebHistory, createRouter } from 'vue-router';

import { onAuthStateChanged } from 'firebase/auth';
import fbAuth from '@/firebase/index';

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
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const currentUser = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(fbAuth, (user) => {
      resolve(user);
    });
  });
};

router.beforeEach(async (to, _, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    await currentUser() ? next() : next('/');
  } else {
    next();
  }
});

export default router;
