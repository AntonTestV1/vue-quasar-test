<template>
  <div class="flex column">
    <span class="text-dark text-h4 text-weight-bolder q-mb-lg">Checkout</span>
    <div class="flex q-mt-sm text-weight-medium">
      <div class="flew row text-subtitle1" :class="{ 'text-disbaled': step === 2 }">
        <span class="round-circle q-mx-xs" :class="step === 1 ? 'bg-dark text-white' : 'round-circle__outline'">1</span>
        <span class="q-mx-sm">Information &mdash;</span>
      </div>
      <div class="flew row text-subtitle1" :class="{ 'text-disbaled': step === 1 }">
        <span class="round-circle q-mx-xs" :class="step === 2 ? 'bg-dark text-white' : 'round-circle__outline'">2</span>
        <span class="q-mx-sm">Payment</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  step: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="sass" scoped>
.round-circle
  border-radius: 50%
  width: 1.5rem
  height: 1.5rem
  display: flex
  align-items: center
  justify-content: center

  &__outline
    border: 1px solid
    border-color: $border_disabled

.text-disbaled
  color: $text_disabled
  font-size: 1rem
</style>
