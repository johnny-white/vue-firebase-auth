<template>
  <v-card
    class="mx-auto my-auto pa-8 text-center"
    width="500"
  >
    <v-form @submit.prevent="onFormSubmit">
      <v-text-field
        v-model="signUpFormData.email"
        type="email"
        label="Email"
      />

      <v-text-field
        v-model="signUpFormData.password"
        type="password"
        label="Password"
      />

      <v-btn
        class="mt-2"
        type="submit"
        block
      >
        Sign up
      </v-btn>

      <p class="mt-8 text-uppercase text-medium-emphasis text-subtitle-2 font-weight-medium">
        Already have an account ?
      </p>

      <v-btn
        class="mt-4 mx-auto"
        variant="outlined"
        :loading="formLoading"
        :disabled="formLoading"
        @click="redirectToSignUpView"
      >
        Sign In
      </v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { reactive } from 'vue';

import { useRouter } from 'vue-router';

const props = defineProps({
  formLoading: {
    type: Boolean,
    default: false,
  },
});

const { formLoading } = props;

const emit = defineEmits(['on-form-submit']);

const router = useRouter();

const onFormSubmit = () => {
  emit('on-form-submit', signUpFormData);
};

const redirectToSignUpView = () => {
  router.push('sign-in');
};

const signUpFormData = reactive({
  email: '',
  password: '',
});

</script>
