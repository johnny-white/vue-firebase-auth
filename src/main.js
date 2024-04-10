import { createApp } from 'vue';

import { vuetify } from '@/plugins/vuetify';

import router from '@/router/index';
import pinia from '@store/index';

import '@/assets/styles/main.scss';

import App from './App.vue';

import Notifications from '@kyvg/vue3-notification';

const app = createApp(App);

app
  .use(vuetify)
  .use(router)
  .use(pinia)
  .use(Notifications)
  .mount('#app');
