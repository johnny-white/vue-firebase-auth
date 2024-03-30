import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const state = {
  currentUser: {},

  signInLoading: false,
  signUpLoading: false,
};

const getters = {
  currentUser: (state) => state.currentUser,

  signInLoading: (state) => state.signInLoading,
  signUpLoading: (state) => state.signUpLoading,
};

const mutations = {
  'SIGN_IN_REQUEST': (state) => {
    state.signInLoading = true;
  },
  'SIGN_IN_SUCCESS': (state, payload) => {
    state.currentUser = payload;

    state.signInLoading = false;
  },
  'SIGN_IN_FAILURE': (state) => {
    state.signInLoading = false;
  },

  'SIGN_UP_REQUEST': (state) => {
    state.signUpLoading = true;
  },
  'SIGN_UP_SUCCESS': (state, payload) => {
    state.currentUser = payload;

    state.signUpLoading = false;
  },
  'SIGN_UP_FAILURE': (state) => {
    state.signUpLoading = false;
  },
};

const actions = {
  async signIn(store, params) {
    store.commit('SIGN_IN_REQUEST');

    try {
      const { email, password } = params;

      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      store.commit('SIGN_IN_SUCCESS', user);
    } catch (error) {
      store.commit('SIGN_IN_FAILURE');

      throw new Error(error);
    }
  },

  async signUp(store, params) {
    store.commit('SIGN_UP_REQUEST');

    try {
      const { email, password } = params;

      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      store.commit('SIGN_UP_SUCCESS', user);
    } catch (error) {
      store.commit('SIGN_UP_FAILURE');

      throw new Error(error);
    }
  },
};

const auth = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default auth;
