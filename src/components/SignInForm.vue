<template>
  <v-card
    class="mx-auto my-auto pa-8 text-center"
    width="500"
  >
    <v-form @submit.prevent>
      <v-text-field
        v-model="signInFormData.email"
        type="email"
        label="Email"
      />

      <v-text-field
        v-model="signInFormData.password"
        type="password"
        label="Password"
      />

      <v-btn
        class="mt-2"
        type="submit"
        block
      >
        Sign in
      </v-btn>

      <p class="mt-8 text-uppercase text-medium-emphasis text-subtitle-2 font-weight-medium">
        Don't have an account yet ?
      </p>

      <v-btn
        class="mt-4 mx-auto"
        variant="tonal"
        @click="redirectToSignUpView"
      >
        Sign Up
      </v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { reactive } from 'vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const redirectToSignUpView = () => {
  router.push('sign-up');
};

const signInFormData = reactive({
  email: '',
  password: '',
});

</script>
