<template>
  <SignInForm @on-form-submit="onFormSubmit" />
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@store/modules/auth';

import { useRouter } from 'vue-router';

import SignInForm from '@/components/SignInForm.vue';

const authStore = useAuthStore();

const router = useRouter();

const { currentUser } = storeToRefs(authStore);
const { signIn } = authStore;

const onFormSubmit = async (data) => {
  await signIn(data);

  if (currentUser.value) router.push('dashboard');
};
</script>
