import { createApp } from 'vue';

import fbAuth from '@/firebase/index';
import { vuetify } from '@/plugins/vuetify';

import router from '@/router/index';
import store from '@store/index';

import '@/assets/styles/main.scss';

import App from './App.vue';

const app = createApp(App);

app
  .use(vuetify)
  .use(router)
  .use(store)
  .mount('#app');
