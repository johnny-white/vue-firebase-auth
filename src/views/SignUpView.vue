<template>
  <SignUpForm @on-form-submit="onFormSubmit" />
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@store/modules/auth';

import { useRouter } from 'vue-router';

import SignUpForm from '@/components/SignUpForm.vue';

const authStore = useAuthStore();

const router = useRouter();

const { currentUser } = storeToRefs(authStore);
const { signUp } = authStore;

const onFormSubmit = async (data) => {
  await signUp(data);

  if (currentUser.value) router.push('dashboard');
};
</script>
