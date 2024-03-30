<template>
  <v-card
    class="mx-auto my-auto pa-8 text-center"
    width="500"
  >
    <p>currentUser: {{ currentUser.email }}</p>

    <v-btn
      class="mt-4 mx-auto"
      variant="outlined"
      @click="onSignOut"
    >
      Sign Out
    </v-btn>
  </v-card>
</template>

<script setup>
import { computed } from 'vue';

import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const currentUser = computed(() => store.getters['auth/currentUser']);

const onSignOut = async () => {
  await store.dispatch('auth/signOut');

  router.push('sign-in');
};

</script>
