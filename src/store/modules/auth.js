import { defineStore } from 'pinia';

import { ref } from 'vue';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as fbSignOut,
} from 'firebase/auth';

import fbAuth from '@/firebase/index';

export const useAuthStore = defineStore('auth', () => {
  // state
  const currentUser = ref({});

  const signInLoading = ref(false);

  const signUpLoading = ref(false);

  const signOutLoading = ref(false);

  // actions
  const signIn = async (params) => {
    signInLoading.value = true;

    try {
      const { email, password } = params;

      const userCredential = await signInWithEmailAndPassword(fbAuth, email, password);

      currentUser.value = userCredential.user;

      signInLoading.value = false;
    } catch (error) {
      signInLoading.value = false;

      throw new Error(error);
    }
  };

  const signUp = async (params) => {
    signUpLoading.value = true;

    try {
      const { email, password } = params;

      const userCredential = await createUserWithEmailAndPassword(fbAuth, email, password);

      currentUser.value = userCredential.user;

      signUpLoading.value = false;
    } catch (error) {
      signUpLoading.value = false;

      throw new Error(error);
    }
  };

  const setCurrentUser = (user) => {
    currentUser.value = user;
  };

  const signOut = async () => {
    signOutLoading.value = true;

    try {
      await fbSignOut(fbAuth);
      signOutLoading.value = false;
    } catch (error) {
      signOutLoading.value = false;

      throw new Error(error);
    }
  };

  return {
    currentUser,
    signInLoading,
    signUpLoading,
    signOutLoading,

    signIn,
    signUp,
    setCurrentUser,
    signOut,
  };
});
