<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import { useStore } from 'vuex';

import { onAuthStateChanged } from 'firebase/auth';
import fbAuth from '@/firebase/index';

const store = useStore();

const isAuthenticated = ref(false);

onMounted(() => {
  onAuthStateChanged(fbAuth, (user) => {
    if (user) {
      store.dispatch('auth/setCurrentUser', user);

      isAuthenticated.value = true;
    } else {
      isAuthenticated.value = false;
    }
  });
});
</script>
