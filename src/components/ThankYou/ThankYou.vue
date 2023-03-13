<template>
  <div>
    <q-card flat bordered class="flex column items-center q-pa-xl q-pa-xs-md q-mb-lg">
      <WomanThanksIcon class="q-mt-xl q-mb-md" />
      <span class="text-h5 text-weight-bold q-mt-lg">Thank you!</span>
      <p class="text-subtitle1 q-mt-lg">
        Your order <b>#{{ orderId }}</b> has been placed
      </p>
      <q-btn
        @click="$emit('back')"
        class="q-mt-xl q-mb-md text-weight-bold submit-button q-mx-auto button_rounded-2xl"
        rounded
        no-caps
        color="dark">
        <template #default>
          <ArrowRightIcon class="arrow-right reverse" />
          <span class="q-ml-sm">Back to Shop</span>
        </template>
      </q-btn>
    </q-card>

    <q-card flat class="bg-primary q-pa-lg q-px-xl q-pa-xs-md q-mt-sm">
      <div v-for="(item, n) in columns" :key="item.title">
        <div class="flex row no-wrap items-center q-my-md">
          <span class="text-standard col-xs-5 col-sm-3 ">{{ item.title }}:</span>
          <span class="text-standard">{{ item.content }}</span>
        </div>
        <q-separator v-if="n < columns.length - 1" />
      </div>
    </q-card>
  </div>
</template>

<script setup>
import WomanThanksIcon from '@/assets/svg/woman_thanks.svg';
import ArrowRightIcon from '@/assets/svg/arrow_right.svg';
import { computed } from 'vue';

const orderId = 15636561;

const props = defineProps({
  email: {
    type: String,
    default: '',
  },
  shippingAddress: {
    type: Object,
    required: true,
  },
  billingAddress: {
    type: [Object, Boolean, null],
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['back']);

const name = computed(() => {
  return props.billingAddress
    ? `${props.billingAddress.firstName} ${props.shippingAddress.lastName}`
    : `${props.shippingAddress.firstName} ${props.shippingAddress.lastName}`;
});

function getAddressString(address) {
  let result = `${address.address}`;
  if (address.city || address.zip) {
    result += `, ${address.city} ${address.zip}`;
  }
  return result;
}

const shippingAddressString = computed(() => {
  return getAddressString(props.shippingAddress);
});

const billAddressString = computed(() => {
  return props.billingAddress ? getAddressString(props.shippingAddress) : shippingAddressString.value;
});

const columns = computed(() => {
  return [
    {
      title: 'Name',
      content: name.value,
    },
    {
      title: 'Email',
      content: props.email,
    },
    {
      title: 'Ship to',
      content: shippingAddressString.value,
    },
    {
      title: 'Bill to',
      content: billAddressString.value,
    },
    {
      title: 'payment',
      content: props.paymentMethod,
    },
  ];
});
</script>

<style lang="sass" scoped>
.submit-button
  width: 213px
  height: 56px
  font-size: 1rem
  font-weight: 600
</style>
