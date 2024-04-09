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
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@store/modules/auth';

import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const { currentUser } = storeToRefs(authStore);

const { signOut } = authStore;

const onSignOut = async () => {
  await signOut();

  router.push('sign-in');
};

</script>
