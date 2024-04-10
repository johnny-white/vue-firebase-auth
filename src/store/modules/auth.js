import { defineStore } from 'pinia';

import { ref } from 'vue';

import { useNotification } from '@kyvg/vue3-notification';
const { notify }  = useNotification();

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

      notify({
        title: 'Welcome back 👻',
        text: `You've been logged in as ${currentUser.value.email}`,
      });
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

      notify({
        type: 'success',
        title: 'Registred 🎉',
        text: `You've been logged in as ${currentUser.value.email}`,
      });
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

      notify({
        type: 'warn',
        title: 'See you soon 👋🏻',
        text: 'You\'ve been logged out',
      });
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
