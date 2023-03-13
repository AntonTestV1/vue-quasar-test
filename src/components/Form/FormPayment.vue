<template>
  <q-form class="flex column" ref="form">
    <span class="text-h5 text-dark text-weight-bold q-mb-lg q-mt-lg">Payment</span>

    <div class="flex row no-wrap q-mb-md">
      <q-btn outline rounded color="purple" no-caps no-wrap class="q-mr-md rounded-2x">
        <template #default>
          <CreditCardIcon class="q-mx-xs" />
          <span class="q-px-xs">Credit Card</span>
        </template>
      </q-btn>
      <q-btn outline rounded color="accent" class="q-mr-md rounded-2x">
        <template #default>
          <PayPalIcon class="q-mx-xs" />
          <span class="q-px-xs text-accent">PayPal</span>
        </template>
      </q-btn>
    </div>

    <span class="text-subtitle2 text-dark q-mt-lg">Credit Card Number <span class="text-red">*</span></span>
    <q-input
      placeholder="2548 9841 2570 ****"
      standout="bg-primary text-accent"
      class="q-mt-sm"
      v-model="data.cardNumber"
      :rules="[isOnlyDigits, (val) => (val && val.length > 0) || 'Card number is required']"
      :value="ccFormat(data.cardNumber)"
      :maxlength="19">
      <template v-slot:prepend>
        <CreditCardIcon class="q-ml-sm" />
      </template>
    </q-input>

    <span class="text-subtitle2 text-dark q-mt-lg">Name on Card</span>
    <q-input
      placeholder="Enter name on card"
      standout="bg-primary text-accent"
      class="q-mt-sm"
      v-model.digit="data.cardName">
      <template v-slot:prepend>
        <PersonIcon class="q-ml-sm" />
      </template>
    </q-input>

    <div class="flex row justify-between q-mt-lg">
      <div class="col-xs-12 col-sm-6 q-pr-xs-none q-pr-sm">
        <span class="text-subtitle2 text-dark">Expiry Date <span class="text-red">*</span></span>
        <q-input
          placeholder="MM/YY"
          input-class="input-class"
          standout="bg-primary text-accent"
          class="q-mt-sm"
          v-model="data.cardDate"
          :value="expiryDateFormat(data.cardDate)"
          :maxlength="5"
          :rules="[isDateExpired, (val) => (val && val.length > 0) || 'Date is required']">
          <template v-slot:prepend>
            <span class="input_inner" />
          </template>
        </q-input>
      </div>

      <div class="col-xs-12 col-sm-6 q-pl-xs-none q-pl-sm">
        <span class="text-subtitle2 text-dark q-mt-lg q-mb-md">Security Code <span class="text-red">*</span></span>
        <q-input
          placeholder="CVV"
          standout="bg-primary text-accent"
          class="q-mt-sm"
          v-model.number="data.cardCvv"
          :maxlength="4"
          :rules="[isOnlyDigits, (val) => (val && val.toString().length > 0) || 'CVV is required']">
          <template v-slot:prepend> <span class="input_inner" /> </template
        ></q-input>
      </div>
    </div>

    <div class="flex no-wrap row items-start q-mt-lg">
      <q-checkbox class="checkbox" color="accent" v-model="agreeToTerms" label=""> </q-checkbox>
      <p class="q-px-sm text-standard">
        By checking this box, I acknowledge that I have read and agree to the <b>Terms of Service</b>, and
        <b>Monthly Billing Terms</b> of this website and want to opt-in for the monthly billed Dream Collection Club®
      </p>
    </div>
    <p v-if="hasAgreeError" class="text-error">You must agree to terms</p>
  </q-form>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import CreditCardIcon from '@/assets/svg/credit-card.svg';
import PayPalIcon from '@/assets/svg/PayPalLogo.svg';
import PersonIcon from '@/assets/svg/person.svg';
import CalendarIcon from '@/assets/svg/calendar.svg';

const emit = defineEmits(['update:data']);

const data = reactive({
  cardNumber: '',
  cardName: '',
  cardDate: '',
  cardCvv: '',
  agreeToTerms: false,
});
watch(data, (value) => {
  emit('update:data', value);
});

const agreeToTerms = ref(false);
const hasAgreeError = ref(false);

watch(agreeToTerms, (value) => {
  data.agreeToTerms = value;
  hasAgreeError.value = !value;
});

import { useRules } from '@/utils/rules.js';
const { isOnlyDigits, isDateExpired } = useRules();

const form = ref(null);
async function validate() {
  if (!data.agreeToTerms) {
    hasAgreeError.value = true;
    return false;
  }
  return form.value.validate();
}
defineExpose({
  validate,
});

function onKeyPress(evt) {
  evt = evt ? evt : window.event;
  const charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
    evt.preventDefault();
  } else {
    return true;
  }
}
function ccFormat(value) {
  const matches = value
    .replace(/\s+/g, '')
    .replace(/[^0-9]/gi, '')
    .match(/\d{4,16}/g);
  const match = (matches && matches[0]) || '';
  const parts = [];
  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
  if (parts.length) {
    data.cardNumber = parts.join('-');
  } else {
    data.cardNumber = value;
  }
}
function expiryDateFormat(value) {
  const matches = value
    .replace(/\s+/g, '')
    .replace(/[^0-9]/gi, '')
    .match(/\d{4,16}/g);
  const match = (matches && matches[0]) || '';
  const parts = [];
  for (let i = 0, len = match.length; i < len; i += 2) {
    parts.push(match.substring(i, i + 2));
  }
  if (parts.length) {
    data.cardDate = parts.join('/');
  } else {
    data.cardDate = value;
  }
}
</script>

<style lang="sass" scoped>
button
  height: 3rem

.rounded-2x
  border-radius: 1rem

.input_inner
  padding: 0 0.05rem
</style>
