<template>
  <q-card bordered class="q-pa-lg q-pa-xs-md q-mt-lg q-mb-md" flat>
    <p class="text-weight-bold fw-18">The ultimate jewellery club</p>
    <p class="q-mt-md q-mb-lg text-standard">
      Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt. Pulvinar sed justo et viverra pellentesque.
    </p>
    <p v-for="label in labels" :key="label" class="text-standard">
      <CheckIcon class="q-mr-sm" />
      <span>{{ label }}</span>
    </p></q-card
  >
</template>
<script setup>
import CheckIcon from '@/assets/svg/check.svg';

const labels = ['Extra 10$ off!', 'Free shipping on marked club items!', 'Free returns on marked club items!'];
</script>
<style lang="sass" scoped>
.fw-18
  font-size: 1.125rem
  margin-bottom: 10px
</style>
