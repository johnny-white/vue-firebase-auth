<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { onMounted } from 'vue';

import { useStore } from 'vuex';

import { onAuthStateChanged } from 'firebase/auth';
import fbAuth from '@/firebase/index';

const store = useStore();

onMounted(() => {
  onAuthStateChanged(fbAuth, (user) => {
    store.dispatch('auth/setCurrentUser', user);
  });
});
</script>
