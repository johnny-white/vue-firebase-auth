import { createApp } from 'vue';

import { vuetify } from '@/plugins/vuetify';

import router from '@/router/index';
import pinia from '@store/index';

import '@/assets/styles/main.scss';

import App from './App.vue';

const app = createApp(App);

app
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app');
