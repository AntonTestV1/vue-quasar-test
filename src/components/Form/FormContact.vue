<template>
  <q-form class="q-mt-lg" ref="form">
    <p class="text-h5 text-dark text-weight-bold q-mb-md">Contact information</p>

    <span class="text-subtitle2 text-dark">Email</span>
    <q-input
      placeholder="Enter your email"
      standout="bg-primary text-accent"
      v-model="email"
      class="q-mt-sm q-mb-lg"
      :rules="[isEmail]">
      <template v-slot:prepend>
        <EmailIcon class="q-ml-sm" />
      </template>
    </q-input>

    <span class="text-subtitle2 text-dark">Phone Number</span>
    <q-input
      placeholder="Enter your phone number"
      standout="bg-primary text-accent"
      v-model="phone"
      class="q-mt-sm"
      :rules="[isOnlyDigits]">
      <template v-slot:prepend>
        <PhoneIcon class="q-ml-sm" />
      </template>
    </q-input>
  </q-form>
</template>

<script setup>
import EmailIcon from '@/assets/svg/email.svg';
import PhoneIcon from '@/assets/svg/phone.svg';
import { useVModel } from '@vueuse/core';
import { ref } from 'vue';

const props = defineProps({
  email: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:email', 'update:phone']);

const email = useVModel(props, 'email', emit);
const phone = useVModel(props, 'phone', emit);


// Validation
import { useRules } from '@/utils/rules.js';
const { isEmail, isOnlyDigits } = useRules();

const form = ref(null);
async function validate() {
  return form.value.validate();
}
defineExpose({
  validate,
});
</script>

<style scoped></style>
