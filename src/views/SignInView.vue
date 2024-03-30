<template>
  <SignInForm @on-form-submit="onFormSubmit" />
</template>

<script setup>
import { computed } from 'vue';

import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import SignInForm from '@/components/SignInForm.vue';

const store = useStore();
const router = useRouter();

const currentUser = computed(() => store.getters['auth/currentUser']);

const onFormSubmit = async (data) => {
  await store.dispatch('auth/signIn', data);

  if (currentUser.value) router.push('dashboard');
};
</script>
