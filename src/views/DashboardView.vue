<template>
  <div>Current user: {{ currentUser.email }}</div>
</template>

<script setup>
import { computed } from 'vue';

import { useStore } from 'vuex';

const store = useStore();

const currentUser = computed(() => store.getters['auth/currentUser']);
</script>
