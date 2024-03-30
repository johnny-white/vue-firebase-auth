import { createStore } from 'vuex';

import auth from '@/store/modules/auth';

// modules
const modules = {
  auth,
};

const store = createStore({
  modules,
});

export default store;
