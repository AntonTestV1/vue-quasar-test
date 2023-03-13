<template>
  <q-card flat bordered class="padding_relative bg-white">
    <div class="flex row items-top no-wrap">
      <CashbackIcon class="q-mr-lg visible"  />
      <p class="q-ml-xs cons_text">
        30 days satisfaction <span class="text-weight-bold">Guareantee</span> with <span class="text-weight-bold">money back</span>
      </p>
    </div>
    <q-separator class="q-my-lg" />
    <div class="flex row items-top no-wrap">
      <ShippingIcon class="q-mr-lg visible"  />
      <p class="q-ml-xs cons_text">
        Over <span class="text-weight-bold">38,957</span> successfully <span class="text-weight-bold">shipped orders</span>
      </p>
    </div>
  </q-card>
</template>

<script setup>
import CashbackIcon from '@/assets/svg/cashback.svg';
import ShippingIcon from '@/assets/svg/shipping.svg';

</script>

<style lang="sass" scoped>
.cons_text
  font-size: 1.125rem
  //width: 70%

.visible
  overflow: visible !important
</style>

