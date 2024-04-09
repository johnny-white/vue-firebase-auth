<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { onMounted } from 'vue';

import { useAuthStore } from '@store/modules/auth';

import { onAuthStateChanged } from 'firebase/auth';
import fbAuth from '@/firebase/index';

const authStore = useAuthStore();

const { setCurrentUser } = authStore;

onMounted(() => {
  onAuthStateChanged(fbAuth, (user) => {
    setCurrentUser(user);
  });
});
</script>
