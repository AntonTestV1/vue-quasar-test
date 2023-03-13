<template>
  <q-card flat bordered class="card">
    <div class="flex row items-center justify-start q-pa-lg no-wrap">
      <SupportIcon class="q-mr-xs-none q-mr-lg" />
      <div class="flex column">
        <p class="text-h6 text-weight-bold">24/7</p>
        <p class="text-h6 text-weight-noraml">Support</p>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import SupportIcon from '@/assets/svg/support.svg';
</script>

<style lang="sass" scoped>
.card
  height: 140px
</style>
