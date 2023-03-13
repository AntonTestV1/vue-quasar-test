<template>
  <q-page>
    <q-stepper v-model="step" ref="stepper" flat header-class="hidden">
      <q-step :name="1" title="1" :done="step > 1">
        <div class="flex container_ row">
          <div class="q-pr-md flex column col-sm-12 col-md-6">
            <CheckoutHeading class="desktop_only" :step="step" />
            <CheckoutInfo />
            <FormContact v-model:email="email" v-model:phone="phone" ref="contact" />
            <FormShippingAddress @update:address="setShippingAddress" ref="shipping" />
          </div>
          <div class="q-pl-xl flex column col-sm-12 col-md-6">
            <CheckoutHeading class="mobile-tablet_only" :step="step" />
            <BlockShowSummary v-model:showSummary="showSummary" class="mobile-tablet_only q-mb-lg" />
            <template v-if="showSummaryElements">
              <BlockOrderSummary />
              <BlockCons />
            </template>
          </div>
        </div>
      </q-step>

      <q-step :name="2" title="2" :done="step > 2">
        <div class="flex container_ row">
          <div class="q-pr-md flex column col-sm-12 col-md-6">
            <CheckoutHeading class="desktop_only" :step="step" />
            <CheckoutInfo />
            <FormPayment @update:data="setPaymentDetails" ref="payment" />
            <FormBillingAddress @update:address="setBillingAddress" ref="billing" />
          </div>
          <div class="q-pl-xl flex column col-sm-12 col-md-6">
            <CheckoutHeading class="mobile-tablet_only" :step="step" />
            <BlockShowSummary v-model:showSummary="showSummary" class="mobile-tablet_only" />
            <template v-if="showSummaryElements">
              <BlockOrderSummary />
              <BlockCons />
              <BlockJewerly />
            </template>
          </div>
        </div>
      </q-step>

      <q-step :name="3" title="3" :done="step > 3">
        <UpsellMain @submit="$refs.stepper.next()" />
      </q-step>

      <q-step :name="4" title="4" :done="step > 4">
        <div class="flex container_ wrap row">
          <div class="q-pr-md flex column col-sm-12 col-md-6 q-mt-xs-lg">
            <ThankYou
              :email="email"
              :shipping-address="shipTo"
              :billing-address="billTo"
              payment-method="credit Card" />
          </div>
          <div class="q-pl-xl flex column col-sm-12 col-md-5">
            <BlockShowSummary v-model:showSummary="showSummary" class="mobile-tablet_only q-mb-sm-lg" />
            <template v-if="showSummaryElements">
              <BlockOrderSummary hide-discount />
              <BlockCons />
            </template>
          </div>
        </div>
      </q-step>

      <template v-if="step < 3" v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="proceedToNextStep"
            class="q-mx-xs-none q-mt-md text-weight-bold submit-button button_rounded-2xl button_mobile"
            rounded
            no-caps
            color="dark"
            :label="ctaLabel">
            <template #default>
              <ArrowRightIcon class="q-ml-md arrow-right" />
            </template>
          </q-btn>
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </q-page>
</template>

<script setup>
import {computed, reactive, ref} from 'vue';
import { useQuasar } from 'quasar'
import ArrowRightIcon from '@/assets/svg/arrow_right.svg';

const $q = useQuasar()

const step = ref(1);

const showSummary = ref(false);
const showSummaryElements = computed(() => {
  return (!$q.screen.xs && !$q.screen.sm) || showSummary.value;
});
const email = ref('');
// don't need in this test part, but would be used in real life
const phone = ref('');
const shipTo = ref(null);
function setShippingAddress(data) {
  shipTo.value = data;
}
const billTo = ref(null);
function setBillingAddress(data) {
  billTo.value = data;
}
const paymentMethod = ref('');
const paymentDetails = ref(null);
function setPaymentDetails(data) {
  paymentDetails.value = data;
}

// Template refs
const contact = ref(null);
const shipping = ref(null);
const payment = ref(null);
const billing = ref(null);

const validateStep = {
  1: async () => {
    return await contact.value.validate() && await shipping.value.validate();
  },
  2: async () => {
    return await payment.value.validate() && await billing.value.validate();
  },
}

async function proceedToNextStep() {
  if (await validateStep[step.value]()) {
    step.value++;
  } else {
    console.log('validation failed')
  }
}

const navLabels = {
  1: 'Continue to Payment',
  2: 'Complete Purchase',
  3: 'Yes, I want',
};
const ctaLabel = computed(() => navLabels[step.value]);

async function backToHome() {
  // real life approach
  // await router.push('/');

  // just a mockup for current project
  step.value = 1;
}
</script>

<style lang="sass" scoped>
.container_
  padding-top: 3.75rem
  max-width: 1200px
  flex-direction: row
  @media (max-width: $breakpoint-sm-max)
    width: 90vw
    flex-direction: column-reverse !important
    padding-top: 2rem


.submit-button
  width: 25%
  height: 56px
  min-width: 300px
  @media (max-width: $breakpoint-sm-max)
    width: 100%
    min-width: 0
    height: 48px
    margin-top: 1rem

.arrow-right
  transform: scale(1.5)

.column
  flex-direction: column
  @media (max-width: $breakpoint-sm-max)
    padding: 0

.hidden
  display: none !important
</style>
