import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import fbAuth from '@/firebase/index';

const state = {
  currentUser: {},

  signInLoading: false,
  signUpLoading: false,

  signOutLoading: false,
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

  'SIGN_OUT_REQUEST': (state) => {
    state.signOutLoading = true;
  },
  'SIGN_OUT_SUCCESS': (state, payload) => {
    state.currentUser = payload;

    state.signOutLoading = false;
  },
  'SIGN_OUT_FAILURE': (state) => {
    state.signOutLoading = false;
  },
};

const actions = {
  async signIn(store, params) {
    store.commit('SIGN_IN_REQUEST');

    try {
      const { email, password } = params;

      const userCredential = await signInWithEmailAndPassword(fbAuth, email, password);

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

      const userCredential = await createUserWithEmailAndPassword(fbAuth, email, password);

      const user = userCredential.user;

      store.commit('SIGN_UP_SUCCESS', user);
    } catch (error) {
      store.commit('SIGN_UP_FAILURE');

      throw new Error(error);
    }
  },

  async signOut(store) {
    store.commit('SIGN_OUT_REQUEST');

    try {
      await signOut(fbAuth);

      store.commit('SIGN_OUT_SUCCESS', {});
    } catch (error) {
      store.commit('SIGN_OUT_FAILURE');

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
